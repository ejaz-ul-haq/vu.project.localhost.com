"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[978],{51042:function(Z,p,t){var E=t(1413),d=t(67294),i=t(42110),o=t(91146),n=function(_,c){return d.createElement(o.Z,(0,E.Z)((0,E.Z)({},_),{},{ref:c,icon:i.Z}))},e=d.forwardRef(n);p.Z=e},90672:function(Z,p,t){var E=t(1413),d=t(91),i=t(67294),o=t(32994),n=t(85893),e=["fieldProps","proFieldProps"],x=function(c,s){var T=c.fieldProps,C=c.proFieldProps,R=(0,d.Z)(c,e);return(0,n.jsx)(o.Z,(0,E.Z)({ref:s,valueType:"textarea",fieldProps:T,proFieldProps:C},R))};p.Z=i.forwardRef(x)},41673:function(Z,p,t){var E=t(5574),d=t.n(E),i=t(67294),o=t(85893),n="AIzaSyC4pW0R1O6un6tUhogR0ZKeSRLQoOCvUxU",e=function(_){var c=_.initialCoords,s=_.onPositionChange,T=(0,i.useState)(c),C=d()(T,2),R=C[0],k=C[1],A=(0,i.useRef)(null);(0,i.useEffect)(function(){if(console.log("initialCoords - from - inner"),console.log(c),c.length==0){console.log("initialCoords.length - case - 01");return}else console.log("initialCoords.length - case - 02");var U=function(){var g=document.createElement("script");return g.src="https://maps.googleapis.com/maps/api/js?key=".concat(n,"&callback=initMap&libraries=geometry,marker"),g.async=!0,g.defer=!0,window.initMap=S,document.head.appendChild(g),g.onerror=function(){console.error("Error loading Google Maps script")},function(){g&&document.head.removeChild(g)}};window.google?(console.log("initialCoords - from - inner - case 02"),S()):(console.log("initialCoords - from - inner - case 01"),U())},[c]);var S=function(){if(A.current){var D=new window.google.maps.Map(A.current,{center:c,zoom:18}),g=new window.google.maps.Marker({position:c,map:D,draggable:!0});g.addListener("dragend",function(){var b={lat:g.getPosition().lat(),lng:g.getPosition().lng()};console.log("Marker dragged to:",b),k(b),s&&s(b)})}};return(0,o.jsx)("div",{style:{width:"100%",height:"400px"},ref:A})};p.Z=e},58547:function(Z,p,t){t.d(p,{h:function(){return d},y:function(){return i}});var E=t(67294),d=function(n){return console.log("Upload event:",n),Array.isArray(n)?n:n&&n.fileList},i=function(n){return new Promise(function(e,x){var _=new FileReader;_.readAsDataURL(n.file.originFileObj),_.onload=function(){var c=_.result;console.log("DataURL: test",c),e(c)},_.onerror=function(c){return x(c)}})}},16801:function(Z,p,t){t.d(p,{p:function(){return E}});var E=function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:100;return new Promise(function(o){setTimeout(function(){o(!0)},i)})}},49790:function(Z,p,t){var E=t(67294),d=t(4393),i=t(71230),o=t(15746),n=t(99559),e=t(85893),x=function(c){var s=c.active;return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(d.Z,{style:{marginBlockEnd:15},children:(0,e.jsxs)(i.Z,{gutter:{xs:8,sm:16,md:24,lg:32},children:[(0,e.jsxs)(o.Z,{span:6,children:[(0,e.jsx)(n.Z.Image,{active:s,style:{width:"210px",maxWidth:"240px",height:"200px",marginBlockEnd:10}}),(0,e.jsx)(o.Z,{span:24,children:(0,e.jsx)(n.Z.Button,{active:s,style:{width:"140px",maxWidth:"200px",height:"35px",marginLeft:"20px"}})})]}),(0,e.jsxs)(o.Z,{span:18,children:[(0,e.jsxs)(i.Z,{gutter:{xs:8,sm:16,md:24,lg:32},children:[(0,e.jsxs)(o.Z,{span:8,children:[(0,e.jsx)(n.Z,{paragraph:!1,title:{width:80},style:{marginBlockEnd:5}}),(0,e.jsx)(n.Z.Input,{active:s,size:"default",block:!0,style:{marginBlockEnd:20}}),(0,e.jsx)(n.Z,{paragraph:!1,title:{width:80},style:{marginBlockEnd:5}}),(0,e.jsx)(n.Z.Input,{active:s,size:"default",block:!0,style:{marginBlockEnd:20}})]}),(0,e.jsxs)(o.Z,{span:8,children:[(0,e.jsx)(n.Z,{paragraph:!1,title:{width:80},style:{marginBlockEnd:5}}),(0,e.jsx)(n.Z.Input,{active:s,size:"default",block:!0,style:{marginBlockEnd:20}}),(0,e.jsx)(n.Z,{paragraph:!1,title:{width:80},style:{marginBlockEnd:5}}),(0,e.jsx)(n.Z.Input,{active:s,size:"default",block:!0,style:{marginBlockEnd:20}})]}),(0,e.jsxs)(o.Z,{span:8,children:[(0,e.jsx)(n.Z,{paragraph:!1,title:{width:80},style:{marginBlockEnd:5}}),(0,e.jsx)(n.Z.Input,{active:s,size:"default",block:!0,style:{marginBlockEnd:20}}),(0,e.jsx)(n.Z,{paragraph:!1,title:{width:80},style:{marginBlockEnd:5}}),(0,e.jsx)(n.Z.Input,{active:s,size:"default",block:!0,style:{marginBlockEnd:20}})]})]}),(0,e.jsx)(i.Z,{gutter:{xs:8,sm:16,md:24,lg:32},children:(0,e.jsxs)(o.Z,{span:24,children:[(0,e.jsx)(n.Z,{paragraph:!1,title:{width:80},style:{marginBlockEnd:5}}),(0,e.jsx)(n.Z.Input,{active:s,size:"default",block:!0,style:{marginBlockEnd:20}})]})})]})]})}),(0,e.jsx)(d.Z,{style:{marginBlockEnd:15},children:(0,e.jsx)(i.Z,{gutter:{xs:8,sm:16,md:24,lg:32},children:(0,e.jsx)(o.Z,{span:24,children:(0,e.jsxs)(i.Z,{gutter:{xs:8,sm:16,md:24,lg:32},children:[(0,e.jsxs)(o.Z,{span:8,children:[(0,e.jsx)(n.Z,{paragraph:!1,title:{width:80},style:{marginBlockEnd:5}}),(0,e.jsx)(n.Z.Input,{active:s,size:"default",block:!0,style:{marginBlockEnd:20}})]}),(0,e.jsxs)(o.Z,{span:8,children:[(0,e.jsx)(n.Z,{paragraph:!1,title:{width:80},style:{marginBlockEnd:5}}),(0,e.jsx)(n.Z.Input,{active:s,size:"default",block:!0,style:{marginBlockEnd:20}})]}),(0,e.jsxs)(o.Z,{span:8,children:[(0,e.jsx)(n.Z,{paragraph:!1,title:{width:80},style:{marginBlockEnd:5}}),(0,e.jsx)(n.Z.Input,{active:s,size:"default",block:!0,style:{marginBlockEnd:20}})]})]})})})}),(0,e.jsx)(d.Z,{style:{marginBlockEnd:15},children:(0,e.jsx)(i.Z,{gutter:{xs:8,sm:16,md:24,lg:32},children:(0,e.jsx)(o.Z,{span:24,children:(0,e.jsxs)(i.Z,{gutter:{xs:8,sm:16,md:24,lg:32},children:[(0,e.jsxs)(o.Z,{span:12,children:[(0,e.jsx)(n.Z,{paragraph:!1,title:{width:80},style:{marginBlockEnd:5}}),(0,e.jsx)(n.Z.Input,{active:s,size:"default",block:!0,style:{marginBlockEnd:20}}),(0,e.jsx)(n.Z,{paragraph:!1,title:{width:80},style:{marginBlockEnd:5}}),(0,e.jsx)(n.Z.Input,{active:s,size:"default",block:!0,style:{marginBlockEnd:20}}),(0,e.jsx)(n.Z,{paragraph:!1,title:{width:80},style:{marginBlockEnd:5}}),(0,e.jsx)(n.Z.Input,{active:s,size:"default",block:!0,style:{marginBlockEnd:20}})]}),(0,e.jsxs)(o.Z,{span:12,children:[(0,e.jsx)(n.Z,{paragraph:!1,title:{width:80},style:{marginBlockEnd:5}}),(0,e.jsx)(n.Z.Input,{active:s,size:"default",block:!0,style:{marginBlockEnd:20}}),(0,e.jsx)(n.Z,{paragraph:!1,title:{width:80},style:{marginBlockEnd:5}}),(0,e.jsx)(n.Z.Input,{active:s,size:"default",block:!0,style:{marginBlockEnd:20}}),(0,e.jsx)(n.Z,{paragraph:!1,title:{width:80},style:{marginBlockEnd:5}}),(0,e.jsx)(n.Z.Input,{active:s,size:"default",block:!0,style:{marginBlockEnd:20}})]})]})})})}),(0,e.jsx)(d.Z,{children:(0,e.jsx)(i.Z,{gutter:{xs:8,sm:16,md:24,lg:32},children:(0,e.jsx)(o.Z,{span:24,children:(0,e.jsxs)(i.Z,{gutter:{xs:8,sm:16,md:24,lg:32},children:[(0,e.jsxs)(o.Z,{span:12,children:[(0,e.jsx)(n.Z,{paragraph:!1,title:{width:80},style:{marginBlockEnd:5}}),(0,e.jsx)(n.Z.Input,{active:s,size:"default",block:!0,style:{marginBlockEnd:20}})]}),(0,e.jsxs)(o.Z,{span:12,children:[(0,e.jsx)(n.Z,{paragraph:!1,title:{width:80},style:{marginBlockEnd:5}}),(0,e.jsx)(n.Z.Input,{active:s,size:"default",block:!0,style:{marginBlockEnd:20}})]})]})})})})]})};p.Z=x},43519:function(Z,p,t){t.r(p);var E=t(5574),d=t.n(E),i=t(15009),o=t.n(i),n=t(99289),e=t.n(n),x=t(6110),_=t(34994),c=t(2236),s=t(58128),T=t(5966),C=t(90672),R=t(55895),k=t(64317),A=t(2453),S=t(53025),U=t(71230),D=t(15746),g=t(55060),b=t(66476),ee=t(14726),te=t(51042),ne=t(88484),P=t(67294),z=t(35312),oe=t(49790),ae=t(16801),H=t(58547),re=t(41673),a=t(85893),se=function(){var N=e()(o()().mark(function F(r){var j,w;return o()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return console.log("onFinishHandlerForm"),console.log("Received values of form: ",r),console.log("values"),console.log(r),j=new FormData,console.log("formData - before"),console.log(j),j.append("title",r==null?void 0:r.title),j.append("description",r==null?void 0:r.description),j.append("image",r==null?void 0:r.image),console.log("formData - after"),console.log(j),h.prev=12,w={title:r==null?void 0:r.title,description:r==null?void 0:r.description,image:r==null?void 0:r.image,accommodations:r==null?void 0:r.accommodations.map(function(f){return f==null?void 0:f.accommodation}),attractions:r==null?void 0:r.attractions.map(function(f){return f==null?void 0:f.attraction}),latitude:r==null?void 0:r.latitude,longitude:r==null?void 0:r.longitude},h.next=16,(0,z.request)("/api/destinations",{method:"post",data:w}).then(function(){var f=e()(o()().mark(function G(v){var W,L;return o()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:console.log("api_response"),console.log(v),(v==null||(W=v.data)===null||W===void 0?void 0:W.id)>0&&(A.ZP.success("Submitted successfully"),z.history.push("/admin-app/destinations/edit/"+(v==null||(L=v.data)===null||L===void 0?void 0:L.id)));case 3:case"end":return y.stop()}},G)}));return function(G){return f.apply(this,arguments)}}()).catch(function(f){console.log(f)});case 16:return h.abrupt("return",h.sent);case 19:h.prev=19,h.t0=h.catch(12),console.log("api_response - error"),console.log(h.t0);case 23:return h.abrupt("return",!0);case 24:case"end":return h.stop()}},F,null,[[12,19]])}));return function(r){return N.apply(this,arguments)}}(),le=function(){var F=S.Z.useForm(),r=d()(F,1),j=r[0],w=(0,P.useState)(""),$=d()(w,2),h=$[0],f=$[1],G=(0,P.useState)(!0),v=d()(G,2),W=v[0],L=v[1],Q=(0,P.useState)("http://vu.project.localhost.com/images/default/placeholder.jpg"),y=d()(Q,2),V=y[0],Y=y[1],ie=(0,P.useState)([]),J=d()(ie,2),de=J[0],ce=J[1],_e=(0,P.useState)([]),X=d()(_e,2),ue=X[0],me=X[1],pe=(0,P.useState)({}),q=d()(pe,2),I=q[0],ge=q[1];(0,P.useEffect)(function(){(0,z.request)("/api/accommodations",{params:{page:1,per_page:1e3,order_by:"id",order:"asc"}}).then(function(){var m=e()(o()().mark(function l(u){var M;return o()().wrap(function(B){for(;;)switch(B.prev=B.next){case 0:console.log("api_response"),console.log(u),console.log("api_response.data"),console.log(u.data),console.log("api_response.data.data"),console.log(u.data.data),M=u.data.data.map(function(K,Ee){return{value:K.id,label:K.title}}),console.log("table_data"),console.log(M),ce(M);case 10:case"end":return B.stop()}},l)}));return function(l){return m.apply(this,arguments)}}()).catch(function(m){console.log(m)})},[]),(0,P.useEffect)(function(){(0,z.request)("/api/attractions",{params:{page:1,per_page:1e3,order_by:"id",order:"asc"}}).then(function(){var m=e()(o()().mark(function l(u){var M;return o()().wrap(function(B){for(;;)switch(B.prev=B.next){case 0:console.log("api_response"),console.log(u),console.log("api_response.data"),console.log(u.data),console.log("api_response.data.data"),console.log(u.data.data),M=u.data.data.map(function(K,Ee){return{value:K.id,label:K.title}}),console.log("table_data"),console.log(M),me(M);case 10:case"end":return B.stop()}},l)}));return function(l){return m.apply(this,arguments)}}()).catch(function(m){console.log(m)})},[]),(0,P.useEffect)(function(){L(!1)},[j]);var he=function(l){l.file.status!=="uploading"&&(l.file.status=="removed"&&Y(""),l.file.status==="done"&&(0,H.y)(l).then(function(u){console.log("base64String"),console.log(u),Y(u)}),l.file.status==="error"&&A.ZP.error("".concat(l.file.name," file upload failed.")))},fe=(0,a.jsxs)("button",{style:{border:0,background:"none"},type:"button",children:[(0,a.jsx)(te.Z,{}),(0,a.jsx)("div",{style:{marginTop:8},children:"Upload"})]});return W?(0,a.jsx)(x._z,{header:{title:""},children:(0,a.jsx)(oe.Z,{active:!0})}):(0,a.jsx)(x._z,{children:(0,a.jsxs)(_.A,{layout:"vertical",grid:!0,form:j,onFinish:function(){var m=e()(o()().mark(function l(u){return o()().wrap(function(O){for(;;)switch(O.prev=O.next){case 0:return console.log(u),O.next=3,(0,ae.p)(1e3);case 3:return u.image=V,u.latitude=I==null?void 0:I.lat,u.longitude=I==null?void 0:I.lng,O.next=8,se(u);case 8:case"end":return O.stop()}},l)}));return function(l){return m.apply(this,arguments)}}(),submitter:{render:function(l,u){return(0,a.jsx)(c.S,{children:u})}},children:[(0,a.jsxs)(s.Z,{title:"Destination Details",bordered:!0,headerBordered:!0,collapsible:!0,size:"default",type:"inner",style:{marginBlockEnd:15,minWidth:800,maxWidth:"100%"},onCollapse:function(l){return console.log(l)},children:[(0,a.jsxs)(U.Z,{gutter:{xs:8,sm:16,md:24,lg:32},children:[(0,a.jsx)(D.Z,{span:10,children:(0,a.jsxs)(_.A.Group,{size:24,children:[(0,a.jsx)(D.Z,{span:24,children:(0,a.jsx)(g.Z,{width:"100%",height:200,src:V})}),(0,a.jsx)(D.Z,{span:24,style:{textAlign:"center"},children:(0,a.jsx)(_.A.Item,{name:"image",getValueFromEvent:H.h,children:(0,a.jsx)(b.Z,{name:"image",onChange:he,maxCount:1,children:(0,a.jsx)(ee.ZP,{type:"primary",icon:(0,a.jsx)(ne.Z,{}),style:{margin:"10px 0px 0px 0px"},onClick:function(l){},children:"Change Image"})})})})]})}),(0,a.jsx)(D.Z,{span:14,children:(0,a.jsxs)(_.A.Group,{size:24,children:[(0,a.jsx)(T.Z,{name:"title",label:"Title",placeholder:"Type destination title",fieldProps:{onChange:function(l){console.log("e.target.value"),console.log(l.target.value)}},colProps:{xs:24,sm:24,md:24,lg:24,xl:24}}),(0,a.jsx)(C.Z,{name:"description",label:"Description",placeholder:"Share a little details regarding the destination. ",colProps:{xs:24,sm:24,md:24,lg:24,xl:24},fieldProps:{size:"middle"}})]})})]}),(0,a.jsx)(U.Z,{gutter:{xs:8,sm:16,md:24,lg:32},children:(0,a.jsx)(D.Z,{span:24,children:(0,a.jsx)(re.Z,{initialCoords:{lat:24.83136096571596,lng:67.24415919837952},onPositionChange:function(l){console.log("New marker position:",l),ge(l)}})})})]}),(0,a.jsx)(s.Z,{title:"Accommodations Details",bordered:!0,headerBordered:!0,collapsible:!0,size:"default",type:"default",style:{marginBlockEnd:15,minWidth:800,maxWidth:"100%"},onCollapse:function(l){return console.log(l)},children:(0,a.jsx)(_.A.Group,{title:"Accommodations",size:24,children:(0,a.jsx)(R.u,{name:"accommodations",min:1,copyIconProps:{tooltipText:"Copy this accommodation"},deleteIconProps:{tooltipText:"Delete this accommodation"},creatorButtonProps:{creatorButtonText:"Add New Accommodation"},children:(0,a.jsx)(_.A.Group,{size:24,children:(0,a.jsx)(k.Z,{name:"accommodation",label:"Name",showSearch:!0,options:de,debounceTime:300,placeholder:"Please Select Accommodation",rules:[{required:!0}],colProps:{xs:24,sm:24,md:24,lg:24,xl:24}})})})})}),(0,a.jsx)(s.Z,{title:"Attractions Details",bordered:!0,headerBordered:!0,collapsible:!0,size:"default",type:"default",style:{marginBlockEnd:15,minWidth:800,maxWidth:"100%"},onCollapse:function(l){return console.log(l)},children:(0,a.jsx)(_.A.Group,{title:"Attractions",size:24,children:(0,a.jsx)(R.u,{name:"attractions",min:1,copyIconProps:{tooltipText:"Copy this attraction"},deleteIconProps:{tooltipText:"Delete this attraction"},creatorButtonProps:{creatorButtonText:"Add New Attraction"},children:(0,a.jsx)(_.A.Group,{size:24,children:(0,a.jsx)(k.Z,{name:"attraction",label:"Name",showSearch:!0,options:ue,debounceTime:300,placeholder:"Please Select Attraction",rules:[{required:!0}],colProps:{xs:24,sm:24,md:24,lg:24,xl:24}})})})})})]})})};p.default=le}}]);
