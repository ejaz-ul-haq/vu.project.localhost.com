"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[744],{58380:function(fe,Z,e){e.r(Z);var k=e(97857),S=e.n(k),q=e(5574),M=e.n(q),ee=e(15009),_=e.n(ee),te=e(99289),g=e.n(te),ne=e(6110),x=e(34994),oe=e(2236),ae=e(58128),le=e(5966),re=e(90672),ie=e(64317),F=e(2453),se=e(53025),I=e(71230),m=e(15746),$=e(14726),_e=e(55060),de=e(66476),G=e(51042),ue=e(88484),ce=e(87547),h=e(67294),E=e(35312),Me=e(49790),H=e(16801),z=e(58547),me=e(41673),pe=e(92357),t=e(85893),V={title:"",description:"",image_url:"",destination_id:""},ge=function(){var N=g()(_()().mark(function A(n){var c,T;return _()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return console.log("onFinishHandlerForm"),console.log("Received values of form: ",n),console.log("values"),console.log(n),c=new FormData,console.log("formData - before"),console.log(c),c.append("title",n==null?void 0:n.title),c.append("description",n==null?void 0:n.description),c.append("image",n==null?void 0:n.image),console.log("formData - after"),console.log(c),i.prev=12,T={id:n==null?void 0:n.attraction_id,title:n==null?void 0:n.title,description:n==null?void 0:n.description,destination_id:n==null?void 0:n.destination_id,image:n==null?void 0:n.image},i.next=16,(0,E.request)("/api/attractions/"+(n==null?void 0:n.attraction_id),{method:"PUT",data:T}).then(function(){var v=g()(_()().mark(function D(u){var P,f;return _()().wrap(function(O){for(;;)switch(O.prev=O.next){case 0:console.log("api_response - PUT attraction"),console.log(u),(u==null||(P=u.data)===null||P===void 0?void 0:P.id)>0&&(F.ZP.success("Submitted successfully"),E.history.push("/admin-app/attractions/edit/"+(u==null||(f=u.data)===null||f===void 0?void 0:f.id)));case 3:case"end":return O.stop()}},D)}));return function(D){return v.apply(this,arguments)}}()).catch(function(v){console.log(v)});case 16:return i.abrupt("return",i.sent);case 19:i.prev=19,i.t0=i.catch(12),console.log("api_response - error"),console.log(i.t0);case 23:return i.abrupt("return",!0);case 24:case"end":return i.stop()}},A,null,[[12,19]])}));return function(n){return N.apply(this,arguments)}}(),he=function(){var A=(0,E.useParams)(),n=se.Z.useForm(),c=M()(n,1),T=c[0],Y=(0,h.useState)("http://vu.project.localhost.com/images/default/placeholder.jpg"),i=M()(Y,2),v=i[0],D=i[1],u=(0,h.useState)(0),P=M()(u,2),f=P[0],J=P[1],O=(0,h.useState)([]),Q=M()(O,2),Ee=Q[0],ve=Q[1],De=(0,h.useState)(""),X=M()(De,2),d=X[0],w=X[1];(0,h.useEffect)(function(){J(A.id)},[]),(0,h.useEffect)(function(){return(0,E.request)("/api/destinations",{params:{page:1,per_page:1e3,order_by:"id",order:"asc"}}).then(function(){var s=g()(_()().mark(function o(l){var j;return _()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:console.log("api_response"),console.log(l),console.log("api_response.data"),console.log(l.data),console.log("api_response.data.data"),console.log(l.data.data),j=l.data.data.map(function(C,a){return{value:C.id,label:C.title}}),console.log("table_data"),console.log(j),ve(j);case 10:case"end":return p.stop()}},o)}));return function(o){return s.apply(this,arguments)}}()).catch(function(s){console.log(s)})},[]);var Pe=function(o){o.file.status!=="uploading"&&(o.file.status=="removed"&&D(""),o.file.status==="done"&&(0,z.y)(o).then(function(l){console.log("base64String"),console.log(l),D(l)}),o.file.status==="error"&&F.ZP.error("".concat(o.file.name," file upload failed.")))},Oe=(0,t.jsxs)("button",{style:{border:0,background:"none"},type:"button",children:[(0,t.jsx)(G.Z,{}),(0,t.jsx)("div",{style:{marginTop:8},children:"Upload"})]});return(0,t.jsxs)(ne._z,{children:[(0,t.jsxs)(I.Z,{gutter:{xs:8,sm:16,md:24,lg:32},children:[(0,t.jsx)(m.Z,{flex:"auto"}),(0,t.jsx)(m.Z,{flex:"100px",children:(0,t.jsxs)($.ZP,{type:"primary",onClick:function(){E.history.push("/admin-app/attractions/new")},style:{marginBlockEnd:15},children:[(0,t.jsx)(G.Z,{})," New"]},"primary")})]}),(0,t.jsx)(x.A,{layout:"vertical",grid:!0,form:T,initialValues:V,params:{attraction_id:f},request:g()(_()().mark(function s(){var o,l=arguments;return _()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if(o=l.length>0&&l[0]!==void 0?l[0]:{},console.log("proform-params"),console.log(o),(o==null?void 0:o.attraction_id)!=0){r.next=5;break}return r.abrupt("return");case 5:return r.next=7,(0,H.p)(2e3);case 7:return r.next=9,(0,E.request)("/api/attractions/"+(o==null?void 0:o.attraction_id),{method:"GET"}).then(function(){var p=g()(_()().mark(function C(a){var B,R,W,K,L,y,b;return _()().wrap(function(U){for(;;)switch(U.prev=U.next){case 0:return console.log("api_response"),console.log(a),D(a==null||(B=a.data)===null||B===void 0?void 0:B.image_url),w({lat:a==null||(R=a.data)===null||R===void 0?void 0:R.latitude,lng:a==null||(W=a.data)===null||W===void 0?void 0:W.longitude}),U.abrupt("return",S()(S()({},V),{},{title:a==null||(K=a.data)===null||K===void 0?void 0:K.title,description:a==null||(L=a.data)===null||L===void 0?void 0:L.description,image_url:a==null||(y=a.data)===null||y===void 0?void 0:y.image_url,destination_id:a==null||(b=a.data)===null||b===void 0?void 0:b.destination_id}));case 5:case"end":return U.stop()}},C)}));return function(C){return p.apply(this,arguments)}}()).catch(function(p){console.log(p)});case 9:return r.abrupt("return",r.sent);case 10:case"end":return r.stop()}},s)})),onFinish:function(){var s=g()(_()().mark(function o(l){return _()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return console.log(l),r.next=3,(0,H.p)(1e3);case 3:return l.image=v,l.attraction_id=f,l.latitude=d==null?void 0:d.lat,l.longitude=d==null?void 0:d.lng,r.next=9,ge(l);case 9:case"end":return r.stop()}},o)}));return function(o){return s.apply(this,arguments)}}(),submitter:{render:function(o,l){return(0,t.jsx)(oe.S,{children:l})}},children:(0,t.jsxs)(ae.Z,{title:"Attraction Details",bordered:!0,headerBordered:!0,collapsible:!0,size:"default",type:"inner",style:{marginBlockEnd:15,minWidth:800,maxWidth:"100%"},onCollapse:function(o){return console.log(o)},children:[(0,t.jsxs)(I.Z,{gutter:{xs:8,sm:16,md:24,lg:32},children:[(0,t.jsx)(m.Z,{span:10,children:(0,t.jsxs)(x.A.Group,{size:24,children:[(0,t.jsx)(m.Z,{span:24,children:(0,t.jsx)(_e.Z,{width:"100%",height:200,src:v})}),(0,t.jsx)(m.Z,{span:24,style:{textAlign:"center"},children:(0,t.jsx)(x.A.Item,{name:"image",getValueFromEvent:z.h,children:(0,t.jsx)(de.Z,{name:"image",onChange:Pe,maxCount:1,children:(0,t.jsx)($.ZP,{type:"primary",icon:(0,t.jsx)(ue.Z,{}),style:{margin:"10px 0px 0px 0px"},onClick:function(o){},children:"Change Image"})})})})]})}),(0,t.jsx)(m.Z,{span:14,children:(0,t.jsxs)(x.A.Group,{size:24,children:[(0,t.jsx)(le.Z,{name:"title",label:"Title",placeholder:"Type attraction title",fieldProps:{prefix:(0,t.jsx)(ce.Z,{}),onChange:function(o){console.log("e.target.value"),console.log(o.target.value)}},colProps:{xs:24,sm:24,md:24,lg:24,xl:24}}),(0,t.jsx)(re.Z,{name:"description",label:"Description",placeholder:"Share a little details regarding the attraction. ",colProps:{xs:24,sm:24,md:24,lg:24,xl:24},fieldProps:{size:"middle"}}),(0,t.jsx)(ie.Z,{name:"destination_id",label:"Destinations",showSearch:!0,options:Ee,debounceTime:300,placeholder:"Please Select Your Destination",rules:[{required:!0}],colProps:{xs:24,sm:24,md:24,lg:24,xl:24}})]})})]}),(0,t.jsx)(I.Z,{gutter:{xs:8,sm:16,md:24,lg:32},children:(0,t.jsxs)(m.Z,{span:24,children:[(0,t.jsx)(pe.Z,{latitude:d.lat,longitude:d.lng}),(0,t.jsx)(me.Z,{initialCoords:{lat:parseFloat(d.lat),lng:parseFloat(d.lng)},onPositionChange:function(o){console.log("New marker position:",o),w(o)}})]})})]})})]})};Z.default=he}}]);
