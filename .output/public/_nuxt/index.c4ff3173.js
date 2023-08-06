import{b as M,r as n,m,u as s,c as u,F as C,a as c,t as y,w as F,f as R,p as V,q as x,k as T,d as q,e as z,o as d,s as K}from"./entry.d2a25769.js";const U={key:0,class:"diss-card text-center"},Y=c("h1",{class:"mb-6"},"Diss Card",-1),G={class:"card"},H={class:"grid mt-4 mb-6 justify-content-center"},J=c("div",{class:"col col-12 md:col-3 lg:col-2 xl:col answer-card mx-2 mb-3"},[c("textarea",{type:"text",class:"w-full",placeholder:"Enter your own punchline here!"})],-1),W={__name:"index",async setup(O){let t,o;const _=T(),p=M(_.supabaseUrl,_.supabaseKey),h=n(null),l=n([]),r=n(0),a=n(null),v=n(null);let{data:b}=([t,o]=m(()=>p.from("subjects").select("*").order("subject")),t=await t,o(),t);b&&(v.value=b);let{data:f}=([t,o]=m(()=>p.from("adjectives").select("*").order("adjective")),t=await t,o(),t);f&&(h.value=f);let D={category:"SPECIAL",punchline:"Dismiss! I'm rubber, you're glue! (Block any card played by another player.)"},S={category:"SPECIAL",punchline:"Disallow! Target player can't play a card."},k={category:"SPECIAL",punchline:"Discard! Swap any card with another player."},A={category:"SPECIAL",punchline:"Discombobulate! Automatically win the round!"},E={category:"SPECIAL",punchline:"Disembowel! Target player (or yourself) draws a new hand of cards."},I={category:"SPECIAL",punchline:"Disheveled! Swap any player’s hand with another player's hand."};for(let e=0;e<v.value.length;e++)for(let i=0;i<h.value.length;i++)l.value.push({subject:v.value[e].subject,adjective:h.value[i].adjective});l.value.sort(()=>Math.random()-.5);const w=()=>{r.value++},L=()=>{var e;a.value.sort(()=>Math.random()-.5),((e=l.value)==null?void 0:e.length)-1===r.value?(l.value.sort(()=>Math.random()-.5),r.value=0):w()};let{data:g}=([t,o]=m(()=>p.from("punchlines").select("*").order("id")),t=await t,o(),t);if(g){a.value=g;for(let e=0;e<20;e++)a.value.push(D),a.value.push(k),a.value.push(E),a.value.push(S),a.value.push(I);for(let e=0;e<10;e++)a.value.push(A);a.value.sort(()=>Math.random()-.5)}return(e,i)=>{const B=q("Button"),P=z("tooltip");return s(a)?(d(),u("div",U,[Y,s(l)&&s(l)[s(r)]?(d(),u(C,{key:0},[c("div",G," Your "+y(s(l)[s(r)].subject)+" is so "+y(s(l)[s(r)].adjective)+"... ",1),F(R(B,{class:"p-button-outlined p-button-rounded refresh mb-4",icon:"pi pi-refresh","aria-label":"Filter",onClick:w},null,512),[[P,"Select a new card"]]),c("div",H,[(d(!0),u(C,null,V(s(a).slice(0,6),(j,N)=>(d(),u("div",{key:N,class:K(["col col-4 md:col-3 lg:col-2 xl:col answer-card mx-2 mb-3",j.category])},y(j.punchline),3))),128)),J]),c("button",{class:"button cursor-pointer mb-6",onClick:L}," Start A New Round ")],64)):x("",!0)])):x("",!0)}}};export{W as default};
