webpackJsonp([24],{45:function(t,e,o){"use strict";t.exports={replace:!0,data:function(){return{hotelName:this.$route.query.hotelName,title:this.$route.query.title}},components:{"app-header":function(t){!function(){var e=[o(4)];t.apply(null,e)}.call(this)}},ready:function(){var t=this.$route.query.pos;if($.isEmpty(t))this.getPosition();else{var e=poem.getPos(t).lng,o=poem.getPos(t).lat;if(this.initMap(e,o),!$.isEmpty(this.$route.query)){var n=new BMap.InfoWindow(this.$route.query.markName,opts);map.openInfoWindow(n,map.getCenter())}}console.log(e),console.log(o)},methods:{getPosition:function(){if(window.navigator.geolocation){var t={enableHighAccuracy:!0};window.navigator.geolocation.getCurrentPosition(this.handleSuccess,this.handleError,t)}else poemUI.toast("浏览器不支持html5来获取地理位置信息")},handleSuccess:function(t){var e=t.coords.longitude,o=t.coords.latitude;this.initMap(e,o)},handleError:function(){},initMap:function(t,e){var o=new BMap.Map("container"),n=new BMap.Point(t,e);o.centerAndZoom(n,15);var i=new BMap.Marker(n);o.addOverlay(i)}},route:{data:function(t){},canReuse:function(t){return!1}}}},137:function(t,e,o){e=t.exports=o(1)(),e.push([t.id,"body,html{height:100%}body{margin:0;padding:0}#container{height:100%}",""])},197:function(t,e){t.exports="<app-header :title=title></app-header> <div id=container></div>"},262:function(t,e,o){var n,i;o(332),n=o(45),i=o(197),t.exports=n||{},t.exports.__esModule&&(t.exports=t.exports["default"]),i&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=i)},332:function(t,e,o){var n=o(137);"string"==typeof n&&(n=[[t.id,n,""]]);o(2)(n,{});n.locals&&(t.exports=n.locals)}});