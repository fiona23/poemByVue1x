webpackJsonp([16],{57:function(e,t,i){"use strict";e.exports={components:{"flex-scroll-view":function(e){!function(){var t=[i(3)];e.apply(null,t)}.call(this)},"app-header":function(e){!function(){var t=[i(4)];e.apply(null,t)}.call(this)},"yellow-bottom":function(e){!function(){var t=[i(5)];e.apply(null,t)}.call(this)}},data:function(){return{title:"游记",xid:"0988776",curpage:1,articleList:[]}},methods:{getTravelNoteList:function(){$.poemGet(TRAVELNOTE_LIST_API,{order:"asc",page:10,curpage:this.curpage,class_id:this.$route.params.id}).done(this.getTravelNoteListDone)},getTravelNoteListDone:function(e){this.articleList=this.articleList.concat(e.article_list),this.curpage++,this.$nextTick(function(){this.$broadcast("refresh")}),setTimeout(function(e){return function(){e.$broadcast("refresh")}}(this),1e3)}},ready:function(){this.getTravelNoteList()}}},155:function(e,t,i){t=e.exports=i(1)(),t.push([e.id,".view[_v-bc8953ee]{-webkit-transition:all .4s ease;transition:all .4s ease;position:absolute}.view.v-enter[_v-bc8953ee]{opacity:0;-webkit-transform:translate3d(100px,0,0);transform:translate3d(100px,0,0)}.view.v-leave[_v-bc8953ee]{opacity:0;-webkit-transform:translate3d(-100px,0,0);transform:translate3d(-100px,0,0)}.article a[_v-bc8953ee]{display:block;overflow:hidden;padding:.2rem;border-bottom:1px solid #dbdbdb}.article-img[_v-bc8953ee]{float:left;width:3rem;height:2.5rem;margin-right:.4rem}.article-img img[_v-bc8953ee]{width:100%}.article-detail h2[_v-bc8953ee]{color:#55b66f;font-size:.33rem;margin-top:0;font-weight:400}.article-detail p[_v-bc8953ee]{font-size:.3rem}.info[_v-bc8953ee]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}",""])},247:function(e,t){e.exports='<div class=flex-view v-transition="" _v-bc8953ee=""> <flex-scroll-view _v-bc8953ee=""> <app-header :title=title :left-label=leftLabel :right-label=rightLabel :left-link=leftLink :right-link=rightLink :left-icon=leftIcon :right-icon=rightIcon _v-bc8953ee=""></app-header> <ul _v-bc8953ee=""> <li class=article v-for="article in articleList" _v-bc8953ee=""> <a href="#/TravelNote/{{ article.article_id }}" _v-bc8953ee=""> <div class=article-img _v-bc8953ee=""> <img src={{article.article_image}} alt="" _v-bc8953ee=""> </div> <div class=article-detail _v-bc8953ee=""> <h2 _v-bc8953ee="">{{ article.article_title }}</h2> <p _v-bc8953ee="">{{ article.article_abstract }}代替代替代替代替代替代替代替代替代替代替代替代替代替代替代替代替代替代替代替替代替代替代替</p> <div class=info _v-bc8953ee=""> <div _v-bc8953ee="">阅读量：{{ article.article_click }}</div> <div _v-bc8953ee="">评论：{{ article.article_comment_flag }}</div> <time _v-bc8953ee="">{{ article.article_publish_time }}</time> </div> </div> </a> </li> </ul> </flex-scroll-view></div>'},274:function(e,t,i){var l,a;i(350),l=i(57),a=i(247),e.exports=l||{},e.exports.__esModule&&(e.exports=e.exports["default"]),a&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=a)},350:function(e,t,i){var l=i(155);"string"==typeof l&&(l=[[e.id,l,""]]);i(2)(l,{});l.locals&&(e.exports=l.locals)}});