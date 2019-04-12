var htmlToLoad = '<div><div id="manywho">';
htmlToLoad += '<div id="loader" class="mw-bs" style="width: 100%; height: 100%;">';
htmlToLoad += '<div class="wait-container">';
htmlToLoad += '<div class="wait-spinner"></div>';
htmlToLoad += '</div></div></div></div>';
document.body.innerHTML = htmlToLoad;

var link = document.createElement("link");
link.href = "https://raw.githubusercontent.com/mayrund/manywho/master/index.css"
link.type = "text/css";
link.rel = "stylesheet";
link.media = "screen,print";
document.getElementsByTagName("div")[0].appendChild(link);


var import1 = document.createElement('script');
import1.src = 'https://assets.manywho.com/js/vendor/jquery-2.1.4.min.js';
document.getElementsByTagName("div")[0].appendChild(import1);



var import2 = document.createElement('script');
import2.src = 'hhttps://raw.githubusercontent.com/mayrund/manywho/master/manywho.js';
document.getElementsByTagName("div")[0].appendChild(import2);

var import3 = document.createElement('script');
import3.src = 'https://assets.manywho.com/js/loader.min.js';
document.getElementsByTagName("div")[0].appendChild(import3);


