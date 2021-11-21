$(document).ready(function () {
  // $.getJSON("planos.json", function(data){
  //    planos = data;
  //    console.log(planos);
  // });

  // Scroll

  $(".plano5 , .plano6").hide();
  $(".televendas-rj , .televendas-bahia").hide();
  $(".atendimento-rj , .atendimento-bahia").hide();

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

  $("#localizacaoOk").on("click", function () {
    if ($("#localizacaoOptions option:selected").text() == "Bahia") {
      $("body").removeClass("rj");
      $("body").addClass("bahia");
      $(".plano5 , .plano6").hide();
      $(".televendas-ipase").hide();
      $(".atendimento-ipase").hide();
      $(".televendas-itatiaia").hide();
      $(".atendimento-itatiaia").hide();
      $(".televendas-bahia").show();
      $(".atendimento-bahia").show();

      var plano1Velocidade = "30 MB ";
      var plano2Velocidade = "50 MB ";
      var plano3Velocidade = "100 MB ";
      var plano4Velocidade = "200 MB ";

      var plano1Valor = 79;
      var plano2Valor = 99;
      var plano3Valor = 119;
      var plano4Valor = 179;

      $(".plano1 .plano-title h3, .selecionado-plano1-velocidade").text(
        plano1Velocidade
      );
      $(".plano2 .plano-title h3, .selecionado-plano2-velocidade").text(
        plano2Velocidade
      );
      $(".plano3 .plano-title h3, .selecionado-plano3-velocidade").text(
        plano3Velocidade
      );
      $(".plano4 .plano-title h3, .selecionado-plano4-velocidade").text(
        plano4Velocidade
      );

      $(".plano1 .plano-price h3, .selecionado-plano1-preco").text(plano1Valor);
      $(".plano2 .plano-price h3, .selecionado-plano2-preco").text(plano2Valor);
      $(".plano3 .plano-price h3, .selecionado-plano3-preco").text(plano3Valor);
      $(".plano4 .plano-price h3, .selecionado-plano4-preco").text(plano4Valor);

      $(".localizacaoAtual span").text("Bahia");
      $.modal.close();
    } else if (
      $("#localizacaoOptions option:selected").text() == "RJ - Itatiaia"
    ) {
      $("body").removeClass("bahia");
      $("body").addClass("rj");
      $(".plano5").show();
      $(".televendas-itatiaia").show();
      $(".atendimento-itatiaia").show();
      $(".televendas-ipase").hide();
      $(".atendimento-ipase").hide();
      $(".televendas-bahia").hide();
      $(".atendimento-bahia").hide();

      var plano1Velocidade = "20 MB ";
      var plano2Velocidade = "70 MB ";
      var plano3Velocidade = "100 MB ";
      var plano4Velocidade = "200 MB ";
      var plano5Velocidade = "300 MB ";

      var plano1Valor = 69;
      var plano2Valor = 79;
      var plano3Valor = 99;
      var plano4Valor = 105;
      var plano5Valor = 129;

      $(".plano1 .plano-title h3, .selecionado-plano1-velocidade").text(
        plano1Velocidade
      );
      $(".plano2 .plano-title h3, .selecionado-plano2-velocidade").text(
        plano2Velocidade
      );
      $(".plano3 .plano-title h3, .selecionado-plano3-velocidade").text(
        plano3Velocidade
      );
      $(".plano4 .plano-title h3, .selecionado-plano4-velocidade").text(
        plano4Velocidade
      );
      $(".plano5 .plano-title h3, .selecionado-plano5-velocidade").text(
        plano5Velocidade
      );

      $(".plano1 .plano-price h3, .selecionado-plano1-preco").text(plano1Valor);
      $(".plano2 .plano-price h3, .selecionado-plano2-preco").text(plano2Valor);
      $(".plano3 .plano-price h3, .selecionado-plano3-preco").text(plano3Valor);
      $(".plano4 .plano-price h3, .selecionado-plano4-preco").text(plano4Valor);
      $(".plano5 .plano-price h3, .selecionado-plano5-preco").text(plano5Valor);
      $(".localizacaoAtual span").text("RJ - Itaiaia");
      $.modal.close();
    } else if (
      $("#localizacaoOptions option:selected").text() == "RJ - Ipase"
    ) {
      $("body").removeClass("bahia");
      $("body").addClass("rj");
      $(".plano5, .plano6").show();
      $(".televendas-ipase").show();
      $(".atendimento-ipase").show();
      $(".televendas-itatiaia").hide();
      $(".atendimento-itatiaia").hide();
      $(".televendas-bahia").hide();
      $(".atendimento-bahia").hide();

      var plano1Velocidade = "30 MB ";
      var plano2Velocidade = "50 MB ";
      var plano3Velocidade = "70 MB ";
      var plano4Velocidade = "100 MB ";
      var plano5Velocidade = "200 MB ";
      var plano6Velocidade = "300 MB ";

      var plano1Valor = 69;
      var plano2Valor = 99;
      var plano3Valor = 119;
      var plano4Valor = 139;
      var plano5Valor = 159;
      var plano6Valor = 199;

      $(".plano1 .plano-title h3, .selecionado-plano1-velocidade").text(
        plano1Velocidade
      );
      $(".plano2 .plano-title h3, .selecionado-plano2-velocidade").text(
        plano2Velocidade
      );
      $(".plano3 .plano-title h3, .selecionado-plano3-velocidade").text(
        plano3Velocidade
      );
      $(".plano4 .plano-title h3, .selecionado-plano4-velocidade").text(
        plano4Velocidade
      );
      $(".plano5 .plano-title h3, .selecionado-plano5-velocidade").text(
        plano5Velocidade
      );
      $(".plano6 .plano-title h3, .selecionado-plano6-velocidade").text(
        plano6Velocidade
      );

      $(".plano1 .plano-price h3, .selecionado-plano1-preco").text(plano1Valor);
      $(".plano2 .plano-price h3, .selecionado-plano2-preco").text(plano2Valor);
      $(".plano3 .plano-price h3, .selecionado-plano3-preco").text(plano3Valor);
      $(".plano4 .plano-price h3, .selecionado-plano4-preco").text(plano4Valor);
      $(".plano5 .plano-price h3, .selecionado-plano5-preco").text(plano5Valor);
      $(".plano6 .plano-price h3, .selecionado-plano6-preco").text(plano6Valor);
      $(".localizacaoAtual span").text("RJ - Ipase");
      $.modal.close();
    } else {
      return false;
    }
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