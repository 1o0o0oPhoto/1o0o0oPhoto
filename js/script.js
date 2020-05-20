
var contentCont = document.getElementById('content_conteiner');
var img = document.getElementById('content_conteiner').getElementsByTagName('img')[100];
var photoCont = document.getElementById('content_conteiner').getElementsByTagName('div')[100];
var widthImg;
var heightImg;
var size;
var screnHight = screen.height;
var screnWidth = screen.width;
var numberImgContentContWidht;
var widthMax = [100];
var heightMax = [100];
var photoContWidth;
var photoContHeight;
var numberImgContentContWidht;

window.onload = function(){

  if (screnWidth <= 1920 && screnWidth > 1050) {
    size = 3;
    numberImgContentContWidht = 3;
  }
  else if (screnWidth < 1050) {
    size = 2;
    numberImgContentContWidht = 1;
  }


    try {
      var author = document.getElementById('content_conteiner').getElementsByTagName('a')[100];
      for (var i = 0; i < 100; i++) {


        img = document.getElementById('content_conteiner').getElementsByTagName('img')[i];
        widthImg = img.width / size;
        heightImg = img.height / size;

        if(img && img.style) {
            img.style.width = widthImg + "px";
            img.style.height = heightImg + "px";
          }
           widthMax[i] = widthImg;
           heightMax[i]= heightImg;
           author = document.getElementById('content_conteiner').getElementsByClassName('intagram_link')[i];
           author.innerHTML = 'Author';


         }
      } catch {
        photoContWidth = Math.max(...widthMax);
        photoContHeight = Math.max(...heightMax);

            for (var i = 0; i < 100; i++) {
              photoCont = document.getElementById('content_conteiner').getElementsByTagName('div')[i];
              if(photoCont && photoCont.style) {
                photoCont.style.width = photoContWidth + "px";
                photoCont.style.height = photoContHeight + "px";
                }
            }
          }



      // НАДО ПОМЕНЯТЬ, ХЗ КАК НО ПРИДУМАЙ, НЕ ТУПОЙ))



      var contentCont = document.getElementById('content_conteiner');
      var contentContWidh = (photoContWidth + (20 * 2)) * numberImgContentContWidht;
      if(contentCont && contentCont.style){
        contentCont.style.width = contentContWidh + "px";
      }


      var contentContMarginTopCoef = 25;
      var contentContMarginTopCoefInProcent = (screnHight * contentContMarginTopCoef) / 100;

      var titleTop = document.getElementById('title');
      var contentContMarginTop = document.getElementById('content_conteiner');

      contentContMarginTop.style.marginTop = contentContMarginTopCoefInProcent + "px";

      var titleTopPozition = contentContMarginTopCoefInProcent / 2;
      if(titleTop && titleTop.style){
        titleTop.style.top = titleTopPozition + "px";
      }
};
