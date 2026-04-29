var banners = ["Os melhores do Brasil!", "Qualidade e preço baixo!"];
var bannerAtual = 0;

function trocaBanner() {
  bannerAtual = (bannerAtual + 1) % banners.length;
  document.querySelector('#mensagem').textContent = banners[bannerAtual];
}

setInterval(trocaBanner, 2000);
