"use strict";(self.webpackChunkelectro_rent=self.webpackChunkelectro_rent||[]).push([[280],{4596:(n,t,e)=>{e.d(t,{Fo:()=>l,UE:()=>d,VG:()=>c,VM:()=>a,ZE:()=>s,yA:()=>p});var o=e(5294),i=e(3014),r=e(4880);const a=async n=>{let{page:t,search:e,type:o,sort:a,setFreeList:p,setFreeLength:d}=n;try{let n="".concat(i.L,"/api/board?page=").concat(t);e&&(n+="&search=".concat(e)),o&&(n+="&type=".concat(o)),a&&(n+="&sort=".concat(a));const c=await r.A.get(n);p([...c.data.boardList]),d(c.data.totalBoardCount)}catch(c){console.log(c)}},p=async n=>{try{const t="".concat(i.L,"/api/board/").concat(n);return await o.Z.get(t)}catch(t){console.log(t)}},d=async n=>{try{const t="".concat(i.L,"/api/board/like/").concat(n);return await r.A.get(t)}catch(t){console.log(t)}},c=async n=>{let{obj:t}=n;try{const n={headers:{"Content-Type":"multipart/form-data"}},e="".concat(i.L,"/api/board");return await r.A.post(e,t,n)}catch(e){console.log(e)}},s=async n=>{let{obj:t}=n;try{const n={headers:{"Content-Type":"multipart/form-data"}},e="".concat(i.L,"/api/board");return await r.A.put(e,t,n)}catch(e){console.log(e)}},l=async n=>{try{const t="".concat(i.L,"/api/board/").concat(n);return await r.A.delete(t)}catch(t){console.log(t)}}},8280:(n,t,e)=>{e.r(t),e.d(t,{default:()=>l});var o=e(2791),i=e(5787),r=e(8690),a=e(9329),p=(e(6009),e(9008)),d=e(5772),c=e(4596),s=e(184);const l=()=>{const n=(0,d.s0)(),[t,e]=(0,o.useState)([]),[l,g]=(0,o.useState)(null),[h,x]=(0,o.useState)([]);console.log(h);const b=new URLSearchParams(location.search),f=parseInt(b.get("iboard")),[u,m]=(0,o.useState)(null),[w,y]=(0,o.useState)(""),[Z,v]=(0,o.useState)("");(0,o.useEffect)((()=>{(async()=>{try{const n=await(0,c.yA)(f);m(n.data)}catch(n){console.error("Error fetching product data:",n)}})()}),[f]),(0,o.useEffect)((()=>{u&&(y(u.title),v(u.contents),e([...u.pic]))}),[u]);return(0,s.jsx)(i.Z,{children:(0,s.jsxs)(r.ku,{children:[(0,s.jsxs)(a.ZB,{children:[(0,s.jsx)("p",{children:"\uc790\uc720\uac8c\uc2dc\ud310"}),(0,s.jsx)(r.ho,{onClick:()=>{n("/free")}})]}),(0,s.jsxs)(r.cq,{children:[(0,s.jsxs)("form",{children:[(0,s.jsx)("input",{type:"text",maxLength:50,placeholder:"\uc81c\ubaa9\uc744 \uc785\ub825\ud574 \uc8fc\uc138\uc694",value:w,onChange:n=>{y(n.target.value)}}),(0,s.jsx)("button",{type:"button",onClick:n=>{y("")}})]}),(0,s.jsx)("div",{children:(0,s.jsx)("textarea",{type:"text",maxLength:2e3,value:Z,onChange:n=>{v(n.target.value)},placeholder:"\ub0b4\uc6a9\uc744 \uc785\ub825\ud574 \uc8fc\uc138\uc694."})}),(0,s.jsxs)("div",{children:[(0,s.jsxs)(r.n$,{children:[(0,s.jsx)("p",{children:"\uc0ac\uc9c4"}),t.length<3&&(0,s.jsx)("button",{type:"button",onClick:()=>{document.getElementById("img").click()},children:"\uc0ac\uc9c4 \ucd94\uac00"}),(0,s.jsx)("input",{type:"file",accept:"image/png, image/gif, image/jpeg",onClick:()=>{document.getElementById("img").click()},onChange:n=>{(n=>{const o=n.target.files[0];if(o&&t.length<3){const n=URL.createObjectURL(o);g(o),e((t=>[...t,n]))}})(n)},id:"img",style:{display:"none"}})]}),(0,s.jsx)(r.sA,{children:t.map(((n,o)=>(0,s.jsx)("div",{onClick:()=>(n=>{const o=t[n],i=t.filter(((t,e)=>e!==n)),r=u.pic.find((n=>n.boardPic===o.boardPic));r&&x((n=>[...n,r.ipics])),e(i)})(o),children:n.boardPic?(0,s.jsx)("img",{src:"/pic/".concat(n.boardPic),alt:""}):(0,s.jsx)("img",{src:n,alt:""})},o)))})]})]}),(0,s.jsxs)(p._q,{mgbtm:"40px",children:[(0,s.jsx)(p.ty,{onClick:()=>{n("/free")},children:"\ucde8\uc18c"}),(0,s.jsx)(p.c0,{onClick:async()=>{const e=new FormData,o=0===h.length?[0]:h,i={iboard:f,title:w,contents:Z,ipics:o};e.append("dto",new Blob([JSON.stringify(i)],{type:"application/json"})),e.append("dto",i);const r=t.filter((n=>"string"===typeof n));if(t){const t=r.map((async n=>{const t=await fetch(n),o=await t.blob(),i=new Date,r=Math.floor(i.getTime()/1e3),a=new File([o],"image".concat(r,".jpg"),{type:"image/jpeg"});e.append("storedPic",a)}));await Promise.all(t),await(0,c.ZE)({obj:e}),n("/free/details?iboard=".concat(f))}},children:"\uc800\uc7a5"})]})]})})}},9329:(n,t,e)=>{e.d(t,{O7:()=>u,QE:()=>Z,R7:()=>w,W:()=>x,ZB:()=>b,_q:()=>y,ru:()=>m,yd:()=>f});var o,i,r,a,p,d,c,s,l=e(168),g=e(225),h=e(8155);const x=g.Z.div(o||(o=(0,l.Z)(["\n  width: 1260px;\n  margin: 0 auto;\n"]))),b=g.Z.div(i||(i=(0,l.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border-bottom: 1px solid #2c39b5;\n  padding-bottom: 17px;\n  p {\n    color: #000;\n    font-size: 24px;\n    font-weight: 400;\n    font-style: normal;\n    line-height: normal;\n  }\n"]))),f=g.Z.div(r||(r=(0,l.Z)(["\n  display: flex;\n  width: 330px;\n  height: 35px;\n  border: 1px solid #bebebe;\n  select {\n    width: 100px;\n    border: none;\n    border-right: 1px solid #bebebe;\n  }\n"]))),u=g.Z.div(a||(a=(0,l.Z)(['\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 230px;\n  height: 35px;\n  padding: 0 10px;\n  /* border: 1px solid #BEBEBE; */\n  input {\n    border: none;\n    width: 180px;\n    height: 30px;\n    font-size: 16px;\n    font-weight: 400;\n  }\n  button {\n    width: 16px;\n    height: 16px;\n    background-image: url("/images/free/bt_search.svg");\n    background-color: transparent;\n    border: none;\n    cursor: pointer;\n  }\n']))),m=g.Z.div(p||(p=(0,l.Z)(["\n  table {\n    width: 100%;\n    border-collapse: collapse;\n  }\n  th {\n    height: 50px;\n    border-bottom: 1px solid #bebebe;\n    text-align: center;\n    background: #e4e7ff;\n    font-size: 16px;\n    font-weight: normal;\n  }\n  td {\n    height: 60px;\n    padding: 10px;\n    border-bottom: 1px solid #bebebe;\n    text-align: center;\n    font-size: 14px;\n    background: #fff;\n    cursor: pointer;\n  }\n"]))),w=g.Z.div(d||(d=(0,l.Z)(["\n  margin-top: 25px;\n  margin-bottom: 10px;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  gap: 10px;\n  button {\n    border: none;\n    background: transparent;\n    font-size: 15px;\n    color: #777;\n    cursor: pointer;\n  }\n  img {\n    width: 2px;\n    height: 15px;\n  }\n"]))),y=g.Z.div(c||(c=(0,l.Z)(["\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 10px;\n  button {\n    width: 150px;\n    height: 40px;\n    background: #2c39b5;\n    border: none;\n\n    color: #fff;\n    font-size: 16px;\n    cursor: pointer;\n  }\n"]))),Z=(0,g.Z)(h.Z)(s||(s=(0,l.Z)(["\n  .ant-pagination-item-active {\n    border-color: #2c39b5;\n    background-color: #2c39b5;\n  }\n  .ant-pagination-item-active a {\n    color: #fff;\n  }\n  .ant-pagination-item-active:hover {\n    border-color: #2c39b5;\n    background-color: #2c39b5;\n  }\n  .ant-pagination-item-active a:hover {\n    color: #fff;\n  }\n  .ant-pagination-options {\n    display: none;\n  }\n"])))},8690:(n,t,e)=>{e.d(t,{cq:()=>g,ho:()=>l,ku:()=>s,n$:()=>h,sA:()=>x});var o,i,r,a,p,d=e(168),c=e(225);const s=c.Z.div(o||(o=(0,d.Z)(["\n  width: 1260px;\n  margin: 0 auto;\n"]))),l=c.Z.button(i||(i=(0,d.Z)(['\n  width: 94px;\n  height: 30px;\n  background-image: url("/images/free/goToList.svg");\n  border: none;\n  cursor: pointer;\n']))),g=c.Z.div(r||(r=(0,d.Z)(['\n  margin-top: 20px;\n  margin-bottom: 50px;\n  form {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    width: 1260px;\n    height: 50px;\n    border: 1px solid #d9d9d9;\n    margin-bottom: 30px;\n    padding-left: 10px;\n    padding-right: 10px;\n    input {\n      display: flex;\n      width: 1200px;\n      height: 40px;\n      border: none;\n\n      color: #000;\n      font-size: 18px;\n      font-style: normal;\n      font-weight: 400;\n      line-height: normal;\n    }\n    button {\n      width: 28px;\n      height: 28px;\n      border-radius: 100%;\n      background-color: transparent;\n      flex-shrink: 0;\n      border: none;\n      background-image: url("/images/free/bt_cancel.svg");\n      cursor: pointer;\n    }\n  }\n\n  textarea {\n    resize: none;\n    width: 1260px;\n    height: 500px;\n    border: 1px solid #d9d9d9;\n    padding: 10px;\n    margin-bottom: 40px;\n\n    color: #000;\n    font-size: 18px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: normal;\n  }\n']))),h=c.Z.div(a||(a=(0,d.Z)(["\n  display: flex;\n  justify-content: space-between;\n  padding-bottom: 5px;\n  margin-bottom: 20px;\n  border-bottom: 1px solid #d9d9d9;\n  p {\n    color: #777;\n    font-size: 18px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: normal;\n  }\n  button {\n    padding: 5px;\n    background: transparent;\n    border: 1px solid #000;\n    border-radius: 5px;\n    font-size: 15px;\n    cursor: pointer;\n  }\n"]))),x=c.Z.div(p||(p=(0,d.Z)(["\n  display: flex;\n  justify-content: start;\n  gap: 30px;\n  img {\n    width: 400px;\n    height: 400px;\n    cursor: pointer;\n  }\n"])))},9008:(n,t,e)=>{e.d(t,{GU:()=>q,Hg:()=>P,MY:()=>L,SL:()=>j,UT:()=>S,ZZ:()=>C,_q:()=>_,ay:()=>z,c0:()=>U,ft:()=>E,fx:()=>Z,lF:()=>B,rs:()=>k,sp:()=>A,ty:()=>F,ve:()=>v});var o,i,r,a,p,d,c,s,l,g,h,x,b,f,u,m,w=e(168),y=e(225);const Z=y.Z.div(o||(o=(0,w.Z)(["\n  width: 1300px;\n  text-align: center;\n  margin: 0 auto;\n  /* background: skyblue; */\n"]))),v=y.Z.form(i||(i=(0,w.Z)(["\n  width: 980px;\n  /* height: 700px; */\n  border-radius: 10px;\n  border: 1px solid #2c39b5;\n  margin: ",";\n  padding: 60px 90px;\n"])),(n=>n.margin?n.margin:"0 auto 100px")),j=y.Z.div(r||(r=(0,w.Z)(["\n  display: flex;\n  justify-content: space-between;\n  margin-top: 15px;\n  margin-bottom: 3px;\n"]))),k=y.Z.div(a||(a=(0,w.Z)(["\n  display: flex;\n  p {\n    color: #000;\n    font-size: 16px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: normal;\n  }\n  span {\n    color: #ff0303;\n    font-size: 13px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: normal;\n  }\n"]))),z=y.Z.div(p||(p=(0,w.Z)(["\n  display: block;\n  text-align: start;\n"]))),L=y.Z.div(d||(d=(0,w.Z)(["\n  display: flex;\n  justify-content: space-between;\n  width: 600px;\n  /* background: pink; */\n  img {\n    width: 180px;\n    height: 180px;\n    object-fit: cover;\n    border-radius: 5px;\n    border: 1px solid #2c39b5;\n  }\n  input {\n    border-radius: 5px;\n    border: 1px solid #2c39b5;\n\n    width: ",";\n    height: 36px;\n    padding-left: 15px;\n\n    color: #000;\n    font-size: 16px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: normal;\n  }\n  div {\n    border-radius: 5px;\n    border: 1px solid #2c39b5;\n\n    width: ",";\n    height: 36px;\n    padding-left: 15px;\n\n    color: #000;\n    font-size: 16px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: ",';\n  }\n  /* input[type="file"] {\n    width: 180px;\n    height: 180px;\n  } */\n  /* input[type="text"] {\n    width: ',";\n    height: 36px;\n    padding-left: 15px;\n\n    color: #000;\n    font-size: 16px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: normal;\n  } */\n"])),(n=>n.width?n.width:"600px"),(n=>n.width?n.width:"600px"),(n=>n.lineHight?n.lineHight:"normal"),(n=>n.width?n.width:"600px")),C=y.Z.div(c||(c=(0,w.Z)(["\n  color: red;\n  font-size: 15px;\n"]))),E=y.Z.button(s||(s=(0,w.Z)(["\n  background: transparent;\n  border: none;\n  cursor: pointer;\n"]))),A=y.Z.div(l||(l=(0,w.Z)(["\n  display: block;\n  width: 600px;\n  text-align: start;\n  input {\n    border-radius: 5px;\n    border: 1px solid #2c39b5;\n    width: 600px;\n    height: 36px;\n    padding-left: 15px;\n    margin-top: 10px;\n\n    color: #000;\n    font-size: 16px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: normal;\n  }\n"]))),B=y.Z.button(g||(g=(0,w.Z)(["\nbackground: transparent;\nborder: none;\nwidth: 0px;\nheight: 0px;\n"]))),S=y.Z.img(h||(h=(0,w.Z)(["\n  width: 20px !important;\n  height: 20px !important;\n  border: none !important;\n  transform: translate(-150%, 40%);\n  cursor: pointer;\n"]))),P=y.Z.button(x||(x=(0,w.Z)(["\n  width: ",";\n  height: 36px;\n  border-radius: 5px;\n  border: 1px solid #2c39b5;\n  background: #2c39b5;\n  cursor: pointer;\n\n  color: #fff;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: normal;\n"])),(n=>n.width?n.width:"105px")),_=y.Z.div(b||(b=(0,w.Z)(["\n  display: flex;\n  justify-content: center;\n  gap: 10px;\n  width: ",";\n  margin-top: ",";\n  margin-bottom: ",";\n"])),(n=>n.width?n.width:""),(n=>n.mgtop?n.mgtop:"60px"),(n=>n.mgbtm?n.mgbtm:"90px")),F=y.Z.button(f||(f=(0,w.Z)(["\n  width: 150px;\n  height: 50px;\n  border-radius: 10px;\n  background: #f2f2ff;\n  border: none;\n  cursor: pointer;\n  color: #2c39b5;\n  font-size: 22px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: normal;\n  border: 1px solid #2c39b5;\n"]))),U=(0,y.Z)(F)(u||(u=(0,w.Z)(["\n  background: #2c39b5;\n  color: #fff;\n  cursor: pointer;\n"]))),q=y.Z.button(m||(m=(0,w.Z)(["\n  width: 320px;\n  height: 50px;\n  border-radius: 10px;\n  background: #2c39b5;\n  color: #fff;\n  cursor: pointer;\n  font-size: 22px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: normal;\n  border: 1px solid #2c39b5;\n"])))},6009:()=>{}}]);
//# sourceMappingURL=280.aba9ff8a.chunk.js.map