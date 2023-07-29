window.addEventListener('DOMContentLoaded', function() {
    var headerBottom = document.getElementById('header_bottom');
    var buttonHeaders = document.getElementsByClassName('button_header');
    var prevScrollTop = 0;
  
    function handleScroll() {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      var windowWidth = window.innerWidth || document.documentElement.clientWidth;
      var scrollUp = scrollTop < prevScrollTop;
  
      if (windowWidth >= 768) {
        if (scrollTop === 0) {
          // No topo da página, torna o header transparente
          headerBottom.style.backgroundColor = 'transparent';
          headerBottom.style.borderBottom = 'none'
          headerBottom.style.display = 'flex';
  
          for (var i = 0; i < buttonHeaders.length; i++) {
            buttonHeaders[i].style.color = '#3C15F4';
          }
        } else if (scrollUp) {
          // Scroll para cima, torna o header azul
          headerBottom.style.display = 'flex';
          headerBottom.style.backgroundColor = 'white';
          headerBottom.style.borderBottom = '1px solid rgb(240, 240, 240)'
  
          for (var i = 0; i < buttonHeaders.length; i++) {
            buttonHeaders[i].style.color = '#3C15F4';
          }
        } else {
          // Scroll para baixo, torna o header transparente
          headerBottom.style.display = 'none';
          headerBottom.style.backgroundColor = 'transparent';
          headerBottom.style.boxShadow = 'none';
  
          for (var i = 0; i < buttonHeaders.length; i++) {
            buttonHeaders[i].style.color = '#3C15F4';
          }
        }
      } else { // Quando a largura da janela é menor que 768px (fixo com cor azul e botões brancos)
        headerBottom.style.backgroundColor = 'white';
        headerBottom.style.boxShadow = 'none';
        headerBottom.style.display = 'flex';
  
        for (var i = 0; i < buttonHeaders.length; i++) {
          buttonHeaders[i].style.color = 'white';
        }
      }
  
      prevScrollTop = scrollTop;
    }
  
    handleScroll(); // Executa a função uma vez para definir o estado inicial
  
    window.addEventListener('scroll', handleScroll); // Adiciona o evento de rolagem
    window.addEventListener('resize', handleScroll); // Adiciona o evento de redimensionamento
  });
  
  
  
  
  
  
  
  
  

//efeito em cima do header  


var header = document.getElementById("header");
var navigationHeader = document.getElementById("navigation_header")
var content = document.getElementById("content")
var showSidebar = false;

function toggleSidebar() {

    showSidebar = !showSidebar
    if (showSidebar) {

        navigationHeader.style.marginLeft = '-10vw';
        navigationHeader.style.animationName = 'showSidebar'
        content.style.filter = 'blur(2px)'

    } else {
        navigationHeader.style.marginLeft = '-100vw';
        navigationHeader.style.animationName = ''
        content.style.filter = ''
    }
}

function closedSideBar() {
    if (showSidebar) {
        toggleSidebar();
    }


}
window.addEventListener('resize', function (event) {

    if (window.innerWidth > 768 && showSidebar) {
        toggleSidebar()
    }

});


$(document).ready(function () {
    if (window.location.hash) {
        window.location.hash = "";
    }
});

$(document).ready(function () {
    $('a.scroll-link').click(function (e) {
        e.preventDefault();
        var target = $(this.hash);
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 1000);
        window.history.replaceState(null, null, window.location.pathname + window.location.search);
    });
});