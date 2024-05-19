!function(){"use strict";var t="/".replace(/([^/])$/,"$1/"),e=location.pathname,n=e.startsWith(t)&&decodeURI("/".concat(e.slice(t.length)));if(n){var a=document,c=a.head,r=a.createElement.bind(a),i=function(t,e,n){var a,c=e.r[t]||(null===(a=Object.entries(e.r).find((function(e){var n=e[0];return new RegExp("^".concat(n.replace(/\/:[^/]+/g,"/[^/]+").replace("/*","/.+"),"$")).test(t)})))||void 0===a?void 0:a[1]);return null==c?void 0:c.map((function(t){var a=e.f[t][1],c=e.f[t][0];return{type:c.split(".").pop(),url:"".concat(n.publicPath).concat(c),attrs:[["data-".concat(e.b),"".concat(e.p,":").concat(a)]]}}))}(n,{"p":"ant-design-pro","b":"webpack","f":[["p__user-app__current-user__profile.async.js",25],["30.async.js",30],["p__site__checkout__cancel.async.js",88],["110.async.js",110],["128.async.js",128],["p__authentication__index.async.js",135],["p__admin-app__current-user__profile.async.js",150],["194.async.js",194],["p__admin-app__notifications__create-notification.async.js",232],["p__site__TestHomePage.async.js",241],["p__admin-app__accommodations__list-accommodations.async.js",251],["p__admin-app__users__create-user.async.js",265],["p__admin-app__accommodations__create-accommodation.async.js",290],["t__plugin-layout__Layout.chunk.css",301],["t__plugin-layout__Layout.async.js",301],["341.async.js",341],["p__admin-app__attractions__create-attraction.async.js",343],["p__admin-app__accommodations__update-accommodation.async.js",360],["390.async.js",390],["393.async.js",393],["403.async.js",403],["p__admin-app__attractions__list-attractions.async.js",441],["523.async.js",523],["532.async.js",532],["p__user-app__bookings__list-bookings.async.js",553],["559.async.js",559],["p__admin-app__trips__list-trips.async.js",562],["p__user-app__trips__list-trips.async.js",569],["p__404.async.js",571],["p__admin-app__destinations__update-destination.async.js",589],["p__admin-app__notifications__update-notification.async.js",618],["p__admin-app__users__list-users.async.js",626],["p__admin-app__trips__update-trip.async.js",629],["646.async.js",646],["p__user-app__payments__list-payments.async.js",658],["666.async.js",666],["p__admin-app__attractions__update-attraction.async.js",744],["778.async.js",778],["p__admin-app__trips__create-trip.async.js",787],["788.async.js",788],["p__site__checkout__success.async.js",802],["808.async.js",808],["p__admin-app__notifications__list-notifications.async.js",840],["p__admin-app__destinations__list-destination.async.js",879],["905.async.js",905],["p__admin-app__destinations__read-destination.async.js",957],["p__admin-app__destinations__create-destination.async.js",978],["p__admin-app__users__update-user.async.js",999]],"r":{"/*":[1,3,28,35,44],"/":[1,4,7,9,15,19,20,22,23,25,35,39,41,44,13,14,33],"/authentication":[1,5,22,23,35,39,41,13,14,20,25,33,44],"/admin-app/profile":[1,3,4,6,22,35,37,41,13,14,20,25,33,44],"/admin-app/users":[1,3,4,7,20,22,31,35,39,41,44,13,14,25,33],"/admin-app/destinations":[1,3,4,7,20,22,35,39,41,43,44,13,14,25,33],"/admin-app/trips":[1,3,4,7,20,22,26,35,39,41,44,13,14,25,33],"/admin-app/accommodations":[1,3,4,7,10,20,22,35,39,41,44,13,14,25,33],"/admin-app/attractions":[1,3,4,7,20,21,22,35,39,41,44,13,14,25,33],"/admin-app/notifications":[1,3,4,7,20,22,35,39,41,42,44,13,14,25,33],"/user-app/profile":[0,1,3,4,22,35,37,41,13,14,20,25,33,44],"/user-app/bookings":[1,3,4,7,20,22,24,35,39,41,44,13,14,25,33],"/user-app/payments":[1,3,4,7,20,22,34,35,39,41,44,13,14,25,33],"/user-app/trips":[1,3,4,7,20,22,27,35,39,41,44,13,14,25,33],"/admin-app/users/new":[1,3,4,11,22,35,37,41,13,14,20,25,33,44],"/admin-app/destinations/new":[1,3,4,19,22,25,35,37,41,46,13,14,20,33,44],"/admin-app/trips/new":[1,3,4,19,22,25,35,37,38,41,13,14,20,33,44],"/admin-app/accommodations/new":[1,3,4,12,19,22,25,35,37,41,13,14,20,33,44],"/admin-app/attractions/new":[1,3,4,16,19,22,25,35,37,41,13,14,20,33,44],"/admin-app/notifications/new":[1,3,4,8,19,22,25,35,41,13,14,20,33,44],"/admin-app/users/edit/:id":[1,3,4,22,35,37,41,47,13,14,20,25,33,44],"/admin-app/destinations/edit/:id":[1,3,4,19,22,25,29,35,37,41,13,14,20,33,44],"/admin-app/destinations/view/:id":[45,1,13,14,20,22,25,33,44],"/admin-app/trips/edit/:id":[1,3,4,19,22,25,32,35,37,41,13,14,20,33,44],"/admin-app/accommodations/edit/:id":[1,3,4,17,19,22,25,35,37,41,13,14,20,33,44],"/admin-app/attractions/edit/:id":[1,3,4,19,22,25,35,36,37,41,13,14,20,33,44],"/admin-app/notifications/edit/:id":[1,3,4,19,22,25,30,35,41,13,14,20,33,44],"/checkout/success/:user_id/:booking_id/:payment_id/:stripe_checkout_session_id":[40,44,1,13,14,20,22,25,33],"/checkout/cancel/:user_id/:booking_id/:payment_id/:stripe_checkout_session_id":[2,44,1,13,14,20,22,25,33]}},{publicPath:"/umi-dist/"});null==i||i.forEach((function(t){var e,n=t.type,a=t.url;if("js"===n)(e=r("script")).src=a,e.async=!0;else{if("css"!==n)return;(e=r("link")).href=a,e.rel="preload",e.as="style"}t.attrs.forEach((function(t){e.setAttribute(t[0],t[1]||"")})),c.appendChild(e)}))}}();