"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[9025],{58547:function(re,M,e){e.d(M,{h:function(){return O},y:function(){return T}});var z=e(67294),O=function(d){return console.log("Upload event:",d),Array.isArray(d)?d:d&&d.fileList},T=function(d){return new Promise(function(i,x){var u=new FileReader;u.readAsDataURL(d.file.originFileObj),u.onload=function(){var h=u.result;console.log("DataURL: test",h),i(h)},u.onerror=function(h){return x(h)}})}},66392:function(re,M,e){e.r(M);var z=e(97857),O=e.n(z),T=e(5574),p=e.n(T),d=e(15009),i=e.n(d),x=e(99289),u=e.n(x),h=e(6110),g=e(34994),ne=e(2236),ae=e(93410),I=e(5966),le=e(64317),H=e(2453),oe=e(53025),te=e(71230),j=e(15746),se=e(55060),_e=e(66476),ie=e(14726),ue=e(88484),N=e(87547),C=e(35312),U=e(67294),V=e(58547),l=e(85893),w=function(){var m=arguments.length>0&&arguments[0]!==void 0?arguments[0]:100;return new Promise(function(c){setTimeout(function(){c(!0)},m)})},J={image_url:"",first_name:"",last_name:"",name:"",email:"",role:"",password:""},de=function(){var R=u()(i()().mark(function m(c,r){var L;return i()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("onFinishHandlerForm"),console.log("Received values of form: ",r),t.prev=2,L={image:r==null?void 0:r.image_url,first_name:r==null?void 0:r.first_name,last_name:r==null?void 0:r.last_name,name:(r==null?void 0:r.first_name)+" "+(r==null?void 0:r.last_name),email:r==null?void 0:r.email,role:r==null?void 0:r.role,password:r==null?void 0:r.password},t.next=6,(0,C.request)("/api/users/"+c,{method:"PUT",data:L}).then(function(){var f=u()(i()().mark(function E(v){var P;return i()().wrap(function(D){for(;;)switch(D.prev=D.next){case 0:console.log("api_response"),console.log(v),(v==null||(P=v.data)===null||P===void 0?void 0:P.id)>0&&H.ZP.success("Updated successfully");case 3:case"end":return D.stop()}},E)}));return function(E){return f.apply(this,arguments)}}()).catch(function(f){console.log(f)});case 6:return t.abrupt("return",t.sent);case 9:t.prev=9,t.t0=t.catch(2),console.log("api_response - error"),console.log(t.t0);case 13:return t.abrupt("return",!0);case 14:case"end":return t.stop()}},m,null,[[2,9]])}));return function(c,r){return R.apply(this,arguments)}}(),me=function(){var m=(0,C.useModel)("@@initialState"),c=m.initialState,r=m.loading,L=m.refresh,ce=m.setInitialState,t=(0,C.useParams)(),f=(0,U.useState)(0),E=p()(f,2),v=E[0],P=E[1],Q=oe.Z.useForm(),D=p()(Q,1),ve=D[0],pe=(0,U.useState)(""),X=p()(pe,2),B=X[0],he=X[1],ge=(0,U.useState)(B),Y=p()(ge,2),k=Y[0],q=Y[1];(0,U.useEffect)(function(){var s;P(c==null||(s=c.currentUser)===null||s===void 0?void 0:s.id)},[]);var fe=function(n){n.file.status!=="uploading"&&(n.file.status=="removed"&&q(""),n.file.status==="done"&&(0,V.y)(n).then(function(_){console.log("base64String"),console.log(_),q(_)}),n.file.status==="error"&&H.ZP.error("".concat(n.file.name," file upload failed.")))};return(0,l.jsx)(h._z,{children:(0,l.jsx)(g.A,{layout:"vertical",grid:!0,form:ve,initialValues:J,params:{user_id:v},request:u()(i()().mark(function s(){var n,_=arguments;return i()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:if(n=_.length>0&&_[0]!==void 0?_[0]:{},console.log("proform-params"),console.log(n),(n==null?void 0:n.user_id)!=0){o.next=5;break}return o.abrupt("return");case 5:return o.next=7,w(2e3);case 7:return o.next=9,(0,C.request)("/api/users/"+(n==null?void 0:n.user_id),{method:"GET"}).then(function(){var b=u()(i()().mark(function ee(a){var W,K,y,S,F,Z,$,G;return i()().wrap(function(A){for(;;)switch(A.prev=A.next){case 0:return console.log("api_response"),console.log(a),he(a==null||(W=a.data)===null||W===void 0?void 0:W.image_url),A.abrupt("return",O()(O()({},J),{},{image_url:a==null||(K=a.data)===null||K===void 0?void 0:K.image_url,first_name:a==null||(y=a.data)===null||y===void 0?void 0:y.first_name,last_name:a==null||(S=a.data)===null||S===void 0?void 0:S.last_name,name:a==null||(F=a.data)===null||F===void 0?void 0:F.name,email:a==null||(Z=a.data)===null||Z===void 0?void 0:Z.email,role:a==null||($=a.data)===null||$===void 0?void 0:$.role,password:a==null||(G=a.data)===null||G===void 0?void 0:G.password}));case 4:case"end":return A.stop()}},ee)}));return function(ee){return b.apply(this,arguments)}}()).catch(function(b){console.log(b)});case 9:return o.abrupt("return",o.sent);case 10:case"end":return o.stop()}},s)})),onFinish:function(){var s=u()(i()().mark(function n(_){return i()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return console.log(_),o.next=3,w(1e3);case 3:return _.user_id=v,_.image_url=k,o.next=7,de(_);case 7:case"end":return o.stop()}},n)}));return function(n){return s.apply(this,arguments)}}(),formProps:{validateMessages:{required:"This is required"}},submitter:{render:function(n,_){return(0,l.jsx)(ne.S,{children:_})}},children:(0,l.jsx)(ae.Z,{title:"Account Details",bordered:!0,headerBordered:!0,collapsible:!0,size:"default",type:"inner",style:{marginBlockEnd:15,minWidth:800,maxWidth:"100%"},onCollapse:function(n){return console.log(n)},children:(0,l.jsxs)(te.Z,{gutter:{xs:8,sm:16,md:24,lg:32},children:[(0,l.jsx)(j.Z,{span:6,children:(0,l.jsxs)(g.A.Group,{size:24,children:[(0,l.jsx)(j.Z,{span:24,children:(0,l.jsx)(se.Z,{width:"100%",height:200,src:k,fallback:B!==""?B:"http://vu.project.localhost.com/images/default/user-profile-image.png"})}),(0,l.jsx)(j.Z,{span:24,style:{textAlign:"center"},children:(0,l.jsx)(g.A.Item,{name:"image_url",getValueFromEvent:V.h,children:(0,l.jsx)(_e.Z,{name:"image_url",onChange:fe,maxCount:1,children:(0,l.jsx)(ie.ZP,{type:"primary",icon:(0,l.jsx)(ue.Z,{}),style:{margin:"10px 0px 0px 0px"},onClick:function(n){},children:"Change Image"})})})})]})}),(0,l.jsxs)(j.Z,{span:18,children:[(0,l.jsxs)(g.A.Group,{size:24,children:[(0,l.jsx)(I.Z,{name:"first_name",label:"First Name",placeholder:"Type First Name",fieldProps:{prefix:(0,l.jsx)(N.Z,{}),onChange:function(n){console.log("e.target.value"),console.log(n.target.value)}},colProps:{xs:24,sm:24,md:12,lg:12,xl:12}}),(0,l.jsx)(I.Z,{name:"last_name",label:"Last Name",placeholder:"Type Last Name",fieldProps:{prefix:(0,l.jsx)(N.Z,{}),onChange:function(n){console.log("e.target.value"),console.log(n.target.value)}},colProps:{xs:24,sm:24,md:12,lg:12,xl:12}})]}),(0,l.jsxs)(g.A.Group,{size:24,children:[(0,l.jsx)(I.Z,{label:"Email",name:"email",placeholder:"info@example.com etc.",rules:[{required:!0}],disabled:!0,colProps:{xs:24,sm:24,md:12,lg:12,xl:12}}),(0,l.jsx)(le.Z,{name:"role",label:"Role",showSearch:!0,debounceTime:300,options:[{label:"Admin",value:"admin"},{label:"User",value:"user"}],placeholder:"Please Select User Role",disabled:!0,colProps:{xs:24,sm:24,md:12,lg:12,xl:12},rules:[{required:!0,message:"Please select your role!"}]})]})]})]})})})})};M.default=me}}]);
