"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[5030],{1977:function(H,h,e){e.d(h,{n:function(){return z}});var t=e(97685),f=e(71002),E=/^[v^~<>=]*?(\d+)(?:\.([x*]|\d+)(?:\.([x*]|\d+)(?:\.([x*]|\d+))?(?:-([\da-z\-]+(?:\.[\da-z\-]+)*))?(?:\+[\da-z\-]+(?:\.[\da-z\-]+)*)?)?)?$/i,P=function(n){return n==="*"||n==="x"||n==="X"},M=function(n){var o=parseInt(n,10);return isNaN(o)?n:o},R=function(n,o){return(0,f.Z)(n)!==(0,f.Z)(o)?[String(n),String(o)]:[n,o]},I=function(n,o){if(P(n)||P(o))return 0;var r=R(M(n),M(o)),l=(0,t.Z)(r,2),c=l[0],s=l[1];return c>s?1:c<s?-1:0},W=function(n,o){for(var r=0;r<Math.max(n.length,o.length);r++){var l=I(n[r]||"0",o[r]||"0");if(l!==0)return l}return 0},T=function(n){var o,r=n.match(E);return r==null||(o=r.shift)===null||o===void 0||o.call(r),r},z=function(n,o){var r=T(n),l=T(o),c=r.pop(),s=l.pop(),O=W(r,l);return O!==0?O:c||s?c?-1:1:0}},81643:function(H,h,e){e.d(h,{Z:function(){return t}});const t=f=>f?typeof f=="function"?f():f:null},57838:function(H,h,e){e.d(h,{Z:function(){return f}});var t=e(67294);function f(){const[,E]=t.useReducer(P=>P+1,0);return E}},7134:function(H,h,e){e.d(h,{C:function(){return ue}});var t=e(67294),f=e(93967),E=e.n(f),P=e(9220),M=e(42550),R=e(74443),I=e(53124),W=e(35792),T=e(98675),z=e(25378),n=t.createContext({}),o=e(861),r=e(14747),l=e(27036),c=e(45503);const s=a=>{const{antCls:v,componentCls:m,iconCls:i,avatarBg:C,avatarColor:Z,containerSize:j,containerSizeLG:U,containerSizeSM:A,textFontSize:B,textFontSizeLG:V,textFontSizeSM:te,borderRadius:p,borderRadiusLG:x,borderRadiusSM:N,lineWidth:se,lineType:le}=a,g=(K,L,ne)=>({width:K,height:K,borderRadius:"50%",[`&${m}-square`]:{borderRadius:ne},[`&${m}-icon`]:{fontSize:L,[`> ${i}`]:{margin:0}}});return{[m]:Object.assign(Object.assign(Object.assign(Object.assign({},(0,r.Wf)(a)),{position:"relative",display:"inline-flex",justifyContent:"center",alignItems:"center",overflow:"hidden",color:Z,whiteSpace:"nowrap",textAlign:"center",verticalAlign:"middle",background:C,border:`${(0,o.bf)(se)} ${le} transparent`,"&-image":{background:"transparent"},[`${v}-image-img`]:{display:"block"}}),g(j,B,p)),{"&-lg":Object.assign({},g(U,V,x)),"&-sm":Object.assign({},g(A,te,N)),"> img":{display:"block",width:"100%",height:"100%",objectFit:"cover"}})}},O=a=>{const{componentCls:v,groupBorderColor:m,groupOverlapping:i,groupSpace:C}=a;return{[`${v}-group`]:{display:"inline-flex",[`${v}`]:{borderColor:m},"> *:not(:first-child)":{marginInlineStart:i}},[`${v}-group-popover`]:{[`${v} + ${v}`]:{marginInlineStart:C}}}},_=a=>{const{controlHeight:v,controlHeightLG:m,controlHeightSM:i,fontSize:C,fontSizeLG:Z,fontSizeXL:j,fontSizeHeading3:U,marginXS:A,marginXXS:B,colorBorderBg:V}=a;return{containerSize:v,containerSizeLG:m,containerSizeSM:i,textFontSize:Math.round((Z+j)/2),textFontSizeLG:U,textFontSizeSM:C,groupSpace:B,groupOverlapping:-A,groupBorderColor:V}};var d=(0,l.I$)("Avatar",a=>{const{colorTextLightSolid:v,colorTextPlaceholder:m}=a,i=(0,c.TS)(a,{avatarBg:m,avatarColor:v});return[s(i),O(i)]},_),b=function(a,v){var m={};for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&v.indexOf(i)<0&&(m[i]=a[i]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var C=0,i=Object.getOwnPropertySymbols(a);C<i.length;C++)v.indexOf(i[C])<0&&Object.prototype.propertyIsEnumerable.call(a,i[C])&&(m[i[C]]=a[i[C]]);return m};const X=(a,v)=>{const[m,i]=t.useState(1),[C,Z]=t.useState(!1),[j,U]=t.useState(!0),A=t.useRef(null),B=t.useRef(null),V=(0,M.sQ)(v,A),{getPrefixCls:te,avatar:p}=t.useContext(I.E_),x=t.useContext(n),N=()=>{if(!B.current||!A.current)return;const y=B.current.offsetWidth,S=A.current.offsetWidth;if(y!==0&&S!==0){const{gap:w=4}=a;w*2<S&&i(S-w*2<y?(S-w*2)/y:1)}};t.useEffect(()=>{Z(!0)},[]),t.useEffect(()=>{U(!0),i(1)},[a.src]),t.useEffect(N,[a.gap]);const se=()=>{const{onError:y}=a;(y==null?void 0:y())!==!1&&U(!1)},{prefixCls:le,shape:g,size:K,src:L,srcSet:ne,icon:k,className:ge,rootClassName:fe,alt:ve,draggable:re,children:F,crossOrigin:ie}=a,G=b(a,["prefixCls","shape","size","src","srcSet","icon","className","rootClassName","alt","draggable","children","crossOrigin"]),D=(0,T.Z)(y=>{var S,w;return(w=(S=K!=null?K:x==null?void 0:x.size)!==null&&S!==void 0?S:y)!==null&&w!==void 0?w:"default"}),pe=Object.keys(typeof D=="object"?D||{}:{}).some(y=>["xs","sm","md","lg","xl","xxl"].includes(y)),me=(0,z.Z)(pe),Ee=t.useMemo(()=>{if(typeof D!="object")return{};const y=R.c4.find(w=>me[w]),S=D[y];return S?{width:S,height:S,fontSize:S&&(k||F)?S/2:18}:{}},[me,D]),$=te("avatar",le),_e=(0,W.Z)($),[Ce,he,ye]=d($,_e),Se=E()({[`${$}-lg`]:D==="large",[`${$}-sm`]:D==="small"}),Pe=t.isValidElement(L),xe=g||(x==null?void 0:x.shape)||"circle",Me=E()($,Se,p==null?void 0:p.className,`${$}-${xe}`,{[`${$}-image`]:Pe||L&&j,[`${$}-icon`]:!!k},ye,_e,ge,fe,he),De=typeof D=="number"?{width:D,height:D,fontSize:k?D/2:18}:{};let oe;if(typeof L=="string"&&j)oe=t.createElement("img",{src:L,draggable:re,srcSet:ne,onError:se,alt:ve,crossOrigin:ie});else if(Pe)oe=L;else if(k)oe=k;else if(C||m!==1){const y=`scale(${m})`,S={msTransform:y,WebkitTransform:y,transform:y};oe=t.createElement(P.Z,{onResize:N},t.createElement("span",{className:`${$}-string`,ref:B,style:Object.assign({},S)},F))}else oe=t.createElement("span",{className:`${$}-string`,style:{opacity:0},ref:B},F);return delete G.onError,delete G.gap,Ce(t.createElement("span",Object.assign({},G,{style:Object.assign(Object.assign(Object.assign(Object.assign({},De),Ee),p==null?void 0:p.style),G.style),className:Me,ref:V}),oe))};var Y=t.forwardRef(X),q=e(50344),J=e(96159),ee=e(55241);const ce=a=>{const{size:v,shape:m}=t.useContext(n),i=t.useMemo(()=>({size:a.size||v,shape:a.shape||m}),[a.size,a.shape,v,m]);return t.createElement(n.Provider,{value:i},a.children)};var ae=a=>{var v,m,i;const{getPrefixCls:C,direction:Z}=t.useContext(I.E_),{prefixCls:j,className:U,rootClassName:A,style:B,maxCount:V,maxStyle:te,size:p,shape:x,maxPopoverPlacement:N,maxPopoverTrigger:se,children:le,max:g}=a,K=C("avatar",j),L=`${K}-group`,ne=(0,W.Z)(K),[k,ge,fe]=d(K,ne),ve=E()(L,{[`${L}-rtl`]:Z==="rtl"},fe,ne,U,A,ge),re=(0,q.Z)(le).map((G,D)=>(0,J.Tm)(G,{key:`avatar-key-${D}`})),F=(g==null?void 0:g.count)||V,ie=re.length;if(F&&F<ie){const G=re.slice(0,F),D=re.slice(F,ie),pe=(g==null?void 0:g.style)||te,me=((v=g==null?void 0:g.popover)===null||v===void 0?void 0:v.trigger)||se||"hover",Ee=((m=g==null?void 0:g.popover)===null||m===void 0?void 0:m.placement)||N||"top",$=Object.assign(Object.assign({content:D},g==null?void 0:g.popover),{overlayClassName:E()(`${L}-popover`,(i=g==null?void 0:g.popover)===null||i===void 0?void 0:i.overlayClassName),placement:Ee,trigger:me});return G.push(t.createElement(ee.Z,Object.assign({key:"avatar-popover-key",destroyTooltipOnHide:!0},$),t.createElement(Y,{style:pe},`+${ie-F}`))),k(t.createElement(ce,{shape:x,size:p},t.createElement("div",{className:ve,style:B},G)))}return k(t.createElement(ce,{shape:x,size:p},t.createElement("div",{className:ve,style:B},re)))};const de=Y;de.Group=ae;var ue=de},25378:function(H,h,e){var t=e(67294),f=e(8410),E=e(57838),P=e(74443);function M(){let R=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;const I=(0,t.useRef)({}),W=(0,E.Z)(),T=(0,P.ZP)();return(0,f.Z)(()=>{const z=T.subscribe(u=>{I.current=u,R&&W()});return()=>T.unsubscribe(z)},[]),I.current}h.Z=M},66330:function(H,h,e){var t=e(67294),f=e(93967),E=e.n(f),P=e(92419),M=e(81643),R=e(53124),I=e(20136),W=function(n,o){var r={};for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&o.indexOf(l)<0&&(r[l]=n[l]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var c=0,l=Object.getOwnPropertySymbols(n);c<l.length;c++)o.indexOf(l[c])<0&&Object.prototype.propertyIsEnumerable.call(n,l[c])&&(r[l[c]]=n[l[c]]);return r};const T=(n,o,r)=>!o&&!r?null:t.createElement(t.Fragment,null,o&&t.createElement("div",{className:`${n}-title`},(0,M.Z)(o)),t.createElement("div",{className:`${n}-inner-content`},(0,M.Z)(r))),z=n=>{const{hashId:o,prefixCls:r,className:l,style:c,placement:s="top",title:O,content:_,children:d}=n;return t.createElement("div",{className:E()(o,r,`${r}-pure`,`${r}-placement-${s}`,l),style:c},t.createElement("div",{className:`${r}-arrow`}),t.createElement(P.G,Object.assign({},n,{className:o,prefixCls:r}),d||T(r,O,_)))},u=n=>{const{prefixCls:o,className:r}=n,l=W(n,["prefixCls","className"]),{getPrefixCls:c}=t.useContext(R.E_),s=c("popover",o),[O,_,d]=(0,I.Z)(s);return O(t.createElement(z,Object.assign({},l,{prefixCls:s,hashId:_,className:E()(r,d)})))};h.ZP=u},55241:function(H,h,e){var t=e(67294),f=e(93967),E=e.n(f),P=e(21770),M=e(15105),R=e(81643),I=e(33603),W=e(96159),T=e(53124),z=e(83062),u=e(66330),n=e(20136),o=function(s,O){var _={};for(var d in s)Object.prototype.hasOwnProperty.call(s,d)&&O.indexOf(d)<0&&(_[d]=s[d]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var b=0,d=Object.getOwnPropertySymbols(s);b<d.length;b++)O.indexOf(d[b])<0&&Object.prototype.propertyIsEnumerable.call(s,d[b])&&(_[d[b]]=s[d[b]]);return _};const r=s=>{let{title:O,content:_,prefixCls:d}=s;return t.createElement(t.Fragment,null,O&&t.createElement("div",{className:`${d}-title`},(0,R.Z)(O)),t.createElement("div",{className:`${d}-inner-content`},(0,R.Z)(_)))},c=t.forwardRef((s,O)=>{var _,d;const{prefixCls:b,title:X,content:Q,overlayClassName:Y,placement:q="top",trigger:J="hover",children:ee,mouseEnterDelay:ce=.1,mouseLeaveDelay:Oe=.1,onOpenChange:ae,overlayStyle:de={}}=s,ue=o(s,["prefixCls","title","content","overlayClassName","placement","trigger","children","mouseEnterDelay","mouseLeaveDelay","onOpenChange","overlayStyle"]),{getPrefixCls:a}=t.useContext(T.E_),v=a("popover",b),[m,i,C]=(0,n.Z)(v),Z=a(),j=E()(Y,i,C),[U,A]=(0,P.Z)(!1,{value:(_=s.open)!==null&&_!==void 0?_:s.visible,defaultValue:(d=s.defaultOpen)!==null&&d!==void 0?d:s.defaultVisible}),B=(p,x)=>{A(p,!0),ae==null||ae(p,x)},V=p=>{p.keyCode===M.Z.ESC&&B(!1,p)},te=p=>{B(p)};return m(t.createElement(z.Z,Object.assign({placement:q,trigger:J,mouseEnterDelay:ce,mouseLeaveDelay:Oe,overlayStyle:de},ue,{prefixCls:v,overlayClassName:j,ref:O,open:U,onOpenChange:te,overlay:X||Q?t.createElement(r,{prefixCls:v,title:X,content:Q}):null,transitionName:(0,I.m)(Z,"zoom-big",ue.transitionName),"data-popover-inject":!0}),(0,W.Tm)(ee,{onKeyDown:p=>{var x,N;t.isValidElement(ee)&&((N=ee==null?void 0:(x=ee.props).onKeyDown)===null||N===void 0||N.call(x,p)),V(p)}})))});c._InternalPanelDoNotUseOrYouWillBeFired=u.ZP,h.Z=c},20136:function(H,h,e){var t=e(14747),f=e(50438),E=e(97414),P=e(79511),M=e(8796),R=e(27036),I=e(45503);const W=u=>{const{componentCls:n,popoverColor:o,titleMinWidth:r,fontWeightStrong:l,innerPadding:c,boxShadowSecondary:s,colorTextHeading:O,borderRadiusLG:_,zIndexPopup:d,titleMarginBottom:b,colorBgElevated:X,popoverBg:Q,titleBorderBottom:Y,innerContentPadding:q,titlePadding:J}=u;return[{[n]:Object.assign(Object.assign({},(0,t.Wf)(u)),{position:"absolute",top:0,left:{_skip_check_:!0,value:0},zIndex:d,fontWeight:"normal",whiteSpace:"normal",textAlign:"start",cursor:"auto",userSelect:"text",transformOrigin:"var(--arrow-x, 50%) var(--arrow-y, 50%)","--antd-arrow-background-color":X,width:"max-content",maxWidth:"100vw","&-rtl":{direction:"rtl"},"&-hidden":{display:"none"},[`${n}-content`]:{position:"relative"},[`${n}-inner`]:{backgroundColor:Q,backgroundClip:"padding-box",borderRadius:_,boxShadow:s,padding:c},[`${n}-title`]:{minWidth:r,marginBottom:b,color:O,fontWeight:l,borderBottom:Y,padding:J},[`${n}-inner-content`]:{color:o,padding:q}})},(0,E.ZP)(u,"var(--antd-arrow-background-color)"),{[`${n}-pure`]:{position:"relative",maxWidth:"none",margin:u.sizePopupArrow,display:"inline-block",[`${n}-content`]:{display:"inline-block"}}}]},T=u=>{const{componentCls:n}=u;return{[n]:M.i.map(o=>{const r=u[`${o}6`];return{[`&${n}-${o}`]:{"--antd-arrow-background-color":r,[`${n}-inner`]:{backgroundColor:r},[`${n}-arrow`]:{background:"transparent"}}}})}},z=u=>{const{lineWidth:n,controlHeight:o,fontHeight:r,padding:l,wireframe:c,zIndexPopupBase:s,borderRadiusLG:O,marginXS:_,lineType:d,colorSplit:b,paddingSM:X}=u,Q=o-r,Y=Q/2,q=Q/2-n,J=l;return Object.assign(Object.assign(Object.assign({titleMinWidth:177,zIndexPopup:s+30},(0,P.w)(u)),(0,E.wZ)({contentRadius:O,limitVerticalRadius:!0})),{innerPadding:c?0:12,titleMarginBottom:c?0:_,titlePadding:c?`${Y}px ${J}px ${q}px`:0,titleBorderBottom:c?`${n}px ${d} ${b}`:"none",innerContentPadding:c?`${X}px ${J}px`:0})};h.Z=(0,R.I$)("Popover",u=>{const{colorBgElevated:n,colorText:o}=u,r=(0,I.TS)(u,{popoverBg:n,popoverColor:o});return[W(r),T(r),(0,f._y)(r,"zoom-big")]},z,{resetStyle:!1,deprecatedTokens:[["width","titleMinWidth"],["minWidth","titleMinWidth"]]})},97435:function(H,h){function e(t,f){for(var E=Object.assign({},t),P=0;P<f.length;P+=1){var M=f[P];delete E[M]}return E}h.Z=e}}]);
