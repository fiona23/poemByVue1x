webpackJsonp([28],{35:function(t,e,i){"use strict";t.exports={replace:!0,components:{"addr-list-item":function(t){i.e(33,function(e){var i=[e(280)];t.apply(null,i)}.bind(this))},"flex-scroll-view":function(t){!function(){var e=[i(3)];t.apply(null,e)}.call(this)},"return-top":function(t){i.e(0,function(e){var i=[e(8)];t.apply(null,i)}.bind(this))},"app-header":function(t){!function(){var e=[i(4)];t.apply(null,e)}.call(this)}},data:function(){var t=[];return{addrlList:t}},methods:{getAddrList:function(){$.poemPost(ADDR_LIST_API,{key:poem.getItem("key")}).done(this.getAddrListDone)},getAddrListDone:function(t){this.addrlList=t.address_list,this.$nextTick(function(){this.$broadcast("refresh")}),this.$off("scrollEnd")}},created:function(){},ready:function(){this.getAddrList(),this.$dispatch("pageLoaded")},attached:function(){},compiled:function(){},events:{scrollEnd:function(t){this.getAddrList()}}}},107:function(t,e,i){e=t.exports=i(1)(),e.push([t.id,"",""])},199:function(t,e){t.exports='<div style=background-color:#eee class=flex-view v-transition> <app-header title=我的地址 right-label=新增 right-link=#/AddressAdd></app-header> <flex-scroll-view> <ul id=addr-list-view style=font-size:.3rem> <addr-list-item v-for="addr in addrlList" :addr=addr :index=$index></addr-list-item> </ul> </flex-scroll-view> </div>'},258:function(t,e,i){var n,o;i(303),n=i(35),o=i(199),t.exports=n||{},t.exports.__esModule&&(t.exports=t.exports["default"]),o&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=o)},303:function(t,e,i){var n=i(107);"string"==typeof n&&(n=[[t.id,n,""]]);i(2)(n,{});n.locals&&(t.exports=n.locals)}});