import"./assets/styles-fd559719.js";import{i as m}from"./assets/vendor-651d7991.js";const s=document.querySelector(".form");s.addEventListener("submit",o=>{o.preventDefault();const t=new FormData(s),i={};t.forEach((e,r)=>{i[r]=e}),a(i).then(e=>n(e)).catch(e=>n(e,!0)),s.reset()});function a({delay:o,state:t}){return new Promise((i,e)=>{setTimeout(()=>{t==="fulfilled"?i(`✅ Fulfilled promise in ${o}ms`):e(`❌ Rejected promise in ${o}ms`)},o)})}function n(o,t=!1){m.show({title:t?"Error":"OK",titleColor:"#FFF",titleSize:"16px",message:o,messageColor:"#FFF",messageSize:"16px",position:"topCenter",backgroundColor:t?"#EF4040":"#59A10D",iconUrl:t?"../img/octagon.svg":"../img/check.svg",progressBarColor:t?"#FFBEBE":"#B5EA7C",timeout:1e4,targetFirst:!1,close:!1,buttons:[[`<button type="button" id="izi-close-button">
                 <img src="../img/x.svg" alt="" width="16px" height="16px" />
              </button>`,function(i,e){i.hide({},e,"buttonName")}]]})}
//# sourceMappingURL=commonHelpers2.js.map
