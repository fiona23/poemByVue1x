webpackJsonp([32],{63:function(o,e){"use strict";o.exports={replace:!0,props:["food"]}},120:function(o,e,t){e=o.exports=t(1)(),e.push([o.id,".view{-webkit-transition:all .4s ease;transition:all .4s ease;position:absolute}.view.v-enter{opacity:0;-webkit-transform:translate3d(100px,0,0);transform:translate3d(100px,0,0)}.view.v-leave{opacity:0;-webkit-transform:translate3d(-100px,0,0);transform:translate3d(-100px,0,0)}.goods-img{width:1.2rem;height:1.2rem;margin-right:.3rem}.goods-info{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;overflow:hidden}.goods-item{background-color:#fafafa;overflow:auto;resize:horizontal;border-bottom:1px solid #dbdbdb}button{background-color:#f7b52b;border:none;font-size:.3rem;border-radius:5px;padding:5px 10px}",""])},213:function(o,e){o.exports='<li class=goods-item style="padding:10px 20px"> <a style=overflow:hidden;display:flex v-link="{path:\'/ScenicDetail/\'+food.goods_id}"> <img v-bind:src=food.goods_image_url class=goods-img> <div class=goods-info> <div class=goods-name>{{food.goods_name}}</div> <div style=margin-top:20px clas=goods-name>{{food.goods_jingle}}</div> </div> <div> <div style=color:red;font-size:.4rem>¥{{food.goods_price}}</div> <button style=float:right;margin-top:20px;color:#fff>预定</button> </div> </a> </li>'},282:function(o,e,t){var s,i;t(316),s=t(63),i=t(213),o.exports=s||{},o.exports.__esModule&&(o.exports=o.exports["default"]),i&&(("function"==typeof o.exports?o.exports.options||(o.exports.options={}):o.exports).template=i)},316:function(o,e,t){var s=t(120);"string"==typeof s&&(s=[[o.id,s,""]]);t(2)(s,{});s.locals&&(o.exports=s.locals)}});