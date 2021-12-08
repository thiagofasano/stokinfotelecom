const localizacaoAtual = document.querySelector(
  ".localizacaoAtual .localidade"
);
const localizacaoBtn = document.querySelector("#localizacaoBtn");
const localizacaoOptions = document.querySelector("#localizacaoOptions");
const sectionPlanos = document.querySelector("#planos .row");
const telefone = document.querySelectorAll(".telefone");
const celular = document.querySelectorAll(".celular");

const formAjuda = document.querySelector("#form-ajuda");
const inputNome = document.querySelector("#input-nome");
const inputTelefone = document.querySelector("#input-telefone");
const submitFormAjuda = document.querySelector("#submit-form-ajuda");

let planos;

$(document).ready(function () {
  function enviaFormAjuda(event) {
    event.preventDefault();

    let formData = { name: inputNome.value, telefone: inputTelefone.value };

    $.ajax({
      type: "post",
      url: "mail.php",
      data: formData,
      success: function (html) {
        $("#feedback").html(html);
      },
    });
  }

  submitFormAjuda.addEventListener("click", (event) => enviaFormAjuda(event));

  const next = document.querySelector("#next");
  const prev = document.querySelector("#prev");
  const slideArray = [];
  for (let i = 0; i < document.querySelectorAll(".banner div").length; i++) {
    slideArray.push(
      document.querySelectorAll(".banner div")[i].dataset.background
    );
  }

  let currentSlideIndex = -1;

  function advanceSliderItem() {
    currentSlideIndex++;
    if (currentSlideIndex >= slideArray.length) {
      currentSlideIndex = 0;
    }
    document.querySelector(".banner").style.cssText =
      'background: url("' + slideArray[currentSlideIndex] + '") no-repeat;';
  }

  function previousSliderItem() {
    currentSlideIndex--;
    if (currentSlideIndex <= -1) {
      currentSlideIndex = slideArray.length - 1;
    }
    document.querySelector(".banner").style.cssText =
      'background: url("' + slideArray[currentSlideIndex] + '") no-repeat;';
  }

  next.addEventListener("click", advanceSliderItem);
  prev.addEventListener("click", previousSliderItem);

  let intervalID = setInterval(advanceSliderItem, 5000);
  advanceSliderItem();

  var new_width = $(".container").width();

  $(".header-menu ul li a").on("click", function (event) {
    event.preventDefault();
    $("html,body").animate(
      {
        scrollTop:
          new_width < 600
            ? $(this.hash).offset().top - 0
            : $(this.hash).offset().top - 10,
      },
      500
    );
  });

  $("#localizacao").modal({
    escapeClose: false,
    clickClose: false,
    showClose: false,
  });

  $("a[data-modal]").click(function (event) {
    $(this).modal();
    return false;
  });

  localizacaoBtn.addEventListener("click", defineLocalEmontaPlanos);

  function defineLocalEmontaPlanos() {
    if (!localizacaoOptions.value) return alert("Selecione uma área.");

    localizacaoAtual.innerHTML =
      localizacaoOptions.options[localizacaoOptions.selectedIndex].text;

    fetch("../assets/data/data.json")
      .then((response) => response.json())
      .then((data) => {
        for (let i = 0; celular.length > i; i++) {
          celular[i].innerHTML = data[localizacaoOptions.value].celular;
        }

        for (let i = 0; telefone.length > i; i++) {
          telefone[i].innerHTML = data[localizacaoOptions.value].telefone;
        }
      });

    fetch("../assets/data/data.json")
      .then((response) => response.json())
      .then((data) => {
        sectionPlanos.innerHTML = data[localizacaoOptions.value].planos
          .map((plano) => {
            return `
              <div class="plano ${plano.id}">
                <div class="plano-title">
                    <h3>${plano.velocidade}</h3>
                </div>
                <div class="plano-body">
                <p class="preco-antigo">R$ ${plano.valorAntigo}, 90</p>

                </div>
                <div class="plano-price">
                    <h3><small>R$</small> ${plano.valor}</h3>
                    <div>,90<span>/mês*</span></div>
                </div>
                <div class="plano-obs">
                    <ul>
                        ${plano.obs
                          .map(
                            (ob) =>
                              `<li><img src="assets/images/${ob.icone}.png" />${ob.texto}</li>`
                          )
                          .join("")}
                    </ul>
                    <a href=${
                      plano.url
                    } target="_blank" class="btn btn-secondary">Assine Já</a>
                </div> 
              </div>
                `;
          })
          .join("");
      });

    $.modal.close();
  }

  $(".resposta").hide();

  $(".pergunta").click(function () {
    $(".resposta").hide();
    $(this).next(".resposta").show();

    $(".pergunta").removeClass("perguntaAtiva");
    $(".resposta").removeClass("respostaAtiva");

    $(this).addClass("perguntaAtiva");
    $(this).next(".resposta").addClass("respostaAtiva");
  });
});
