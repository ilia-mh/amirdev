(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2b957976"],{"0efa":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container-fluid"},[s("nav",{staticClass:"navbar ",class:{blur:t.bluredBg}},[s("div",{staticClass:"d-flex justify-content-center align-items-center nav-logo"},[s("router-link",{staticClass:"navbar-brand",attrs:{to:"/",exact:!0}},[s("img",{attrs:{src:a("4586"),alt:"site-logo",width:"",height:"40px"}})])],1),s("button",{staticClass:"hamburger-toggler",class:{"hamb-nav-active":t.hambNav},attrs:{type:"button"},on:{click:t.toggleNav}},[s("span",{staticClass:"burger-icon"}),s("span",{staticClass:"burger-icon"}),s("span",{staticClass:"burger-icon"})]),s("div",{staticClass:"d-flex nav-links-div"},[s("div",{staticClass:"d-flex justify-content-between w-100"},t._l(t.navItems,(function(e){return s("div",{key:e.name,staticClass:"d-flex justify-content-center align-items-center nav-main-link-holder",staticStyle:{position:"relative"}},[s("router-link",{staticClass:"nav-main-link",class:{"active-nav-link":e.active},attrs:{to:e.link,exact:!0}},[s("div",{staticClass:"nav-main-link-div"}),t._v(" "+t._s(e.name)+" ")])],1)})),0)]),t.hambNav?s("div",{staticClass:"hamb-nav-links-div"},[s("div",{staticClass:"d-flex flex-column justify-content-center align-items-center"},t._l(t.navItems,(function(e){return s("div",{key:e.name,staticClass:" hamb-nav-links-row"},[s("router-link",{staticClass:"nav-main-link",class:{"active-nav-link":e.active},attrs:{to:e.link,exact:!0}},[t._v(" "+t._s(e.name)+" ")])],1)})),0)]):t._e()])])},i=[],n=(a("b0c0"),{data:function(){return{navItems:[{name:"Home",link:"/",active:this.isPageActive("Home")},{name:"About",link:"/about",active:this.isPageActive("About")},{name:"Services",link:"/services",active:this.isPageActive("Services")},{name:"Contact",link:"/contact",active:this.isPageActive("Contact")}],hambNav:!1,bluredBg:!0}},created:function(){var t=this;console.log(this.$router.history.current.name),"Home"==this.$router.history.current.name&&(this.bluredBg=!1,window.addEventListener("scroll",(function(e){window.pageYOffset>600&&(t.bluredBg=!0),window.pageYOffset<600&&(t.bluredBg=!1)})))},methods:{toggleNav:function(){this.hambNav=!this.hambNav},isPageActive:function(t){return this.$router.history.current.name===t||null}}}),r=n,c=(a("d05b"),a("2877")),o=Object(c["a"])(r,s,i,!1,null,null,null);e["a"]=o.exports},"0f91":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("3245");e.EmailJSResponseStatus=s.EmailJSResponseStatus;var i=a("5129"),n=null,r="https://api.emailjs.com";function c(t,e,a){return void 0===a&&(a={}),new Promise((function(i,n){var r=new XMLHttpRequest;for(var c in r.addEventListener("load",(function(t){var e=new s.EmailJSResponseStatus(t.target);200===e.status||"OK"===e.text?i(e):n(e)})),r.addEventListener("error",(function(t){n(new s.EmailJSResponseStatus(t.target))})),r.open("POST",t,!0),a)r.setRequestHeader(c,a[c]);r.send(e)}))}function o(t){var e=document.getElementById("g-recaptcha-response");return e&&e.value&&(t["g-recaptcha-response"]=e.value),e=null,t}function l(t,e){n=t,r=e||"https://api.emailjs.com"}function u(t,e,a,s){var i={lib_version:"2.4.1",user_id:s||n,service_id:t,template_id:e,template_params:o(a)};return c(r+"/api/v1.0/email/send",JSON.stringify(i),{"Content-type":"application/json"})}function d(t,e,a,s){if("string"===typeof a&&(a=document.querySelector(a)),!a||"FORM"!==a.nodeName)throw"Expected the HTML form element or the style selector of form";i.UI.progressState(a);var o=new FormData(a);return o.append("lib_version","2.4.1"),o.append("service_id",t),o.append("template_id",e),o.append("user_id",s||n),c(r+"/api/v1.0/email/send-form",o).then((function(t){return i.UI.successState(a),t}),(function(t){return i.UI.errorState(a),Promise.reject(t)}))}e.init=l,e.send=u,e.sendForm=d,e.default={init:l,send:u,sendForm:d}},3245:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(t){this.status=t.status,this.text=t.responseText}return t}();e.EmailJSResponseStatus=s},"3f0a":function(t,e,a){},4586:function(t,e,a){t.exports=a.p+"assets/img/logo-none-circle.41911e92.svg"},5129:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(){}return t.clearAll=function(t){t.classList.remove(this.PROGRESS),t.classList.remove(this.DONE),t.classList.remove(this.ERROR)},t.progressState=function(t){this.clearAll(t),t.classList.add(this.PROGRESS)},t.successState=function(t){t.classList.remove(this.PROGRESS),t.classList.add(this.DONE)},t.errorState=function(t){t.classList.remove(this.PROGRESS),t.classList.add(this.ERROR)},t.PROGRESS="emailjs-sending",t.DONE="emailjs-success",t.ERROR="emailjs-error",t}();e.UI=s},5139:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"w-100 d-flex footer-container"},[t._m(0),a("div",{staticClass:"social-media"},[a("svg",{staticClass:"svg-inline--fa fa-facebook-f fa-w-10 icon",attrs:{"aria-hidden":"true",focusable:"false","data-prefix":"fab","data-icon":"facebook-f",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512"}},[a("path",{attrs:{fill:"currentColor",d:"M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"}})]),a("svg",{staticClass:"svg-inline--fa fa-twitter fa-w-16 icon",attrs:{"aria-hidden":"true",focusable:"false","data-prefix":"fab","data-icon":"twitter",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"}},[a("path",{attrs:{fill:"currentColor",d:"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"}})]),a("svg",{staticClass:"svg-inline--fa fa-instagram fa-w-14 icon",attrs:{"aria-hidden":"true",focusable:"false","data-prefix":"fab","data-icon":"instagram",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"}},[a("path",{attrs:{fill:"currentColor",d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"}})]),a("svg",{staticClass:"svg-inline--fa fa-youtube fa-w-18 icon",attrs:{"aria-hidden":"true",focusable:"false","data-prefix":"fab","data-icon":"youtube",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"}},[a("path",{attrs:{fill:"currentColor",d:"M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"}})]),a("svg",{staticClass:"svg-inline--fa fa-whatsapp fa-w-14 icon",attrs:{"aria-hidden":"true",focusable:"false","data-prefix":"fab","data-icon":"whatsapp",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"}},[a("path",{attrs:{fill:"currentColor",d:"M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"}})])])])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"left-footer"},[a("div",{staticClass:"address-section"},[a("p",{staticClass:"our-address"},[t._v(" Our Address")]),a("p",{staticClass:"address-detail"},[t._v("Ukraine, 02000")]),a("p",{staticClass:"address-detail"},[t._v("30Б, Kyiv")]),a("p",{staticClass:"address-detail"},[t._v("Lesi Ukrainky Blvd")])]),a("div",{staticClass:"contact-section"},[a("p",{staticClass:"our-contacts"},[t._v(" Our Contacts")]),a("p",{staticClass:"contacts-detail"},[t._v("am.amirmohseni@gmail.com")]),a("p",{staticClass:"contacts-detail"},[t._v("+380 97 913 0636")])])])}],n={data:function(){return{}}},r=n,c=(a("bcaa"),a("2877")),o=Object(c["a"])(r,s,i,!1,null,null,null);e["a"]=o.exports},"7eda":function(t,e,a){},bcaa:function(t,e,a){"use strict";var s=a("7eda"),i=a.n(s);i.a},d05b:function(t,e,a){"use strict";var s=a("3f0a"),i=a.n(s);i.a}}]);
//# sourceMappingURL=chunk-2b957976.56b317f9.js.map