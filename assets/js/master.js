const localizacaoBtn = document.querySelector("#localizacaoBtn");
const localizacaoOptions = document.querySelector("#localizacaoOptions");
const sectionPlanos = document.querySelector("#planos .row");
let planos;

fetch("../assets/data/planos.json")
  .then((response) => response.json())
  .then((data) => (planos = data));

localizacaoBtn.addEventListener("click", defineLocalidade);

function defineLocalidade() {
  if (!localizacaoOptions.value) return alert("Selecione uma área.");

  montaPlanos(localizacaoOptions.value);

  $.modal.close();
}

function montaPlanos(localidade) {
  sectionPlanos.innerHTML = planos[localidade].map((plano) => {
    return `
      <div class="plano ${plano.id}">
        <div class="plano-title">
            <h3>${plano.velocidade}</h3>
        </div>
        <div class="plano-body">
        </div>
        <div class="plano-price">
            <h3>${plano.valor}</h3>
            <div>,90<span>/mês</span></div>
        </div>
        <div class="plano-obs">
            <a href="#assine" rel="modal:open" id="${plano.id}" class="btn btn-secondary"></a>
        </div> 
      </div>
        `;
  });
}

$(document).ready(function () {
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

  $("a[data-modal]")
    .on("show", function () {
      $("body").addClass("modal-open");
    })
    .on("hidden", function () {
      $("body").removeClass("modal-open");
    });

  $(
    ".selecionado-plano1 , .selecionado-plano2, .selecionado-plano3, .selecionado-plano4, .selecionado-plano5, .selecionado-plano6"
  ).hide();

  $(".assine-ja").on("click", function () {
    $(
      ".selecionado-plano1 , .selecionado-plano2, .selecionado-plano3, .selecionado-plano4, .selecionado-plano5, .selecionado-plano6"
    ).hide();
    var planoEscolhido = $(this).attr("id");
    $(".selecionado-" + planoEscolhido).show();
    var planoTexto = $(".selecionado-" + planoEscolhido).text();
    $("#planoText").val(planoTexto);
  });

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
