<template>
<div class="view" v-transition>
	<app-header title="登陆" right-label="注册" right-link="#/Reg"></app-header>
	<form novalidate>
				<div style="margin-top:3rem;text-align:center" class="login-container">
		<div class="poem-input-box">
			<div class="input-item">
				<img src='../asset/images/user-green.png'/>
				<label style="font-size:.4rem;;width:1.5rem display:inline-block">账号</label>
				<input v-model="mobile" placeholder='手机号'/>
			</div>
			<div>
				<img src='../asset/images/lock-white.png'/>
				<label id="password" style="font-size:.4rem;width:1.5rem display:inline-block">密码</label>
				<input v-model="password" type="password" id="password" placeholder='请填写密码' />
			</div>
		</div>
		<div style="display: block;width: 80%;margin:1rem auto">
			<div class="poem-btn-green" @click="login()">登陆</div>
			<a v-link="{name:'changepwd'}" style="margin-top:0.5rem;float: left;color:green;font-size:.3rem">忘记密码?</a>
		</div>
		</div>
	</form>
</div>
</template>

<style lang="stylus">
.login-container
	font-size:.5rem
	test(20,20)
	& input
		font-size:.4rem
		display:inline-block
		width:6.5rem
		height:.6rem
	& img
		width:.4rem
		height:.4rem
#password:before
	width:30px
#account:before
	width:30px
</style>


<script>
module.exports = {
  	replace: true,
  	data:function(){
  		return {
  			mobile:'',
  			password:''
  		};
  	},
  	 methods: {
  	 	login:function(){
  	 		// $.post(LOGIN_API,{username:this.mobile,password:this.password,client:client}).done(this.loginDone).fail(this.loginFail);
  	 	 $.poemPost(LOGIN_API,{username:this.mobile,password:this.password,client:poem.client}).done(this.loginDone).fail();
  	 	},
  	 	loginDone:function(res){
  	 		console.log(JSON.stringify(res));
  	 		if(res.error){
  	 			poemUI.toast(res.error)
  	 		}else{
  	 			poem.saveItem('username',res.username);
  	 			poem.saveItem('key',res.key);
  	 			this.$route.router.go('/index/ucenter');
  	 		}
  	 	}
  	 },
  	 props:['rightLabel','rightLink'],
  	 created:function(){

  	 },
  	 components: {
		'app-header': require('../components/CommonHeader.vue'),
		'flex-scroll-view': require('../components/FlexScrollView.vue'),
	},
  	 ready:function(){
  	 	this.$dispatch('pageLoaded');
  	 	this.rightLabel = '注册';
  	 	this.rightLink = '#/user/reg'
  	 }
};
</script>