if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return i[e]||(r=new Promise((async r=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=r}else importScripts(e),r()}))),r.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},r=(r,i)=>{Promise.all(r.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(r)};self.define=(r,s,o)=>{i[r]||(i[r]=Promise.resolve().then((()=>{let i={};const n={uri:location.origin+r.slice(1)};return Promise.all(s.map((r=>{switch(r){case"exports":return i;case"module":return n;default:return e(r)}}))).then((e=>{const r=o(...e);return i.default||(i.default=r),i}))})))}}define("./service-worker.js",["./workbox-224ec2e5"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"index.html",revision:"ce9d50355917679035f3e159c4689356"},{url:"main.js",revision:"66faf65df26ef5c01b2301d579cde697"},{url:"public/logo512.png",revision:"351379e4e4f88580a7db7720b09bd732"},{url:"public/manifest.json",revision:"2d8b24c1b3a145fdeb3a86fcb16d2c71"}],{})}));
