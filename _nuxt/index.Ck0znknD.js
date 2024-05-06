import{o as gt,u as M,m as wt,_ as C,V,g as L,a as Ct,j as kt,b as Mt}from"./entry.Cc3JA-P7.js";import{u as tt}from"./index.Cx9PIzup.js";import{a as B,j as k,X as Tt,k as z,P as p,Q as v,$ as s,Z as r,u as e,Y as o,a0 as g,J as et,a6 as ot,W as R,R as w,L as _,a8 as H,q as P,_ as A,x as j,a9 as Bt,C as It,l as Rt,a7 as Nt,H as Vt,N as K}from"./swiper-vue.CkSI7WQq.js";import{a as zt}from"./index.bOkVZrAm.js";import{u as st}from"./useAccountApi.BbOJVYL8.js";import{P as Ft,C as Ht}from"./PromocodeModal.CxUAKBce.js";import{_ as At}from"./TheBox.B8u3BWaP.js";import{C as Lt,u as Pt}from"./usePagesApi.rtWGkrir.js";import{Q as St}from"./QuestionsBlock.LCcpeOpW.js";import{B as qt}from"./BaseBackground.DgsKRpzM.js";import{_ as Dt}from"./PasswordRules.vWSRAbkb.js";import{u as Ot}from"./VInput.vue.BeS3UWnx.js";import{M as xt}from"./ModalWrapper.pOW2wXCV.js";import{_ as Q}from"./useAuth.CKfe7WtT.js";import{M as Et}from"./MessageModal.D7Od6bSx.js";import{b as jt}from"./index.CFKccMgO.js";import{f as Kt,c as Qt}from"./date.DbBvCIQb.js";import{_ as Wt}from"./VIcon.vue.DPjwTbDF.js";import"./client-only.Czf3V_hs.js";import"./interval.79clK3Kh.js";import"./VSelect.DQPwl6CO.js";import"./icon-dropdown-arrow.B8lOb4a0.js";import"./LoginModal.C-5MNKHX.js";import"./icon-close.BvrPjLCb.js";import"./CounterCircle.CYnTzFlp.js";import"./VAccordion.BzsCadqp.js";function Zt(){const a=B(0),t=B(!1),{fetchTech:u}=gt();async function n(){try{const{technicalMode:i}=await u(),{time:c,on:l}=i;a.value=c,t.value=l}catch(i){console.log(i)}}return zt(async()=>{await n()},1e4,{immediateCallback:!0}),{time:a,on:t}}const nt=k({__name:"LoadNotification",props:{load:{type:String,default:"",validator:a=>["load1","load2","load3","load4",""].includes(a)}},setup(a){const t=a,{t:u}=M({useScope:"local"}),n=Tt(),i=z(()=>({[n[t.load]]:!0})),c=z(()=>{switch(t.load){case"load1":return u("Низкая загруженность сети");case"load2":return u("Загруженность сети средняя");case"load3":return u("Загруженность сети выше среднего");case"load4":return u("Высокая загруженность сети");default:return""}});return(l,$)=>(p(),v("div",{class:o(l.$style.LoadNotification)},[s("div",{class:o([l.$style.text,"common-text-3"])},r(e(c)),3),s("div",{class:o(("classNames"in l?l.classNames:e(wt))(l.$style.indicator,e(i)))},[s("div",{class:o(l.$style.strip)},null,2),s("div",{class:o(l.$style.strip)},null,2),s("div",{class:o(l.$style.strip)},null,2),s("div",{class:o(l.$style.strip)},null,2)],2)],2))}}),Ut="_LoadNotification_qhazd_8",Yt="_text_qhazd_19",Gt="_indicator_qhazd_24",Jt="_strip_qhazd_29",Xt="_load4_qhazd_36",te="_load1_qhazd_40",ee="_load2_qhazd_44",oe="_load3_qhazd_48",se={LoadNotification:Ut,text:Yt,indicator:Gt,strip:Jt,load4:Xt,load1:te,load2:ee,load3:oe};function W(a){const t=a;t.__i18n=t.__i18n||[],t.__i18n.push({locale:"",resource:{ru:{"Низкая загруженность сети":{t:0,b:{t:2,i:[{t:3}],s:"Низкая загруженность сети"}},"Загруженность сети средняя":{t:0,b:{t:2,i:[{t:3}],s:"Загруженность сети средняя"}},"Загруженность сети выше среднего":{t:0,b:{t:2,i:[{t:3}],s:"Загруженность сети выше среднего"}},"Высокая загруженность сети":{t:0,b:{t:2,i:[{t:3}],s:"Высокая загруженность сети"}}},en:{"Низкая загруженность сети":{t:0,b:{t:2,i:[{t:3}],s:"Low network congestion"}},"Загруженность сети средняя":{t:0,b:{t:2,i:[{t:3}],s:"Network congestion is average"}},"Загруженность сети выше среднего":{t:0,b:{t:2,i:[{t:3}],s:"Network congestion is above average"}},"Высокая загруженность сети":{t:0,b:{t:2,i:[{t:3}],s:"High network congestion"}}}}})}const ne={$style:se};typeof W=="function"&&W(nt);const ae=C(nt,[["__cssModules",ne]]),le=s("span",{class:"highlighter"},"OneMoment?",-1),ie=["src","alt"],at=k({__name:"InfoBlock",setup(a){const{t}=M({useScope:"local"}),u=[{image:"/images/fast.jpeg",subtitle:t("Быстро"),text:t("Текст")},{image:"/images/safely.jpeg",subtitle:t("Надёжно"),text:t("Текст2")},{image:"/images/round-the-clock.jpeg",subtitle:t("Поддержка 24/7"),text:t("Текст3")}];return(n,i)=>(p(),v("div",{class:o(n.$style.InfoBlock)},[s("h1",{class:o(["h1",n.$style.title])},[g(r(e(t)("Почему"))+" ",1),le],2),s("div",{class:o(n.$style.cards)},[(p(),v(et,null,ot(u,({image:c,subtitle:l,text:$})=>s("div",{key:l,class:o(n.$style.card)},[s("div",{class:o(n.$style.image_container)},[s("img",{src:c,alt:l,class:o(n.$style.image)},null,10,ie)],2),s("div",{class:o([n.$style.subtitle,"common-text-2"])},r(l),3),s("div",{class:o([n.$style.text,"common-text-3"])},r($),3)],2)),64))],2)],2))}}),ce="_title_1f57f_8",re="_subtitle_1f57f_17",ue="_text_1f57f_22",de="_image_container_1f57f_26",me="_image_1f57f_26",_e="_cards_1f57f_55",pe="_card_1f57f_55",fe={title:ce,subtitle:re,text:ue,image_container:de,image:me,cards:_e,card:pe};function Z(a){const t=a;t.__i18n=t.__i18n||[],t.__i18n.push({locale:"",resource:{ru:{Почему:{t:0,b:{t:2,i:[{t:3}],s:"Почему"}},Быстро:{t:0,b:{t:2,i:[{t:3}],s:"Быстро"}},Надёжно:{t:0,b:{t:2,i:[{t:3}],s:"Надёжно"}},"Поддержка 24/7":{t:0,b:{t:2,i:[{t:3}],s:"Поддержка 24/7"}},Текст:{t:0,b:{t:2,i:[{t:3}],s:"Максимальная скорость обмена за счет полной автоматизации"}},Текст2:{t:0,b:{t:2,i:[{t:3}],s:"Максимальная надежность обмена за счет безупречной репутации  и большого опыта нашего сервиса"}},Текст3:{t:0,b:{t:2,i:[{t:3}],s:"Наши консультанты на связи круглосуточно, чтобы предоставить помощь в решении любых вопросов"}}},en:{Почему:{t:0,b:{t:2,i:[{t:3}],s:"Why choosing"}},Быстро:{t:0,b:{t:2,i:[{t:3}],s:"It's Fast"}},Надёжно:{t:0,b:{t:2,i:[{t:3}],s:"It's Reliable"}},"Поддержка 24/7":{t:0,b:{t:2,i:[{t:3}],s:"24/7 Support"}},Текст:{t:0,b:{t:2,i:[{t:3}],s:"Top exchange speeds due to complete automization"}},Текст2:{t:0,b:{t:2,i:[{t:3}],s:"Maximum exchange reliability due to the impeccable reputation and extensive experience of our service"}},Текст3:{t:0,b:{t:2,i:[{t:3}],s:"Our consultants are available around the clock to provide assistance in resolving any issues"}}}}})}const $e={$style:fe};typeof Z=="function"&&Z(at);const he=C(at,[["__cssModules",$e]]),lt=k({__name:"ContestBanner",setup(a){const{t}=M({useScope:"local"}),{$modal:u}=L();function n(){u.open(P(Ft),{})}const i=tt();return(c,l)=>{const $=At;return p(),R($,{color:"secondary",padding:"pd32"},{default:w(()=>[s("div",{class:o(c.$style.ContestBanner)},[s("div",{class:o(c.$style.column)},[s("div",{class:o([c.$style.title,"h1"])},r(e(t)("Участвуй в конкурсе")),3),s("div",{class:o(["common-text-2",c.$style.text])},r(e(t)("Текст"))+"!",3),s("div",{class:o(c.$style.buttons)},[_(V,{class:o(c.$style.button),to:e(i)("/contest")},{default:w(()=>[g(r(e(t)("Участвовать")),1)]),_:1},8,["class","to"]),_(V,{color:"secondary",class:o(c.$style.button),onClick:H(n,["prevent"])},{default:w(()=>[g(r(e(t)("Получить промокод")),1)]),_:1},8,["class"])],2)],2),_(Lt,{class:o(c.$style.image)},null,8,["class"])],2)]),_:1})}}}),ve="_ContestBanner_1o93l_8",ye="_column_1o93l_24",be="_buttons_1o93l_37",ge="_button_1o93l_37",we="_image_1o93l_52",Ce="_text_1o93l_69",ke={ContestBanner:ve,column:ye,buttons:be,button:ge,image:we,text:Ce};function U(a){const t=a;t.__i18n=t.__i18n||[],t.__i18n.push({locale:"",resource:{ru:{"Получить промокод":{t:0,b:{t:2,i:[{t:3}],s:"Получить промокод"}},Участвовать:{t:0,b:{t:2,i:[{t:3}],s:"Участвовать"}},"Участвуй в конкурсе":{t:0,b:{t:2,i:[{t:3}],s:"Участвуй в конкурсе"}},Текст:{t:0,b:{t:2,i:[{t:3}],s:"Завершите обмен и получите возможность выиграть денежный приз"}}},en:{"Получить промокод":{t:0,b:{t:2,i:[{t:3}],s:"Get a promo code"}},Участвовать:{t:0,b:{t:2,i:[{t:3}],s:"Take part"}},"Участвуй в конкурсе":{t:0,b:{t:2,i:[{t:3}],s:"Take part in the competition"}},Текст:{t:0,b:{t:2,i:[{t:3}],s:"Complete your exchange and get a chance to win cash rewards"}}}}})}const Me={$style:ke};typeof U=="function"&&U(lt);const Te=C(lt,[["__cssModules",Me]]),Be=["onKeydown"],Ie={class:"modal-header"},Re={class:"h1"},Ne={class:"modal-inputs"},it=k({__name:"RecoverModal",props:{visible:{type:Boolean},data:{}},emits:["after-leave","after-enter"],setup(a){const t=a,{t:u}=M({useScope:"local"}),n=B(""),i=B(""),c=B(!1),{errors:l,setErrors:$,clearError:d}=Ot(),{$modal:I}=L();async function b(){if(!c.value)try{c.value=!0;const f={password:n.value,passwordAgain:i.value};(await st().resetAccount(t.data.code,f)).result==="ok"&&I.open(P(Et),{title:u("Пароль успешно изменен"),message:u("Теперь вы можете войти в свой аккаунт")})}catch(f){$(f.data)}finally{c.value=!1}}return(f,m)=>{const F=Dt;return p(),R(xt,{visible:f.visible,onAfterEnter:m[6]||(m[6]=T=>f.$emit("after-enter")),onAfterLeave:m[7]||(m[7]=T=>f.$emit("after-leave"))},{default:w(()=>{var T;return[s("form",{class:o(["common-text modal",f.$style.RecoverModal]),onSubmit:H(b,["prevent"]),onKeydown:Bt(H(b,["prevent"]),["enter"])},[s("div",Ie,[s("h2",Re,r(f.$t("Восстановление пароля")),1)]),e(l).nonFieldErrors?(p(),v("div",{key:0,class:o(["red common-text-2",f.$style.error])},r(e(l).nonFieldErrors),3)):A("",!0),s("div",Ne,[_(Q,{modelValue:e(n),"onUpdate:modelValue":[m[0]||(m[0]=h=>j(n)?n.value=h:null),m[1]||(m[1]=h=>e(d)("password"))],placeholder:f.$t("Новый пароль"),required:"",color:"secondary",error:e(l).password,onOnInnerIconClick:m[2]||(m[2]=h=>n.value="")},null,8,["modelValue","placeholder","error"]),_(Q,{modelValue:e(i),"onUpdate:modelValue":[m[3]||(m[3]=h=>j(i)?i.value=h:null),m[5]||(m[5]=h=>e(d)("passwordAgain"))],placeholder:f.$t("Повторите пароль"),required:"",color:"secondary",error:(T=e(l))==null?void 0:T.passwordAgain,onOnInnerIconClick:m[4]||(m[4]=h=>i.value="")},null,8,["modelValue","placeholder","error"])]),_(F),_(V,{type:"submit",block:""},{default:w(()=>[g(r(f.$t("Восстановить пароль")),1)]),_:1})],42,Be)]}),_:1},8,["visible"])}}}),Ve="_text_1uq6r_8",ze="_error_1uq6r_12",Fe={text:Ve,error:ze};function Y(a){const t=a;t.__i18n=t.__i18n||[],t.__i18n.push({locale:"",resource:{ru:{"Пароль успешно изменен":{t:0,b:{t:2,i:[{t:3}],s:"Пароль успешно изменен"}},"Теперь вы можете войти в свой аккаунт":{t:0,b:{t:2,i:[{t:3}],s:"Теперь вы можете войти в свой аккаунт"}}},en:{"Пароль успешно изменен":{t:0,b:{t:2,i:[{t:3}],s:"The password has been changed successfully"}},"Теперь вы можете войти в свой аккаунт":{t:0,b:{t:2,i:[{t:3}],s:"You can now log in to your account."}}}}})}const He={$style:Fe};typeof Y=="function"&&Y(it);const Ae=C(it,[["__cssModules",He]]),Le=s("br",null,null,-1),Pe={class:"highlighter"},ct=k({__name:"TechMode",props:{time:{type:Number,default:0}},setup(a){const t=a,u=jt(),n=B(null);function i(d){n.value=new Date(u.value.getTime()+d*1e3)}const c=z(()=>{if(!n.value)return 0;const d=Math.floor((n.value.getTime()-u.value.getTime())/1e3);return d<=0?0:Kt(d)}),{time:l}=It(t);i(l.value);const{t:$}=M({useScope:"local"});return(d,I)=>(p(),v("div",{class:o(d.$style.TechMode)},[s("div",{class:o(d.$style.text)},[g(r(e($)("Ведутся технические работы"))+".",1),Le,g(" "+r(e($)("Возвращайтесь через"))+" ",1),s("span",Pe,r(e(c)),1)],2)],2))}}),Se="_TechMode_1knos_8",qe="_text_1knos_21",De={TechMode:Se,text:qe};function G(a){const t=a;t.__i18n=t.__i18n||[],t.__i18n.push({locale:"",resource:{ru:{"Ведутся технические работы":{t:0,b:{t:2,i:[{t:3}],s:"Ведутся технические работы"}},"Возвращайтесь через":{t:0,b:{t:2,i:[{t:3}],s:"Возвращайтесь через"}}},en:{"Ведутся технические работы":{t:0,b:{t:2,i:[{t:3}],s:"Technical work is underway"}},"Возвращайтесь через":{t:0,b:{t:2,i:[{t:3}],s:"Come back in"}}}}})}const Oe={$style:De};typeof G=="function"&&G(ct);const xe=C(ct,[["__cssModules",Oe]]),Ee={viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg"},je=s("path",{d:"M24 24C21.8 24 19.9167 23.2167 18.35 21.65C16.7833 20.0833 16 18.2 16 16C16 13.8 16.7833 11.9167 18.35 10.35C19.9167 8.78333 21.8 8 24 8C26.2 8 28.0833 8.78333 29.65 10.35C31.2167 11.9167 32 13.8 32 16C32 18.2 31.2167 20.0833 29.65 21.65C28.0833 23.2167 26.2 24 24 24ZM8 40V34.4C8 33.2667 8.292 32.2253 8.876 31.276C9.46 30.3267 10.2347 29.6013 11.2 29.1C13.2667 28.0667 15.3667 27.292 17.5 26.776C19.6333 26.26 21.8 26.0013 24 26C26.2 26 28.3667 26.2587 30.5 26.776C32.6333 27.2933 34.7333 28.068 36.8 29.1C37.7667 29.6 38.542 30.3253 39.126 31.276C39.71 32.2267 40.0013 33.268 40 34.4V40H8Z",fill:"#006FE8"},null,-1),Ke=[je];function Qe(a,t){return p(),v("svg",Ee,[...Ke])}const We={render(){return Rt(Wt,{icon:{render:Qe},name:"icon-person"})}},Ze=k({__name:"ReviewItem",props:{name:{},review:{},date:{}},setup(a){return(t,u)=>{const n=We;return p(),v("div",{class:o(t.$style.ReviewItem)},[s("div",{class:o(t.$style.content)},[s("div",{class:o(t.$style.row)},[_(n,{class:o(t.$style.icon)},null,8,["class"]),s("div",{class:o(t.$style.column)},[s("p",{class:o([t.$style.name,"common-text"])},r(t.name),3),s("p",{class:o([t.$style.description,"common-text"])},"BestChange",2)],2)],2),s("p",{class:o([t.$style.review,"common-text"])},'"'+r(t.review)+'"',3)],2),s("p",{class:o([t.$style.date,"common-text"])},r(("convertDate"in t?t.convertDate:e(Qt))(t.date)),3)],2)}}}),Ue="_ReviewItem_z6xnf_8",Ye="_content_z6xnf_19",Ge="_row_z6xnf_26",Je="_column_z6xnf_32",Xe="_icon_z6xnf_38",to="_description_z6xnf_42",eo={ReviewItem:Ue,content:Ye,row:Ge,column:Je,icon:Xe,description:to},oo={$style:eo},so=C(Ze,[["__cssModules",oo]]),no={class:"h1"},rt=k({__name:"ReviewsBlock",async setup(a){let t,u;const{fetchReviews:n}=Pt(),{data:i,pending:c}=([t,u]=Nt(()=>n()),t=await t,u(),t),l=z(()=>{var d;return(d=i.value)==null?void 0:d.reviews.slice(0,3)}),{t:$}=M({useScope:"local"});return(d,I)=>(p(),v("div",{class:o(d.$style.ReviewsBlock)},[s("h3",no,r(e($)("Отзывы")),1),s("div",{class:o(d.$style.row)},[e(c)?(p(),v("p",{key:0,class:o(d.$style.loading)},"Идет загрузка...",2)):(p(!0),v(et,{key:1},ot(e(l),b=>(p(),R(so,{key:b.id,name:b.name,review:b.review,date:b.dateTime},null,8,["name","review","date"]))),128))],2),_(V,{class:o(d.$style.button),blank:"",to:"https://www.bestchange.net/onemoment-exchanger.html"},{default:w(()=>[g(r(e($)("Читать отзывы на"))+" BestChange",1)]),_:1},8,["class"])],2))}}),ao="_ReviewsBlock_1trn7_8",lo="_row_1trn7_17",io="_button_1trn7_27",co="_loading_1trn7_32",ro={ReviewsBlock:ao,row:lo,button:io,loading:co};function J(a){const t=a;t.__i18n=t.__i18n||[],t.__i18n.push({locale:"",resource:{ru:{Отзывы:{t:0,b:{t:2,i:[{t:3}],s:"Отзывы"}},"Читать отзывы на":{t:0,b:{t:2,i:[{t:3}],s:"Читать отзывы на"}}},en:{Отзывы:{t:0,b:{t:2,i:[{t:3}],s:"Reviews"}},"Читать отзывы на":{t:0,b:{t:2,i:[{t:3}],s:"Read reviews on"}}}}})}const uo={$style:ro};typeof J=="function"&&J(rt);const mo=C(rt,[["__cssModules",uo]]),_o={class:"highlighter"},po={class:"highlighter"},ut=k({__name:"index",setup(a){const{$modal:t}=L(),u=Ct(),{query:n}=u,{t:i}=M({useScope:"local"}),{activateAccount:c}=st(),{init:l,fromDirections:$,toDirections:d,fromDirection:I,toDirection:b,onFromCurrencyChange:f,onToCurrencyChange:m,fromValue:F,toValue:T,formInputsMeta:h,handleInputFrom:dt,handleInputTo:mt,handleChangeFrom:_t,handleChangeTo:pt,setInitialCurrencies:ft,setRefferal:$t,discount:ht,congestion:N,directionsNotifications:vt}=kt(),yt=tt(),{on:S,time:bt}=Zt();return Vt(async()=>{await ft(),await l(),await $t(),n!=null&&n.restore&&t.open(P(Ae),{code:n==null?void 0:n.restore}),n!=null&&n.activate&&(await c(n==null?void 0:n.activate),Mt().push(yt("/account/payouts")))}),(y,Bo)=>{var q,D,O,x;return p(),v("div",{class:o([y.$style.HomePage,"container"])},[_(qt),s("div",{class:o(y.$style.column)},[s("h1",{class:o(["h1",y.$style.title])},[g(r(e(i)("Быстрый"))+" ",1),s("span",_o,r(e(i)("Криптовалюта")),1),g(" "+r(e(i)("Обмен"))+" ",1),s("span",po,r(e(i)("Криптовалюты")),1)],2),s("div",{class:o(y.$style.subtitle)},r(e(i)("Подзаголовок")),3)],2),s("div",{class:o(y.$style.wrapper)},[_(Ht,{class:o(y.$style.calculator),"with-button":"","from-value":e(F),"to-value":e(T),"from-round":(D=(q=e(h))==null?void 0:q.from)==null?void 0:D.round,"to-round":(x=(O=e(h))==null?void 0:O.to)==null?void 0:x.round,"form-inputs-meta":e(h),"from-directions":e($),"to-directions":e(d),"to-direction":e(b),"from-direction":e(I),discount:e(ht),"disabled-button":e(S),notifications:e(vt),onOnFromCurrencyChange:e(f),onOnToCurrencyChange:e(m),onHandleInputFrom:e(dt),onHandleInputTo:e(mt),onHandleChangeFrom:e(_t),onHandleChangeTo:e(pt)},null,8,["class","from-value","to-value","from-round","to-round","form-inputs-meta","from-directions","to-directions","to-direction","from-direction","discount","disabled-button","notifications","onOnFromCurrencyChange","onOnToCurrencyChange","onHandleInputFrom","onHandleInputTo","onHandleChangeFrom","onHandleChangeTo"]),_(K,{name:"fade-fast"},{default:w(()=>[e(S)?(p(),R(xe,{key:0,time:e(bt)},null,8,["time"])):A("",!0)]),_:1})],2),_(K,{name:"fade-fast"},{default:w(()=>{var E;return[e(N)?(p(),R(ae,{key:0,load:e(N)&&e(N).load?`load${(E=e(N))==null?void 0:E.load}`:"",class:o(y.$style.load)},null,8,["load","class"])):A("",!0)]}),_:1}),_(he,{class:o(y.$style.info)},null,8,["class"]),_(Te,{class:o(y.$style.contest)},null,8,["class"]),_(St,{class:o(y.$style.questions)},null,8,["class"]),_(mo)],2)}}}),fo="_HomePage_ml342_8",$o="_wrapper_ml342_12",ho="_column_ml342_16",vo="_title_ml342_20",yo="_subtitle_ml342_25",bo="_calculator_ml342_32",go="_load_ml342_36",wo="_questions_ml342_37",Co="_info_ml342_38",ko="_contest_ml342_39",Mo={HomePage:fo,wrapper:$o,column:ho,title:vo,subtitle:yo,calculator:bo,load:go,questions:wo,info:Co,contest:ko};function X(a){const t=a;t.__i18n=t.__i18n||[],t.__i18n.push({locale:"",resource:{ru:{Быстрый:{t:0,b:{t:2,i:[{t:3}],s:"Быстрый"}},Обмен:{t:0,b:{t:2,i:[{t:3}],s:"обмен"}},Криптовалюта:{t:0,b:{static:"",t:2,i:[]}},Криптовалюты:{t:0,b:{t:2,i:[{t:3}],s:"криптовалюты"}},Подзаголовок:{t:0,b:{t:2,i:[{t:3}],s:"Быстрые и безопасные обмены для наших клиентов 24/7"}}},en:{Быстрый:{t:0,b:{t:2,i:[{t:3}],s:"Swift"}},Обмен:{t:0,b:{t:2,i:[{t:3}],s:"exchange"}},Криптовалюта:{t:0,b:{t:2,i:[{t:3}],s:"cryptocurrency"}},Криптовалюты:{t:0,b:{static:"",t:2,i:[]}},Подзаголовок:{t:0,b:{t:2,i:[{t:3}],s:"24/7 quick and secure exchange for our customers"}}}}})}const To={$style:Mo};typeof X=="function"&&X(ut);const ts=C(ut,[["__cssModules",To]]);export{ts as default};
