(()=>{var e={};e.id=931,e.ids=[931],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1017:e=>{"use strict";e.exports=require("path")},7310:e=>{"use strict";e.exports=require("url")},959:(e,t,a)=>{"use strict";a.r(t),a.d(t,{GlobalError:()=>l.a,__next_app__:()=>d,originalPathname:()=>p,pages:()=>c,routeModule:()=>m,tree:()=>x}),a(2305),a(5849),a(5866);var n=a(3191),s=a(8716),i=a(7922),l=a.n(i),r=a(5231),o={};for(let e in r)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>r[e]);a.d(t,o);let x=["",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(a.bind(a,2305)),"D:\\OpenServer\\OSPanel\\domains\\OlimpEdu\\olimpeducation\\src\\app\\page.js"],metadata:{icon:[async e=>(await Promise.resolve().then(a.bind(a,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(a.bind(a,5849)),"D:\\OpenServer\\OSPanel\\domains\\OlimpEdu\\olimpeducation\\src\\app\\layout.js"],"not-found":[()=>Promise.resolve().then(a.t.bind(a,5866,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(a.bind(a,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["D:\\OpenServer\\OSPanel\\domains\\OlimpEdu\\olimpeducation\\src\\app\\page.js"],p="/page",d={require:a,loadChunk:()=>Promise.resolve()},m=new n.AppPageRouteModule({definition:{kind:s.x.APP_PAGE,page:"/page",pathname:"/",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:x}})},8509:(e,t,a)=>{Promise.resolve().then(a.t.bind(a,2481,23)),Promise.resolve().then(a.t.bind(a,9404,23)),Promise.resolve().then(a.bind(a,8225)),Promise.resolve().then(a.bind(a,5408)),Promise.resolve().then(a.bind(a,2323))},8225:(e,t,a)=>{"use strict";a.r(t),a.d(t,{AsResolved:()=>x,DownloadAnswerButton:()=>o,DownloadTaskButton:()=>r,ScrollButton:()=>l});var n=a(326),s=a(7577);function i(e,t){let a=document.createElement("a");a.href=t,a.download=e,a.style.display="none",document.body.appendChild(a),a.click(),document.body.removeChild(a)}function l({id:e,text:t}){return n.jsx("button",{className:`font-sans ${window.innerWidth>683?"text-2xl/[25px] max-[1146px]:text-lg/[25px] px-[30px] max-[1146px]:px-5 py-2.5 max-[1146px]:py-2":"text-sm/[18px] px-[15px] py-[6px]"}  font-normal tracking-[0.02em] bg-bright hover:bg-light-main transition-colors duration-500 rounded-[10px]`,onClick:()=>{document.getElementById(e).scrollIntoView({behavior:"smooth",block:"center"})},children:t})}function r({name:e,url:t}){return n.jsx("button",{className:"font-sans text-2xl/[25px] max-[1146px]:text-lg/[25px] max-[700px]:text-sm/[18px] tracking-[0.02em] px-5  max-[1146px]:px-3.5 py-[5px] max-[1146px]:py-[4px] border-bright border-2 rounded-[10px]",onClick:()=>i(e,t),children:"Скачать задачу"})}function o({name:e,url:t}){return n.jsx("button",{className:"font-sans text-2xl/[25px] max-[1146px]:text-lg/[25px] max-[700px]:text-sm/[18px] tracking-[0.02em] px-5  max-[1146px]:px-3.5 py-[5px] max-[1146px]:py-[4px] bg-bright rounded-[10px]",onClick:()=>i(e,t),children:"Скачать решение"})}function x({taskId:e,isDone:t}){let[a,i]=(0,s.useState)(t);return window.localStorage.getItem("userId")&&"undefined"!=window.localStorage.getItem("userId")?a?n.jsx("button",{className:"font-sans text-2xl/[25px] max-[1146px]:text-lg/[25px] max-[700px]:text-sm/[18px] tracking-[0.02em] px-5 max-[1146px]:px-3.5 py-[5px] max-[1146px]:py-[4px] bg-medium rounded-[10px]",onClick:function(){fetch("http://localhost:5000/removetask",{method:"POST",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*"},body:JSON.stringify({id:e,userId:window.localStorage.getItem("userId")})}).then(e=>e.json()).then(e=>{console.log(e.res),"success"==e.res&&i(!1)})},children:"Отметить нерешенным"}):n.jsx("button",{className:"font-sans text-2xl/[25px] max-[1146px]:text-lg/[25px] max-[700px]:text-sm/[18px] tracking-[0.02em] px-5 max-[1146px]:px-3.5 py-[5px] max-[1146px]:py-[4px] bg-medium rounded-[10px]",onClick:function(){fetch("http://localhost:5000/addtask",{method:"POST",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*"},body:JSON.stringify({id:e,userId:window.localStorage.getItem("userId")})}).then(e=>e.json()).then(e=>{console.log(e.res),"success"==e.res&&i(!0)})},children:"Отметить решенным"}):n.jsx("button",{className:"font-sans text-2xl/[25px] max-[1146px]:text-lg/[25px] max-[700px]:text-sm/[18px] tracking-[0.02em] px-5 max-[1146px]:px-3.5 py-[5px] max-[1146px]:py-[4px] bg-medium rounded-[10px]",onClick:()=>alert("Необходимо войти в систему"),children:"Отметить решенным"})}},5408:(e,t,a)=>{"use strict";a.d(t,{default:()=>g});var n=a(326),s=a(434),i=a(7577);let l=[{id:1,_id:1,class:8,level:1,tags:"галогены/строение"},{id:2,_id:2,class:8,level:1,tags:"халькогены/массовые доли"},{id:3,_id:3,class:8,level:1,tags:"побочные группы/расчёт"},{id:4,_id:4,class:8,level:1,tags:"неорганические реакции"},{id:5,_id:5,class:8,level:1,tags:"практика"},{id:6,_id:6,class:8,level:1,tags:"плотность"},{id:7,_id:7,class:8,level:2,tags:"неорганические реакции"},{id:8,_id:8,class:8,level:2,tags:"халькогены"},{id:9,_id:9,class:8,level:2,tags:"газы/побочные группы"},{id:10,_id:10,class:8,level:2,tags:"газы"}];function r(e,t){return(0,n.jsxs)("li",{className:`${t?"bg-medium":""} flex justify-between px-[30px] max-[1146px]:px-5 py-2.5 border-medium border-2 items-center rounded-lg max-[840px]:flex-col max-[840px]:justify-normal max-[840px]:gap-4 max-[840px]:items-start max-sm:px-[15px]`,children:[(0,n.jsxs)("p",{className:"font-sans text-2xl/[25px] tracking-[0.02em] max-[1146px]:text-lg/[25px] max-sm:text-sm/[14px]",children:["ID:  ",e._id]}),(0,n.jsxs)("div",{className:"flex justify-between gap-4 items-center max-[840px]:flex-col max-[840px]:items-start",children:[(0,n.jsxs)("p",{className:"font-sans text-2xl/[25px] tracking-[0.02em] max-[1146px]:text-lg/[25px] max-sm:text-sm/[14px] break-normal text-nowrap",children:["класс: ",e.class]}),(0,n.jsxs)("p",{className:"font-sans text-2xl/[25px] tracking-[0.02em] max-[1146px]:text-lg/[25px] max-sm:text-sm/[14px] text-nowrap",children:["сложность: ",e.level]}),(0,n.jsxs)("p",{className:"max-w-[500px] max-[1146px]:max-w-[350px] text-center max-[840px]:text-left font-sans text-2xl/[25px] tracking-[0.02em] max-[1146px]:text-lg/[25px] max-sm:text-sm/[14px] max-[340px]:break-all w-full hyphens-auto",children:["теги: ",e.tags.split("/").join(", ")]}),n.jsx(s.default,{className:"rounded-[10px] px-5 py-[5px] bg-bright font-sans text-2xl/[25px] tracking-[0.02em] max-[1146px]:text-lg/[25px] max-sm:text-sm/[14px] max-sm:px-2.5",href:`/${e._id}/${e.class}/${e.level}/${e.tags.split("/").join(",").split(" ").join("_")}`,children:"Открыть"})]})]},e._id)}function o({_class:e,level:t,tags:a}){let[s,o]=(0,i.useState)(l),[x,c]=(0,i.useState)(null);return n.jsx("ul",{className:"flex flex-col gap-3 max-[840px]:grid max-[840px]:grid-cols-3 max-[730px]:grid-cols-2",children:s.map(e=>window.localStorage.getItem("userId")&&window.localStorage.getItem("userId")&&null!=x?r(e,void 0!==x.find(t=>t==e._id)):r(e,!1))})}let x=[{id:1,tagName:"расчёт"},{id:2,tagName:"массовые доли"},{id:3,tagName:"угадайка"},{id:4,tagName:"неорганические реакции"},{id:5,tagName:"цепочки"},{id:6,tagName:"газы"},{id:7,tagName:"строение"},{id:8,tagName:"кристаллохимия"},{id:9,tagName:"практика"},{id:10,tagName:"кроссворды"},{id:11,tagName:"физхимия"},{id:12,tagName:"термохимия"},{id:13,tagName:"равновесие"},{id:14,tagName:"кинетика"},{id:15,tagName:"неорганическая химия"},{id:16,tagName:"благородные газы"},{id:17,tagName:"галогены"},{id:18,tagName:"халькогены"},{id:19,tagName:"халькогены2"},{id:20,tagName:"5 группа"},{id:21,tagName:"5 группа2"},{id:22,tagName:"4 группа"},{id:23,tagName:"4 группа2"},{id:24,tagName:"3 группа"},{id:25,tagName:"3 группа2"},{id:26,tagName:"2 группа"},{id:27,tagName:"1 группа"},{id:28,tagName:"побочные группы"},{id:29,tagName:"побочные группы2"},{id:30,tagName:"побочные группы3"},{id:31,tagName:"d-металлы"},{id:32,tagName:"d-металлы2"},{id:33,tagName:"d-металлы3"},{id:34,tagName:"d-металлы4"},{id:35,tagName:"лантаноиды"},{id:36,tagName:"актиноиды"},{id:37,tagName:"органическая химия"},{id:38,tagName:"алканы"},{id:39,tagName:"алкены"},{id:40,tagName:"алкины"},{id:41,tagName:"алкодиены"},{id:42,tagName:"ароматика"},{id:43,tagName:"спирты"},{id:44,tagName:"эфиры"},{id:45,tagName:"карбонильные соединения"},{id:46,tagName:"карбоновые кислоты"},{id:47,tagName:"азотсодержащие соединения"},{id:48,tagName:"биохимия"}],c="http://localhost:3000/";function p({displayWidth:e,changeValue:t}){let[a,s]=(0,i.useState)(8);switch(e){case"large":return(0,n.jsxs)("div",{className:"rounded-[10px] overflow-hidden w-max flex gap-[2px]",children:[8!=a?n.jsx("button",{className:"font-serif text-xl font-normal px-[30px] py-2 bg-bright transition-colors duration-500 hover:bg-light-main",onClick:()=>{t(8),s(8)},children:"8 класс"}):n.jsx("button",{className:"font-serif text-xl font-normal px-[30px] py-2 bg-light-main",onClick:()=>{t(0),s(0)},children:"8 класс"}),9!=a?n.jsx("button",{className:"font-serif text-xl font-normal px-[30px] py-2 bg-bright transition-colors duration-500 hover:bg-light-main",onClick:()=>{t(9),s(9)},children:"9 класс"}):n.jsx("button",{className:"font-serif text-xl font-normal px-[30px] py-2 bg-light-main ",onClick:()=>{t(0),s(0)},children:"9 класс"}),10!=a?n.jsx("button",{className:"font-serif text-xl font-normal px-[30px] py-2 bg-bright transition-colors duration-500 hover:bg-light-main",onClick:()=>{t(10),s(10)},children:"10 класс"}):n.jsx("button",{className:"font-serif text-xl font-normal px-[30px] py-2 bg-light-main",onClick:()=>{t(0),s(0)},children:"10 класс"}),11!=a?n.jsx("button",{className:"font-serif text-xl font-normal px-[30px] py-2 bg-bright transition-colors duration-500 hover:bg-light-main",onClick:()=>{t(11),s(11)},children:"11 класс"}):n.jsx("button",{className:"font-serif text-xl font-normal px-[30px] py-2 bg-light-main",onClick:()=>{t(0),s(0)},children:"11 класс"})]});case"little":return(0,n.jsxs)("div",{className:"rounded-[10px] overflow-hidden w-max flex flex-nowrap gap-[2px]",children:[8!=a?n.jsx("button",{className:"font-serif font-normal px-[15px] py-[4px] bg-bright transition-colors duration-500 hover:bg-light-main text-xs max-[340px]:px-[10px]",onClick:()=>{t(8),s(8)},children:"8 класс"}):n.jsx("button",{className:"font-serif text-xs font-normal px-[15px] py-1 bg-light-main max-[340px]:px-[10px]",onClick:()=>{t(0),s(0)},children:"8 класс"}),9!=a?n.jsx("button",{className:"font-serif font-normal px-[15px] py-[4px] bg-bright transition-colors duration-500 hover:bg-light-main text-xs max-[340px]:px-[10px]",onClick:()=>{t(9),s(9)},children:"9 класс"}):n.jsx("button",{className:"font-serif text-xs font-normal px-[15px] py-1 bg-light-main max-[340px]:px-[10px]",onClick:()=>{t(0),s(0)},children:"9 класс"}),10!=a?n.jsx("button",{className:"font-serif font-normal px-[15px] py-[4px] bg-bright transition-colors duration-500 hover:bg-light-main text-xs max-[340px]:px-[10px]",onClick:()=>{t(10),s(10)},children:"10 класс"}):n.jsx("button",{className:"font-serif text-xs font-normal px-[15px] py-1 bg-light-main max-[340px]:px-[10px]",onClick:()=>{t(0),s(0)},children:"10 класс"}),11!=a?n.jsx("button",{className:"font-serif font-normal px-[15px] py-[4px] bg-bright transition-colors duration-500 hover:bg-light-main text-xs max-[340px]:px-[10px]",onClick:()=>{t(11),s(11)},children:"11 класс"}):n.jsx("button",{className:"font-serif text-xs font-normal px-[15px] py-1 bg-light-main max-[340px]:px-[10px]",onClick:()=>{t(0),s(0)},children:"11 класс"})]});case"medium":return(0,n.jsxs)("div",{className:"rounded-[10px] overflow-hidden w-max flex gap-[2px]",children:[8!=a?n.jsx("button",{className:"font-serif font-normal bg-bright transition-colors duration-500 hover:bg-light-main text-sm px-5 py-[6px]",onClick:()=>{t(8),s(8)},children:"8 класс"}):n.jsx("button",{className:"font-serif font-normal bg-light-main text-sm px-5 py-[6px]",onClick:()=>{t(0),s(0)},children:"8 класс"}),9!=a?n.jsx("button",{className:"font-serif font-normal bg-bright transition-colors duration-500 hover:bg-light-main text-sm px-5 py-[6px]",onClick:()=>{t(9),s(9)},children:"9 класс"}):n.jsx("button",{className:"font-serif font-normal bg-light-main text-sm px-5 py-[6px]",onClick:()=>{t(0),s(0)},children:"9 класс"}),10!=a?n.jsx("button",{className:"font-serif font-normal bg-bright transition-colors duration-500 hover:bg-light-main text-sm px-5 py-[6px]",onClick:()=>{t(10),s(10)},children:"10 класс"}):n.jsx("button",{className:"font-serif font-normal bg-light-main text-sm px-5 py-[6px]",onClick:()=>{t(0),s(0)},children:"10 класс"}),11!=a?n.jsx("button",{className:"font-serif font-normal bg-bright transition-colors duration-500 hover:bg-light-main text-sm px-5 py-[6px]",onClick:()=>{t(11),s(11)},children:"11 класс"}):n.jsx("button",{className:"font-serif font-normal bg-light-main text-sm px-5 py-[6px]",onClick:()=>{t(0),s(0)},children:"11 класс"})]})}}function d({displayWidth:e,changeValue:t}){let[a,s]=(0,i.useState)(1);switch(e){case"large":case"medium":return(0,n.jsxs)("div",{className:"bg-gradient-to-r from-bright to-medium w-60 h-[30px] flex justify-around items-center rounded-full",children:[1!=a?n.jsx("button",{className:"font-serif rounded-full bg-transparent transition-colors duration-300 w-[60px] h-[30px] py-0",onClick:()=>{t(1),s(1)},children:"1"}):n.jsx("button",{className:"font-serif rounded-full bg-light-main transition-colors duration-300 w-full h-[30px] py-1 px-1 ",onClick:()=>{t(0),s(0)},children:"1"}),2!=a?n.jsx("button",{className:"font-serif rounded-full bg-transparent transition-colors duration-300 w-[60px] h-[30px] py-0",onClick:()=>{t(2),s(2)},children:"2"}):n.jsx("button",{className:"font-serif rounded-full bg-light-main transition-colors duration-300 w-full h-[30px] py-1 px-1 ",onClick:()=>{t(0),s(0)},children:"2"}),3!=a?n.jsx("button",{className:"font-serif rounded-full bg-transparent transition-colors duration-300 w-[60px] h-[30px] py-0",onClick:()=>{t(3),s(3)},children:"3"}):n.jsx("button",{className:"font-serif rounded-full bg-light-main transition-colors duration-300 w-full h-[30px] py-1 px-1 ",onClick:()=>{t(0),s(0)},children:"3"})]});case"little":return(0,n.jsxs)("div",{className:"bg-gradient-to-r from-bright to-medium w-60 h-[30px] flex justify-around items-center rounded-full",children:[1!=a?n.jsx("button",{className:"font-serif rounded-full w-[60px] bg-transparent transition-all duration-300 h-[30px] py-0",onClick:()=>{t(1),s(1)},children:"1"}):n.jsx("button",{className:"font-serif rounded-full w-full bg-light-main transition-all duration-300 h-[30px] py-1 px-1 ",onClick:()=>{t(0),s(0)},children:"1"}),2!=a?n.jsx("button",{className:"font-serif rounded-full w-[60px] bg-transparent transition-all duration-300 h-[30px] py-0",onClick:()=>{t(2),s(2)},children:"2"}):n.jsx("button",{className:"font-serif rounded-full w-full bg-light-main transition-all duration-300 h-[30px] py-1 px-1 ",onClick:()=>{t(0),s(0)},children:"2"}),3!=a?n.jsx("button",{className:"font-serif rounded-full w-[60px] bg-transparent transition-all duration-300 h-[30px] py-0",onClick:()=>{t(3),s(3)},children:"3"}):n.jsx("button",{className:"font-serif rounded-full w-full bg-light-main transition-all duration-300 h-[30px] py-1 px-1 ",onClick:()=>{t(0),s(0)},children:"3"})]})}}function m({displayWidth:e,changeValue:t}){let[a,s]=(0,i.useState)(["расчёт"]);switch(e){case"large":return n.jsx("ul",{className:"w-full flex flex-wrap gap-2 h-[245px] overflow-y-scroll",children:x.map(e=>(0,n.jsxs)("li",{children:[" ",a.includes(e.tagName)?n.jsx("button",{className:"font-serif text-xl font-normal py-1 px-3 rounded-[10px] bg-light-main",onClick:()=>{t(e.tagName),s(a.filter(t=>t!=e.tagName))},children:e.tagName}):n.jsx("button",{className:"font-serif text-xl font-normal py-1 px-3 rounded-[10px] bg-medium",onClick:()=>{t(e.tagName),s(a.concat(e.tagName))},children:e.tagName})]},e.id))});case"little":return n.jsx("ul",{className:"w-full flex flex-wrap gap-2 h-[245px] overflow-y-scroll",children:x.map(e=>(0,n.jsxs)("li",{children:[" ",a.includes(e.tagName)?n.jsx("button",{className:"font-serif text-xs font-normal py-[3px] px-[10px] rounded-[10px] bg-light-main",onClick:()=>{t(e.tagName),s(a.filter(t=>t!=e.tagName))},children:e.tagName}):n.jsx("button",{className:"font-serif text-xs font-normal py-[3px] px-[10px] rounded-[10px] bg-medium",onClick:()=>{t(e.tagName),s(a.concat(e.tagName))},children:e.tagName})]},e.id))});case"medium":return n.jsx("ul",{className:"w-full flex flex-wrap gap-2 h-[245px] overflow-y-scroll",children:x.map(e=>(0,n.jsxs)("li",{children:[" ",a.includes(e.tagName)?n.jsx("button",{className:"font-serif text-sm font-normal py-[3px] px-2.5 rounded-[10px] bg-light-main",onClick:()=>{t(e.tagName),s(a.filter(t=>t!=e.tagName))},children:e.tagName}):n.jsx("button",{className:"font-serif text-sm font-normal py-[3px] px-2.5 rounded-[10px] bg-medium",onClick:()=>{t(e.tagName),s(a.concat(e.tagName))},children:e.tagName})]},e.id))})}}function g(){let[e,t]=(0,i.useState)({class:8,hardLevel:1,tags:["расчёт"]}),[a,l]=(0,i.useState)(!1);if(!a)return n.jsx(n.Fragment,{});let r=e.tags,x={class:e.class,hardLevel:e.hardLevel};function g(e){r.includes(e)?r=r.filter(t=>t!=e):r.push(e),console.log(r)}function u(e){x.class=e}function h(e){x.hardLevel=e}return(console.log(e,r,x),window.innerWidth>1145)?(0,n.jsxs)(n.Fragment,{children:[n.jsx("section",{id:"choice-section",className:"flex h-screen py-[100px] items-center border-b-light-main border-b-[1px] bg-top bg-no-repeat bg-cover bg-fixed",style:{backgroundImage:`url(${c}SecondFon.png)`},children:(0,n.jsxs)("div",{className:"wrapper mx-auto flex items-center px-0 max-[1280px]:px-5",children:[(0,n.jsxs)("div",{className:"w-[566px] flex flex-col gap-5",children:[n.jsx("p",{className:"font-sans text-2xl/[25px] tracking-[0.02em]",children:"Выберите класс"}),n.jsx(p,{displayWidth:"large",changeValue:u}),n.jsx("p",{className:"font-sans text-2xl/[25px] tracking-[0.02em]",children:"Выберите сложность"}),n.jsx(d,{displayWidth:"large",changeValue:h}),n.jsx("p",{className:"font-sans text-2xl/[25px] tracking-[0.02em]",children:"Выберите интересующие теги"}),n.jsx(m,{displayWidth:"large",changeValue:g}),n.jsx(s.default,{href:"/abouttags",className:"font-serif text-xl font-normal text-bright",children:"Подробнее про теги"}),n.jsx("button",{className:"font-sans text-2xl/[25px] font-normal tracking-[0.02em] px-[30px] py-2.5 bg-bright rounded-[10px] w-max hover:bg-light-main transition-colors duration-500 ",onClick:()=>{t({class:x.class,hardLevel:x.hardLevel,tags:r}),document.getElementById("data-section").scrollIntoView({behavior:"smooth"})},children:"Найти"})]}),(0,n.jsxs)("div",{className:"flex flex-col gap-7",children:[(0,n.jsxs)("h4",{className:"font-help text-[32px]/[1.3em] font-normal tracking-[0.04em] text-right",children:["Стремись на ",n.jsx("span",{className:"text-bright",children:"вершину Олимпа"})," с нами"]}),(0,n.jsxs)("p",{className:"font-sans text-2xl/[25px] tracking-[0.02em] text-right",children:["Чтобы получить задания выберите ",n.jsx("span",{className:"text-bright",children:"класс"})," и ",n.jsx("span",{className:"text-bright",children:"сложность"}),", а также укажите ",n.jsx("span",{className:"text-bright",children:"теги"}),", которые вас ",n.jsx("span",{className:"bg-gradient-to-r from-bright to-medium bg-clip-text text-transparent font-bold",children:"интересуют"})]})]})]})}),(0,n.jsxs)("section",{id:"data-section",className:"wrapper mx-auto py-[60px] bg-local min-h-screen bg-center bg-no-repeat flex flex-col  gap-y-4 px-0 max-[1280px]:px-5",style:{backgroundImage:`url(${c}ThirdFon.png)`},children:[n.jsx("p",{className:"font-sans text-2xl/[25px] tracking-[0.02em]",children:"По вашему запросу были найдены следующие задачи:"}),n.jsx(o,{_class:e.class,level:e.hardLevel,tags:e.tags})]})]}):window.innerWidth<683?(0,n.jsxs)(n.Fragment,{children:[n.jsx("section",{id:"choice-section",className:"flex h-screen py-[100px] items-center border-b-light-main border-b-[1px] bg-top bg-no-repeat bg-cover bg-fixed",style:{backgroundImage:`url(${c}SecondFon.png)`},children:(0,n.jsxs)("div",{className:"wrapper mx-auto flex flex-col px-0 max-[1280px]:px-5",children:[(0,n.jsxs)("div",{className:"flex flex-col gap-7",children:[(0,n.jsxs)("h4",{className:"font-help text-lg/[1.3em] font-normal tracking-[0.04em]",children:["Стремись на ",n.jsx("span",{className:"text-bright",children:"вершину Олимпа"})," с нами"]}),(0,n.jsxs)("p",{className:"font-sans text-sm/[25px] tracking-[0.02em]",children:["Чтобы получить задания выберите ",n.jsx("span",{className:"text-bright",children:"класс"})," и ",n.jsx("span",{className:"text-bright",children:"сложность"}),", а также укажите ",n.jsx("span",{className:"text-bright",children:"теги"}),", которые вас ",n.jsx("span",{className:"bg-gradient-to-r from-bright to-medium bg-clip-text text-transparent font-bold",children:"интересуют"})]})]}),(0,n.jsxs)("div",{className:"w-full flex flex-col gap-5 max-[400px]:gap-2.5",children:[n.jsx("p",{className:"font-sans text-sm/[25px] tracking-[0.02em]",children:"Выберите класс"}),n.jsx(p,{displayWidth:"little",changeValue:u}),n.jsx("p",{className:"font-sans text-sm/[25px] tracking-[0.02em]",children:"Выберите сложность"}),n.jsx(d,{displayWidth:"little",changeValue:h}),n.jsx("p",{className:"font-sans text-sm/[25px] tracking-[0.02em]",children:"Выберите интересующие теги"}),n.jsx(m,{displayWidth:"little",changeValue:g}),n.jsx(s.default,{href:"/abouttags",className:"font-serif text-xs font-normal text-bright",children:"Подробнее про теги"}),n.jsx("button",{className:"font-sans text-sm/[25px] font-normal tracking-[0.02em] px-[15px] py-[6px] bg-bright rounded-[10px] w-max hover:bg-light-main transition-colors duration-500 ",onClick:()=>{t({class:x.class,hardLevel:x.hardLevel,tags:r}),document.getElementById("data-section").scrollIntoView({behavior:"smooth"})},children:"Найти"})]})]})}),(0,n.jsxs)("section",{id:"data-section",className:"wrapper mx-auto py-[60px] bg-local min-h-screen bg-center bg-no-repeat flex flex-col  gap-y-4 px-0 max-[1280px]:px-5",style:{backgroundImage:`url(${c}ThirdFon.png)`},children:[n.jsx("p",{className:"font-sans text-sm/[25px] tracking-[0.02em]",children:"По вашему запросу были найдены следующие задачи:"}),n.jsx(o,{_class:e.class,level:e.hardLevel,tags:e.tags})]})]}):(0,n.jsxs)(n.Fragment,{children:[n.jsx("section",{id:"choice-section",className:"flex  py-[30px] items-center border-b-light-main border-b-[1px] bg-top bg-no-repeat bg-cover bg-fixed",style:{backgroundImage:`url(${c}SecondFon.png)`},children:n.jsx("div",{className:"wrapper mx-auto flex items-center px-0 max-[1280px]:px-5",children:(0,n.jsxs)("div",{className:"flex flex-col gap-5 items-center",children:[(0,n.jsxs)("div",{className:"flex flex-col gap-2.5 w-[588px]",children:[(0,n.jsxs)("h4",{className:"font-help font-normal tracking-[0.04em] text-center text-2xl/[1.3em]",children:["Стремись на ",n.jsx("span",{className:"text-bright",children:"вершину Олимпа"})," с нами"]}),(0,n.jsxs)("p",{className:"font-sans tracking-[0.02em] text-center text-lg/[25px]",children:["Чтобы получить задания выберите ",n.jsx("span",{className:"text-bright",children:"класс"})," и ",n.jsx("span",{className:"text-bright",children:"сложность"}),", а также укажите ",n.jsx("span",{className:"text-bright",children:"теги"}),", которые вас ",n.jsx("span",{className:"bg-gradient-to-r from-bright to-medium bg-clip-text text-transparent font-bold",children:"интересуют"})]})]}),(0,n.jsxs)("div",{className:"flex justify-between gap-2",children:[(0,n.jsxs)("div",{className:"flex flex-col justify-between h-[285px]",children:[(0,n.jsxs)("div",{className:"flex flex-col gap-y-2.5",children:[n.jsx("p",{className:"font-sans tracking-[0.02em] text-lg/[25px]",children:"Выберите класс"}),n.jsx(p,{displayWidth:"medium",changeValue:u}),n.jsx("p",{className:"font-sans tracking-[0.02em] text-lg/[25px]",children:"Выберите сложность"}),n.jsx(d,{displayWidth:"medium",changeValue:h})]}),n.jsx("button",{className:"font-sans text-lg/[25px] font-normal tracking-[0.02em] px-5 py-2 bg-bright rounded-[10px] w-max hover:bg-light-main transition-colors duration-500 justify-self-end",onClick:()=>{t({class:x.class,hardLevel:x.hardLevel,tags:r}),document.getElementById("data-section").scrollIntoView({behavior:"smooth"})},children:"Найти"})]}),(0,n.jsxs)("div",{className:"flex flex-col gap-y-2.5",children:[n.jsx("p",{className:"font-sans tracking-[0.02em] text-lg/[25px]",children:"Выберите интересующие теги"}),n.jsx(m,{displayWidth:"medium",changeValue:g}),n.jsx(s.default,{href:"/abouttags",className:"font-serif text-sm font-normal text-bright",children:"Подробнее про теги"})]})]})]})})}),(0,n.jsxs)("section",{id:"data-section",className:"wrapper mx-auto py-[60px] bg-local min-h-screen bg-center bg-no-repeat flex flex-col  gap-y-4 px-5",style:{backgroundImage:`url(${c}ThirdFon.png)`},children:[n.jsx("p",{className:"font-sans text-lg/[25px] tracking-[0.02em]",children:"По вашему запросу были найдены следующие задачи:"}),n.jsx(o,{_class:e.class,level:e.hardLevel,tags:e.tags})]})]})}},2323:(e,t,a)=>{"use strict";a.d(t,{default:()=>r});var n=a(326),s=a(8225),i=a(7577);let l="http://localhost:3000/";function r(){let[e,t]=(0,i.useState)(!1);return e?window.innerWidth>900?n.jsx("section",{className:"h-screen bg-cover bg-no-repeat bg-right-bottom  border-b-light-main border-b-[1px] max-[1146px]:h-auto ",style:{backgroundImage:`url(${l}MainFon.png)`},children:n.jsx("div",{className:"wrapper px-0 mx-auto flex flex-col justify-center h-full bg-right-[-30px] max-[1280px]:px-5 max-[1146px]:py-28 bg-cover lg:bg-contain bg-no-repeat bg-right-bottom",style:{backgroundImage:`url(${l}BigFon.png)`},children:(0,n.jsxs)("div",{className:"flex flex-col gap-7 items-start w-[738px] max-[1146px]:w-[506px]",children:[n.jsx("span",{className:"bg-clip-text bg-gradient-to-r from-bright to-medium text-7xl text-transparent font-extrabold font-title max-[1146px]:text-[64px]",children:"OlimpEducation"}),(0,n.jsxs)("h4",{className:"font-help text-[32px]/[1.3em] font-normal tracking-[0.04em] max-[1146px]:text-2xl/[1.3em]",children:["Наш проект ",n.jsx("span",{className:"font-help text-bright",children:"облегчит"})," подготовку к ",n.jsx("span",{className:"font-help text-bright",children:"олимпиадам"}),"!"]}),n.jsx("p",{className:"font-sans text-2xl/[25px] font-normal tracking-[0.02em] max-[1146px]:text-lg/[25px]",children:"Теперь, чтобы найти задачу по теме больше не нужно пересматривать множество архивов в попытках найти подходящую, а достаточно вбить интересующий тег, получить условие и наслаждаться процессом решения Надеемся, что он поможет вам в достижении самых высоких олимпиадных вершин!"}),n.jsx(s.ScrollButton,{text:"Начать",id:"choice-section"})]})})}):window.innerWidth<683?n.jsx("section",{className:"h-screen bg-cover bg-right-bottom bg-no-repeat border-b-light-main border-b-[1px] min-[683px]:max-[900px]:h-auto ",style:{backgroundImage:`url(${l}SmallFon.png)`},children:n.jsx("div",{className:"wrapper px-0 mx-auto flex flex-col justify-center h-full max-[1280px]:px-5 max-[900px]:py-28",children:(0,n.jsxs)("div",{className:"flex flex-col gap-7 items-start w-full",children:[n.jsx("span",{className:"bg-clip-text bg-gradient-to-r from-bright to-medium text-[44px] text-transparent font-extrabold font-title max-[340px]:text-[38px]",children:"OlimpEducation"}),(0,n.jsxs)("h4",{className:"font-help text-lg/[1.3em] font-normal tracking-[0.04em]",children:["Наш проект ",n.jsx("span",{className:"font-help text-bright",children:"облегчит"})," подготовку к ",n.jsx("span",{className:"font-help text-bright",children:"олимпиадам"}),"!"]}),n.jsx("p",{className:"font-sans text-sm/[25px] font-normal tracking-[0.02em]",children:"Теперь, чтобы найти задачу по теме больше не нужно пересматривать множество архивов в попытках найти подходящую, а достаточно вбить интересующий тег, получить условие и наслаждаться процессом решения Надеемся, что он поможет вам в достижении самых высоких олимпиадных вершин!"}),n.jsx(s.ScrollButton,{text:"Начать",id:"choice-section"})]})})}):n.jsx("section",{className:"h-screen bg-cover bg-no-repeat bg-right-bottom border-b-light-main border-b-[1px] max-[900px]:h-auto ",style:{backgroundImage:`url(${l}MiddleFon.png)`},children:n.jsx("div",{className:"wrapper px-0 mx-auto flex flex-col justify-center h-full max-[1280px]:px-5 max-[900px]:py-28",children:(0,n.jsxs)("div",{className:"flex flex-col gap-7 items-start w-[738px] max-[1146px]:w-[506px]",children:[n.jsx("span",{className:"bg-clip-text bg-gradient-to-r from-bright to-medium text-7xl text-transparent font-extrabold font-title max-[1146px]:text-[64px]",children:"OlimpEducation"}),(0,n.jsxs)("h4",{className:"font-help text-[32px]/[1.3em] font-normal tracking-[0.04em] max-[1146px]:text-2xl/[1.3em]",children:["Наш проект ",n.jsx("span",{className:"font-help text-bright",children:"облегчит"})," подготовку к ",n.jsx("span",{className:"font-help text-bright",children:"олимпиадам"}),"!"]}),n.jsx("p",{className:"font-sans text-2xl/[25px] font-normal tracking-[0.02em] max-[1146px]:text-lg/[25px]",children:"Теперь, чтобы найти задачу по теме больше не нужно пересматривать множество архивов в попытках найти подходящую, а достаточно вбить интересующий тег, получить условие и наслаждаться процессом решения Надеемся, что он поможет вам в достижении самых высоких олимпиадных вершин!"}),n.jsx(s.ScrollButton,{text:"Начать",id:"choice-section"})]})})}):n.jsx(n.Fragment,{})}},221:(e,t,a)=>{"use strict";let{createProxy:n}=a(8570);e.exports=n("D:\\OpenServer\\OSPanel\\domains\\OlimpEdu\\olimpeducation\\node_modules\\next\\dist\\client\\image-component.js")},1812:(e,t,a)=>{"use strict";let{createProxy:n}=a(8570);e.exports=n("D:\\OpenServer\\OSPanel\\domains\\OlimpEdu\\olimpeducation\\node_modules\\next\\dist\\client\\link.js")},9241:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return r}}),a(6501);let n=a(5728),s=a(9472);function i(e){return void 0!==e.default}function l(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function r(e,t){var a;let r,o,x,{src:c,sizes:p,unoptimized:d=!1,priority:m=!1,loading:g,className:u,quality:h,width:f,height:b,fill:j=!1,style:N,overrideSrc:y,onLoad:v,onLoadingComplete:w,placeholder:k="empty",blurDataURL:S,fetchPriority:C,layout:O,objectFit:P,objectPosition:_,lazyBoundary:I,lazyRoot:E,...D}=e,{imgConf:B,showAltText:F,blurComplete:M,defaultLoader:$}=t,A=B||s.imageConfigDefault;if("allSizes"in A)r=A;else{let e=[...A.deviceSizes,...A.imageSizes].sort((e,t)=>e-t),t=A.deviceSizes.sort((e,t)=>e-t);r={...A,allSizes:e,deviceSizes:t}}if(void 0===$)throw Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config");let L=D.loader||$;delete D.loader,delete D.srcSet;let V="__next_img_default"in L;if(V){if("custom"===r.loader)throw Error('Image with src "'+c+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=L;L=t=>{let{config:a,...n}=t;return e(n)}}if(O){"fill"===O&&(j=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[O];e&&(N={...N,...e});let t={responsive:"100vw",fill:"100vw"}[O];t&&!p&&(p=t)}let W="",z=l(f),q=l(b);if("object"==typeof(a=c)&&(i(a)||void 0!==a.src)){let e=i(c)?c.default:c;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(o=e.blurWidth,x=e.blurHeight,S=S||e.blurDataURL,W=e.src,!j){if(z||q){if(z&&!q){let t=z/e.width;q=Math.round(e.height*t)}else if(!z&&q){let t=q/e.height;z=Math.round(e.width*t)}}else z=e.width,q=e.height}}let R=!m&&("lazy"===g||void 0===g);(!(c="string"==typeof c?c:W)||c.startsWith("data:")||c.startsWith("blob:"))&&(d=!0,R=!1),r.unoptimized&&(d=!0),V&&c.endsWith(".svg")&&!r.dangerouslyAllowSVG&&(d=!0),m&&(C="high");let G=l(h),T=Object.assign(j?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:P,objectPosition:_}:{},F?{}:{color:"transparent"},N),J=M||"empty"===k?null:"blur"===k?'url("data:image/svg+xml;charset=utf-8,'+(0,n.getImageBlurSvg)({widthInt:z,heightInt:q,blurWidth:o,blurHeight:x,blurDataURL:S||"",objectFit:T.objectFit})+'")':'url("'+k+'")',U=J?{backgroundSize:T.objectFit||"cover",backgroundPosition:T.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:J}:{},Y=function(e){let{config:t,src:a,unoptimized:n,width:s,quality:i,sizes:l,loader:r}=e;if(n)return{src:a,srcSet:void 0,sizes:void 0};let{widths:o,kind:x}=function(e,t,a){let{deviceSizes:n,allSizes:s}=e;if(a){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let n;n=e.exec(a);n)t.push(parseInt(n[2]));if(t.length){let e=.01*Math.min(...t);return{widths:s.filter(t=>t>=n[0]*e),kind:"w"}}return{widths:s,kind:"w"}}return"number"!=typeof t?{widths:n,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>s.find(t=>t>=e)||s[s.length-1]))],kind:"x"}}(t,s,l),c=o.length-1;return{sizes:l||"w"!==x?l:"100vw",srcSet:o.map((e,n)=>r({config:t,src:a,quality:i,width:e})+" "+("w"===x?e:n+1)+x).join(", "),src:r({config:t,src:a,quality:i,width:o[c]})}}({config:r,src:c,unoptimized:d,width:z,quality:G,sizes:p,loader:L});return{props:{...D,loading:R?"lazy":g,fetchPriority:C,width:z,height:q,decoding:"async",className:u,style:{...T,...U},sizes:Y.sizes,srcSet:Y.srcSet,src:y||Y.src},meta:{unoptimized:d,priority:m,placeholder:k,fill:j}}}},5728:(e,t)=>{"use strict";function a(e){let{widthInt:t,heightInt:a,blurWidth:n,blurHeight:s,blurDataURL:i,objectFit:l}=e,r=n?40*n:t,o=s?40*s:a,x=r&&o?"viewBox='0 0 "+r+" "+o+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+x+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(x?"none":"contain"===l?"xMidYMid":"cover"===l?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+i+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return a}})},9472:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var a in t)Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}(t,{VALID_LOADERS:function(){return a},imageConfigDefault:function(){return n}});let a=["default","imgix","cloudinary","akamai","custom"],n={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"inline",remotePatterns:[],unoptimized:!1}},6794:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var a in t)Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}(t,{default:function(){return o},getImageProps:function(){return r}});let n=a(3370),s=a(9241),i=a(221),l=n._(a(2049));function r(e){let{props:t}=(0,s.getImgProps)(e,{defaultLoader:l.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,a]of Object.entries(t))void 0===a&&delete t[e];return{props:t}}let o=i.Image},2049:(e,t)=>{"use strict";function a(e){let{config:t,src:a,width:n,quality:s}=e;return t.path+"?url="+encodeURIComponent(a)+"&w="+n+"&q="+(s||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n}}),a.__next_img_default=!0;let n=a},6501:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"warnOnce",{enumerable:!0,get:function(){return a}});let a=e=>{}},2305:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>h});var n=a(9510);a(1812);var s=a(8570);let i=(0,s.createProxy)(String.raw`D:\OpenServer\OSPanel\domains\OlimpEdu\olimpeducation\src\app\components\choice.js`),{__esModule:l,$$typeof:r}=i;i.default;let o=(0,s.createProxy)(String.raw`D:\OpenServer\OSPanel\domains\OlimpEdu\olimpeducation\src\app\components\choice.js#default`);a(6794);let x=(0,s.createProxy)(String.raw`D:\OpenServer\OSPanel\domains\OlimpEdu\olimpeducation\src\app\components\Buttons.js`),{__esModule:c,$$typeof:p}=x;x.default,(0,s.createProxy)(String.raw`D:\OpenServer\OSPanel\domains\OlimpEdu\olimpeducation\src\app\components\Buttons.js#ScrollButton`),(0,s.createProxy)(String.raw`D:\OpenServer\OSPanel\domains\OlimpEdu\olimpeducation\src\app\components\Buttons.js#DownloadTaskButton`),(0,s.createProxy)(String.raw`D:\OpenServer\OSPanel\domains\OlimpEdu\olimpeducation\src\app\components\Buttons.js#DownloadAnswerButton`),(0,s.createProxy)(String.raw`D:\OpenServer\OSPanel\domains\OlimpEdu\olimpeducation\src\app\components\Buttons.js#AsResolved`);let d=(0,s.createProxy)(String.raw`D:\OpenServer\OSPanel\domains\OlimpEdu\olimpeducation\src\app\components\preView.js`),{__esModule:m,$$typeof:g}=d;d.default;let u=(0,s.createProxy)(String.raw`D:\OpenServer\OSPanel\domains\OlimpEdu\olimpeducation\src\app\components\preView.js#default`);function h(){return(0,n.jsxs)(n.Fragment,{children:[n.jsx(u,{}),n.jsx(o,{})]})}}};var t=require("../webpack-runtime.js");t.C(e);var a=e=>t(t.s=e),n=t.X(0,[948,363,621,116],()=>a(959));module.exports=n})();