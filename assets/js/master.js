const localizacaoAtual = document.querySelector(
  ".localizacaoAtual .localidade"
);
const localizacaoBtn = document.querySelector("#localizacaoBtn");
const localizacaoOptions = document.querySelector("#localizacaoOptions");
const sectionPlanos = document.querySelector("#planos .row");
const telefone = document.querySelectorAll(".telefone");
const celular = document.querySelectorAll(".celular");
const centralCliente = document.querySelector(".central-cliente");
const centralClienteMobile = document.querySelector("#central-mobile");

const centralClienteAcesseAgora = document.querySelector(
  ".central-acesse-agora"
);

const obsLocalidade = document.querySelector(".obs-localidade");
const footerEndereco = document.querySelector(".footer-endereco");

// Form Ajuda
const inputAjudaNome = document.querySelector("#input-ajuda-nome");
const inputAjudaTelefone = document.querySelector("#input-ajuda-telefone");
const submitFormAjuda = document.querySelector("#submit-form-ajuda");

// Form Trabalhe Conosco
const inputTrabalheNome = document.querySelector("#input-trabalhe-nome");
const inputTrabalheEmail = document.querySelector("#input-trabalhe-email");
const inputTrabalheCelular = document.querySelector("#input-trabalhe-celular");
const inputTrabalheIdade = document.querySelector("#input-trabalhe-idade");
const inputTrabalheEstadoCivil = document.querySelector(
  "#input-trabalhe-estadoCivil"
);
const inputTrabalheEndereco = document.querySelector(
  "#input-trabalhe-endereco"
);
const inputTrabalheBairro = document.querySelector("#input-trabalhe-bairro");
const inputTrabalheUf = document.querySelector("#input-trabalhe-uf");
const inputTrabalheFormacao = document.querySelector(
  "#input-trabalhe-formacao"
);
const inputTrabalheExperiencia = document.querySelector(
  "#input-trabalhe-experiencia"
);
const inputTrabalheArea = document.querySelector("#input-trabalhe-area");

const submitFormTrabalhe = document.querySelector("#submit-form-trabalhe");

let planos;

$(document).ready(function () {
  function enviaFormAjuda(event, tipo) {
    event.preventDefault();

    let formDataAjuda = {
      nome: inputAjudaNome.value,
      telefone: inputAjudaTelefone.value,
    };

    let formDataTrabalhe = {
      nome: inputTrabalheNome.value,
      email: inputTrabalheEmail.value,
      celular: inputTrabalheCelular.value,
      idade: inputTrabalheIdade.value,
      estadoCivil: inputTrabalheEstadoCivil.value,
      endereco: inputTrabalheEndereco.value,
      bairro: inputTrabalheBairro.value,
      cidade: inputTrabalheBairro.value,
      uf: inputTrabalheUf.value,
      formacao: inputTrabalheFormacao.value,
      experiencia: inputTrabalheExperiencia.value,
      area: inputTrabalheArea.value,
    };

    $.ajax({
      type: "post",
      url: tipo === "ajuda" ? "email-ajuda.php" : "email-trabalhe.php",
      data: tipo === "ajuda" ? formDataAjuda : formDataTrabalhe,
      success: function (result) {
        $(tipo === "ajuda" ? ".feedback-ajuda" : ".feedback-trabalhe")
          .fadeIn(2000)
          .removeClass("danger")
          .addClass("success")
          .html(result);

        $(tipo === "ajuda" ? ".feedback-ajuda" : ".feedback-trabalhe").fadeOut(
          5000
        );
      },
      error: function (result) {
        $(tipo === "ajuda" ? ".feedback-ajuda" : ".feedback-trabalhe")
          .fadeIn(2000)
          .removeClass("success")
          .addClass("danger")
          .html(result.responseText);

        $(tipo === "ajuda" ? ".feedback-ajuda" : ".feedback-trabalhe").fadeOut(
          5000
        );
      },
    });
  }

  submitFormAjuda.addEventListener("click", (event) =>
    enviaFormAjuda(event, "ajuda")
  );
  submitFormTrabalhe.addEventListener("click", (event) =>
    enviaFormAjuda(event, "trabalhe")
  );

  const next = document.querySelector("#next");
  const prev = document.querySelector("#prev");
  const slideArray = [];
  for (let i = 0; i < document.querySelectorAll("#banner div").length; i++) {
    slideArray.push(
      document.querySelectorAll("#banner div")[i].dataset.background
    );
  }

  let currentSlideIndex = -1;

  function advanceSliderItem() {
    currentSlideIndex++;
    if (currentSlideIndex >= slideArray.length) {
      currentSlideIndex = 0;
    }
    document.querySelector("#banner").style.cssText =
      'background: url("' + slideArray[currentSlideIndex] + '") no-repeat;';
  }

  function previousSliderItem() {
    currentSlideIndex--;
    if (currentSlideIndex <= -1) {
      currentSlideIndex = slideArray.length - 1;
    }
    document.querySelector("#banner").style.cssText =
      'background: url("' + slideArray[currentSlideIndex] + '") no-repeat;';
  }

  next.addEventListener("click", advanceSliderItem);
  prev.addEventListener("click", previousSliderItem);

  setInterval(advanceSliderItem, 5000);
  advanceSliderItem();

  var new_width = $(".container").width();

  $("nav ul li a.scroll").on("click", function (event) {
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
    if (!localizacaoOptions.value) {
      $(".feedback-localidade")
        .fadeIn(2000)
        .addClass("danger")
        .html("Selecione uma localidade para continuar.");

      $(".feedback-localidade").fadeOut(2000);

      return "";
    }

    localizacaoAtual.innerHTML =
      localizacaoOptions.options[localizacaoOptions.selectedIndex].text;

    fetch("../assets/data/data.json")
      .then((response) => response.json())
      .then((data) => {
        centralCliente.setAttribute(
          "href",
          data[localizacaoOptions.value].central
        );

        centralClienteMobile.setAttribute(
          "href",
          data[localizacaoOptions.value].central
        );

        centralClienteAcesseAgora.setAttribute(
          "href",
          data[localizacaoOptions.value].central
        );

        obsLocalidade.innerHTML = data[localizacaoOptions.value].obs;

        footerEndereco.innerHTML = data[localizacaoOptions.value].endereco;

        for (let i = 0; celular.length > i; i++) {
          celular[i].innerHTML = data[localizacaoOptions.value].celular;
        }

        for (let i = 0; telefone.length > i; i++) {
          telefone[i].innerHTML = data[localizacaoOptions.value].telefone;
        }

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
                  <div>,90<span>/m??s*</span></div>
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
                  } target="_blank" class="btn btn-secondary">Assine J??</a>
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

  $("#menu-mobile").click(function () {
    $(this).next("ul").toggle();
  });
});
