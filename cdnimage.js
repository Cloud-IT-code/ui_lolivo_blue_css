//<![CDATA[
var images = document.getElementsByTagName('img');
  for (var i = 0; i < images.length; i++) {
    images[i].src = images[i].src.replace(/.*?:\/\//g , "https://cdn.staticaly.com/img/") + "?format=webp";
  };
//]]>
