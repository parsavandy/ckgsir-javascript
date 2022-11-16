// ==UserScript==
// @name           CKGS Slots Check by Parsa Vandy
// @namespace      https://github.com/parsavandy/ckgsir
// @author         Parsa Vandy
// @description    :D
// @version        1.0.0
// @match 	https://www.ckgsir.com/*
// @exclude 	*.css
// @exclude 	*.js
// ==/UserScript==

//***********************************************************************************************************


/* getElementByClass
/**********************/

var player = document.createElement('audio');
    player.src = 'https://od.lk/s/OTRfNTY1MjU0MDNf/alarm.mp3';
    player.preload = 'auto';
    player.loop = 'true';

const text = 'slot available for this day';

if (document.body.textContent.includes(text)) {
} else {
   player.play();
   clearTimeout(t);
};

var main, newElement,t;
main = document.getElementById('body');

var html = '<b><a href="https://www.ckgsir.com/getSlot?appointmentDate=21+November+2022&RadioType=regular" target="_blank">Start Tab</a></b>';
document.querySelector(".percenage-dis").innerHTML = html;

document.querySelector('div').removeAttribute('loading');

setTimeout("location.reload(true);",300000);
