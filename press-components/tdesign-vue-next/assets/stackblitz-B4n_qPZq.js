import{d as v,o,a as l,b as f,w as k,g as i,x as w,F as T,r as j,u as h,T as N,f as r,e as _}from"./index-D_fD2fLu.js";import{w as y}from"./install-BLhFMsys.js";const E=`
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link rel="icon" href="/favicon.ico">
      <title>D2C Demo</title>
      <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"><\/script>
      <!--[if lte IE 9]>
      <style>
        #app {
          display: none;
        }
      </style>
      <![endif]-->
    </head>

    <body>
      <!--[if lte IE 9]>
        <h1 style="position: absolute; width: 100%; text-align:center; top: 45%">请使用 IE 10 以及更新版本的浏览器访问，建议使用 <a href="https://www.google.cn/chrome/">Chrome</a></h1>
      <![endif]-->

      <div id="app"></div>
      <script type="module" src="/src/main.js"><\/script>
    </body>

  </html>
`,I=`
  import { createApp } from 'vue';
  import Demo from './Index.vue';

  import './index.css';

  const app = createApp(Demo);

  app.mount('#app');
`,L=`
 
`,z=`
  {
    "installDependencies": false,
    "startCommand": "pnpm install && pnpm dev"
  }
`,O=`
  import { defineConfig } from 'vite';
  import vue from '@vitejs/plugin-vue';

  export default defineConfig({
    plugins: [vue()],
  });
`,S=s=>JSON.stringify({name:"d2c-demo",version:"0.0.0",private:!0,scripts:{dev:"vite",build:"vite build",serve:"vite preview"},dependencies:{vue:s.vue||"^3.5.13"},devDependencies:{vite:s.vite||"^6.3.1",sass:"latest","@vitejs/plugin-vue":s["@vitejs/plugin-vue"]||"^5.2.2"}},null,2),D=["action"],F=["name","value"],B=v({name:"StackBlitz",__name:"stackblitz",props:{fileList:{default:()=>[]},depsVersion:{default:()=>({})},actionUrl:{default:"https://stackblitz.com/run?file=src%2FIndex.vue"}},emits:["submit"],setup(s,{expose:a,emit:p}){const c=s,b=p,g=r(()=>c.fileList.reduce((e,t)=>({...e,[t.name]:t.content}),{})),C=r(()=>({"src/index.css":L,"src/main.js":I,"index.html":E,"package.json":S(c.depsVersion),"vite.config.js":O,".stackblitzrc":z})),m=r(()=>{const e={...C.value,...g.value};return Object.keys(e).map(n=>({name:n,content:e[n]}))}),u=_(null),d=()=>{var e;b("submit",m.value),(e=u.value)==null||e.submit()};return a({submit:d}),(e,t)=>(o(),l("div",null,[f(h(N),{content:"在 Stackblitz 中打开"},{default:k(()=>[i("form",{ref_key:"formRef",ref:u,method:"post",action:s.actionUrl,target:"_blank",onClick:w(d,["stop"])},[(o(!0),l(T,null,j(m.value,(n,x)=>(o(),l("input",{key:x,type:"hidden",name:`project[files][${n.name}]`,value:n.content},null,8,F))),128)),t[0]||(t[0]=i("input",{type:"hidden",name:"project[template]",value:"node"},null,-1)),t[1]||(t[1]=i("div",{class:"press-stackblitz__button"},[i("svg",{viewBox:"0 0 28 28",height:"20"},[i("path",{fill:"currentColor",d:"M12.747 16.273h-7.46L18.925 1.5l-3.671 10.227h7.46L9.075 26.5l3.671-10.227z"})])],-1))],8,D)]),_:1})]))}}),A=y(B),M={class:"mx-auto mt-[60px] h-[32px] w-[32px]"},H=v({__name:"stackblitz",setup(s){const a=_([{name:"src/Index.vue",content:`<template>
    <div class="text-blue-600">
      Hello! Press Components!
    </div>
</template>
<script>
import './hello.js'
<\/script>
    `},{name:"src/hello.js",content:"console.log('Hello! Press Components!')"}]);return(p,c)=>(o(),l("div",M,[f(h(A),{"file-list":a.value},null,8,["file-list"])]))}});export{H as default};
