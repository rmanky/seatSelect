"use strict";var e=require("@sveltejs/kit/dist/renderer");function t(e){return e()}let n;function r(e){n=e}function o(){if(!n)throw new Error("Function called outside component initialization");return n}const s={'"':"&quot;","'":"&#39;","&":"&amp;","<":"&lt;",">":"&gt;"};function i(e){return String(e).replace(/["'&<>]/g,(e=>s[e]))}const a={$$render:()=>""};function p(e,t){if(!e||!e.$$render)throw"svelte:component"===t&&(t+=" this={...}"),new Error(`<${t}> is not a valid SSR component. You may need to review your build config to ensure that dependencies are compiled, rather than imported as pre-compiled modules`);return e}let l;function c(e){function o(t,o,s,i){const a=n;r({$$:{on_destroy:l,context:new Map(a?a.$$.context:[]),on_mount:[],before_update:[],after_update:[],callbacks:Object.create(null)}});const p=e(t,o,s,i);return r(a),p}return{render:(e={},n={})=>{l=[];const r={title:"",head:"",css:new Set},s=o(r,e,{},n);return l.forEach(t),{html:s,css:{code:Array.from(r.css).map((e=>e.code)).join("\n"),map:null},head:r.title+r.head}},$$render:o}}const d=c(((e,t,n,r)=>{let{status:o}=t,{error:s}=t;return void 0===t.status&&n.status&&void 0!==o&&n.status(o),void 0===t.error&&n.error&&void 0!==s&&n.error(s),`<h1>${i(o)}</h1>\n\n<p>${i(s.message)}</p>\n\n\n${s.stack?`<pre>${i(s.stack)}</pre>`:""}`}));var u=Object.freeze({__proto__:null,default:d});const A={code:"#svelte-announcer.svelte-ckgomz{clip:rect(0 0 0 0);-webkit-clip-path:inset(50%);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}",map:'{"version":3,"file":"root.svelte","sources":["root.svelte"],"sourcesContent":["\x3c!-- This file is generated by @sveltejs/kit — do not edit it! --\x3e\\n<script>import { setContext, afterUpdate, onMount } from \'svelte\';\\r\\nimport ErrorComponent from \\"/_app/assets/components/error.svelte\\";\\r\\n// error handling\\r\\nexport let status = undefined;\\r\\nexport let error = undefined;\\r\\n// stores\\r\\nexport let stores;\\r\\nexport let page;\\r\\nexport let components;\\r\\nexport let props_0 = null;\\r\\nexport let props_1 = null;\\r\\nconst Layout = components[0];\\r\\nsetContext(\'__svelte__\', stores);\\r\\n$: stores.page.set(page);\\r\\nafterUpdate(stores.page.notify);\\r\\nlet mounted = false;\\r\\nlet navigated = false;\\r\\nlet title = null;\\r\\nonMount(() => {\\r\\n    const unsubscribe = stores.page.subscribe(() => {\\r\\n        if (mounted) {\\r\\n            navigated = true;\\r\\n            title = document.title;\\r\\n        }\\r\\n    });\\r\\n    mounted = true;\\r\\n    return unsubscribe;\\r\\n});\\r\\n//# sourceMappingURL=root.svelte.js.map<\/script>\\n\\n<Layout {...(props_0 || {})}>\\n\\t{#if error}\\n\\t\\t<ErrorComponent {status} {error}/>\\n\\t{:else}\\n\\t\\t<svelte:component this={components[1]} {...(props_1 || {})}/>\\n\\t{/if}\\n</Layout>\\n\\n{#if mounted}\\n\\t<div id=\\"svelte-announcer\\" aria-live=\\"assertive\\" aria-atomic=\\"true\\">\\n\\t\\t{#if navigated}\\n\\t\\t\\tNavigated to {title}\\n\\t\\t{/if}\\n\\t</div>\\n{/if}\\n\\n<style>#svelte-announcer{clip:rect(0 0 0 0);-webkit-clip-path:inset(50%);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}</style>"],"names":[],"mappings":"AA+CO,+BAAiB,CAAC,KAAK,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,kBAAkB,MAAM,GAAG,CAAC,CAAC,UAAU,MAAM,GAAG,CAAC,CAAC,OAAO,GAAG,CAAC,SAAS,MAAM,CAAC,SAAS,QAAQ,CAAC,YAAY,MAAM,CAAC,MAAM,GAAG,CAAC"}'},v=c(((e,t,n,r)=>{let{status:s}=t,{error:l}=t,{stores:c}=t,{page:u}=t,{components:v}=t,{props_0:m=null}=t,{props_1:f=null}=t;const _=v[0];var h,C,g;h="__svelte__",C=c,o().$$.context.set(h,C),g=c.page.notify,o().$$.after_update.push(g);let $=!1,b=!1,x=null;return function(e){o().$$.on_mount.push(e)}((()=>{const e=c.page.subscribe((()=>{$&&(b=!0,x=document.title)}));return $=!0,e})),void 0===t.status&&n.status&&void 0!==s&&n.status(s),void 0===t.error&&n.error&&void 0!==l&&n.error(l),void 0===t.stores&&n.stores&&void 0!==c&&n.stores(c),void 0===t.page&&n.page&&void 0!==u&&n.page(u),void 0===t.components&&n.components&&void 0!==v&&n.components(v),void 0===t.props_0&&n.props_0&&void 0!==m&&n.props_0(m),void 0===t.props_1&&n.props_1&&void 0!==f&&n.props_1(f),e.css.add(A),c.page.set(u),`\n\n\n${p(_,"Layout").$$render(e,Object.assign(m||{}),{},{default:()=>""+(l?`${p(d,"ErrorComponent").$$render(e,{status:s,error:l},{},{})}`:`${p(v[1]||a,"svelte:component").$$render(e,Object.assign(f||{}),{},{})}`)})}\n\n${$?`<div id="svelte-announcer" aria-live="assertive" aria-atomic="true" class="svelte-ckgomz">${b?`Navigated to ${i(x)}`:""}</div>`:""}`}));var m=Object.freeze({__proto__:null});const f=({head:e,body:t})=>'<!DOCTYPE html>\n<html lang="en" class="dark">\n\t<head>\n\t\t<meta charset="utf-8" />\n\t\t<link rel="icon" href="/favicon.ico" />\n\t\t<meta name="viewport" content="width=device-width, initial-scale=1" />\n\t\t'+e+'\n\t</head>\n\t<body>\n\t\t<div id="svelte">'+t+"</div>\n\t</body>\n</html>\n";const _={assets:[{file:"favicon.ico",size:1150,type:"image/vnd.microsoft.icon"},{file:"robots.txt",size:67,type:"text/plain"}],layout:()=>Promise.resolve().then((function(){return require("./$layout.svelte.js")})),error:()=>Promise.resolve().then((function(){return u})),pages:[{pattern:/^\/$/,params:()=>({}),parts:[[()=>Promise.resolve().then((function(){return require("./index.svelte.js")}))][0]],css:["/_app/start-7d1550f3.css","/_app/index.svelte-cf5a3db9.css"],js:["/_app/index.svelte-c09addcf.js","/_app/start-4dd0bdbf.js","/_app/inject_styles-cd877ae9.js"]}],endpoints:[]};exports.create_ssr_component=c,exports.each=function(e,t){let n="";for(let r=0;r<e.length;r+=1)n+=t(e[r],r);return n},exports.escape=i,exports.init=function({paths:e}){},exports.render=function(t,{paths:n={base:"",assets:"/."},only_prerender:r=!1,get_static_file:o}={}){return e.render(t,{paths:n,template:f,manifest:_,target:"#svelte",entry:"entry-ea22a540.js",root:v,setup:m,dev:!1,amp:!1,only_prerender:r,app_dir:"_app",host:null,host_header:null,get_stack:e=>e.stack,get_static_file:o,get_amp_css:e=>css_lookup[e]})};
//# sourceMappingURL=app.js.map
