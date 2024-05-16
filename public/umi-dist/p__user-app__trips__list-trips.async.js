"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[569],{82114:function(B,h,e){var E=e(1413),u=e(67294),M=e(83707),r=e(91146),C=function(I,T){return u.createElement(r.Z,(0,E.Z)((0,E.Z)({},I),{},{ref:T,icon:M.Z}))},l=u.forwardRef(C);h.Z=l},55287:function(B,h,e){var E=e(1413),u=e(67294),M=e(5717),r=e(91146),C=function(I,T){return u.createElement(r.Z,(0,E.Z)((0,E.Z)({},I),{},{ref:T,icon:M.Z}))},l=u.forwardRef(C);h.Z=l},79877:function(B,h,e){e.r(h),e.d(h,{waitTime:function(){return A},waitTimePromise:function(){return w}});var E=e(5574),u=e.n(E),M=e(15009),r=e.n(M),C=e(99289),l=e.n(C),S=e(55287),I=e(82114),T=e(6110),G=e(8194),N=e(37476),y=e(35312),k=e(2453),K=e(40411),H=e(14726),J=e(96074),x=e(67294),Q=e(27484),W=e.n(Q),n=e(85893),w=function(){var j=l()(r()().mark(function _(){var d,p=arguments;return r()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return d=p.length>0&&p[0]!==void 0?p[0]:100,c.abrupt("return",new Promise(function(L){setTimeout(function(){L(!0)},d)}));case 2:case"end":return c.stop()}},_)}));return function(){return j.apply(this,arguments)}}(),A=function(){var j=l()(r()().mark(function _(){var d,p=arguments;return r()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return d=p.length>0&&p[0]!==void 0?p[0]:100,c.next=3,w(d);case 3:case"end":return c.stop()}},_)}));return function(){return j.apply(this,arguments)}}(),V=function(){var _=(0,y.useModel)("@@initialState"),d=_.initialState,p=_.loading,Z=_.refresh,c=_.setInitialState;console.log("initialState"),console.log(d),console.log("loading"),console.log(p);var L=(0,x.useState)(!1),z=u()(L,2),ie=z[0],X=z[1],b=(0,x.useRef)(),q=(0,x.useState)(),Y=u()(q,2),le=Y[0],ee=Y[1],te=(0,x.useState)({}),$=u()(te,2),D=$[0],ue=$[1],ne=(0,x.useState)(!1),F=u()(ne,2),re=F[0],ae=F[1],oe=function(){var a=l()(r()().mark(function t(i){return r()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return console.log("deleteDestination"),(0,y.request)("/api/destinations/"+i,{method:"DELETE"}).then(function(){var s=l()(r()().mark(function U(m){var f,P;return r()().wrap(function(O){for(;;)switch(O.prev=O.next){case 0:if(console.log("api_response"),console.log(m),m.status!==!0){O.next=7;break}return console.log("api_response.status"),O.next=6,k.ZP.success("Deleted successfully");case 6:b.current&&((f=b.current)===null||f===void 0||(P=f.reloadAndRest)===null||P===void 0||P.call(f));case 7:case"end":return O.stop()}},U)}));return function(U){return s.apply(this,arguments)}}()).catch(function(s){console.log(s)}),o.abrupt("return",!0);case 3:case"end":return o.stop()}},t)}));return function(i){return a.apply(this,arguments)}}(),_e=(0,y.useIntl)(),se=[{title:"ID",dataIndex:"id",key:"table-column-id",hideInSearch:!0,sorter:!0,defaultSortOrder:"descend"},{title:"Image",dataIndex:"image_url",key:"table-column-image",hideInSearch:!0,render:function(t,i){return(0,n.jsx)("img",{alt:"example",src:t,style:{height:"80px",width:"150px"}})}},{title:"Title",dataIndex:"title",key:"table-column-title",copyable:!0,hideInSearch:!0,render:function(t,i){return(0,n.jsx)("a",{onClick:function(){ee(i),X(!0)},children:t})}},{title:"Price",dataIndex:"price",key:"table-column-price",hideInSearch:!0,render:function(t,i){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("b",{children:"$ "}),t]})}},{title:"Payment Status",dataIndex:["payment","status"],key:"table-column-payment-status",hideInSearch:!0,render:function(t,i){if(t=="pending")return(0,n.jsx)(K.Z,{status:"warning",text:t});if(t=="completed")return(0,n.jsx)(K.Z,{status:"success",text:t})}},{title:"Created Date",dataIndex:"created_at",key:"table-column-created-date",sorter:!0,hideInForm:!0,hideInSearch:!0,render:function(t){return(0,n.jsx)("p",{children:W()(new Date(t)).format("DD-MM-YYYY")})}},{title:"Updated Date",dataIndex:"updated_at",key:"table-column-updated-date",sorter:!0,hideInForm:!0,hideInSearch:!0,render:function(t){return(0,n.jsx)("p",{children:W()(new Date(t)).format("DD-MM-YYYY")})}},{title:"Actions",valueType:"option",key:"table-column-actions",render:function(t,i,v,o){return[(0,n.jsx)(H.ZP,{onClick:function(){console.log(".......")},children:(0,n.jsx)(S.Z,{})},"view")]}}];return(0,n.jsxs)(T._z,{children:[(0,n.jsx)(G.Z,{actionRef:b,rowKey:"id",search:!1,pagination:{defaultPageSize:10,showSizeChanger:!0,pageSizeOptions:[10,20,50,100],onChange:function(t){return console.log(t)}},request:l()(r()().mark(function a(){var t,i,v,o,s=arguments;return r()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return t=s.length>0&&s[0]!==void 0?s[0]:{},i=s.length>1?s[1]:void 0,v=s.length>2?s[2]:void 0,o=s.length>3?s[3]:void 0,console.log("params"),console.log(t),console.log("params - sort"),console.log(i),console.log("params - filter"),console.log(v),console.log("initialState?.currentUser"),console.log(d==null?void 0:d.currentUser),m.next=14,A(2e3);case 14:return m.next=16,(0,y.request)("/api/trips",{params:{page:t==null?void 0:t.current,per_page:t==null?void 0:t.pageSize,order_by:"id",order:"asc"}}).then(function(){var f=l()(r()().mark(function P(g){return r()().wrap(function(R){for(;;)switch(R.prev=R.next){case 0:return console.log("api_response"),console.log(g),console.log("api_response.data"),console.log(g.data),console.log("api_response.data.data"),console.log(g.data.data),R.abrupt("return",{data:g.data.data,total:g.data.total,current_page:g.data.current_page});case 7:case"end":return R.stop()}},P)}));return function(P){return f.apply(this,arguments)}}()).catch(function(f){console.log(f)});case 16:return m.abrupt("return",m.sent);case 17:case"end":return m.stop()}},a)})),columns:se}),(0,n.jsxs)(N.Y,{open:re,onOpenChange:ae,modalProps:{destroyOnClose:!0,onCancel:function(){return console.log("run")},afterClose:function(){},getContainer:function(){document.body},width:716,okText:"Confirm"},submitter:{resetButtonProps:{style:{}},submitButtonProps:{style:{}}},preserve:!1,submitTimeout:2e3,onFinish:function(){var a=l()(r()().mark(function t(i){return r()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,A(2e3);case 2:return o.next=4,oe(D==null?void 0:D.id);case 4:return o.abrupt("return",!0);case 5:case"end":return o.stop()}},t)}));return function(t){return a.apply(this,arguments)}}(),children:[(0,n.jsxs)("h6",{style:{fontSize:"16px"},children:[(0,n.jsxs)("span",{children:[" ",(0,n.jsx)(I.Z,{style:{color:"#ff4d4f",fontSize:"20px",paddingRight:"5px"}})," "]}),"Are you sure you want to delete this destination?"]}),(0,n.jsxs)("span",{style:{fontSize:"16px",paddingLeft:"30px"},children:[(0,n.jsx)("strong",{children:" Name: "})," ",D==null?void 0:D.title]}),(0,n.jsx)(J.Z,{style:{margin:"10px 0px"}}),(0,n.jsx)("p",{style:{fontSize:"16px",paddingLeft:"30px"},children:"Please confirm if you would like to proceed with deleting this destination."}),(0,n.jsx)("span",{style:{fontSize:"16px",paddingLeft:"30px",color:"red"},children:"Note: This action cannot be undone."})]})]})};h.default=V}}]);
