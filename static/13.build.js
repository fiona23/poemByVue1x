webpackJsonp([13],{9:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABLCAYAAAA4TnrqAAAACXBIWXMAABcSAAAXEgFnn9JSAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABLxJREFUeNrsm19y2jAQxhWm7/gCHbgBzgnwWx/jyQVwTxBygpAT1D1BnQu05rFPNTeAG8ANYHqAVJr5NGxUSPxHK9mGndF47AQZ//ytdiUtN6+vr8Kn3f9+HMtDJJs+UlvLtpWt+Pnl21p4thsfsCSgQB4S2eayjUp+7CBbJlsqwW0vApYEtQCkIbm8UuqBkvbkulJaiCP9/xfVh4S27yUsCSmEMia4tJNNgcvLPLT8fAzIU6K0RH427xUs+aBKGTnUcYAqsgZ9pQT6o+wr7QUsKOIXTjfKpWy4j+xXwZ7h9Lvsc95pWHC9Aop6kQ+UWO5f9fcDp1/rqtU7LES8NaLdSj5IxBgwnnB6y5liDBhfxAKg1EAec91EwlH3WeKUVVkDpretEswHnCYOQnyCwDGBa3ZKWQudP0lQBffAi5eRGvfuDKyY+4ufsBTqGiGwtB8WUgUV/XYuVGWoKydu2Qll6aiXC/eWG9+h9bC0CxQeYOl7TroCa4yj85UBuOKBJMSthzXCF/e1/qTvG3QpKe2dXWF5hrUhSyk+bGq4Y6th7Y2B3plhmkUH+9bDKjhznZI53qorbpgbUx6XFnMmxNZhIWVQyzJDzhWAMy541ylYZFLreiKt77Xk2irjgpWRFYCFA1WpsWpmvKhuwEIk0hsIT1xLJgAViOMK6QvnSgdbUorNA73cW3AAA6hCHJevWXd4uDP4BEnq0DYwAmoCl4+5l69ZYeHLRwaw2AKo0AAVuZi4u9qRpioQcM951aiFfpSr6a0vZ6CcwSIPqyLVA7mkoGUf1StASXMknUOSpccui0N8VNGECO9T408rzCvXZG6pWijeVtDsoErny9Y3vorZkHErtdzL9vmDf/+rhkCosBCezLUbBnClEG1asQsVKLYY/5xXA7qootGA5uL8RsJHqwSmK1KXVO7opBqQszBkjPlabDzoBg+o1LGuMkBjWqMrASPxf/XggtNNrcMi4Z2WQm4wJclsRi/kbAlZbdDQ5hwuahUW3nwmjkW17G/bUPGMXH5GhU37YBl1Ul7CO6ClRGkb5GLb1sAySha9VBKfcM9MHGtYrWT5jWEZoNhLFSuqLCfzx8aVzY1gEVDOy6wrBJuMuGWjMsrasIx53m0bfi5S8qXWdslasFxXCVsCtoZLquAT1hlTBzXHgpSE59aDgkUANRI1C3XrLP7pKLOxncdwGpSkFx7v6mzTDSqqKsbk9yD8bKI2BaZc8RmnKQIAm7K0+3n7GZsFYAtxXOZOWWBBtnoXJRXdNr0LNKPFJDaVpcenhc/s3JK61Fx1aTyXHVhUVR2KftbVVVZZCYmEvTCMuSsDXDNYoD41Bvi+WGqIobGydIqw7PpYdUJduTiWR8U2YGnqueinlS6+G5RwwUnPYWVWYAlSo9k3FzSyeu2KkQ1Yhei3FWXUdYX1dogJa8HCJHNEMt4+m14MnNZVlqa86TkonaDuIJKoDqzIoN532+I4rgNrbHTSdytswCouTFlRE1jiwmAFdWBdSiQ0I+KkydzwIqzMDGVwJsfSacPhEsGdWww8p6zgwtIGbav3xuurG1awK6wK9umDvwcefxjuw4ImsFQY/XPV1Puw9oLpR9kdsZNpxD8BBgBS5CUsTQhRaAAAAABJRU5ErkJggg=="},42:function(t,e,i){"use strict";t.exports={components:{"flex-scroll-view":function(t){!function(){var e=[i(3)];t.apply(null,e)}.call(this)},"app-header":function(t){!function(){var e=[i(4)];t.apply(null,e)}.call(this)}},computed:{formInfo:function(){return{key:poem.getItem("key"),goods_id:this.roomInfo.goods_id,quantity:this.quantity,rcb_pay:0,pd_pay:0,days:Math.ceil((this.checkOutTimeStamp-this.checkInTimeStamp)/864e5),buyer_msg:Math.ceil((this.checkOutTimeStamp-this.checkInTimeStamp)/864e5)+"晚|"+this.checkInTime+"~"+this.checkOutTime+"|"+this.contact,contact:this.contact,buyer_phone:this.buyer_phone}},orderPrice:function(){return(this.quantity*this.roomInfo.goods_price*Math.ceil((this.checkOutTimeStamp-this.checkInTimeStamp)/864e5)).toFixed(2)}},data:function(){return{roomInfo:{},hotelName:"",checkInTime:(new Date).getFullYear()+"-"+(parseInt((new Date).getMonth())+1)+"-"+(new Date).getDate(),checkOutTime:(new Date).getFullYear()+"-"+(parseInt((new Date).getMonth())+1)+"-"+(parseInt((new Date).getDate())+1),checkInTimeStamp:(new Date).getTime(),checkOutTimeStamp:(new Date).getTime()+864e5,houseType:"",saveTo:"",livePerson:"",contact:"",quantity:1}},methods:{addHouseCount:function(){this.quantity+=1},minusHouseCount:function(){return this.quantity<2?void poemUI.toast("至少要定一间房哦"):void(this.quantity-=1)},submitOrder:function(){$.poemPost(SUBMIT_ORDER_VR_API,this.formInfo).done(this.submitDone)},submitDone:function(t){$.isEmpty(t.error)?(poemUI.toast("订单提交成功"),this.$route.router.go({name:"orderhotel"})):poemUI.toast(t.error)},checkInDate:function(t){this.checkInTime=t,this.checkInTimeStamp=new Date(t).getTime(),alert(this.checkInTime)},checkOutDate:function(t){this.checkOutTimeStamp=new Date(t).getTime(),this.checkOutTime=t},saveTimeDone:function(t){this.saveTime=t}},ready:function(){$("#dateCheckIn").date({title:"请选择入住时间"},this.checkInDate),$("#dateCheckOut").date({title:"请选择离店时间"},this.checkOutDate),this.$nextTick(function(){this.$broadcast("refresh")})},route:{data:function(t){t.next({}),this.roomInfo=JSON.parse(this.$route.query.roomInfo),this.hotelName=this.$route.query.hotelName},canReuse:function(t){}}}},143:function(t,e,i){e=t.exports=i(1)(),e.push([t.id,".view[_v-19bbc0fd]{-webkit-transition:all .4s ease;transition:all .4s ease;position:absolute}.view.v-enter[_v-19bbc0fd]{opacity:0;-webkit-transform:translate3d(100px,0,0);transform:translate3d(100px,0,0)}.view.v-leave[_v-19bbc0fd]{opacity:0;-webkit-transform:translate3d(-100px,0,0);transform:translate3d(-100px,0,0)}.container[_v-19bbc0fd]{padding-bottom:1rem}.section[_v-19bbc0fd]{background:#fff;margin-bottom:.4rem}.section>div[_v-19bbc0fd]{padding:.6rem .4rem;border-bottom:1px solid #dbdbdb}.section[_v-19bbc0fd]:first-child{padding:.4rem}.section:first-child h1[_v-19bbc0fd]{margin:0}.section img[_v-19bbc0fd]{display:block;float:right;width:.8rem;position:relative;top:-.2rem}.section input[type=text][_v-19bbc0fd]{height:.5rem;border:none;width:60%;font-size:.4rem}.right[_v-19bbc0fd]{float:right}.house-count button[_v-19bbc0fd]{width:.5rem;height:.5rem;vertical-align:middle;background:none;border:1px solid #dbdbdb;font-size:.4rem;outline:none}.day[_v-19bbc0fd]{color:#55b66f;display:inline-block;float:right}.notice[_v-19bbc0fd]{color:#a0a0a0;margin-top:1.5rem;padding:0 .4rem}.footer[_v-19bbc0fd]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:fixed;bottom:0;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;font-size:.5rem;width:100%;background:#fff}.footer input[_v-19bbc0fd]{background-color:#f7b52b;height:1rem;line-height:1rem;text-align:center;font-size:.5rem;width:4rem;color:#fdfdfd;vertical-align:bottom;border:none;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1}.footer .price[_v-19bbc0fd]{-webkit-box-flex:2;-webkit-flex:2;-ms-flex:2;flex:2;padding-left:.4rem;color:#a0a0a0}.footer .price span[_v-19bbc0fd]{color:red}",""])},235:function(t,e,i){t.exports='<div class=flex-view v-transition="" _v-19bbc0fd=""> <app-header title=订单填写 _v-19bbc0fd=""></app-header> <flex-scroll-view _v-19bbc0fd=""> <div class=container _v-19bbc0fd=""> <div id=date class=section _v-19bbc0fd=""> <h1 _v-19bbc0fd="">{{ hotelName }}</h1> <p _v-19bbc0fd=""> 时间： <span id=dateCheckIn _v-19bbc0fd="">{{ checkInTime }}</span>入住-<span id=dateCheckOut _v-19bbc0fd="">{{ checkOutTime }}</span> 离店 <span class=day _v-19bbc0fd="">{{ formInfo.days }}晚</span> </p> <p _v-19bbc0fd="">房型：{{ roomInfo.goods_name }}</p> </div> <div class=section _v-19bbc0fd=""> <div class=house-count _v-19bbc0fd="">房间数 <div class=right _v-19bbc0fd=""> <button @click=minusHouseCount _v-19bbc0fd="">-</button> {{ quantity }} <button @click=addHouseCount _v-19bbc0fd="">+</button> </div> </div> </div> <div class=section _v-19bbc0fd=""> <input id=date-test type=date style=display:none;width:6rem;height:1rem _v-19bbc0fd=""> <div _v-19bbc0fd="">联系人 <input type=text v-model=contact _v-19bbc0fd=""> <img src='+i(9)+' alt="" _v-19bbc0fd=""></div> <div _v-19bbc0fd="">联系方式 <input v-model=buyer_phone type=text _v-19bbc0fd=""> <img src='+i(20)+' alt="" _v-19bbc0fd=""></div> </div> </div> </flex-scroll-view> <div id=datePlugin _v-19bbc0fd=""></div> <div class=footer _v-19bbc0fd=""> <div class=price _v-19bbc0fd="">订单金额：<span _v-19bbc0fd="">{{ orderPrice }}</span></div> <input type=text v-model=orderPrice style=display:none _v-19bbc0fd=""> <input @click=submitOrder() type=button value=提交订单 _v-19bbc0fd=""> </div> </div>'},259:function(t,e,i){var o,n;i(338),o=i(42),n=i(235),t.exports=o||{},t.exports.__esModule&&(t.exports=t.exports["default"]),n&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=n)},338:function(t,e,i){var o=i(143);"string"==typeof o&&(o=[[t.id,o,""]]);i(2)(o,{});o.locals&&(t.exports=o.locals)}});