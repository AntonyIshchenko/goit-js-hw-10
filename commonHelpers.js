import"./assets/styles-fd559719.js";import{f as h,i as b}from"./assets/vendor-651d7991.js";let c;const i=document.querySelector("#datetime-picker"),a=document.querySelector("[data-start]"),y={days:document.querySelector("[data-days]"),hours:document.querySelector("[data-hours]"),minutes:document.querySelector("[data-minutes]"),seconds:document.querySelector("[data-seconds]")},l={enableTime:!0,time_24hr:!0,minuteIncrement:1,onClose(t){c=t[0];const e=Date.now()<c.getTime();e||b.show({title:"Error",titleColor:"#FFF",titleSize:"16px",message:"Please choose a date in the future",messageColor:"#FFF",messageSize:"16px",position:"topCenter",backgroundColor:"#EF4040",iconUrl:"../img/octagon.svg",timeout:5e5,close:!1,buttons:[[`<button type="button" id="izi-close-button">
                 <img src="../public/x.svg" alt="" width="16px" height="16px" />
              </button>`,function(s,o){s.hide({},o,"buttonName")}]]}),n(a,e)}};n(a);i.addEventListener("focus",()=>{l.defaultDate=new Date,h(i,l)});a.addEventListener("click",()=>{let t=0,e={};const s=setInterval(()=>{if(t=c.getTime()-Date.now(),t>0){e=g(t);for(const[o,r]of Object.entries(y))r.textContent=o==="days"&&e[o]>99?e[o]:r.textContent=String(e[o]).padStart(2,"0")}else clearInterval(s),n(i,!0)},1e3);n(a),n(i)});function n(t,e=!1){t.classList.contains("disabled-element")===e&&t.classList.toggle("disabled-element"),t.classList.contains("disabled-element")&&t.blur()}function g(t){const u=Math.floor(t/864e5),d=Math.floor(t%864e5/36e5),m=Math.floor(t%864e5%36e5/6e4),f=Math.floor(t%864e5%36e5%6e4/1e3);return{days:u,hours:d,minutes:m,seconds:f}}
//# sourceMappingURL=commonHelpers.js.map
