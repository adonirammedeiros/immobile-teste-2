document.addEventListener("DOMContentLoaded", function(event) {
   document.body.requestFullscreen();

    function getElementByXpath(path) {
        return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
      }


      let verdeImmobile = "#388275";
      let sublinhado = `thick solid ${verdeImmobile}`
      let anuncio = getElementByXpath("//div[text()='Anuncio']")
      let tabAnuncio = getElementByXpath("//div[text()='ANUNCIO']")
      let tabObrigatorio = getElementByXpath("//div[text()='OBRIGATORIOS']")
      let localizacao = getElementByXpath("//div[text()='Localizacao']")
      let tabLocalizacao = getElementByXpath("//div[text()='LOCALIZACAO']")
      let metadeDaJanela = window.innerHeight / 2;
      tabObrigatorio.style.borderBottom = sublinhado
      
      window.onscroll = function(){
            tabObrigatorio.style.borderBottom = null
            tabAnuncio.style.borderBottom = null
            tabLocalizacao.style.borderBottom = null

           if(localizacao.getBoundingClientRect().top < metadeDaJanela){
             tabLocalizacao.style.borderBottom = sublinhado
           }else if(anuncio.getBoundingClientRect().top < metadeDaJanela){              
              tabAnuncio.style.borderBottom = sublinhado
           } else{            
                tabObrigatorio.style.borderBottom = sublinhado
           }
      }

    var comboTransacao = document.querySelectorAll(".FlairBuilderWidget.ComboBox>select")[3]
    comboTransacao.onchange = function(){
        let botaoSalvar = document.querySelectorAll(".FlairBuilderWidget.Image")[1]
        botaoSalvar.style.top = null
        botaoSalvar.classList.add("rodape")
    }  
});
