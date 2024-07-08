"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[7658],{82114:function(S,p,e){var u=e(1413),i=e(67294),g=e(83707),r=e(91146),D=function(v,P){return i.createElement(r.Z,(0,u.Z)((0,u.Z)({},v),{},{ref:P,icon:g.Z}))},l=i.forwardRef(D);p.Z=l},55287:function(S,p,e){var u=e(1413),i=e(67294),g=e(5717),r=e(91146),D=function(v,P){return i.createElement(r.Z,(0,u.Z)((0,u.Z)({},v),{},{ref:P,icon:g.Z}))},l=i.forwardRef(D);p.Z=l},51042:function(S,p,e){var u=e(1413),i=e(67294),g=e(42110),r=e(91146),D=function(v,P){return i.createElement(r.Z,(0,u.Z)((0,u.Z)({},v),{},{ref:P,icon:g.Z}))},l=i.forwardRef(D);p.Z=l},52639:function(S,p,e){e.r(p),e.d(p,{waitTime:function(){return L},waitTimePromise:function(){return w}});var u=e(5574),i=e.n(u),g=e(15009),r=e.n(g),D=e(99289),l=e.n(D),j=e(55287),v=e(51042),P=e(82114),H=e(6110),J=e(48590),Q=e(37476),C=e(35312),V=e(2453),K=e(40411),W=e(14726),X=e(96074),y=e(67294),q=e(27484),Z=e.n(q),t=e(85893),w=function(){var x=l()(r()().mark(function d(){var c,E=arguments;return r()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return c=E.length>0&&E[0]!==void 0?E[0]:100,m.abrupt("return",new Promise(function(B){setTimeout(function(){B(!0)},c)}));case 2:case"end":return m.stop()}},d)}));return function(){return x.apply(this,arguments)}}(),L=function(){var x=l()(r()().mark(function d(){var c,E=arguments;return r()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return c=E.length>0&&E[0]!==void 0?E[0]:100,m.next=3,w(c);case 3:case"end":return m.stop()}},d)}));return function(){return x.apply(this,arguments)}}(),ee=function(){var d=(0,C.useModel)("@@initialState"),c=d.initialState,E=d.loading,z=d.refresh,m=d.setInitialState;console.log("initialState"),console.log(c),console.log("loading"),console.log(E);var B=(0,y.useState)(!1),Y=i()(B,2),le=Y[0],F=Y[1],U=(0,y.useRef)(),ne=(0,y.useState)(),$=i()(ne,2),_e=$[0],k=$[1],te=(0,y.useState)({}),N=i()(te,2),I=N[0],ue=N[1],re=(0,y.useState)(!1),G=i()(re,2),ae=G[0],oe=G[1],se=function(){var a=l()(r()().mark(function n(_){return r()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return console.log("deleteDestination"),(0,C.request)("/api/destinations/"+_,{method:"DELETE"}).then(function(){var s=l()(r()().mark(function b(f){var h,T;return r()().wrap(function(R){for(;;)switch(R.prev=R.next){case 0:if(console.log("api_response"),console.log(f),f.status!==!0){R.next=7;break}return console.log("api_response.status"),R.next=6,V.ZP.success("Deleted successfully");case 6:U.current&&((h=U.current)===null||h===void 0||(T=h.reloadAndRest)===null||T===void 0||T.call(h));case 7:case"end":return R.stop()}},b)}));return function(b){return s.apply(this,arguments)}}()).catch(function(s){console.log(s)}),o.abrupt("return",!0);case 3:case"end":return o.stop()}},n)}));return function(_){return a.apply(this,arguments)}}(),de=(0,C.useIntl)(),ie=[{title:"ID",dataIndex:"id",key:"table-column-id",hideInSearch:!0,sorter:!0,defaultSortOrder:"descend"},{title:"Booking ID",dataIndex:"booking_id",key:"table-column-booking-id",hideInSearch:!0,render:function(n,_){return(0,t.jsx)("a",{onClick:function(){k(_),F(!0)},children:n})}},{title:"Trip ID",dataIndex:["booking","trip_id"],key:"table-column-trip-id",hideInSearch:!0,render:function(n,_){return(0,t.jsx)("a",{onClick:function(){k(_),F(!0)},children:n})}},{title:"Price",dataIndex:["trip","price"],key:"table-column-price",hideInSearch:!0,render:function(n,_){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("b",{children:"$ "}),n]})}},{title:"Payment Status",dataIndex:"status",key:"table-column-payment-status",hideInSearch:!0,render:function(n,_){if(n=="pending")return(0,t.jsx)(K.Z,{status:"warning",text:n});if(n=="completed")return(0,t.jsx)(K.Z,{status:"success",text:n})}},{title:"Created Date",dataIndex:"created_at",key:"table-column-created-date",sorter:!0,hideInForm:!0,hideInSearch:!0,render:function(n){return(0,t.jsx)("p",{children:Z()(new Date(n)).format("DD-MM-YYYY")})}},{title:"Updated Date",dataIndex:"updated_at",key:"table-column-updated-date",sorter:!0,hideInForm:!0,hideInSearch:!0,render:function(n){return(0,t.jsx)("p",{children:Z()(new Date(n)).format("DD-MM-YYYY")})}},{title:"Actions",valueType:"option",key:"table-column-actions",render:function(n,_,O,o){return[(0,t.jsx)(W.ZP,{onClick:function(){console.log(".......")},children:(0,t.jsx)(j.Z,{})},"view")]}}];return(0,t.jsxs)(H._z,{children:[(0,t.jsx)(J.Z,{actionRef:U,rowKey:"id",search:!1,toolBarRender:function(){return[(0,t.jsxs)(W.ZP,{type:"primary",onClick:function(){C.history.push("/admin-app/destinations/new")},children:[(0,t.jsx)(v.Z,{})," ",(0,t.jsx)(C.FormattedMessage,{id:"pages.organizationTable.new",defaultMessage:"New"})]},"primary")]},pagination:{defaultPageSize:10,showSizeChanger:!0,pageSizeOptions:[10,20,50,100],onChange:function(n){return console.log(n)}},request:l()(r()().mark(function a(){var n,_,O,o,s=arguments;return r()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return n=s.length>0&&s[0]!==void 0?s[0]:{},_=s.length>1?s[1]:void 0,O=s.length>2?s[2]:void 0,o=s.length>3?s[3]:void 0,console.log("params"),console.log(n),console.log("params - sort"),console.log(_),console.log("params - filter"),console.log(O),console.log("initialState?.currentUser"),console.log(c==null?void 0:c.currentUser),f.next=14,L(2e3);case 14:return f.next=16,(0,C.request)("/api/payments",{params:{page:n==null?void 0:n.current,per_page:n==null?void 0:n.pageSize,order_by:"id",order:"asc"}}).then(function(){var h=l()(r()().mark(function T(M){return r()().wrap(function(A){for(;;)switch(A.prev=A.next){case 0:return console.log("api_response"),console.log(M),console.log("api_response.data"),console.log(M.data),console.log("api_response.data.data"),console.log(M.data.data),A.abrupt("return",{data:M.data.data,total:M.data.total,current_page:M.data.current_page});case 7:case"end":return A.stop()}},T)}));return function(T){return h.apply(this,arguments)}}()).catch(function(h){console.log(h)});case 16:return f.abrupt("return",f.sent);case 17:case"end":return f.stop()}},a)})),columns:ie}),(0,t.jsxs)(Q.Y,{open:ae,onOpenChange:oe,modalProps:{destroyOnClose:!0,onCancel:function(){return console.log("run")},afterClose:function(){},getContainer:function(){document.body},width:716,okText:"Confirm"},submitter:{resetButtonProps:{style:{}},submitButtonProps:{style:{}}},preserve:!1,submitTimeout:2e3,onFinish:function(){var a=l()(r()().mark(function n(_){return r()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,L(2e3);case 2:return o.next=4,se(I==null?void 0:I.id);case 4:return o.abrupt("return",!0);case 5:case"end":return o.stop()}},n)}));return function(n){return a.apply(this,arguments)}}(),children:[(0,t.jsxs)("h6",{style:{fontSize:"16px"},children:[(0,t.jsxs)("span",{children:[" ",(0,t.jsx)(P.Z,{style:{color:"#ff4d4f",fontSize:"20px",paddingRight:"5px"}})," "]}),"Are you sure you want to delete this destination?"]}),(0,t.jsxs)("span",{style:{fontSize:"16px",paddingLeft:"30px"},children:[(0,t.jsx)("strong",{children:" Name: "})," ",I==null?void 0:I.title]}),(0,t.jsx)(X.Z,{style:{margin:"10px 0px"}}),(0,t.jsx)("p",{style:{fontSize:"16px",paddingLeft:"30px"},children:"Please confirm if you would like to proceed with deleting this destination."}),(0,t.jsx)("span",{style:{fontSize:"16px",paddingLeft:"30px",color:"red"},children:"Note: This action cannot be undone."})]})]})};p.default=ee}}]);
