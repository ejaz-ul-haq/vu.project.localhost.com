"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[343],{51042:function(D,m,t){var E=t(1413),i=t(67294),l=t(42110),a=t(91146),n=function(c,_){return i.createElement(a.Z,(0,E.Z)((0,E.Z)({},c),{},{ref:_,icon:l.Z}))},e=i.forwardRef(n);m.Z=e},90672:function(D,m,t){var E=t(1413),i=t(91),l=t(67294),a=t(9170),n=t(85893),e=["fieldProps","proFieldProps"],f=function(_,s){var B=_.fieldProps,M=_.proFieldProps,R=(0,i.Z)(_,e);return(0,n.jsx)(a.Z,(0,E.Z)({ref:s,valueType:"textarea",fieldProps:B,proFieldProps:M},R))};m.Z=l.forwardRef(f)},41673:function(D,m,t){var E=t(5574),i=t.n(E),l=t(67294),a=t(85893),n="AIzaSyC4pW0R1O6un6tUhogR0ZKeSRLQoOCvUxU",e=function(c){var _=c.initialCoords,s=c.onPositionChange,B=(0,l.useState)(_),M=i()(B,2),R=M[0],U=M[1],C=(0,l.useRef)(null);(0,l.useEffect)(function(){if(console.log("initialCoords - from - inner"),console.log(_),_.length==0){console.log("initialCoords.length - case - 01");return}else console.log("initialCoords.length - case - 02");var P=function(){var p=document.createElement("script");return p.src="https://maps.googleapis.com/maps/api/js?key=".concat(n,"&callback=initMap&libraries=geometry,marker"),p.async=!0,p.defer=!0,window.initMap=I,document.head.appendChild(p),p.onerror=function(){console.error("Error loading Google Maps script")},function(){p&&document.head.removeChild(p)}};window.google?(console.log("initialCoords - from - inner - case 02"),I()):(console.log("initialCoords - from - inner - case 01"),P())},[_]);var I=function(){if(C.current){var L=new window.google.maps.Map(C.current,{center:_,zoom:18}),p=new window.google.maps.Marker({position:_,map:L,draggable:!0});p.addListener("dragend",function(){var y={lat:p.getPosition().lat(),lng:p.getPosition().lng()};console.log("Marker dragged to:",y),U(y),s&&s(y)})}};return(0,a.jsx)("div",{style:{width:"100%",height:"400px"},ref:C})};m.Z=e},58547:function(D,m,t){t.d(m,{h:function(){return i},y:function(){return l}});var E=t(67294),i=function(n){return console.log("Upload event:",n),Array.isArray(n)?n:n&&n.fileList},l=function(n){return new Promise(function(e,f){var c=new FileReader;c.readAsDataURL(n.file.originFileObj),c.onload=function(){var _=c.result;console.log("DataURL: test",_),e(_)},c.onerror=function(_){return f(_)}})}},16801:function(D,m,t){t.d(m,{p:function(){return E}});var E=function(){var l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:100;return new Promise(function(a){setTimeout(function(){a(!0)},l)})}},49790:function(D,m,t){var E=t(67294),i=t(4393),l=t(71230),a=t(15746),n=t(99559),e=t(85893),f=function(_){var s=_.active;return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(i.Z,{style:{marginBlockEnd:15},children:(0,e.jsxs)(l.Z,{gutter:{xs:8,sm:16,md:24,lg:32},children:[(0,e.jsxs)(a.Z,{span:6,children:[(0,e.jsx)(n.Z.Image,{active:s,style:{width:"210px",maxWidth:"240px",height:"200px",marginBlockEnd:10}}),(0,e.jsx)(a.Z,{span:24,children:(0,e.jsx)(n.Z.Button,{active:s,style:{width:"140px",maxWidth:"200px",height:"35px",marginLeft:"20px"}})})]}),(0,e.jsxs)(a.Z,{span:18,children:[(0,e.jsxs)(l.Z,{gutter:{xs:8,sm:16,md:24,lg:32},children:[(0,e.jsxs)(a.Z,{span:8,children:[(0,e.jsx)(n.Z,{paragraph:!1,title:{width:80},style:{marginBlockEnd:5}}),(0,e.jsx)(n.Z.Input,{active:s,size:"default",block:!0,style:{marginBlockEnd:20}}),(0,e.jsx)(n.Z,{paragraph:!1,title:{width:80},style:{marginBlockEnd:5}}),(0,e.jsx)(n.Z.Input,{active:s,size:"default",block:!0,style:{marginBlockEnd:20}})]}),(0,e.jsxs)(a.Z,{span:8,children:[(0,e.jsx)(n.Z,{paragraph:!1,title:{width:80},style:{marginBlockEnd:5}}),(0,e.jsx)(n.Z.Input,{active:s,size:"default",block:!0,style:{marginBlockEnd:20}}),(0,e.jsx)(n.Z,{paragraph:!1,title:{width:80},style:{marginBlockEnd:5}}),(0,e.jsx)(n.Z.Input,{active:s,size:"default",block:!0,style:{marginBlockEnd:20}})]}),(0,e.jsxs)(a.Z,{span:8,children:[(0,e.jsx)(n.Z,{paragraph:!1,title:{width:80},style:{marginBlockEnd:5}}),(0,e.jsx)(n.Z.Input,{active:s,size:"default",block:!0,style:{marginBlockEnd:20}}),(0,e.jsx)(n.Z,{paragraph:!1,title:{width:80},style:{marginBlockEnd:5}}),(0,e.jsx)(n.Z.Input,{active:s,size:"default",block:!0,style:{marginBlockEnd:20}})]})]}),(0,e.jsx)(l.Z,{gutter:{xs:8,sm:16,md:24,lg:32},children:(0,e.jsxs)(a.Z,{span:24,children:[(0,e.jsx)(n.Z,{paragraph:!1,title:{width:80},style:{marginBlockEnd:5}}),(0,e.jsx)(n.Z.Input,{active:s,size:"default",block:!0,style:{marginBlockEnd:20}})]})})]})]})}),(0,e.jsx)(i.Z,{style:{marginBlockEnd:15},children:(0,e.jsx)(l.Z,{gutter:{xs:8,sm:16,md:24,lg:32},children:(0,e.jsx)(a.Z,{span:24,children:(0,e.jsxs)(l.Z,{gutter:{xs:8,sm:16,md:24,lg:32},children:[(0,e.jsxs)(a.Z,{span:8,children:[(0,e.jsx)(n.Z,{paragraph:!1,title:{width:80},style:{marginBlockEnd:5}}),(0,e.jsx)(n.Z.Input,{active:s,size:"default",block:!0,style:{marginBlockEnd:20}})]}),(0,e.jsxs)(a.Z,{span:8,children:[(0,e.jsx)(n.Z,{paragraph:!1,title:{width:80},style:{marginBlockEnd:5}}),(0,e.jsx)(n.Z.Input,{active:s,size:"default",block:!0,style:{marginBlockEnd:20}})]}),(0,e.jsxs)(a.Z,{span:8,children:[(0,e.jsx)(n.Z,{paragraph:!1,title:{width:80},style:{marginBlockEnd:5}}),(0,e.jsx)(n.Z.Input,{active:s,size:"default",block:!0,style:{marginBlockEnd:20}})]})]})})})}),(0,e.jsx)(i.Z,{style:{marginBlockEnd:15},children:(0,e.jsx)(l.Z,{gutter:{xs:8,sm:16,md:24,lg:32},children:(0,e.jsx)(a.Z,{span:24,children:(0,e.jsxs)(l.Z,{gutter:{xs:8,sm:16,md:24,lg:32},children:[(0,e.jsxs)(a.Z,{span:12,children:[(0,e.jsx)(n.Z,{paragraph:!1,title:{width:80},style:{marginBlockEnd:5}}),(0,e.jsx)(n.Z.Input,{active:s,size:"default",block:!0,style:{marginBlockEnd:20}}),(0,e.jsx)(n.Z,{paragraph:!1,title:{width:80},style:{marginBlockEnd:5}}),(0,e.jsx)(n.Z.Input,{active:s,size:"default",block:!0,style:{marginBlockEnd:20}}),(0,e.jsx)(n.Z,{paragraph:!1,title:{width:80},style:{marginBlockEnd:5}}),(0,e.jsx)(n.Z.Input,{active:s,size:"default",block:!0,style:{marginBlockEnd:20}})]}),(0,e.jsxs)(a.Z,{span:12,children:[(0,e.jsx)(n.Z,{paragraph:!1,title:{width:80},style:{marginBlockEnd:5}}),(0,e.jsx)(n.Z.Input,{active:s,size:"default",block:!0,style:{marginBlockEnd:20}}),(0,e.jsx)(n.Z,{paragraph:!1,title:{width:80},style:{marginBlockEnd:5}}),(0,e.jsx)(n.Z.Input,{active:s,size:"default",block:!0,style:{marginBlockEnd:20}}),(0,e.jsx)(n.Z,{paragraph:!1,title:{width:80},style:{marginBlockEnd:5}}),(0,e.jsx)(n.Z.Input,{active:s,size:"default",block:!0,style:{marginBlockEnd:20}})]})]})})})}),(0,e.jsx)(i.Z,{children:(0,e.jsx)(l.Z,{gutter:{xs:8,sm:16,md:24,lg:32},children:(0,e.jsx)(a.Z,{span:24,children:(0,e.jsxs)(l.Z,{gutter:{xs:8,sm:16,md:24,lg:32},children:[(0,e.jsxs)(a.Z,{span:12,children:[(0,e.jsx)(n.Z,{paragraph:!1,title:{width:80},style:{marginBlockEnd:5}}),(0,e.jsx)(n.Z.Input,{active:s,size:"default",block:!0,style:{marginBlockEnd:20}})]}),(0,e.jsxs)(a.Z,{span:12,children:[(0,e.jsx)(n.Z,{paragraph:!1,title:{width:80},style:{marginBlockEnd:5}}),(0,e.jsx)(n.Z.Input,{active:s,size:"default",block:!0,style:{marginBlockEnd:20}})]})]})})})})]})};m.Z=f},49662:function(D,m,t){t.r(m);var E=t(5574),i=t.n(E),l=t(15009),a=t.n(l),n=t(99289),e=t.n(n),f=t(6110),c=t(34994),_=t(2236),s=t(58128),B=t(5966),M=t(90672),R=t(64317),U=t(2453),C=t(53025),I=t(71230),P=t(15746),L=t(55060),p=t(66476),y=t(14726),X=t(51042),q=t(88484),j=t(67294),F=t(35312),ee=t(49790),te=t(16801),G=t(58547),ne=t(41673),r=t(85893),ae=function(){var $=e()(a()().mark(function W(o){var v,b;return a()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return console.log("onFinishHandlerForm"),console.log("Received values of form: ",o),console.log("values"),console.log(o),v=new FormData,console.log("formData - before"),console.log(v),v.append("title",o==null?void 0:o.title),v.append("description",o==null?void 0:o.description),v.append("image",o==null?void 0:o.image),console.log("formData - after"),console.log(v),u.prev=12,b={title:o==null?void 0:o.title,description:o==null?void 0:o.description,image:o==null?void 0:o.image,destination_id:o==null?void 0:o.list_destinations},u.next=16,(0,F.request)("/api/attractions",{method:"POST",data:b}).then(function(){var K=e()(a()().mark(function k(x){var A,T;return a()().wrap(function(O){for(;;)switch(O.prev=O.next){case 0:console.log("api_response"),console.log(x),(x==null||(A=x.data)===null||A===void 0?void 0:A.id)>0&&(U.ZP.success("Submitted successfully"),F.history.push("/admin-app/attractions/edit/"+(x==null||(T=x.data)===null||T===void 0?void 0:T.id)));case 3:case"end":return O.stop()}},k)}));return function(k){return K.apply(this,arguments)}}()).catch(function(K){console.log(K)});case 16:return u.abrupt("return",u.sent);case 19:u.prev=19,u.t0=u.catch(12),console.log("api_response - error"),console.log(u.t0);case 23:return u.abrupt("return",!0);case 24:case"end":return u.stop()}},W,null,[[12,19]])}));return function(o){return $.apply(this,arguments)}}(),se=function(){var W=C.Z.useForm(),o=i()(W,1),v=o[0],b=(0,j.useState)(""),z=i()(b,2),u=z[0],K=z[1],k=(0,j.useState)(!0),x=i()(k,2),A=x[0],T=x[1],H=(0,j.useState)("http://vu.project.localhost.com/images/default/placeholder.jpg"),O=i()(H,2),V=O[0],Y=O[1],re=(0,j.useState)([]),N=i()(re,2),oe=N[0],le=N[1],ie=(0,j.useState)({}),Q=i()(ie,2),ce=Q[0],_e=Q[1];(0,j.useEffect)(function(){return(0,F.request)("/api/destinations",{params:{page:1,per_page:1e3,order_by:"id",order:"asc"}}).then(function(){var h=e()(a()().mark(function d(g){var S;return a()().wrap(function(w){for(;;)switch(w.prev=w.next){case 0:console.log("api_response"),console.log(g),console.log("api_response.data"),console.log(g.data),console.log("api_response.data.data"),console.log(g.data.data),S=g.data.data.map(function(J,me){return{value:J.id,label:J.title}}),console.log("table_data"),console.log(S),le(S);case 10:case"end":return w.stop()}},d)}));return function(d){return h.apply(this,arguments)}}()).catch(function(h){console.log(h)})},[]),(0,j.useEffect)(function(){v.setFieldValue(["bio_details","staff_member_profile_image"],u),T(!1)},[u,v]);var de=function(d){d.file.status!=="uploading"&&(d.file.status=="removed"&&Y(""),d.file.status==="done"&&(0,G.y)(d).then(function(g){console.log("base64String"),console.log(g),Y(g)}),d.file.status==="error"&&U.ZP.error("".concat(d.file.name," file upload failed.")))},ue=(0,r.jsxs)("button",{style:{border:0,background:"none"},type:"button",children:[(0,r.jsx)(X.Z,{}),(0,r.jsx)("div",{style:{marginTop:8},children:"Upload"})]});return A?(0,r.jsx)(f._z,{header:{title:""},children:(0,r.jsx)(ee.Z,{active:!0})}):(0,r.jsx)(f._z,{children:(0,r.jsx)(c.A,{layout:"vertical",grid:!0,form:v,onFinish:function(){var h=e()(a()().mark(function d(g){return a()().wrap(function(Z){for(;;)switch(Z.prev=Z.next){case 0:return console.log(g),Z.next=3,(0,te.p)(1e3);case 3:return g.image=V,Z.next=6,ae(g);case 6:case"end":return Z.stop()}},d)}));return function(d){return h.apply(this,arguments)}}(),submitter:{render:function(d,g){return(0,r.jsx)(_.S,{children:g})}},children:(0,r.jsxs)(s.Z,{title:"Attraction Details",bordered:!0,headerBordered:!0,collapsible:!0,size:"default",type:"inner",style:{marginBlockEnd:15,minWidth:800,maxWidth:"100%"},onCollapse:function(d){return console.log(d)},children:[(0,r.jsxs)(I.Z,{gutter:{xs:8,sm:16,md:24,lg:32},children:[(0,r.jsx)(P.Z,{span:10,children:(0,r.jsxs)(c.A.Group,{size:24,children:[(0,r.jsx)(P.Z,{span:24,children:(0,r.jsx)(L.Z,{width:"100%",height:200,src:V})}),(0,r.jsx)(P.Z,{span:24,style:{textAlign:"center"},children:(0,r.jsx)(c.A.Item,{name:"image",getValueFromEvent:G.h,children:(0,r.jsx)(p.Z,{name:"image",onChange:de,maxCount:1,children:(0,r.jsx)(y.ZP,{type:"primary",icon:(0,r.jsx)(q.Z,{}),style:{margin:"10px 0px 0px 0px"},onClick:function(d){},children:"Change Image"})})})})]})}),(0,r.jsx)(P.Z,{span:14,children:(0,r.jsxs)(c.A.Group,{size:24,children:[(0,r.jsx)(B.Z,{name:"title",label:"Title",placeholder:"Type attraction title",fieldProps:{onChange:function(d){console.log("e.target.value"),console.log(d.target.value)}},colProps:{xs:24,sm:24,md:24,lg:24,xl:24}}),(0,r.jsx)(M.Z,{name:"description",label:"Description",placeholder:"Share a little details regarding the attraction. ",colProps:{xs:24,sm:24,md:24,lg:24,xl:24},fieldProps:{size:"middle"}}),(0,r.jsx)(R.Z,{name:"list_destinations",label:"Destinations",showSearch:!0,options:oe,debounceTime:300,placeholder:"Please Select Your Destination",rules:[{required:!0}],colProps:{xs:24,sm:24,md:24,lg:24,xl:24}})]})})]}),(0,r.jsx)(I.Z,{gutter:{xs:8,sm:16,md:24,lg:32},children:(0,r.jsx)(P.Z,{span:24,children:(0,r.jsx)(ne.Z,{initialCoords:{lat:24.83136096571596,lng:67.24415919837952},onPositionChange:function(d){console.log("New marker position:",d),_e(d)}})})})]})})})};m.default=se}}]);
