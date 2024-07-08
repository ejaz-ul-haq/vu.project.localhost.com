"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[5626],{82061:function(U,d,e){var u=e(1413),l=e(67294),p=e(47046),a=e(91146),E=function(h,v){return l.createElement(a.Z,(0,u.Z)((0,u.Z)({},h),{},{ref:v,icon:p.Z}))},s=l.forwardRef(E);d.Z=s},47389:function(U,d,e){var u=e(1413),l=e(67294),p=e(27363),a=e(91146),E=function(h,v){return l.createElement(a.Z,(0,u.Z)((0,u.Z)({},h),{},{ref:v,icon:p.Z}))},s=l.forwardRef(E);d.Z=s},82114:function(U,d,e){var u=e(1413),l=e(67294),p=e(83707),a=e(91146),E=function(h,v){return l.createElement(a.Z,(0,u.Z)((0,u.Z)({},h),{},{ref:v,icon:p.Z}))},s=l.forwardRef(E);d.Z=s},51042:function(U,d,e){var u=e(1413),l=e(67294),p=e(42110),a=e(91146),E=function(h,v){return l.createElement(a.Z,(0,u.Z)((0,u.Z)({},h),{},{ref:v,icon:p.Z}))},s=l.forwardRef(E);d.Z=s},75225:function(U,d,e){e.r(d),e.d(d,{waitTime:function(){return K},waitTimePromise:function(){return S}});var u=e(5574),l=e.n(u),p=e(15009),a=e.n(p),E=e(99289),s=e.n(E),T=e(47389),h=e(82061),v=e(51042),$=e(82114),F=e(6110),N=e(48590),G=e(37476),H=e(2453),J=e(7134),B=e(14726),Q=e(96074),M=e(35312),V=e(27484),b=e.n(V),y=e(67294),n=e(85893),S=function(){var x=s()(a()().mark(function c(){var P,D=arguments;return a()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return P=D.length>0&&D[0]!==void 0?D[0]:100,m.abrupt("return",new Promise(function(j){setTimeout(function(){j(!0)},P)}));case 2:case"end":return m.stop()}},c)}));return function(){return x.apply(this,arguments)}}(),K=function(){var x=s()(a()().mark(function c(){var P,D=arguments;return a()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return P=D.length>0&&D[0]!==void 0?D[0]:100,m.next=3,S(P);case 3:case"end":return m.stop()}},c)}));return function(){return x.apply(this,arguments)}}(),X=function(){var c=(0,M.useModel)("@@initialState"),P=c.initialState,D=c.loading,Z=c.refresh,m=c.setInitialState;console.log("initialState"),console.log(P),console.log("loading"),console.log(D);var j=(0,y.useRef)(),k=(0,y.useState)({}),w=l()(k,2),C=w[0],q=w[1],ee=(0,y.useState)(!1),z=l()(ee,2),ne=z[0],Y=z[1],te=function(){var _=s()(a()().mark(function t(r){return a()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return console.log("deleteUser"),(0,M.request)("/api/users/"+r,{method:"DELETE"}).then(function(){var o=s()(a()().mark(function W(f){var g,I;return a()().wrap(function(R){for(;;)switch(R.prev=R.next){case 0:if(console.log("api_response"),console.log(f),f.status!==!0){R.next=7;break}return console.log("api_response.status"),R.next=6,H.ZP.success("Deleted successfully");case 6:j.current&&((g=j.current)===null||g===void 0||(I=g.reloadAndRest)===null||I===void 0||I.call(g));case 7:case"end":return R.stop()}},W)}));return function(W){return o.apply(this,arguments)}}()).catch(function(o){console.log(o)}),i.abrupt("return",!0);case 3:case"end":return i.stop()}},t)}));return function(r){return _.apply(this,arguments)}}(),ae=[{title:"ID",dataIndex:"id",key:"table-column-id",hideInSearch:!0,sorter:!0,defaultSortOrder:"descend"},{title:"Name",key:"table-column-name",copyable:!0,hideInSearch:!0,render:function(t,r){return(0,n.jsxs)("div",{children:[(0,n.jsx)(J.C,{size:"large",src:(r==null?void 0:r.image_url)!==null?r==null?void 0:r.image_url:"http://vu.project.localhost.com/images/default/user-profile-image.png"}),(0,n.jsx)("span",{style:{margin:"0px 0px 0px 10px"},children:r==null?void 0:r.name})]})}},{title:"Role",dataIndex:"role",key:"table-column-role",hideInSearch:!0},{title:"Email",dataIndex:"email",key:"table-column-email",hideInSearch:!0},{title:"Created Date",dataIndex:"created_at",key:"table-column-created-date",sorter:!0,hideInForm:!0,hideInSearch:!0,render:function(t){return(0,n.jsx)("p",{children:b()(new Date(t)).format("DD-MM-YYYY")})}},{title:"Updated Date",dataIndex:"updated_at",key:"table-column-updated-date",sorter:!0,hideInForm:!0,hideInSearch:!0,render:function(t){return(0,n.jsx)("p",{children:b()(new Date(t)).format("DD-MM-YYYY")})}},{title:"Actions",valueType:"option",key:"table-column-actions",render:function(t,r,A,i){return[(0,n.jsx)(B.ZP,{onClick:function(){M.history.push("/admin-app/users/edit/"+r.id)},children:(0,n.jsx)(T.Z,{})},"editable"),(0,n.jsx)(B.ZP,{onClick:function(){q(r),Y(!0)},danger:!0,children:(0,n.jsx)(h.Z,{})},"deletable")]}}];return(0,n.jsxs)(F._z,{children:[(0,n.jsx)(N.Z,{actionRef:j,rowKey:"id",search:!1,pagination:{defaultPageSize:10,showSizeChanger:!0,pageSizeOptions:[10,20,50,100],onChange:function(t){return console.log(t)}},toolBarRender:function(){return[(0,n.jsxs)(B.ZP,{type:"primary",onClick:function(){M.history.push("/admin-app/users/new")},children:[(0,n.jsx)(v.Z,{})," ",(0,n.jsx)(M.FormattedMessage,{id:"pages.organizationTable.new",defaultMessage:"New"})]},"primary")]},request:s()(a()().mark(function _(){var t,r,A,i,o=arguments;return a()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return t=o.length>0&&o[0]!==void 0?o[0]:{},r=o.length>1?o[1]:void 0,A=o.length>2?o[2]:void 0,i=o.length>3?o[3]:void 0,console.log("params"),console.log(t),console.log("params - sort"),console.log(r),console.log("params - filter"),console.log(A),f.next=12,K(2e3);case 12:return f.next=14,(0,M.request)("/api/users",{params:{page:t==null?void 0:t.current,per_page:t==null?void 0:t.pageSize,order_by:"id",order:"desc"}}).then(function(){var g=s()(a()().mark(function I(O){return a()().wrap(function(L){for(;;)switch(L.prev=L.next){case 0:return console.log("api_response"),console.log(O),console.log("api_response.data"),console.log(O.data),console.log("api_response.data.data"),console.log(O.data.data),L.abrupt("return",{data:O.data.data,total:O.data.total,current_page:O.data.current_page});case 7:case"end":return L.stop()}},I)}));return function(I){return g.apply(this,arguments)}}()).catch(function(g){console.log(g)});case 14:return f.abrupt("return",f.sent);case 15:case"end":return f.stop()}},_)})),columns:ae}),(0,n.jsxs)(G.Y,{open:ne,onOpenChange:Y,modalProps:{destroyOnClose:!0,onCancel:function(){return console.log("run")},afterClose:function(){},getContainer:function(){document.body},width:716,okText:"Confirm"},submitter:{resetButtonProps:{style:{}},submitButtonProps:{style:{}}},preserve:!1,submitTimeout:2e3,onFinish:function(){var _=s()(a()().mark(function t(r){return a()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,K(2e3);case 2:return i.next=4,te(C==null?void 0:C.id);case 4:return i.abrupt("return",!0);case 5:case"end":return i.stop()}},t)}));return function(t){return _.apply(this,arguments)}}(),children:[(0,n.jsxs)("h6",{style:{fontSize:"16px"},children:[(0,n.jsxs)("span",{children:[" ",(0,n.jsx)($.Z,{style:{color:"#ff4d4f",fontSize:"20px",paddingRight:"5px"}})," "]}),"Are you sure you want to delete this user?"]}),(0,n.jsxs)("span",{style:{fontSize:"16px",paddingLeft:"30px"},children:[(0,n.jsx)("strong",{children:" Name: "})," ",C==null?void 0:C.name]}),(0,n.jsx)(Q.Z,{style:{margin:"10px 0px"}}),(0,n.jsx)("p",{style:{fontSize:"16px",paddingLeft:"30px"},children:"Please confirm if you would like to proceed with deleting this user."}),(0,n.jsx)("span",{style:{fontSize:"16px",paddingLeft:"30px",color:"red"},children:"Note: This action cannot be undone."})]})]})};d.default=X}}]);
