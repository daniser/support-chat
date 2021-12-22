"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[260],{2095:(e,t,n)=>{var r=n(538),o=n(6530),s=n(381),a=n.n(s);const c={computed:{SupportChat:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(){return SupportChat})),$echo:function(){return Echo.channel("support-chat")}},methods:{formatTime:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"DD.MM.YYYY HH:mm:ss";return a()(e).format(t)}}};var u=n(4554),i=n(9669),m=n.n(i),d=window.SupportChat.path+"/api/v1";var f=window.SupportChat.path+"/api/v1";var p=m().create();const l={rooms:function(e){return{index:function(){return e.get(d+"/rooms")},store:function(t){return e.post(d+"/rooms",t)},show:function(t){return e.get(d+"/rooms/"+t)},update:function(t,n){return e.put(d+"/rooms/"+t,n)},destroy:function(t){return e.delete(d+"/rooms/"+t)}}}(p),messages:function(e){return{index:function(t){return e.get("".concat(f,"/rooms/").concat(t,"/messages"))},store:function(t,n){return e.post("".concat(f,"/rooms/").concat(t,"/messages"),n)},show:function(t){return e.get("".concat(f,"/messages/").concat(t))},update:function(t,n){return e.put("".concat(f,"/messages/").concat(t),n)},destroy:function(t){return e.delete("".concat(f,"/messages/").concat(t))}}}(p)},h=[{path:"/",name:"chat",component:n(8473).Z}];var g,w=n(8345),v=(n(3734),n(7757)),y=n.n(v),S=n(629),b="SET_ROOMS_LOADED_STATE",O="SET_ROOMS",E="ADD_ROOM",M="DELETE_ROOM",x="SET_MESSAGES",A="ADD_MESSAGE",P="EDIT_MESSAGE",R="DELETE_MESSAGE";function C(e,t,n,r,o,s,a){try{var c=e[s](a),u=c.value}catch(e){return void n(e)}c.done?t(u):Promise.resolve(u).then(r,o)}function I(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var s=e.apply(t,n);function a(e){C(s,r,o,a,c,"next",e)}function c(e){C(s,r,o,a,c,"throw",e)}a(void 0)}))}}function _(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function j(e){return function(e){if(Array.isArray(e))return D(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return D(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return D(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function D(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}S.ZP.Store.prototype.$api=l,r.default.use(S.ZP);const k=new S.ZP.Store({state:{currentUserId:5088,rooms:[],roomsLoaded:!1,messages:[]},getters:{},mutations:(g={},_(g,b,(function(e,t){e.roomsLoaded=t})),_(g,O,(function(e,t){e.rooms=t})),_(g,E,(function(e,t){e.rooms=[].concat(j(e.rooms),[t])})),_(g,M,(function(e,t){e.rooms=e.rooms.filter((function(e){return e.roomId!==t}))})),_(g,x,(function(e,t){e.messages=t})),_(g,A,(function(e,t){e.messages=[].concat(j(e.messages),[t])})),_(g,P,(function(e,t){var n=e.messages.findIndex((function(e){return e._id===t._id}));e.messages[n]=t,e.messages=j(e.messages)})),_(g,R,(function(e,t){e.messages=e.messages.filter((function(e){return e._id!==t}))})),g),actions:{fetchRooms:function(e){var t=this;return I(y().mark((function n(){var r,o;return y().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(r=e.commit)(b,!1),n.next=4,t.$api.rooms.index();case 4:o=n.sent,r(O,o.data.data),r(b,!0);case 7:case"end":return n.stop()}}),n)})))()},addRoom:function(e){var t=arguments,n=this;return I(y().mark((function r(){var o,s,a;return y().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return o=e.commit,s=t.length>1&&void 0!==t[1]?t[1]:{},r.next=4,n.$api.rooms.store(s);case 4:a=r.sent,o(E,a.data.data);case 6:case"end":return r.stop()}}),r)})))()},deleteRoom:function(e,t){var n=this;return I(y().mark((function r(){var o;return y().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return o=e.commit,r.next=3,n.$api.rooms.destroy(t);case 3:r.sent,o(M,t);case 5:case"end":return r.stop()}}),r)})))()},fetchMessages:function(e,t){var n=this;return I(y().mark((function r(){var o,s,a;return y().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return o=e.commit,s=t.room,t.options,r.next=4,n.$api.messages.index(s.roomId);case 4:a=r.sent,o(x,a.data.data);case 6:case"end":return r.stop()}}),r)})))()},sendMessage:function(e,t){var n=this;return I(y().mark((function r(){var o,s,a,c,u;return y().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return o=e.commit,s=e.state,a=t.roomId,c=t.content,t.files,t.replyMessage,t.usersTag,r.next=4,n.$api.messages.store(a,{content:c,senderId:s.currentUserId});case 4:u=r.sent,o(A,u.data.data);case 6:case"end":return r.stop()}}),r)})))()},editMessage:function(e,t){var n=this;return I(y().mark((function r(){var o,s,a,c,u;return y().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return o=e.commit,s=e.state,t.roomId,a=t.messageId,c=t.newContent,t.files,t.replyMessage,t.usersTag,r.next=4,n.$api.messages.update(a,{content:c,senderId:s.currentUserId});case 4:u=r.sent,o(P,u.data.data);case 6:case"end":return r.stop()}}),r)})))()},deleteMessage:function(e,t){var n=this;return I(y().mark((function r(){var o,s;return y().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return o=e.commit,t.roomId,s=t.message,r.next=4,n.$api.messages.destroy(s._id);case 4:r.sent,o(R,s._id);case 6:case"end":return r.stop()}}),r)})))()}}});var T,$,L=document.head.querySelector('meta[name="csrf-token"]');m().defaults.headers.common["X-Requested-With"]="XMLHttpRequest",L&&(m().defaults.headers.common["X-CSRF-TOKEN"]=L.content),r.default.use(o.ZPm),r.default.use(w.Z),r.default.prototype.$http=m().create(),r.default.prototype.$api=l,window.Pusher=n(6606),window.Echo=new u.Z({broadcaster:"pusher",key:window.SupportChat.pusher.key,cluster:null!==(T=window.SupportChat.pusher.cluster)&&void 0!==T?T:"eu",forceTLS:null===($=window.SupportChat.pusher.useTLS)||void 0===$||$}),window.SupportChat.basePath="/"+window.SupportChat.path;var Z=window.SupportChat.basePath+"/";""!==window.SupportChat.path&&"/"!==window.SupportChat.path||(Z="/",window.SupportChat.basePath="");var H=new w.Z({routes:h,mode:"history",base:Z});r.default.mixin(c),new r.default({el:"#support-chat",store:k,router:H})},4347:()=>{},8473:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(629),o=n(4656),s=n.n(o);n(8492);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const u={components:{ChatWindow:s()},data:function(){return{menuActions:[{name:"deleteRoom",title:"Delete Room"}]}},mounted:function(){this.fetchRooms()},methods:function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({menuActionHandler:function(e){var t=e.roomId;if("deleteRoom"===e.action.name)this.deleteRoom(t)}},(0,r.nv)(["fetchRooms","addRoom","deleteRoom","fetchMessages","sendMessage","editMessage","deleteMessage"])),computed:(0,r.rn)(["currentUserId","rooms","roomsLoaded","messages"])};const i=(0,n(1900).Z)(u,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("chat-window",{attrs:{"current-user-id":e.currentUserId,rooms:e.rooms,"rooms-loaded":e.roomsLoaded,messages:e.messages,"messages-loaded":!0,"room-actions":e.menuActions,"menu-actions":e.menuActions},on:{"fetch-messages":e.fetchMessages,"fetch-more-rooms":e.fetchRooms,"send-message":e.sendMessage,"edit-message":e.editMessage,"delete-message":e.deleteMessage,"add-room":e.addRoom,"room-action-handler":e.menuActionHandler,"menu-action-handler":e.menuActionHandler}})}),[],!1,null,null,null).exports}},e=>{var t=t=>e(e.s=t);e.O(0,[143,660],(()=>(t(2095),t(4347))));e.O()}]);