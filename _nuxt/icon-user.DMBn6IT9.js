import{z as u,A as f}from"./entry.Cc3JA-P7.js";import{u as C}from"./index.Cx9PIzup.js";import{j as _,k as o,l as r,P as d,Q as h,a5 as m}from"./swiper-vue.CkSI7WQq.js";import{_ as p}from"./VIcon.vue.DPjwTbDF.js";const a=f({componentName:"NuxtLinkLocale"}),V=_({name:"NuxtLinkLocale",props:{...a.props,locale:{type:String,default:void 0,required:!1}},setup(e,{slots:n}){const l=C(),c=o(()=>{const t=e.to??e.href;return t!=null?l(t,e.locale):t}),i=o(()=>{if(e.external||e.target&&e.target!=="_self")return!0;const t=e.to??e.href;return typeof t=="object"?!1:t===""||t==null||u(t,{acceptRelative:!0})}),s=()=>{const t={...e};return i.value||(t.to=c.value),delete t.href,delete t.locale,t};return()=>r(a,s(),n.default)}}),x={viewBox:"0 0 21 22",fill:"none",xmlns:"http://www.w3.org/2000/svg"},g=m('<g clip-path="url(#clip0_4484_822)"><path d="M10.5003 13.3848C4.62539 13.3848 0.0234375 16.107 0.0234375 19.5823V20.6521C0.0234375 21.1206 0.403242 21.5004 0.871723 21.5004C1.3402 21.5004 1.72001 21.1206 1.72001 20.6521V19.5823C1.72001 17.1425 5.74085 15.0813 10.5003 15.0813C15.2597 15.0813 19.2805 17.1425 19.2805 19.5823V20.6521C19.2805 21.1206 19.6603 21.5004 20.1288 21.5004C20.5973 21.5004 20.9771 21.1206 20.9771 20.6521V19.5823C20.9771 16.107 16.3751 13.3848 10.5003 13.3848Z" fill="currentColor"></path><path d="M15.6183 4.87551C15.4557 3.77924 14.9555 2.78555 14.1718 2.00187C13.3882 1.21818 12.3945 0.71808 11.2982 0.555494C10.7992 0.481502 10.293 0.481502 9.79392 0.555494C6.9971 0.970244 5.05915 3.58302 5.47386 6.37984C5.67476 7.73466 6.39126 8.93019 7.49134 9.74611C8.38441 10.4085 9.4434 10.7564 10.5352 10.7564C10.7883 10.7564 11.0433 10.7377 11.2982 10.6998C14.095 10.2851 16.033 7.67232 15.6183 4.87551ZM11.0494 9.02161C10.143 9.1561 9.2382 8.92945 8.50213 8.38345C7.76602 7.83749 7.28663 7.03752 7.15222 6.13099C6.87471 4.25953 8.17146 2.51124 10.0429 2.23373C10.2099 2.209 10.378 2.19661 10.5462 2.19661C10.7143 2.19661 10.8825 2.209 11.0494 2.23373C12.5552 2.45702 13.7169 3.61871 13.9401 5.12443C14.2175 6.99585 12.9208 8.74414 11.0494 9.02161Z" fill="currentColor"></path></g><defs><clipPath id="clip0_4484_822"><rect width="21" height="21" fill="white" transform="translate(0 0.5)"></rect></clipPath></defs>',2),L=[g];function k(e,n){return d(),h("svg",x,[...L])}const B={render(){return r(p,{icon:{render:k},name:"icon-user"})}};export{B as _,V as a};
