"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[260],{2095:(t,e,r)=>{var n=r(538),o=r(6530),a=r(381),s=r.n(a);const u={computed:{SupportChat:function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(){return SupportChat})),$echo:function(){return Echo.channel("support-chat")}},methods:{formatTime:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"DD.MM.YYYY HH:mm:ss";return s()(t).format(e)}}};var c=r(4554),i=r(9669),m=r.n(i),f=window.SupportChat.path+"/api/v1";var p=window.SupportChat.path+"/api/v1";var d=m().create();const h={rooms:function(t){return{index:function(){return t.get(f+"/rooms")},store:function(e){return t.post(f+"/rooms",e)},show:function(e){return t.get(f+"/rooms/"+e)},update:function(e,r){return t.put(f+"/rooms/"+e,r)},destroy:function(e){return t.delete(f+"/rooms/"+e)}}}(d),messages:function(t){return{index:function(e){return t.get("".concat(p,"/rooms/").concat(e,"/messages"))},store:function(e,r){return t.post("".concat(p,"/rooms/").concat(e,"/messages"),r)},show:function(e){return t.get("".concat(p,"/messages/").concat(e))},update:function(e,r){return t.put("".concat(p,"/messages/").concat(e),r)},destroy:function(e){return t.delete("".concat(p,"/messages/").concat(e))}}}(d)},l=[{path:"/",name:"chat",component:r(1542).Z}];var w,v=r(8345),y=(r(3734),r(7757)),g=r.n(y),b=r(629),S="SET_ROOMS_LOADED_STATE",O="SET_ROOMS",P="ADD_ROOM",R="DELETE_ROOM",C="SET_MESSAGES";function A(t,e,r,n,o,a,s){try{var u=t[a](s),c=u.value}catch(t){return void r(t)}u.done?e(c):Promise.resolve(c).then(n,o)}function E(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function s(t){A(a,n,o,s,u,"next",t)}function u(t){A(a,n,o,s,u,"throw",t)}s(void 0)}))}}function j(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function x(t){return function(t){if(Array.isArray(t))return k(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return k(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return k(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function k(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}b.ZP.Store.prototype.$api=h,n.default.use(b.ZP);const D=new b.ZP.Store({state:{rooms:[],roomsLoaded:!1,messages:[]},getters:{},mutations:(w={},j(w,S,(function(t,e){t.roomsLoaded=e})),j(w,O,(function(t,e){t.rooms=e})),j(w,P,(function(t,e){t.rooms=[].concat(x(t.rooms),[e])})),j(w,R,(function(t,e){t.rooms=t.rooms.filter((function(t){return t.roomId!==e}))})),j(w,C,(function(t,e){t.messages=e})),w),actions:{fetchRooms:function(t){var e=this;return E(g().mark((function r(){var n,o;return g().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return(n=t.commit)(S,!1),r.next=4,e.$api.rooms.index();case 4:o=r.sent,n(O,o.data.data),n(S,!0);case 7:case"end":return r.stop()}}),r)})))()},addRoom:function(t){var e=arguments,r=this;return E(g().mark((function n(){var o,a,s;return g().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o=t.commit,a=e.length>1&&void 0!==e[1]?e[1]:{},n.next=4,r.$api.rooms.store(a);case 4:s=n.sent,o(P,s.data.data);case 6:case"end":return n.stop()}}),n)})))()},deleteRoom:function(t,e){var r=this;return E(g().mark((function n(){var o;return g().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o=t.commit,n.next=3,r.$api.rooms.destroy(e);case 3:n.sent,o(R,e);case 5:case"end":return n.stop()}}),n)})))()},fetchMessages:function(t,e){var r=this;return E(g().mark((function n(){var o,a,s;return g().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o=t.commit,a=e.room,e.options,n.next=4,r.$api.messages.index(a.roomId);case 4:s=n.sent,o(C,s.data.data);case 6:case"end":return n.stop()}}),n)})))()}}});var M,T,Z=document.head.querySelector('meta[name="csrf-token"]');m().defaults.headers.common["X-Requested-With"]="XMLHttpRequest",Z&&(m().defaults.headers.common["X-CSRF-TOKEN"]=Z.content),n.default.use(o.ZPm),n.default.use(v.Z),n.default.prototype.$http=m().create(),n.default.prototype.$api=h,window.Pusher=r(6606),window.Echo=new c.Z({broadcaster:"pusher",key:window.SupportChat.pusher.key,cluster:null!==(M=window.SupportChat.pusher.cluster)&&void 0!==M?M:"eu",forceTLS:null===(T=window.SupportChat.pusher.useTLS)||void 0===T||T}),window.SupportChat.basePath="/"+window.SupportChat.path;var $=window.SupportChat.basePath+"/";""!==window.SupportChat.path&&"/"!==window.SupportChat.path||($="/",window.SupportChat.basePath="");var L=new v.Z({routes:l,mode:"history",base:$});n.default.mixin(u),new n.default({el:"#support-chat",store:D,router:L})},4347:()=>{},1542:(t,e,r)=>{r.d(e,{Z:()=>i});var n=r(629),o=r(4656),a=r.n(o);r(8492);function s(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function u(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}const c={components:{ChatWindow:a()},data:function(){return{currentUserId:1234,menuActions:[{name:"deleteRoom",title:"Delete Room"}]}},mounted:function(){this.fetchRooms()},methods:function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?s(Object(r),!0).forEach((function(e){u(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({menuActionHandler:function(t){var e=t.roomId;if("deleteRoom"===t.action.name)this.deleteRoom(e)}},(0,n.nv)(["fetchRooms","addRoom","deleteRoom","fetchMessages"])),computed:(0,n.rn)(["rooms","roomsLoaded","messages"])};const i=(0,r(1900).Z)(c,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("chat-window",{attrs:{"current-user-id":t.currentUserId,rooms:t.rooms,"rooms-loaded":t.roomsLoaded,messages:t.messages,"room-actions":t.menuActions,"menu-actions":t.menuActions},on:{"fetch-messages":t.fetchMessages,"fetch-more-rooms":t.fetchRooms,"add-room":t.addRoom,"room-action-handler":t.menuActionHandler,"menu-action-handler":t.menuActionHandler}})}),[],!1,null,null,null).exports}},t=>{var e=e=>t(t.s=e);t.O(0,[143,660],(()=>(e(2095),e(4347))));t.O()}]);