webpackJsonp([9],{32:function(e,o){"use strict";e.exports={replace:!0,data:function(){return{}},props:["addr"],methods:{deleteAddr:function(){$.poemPost(ADDR_DEL_API,{key:"bef844bb183057e8dca921ae556478e8",address_id:this.addr.address_id}).done(this.delDone)},delDone:function(e){isEmpty(e.error)||poemUI.toast(e.error)}}}},97:function(e,o,i){o=e.exports=i(1)(),o.push([e.id,"body,html{font-family:SimHei,Arial,sans-serif;padding:0;margin:0;color:#a0a0a0}li{list-style:none}ul{padding-left:0}.view{-webkit-transition:all .4s ease;transition:all .4s ease;position:absolute}.view.v-enter{opacity:0;-webkit-transform:translate3d(100px,0,0);transform:translate3d(100px,0,0)}.view.v-leave{opacity:0;-webkit-transform:translate3d(-100px,0,0);transform:translate3d(-100px,0,0)}.poem-btn-green{font-size:.4rem;background-color:#55b66f;border-radius:10px;height:1rem;line-height:1rem;width:8rem;margin:30px auto;text-align:center;color:#fff}.poem-input-box{margin:0 auto;width:9.5rem;background-color:#fff;border:1px solid #dbdbdb;color:#a0a0a0}.poem-input-box>div{height:1.3rem;line-height:1.3rem;border-bottom:1px solid #dbdbdb}.poem-input-box input{outline:none!important;border:none;font-size:.4rem;height:1.1rem}.poem-hidden{display:none}.poem-mask{position:fixed;bottom:0;height:100%;width:100%;background-color:gray;opacity:.5;animation:showMask .2s;-moz-animation:showMask .2s;-webkit-animation:showMask .2s;-o-animation:showMask .2s}.flex-view{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.small-icon{width:.6rem;height:.6rem}@-webkit-keyframes showMask{0%{background:#fff}to{background:gray}}@keyframes showMask{0%{background:#fff}to{background:gray}}",""])},197:function(e,o){e.exports='<li class=addr-list-item style="margin-bottom:20px;padding:15px;border-top:1px solid #ccc;border-bottom:1px solid #ccc"> <div class=addr-head style=position:relative;overflow:hidden> <div style=float:left class=addr-name>{{addr.true_name}}</div> <div style=float:right class=addr-mobile>{{addr.mob_phone}}</div> </div> <p> </p><div class=addr-detail>{{addr.address}}</div>  <div style=margin-top:30px;overflow:hidden> <div style=float:left> <input type=checkbox name="" id=""> <span>设为默认</span> </div> <div style=float:right> <div style=display:inline-block> 编辑 </div> <div @click=deleteAddr style=display:inline-block> 删除 </div> </div> </div> </li>'},255:function(e,o,i){var t,a;i(303),t=i(32),a=i(197),e.exports=t||{},e.exports.__esModule&&(e.exports=e.exports["default"]),a&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=a)},303:function(e,o,i){var t=i(97);"string"==typeof t&&(t=[[e.id,t,""]]);i(2)(t,{});t.locals&&(e.exports=t.locals)}});