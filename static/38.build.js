webpackJsonp([38],{33:function(e,t,o){var a,i;o(339),a=o(83),i=o(231),e.exports=a||{},e.exports.__esModule&&(e.exports=e.exports["default"]),i&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=i)},83:function(e,t){"use strict";e.exports={replace:!0,props:["techan"]}},129:function(e,t,o){t=e.exports=o(1)(),t.push([e.id,".view{-webkit-transition:all .4s ease;transition:all .4s ease;position:absolute}.view.v-enter{opacity:0;-webkit-transform:translate3d(100px,0,0);transform:translate3d(100px,0,0)}.view.v-leave{opacity:0;-webkit-transform:translate3d(-100px,0,0);transform:translate3d(-100px,0,0)}.techan-item{height:2.2 rm;color:#a0a0a0;background-color:#fff;overflow:auto;resize:horizontal;padding:.2rem;border-bottom:1px solid #dbdbdb}.techan-item .techan-img{width:2.3rem;height:2.3rem;float:left;margin-right:.3rem}.techan-item .techan-info{overflow:hidden;height:2.3rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.techan-item .techan-info div{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1}.techan-item p,.techan-item span{color:#a0a0a0;margin:0}.techan-item .techan-name{color:#a0a0a0;font-size:.35rem;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1}",""])},231:function(e,t){e.exports='<li class=techan-item> <a style=overflow:hidden v-link="{path:\'/FoodDetail/\'+techan.goods_id}"> <img v-bind:src=techan.goods_image_url class=techan-img> <div class=techan-info> <div class=techan-name> <p style=color:#505050>{{techan.goods_name}}</p> </div> <div> <span style=color:red>{{techan.evaluation_good_star}}分</span> </div> <div style=color:green> <span style=color:green v-if="techan.evaluation_count!=0">{{techan.evaluation_count}}条评论</span> <span style=color:green v-else>暂无评价</span> <span style=float:right;font-size:.28rem> <span style=font-size:.25rem;color:#ff4500>¥</span> <span style=font-size:.4rem;color:#ff4500>{{techan.goods_price}}</span> <span style=font-size:.3rem;color:orange>起</span> </span> </div> <div> <div style=width:95%;float:left;margin-left:10px;display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis> {{techan.goods_jingle}}&nbsp </div> </div> </div> </a> </li>'},339:function(e,t,o){var a=o(129);"string"==typeof a&&(a=[[e.id,a,""]]);o(2)(a,{});a.locals&&(e.exports=a.locals)}});