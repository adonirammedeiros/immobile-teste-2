document.addEventListener("DOMContentLoaded", function(event) {
    montarPrototipo();
   
    var observer = new MutationObserver(function(mutations) {      
          montarPrototipo();
    });    
    observer.observe(document.body, { childList: true,subtree:true });
});

function montarPrototipo(){
    if(document.querySelector("#flairbuilder_html_viewer").style.height != "3050px")
      return;

    function getElementByXpath(path) {
      return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    }  

    function exibirMensagem(elementoMensagem){
      elementoMensagem.style.display = "block";
      elementoMensagem.style.position = null;
      elementoMensagem.style.top = "280px";
      
      setTimeout(function(){
          elementoMensagem.style.display = "none";
      },4000);
    }

    try{
        let cabecalho = document.querySelectorAll(".FlairBuilderWidget.FlairComponentsGroup")[0]
        cabecalho.classList.add("cabecalho")

        let rodape = document.querySelectorAll(".FlairBuilderWidget.FlairComponentsGroup")[3]
        rodape.style.top = null;
        rodape.classList.add("rodape")


        let anuncio = getElementByXpath("//div[text()='Anuncio']")
        let tabAnuncio = getElementByXpath("//div[text()='ANUNCIO']")

        let tabObrigatorio = getElementByXpath("//div[text()='OBRIGATORIOS']")

        let localizacao = getElementByXpath("//div[text()='Localizacao']")
        let tabLocalizacao = getElementByXpath("//div[text()='LOCALIZACAO']")

        let valores = getElementByXpath("//div[text()='Valores']")
        let tabValores = getElementByXpath("//div[text()='V']")

        let mensagemDeGravadoComSucesso = document.querySelectorAll('.FlairBuilderWidget.FlairComponentsGroup[style*="display: none"]')[0]
        mensagemDeGravadoComSucesso.style.display = "none";

        let botaoSalvar = document.querySelectorAll(".FlairBuilderWidget.Rectangle > svg > rect")[3]
        let textoBotaoSalvar = document.querySelectorAll(".FlairBuilderWidgetLabel")[16]
        let iconeBotaoSalvar = document.querySelectorAll(".icon-CheckMark")[0]
        let areaDeClickDoBotaoSalvar = document.querySelectorAll(".textHolder")[3]
        areaDeClickDoBotaoSalvar.onclick = function(){
          exibirMensagem(mensagemDeGravadoComSucesso)  
        }

        botaoSalvar.classList.add("botao-desabilitado")
        textoBotaoSalvar.classList.add("texto-botao-desabilitado")
        iconeBotaoSalvar.classList.add("texto-botao-desabilitado")
        
        let metadeDaJanela = window.innerHeight / 2;
        
        window.onscroll = function(){
              tabObrigatorio.classList.remove("sublinhado")
              tabAnuncio.classList.remove("sublinhado")
              tabLocalizacao.classList.remove("sublinhado")
              tabValores.classList.remove("sublinhado")

            if(valores.getBoundingClientRect().top < metadeDaJanela){
              tabValores.classList.add("sublinhado")
            }else if(localizacao.getBoundingClientRect().top < metadeDaJanela){
              tabLocalizacao.classList.add("sublinhado")
            }else if(anuncio.getBoundingClientRect().top < metadeDaJanela){              
                tabAnuncio.classList.add("sublinhado")
            }else{
              tabObrigatorio.classList.add("sublinhado")
            }
        }

      let comboTransacao = document.querySelectorAll(".FlairBuilderWidget.ComboBox>select")[6]
      comboTransacao.onchange = function(){
        if(comboTransacao.value != "Selecione..."){
          botaoSalvar.classList.remove("botao-desabilitado")
          textoBotaoSalvar.classList.remove("texto-botao-desabilitado")
          iconeBotaoSalvar.classList.remove("texto-botao-desabilitado")

          botaoSalvar.classList.add("botao-habilitado")
          textoBotaoSalvar.classList.add("botao-habilitado")
          iconeBotaoSalvar.classList.add("botao-habilitado")      
          rodape.onclick = function(){exibirMensagem(mensagemDeGravadoComSucesso)}
        }else{
          botaoSalvar.classList.add("botao-desabilitado")
          textoBotaoSalvar.classList.add("texto-botao-desabilitado")
          iconeBotaoSalvar.classList.add("texto-botao-desabilitado")

          botaoSalvar.classList.remove("botao-habilitado")
          textoBotaoSalvar.classList.remove("botao-habilitado")
          iconeBotaoSalvar.classList.remove("botao-habilitado")              
          rodape.onclick = null
        }
      }  
    }catch(e){
      console.log(e)
    }
}