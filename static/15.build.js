webpackJsonp([15],{56:function(t,e,i){"use strict";t.exports={components:{"flex-scroll-view":function(t){!function(){var e=[i(3)];t.apply(null,e)}.call(this)},"app-header":function(t){!function(){var e=[i(4)];t.apply(null,e)}.call(this)},"yellow-bottom":function(t){!function(){var e=[i(5)];t.apply(null,e)}.call(this)}},data:function(){return{articleTitle:"",content:"",pubishTime:""}},methods:{getTravelNote:function(){$.poemGet(TRAVELNOTE_DETAIL_API,{article_id:this.$route.params.id}).done(this.getTravelNoteDone)},getTravelNoteDone:function(t){var e=t.article_detail;this.articleTitle=e.article_title,this.content=e.article_content,this.pubishTime=e.article_publish_time,this.$nextTick(function(){this.$broadcast("refresh")})}},ready:function(){this.getTravelNote()}}},156:function(t,e,i){e=t.exports=i(1)(),e.push([t.id,".container[_v-b49b4504]{padding:.4rem}time[_v-b49b4504]{display:block;width:100%;text-align:right;font-size:.3rem}h1[_v-b49b4504]{font-size:.5rem;font-weight:400;text-align:center}",""])},249:function(t,e){t.exports='<div class=flex-view v-transition="" _v-b49b4504=""> <app-header :title=title :left-label=leftLabel :right-label=rightLabel :left-link=leftLink :right-link=rightLink :left-icon=leftIcon :right-icon=rightIcon _v-b49b4504=""></app-header> <flex-scroll-view _v-b49b4504=""> <div class=container _v-b49b4504=""> <h1 _v-b49b4504="">{{ articleTitle }}</h1> <time _v-b49b4504="">{{ publishTime }}</time> <img src="{{ travelImg }}" alt="" _v-b49b4504=""> <p _v-b49b4504="">{{{ content }}}</p> <div class=comments _v-b49b4504=""></div> </div> </flex-scroll-view> </div>'},279:function(t,e,i){var l,n;i(352),l=i(56),n=i(249),t.exports=l||{},t.exports.__esModule&&(t.exports=t.exports["default"]),n&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=n)},352:function(t,e,i){var l=i(156);"string"==typeof l&&(l=[[t.id,l,""]]);i(2)(l,{});l.locals&&(t.exports=l.locals)}});