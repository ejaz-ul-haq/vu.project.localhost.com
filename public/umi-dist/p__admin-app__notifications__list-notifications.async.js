"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[840],{82061:function(L,u,e){var l=e(1413),o=e(67294),E=e(47046),t=e(91146),h=function(D,v){return o.createElement(t.Z,(0,l.Z)((0,l.Z)({},D),{},{ref:v,icon:E.Z}))},r=o.forwardRef(h);u.Z=r},47389:function(L,u,e){var l=e(1413),o=e(67294),E=e(27363),t=e(91146),h=function(D,v){return o.createElement(t.Z,(0,l.Z)((0,l.Z)({},D),{},{ref:v,icon:E.Z}))},r=o.forwardRef(h);u.Z=r},82114:function(L,u,e){var l=e(1413),o=e(67294),E=e(83707),t=e(91146),h=function(D,v){return o.createElement(t.Z,(0,l.Z)((0,l.Z)({},D),{},{ref:v,icon:E.Z}))},r=o.forwardRef(h);u.Z=r},51042:function(L,u,e){var l=e(1413),o=e(67294),E=e(42110),t=e(91146),h=function(D,v){return o.createElement(t.Z,(0,l.Z)((0,l.Z)({},D),{},{ref:v,icon:E.Z}))},r=o.forwardRef(h);u.Z=r},32129:function(L,u,e){e.r(u),e.d(u,{waitTime:function(){return x},waitTimePromise:function(){return Z}});var l=e(5574),o=e.n(l),E=e(15009),t=e.n(E),h=e(99289),r=e.n(h),j=e(47389),D=e(82061),v=e(51042),G=e(82114),H=e(6110),J=e(61990),Q=e(37476),O=e(35312),V=e(2453),S=e(14726),X=e(96074),A=e(67294),k=e(27484),b=e.n(k),a=e(85893),Z=function(){var B=r()(t()().mark(function d(){var f,g=arguments;return t()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return f=g.length>0&&g[0]!==void 0?g[0]:100,m.abrupt("return",new Promise(function(y){setTimeout(function(){y(!0)},f)}));case 2:case"end":return m.stop()}},d)}));return function(){return B.apply(this,arguments)}}(),x=function(){var B=r()(t()().mark(function d(){var f,g=arguments;return t()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return f=g.length>0&&g[0]!==void 0?g[0]:100,m.next=3,Z(f);case 3:case"end":return m.stop()}},d)}));return function(){return B.apply(this,arguments)}}(),q=function(){var d=(0,O.useModel)("@@initialState"),f=d.initialState,g=d.loading,w=d.refresh,m=d.setInitialState;console.log("initialState"),console.log(f),console.log("loading"),console.log(g);var y=(0,A.useState)(!1),z=o()(y,2),le=z[0],ee=z[1],K=(0,A.useRef)(),ne=(0,A.useState)(),N=o()(ne,2),ue=N[0],te=N[1],ae=(0,A.useState)({}),Y=o()(ae,2),C=Y[0],oe=Y[1],re=(0,A.useState)(!1),F=o()(re,2),se=F[0],$=F[1],ie=function(){var i=r()(t()().mark(function n(c){return t()().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return console.log("deleteNotification"),_.abrupt("return",(0,O.request)("/api/notifications/"+c,{method:"DELETE"}).then(function(){var s=r()(t()().mark(function W(p){var P,R;return t()().wrap(function(T){for(;;)switch(T.prev=T.next){case 0:if(console.log("api_response"),console.log(p),p.status!==!0){T.next=7;break}return console.log("api_response.status"),T.next=6,V.ZP.success("Deleted successfully");case 6:K.current&&((P=K.current)===null||P===void 0||(R=P.reloadAndRest)===null||R===void 0||R.call(P));case 7:case"end":return T.stop()}},W)}));return function(W){return s.apply(this,arguments)}}()).catch(function(s){console.log(s)}));case 3:case"end":return _.stop()}},n)}));return function(c){return i.apply(this,arguments)}}(),ce=(0,O.useIntl)(),_e=[{title:"ID",dataIndex:"id",key:"table-column-id",hideInSearch:!0,sorter:!0,defaultSortOrder:"descend"},{title:"Subject",dataIndex:"subject",key:"table-column-subject",copyable:!0,hideInSearch:!0,render:function(n,c){return(0,a.jsx)("a",{onClick:function(){te(c),ee(!0)},children:n})}},{title:"Created Date",dataIndex:"created_at",key:"table-column-created-date",sorter:!0,hideInForm:!0,hideInSearch:!0,render:function(n){return(0,a.jsx)("p",{children:b()(new Date(n)).format("DD-MM-YYYY")})}},{title:"Updated Date",dataIndex:"updated_at",key:"table-column-updated-date",sorter:!0,hideInForm:!0,hideInSearch:!0,render:function(n){return(0,a.jsx)("p",{children:b()(new Date(n)).format("DD-MM-YYYY")})}},{title:"Actions",valueType:"option",key:"table-column-actions",render:function(n,c,I,_){return[(0,a.jsx)(S.ZP,{onClick:function(){O.history.push("/admin-app/notifications/edit/"+c.id)},children:(0,a.jsx)(j.Z,{})},"editable"),(0,a.jsx)(S.ZP,{onClick:function(){oe(c),$(!0)},danger:!0,children:(0,a.jsx)(D.Z,{})},"deletable")]}}];return(0,a.jsxs)(H._z,{children:[(0,a.jsx)(J.Z,{actionRef:K,rowKey:"id",search:!1,toolBarRender:function(){return[(0,a.jsxs)(S.ZP,{type:"primary",onClick:function(){O.history.push("/admin-app/notifications/new")},children:[(0,a.jsx)(v.Z,{})," ",(0,a.jsx)(O.FormattedMessage,{id:"pages.organizationTable.new",defaultMessage:"New"})]},"primary")]},pagination:{defaultPageSize:10,showSizeChanger:!0,pageSizeOptions:[10,20,50,100],onChange:function(n){return console.log(n)}},request:r()(t()().mark(function i(){var n,c,I,_,s=arguments;return t()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return n=s.length>0&&s[0]!==void 0?s[0]:{},c=s.length>1?s[1]:void 0,I=s.length>2?s[2]:void 0,_=s.length>3?s[3]:void 0,console.log("params"),console.log(n),console.log("params - sort"),console.log(c),console.log("params - filter"),console.log(I),console.log("initialState?.currentUser"),console.log(f==null?void 0:f.currentUser),p.next=14,x(2e3);case 14:return p.next=16,(0,O.request)("/api/notifications",{params:{page:n==null?void 0:n.current,per_page:n==null?void 0:n.pageSize,order_by:"id",order:"asc"}}).then(function(){var P=r()(t()().mark(function R(M){return t()().wrap(function(U){for(;;)switch(U.prev=U.next){case 0:return console.log("api_response"),console.log(M),console.log("api_response.data"),console.log(M.data),console.log("api_response.data.data"),console.log(M.data.data),U.abrupt("return",{data:M.data.data,total:M.data.total,current_page:M.data.current_page});case 7:case"end":return U.stop()}},R)}));return function(R){return P.apply(this,arguments)}}()).catch(function(P){console.log(P)});case 16:return p.abrupt("return",p.sent);case 17:case"end":return p.stop()}},i)})),columns:_e}),(0,a.jsxs)(Q.Y,{open:se,onOpenChange:$,modalProps:{destroyOnClose:!0,onCancel:function(){return console.log("run")},afterClose:function(){},getContainer:function(){document.body},width:716,okText:"Confirm"},submitter:{resetButtonProps:{style:{}},submitButtonProps:{style:{}}},preserve:!1,submitTimeout:2e3,onFinish:function(){var i=r()(t()().mark(function n(c){return t()().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return _.next=2,x(2e3);case 2:return _.next=4,ie(C==null?void 0:C.id);case 4:return _.abrupt("return",!0);case 5:case"end":return _.stop()}},n)}));return function(n){return i.apply(this,arguments)}}(),children:[(0,a.jsxs)("h6",{style:{fontSize:"16px"},children:[(0,a.jsxs)("span",{children:[" ",(0,a.jsx)(G.Z,{style:{color:"#ff4d4f",fontSize:"20px",paddingRight:"5px"}})," "]}),"Are you sure you want to delete this notification?"]}),(0,a.jsxs)("span",{style:{fontSize:"16px",paddingLeft:"30px"},children:[(0,a.jsx)("strong",{children:" Name: "})," ",C==null?void 0:C.subject]}),(0,a.jsx)(X.Z,{style:{margin:"10px 0px"}}),(0,a.jsx)("p",{style:{fontSize:"16px",paddingLeft:"30px"},children:"Please confirm if you would like to proceed with deleting this notification."}),(0,a.jsx)("span",{style:{fontSize:"16px",paddingLeft:"30px",color:"red"},children:"Note: This action cannot be undone."})]})]})};u.default=q}}]);
