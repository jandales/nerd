import{d as r,o as t,c as s,b as n,t as a,e as u,f as _,F as m,r as d,u as x,h as f}from"./index-e20b7899.js";import{Q as h}from"./QuestionList-df41dccc.js";const k={class:"mb-4"},p={class:"text-xl font-bold mb-2"},b={class:"text-base"},g=["href"],q=r({__name:"Question",props:{question:String,answer:String,link:String},setup(e){return(c,i)=>(t(),s("div",k,[n("h2",p,a(e.question),1),n("p",b,[u(a(e.answer)+" ",1),e.link!=null?(t(),s("a",{key:0,href:e.link,class:"text-rose-500"},"contact form.",8,g)):_("",!0)])]))}}),w={class:"max-w-xl mx-auto mt-10 px-8 lg:px-0 mb-20"},Q=n("h1",{class:"text-3xl mb-8 font-bold"},"Frequently Asked Questions",-1),F=r({__name:"FAQ",setup(e){return(c,i)=>(t(),s("section",null,[n("div",w,[Q,(t(!0),s(m,null,d(x(h),(o,l)=>(t(),f(q,{key:l,question:o.question,answer:o.answer,link:o.link},null,8,["question","answer","link"]))),128))])]))}});export{F as default};
