(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[764],{41065:function(L,y,e){"use strict";e.r(y),e.d(y,{default:function(){return E}});var P=e(15009),o=e.n(P),O=e(99289),c=e.n(O),z=e(5574),G=e.n(z),k=e(97857),S=e(35312);function J(a,r){return v.apply(this,arguments)}function v(){return v=_asyncToGenerator(_regeneratorRuntime().mark(function a(r,u){return _regeneratorRuntime().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.abrupt("return",request("/api/destinations",_objectSpread({method:"GET",headers:{"Content-Type":"application/json"},params:_objectSpread({},r)},u||{})));case 1:case"end":return l.stop()}},a)})),v.apply(this,arguments)}var M=e(68082),j=e(4393),R=e(83062),Z=e(14726),$=e(7134),F=e(59117),H=e(67294),K=e(52677),Q=function(r){if(!(_typeof(r)===null||typeof r=="undefined"))return Object.keys(r)[0].split(",").join("_").toLowerCase()},U=function(r){if(!(_typeof(r)===null||typeof r=="undefined"))switch(Object.values(r)[0]){case"ascend":return"asc";case"descend":return"desc";default:return}},N=function(){var a=c()(o()().mark(function r(){var u,s=arguments;return o()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return u=s.length>0&&s[0]!==void 0?s[0]:100,i.abrupt("return",new Promise(function(h){setTimeout(function(){h(!0)},u)}));case 2:case"end":return i.stop()}},r)}));return function(){return a.apply(this,arguments)}}(),A=function(){var a=c()(o()().mark(function r(){var u,s=arguments;return o()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return u=s.length>0&&s[0]!==void 0?s[0]:100,i.next=3,N(u);case 3:case"end":return i.stop()}},r)}));return function(){return a.apply(this,arguments)}}(),V=e(10581),W=e(94921),B=e(6189),n=e(85893),D=j.Z.Meta,X=(0,B.kc)(function(a){var r=a.token;return{}}),I=function(){var r=(0,S.useModel)("@@initialState"),u=r.initialState,s=r.loading,l=r.refresh,i=r.setInitialState,h=(0,H.useState)(!1),x=G()(h,2),Y=x[0],b=x[1];return(0,n.jsxs)("div",{style:{backgroundColor:"#fff",margin:-24,padding:24},children:[(0,n.jsx)("h1",{children:"Trending Destinations"}),(0,n.jsx)("p",{children:"Most popular choices for travellers from Pakistan"}),(0,n.jsx)(M.Rs,{pagination:{defaultPageSize:6,showSizeChanger:!0,pageSizeOptions:[6,9,10,20,50,100]},showActions:"hover",grid:{gutter:16,column:3},itemCardProps:{prefixCls:"trips-grid"},request:function(){var C=c()(o()().mark(function p(t,g,q){return o()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,A(2e3);case 2:return d.next=4,(0,S.request)("/api/trips/view/all",{params:{page:t==null?void 0:t.current,per_page:t==null?void 0:t.pageSize,order_by:"id",order:"asc"}}).then(function(){var T=c()(o()().mark(function w(m){return o()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.abrupt("return",{data:m.data.data,total:m.data.total,current_page:m.data.current_page});case 1:case"end":return f.stop()}},w)}));return function(w){return T.apply(this,arguments)}}()).catch(function(T){});case 4:return d.abrupt("return",d.sent);case 5:case"end":return d.stop()}},p)}));return function(p,t,g){return C.apply(this,arguments)}}(),metas:{content:{render:function(p,t){return(0,n.jsxs)(j.Z,{style:{width:"100%",height:"550px"},actions:[(0,n.jsx)(R.Z,{title:"Thanks for using antd. Have a nice day!",children:(0,n.jsx)(Z.ZP,{type:"primary",icon:(0,n.jsx)(F.Z,{}),size:"large",onClick:function(){},children:"Book Now"},"preview")})],cover:(0,n.jsx)("img",{alt:"example",src:t==null?void 0:t.image_url,style:{height:"300px"}}),onClick:function(){},children:[(0,n.jsx)("h1",{children:t==null?void 0:t.title}),(0,n.jsx)(D,{avatar:(0,n.jsx)($.C,{src:"https://api.dicebear.com/7.x/miniavs/svg?seed=8"}),description:t==null?void 0:t.description})]})}}}})]})},E=I},24654:function(){}}]);