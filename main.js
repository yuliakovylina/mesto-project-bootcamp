(()=>{"use strict";var e={525:(e,t,r)=>{e.exports=r.p+"3571b011bb0d6f8028be.jpg"},254:(e,t,r)=>{e.exports=r.p+"a1817c0d78d42f3b3a80.jpg"},55:(e,t,r)=>{e.exports=r.p+"b9d4920e0d6e3f64cba3.jpg"},435:(e,t,r)=>{e.exports=r.p+"6a25d9b7b94e5795a839.jpg"},189:(e,t,r)=>{e.exports=r.p+"52601778433504794021.jpg"},539:(e,t,r)=>{e.exports=r.p+"22b559c6ee58991acdfc.jpg"}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var c=t[n]={exports:{}};return e[n](c,c.exports,r),c.exports}r.m=e,r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.p="",r.b=document.baseURI||self.location.href,(()=>{var e={formSelector:".edit-form",inputSelector:".edit-form__input",submitButtonSelector:".edit-form__submit-button",inactiveButtonClass:"edit-form__submit-button_inactive",inputErrorClass:"edit-form__input_type_error",errorClass:"edit-form__input-error_active"},t=function(e,t,r){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.classList.remove(r.inactiveButtonClass),t.disabled=!1):(t.classList.add(r.inactiveButtonClass),t.disabled=!0)},n=document.querySelector("#card").content,o=Array.from(document.querySelectorAll(".popup")),c=(document.querySelectorAll(".popup__close-button"),document.querySelector("#edit-popup")),a=document.querySelector("#card-popup"),i=document.querySelector("#avatar-popup"),u=document.querySelector(".profile__edit-button"),l=document.querySelector(".popup__close-button"),s=document.forms.editForm,d=document.forms.cardForm,f=document.forms.avatarForm,m=document.querySelector(".profile__avatar-edit"),p=i.querySelector("#avatar-close"),v=document.querySelector(".profile__info-name"),_=document.querySelector(".profile__info-job"),b=document.querySelector(".profile__avatar"),y=s.querySelector(".edit-form__input_name"),h=s.querySelector(".edit-form__input_job"),S=d.querySelector(".edit-form__input_placeName"),g=d.querySelector(".edit-form__input_placeSrc"),q=f.querySelector(".edit-form__input_avatarName"),L=(a.querySelector(".edit-form__submit-button"),document.querySelector(".profile__add-button")),k=document.querySelector("#card-close"),E=document.querySelector(".cards"),C=document.querySelector("#image-popup"),x=C.querySelector(".popup__image-container"),j=C.querySelector(".popup__image-title"),U=C.querySelector(".popup__close-button_enlarge"),w=c.querySelector(".edit-form__submit-button"),A=a.querySelector(".edit-form__submit-button"),O=i.querySelector(".edit-form__submit-button"),T={baseUrl:"https://nomoreparties.co/v1/wbf-cohort-4",headers:{authorization:"bc836201-c50e-423f-a4e7-9b2b8103e92a","Content-Type":"application/json"}},P=function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))};function R(e){e.target===e.currentTarget&&D(e.target)}function N(e){"Escape"===e.key&&o.forEach(D)}function B(e){var t;e.classList.add("popup_opened"),t=e,document.addEventListener("keydown",N),t.addEventListener("click",R)}function D(e){var t;t=e,document.removeEventListener("keydown",N),t.removeEventListener("click",R),e.classList.remove("popup_opened")}var I=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"Сохранить",n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"Сохранение...";t.textContent=e?n:r};function F(e){e.target.closest(".card").remove()}var J=function(e){E.prepend(function(e){var t=n.querySelector(".card").cloneNode(!0);t.id=e._id;var r=t.querySelector(".card__top"),o=t.querySelector(".card__text");o.textContent=e.name,r.src=e.link,r.alt=e.name,r.addEventListener("click",(function(){x.src=r.src,x.alt=o.textContent,j.textContent=o.textContent,B(C)}));var c=t.querySelector(".card__like-button");c.addEventListener("click",H),t.querySelector(".card__like-counter").textContent=e.likes.length,e.likes.forEach((function(e){return z(e._id,c)}));var a=t.querySelector(".card__delete");return a.addEventListener("click",F),G(e,a),t}(e))};function H(e){var t,r=e.target.closest(".card"),n=r.querySelector(".card__like-counter");e.target.classList.contains("card__like-button_active")?(t=r.id,fetch("".concat(T.baseUrl,"/cards/likes/")+t,{method:"DELETE",headers:T.headers}).then((function(e){return P(e)}))).then((function(t){e.target.classList.remove("card__like-button_active"),M(t._id,t.likes.length,n,r.id)})).catch((function(e){console.log("Ошибка: ".concat(e))})):function(e){return fetch("".concat(T.baseUrl,"/cards/likes/")+e,{method:"PUT",headers:T.headers}).then((function(e){return P(e)}))}(r.id).then((function(t){M(t._id,t.likes.length,n,r.id),e.target.classList.add("card__like-button_active")})).catch((function(e){console.log("Ошибка: ".concat(e))}))}var M=function(e,t,r,n){n===e&&(r.textContent=t)},z=function(e,t){e===v.id&&t.classList.add("card__like-button_active")},G=function(e,t){e.owner._id===v.id?(t.disabled=!1,t.classList.remove("card__delete_inactive")):(t.disabled=!0,t.classList.add("card__delete_inactive"))};function $(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}new URL(r(525),r.b),new URL(r(254),r.b),new URL(r(55),r.b),new URL(r(435),r.b),new URL(r(189),r.b),new URL(r(539),r.b),s.addEventListener("submit",(function(e){var t,r;e.preventDefault(),I(!0,w),(t=y.value,r=h.value,fetch("".concat(T.baseUrl,"/users/me"),{method:"PATCH",headers:T.headers,body:JSON.stringify({name:t,about:r})}).then((function(e){return P(e)}))).then((function(e){v.id=e._id,_.textContent=e.about,v.textContent=e.name,D(c)})).catch((function(e){console.log("Ошибка: ".concat(e))})).finally((function(){I(!1,w)})),e.target.reset()})),u.addEventListener("click",(function(){y.value=v.textContent,h.value=_.textContent,B(c)})),l.addEventListener("click",(function(){D(c)})),L.addEventListener("click",(function(){B(a)})),k.addEventListener("click",(function(){D(a)})),d.addEventListener("submit",(function(e){var t;e.preventDefault(),I(!0,A,"Создать","Создание..."),(t={name:"".concat(S.value),link:"".concat(g.value)},fetch("".concat(T.baseUrl,"/cards"),{method:"POST",headers:T.headers,body:JSON.stringify({name:t.name,link:t.link})}).then((function(e){return P(e)}))).then((function(t){J(t),e.target.reset(),D(a)})).catch((function(e){console.log("Ошибка: ".concat(e))})).finally((function(){I(!1,A,"Создать","Создание...")}))})),U.addEventListener("click",(function(){D(C)})),f.addEventListener("submit",(function(e){var t;e.preventDefault(),I(!0,O),(t=q.value,fetch("".concat(T.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:T.headers,body:JSON.stringify({avatar:t})}).then((function(e){return P(e)}))).then((function(t){b.src=t.avatar,e.target.reset(),D(i)})).catch((function(e){console.log("Ошибка: ".concat(e))})).finally((function(){I(!1,O)}))})),m.addEventListener("click",(function(){B(i)})),p.addEventListener("click",(function(){D(i)})),Promise.all([fetch("".concat(T.baseUrl,"/users/me"),{method:"GET",headers:T.headers}).then((function(e){return P(e)})),fetch("".concat(T.baseUrl,"/cards"),{headers:T.headers}).then((function(e){return P(e)}))]).then((function(r){var n,o,c=(o=2,function(e){if(Array.isArray(e))return e}(n=r)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,c,a,i=[],u=!0,l=!1;try{if(c=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=c.call(r)).done)&&(i.push(n.value),i.length!==t);u=!0);}catch(e){l=!0,o=e}finally{try{if(!u&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(l)throw o}}return i}}(n,o)||function(e,t){if(e){if("string"==typeof e)return $(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?$(e,t):void 0}}(n,o)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=c[0],i=c[1];v.id=a._id,v.textContent=a.name,_.textContent=a.about,b.src=a.avatar,y.value=a.name,h.value=a.about,i.reverse().forEach(J),function(e){Array.from(document.querySelectorAll(e.formSelector)).forEach((function(r){!function(e,r){var n=Array.from(e.querySelectorAll(r.inputSelector)),o=e.querySelector(r.submitButtonSelector);t(n,o,r),e.addEventListener("reset",(function(){setTimeout((function(){t(n,o,r)}),0)})),n.forEach((function(c){c.addEventListener("input",(function(){!function(e,t,r){t.validity.valid?function(e,t,r){var n=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(r.inputErrorClass),n.textContent="",n.classList.remove(r.errorClass)}(e,t,r):function(e,t,r,n){var o=e.querySelector(".".concat(t.id,"-error"));t.classList.add(n.inputErrorClass),o.textContent=r,o.classList.add(n.errorClass)}(e,t,t.validationMessage,r)}(e,c,r),t(n,o,r)}))}))}(r,e)}))}(e)})).catch((function(e){console.log("Ошибка: ".concat(e))}))})()})();