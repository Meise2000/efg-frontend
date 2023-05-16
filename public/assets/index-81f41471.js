var T=(r,t,e)=>{if(!t.has(r))throw TypeError("Cannot "+e)};var i=(r,t,e)=>(T(r,t,"read from private field"),e?e.call(r):t.get(r)),o=(r,t,e)=>{if(t.has(r))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(r):t.set(r,e)},l=(r,t,e,s)=>(T(r,t,"write to private field"),s?s.call(r,e):t.set(r,e),e);var a=(r,t,e)=>(T(r,t,"access private method"),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const c of n)if(c.type==="childList")for(const M of c.addedNodes)M.tagName==="LINK"&&M.rel==="modulepreload"&&s(M)}).observe(document,{childList:!0,subtree:!0});function e(n){const c={};return n.integrity&&(c.integrity=n.integrity),n.referrerPolicy&&(c.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?c.credentials="include":n.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(n){if(n.ep)return;n.ep=!0;const c=e(n);fetch(n.href,c)}})();const O={navigation:{home:{de:"Home",en:"Home",ir:"صفحه"},about:{de:"Über",en:"About",ir:"من"},appointments:{de:"Termine",en:"Appointments",ir:"صفحه"},donation:{de:"Spenden",en:"Donate",ir:"صفحه"},sermons:{de:"Predigten",en:"Sermons",ir:"صفحه"}},welcome:{title:{de:"Willkommen bei der Auferstehungskirche",en:"Welcome to Rübenkamp Church",ir:"خوش آمدید به کلیسای روبنکامپ"}},sermons:{title:{de:"Predigten",en:"Sermons",ir:"صفحه"}},appointments:{title:{de:"Termine",en:"Appointments",ir:"صفحه"}},about:{title:{de:"Über uns",en:"About",ir:"من"}}};var h,w,b;class S{constructor(t,e,s){o(this,h,void 0);o(this,w,void 0);o(this,b,void 0);l(this,h,t),l(this,w,s),l(this,b,e)}hide(){i(this,h).hidden=!0}show(){i(this,h).hidden=!1,window.document.title=i(this,b).translate(i(this,w)),this.display()}}h=new WeakMap,w=new WeakMap,b=new WeakMap;class G extends S{constructor(t,e){super(t,e,O.welcome.title)}display(){}}class I extends S{constructor(t,e){super(t,e,O.about.title)}display(){}}var q,x,P,m,v,f,N,j,C,H,D,W;const g=class extends S{constructor(e,s){super(e,s,O.sermons.title);o(this,N);o(this,C);o(this,D);o(this,m,void 0);o(this,v,void 0);o(this,f,void 0);l(this,v,e.querySelector("template")),l(this,f,e.querySelector("div"))}display(){a(this,N,j).call(this)&&(a(this,C,H).call(this),l(this,m,Date.now()))}};let d=g;q=new WeakMap,x=new WeakMap,P=new WeakMap,m=new WeakMap,v=new WeakMap,f=new WeakMap,N=new WeakSet,j=function(){return!i(this,m)||i(this,m)+i(g,P)<Date.now()},C=new WeakSet,H=function(){fetch(i(g,q)).then(e=>e.json()).then(e=>{const s=e.items.slice(0,i(g,x));a(this,D,W).call(this,s)}).catch(e=>{console.error(e)})},D=new WeakSet,W=function(e){i(this,f).innerHTML="";for(const s of e){const n=i(this,v).content.cloneNode(!0);n.querySelector("h2").textContent=s.title;const c=s.link.substr(s.link.indexOf("=")+1);n.querySelector("iframe").src="https://youtube.com/embed/"+c+"?controls=0&autoplay=0",i(this,f).appendChild(n)}},o(d,q,"https://api.rss2json.com/v1/api.json?rss_url=https://www.youtube.com/feeds/videos.xml?channel_id=UCFLblMGuKiILOvEedNYdlGA"),o(d,x,12),o(d,P,1e3*60*30);class K extends S{constructor(t,e){super(t,e,O.appointments.title)}display(){}}class U extends S{constructor(t,e){super(t,e,O.sermons.title)}display(){}}var A,y,E,F;class V{constructor(){o(this,E);o(this,A,void 0);o(this,y,void 0);l(this,A,document.querySelector("header")),l(this,y,new Map)}register(t,e){const s=i(this,A).querySelector(`a[href="#${t}"]`);s&&(i(this,y).set(s,e),s.addEventListener("click",n=>a(this,E,F).call(this,n)))}}A=new WeakMap,y=new WeakMap,E=new WeakSet,F=function(t){t.preventDefault();const e=t.currentTarget;i(this,y).forEach((s,n)=>{n===e?s.show():s.hide()})};var L,u,p;class ${constructor(){o(this,u);o(this,L,void 0);const t=document.querySelector("html").getAttribute("lang");l(this,L,t)}init(){const t=new V;a(this,u,p).call(this,t,"welcome",(e,s)=>new G(e,s)),a(this,u,p).call(this,t,"about",(e,s)=>new I(e,s)),a(this,u,p).call(this,t,"sermons",(e,s)=>new d(e,s)),a(this,u,p).call(this,t,"events",(e,s)=>new K(e,s)),a(this,u,p).call(this,t,"support",(e,s)=>new U(e,s))}translate(t){const e=i(this,L);return t[e]}}L=new WeakMap,u=new WeakSet,p=function(t,e,s){const n=document.querySelector(`#${e}`),c=s(n,this);t.register(e,c)};document.addEventListener("DOMContentLoaded",()=>{new $().init()});
