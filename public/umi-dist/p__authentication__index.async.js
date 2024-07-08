"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[135],{40920:function(pn,q,t){t.r(q),t.d(q,{default:function(){return vn}});var ge=t(15009),R=t.n(ge),me=t(97857),w=t.n(me),ve=t(99289),Y=t.n(ve),fe=t(5574),_=t.n(fe),ee=t(56211),pe=t(87547),J=t(94149),z=t(1413),d=t(67294),he={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M744 62H280c-35.3 0-64 28.7-64 64v768c0 35.3 28.7 64 64 64h464c35.3 0 64-28.7 64-64V126c0-35.3-28.7-64-64-64zm-8 824H288V134h448v752zM472 784a40 40 0 1080 0 40 40 0 10-80 0z"}}]},name:"mobile",theme:"outlined"},ye=he,xe=t(91146),Se=function(e,o){return d.createElement(xe.Z,(0,z.Z)((0,z.Z)({},e),{},{ref:o,icon:ye}))},Ce=d.forwardRef(Se),ne=Ce,je=t(91),Ie=t(10915),be=t(28459),$e=t(93967),G=t.n($e),Pe=t(34994),k=t(4942),Ze=t(98082),Ee=function(e){return(0,k.Z)((0,k.Z)({},e.componentCls,{"&-container":{display:"flex",flex:"1",flexDirection:"column",height:"100%",paddingInline:32,paddingBlock:24,overflow:"auto",background:"inherit"},"&-top":{textAlign:"center"},"&-header":{display:"flex",alignItems:"center",justifyContent:"center",height:"44px",lineHeight:"44px",a:{textDecoration:"none"}},"&-title":{position:"relative",insetBlockStart:"2px",color:"@heading-color",fontWeight:"600",fontSize:"33px"},"&-logo":{width:"44px",height:"44px",marginInlineEnd:"16px",verticalAlign:"top",img:{width:"100%"}},"&-desc":{marginBlockStart:"12px",marginBlockEnd:"40px",color:e.colorTextSecondary,fontSize:e.fontSize},"&-main":{minWidth:"328px",maxWidth:"580px",margin:"0 auto","&-other":{marginBlockStart:"24px",lineHeight:"22px",textAlign:"start"}}}),"@media (min-width: @screen-md-min)",(0,k.Z)({},"".concat(e.componentCls,"-container"),{paddingInline:0,paddingBlockStart:32,paddingBlockEnd:24,backgroundRepeat:"no-repeat",backgroundPosition:"center 110px",backgroundSize:"100%"}))};function Ne(n){return(0,Ze.Xj)("LoginForm",function(e){var o=(0,z.Z)((0,z.Z)({},e),{},{componentCls:".".concat(n)});return[Ee(o)]})}var l=t(85893),Ae=["logo","message","contentStyle","title","subTitle","actions","children","containerStyle","otherStyle"];function Be(n){var e,o=n.logo,s=n.message,a=n.contentStyle,f=n.title,p=n.subTitle,h=n.actions,y=n.children,S=n.containerStyle,$=n.otherStyle,i=(0,je.Z)(n,Ae),E=(0,Ie.YB)(),O=i.submitter===!1?!1:(0,z.Z)((0,z.Z)({searchConfig:{submitText:E.getMessage("loginForm.submitText","\u767B\u5F55")}},i.submitter),{},{submitButtonProps:(0,z.Z)({size:"large",style:{width:"100%"}},(e=i.submitter)===null||e===void 0?void 0:e.submitButtonProps),render:function(g,C){var v,r=C.pop();if(typeof(i==null||(v=i.submitter)===null||v===void 0?void 0:v.render)=="function"){var u,x;return i==null||(u=i.submitter)===null||u===void 0||(x=u.render)===null||x===void 0?void 0:x.call(u,g,C)}return r}}),m=(0,d.useContext)(be.ZP.ConfigContext),L=m.getPrefixCls("pro-form-login"),N=Ne(L),D=N.wrapSSR,F=N.hashId,b=function(g){return"".concat(L,"-").concat(g," ").concat(F)},j=(0,d.useMemo)(function(){return o?typeof o=="string"?(0,l.jsx)("img",{src:o}):o:null},[o]);return D((0,l.jsxs)("div",{className:G()(b("container"),F),style:S,children:[(0,l.jsxs)("div",{className:"".concat(b("top")," ").concat(F).trim(),children:[f||j?(0,l.jsxs)("div",{className:"".concat(b("header")),children:[j?(0,l.jsx)("span",{className:b("logo"),children:j}):null,f?(0,l.jsx)("span",{className:b("title"),children:f}):null]}):null,p?(0,l.jsx)("div",{className:b("desc"),children:p}):null]}),(0,l.jsxs)("div",{className:b("main"),style:(0,z.Z)({width:328},a),children:[(0,l.jsxs)(Pe.A,(0,z.Z)((0,z.Z)({isKeyPressSubmit:!0},i),{},{submitter:O,children:[s,y]})),h?(0,l.jsx)("div",{className:b("main-other"),style:$,children:h}):null]})]}))}var H=t(5966),T=t(35312),Me=t(76278),ze=t(17012),Oe=t(84481),Te=t(29950),Le=t(1558),we=t(29372),He=t(64217),Fe=t(42550),Re=t(96159),De=t(53124),te=t(861),We=t(14747),Ue=t(27036);const X=(n,e,o,s,a)=>({background:n,border:`${(0,te.bf)(s.lineWidth)} ${s.lineType} ${e}`,[`${a}-icon`]:{color:o}}),Ve=n=>{const{componentCls:e,motionDurationSlow:o,marginXS:s,marginSM:a,fontSize:f,fontSizeLG:p,lineHeight:h,borderRadiusLG:y,motionEaseInOutCirc:S,withDescriptionIconSize:$,colorText:i,colorTextHeading:E,withDescriptionPadding:O,defaultPadding:m}=n;return{[e]:Object.assign(Object.assign({},(0,We.Wf)(n)),{position:"relative",display:"flex",alignItems:"center",padding:m,wordWrap:"break-word",borderRadius:y,[`&${e}-rtl`]:{direction:"rtl"},[`${e}-content`]:{flex:1,minWidth:0},[`${e}-icon`]:{marginInlineEnd:s,lineHeight:0},"&-description":{display:"none",fontSize:f,lineHeight:h},"&-message":{color:E},[`&${e}-motion-leave`]:{overflow:"hidden",opacity:1,transition:`max-height ${o} ${S}, opacity ${o} ${S},
        padding-top ${o} ${S}, padding-bottom ${o} ${S},
        margin-bottom ${o} ${S}`},[`&${e}-motion-leave-active`]:{maxHeight:0,marginBottom:"0 !important",paddingTop:0,paddingBottom:0,opacity:0}}),[`${e}-with-description`]:{alignItems:"flex-start",padding:O,[`${e}-icon`]:{marginInlineEnd:a,fontSize:$,lineHeight:0},[`${e}-message`]:{display:"block",marginBottom:s,color:E,fontSize:p},[`${e}-description`]:{display:"block",color:i}},[`${e}-banner`]:{marginBottom:0,border:"0 !important",borderRadius:0}}},Ge=n=>{const{componentCls:e,colorSuccess:o,colorSuccessBorder:s,colorSuccessBg:a,colorWarning:f,colorWarningBorder:p,colorWarningBg:h,colorError:y,colorErrorBorder:S,colorErrorBg:$,colorInfo:i,colorInfoBorder:E,colorInfoBg:O}=n;return{[e]:{"&-success":X(a,s,o,n,e),"&-info":X(O,E,i,n,e),"&-warning":X(h,p,f,n,e),"&-error":Object.assign(Object.assign({},X($,S,y,n,e)),{[`${e}-description > pre`]:{margin:0,padding:0}})}}},Xe=n=>{const{componentCls:e,iconCls:o,motionDurationMid:s,marginXS:a,fontSizeIcon:f,colorIcon:p,colorIconHover:h}=n;return{[e]:{"&-action":{marginInlineStart:a},[`${e}-close-icon`]:{marginInlineStart:a,padding:0,overflow:"hidden",fontSize:f,lineHeight:(0,te.bf)(f),backgroundColor:"transparent",border:"none",outline:"none",cursor:"pointer",[`${o}-close`]:{color:p,transition:`color ${s}`,"&:hover":{color:h}}},"&-close-text":{color:p,transition:`color ${s}`,"&:hover":{color:h}}}}},Ke=n=>({withDescriptionIconSize:n.fontSizeHeading3,defaultPadding:`${n.paddingContentVerticalSM}px 12px`,withDescriptionPadding:`${n.paddingMD}px ${n.paddingContentHorizontalLG}px`});var Qe=(0,Ue.I$)("Alert",n=>[Ve(n),Ge(n),Xe(n)],Ke),oe=function(n,e){var o={};for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&e.indexOf(s)<0&&(o[s]=n[s]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,s=Object.getOwnPropertySymbols(n);a<s.length;a++)e.indexOf(s[a])<0&&Object.prototype.propertyIsEnumerable.call(n,s[a])&&(o[s[a]]=n[s[a]]);return o};const Ye={success:Me.Z,info:Le.Z,error:ze.Z,warning:Te.Z},Je=n=>{const{icon:e,prefixCls:o,type:s}=n,a=Ye[s]||null;return e?(0,Re.wm)(e,d.createElement("span",{className:`${o}-icon`},e),()=>({className:G()(`${o}-icon`,{[e.props.className]:e.props.className})})):d.createElement(a,{className:`${o}-icon`})},ke=n=>{const{isClosable:e,prefixCls:o,closeIcon:s,handleClose:a,ariaProps:f}=n,p=s===!0||s===void 0?d.createElement(Oe.Z,null):s;return e?d.createElement("button",Object.assign({type:"button",onClick:a,className:`${o}-close-icon`,tabIndex:0},f),p):null};var re=d.forwardRef((n,e)=>{const{description:o,prefixCls:s,message:a,banner:f,className:p,rootClassName:h,style:y,onMouseEnter:S,onMouseLeave:$,onClick:i,afterClose:E,showIcon:O,closable:m,closeText:L,closeIcon:N,action:D,id:F}=n,b=oe(n,["description","prefixCls","message","banner","className","rootClassName","style","onMouseEnter","onMouseLeave","onClick","afterClose","showIcon","closable","closeText","closeIcon","action","id"]),[j,I]=d.useState(!1),g=d.useRef(null);d.useImperativeHandle(e,()=>({nativeElement:g.current}));const{getPrefixCls:C,direction:v,alert:r}=d.useContext(De.E_),u=C("alert",s),[x,W,U]=Qe(u),A=c=>{var M;I(!0),(M=n.onClose)===null||M===void 0||M.call(n,c)},P=d.useMemo(()=>n.type!==void 0?n.type:f?"warning":"info",[n.type,f]),B=d.useMemo(()=>typeof m=="object"&&m.closeIcon||L?!0:typeof m=="boolean"?m:N!==!1&&N!==null&&N!==void 0?!0:!!(r!=null&&r.closable),[L,N,m,r==null?void 0:r.closable]),Z=f&&O===void 0?!0:O,K=G()(u,`${u}-${P}`,{[`${u}-with-description`]:!!o,[`${u}-no-icon`]:!Z,[`${u}-banner`]:!!f,[`${u}-rtl`]:v==="rtl"},r==null?void 0:r.className,p,h,U,W),V=(0,He.Z)(b,{aria:!0,data:!0}),Q=d.useMemo(()=>{var c,M;return typeof m=="object"&&m.closeIcon?m.closeIcon:L||(N!==void 0?N:typeof(r==null?void 0:r.closable)=="object"&&(!((c=r==null?void 0:r.closable)===null||c===void 0)&&c.closeIcon)?(M=r==null?void 0:r.closable)===null||M===void 0?void 0:M.closeIcon:r==null?void 0:r.closeIcon)},[N,m,L,r==null?void 0:r.closeIcon]),de=d.useMemo(()=>{const c=m!=null?m:r==null?void 0:r.closable;if(typeof c=="object"){const{closeIcon:M}=c;return oe(c,["closeIcon"])}return{}},[m,r==null?void 0:r.closable]);return x(d.createElement(we.ZP,{visible:!j,motionName:`${u}-motion`,motionAppear:!1,motionEnter:!1,onLeaveStart:c=>({maxHeight:c.offsetHeight}),onLeaveEnd:E},(c,M)=>{let{className:ue,style:fn}=c;return d.createElement("div",Object.assign({id:F,ref:(0,Fe.sQ)(g,M),"data-show":!j,className:G()(K,ue),style:Object.assign(Object.assign(Object.assign({},r==null?void 0:r.style),y),fn),onMouseEnter:S,onMouseLeave:$,onClick:i,role:"alert"},V),Z?d.createElement(Je,{description:o,icon:n.icon,prefixCls:u,type:P}):null,d.createElement("div",{className:`${u}-content`},a?d.createElement("div",{className:`${u}-message`},a):null,o?d.createElement("div",{className:`${u}-description`},o):null),D?d.createElement("div",{className:`${u}-action`},D):null,d.createElement(ke,{isClosable:B,prefixCls:u,closeIcon:Q,handleClose:A,ariaProps:de}))}))}),qe=t(15671),_e=t(43144),le=t(61120),en=t(78814),nn=t(82963);function tn(n,e,o){return e=(0,le.Z)(e),(0,nn.Z)(n,(0,en.Z)()?Reflect.construct(e,o||[],(0,le.Z)(n).constructor):e.apply(n,o))}var on=t(60136),rn=function(n){function e(){var o;return(0,qe.Z)(this,e),o=tn(this,e,arguments),o.state={error:void 0,info:{componentStack:""}},o}return(0,on.Z)(e,n),(0,_e.Z)(e,[{key:"componentDidCatch",value:function(s,a){this.setState({error:s,info:a})}},{key:"render",value:function(){const{message:s,description:a,id:f,children:p}=this.props,{error:h,info:y}=this.state,S=(y==null?void 0:y.componentStack)||null,$=typeof s=="undefined"?(h||"").toString():s,i=typeof a=="undefined"?S:a;return h?d.createElement(re,{id:f,type:"error",message:$,description:d.createElement("pre",{style:{fontSize:"0.9em",overflowX:"auto"}},i)}):p}}])}(d.Component);const se=re;se.ErrorBoundary=rn;var ln=se,ae=t(2453),sn=t(11941),an=t(71230),ie=t(15746),cn=t(67610),dn=t(73935),un=t(6189),gn=(0,un.kc)(function(n){var e=n.token;return{action:{marginLeft:"8px",color:"rgba(0, 0, 0, 0.2)",fontSize:"24px",verticalAlign:"middle",cursor:"pointer",transition:"color 0.3s","&:hover":{color:e.colorPrimaryActive}},container:{display:"flex",flexDirection:"column",height:"100vh",overflow:"auto",backgroundImage:"url('https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/V-_oS6r-i7wAAAAAAAAAAAAAFl94AQBr')",backgroundSize:"100% 100%"},main:{padding:"0px !important",margin:"10px"}}}),ce=function(e){var o=e.content;return(0,l.jsx)(ln,{style:{marginBottom:24},message:o,type:"error",showIcon:!0})},mn=function(){var e,o=(0,d.useState)({}),s=_()(o,2),a=s[0],f=s[1],p=(0,d.useState)("sign-in"),h=_()(p,2),y=h[0],S=h[1],$=(0,T.useModel)("@@initialState"),i=$.initialState,E=$.setInitialState,O=gn(),m=O.styles,L=(0,T.useIntl)(),N=function(){var j=Y()(R()().mark(function I(){var g,C;return R()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return console.log("auth - fetchUserInfo"),r.next=3,i==null||(g=i.fetchUserInfo)===null||g===void 0?void 0:g.call(i);case 3:C=r.sent,console.log("auth - userInfo"),console.log(C),C?(console.log("auth - userInfo - case - 01"),(0,dn.flushSync)(function(){console.log("auth - userInfo - case - 02"),E(function(u){return w()(w()({},u),{},{currentUser:C})})})):console.log("auth - userInfo - case - 03"),console.log("auth - initialState"),console.log(i);case 9:case"end":return r.stop()}},I)}));return function(){return j.apply(this,arguments)}}(),D=function(){var j=Y()(R()().mark(function I(g){var C,v,r,u,x,W,U,A,P,B,Z,K,V,Q;return R()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:if(console.log("handleSubmit"),console.log("values"),console.log(g),c.prev=3,x="",!((g==null||(C=g.name)===null||C===void 0?void 0:C.length)>0)){c.next=16;break}return g.name=g.first_name+" "+g.last_name,g.role="user",c.next=10,(0,ee.z2)(w()(w()({},g),{},{type:y}));case 10:W=c.sent,console.log("register_api_response"),console.log(W),x=W,c.next=22;break;case 16:return c.next=18,(0,ee.x4)(w()(w()({},g),{},{type:y}));case 18:U=c.sent,console.log("login_api_response"),console.log(U),x=U;case 22:if(localStorage.setItem("laravel_api_bearer_token",(v=x)===null||v===void 0||(v=v.data)===null||v===void 0?void 0:v.access_token),console.log("after - redirect - logged_user_api_response?.data?.user"),console.log((r=x)===null||r===void 0||(r=r.data)===null||r===void 0?void 0:r.user),E(w()(w()({},i),{},{currentUser:(u=x)===null||u===void 0||(u=u.data)===null||u===void 0?void 0:u.user,refresh:function(){return!0}})),console.log("before - redirect - initialState"),console.log(i),x.status!==!0){c.next=41;break}return K="login successful!",ae.ZP.success(K),V=new URL(window.location.href).searchParams,T.history.push(V.get("redirect")||"/"+((A=x)===null||A===void 0||(A=A.data)===null||A===void 0||(A=A.user)===null||A===void 0?void 0:A.role)+"-app/",{initialState:i}),T.history.replace(V.get("redirect")||"/"+((P=x)===null||P===void 0||(P=P.data)===null||P===void 0||(P=P.user)===null||P===void 0?void 0:P.role)+"-app/",{initialState:i}),T.history.push("/"+((B=x)===null||B===void 0||(B=B.data)===null||B===void 0||(B=B.user)===null||B===void 0?void 0:B.role)+"-app/"),T.history.replace("/"+((Z=x)===null||Z===void 0||(Z=Z.data)===null||Z===void 0||(Z=Z.user)===null||Z===void 0?void 0:Z.role)+"-app/"),console.log("after - redirect - initialState"),console.log(i),c.abrupt("return");case 41:return T.history.push("/authentication"),T.history.replace("/authentication"),c.abrupt("return");case 44:c.next=51;break;case 46:c.prev=46,c.t0=c.catch(3),Q="Login failed, please try again!",console.log(c.t0),ae.ZP.error(Q);case 51:case"end":return c.stop()}},I,null,[[3,46]])}));return function(g){return j.apply(this,arguments)}}(),F=a.status,b=a.type;return(0,l.jsxs)("div",{className:m==null?void 0:m.container,children:[(0,l.jsx)(T.Helmet,{children:(0,l.jsx)("title",{children:cn.Z.title})}),(0,l.jsx)("div",{style:{flex:"1"},children:(0,l.jsxs)(Be,{contentStyle:{minWidth:280,maxWidth:"75vw"},logo:(0,l.jsx)("img",{alt:"logo",src:i==null||(e=i.settings)===null||e===void 0?void 0:e.logo}),title:"TravelMates - 02",subTitle:"Your ultimate travel companion management app.",onFinish:function(){var j=Y()(R()().mark(function I(g){return R()().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.next=2,D(g);case 2:case"end":return v.stop()}},I)}));return function(I){return j.apply(this,arguments)}}(),children:[(0,l.jsx)(sn.Z,{activeKey:y,onChange:S,centered:!0,items:[{key:"sign-in",label:"Sign in"},{key:"sign-up",label:"Sign Up"}]}),F==="error"&&b==="sign-in"&&(0,l.jsx)(ce,{content:"Wrong username or password"}),y==="sign-in"&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(H.Z,{name:"email",fieldProps:{size:"large",prefix:(0,l.jsx)(pe.Z,{})},placeholder:"username: admin or user",rules:[{required:!0,message:"please enter user name!"}]}),(0,l.jsx)(H.Z.Password,{name:"password",fieldProps:{size:"large",prefix:(0,l.jsx)(J.Z,{}),max:10,min:6},placeholder:"password: ant.design",rules:[{required:!0,message:"Please enter your password!"}]})]}),F==="error"&&b==="sign-up"&&(0,l.jsx)(ce,{content:"Verification code error"}),y==="sign-up"&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(an.Z,{gutter:{xs:8,sm:16,md:24,lg:32},children:[(0,l.jsx)(ie.Z,{span:12,children:(0,l.jsx)(H.Z,{name:"first_name",label:"First Name:",placeholder:"please enter your first name",rules:[{required:!0,message:"Please enter your first name!"}]})}),(0,l.jsx)(ie.Z,{span:12,children:(0,l.jsx)(H.Z,{name:"last_name",label:"Last Name:",placeholder:"please enter your last name",rules:[{required:!0,message:"Please enter your last name!"}]})})]}),(0,l.jsx)(H.Z,{fieldProps:{size:"large",prefix:(0,l.jsx)(ne,{})},name:"name",placeholder:"Name",rules:[{required:!0,message:"Please enter name!"}]}),(0,l.jsx)(H.Z,{fieldProps:{size:"large",prefix:(0,l.jsx)(ne,{})},name:"email",placeholder:"Email",rules:[{required:!0,message:"Please enter email!"}]}),(0,l.jsx)(H.Z.Password,{fieldProps:{size:"large",prefix:(0,l.jsx)(J.Z,{}),max:10,min:6},name:"password",placeholder:"Password",rules:[{required:!0,message:"Please enter password!"}]}),(0,l.jsx)(H.Z.Password,{name:"password_confirmation",dependencies:["password"],fieldProps:{size:"large",prefix:(0,l.jsx)(J.Z,{}),max:10,min:6},placeholder:"password: ant.design",rules:[{required:!0,message:"Please confirm your password!"},function(j){var I=j.getFieldValue;return{validator:function(C,v){return!v||I("password")===v?Promise.resolve():Promise.reject(new Error("The new password that you entered do not match!"))}}}]})]}),(0,l.jsx)("div",{style:{marginBottom:24}})]})})]})},vn=mn}}]);
