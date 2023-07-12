# CKGS Slot Check Script

A simple javascript for the ckgsir.com website.

## Installation

install [Tampermonkey ](https://www.tampermonkey.net) to Chrome / Firefox / Safari / Edge / Opera then import the script.


## Usage

```javascript
var main, newElement,t;
main = document.getElementById('body');
//change the date for checking in 21+November+2022 format
var html = '<b><a href="https://www.ckgsir.com/getSlot?appointmentDate=21+November+2022&RadioType=regular" target="_blank">Start Tab</a></b>';
document.querySelector(".percenage-dis").innerHTML = html;

document.querySelector('div').removeAttribute('loading');
//refresh time in milliseconds
setTimeout("location.reload(true);",300000);
