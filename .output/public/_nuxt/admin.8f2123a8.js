import{r,b as N,d as P,e as V,o as v,c as h,u as o,w as C,v as k,a as t,i as S,f as y,g as B,h as H,t as b,j as x,F as w,k as O,l as K,m as Y,n as E,p as j,q as F}from"./entry.42229b33.js";const q={key:0},G=K('<option value="FAT">FAT</option><option value="BALD">BALD</option><option value="HAIRY">HAIRY</option><option value="LIKE">LIKE</option><option value="NASTY">NASTY</option><option value="OLD">OLD</option><option value="POOR">POOR</option><option value="SHORT">SHORT</option><option value="SKINNY">SKINNY</option><option value="STUPID">STUPID</option><option value="TALL">TALL</option><option value="UGLY">UGLY</option>',12),M=[G],J={key:1},z=t("p",{class:"mb-4"},"Are you sure you want to delete this punchline?",-1),Q={class:"mb-4"},W={__name:"Punchline",props:{punchline:{type:Object,default:{},required:!0}},emits:["punchlinesUpdated","punchlinesDeleted"],setup(D,{emit:s}){const l=D,_=r(l.punchline.category),c=O(),a=r(!1),p=r(!1),f=r(l.punchline.punchline),n=N(c.supabaseUrl,c.supabaseKey),d=async()=>{const{data:g,error:e}=await n.from("punchlines").update({category:_.value,punchline:f.value}).eq("id",l.punchline.id);e?console.log(e):(p.value=!1,s("punchlinesUpdated",!0))},T=async()=>{const{data:g,error:e}=await n.from("punchlines").delete().eq("id",l.punchline.id);e?console.log(e):(a.value=!1,s("punchlinesDeleted",!0))};return(g,e)=>{const I=P("InputText"),U=P("Button"),i=P("Dialog"),u=V("tooltip");return v(),h(w,null,[o(p)?(v(),h("div",q,[C(t("select",{"onUpdate:modelValue":e[0]||(e[0]=m=>S(_)?_.value=m:null),class:"w-3 mr-2 mb-2",placeholder:"Select a category"},M,512),[[k,o(_)]]),y(I,{class:"w-full mb-2",modelValue:o(f),"onUpdate:modelValue":e[1]||(e[1]=m=>S(f)?f.value=m:null),onKeypress:B(d,["enter"])},null,8,["modelValue","onKeypress"]),y(U,{class:"button",label:"Save Changes",onClick:d}),C(t("i",{class:"pi pi-times text-2xl ml-2 cursor-pointer",onClick:e[2]||(e[2]=m=>p.value=!1)},null,512),[[u,"close editor"]])])):(v(),h("p",J,[H(" ("+b(D.punchline.category)+") "+b(D.punchline.punchline)+" ",1),t("i",{class:"pi pi-pencil ml-2 cursor-pointer",onClick:e[3]||(e[3]=m=>p.value=!0)}),t("i",{class:"pi pi-trash ml-2 cursor-pointer",onClick:e[4]||(e[4]=m=>a.value=!0)})])),y(i,{visible:o(a),"onUpdate:visible":e[5]||(e[5]=m=>S(a)?a.value=m:null),modal:"",header:"Delete This Meeting",style:{width:"50vw"}},{default:x(()=>[z,t("h4",Q,b(D.punchline.punchline),1),y(U,{class:"p-button-danger",onClick:T,label:"Yes, Delete This Punchline"})]),_:1},8,["visible"])],64)}}},X={for:"category",class:"mb-4"},Z=t("p",null,"Category",-1),ee=K('<option value="FAT">FAT</option><option value="BALD">BALD</option><option value="HAIRY">HAIRY</option><option value="LIKE">LIKE</option><option value="NASTY">NASTY</option><option value="OLD">OLD</option><option value="POOR">POOR</option><option value="SHORT">SHORT</option><option value="SKINNY">SKINNY</option><option value="STUPID">STUPID</option><option value="TALL">TALL</option><option value="UGLY">UGLY</option>',12),te=[ee],ne={for:"punchline",class:"mb-4"},oe=t("p",null,"Punchline",-1),le={__name:"AddPunchline",emits:["punchlinesUpdated"],setup(D,{emit:s}){const l=r(""),_=O(),c=r(""),a=N(_.supabaseUrl,_.supabaseKey),p=async()=>{const{data:f,error:n}=await a.from("punchlines").insert([{category:l.value,punchline:c.value}]);n?console.log(n):(l.value="",c.value="",s("punchlinesUpdated",!0))};return(f,n)=>{const d=P("InputText"),T=P("Button");return v(),h("div",null,[t("label",X,[Z,C(t("select",{id:"category","onUpdate:modelValue":n[0]||(n[0]=g=>S(l)?l.value=g:null),class:"w-full",placeholder:"Select a category"},te,512),[[k,o(l)]])]),t("label",ne,[oe,y(d,{id:"punchline",modelValue:o(c),"onUpdate:modelValue":n[1]||(n[1]=g=>S(c)?c.value=g:null),class:"w-full",placeholder:"Enter a punchline"},null,8,["modelValue"])]),y(T,{class:"p-button",onClick:p,label:"Add Punchline"})])}}};const se={key:0,class:"diss-card text-center"},ae=t("h1",{class:"mb-6"},"Diss Card Admin",-1),ie={class:"text-left"},ue={class:"mb-4"},ce={class:"mb-1"},pe={class:"mt-4 mb-1"},re={class:"mt-4 mb-1"},ve={__name:"admin",async setup(D){let s,l;const _=O(),c=N(_.supabaseUrl,_.supabaseKey),a=r(!1),p=r(null),f=r([]);r(0);const n=r(null),d=r(null);let{data:T}=([s,l]=Y(()=>c.from("subjects").select("*").order("subject")),s=await s,l(),s);T&&(d.value=T);let{data:g}=([s,l]=Y(()=>c.from("adjectives").select("*").order("adjective")),s=await s,l(),s);g&&(p.value=g);for(let i=0;i<d.value.length;i++)for(let u=0;u<p.value.length;u++)f.value.push({subject:d.value[i].subject,adjective:p.value[u].adjective});f.value.sort(()=>Math.random()-.5);const e=async()=>{let{data:i}=await c.from("punchlines").select("*").order("id");i&&(n.value=i,a.value=!1)},I=()=>{location.reload()};e();const U=E(()=>{const i={};return n.value.forEach(u=>{i[u.category]=i[u.category]+1||1}),i});return(i,u)=>{const m=W,R=le,$=P("Dialog");return o(n)?(v(),h("div",se,[ae,t("div",ie,[t("p",ue,[t("strong",null," Possible Judge Cards: "+b(o(d).length*o(p).length),1)]),t("p",ce,[t("u",null,"Subjects ("+b(o(d).length)+")",1)]),(v(!0),h(w,null,j(o(d),(A,L)=>(v(),h("p",{class:"mb-1",key:L},b(A.subject),1))),128)),t("p",pe,[t("u",null,"Adjectives ("+b(o(p).length)+")",1)]),(v(!0),h(w,null,j(o(U),(A,L)=>(v(),h("p",{class:"mb-1",key:L},b(L)+" ("+b(A)+") ",1))),128)),t("p",re,[t("u",null,"Punchlines ("+b(o(n).length)+")",1),t("i",{class:"pi pi-plus ml-2 cursor-pointer",onClick:u[0]||(u[0]=A=>a.value=!0)})]),(v(!0),h(w,null,j(o(n),(A,L)=>(v(),h("p",{key:L,class:"mb-1"},[y(m,{punchline:A,onPunchlinesUpdated:e,onPunchlinesDeleted:I},null,8,["punchline"])]))),128))]),y($,{visible:o(a),"onUpdate:visible":u[1]||(u[1]=A=>S(a)?a.value=A:null),modal:"",header:"Add A Punchline",style:{width:"50vw"}},{default:x(()=>[y(R,{onPunchlinesUpdated:e})]),_:1},8,["visible"])])):F("",!0)}}};export{ve as default};
