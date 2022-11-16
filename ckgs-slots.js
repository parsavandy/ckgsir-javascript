// ==UserScript==
// @name           CKGS Slots Check by Parsa Vandy
// @namespace      https://github.com/parsavandy/ckgsir
// @author         Parsa Vandy

// @date           11.15.2022
// @version        1.0.0
// @match 	https://www.ckgsir.com/*
// @exclude 	*.css
// @exclude 	*.js
// ==/UserScript==

//***********************************************************************************************************


document.querySelector('div').removeAttribute('loading');
document.querySelector('div').setAttribute("loading", "");
/* getElementByClass
/**********************/
var main, newElement,t;
main = document.getElementById('body');
var html = '<b><a href="https://www.ckgsir.com/getSlot?appointmentDate=21+November+2022&RadioType=regular" target="_blank">Start Tab</a></b>';
document.querySelector(".percenage-dis").innerHTML = html;
//first reload safhe
t=setTimeout("attack()",300000);
var player = document.createElement('audio');
    player.src = 'https://s6.uupload.ir/filelink/cic39I07dOgz_58e7fd43a3/alarm_76i.mp3';
    player.preload = 'auto';
    player.loop = 'true';

const text = 'slot available for this day';

if (document.body.textContent.includes(text)) {
} else {
        player.play();
    clearTimeout(t);
};
//reload safhe
setTimeout("location.reload(true);",300000);
