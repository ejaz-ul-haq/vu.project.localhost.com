"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[265],{58547:function(K,D,o){o.d(D,{h:function(){return h},y:function(){return x}});var U=o(67294),h=function(_){return console.log("Upload event:",_),Array.isArray(_)?_:_&&_.fileList},x=function(_){return new Promise(function(E,C){var l=new FileReader;l.readAsDataURL(_.file.originFileObj),l.onload=function(){var c=l.result;console.log("DataURL: test",c),E(c)},l.onerror=function(c){return C(c)}})}},74114:function(K,D,o){o.r(D);var U=o(5574),h=o.n(U),x=o(15009),m=o.n(x),_=o(99289),E=o.n(_),C=o(6110),l=o(34994),c=o(2236),F=o(58128),P=o(5966),b=o(64317),R=o(2453),Z=o(53025),w=o(71230),v=o(15746),S=o(55060),$=o(66476),z=o(14726),G=o(88484),I=o(87547),L=o(67294),B=o(35312),W=o(58547),n=o(85893),H=function(){var p=arguments.length>0&&arguments[0]!==void 0?arguments[0]:100;return new Promise(function(e){setTimeout(function(){e(!0)},p)})},N=function(){var A=E()(m()().mark(function p(e){var s,M;return m()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return console.log("onFinishHandlerForm"),console.log("Received values of form: ",e),s=new FormData,console.log("formData - before"),console.log(s),s.append("image",e==null?void 0:e.image),s.append("first_name",e==null?void 0:e.first_name),s.append("last_name",e==null?void 0:e.last_name),s.append("name",(e==null?void 0:e.first_name)+" "+(e==null?void 0:e.last_name)),s.append("email",e==null?void 0:e.email),s.append("role",e==null?void 0:e.role),s.append("password",e==null?void 0:e.password),s.append("password_confirmation",e==null?void 0:e.password_confirmation),console.log("formData - after"),console.log(s),a.prev=15,M={image:e==null?void 0:e.image,first_name:e==null?void 0:e.first_name,last_name:e==null?void 0:e.last_name,name:(e==null?void 0:e.first_name)+" "+(e==null?void 0:e.last_name),email:e==null?void 0:e.email,role:e==null?void 0:e.role,password:e==null?void 0:e.password,password_confirmation:e==null?void 0:e.password_confirmation},a.next=19,(0,B.request)("/api/users",{method:"POST",data:M}).then(function(){var O=E()(m()().mark(function j(i){var f,g;return m()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:console.log("api_response"),console.log(i),(i==null||(f=i.data)===null||f===void 0?void 0:f.id)>0&&(R.ZP.success("Submitted successfully"),B.history.push("/admin-app/users/edit/"+(i==null||(g=i.data)===null||g===void 0?void 0:g.id)));case 3:case"end":return t.stop()}},j)}));return function(j){return O.apply(this,arguments)}}()).catch(function(O){console.log(O)});case 19:return a.abrupt("return",a.sent);case 22:a.prev=22,a.t0=a.catch(15),console.log("api_response - error"),console.log(a.t0);case 26:return a.abrupt("return",!0);case 27:case"end":return a.stop()}},p,null,[[15,22]])}));return function(e){return A.apply(this,arguments)}}(),V=function(){var p=Z.Z.useForm(),e=h()(p,1),s=e[0],M=(0,L.useState)(""),T=h()(M,2),a=T[0],O=T[1],j=(0,L.useState)("https://vu.project.wpvisions.com/images/default/user-profile-image.png"),i=h()(j,2),f=i[0],g=i[1],y=function(r){r.file.status!=="uploading"&&(r.file.status=="removed"&&g(""),r.file.status==="done"&&(0,W.y)(r).then(function(d){console.log("base64String"),console.log(d),g(d)}),r.file.status==="error"&&R.ZP.error("".concat(r.file.name," file upload failed.")))};return(0,n.jsx)(C._z,{children:(0,n.jsx)(l.A,{layout:"vertical",grid:!0,form:s,onFinish:function(){var t=E()(m()().mark(function r(d){return m()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return console.log(d),u.next=3,H(1e3);case 3:return d.image=f,u.next=6,N(d);case 6:case"end":return u.stop()}},r)}));return function(r){return t.apply(this,arguments)}}(),formProps:{validateMessages:{required:"This is required"}},submitter:{render:function(r,d){return(0,n.jsx)(c.S,{children:d})}},children:(0,n.jsx)(F.Z,{title:"Account Details",bordered:!0,headerBordered:!0,collapsible:!0,size:"default",type:"inner",style:{marginBlockEnd:15,minWidth:800,maxWidth:"100%"},onCollapse:function(r){return console.log(r)},children:(0,n.jsxs)(w.Z,{gutter:{xs:8,sm:16,md:24,lg:32},children:[(0,n.jsx)(v.Z,{span:6,children:(0,n.jsxs)(l.A.Group,{size:24,children:[(0,n.jsx)(v.Z,{span:24,children:(0,n.jsx)(S.Z,{width:"100%",height:200,src:f})}),(0,n.jsx)(v.Z,{span:24,style:{textAlign:"center"},children:(0,n.jsx)(l.A.Item,{name:"image",getValueFromEvent:W.h,children:(0,n.jsx)($.Z,{name:"image",onChange:y,maxCount:1,children:(0,n.jsx)(z.ZP,{type:"primary",icon:(0,n.jsx)(G.Z,{}),style:{margin:"10px 0px 0px 0px"},onClick:function(r){},children:"Change Image"})})})})]})}),(0,n.jsxs)(v.Z,{span:18,children:[(0,n.jsxs)(l.A.Group,{size:24,children:[(0,n.jsx)(P.Z,{name:"first_name",label:"First Name",placeholder:"Type First Name",fieldProps:{prefix:(0,n.jsx)(I.Z,{}),onChange:function(r){console.log("e.target.value"),console.log(r.target.value)}},colProps:{xs:24,sm:24,md:12,lg:12,xl:12}}),(0,n.jsx)(P.Z,{name:"last_name",label:"Last Name",placeholder:"Type Last Name",fieldProps:{prefix:(0,n.jsx)(I.Z,{}),onChange:function(r){console.log("e.target.value"),console.log(r.target.value)}},colProps:{xs:24,sm:24,md:12,lg:12,xl:12}})]}),(0,n.jsxs)(l.A.Group,{size:24,children:[(0,n.jsx)(P.Z,{label:"Email",name:"email",placeholder:"info@example.com etc.",rules:[{required:!0}],colProps:{xs:24,sm:24,md:12,lg:12,xl:12}}),(0,n.jsx)(b.Z,{name:"role",label:"Role",showSearch:!0,debounceTime:300,options:[{label:"Admin",value:"admin"},{label:"User",value:"user"}],placeholder:"Please Select User Role",colProps:{xs:24,sm:24,md:12,lg:12,xl:12},rules:[{required:!0,message:"Please select your role!"}]})]}),(0,n.jsxs)(l.A.Group,{size:24,children:[(0,n.jsx)(P.Z.Password,{name:"password",label:"Password",placeholder:"Please type a password",rules:[{required:!0}],colProps:{xs:24,sm:24,md:12,lg:12,xl:12}}),(0,n.jsx)(P.Z.Password,{name:"password_confirmation",label:"Confirm Password",dependencies:["password"],placeholder:"Please type a confirm password",rules:[{required:!0,message:"Please confirm your password!"},function(t){var r=t.getFieldValue;return{validator:function(J,u){return!u||r("password")===u?Promise.resolve():Promise.reject(new Error("The new password that you entered do not match!"))}}}],colProps:{xs:24,sm:24,md:12,lg:12,xl:12}})]})]})]})})})})};D.default=V}}]);
