"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[5360],{8351:function(Mo,Z,o){o.r(Z);var k=o(97857),S=o.n(k),q=o(5574),M=o.n(q),oo=o(15009),_=o.n(oo),eo=o(99289),g=o.n(eo),no=o(6110),x=o(34994),to=o(2236),ao=o(93410),lo=o(5966),ro=o(90672),io=o(64317),F=o(2453),so=o(53025),I=o(71230),m=o(15746),$=o(14726),_o=o(55060),co=o(66476),G=o(51042),uo=o(88484),mo=o(87547),h=o(67294),E=o(35312),Oo=o(49790),H=o(16801),z=o(58547),po=o(41673),go=o(92357),e=o(85893),V={title:"",description:"",image_url:"",destination_id:""},ho=function(){var N=g()(_()().mark(function A(n){var u,T;return _()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return console.log("onFinishHandlerForm"),console.log("Received values of form: ",n),console.log("values"),console.log(n),u=new FormData,console.log("formData - before"),console.log(u),u.append("title",n==null?void 0:n.title),u.append("description",n==null?void 0:n.description),u.append("image",n==null?void 0:n.image),console.log("formData - after"),console.log(u),i.prev=12,T={id:n==null?void 0:n.accommodation_id,title:n==null?void 0:n.title,description:n==null?void 0:n.description,destination_id:n==null?void 0:n.destination_id,image:n==null?void 0:n.image},i.next=16,(0,E.request)("/api/accommodations/"+(n==null?void 0:n.accommodation_id),{method:"PUT",data:T}).then(function(){var v=g()(_()().mark(function D(c){var P,f;return _()().wrap(function(O){for(;;)switch(O.prev=O.next){case 0:console.log("api_response - PUT accommodation"),console.log(c),(c==null||(P=c.data)===null||P===void 0?void 0:P.id)>0&&(F.ZP.success("Submitted successfully"),E.history.push("/admin-app/accommodations/edit/"+(c==null||(f=c.data)===null||f===void 0?void 0:f.id)));case 3:case"end":return O.stop()}},D)}));return function(D){return v.apply(this,arguments)}}()).catch(function(v){console.log(v)});case 16:return i.abrupt("return",i.sent);case 19:i.prev=19,i.t0=i.catch(12),console.log("api_response - error"),console.log(i.t0);case 23:return i.abrupt("return",!0);case 24:case"end":return i.stop()}},A,null,[[12,19]])}));return function(n){return N.apply(this,arguments)}}(),Eo=function(){var A=(0,E.useParams)(),n=so.Z.useForm(),u=M()(n,1),T=u[0],Y=(0,h.useState)("http://vu.project.localhost.com/images/default/placeholder.jpg"),i=M()(Y,2),v=i[0],D=i[1],c=(0,h.useState)(0),P=M()(c,2),f=P[0],J=P[1],O=(0,h.useState)([]),Q=M()(O,2),vo=Q[0],Do=Q[1],Po=(0,h.useState)(""),X=M()(Po,2),d=X[0],w=X[1];(0,h.useEffect)(function(){J(A.id)},[]),(0,h.useEffect)(function(){return(0,E.request)("/api/destinations",{params:{page:1,per_page:1e3,order_by:"id",order:"asc"}}).then(function(){var s=g()(_()().mark(function t(l){var j;return _()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:console.log("api_response"),console.log(l),console.log("api_response.data"),console.log(l.data),console.log("api_response.data.data"),console.log(l.data.data),j=l.data.data.map(function(C,a){return{value:C.id,label:C.title}}),console.log("table_data"),console.log(j),Do(j);case 10:case"end":return p.stop()}},t)}));return function(t){return s.apply(this,arguments)}}()).catch(function(s){console.log(s)})},[]);var fo=function(t){t.file.status!=="uploading"&&(t.file.status=="removed"&&D(""),t.file.status==="done"&&(0,z.y)(t).then(function(l){console.log("base64String"),console.log(l),D(l)}),t.file.status==="error"&&F.ZP.error("".concat(t.file.name," file upload failed.")))},jo=(0,e.jsxs)("button",{style:{border:0,background:"none"},type:"button",children:[(0,e.jsx)(G.Z,{}),(0,e.jsx)("div",{style:{marginTop:8},children:"Upload"})]});return(0,e.jsxs)(no._z,{children:[(0,e.jsxs)(I.Z,{gutter:{xs:8,sm:16,md:24,lg:32},children:[(0,e.jsx)(m.Z,{flex:"auto"}),(0,e.jsx)(m.Z,{flex:"100px",children:(0,e.jsxs)($.ZP,{type:"primary",onClick:function(){E.history.push("/admin-app/accommodations/new")},style:{marginBlockEnd:15},children:[(0,e.jsx)(G.Z,{})," New"]},"primary")})]}),(0,e.jsx)(x.A,{layout:"vertical",grid:!0,form:T,initialValues:V,params:{accommodation_id:f},request:g()(_()().mark(function s(){var t,l=arguments;return _()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if(t=l.length>0&&l[0]!==void 0?l[0]:{},console.log("proform-params"),console.log(t),(t==null?void 0:t.accommodation_id)!=0){r.next=5;break}return r.abrupt("return");case 5:return r.next=7,(0,H.p)(2e3);case 7:return r.next=9,(0,E.request)("/api/accommodations/"+(t==null?void 0:t.accommodation_id),{method:"GET"}).then(function(){var p=g()(_()().mark(function C(a){var B,R,W,K,L,y,b;return _()().wrap(function(U){for(;;)switch(U.prev=U.next){case 0:return console.log("api_response"),console.log(a),D(a==null||(B=a.data)===null||B===void 0?void 0:B.image_url),w({lat:a==null||(R=a.data)===null||R===void 0?void 0:R.latitude,lng:a==null||(W=a.data)===null||W===void 0?void 0:W.longitude}),U.abrupt("return",S()(S()({},V),{},{title:a==null||(K=a.data)===null||K===void 0?void 0:K.title,description:a==null||(L=a.data)===null||L===void 0?void 0:L.description,image_url:a==null||(y=a.data)===null||y===void 0?void 0:y.image_url,destination_id:a==null||(b=a.data)===null||b===void 0?void 0:b.destination_id}));case 5:case"end":return U.stop()}},C)}));return function(C){return p.apply(this,arguments)}}()).catch(function(p){console.log(p)});case 9:return r.abrupt("return",r.sent);case 10:case"end":return r.stop()}},s)})),onFinish:function(){var s=g()(_()().mark(function t(l){return _()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return console.log(l),r.next=3,(0,H.p)(1e3);case 3:return l.image=v,l.accommodation_id=f,l.latitude=d==null?void 0:d.lat,l.longitude=d==null?void 0:d.lng,r.next=9,ho(l);case 9:case"end":return r.stop()}},t)}));return function(t){return s.apply(this,arguments)}}(),submitter:{render:function(t,l){return(0,e.jsx)(to.S,{children:l})}},children:(0,e.jsxs)(ao.Z,{title:"Accommodation Details",bordered:!0,headerBordered:!0,collapsible:!0,size:"default",type:"inner",style:{marginBlockEnd:15,minWidth:800,maxWidth:"100%"},onCollapse:function(t){return console.log(t)},children:[(0,e.jsxs)(I.Z,{gutter:{xs:8,sm:16,md:24,lg:32},children:[(0,e.jsx)(m.Z,{span:10,children:(0,e.jsxs)(x.A.Group,{size:24,children:[(0,e.jsx)(m.Z,{span:24,children:(0,e.jsx)(_o.Z,{width:"100%",height:200,src:v})}),(0,e.jsx)(m.Z,{span:24,style:{textAlign:"center"},children:(0,e.jsx)(x.A.Item,{name:"image",getValueFromEvent:z.h,children:(0,e.jsx)(co.Z,{name:"image",onChange:fo,maxCount:1,children:(0,e.jsx)($.ZP,{type:"primary",icon:(0,e.jsx)(uo.Z,{}),style:{margin:"10px 0px 0px 0px"},onClick:function(t){},children:"Change Image"})})})})]})}),(0,e.jsx)(m.Z,{span:14,children:(0,e.jsxs)(x.A.Group,{size:24,children:[(0,e.jsx)(lo.Z,{name:"title",label:"Title",placeholder:"Type accommodation title",fieldProps:{prefix:(0,e.jsx)(mo.Z,{}),onChange:function(t){console.log("e.target.value"),console.log(t.target.value)}},colProps:{xs:24,sm:24,md:24,lg:24,xl:24}}),(0,e.jsx)(ro.Z,{name:"description",label:"Description",placeholder:"Share a little details regarding the accommodation. ",colProps:{xs:24,sm:24,md:24,lg:24,xl:24},fieldProps:{size:"middle"}}),(0,e.jsx)(io.Z,{name:"destination_id",label:"Destinations",showSearch:!0,options:vo,debounceTime:300,placeholder:"Please Select Your Destination",rules:[{required:!0}],colProps:{xs:24,sm:24,md:24,lg:24,xl:24}})]})})]}),(0,e.jsx)(I.Z,{gutter:{xs:8,sm:16,md:24,lg:32},children:(0,e.jsxs)(m.Z,{span:24,children:[(0,e.jsx)(go.Z,{latitude:d.lat,longitude:d.lng}),(0,e.jsx)(po.Z,{initialCoords:{lat:parseFloat(d.lat),lng:parseFloat(d.lng)},onPositionChange:function(t){console.log("New marker position:",t),w(t)}})]})})]})})]})};Z.default=Eo}}]);
