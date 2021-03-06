(()=>{"use strict";var e={d:(t,r)=>{for(var n in r)e.o(r,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:r[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{default:()=>s});const r=function(e){return null==e};function n(e,t,r,n,a,o,i){try{var s=e[o](i),u=s.value}catch(e){return void r(e)}s.done?t(u):Promise.resolve(u).then(n,a)}function a(e){return function(){var t=this,r=arguments;return new Promise((function(a,o){var i=e.apply(t,r);function s(e){n(i,a,o,s,u,"next",e)}function u(e){n(i,a,o,s,u,"throw",e)}s(void 0)}))}}function o(e){throw new TypeError('"'+e+'" is read-only')}function i(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}const s=function(){function e(t,n){if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r(t)){var a="Tried to create API service without a base uri. ";a+=(o("pathError"),"Please initialize the API service with a base path "),a+=(o("pathError"),'like "/neos/impersonate/"'),console.error(a)}if(this._basePath=t,r(n)){var i="Tried to create API service without a CSFR ";i+=(o("csrfError"),"token. Please initialize the API service with a token"),console.error(i)}this._csrfToken=n}var t,n,s,u,c;return t=e,(n=[{key:"callUserChange",value:(c=a(regeneratorRuntime.mark((function e(t){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={user:t,format:"json"},e.next=3,fetch(this._basePath+"user-change",{method:"POST",credentials:"include",headers:this._getHeader(),body:JSON.stringify(r)});case 3:return n=e.sent,e.next=6,n.json();case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e,this)}))),function(e){return c.apply(this,arguments)})},{key:"callStatus",value:(u=a(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(this._basePath+"status",{method:"GET",credentials:"include",headers:this._getHeader()});case 2:return t=e.sent,e.next=5,t.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e,this)}))),function(){return u.apply(this,arguments)})},{key:"callRestore",value:(s=a(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(this._basePath+"restore",{method:"POST",credentials:"include",headers:this._getHeader()});case 2:return t=e.sent,e.next=5,t.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e,this)}))),function(){return s.apply(this,arguments)})},{key:"_getHeader",value:function(){return{Accept:"application/json","Content-Type":"application/json","X-Flow-Csrftoken":this._csrfToken}}}])&&i(t.prototype,n),e}();module.exports=t})();