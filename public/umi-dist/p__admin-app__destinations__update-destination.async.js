"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[589],{57457:function(Ie,F,n){n.r(F);var le=n(97857),G=n.n(le),re=n(5574),P=n.n(re),ie=n(15009),d=n.n(ie),se=n(99289),h=n.n(se),de=n(6110),v=n(34994),_e=n(2236),I=n(93410),ce=n(5966),ue=n(90672),z=n(55895),H=n(64317),N=n(2453),me=n(53025),W=n(71230),M=n(15746),w=n(14726),pe=n(55060),ge=n(66476),V=n(51042),he=n(88484),ve=n(87547),m=n(67294),E=n(35312),We=n(49790),J=n(16801),Q=n(58547),Ee=n(41673),fe=n(92357),e=n(85893),X={title:"",description:"",image_url:"",accommodations:"",attractions:""},De=function(){var Y=h()(d()().mark(function C(o){var f,T;return d()().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return console.log("onFinishHandlerForm"),console.log("Received values of form: ",o),console.log("values"),console.log(o),f=new FormData,console.log("formData - before"),console.log(f),f.append("title",o==null?void 0:o.title),f.append("description",o==null?void 0:o.description),f.append("image",o==null?void 0:o.image),console.log("formData - after"),console.log(f),_.prev=12,T={id:o==null?void 0:o.destination_id,title:o==null?void 0:o.title,description:o==null?void 0:o.description,image:o==null?void 0:o.image,accommodations:o==null?void 0:o.accommodations.map(function(c){return c==null?void 0:c.accommodation}),attractions:o==null?void 0:o.attractions.map(function(c){return c==null?void 0:c.attraction}),latitude:o==null?void 0:o.latitude,longitude:o==null?void 0:o.longitude},_.next=16,(0,E.request)("/api/destinations/"+(o==null?void 0:o.destination_id),{method:"PUT",data:T}).then(function(){var c=h()(d()().mark(function j(g){var O,x;return d()().wrap(function(A){for(;;)switch(A.prev=A.next){case 0:console.log("api_response"),console.log(g),(g==null||(O=g.data)===null||O===void 0?void 0:O.id)>0&&(N.ZP.success("Submitted successfully"),E.history.push("/admin-app/destinations/edit/"+(g==null||(x=g.data)===null||x===void 0?void 0:x.id)));case 3:case"end":return A.stop()}},j)}));return function(j){return c.apply(this,arguments)}}()).catch(function(c){console.log(c)});case 16:return _.abrupt("return",_.sent);case 19:_.prev=19,_.t0=_.catch(12),console.log("api_response - error"),console.log(_.t0);case 23:return _.abrupt("return",!0);case 24:case"end":return _.stop()}},C,null,[[12,19]])}));return function(o){return Y.apply(this,arguments)}}(),Pe=function(){var C=(0,E.useParams)(),o=me.Z.useForm(),f=P()(o,1),T=f[0],k=(0,m.useState)("http://vu.project.localhost.com/images/default/placeholder.jpg"),_=P()(k,2),c=_[0],j=_[1],g=(0,m.useState)(0),O=P()(g,2),x=O[0],q=O[1],A=(0,m.useState)([]),ee=P()(A,2),Me=ee[0],je=ee[1],Oe=(0,m.useState)([]),oe=P()(Oe,2),xe=oe[0],Ae=oe[1],Ce=(0,m.useState)(""),te=P()(Ce,2),r=te[0],ne=te[1],Te=(0,m.useState)(""),ae=P()(Te,2),ye=ae[0],Ue=ae[1];(0,m.useEffect)(function(){q(C.id)},[]),(0,m.useEffect)(function(){},[r]),(0,m.useEffect)(function(){return(0,E.request)("/api/accommodations",{params:{page:1,per_page:1e3,order_by:"id",order:"asc"}}).then(function(){var i=h()(d()().mark(function t(a){var p;return d()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:console.log("api_response"),console.log(a),console.log("api_response.data"),console.log(a.data),console.log("api_response.data.data"),console.log(a.data.data),p=a.data.data.map(function(D,l){return{value:D.id,label:D.title}}),console.log("table_data"),console.log(p),je(p);case 10:case"end":return u.stop()}},t)}));return function(t){return i.apply(this,arguments)}}()).catch(function(i){console.log(i)})},[]),(0,m.useEffect)(function(){return(0,E.request)("/api/attractions",{params:{page:1,per_page:1e3,order_by:"id",order:"asc"}}).then(function(){var i=h()(d()().mark(function t(a){var p;return d()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:console.log("api_response"),console.log(a),console.log("api_response.data"),console.log(a.data),console.log("api_response.data.data"),console.log(a.data.data),p=a.data.data.map(function(D,l){return{value:D.id,label:D.title}}),console.log("table_data"),console.log(p),Ae(p);case 10:case"end":return u.stop()}},t)}));return function(t){return i.apply(this,arguments)}}()).catch(function(i){console.log(i)})},[]);var Be=function(t){t.file.status!=="uploading"&&(t.file.status=="removed"&&j(""),t.file.status==="done"&&(0,Q.y)(t).then(function(a){console.log("base64String"),console.log(a),j(a)}),t.file.status==="error"&&N.ZP.error("".concat(t.file.name," file upload failed.")))},Re=(0,e.jsxs)("button",{style:{border:0,background:"none"},type:"button",children:[(0,e.jsx)(V.Z,{}),(0,e.jsx)("div",{style:{marginTop:8},children:"Upload"})]});return console.log("googleMapPosition - test "),console.log(r),(0,e.jsxs)(de._z,{children:[(0,e.jsxs)(W.Z,{gutter:{xs:8,sm:16,md:24,lg:32},children:[(0,e.jsx)(M.Z,{flex:"auto"}),(0,e.jsx)(M.Z,{flex:"100px",children:(0,e.jsxs)(w.ZP,{type:"primary",onClick:function(){E.history.push("/admin-app/destinations/new")},style:{marginBlockEnd:15},children:[(0,e.jsx)(V.Z,{})," New"]},"primary")})]}),(0,e.jsxs)(v.A,{layout:"vertical",grid:!0,form:T,initialValues:X,params:{destination_id:x},request:h()(d()().mark(function i(){var t,a=arguments;return d()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:if(t=a.length>0&&a[0]!==void 0?a[0]:{},console.log("proform-params"),console.log(t),(t==null?void 0:t.destination_id)!=0){s.next=5;break}return s.abrupt("return");case 5:return s.next=7,(0,J.p)(2e3);case 7:return s.next=9,(0,E.request)("/api/destinations/"+(t==null?void 0:t.destination_id),{method:"GET"}).then(function(){var u=h()(d()().mark(function D(l){var y,U,R,b,K,L,Z,S;return d()().wrap(function(B){for(;;)switch(B.prev=B.next){case 0:return console.log("api_response"),console.log(l),j(l==null||(y=l.data)===null||y===void 0?void 0:y.image_url),ne({lat:l==null||(U=l.data)===null||U===void 0?void 0:U.latitude,lng:l==null||(R=l.data)===null||R===void 0?void 0:R.longitude}),B.abrupt("return",G()(G()({},X),{},{title:l==null||(b=l.data)===null||b===void 0?void 0:b.title,description:l==null||(K=l.data)===null||K===void 0?void 0:K.description,image_url:l==null||(L=l.data)===null||L===void 0?void 0:L.image_url,accommodations:l==null||(Z=l.data)===null||Z===void 0?void 0:Z.accommodations.map(function($){return{accommodation:$.id}}),attractions:l==null||(S=l.data)===null||S===void 0?void 0:S.attractions.map(function($){return{attraction:$.id}})}));case 5:case"end":return B.stop()}},D)}));return function(D){return u.apply(this,arguments)}}()).catch(function(u){console.log(u)});case 9:return s.abrupt("return",s.sent);case 10:case"end":return s.stop()}},i)})),onFinish:function(){var i=h()(d()().mark(function t(a){return d()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return console.log(a),s.next=3,(0,J.p)(1e3);case 3:return a.image=c,a.destination_id=x,a.latitude=r==null?void 0:r.lat,a.longitude=r==null?void 0:r.lng,s.next=9,De(a);case 9:case"end":return s.stop()}},t)}));return function(t){return i.apply(this,arguments)}}(),submitter:{render:function(t,a){return(0,e.jsx)(_e.S,{children:a})}},children:[(0,e.jsxs)(I.Z,{title:"Destination Details",bordered:!0,headerBordered:!0,collapsible:!0,size:"default",type:"inner",style:{marginBlockEnd:15,minWidth:800,maxWidth:"100%"},onCollapse:function(t){return console.log(t)},children:[(0,e.jsxs)(W.Z,{gutter:{xs:8,sm:16,md:24,lg:32},children:[(0,e.jsx)(M.Z,{span:10,children:(0,e.jsxs)(v.A.Group,{size:24,children:[(0,e.jsx)(M.Z,{span:24,children:(0,e.jsx)(pe.Z,{width:"100%",height:200,src:c})}),(0,e.jsx)(M.Z,{span:24,style:{textAlign:"center"},children:(0,e.jsx)(v.A.Item,{name:"image",getValueFromEvent:Q.h,children:(0,e.jsx)(ge.Z,{name:"image",onChange:Be,maxCount:1,children:(0,e.jsx)(w.ZP,{type:"primary",icon:(0,e.jsx)(he.Z,{}),style:{margin:"10px 0px 0px 0px"},onClick:function(t){},children:"Change Image"})})})})]})}),(0,e.jsx)(M.Z,{span:14,children:(0,e.jsxs)(v.A.Group,{size:24,children:[(0,e.jsx)(ce.Z,{name:"title",label:"Title",placeholder:"Type destination title",fieldProps:{prefix:(0,e.jsx)(ve.Z,{}),onChange:function(t){console.log("e.target.value"),console.log(t.target.value)}},colProps:{xs:24,sm:24,md:24,lg:24,xl:24}}),(0,e.jsx)(ue.Z,{name:"description",label:"Description",placeholder:"Share a little details regarding the destination. ",colProps:{xs:24,sm:24,md:24,lg:24,xl:24},fieldProps:{size:"middle"}})]})})]}),(0,e.jsx)(W.Z,{gutter:{xs:8,sm:16,md:24,lg:32},children:(0,e.jsxs)(M.Z,{span:24,children:[(0,e.jsx)(fe.Z,{latitude:r.lat,longitude:r.lng}),(0,e.jsx)(Ee.Z,{initialCoords:{lat:parseFloat(r.lat),lng:parseFloat(r.lng)},onPositionChange:function(t){console.log("New marker position:",t),ne(t)}})]})})]}),(0,e.jsx)(I.Z,{title:"Accommodations Details",bordered:!0,headerBordered:!0,collapsible:!0,size:"default",type:"default",style:{marginBlockEnd:15,minWidth:800,maxWidth:"100%"},onCollapse:function(t){return console.log(t)},children:(0,e.jsx)(v.A.Group,{title:"Accommodations",size:24,children:(0,e.jsx)(z.u,{name:"accommodations",min:1,copyIconProps:{tooltipText:"Copy this accommodation"},deleteIconProps:{tooltipText:"Delete this accommodation"},creatorButtonProps:{creatorButtonText:"Add New Accommodation"},children:(0,e.jsx)(v.A.Group,{size:24,children:(0,e.jsx)(H.Z,{name:"accommodation",label:"Name",showSearch:!0,options:Me,debounceTime:300,placeholder:"Please Select Accommodation",rules:[{required:!0}],colProps:{xs:24,sm:24,md:24,lg:24,xl:24}})})})})}),(0,e.jsx)(I.Z,{title:"Attractions Details",bordered:!0,headerBordered:!0,collapsible:!0,size:"default",type:"default",style:{marginBlockEnd:15,minWidth:800,maxWidth:"100%"},onCollapse:function(t){return console.log(t)},children:(0,e.jsx)(v.A.Group,{title:"Attractions",size:24,children:(0,e.jsx)(z.u,{name:"attractions",min:1,copyIconProps:{tooltipText:"Copy this attraction"},deleteIconProps:{tooltipText:"Delete this attraction"},creatorButtonProps:{creatorButtonText:"Add New Attraction"},children:(0,e.jsx)(v.A.Group,{size:24,children:(0,e.jsx)(H.Z,{name:"attraction",label:"Name",showSearch:!0,options:xe,debounceTime:300,placeholder:"Please Select Attraction",rules:[{required:!0}],colProps:{xs:24,sm:24,md:24,lg:24,xl:24}})})})})})]})]})};F.default=Pe}}]);
