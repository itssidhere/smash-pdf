(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5006:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return P}});var r=t(29),i=t(2640),s=t(7794),o=t.n(s),a=t(7294),c=t(2293),l=t(7357),d=t(1519),x=t(2756),h=t(3946),p=t(8462),u=t(7212),f=t(8619),m=t(9953),j=t(326),Z=t(155),v=t(5861),g=t(3321),w=t(3960),y=t(7152),b=t(4323),_=t(5893),k=["Home","About","Contact"];function P(e){var n=e.window,t=a.useState(!1),s=(0,i.Z)(t,2),P=s[0],S=s[1],C=a.useState(""),F=(0,i.Z)(C,2),D=F[0],A=F[1],E=function(){S(!P)};function N(){return N=(0,r.Z)(o().mark((function e(n){var t,r,i,s,a,c,l,d,x;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.PDFDocument.load(n);case 2:return t=e.sent,e.next=5,t.embedFont(b.StandardFonts.Helvetica);case 5:return r=e.sent,i=t.getPages(),s=i[0],a=s.getSize(),a.width,c=a.height,s.drawText("This text was added with JavaScript!",{x:5,y:c/2,size:12,font:r,color:(0,b.rgb)(.95,.1,.1),rotate:(0,b.degrees)(0)}),e.next=12,t.save();case 12:l=e.sent,d=new Blob([l],{type:"application/pdf"}),x=URL.createObjectURL(d),console.log("docUrl",x),A(x);case 17:case"end":return e.stop()}}),e)}))),N.apply(this,arguments)}var T=(0,_.jsxs)(l.Z,{onClick:E,sx:{textAlign:"center"},children:[(0,_.jsx)(v.Z,{variant:"h6",sx:{my:2},children:"SmashPDF"}),(0,_.jsx)(d.Z,{}),(0,_.jsx)(p.Z,{children:k.map((function(e){return(0,_.jsx)(u.ZP,{disablePadding:!0,children:(0,_.jsx)(f.Z,{sx:{textAlign:"center"},children:(0,_.jsx)(m.Z,{primary:e})})},e)}))})]}),U=void 0!==n?function(){return n().document.body}:void 0;return(0,_.jsxs)(l.Z,{sx:{display:"flex"},children:[(0,_.jsx)(c.Z,{component:"nav",children:(0,_.jsxs)(Z.Z,{children:[(0,_.jsx)(h.Z,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:E,sx:{mr:2,display:{sm:"none"}},children:(0,_.jsx)(j.Z,{})}),(0,_.jsx)(w.Z,{sx:{display:{xs:"none",md:"flex"},mr:1}}),(0,_.jsx)(v.Z,{variant:"h6",noWrap:!0,component:"a",href:"/",sx:{mr:2,display:{xs:"none",md:"flex"},fontFamily:"monospace",fontWeight:700,letterSpacing:".3rem",color:"inherit",textDecoration:"none"},children:"SmashPDF"}),(0,_.jsx)(v.Z,{variant:"h6",component:"div",sx:{flexGrow:1,display:{xs:"none",sm:"block"}}}),(0,_.jsx)(l.Z,{sx:{display:{xs:"none",sm:"block"}},children:k.map((function(e){return(0,_.jsx)(g.Z,{sx:{color:"#fff"},children:e},e)}))})]})}),(0,_.jsx)(l.Z,{component:"nav",children:(0,_.jsx)(x.ZP,{container:U,variant:"temporary",open:P,onClose:E,ModalProps:{keepMounted:!0},sx:{display:{xs:"block",sm:"none"},"& .MuiDrawer-paper":{boxSizing:"border-box",width:240}},children:T})}),(0,_.jsxs)(l.Z,{component:"main",sx:{p:3},style:{height:"100vh",width:"100vw",display:"flex",justifyContent:"center",alignItems:"center"},children:[(0,_.jsx)(Z.Z,{}),!D&&(0,_.jsxs)(g.Z,{variant:"contained",component:"label",startIcon:(0,_.jsx)(y.Z,{}),children:["Upload a File",(0,_.jsx)("input",{type:"file",hidden:!0,onChange:function(e){if(e.target.files&&e.target.files.length>0){var n=e.target.files[0];if(n){console.log("file",n);var t=new FileReader;t.onload=function(e){var n=e.target.result;n&&function(e){N.apply(this,arguments)}(n)},t.readAsArrayBuffer(n)}}}})]}),D&&(0,_.jsx)("iframe",{src:D,width:"100%",height:"100%"})]})]})}},8312:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(5006)}])}},function(e){e.O(0,[580,774,888,179],(function(){return n=8312,e(e.s=n);var n}));var n=e.O();_N_E=n}]);