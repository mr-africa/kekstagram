webpackJsonp([1],{"7zck":function(t,e){},G8KI:function(t,e){},LLPW:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("7+uW"),a=n("3EgV"),i=n.n(a),o=(n("7zck"),n("Dd8w")),s=n.n(o),l=n("NYxO"),c=n("Xxa5"),u=n.n(c),v=n("exGp"),h=n.n(v),f={name:"camera",mounted:function(){var t=this;return h()(u.a.mark(function e(){var n;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$nextTick();case 2:return e.next=4,navigator.mediaDevices.getUserMedia({video:!0});case 4:n=e.sent,t.$refs.video.srcObject=n,t.$refs.video.play(),t.canvas=document.createElement("canvas"),t.canvasContext=t.canvas.getContext("2d");case 9:case"end":return e.stop()}},e,t)}))()},methods:s()({},Object(l.c)(["setPhoto"]),{takePhoto:function(){var t=this.$refs.video.videoHeight/(this.$refs.video.videoWidth/320);this.canvas.setAttribute("width",320),this.canvas.setAttribute("height",t),this.canvasContext.drawImage(this.$refs.video,0,0,320,t),this.setPhoto(this.canvas.toDataURL("image/png"))}})},d={render:function(){var t=this.$createElement,e=this._self._c||t;return e("v-card",[e("v-card-media",[e("video",{ref:"video",staticClass:"video"},[this._v("Video stream not available.")])]),this._v(" "),e("v-card-actions",[e("v-btn",{attrs:{absolute:"",dark:"",fab:"",right:"",color:"pink",large:""},on:{click:this.takePhoto}},[e("v-icon",[this._v("camera")])],1)],1)],1)},staticRenderFns:[]};var p=n("VU/8")(f,d,!1,function(t){n("G8KI")},null,null).exports,m={name:"gallery-item",props:{filter:String},computed:s()({},Object(l.b)(["photo"]),{name:function(){return""===this.filter?"Normal":this.filter}}),methods:s()({},Object(l.c)(["setFilter"]))},_={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{on:{click:function(e){t.setFilter(t.filter)}}},[n("v-card",{staticClass:"gallery__item",attrs:{width:"100px",hover:""}},[n("v-card-media",[n("figure",{class:t.filter},[n("img",{attrs:{src:t.photo,width:"100",height:"100"}})])]),t._v(" "),n("v-card-title",[t._v("\n            "+t._s(t.name)+"\n        ")])],1)],1)},staticRenderFns:[]};var g={name:"gallery",components:{GalleryItem:n("VU/8")(m,_,!1,function(t){n("Nby7")},null,null).exports},data:function(){return{filters:["","_1977","aden","brannan","brooklyn","clarendon","earlybird","gingham","hudson","inkwell","kelvin","lark","lofi","maven","mayfair","moon","nashville","perpetua","reyes","rise","slumber","stinson","toaster","valencia","walden","willow","xpro2"]}}},b={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"gallery"},this._l(this.filters,function(t){return e("gallery-item",{key:t,attrs:{filter:t}})}))},staticRenderFns:[]};var k=n("VU/8")(g,b,!1,function(t){n("LLPW")},null,null).exports,x={name:"photo",computed:s()({},Object(l.b)(["photo","filter"])),methods:s()({},Object(l.c)(["clearPhoto"]))},y={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",[n("v-card-media",[n("figure",{staticClass:"main-photo",class:t.filter},[n("img",{attrs:{src:t.photo}})])]),t._v(" "),n("v-card-actions",[n("v-btn",{attrs:{flat:""},on:{click:t.clearPhoto}},[n("v-icon",[t._v("clear")])],1),t._v(" "),n("v-spacer"),t._v(" "),n("v-btn",{attrs:{flat:""}},[n("v-icon",[t._v("share")])],1)],1)],1)},staticRenderFns:[]};var w=n("VU/8")(x,y,!1,function(t){n("sjAD")},null,null).exports,$={name:"fork-me-on-github",props:{url:String}},P={render:function(){var t=this.$createElement,e=this._self._c||t;return e("a",{attrs:{href:this.url}},[e("svg",{attrs:{id:"i-github",viewBox:"0 0 64 64",width:"40",height:"40"}},[e("path",{attrs:{"stroke-width":"0",fill:"#fff",d:"M32 0 C14 0 0 14 0 32 0 53 19 62 22 62 24 62 24 61 24 60 L24 55 C17 57 14 53 13 50 13 50 13 49 11 47 10 46 6 44 10 44 13 44 15 48 15 48 18 52 22 51 24 50 24 48 26 46 26 46 18 45 12 42 12 31 12 27 13 24 15 22 15 22 13 18 15 13 15 13 20 13 24 17 27 15 37 15 40 17 44 13 49 13 49 13 51 20 49 22 49 22 51 24 52 27 52 31 52 42 45 45 38 46 39 47 40 49 40 52 L40 60 C40 61 40 62 42 62 45 62 64 53 64 32 64 14 50 0 32 0 Z"}})])])},staticRenderFns:[]},C={name:"layout",components:{Camera:p,Gallery:k,Photo:w,ForkMeOnGithub:n("VU/8")($,P,!1,null,null,null).exports},computed:s()({},Object(l.b)(["photo"]))},F={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-toolbar",{attrs:{color:"pink",dark:""}},[n("v-toolbar-title",[t._v("Kekstagram")]),t._v(" "),n("v-spacer"),t._v(" "),n("fork-me-on-github",{attrs:{url:"https://github.com/mr-africa/kekstagram"}})],1),t._v(" "),t.photo?t._e():n("camera"),t._v(" "),t.photo?n("div",[n("photo"),t._v(" "),n("gallery")],1):t._e()],1)},staticRenderFns:[]},j={name:"App",components:{Layout:n("VU/8")(C,F,!1,null,null,null).exports}},O={render:function(){var t=this.$createElement;return(this._self._c||t)("layout")},staticRenderFns:[]},E=n("VU/8")(j,O,!1,null,null,null).exports;r.default.use(l.a);var U=new l.a.Store({state:{photo:null,filter:""},getters:{photo:function(t){return t.photo},filter:function(t){return t.filter}},mutations:{setFilter:function(t,e){t.filter=e},clearPhoto:function(t){t.photo=null},setPhoto:function(t,e){t.photo=e}}});r.default.config.productionTip=!1,r.default.use(i.a),new r.default({store:U,el:"#app",components:{App:E},template:"<App/>"})},Nby7:function(t,e){},sjAD:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.0b5c7c18eefbc7b5b3a2.js.map