<template>
	<div id="broadcast">
		<section class="banner">
			<div class="banner_wrap">
				<div class="promo_title">打开App, 回复广播</div>
				<div class="button_wrapper">
					<a class="download">极速下载</a>
					<a class="open">打开</a>
				</div>
			</div>
		</section>
		<div class="status-bar">
			<div class="avatar"></div>
			<div class="holder">登录发广播</div>
			<div class="icon-camera">
				<div></div>
			</div>
			<div class="icon-pen">
				<div></div>
			</div>
		</div>
	</div>
</template>
<script>
	
</script>
<style>
#broadcast{
	margin-top: 0.46rem;
}
.banner{
	line-height: 0.28rem;
	height: 0.84rem;
	background-image: url("https://img3.doubanio.com/f/talion/fbcb08987a36258354c6037211d94286bef9716c/pics/card/promotion_bg.jpg");
	background-size: cover;
}
.banner_wrap{
	padding-top: 0.28rem;
	width: 3.69rem;
	height: 0.28rem;	
	margin:0 auto;
}
.promo_title{
	font-size: 0.14rem;
	color: #2CA532;
	float: left;
}
.button_wrapper{
	font-size: 0.13rem;
	float: right;
	width: 1.46rem;
	text-align: center;
}
.download{
	display: block;
	width: 0.8rem;
	background: #42bd56;
	border-radius: 3px;
	float: left;
	color: #fff;
}
.open{
	display: block;
	float: right;
	width: 0.54rem;
	height: 0.26rem;
	border-radius: 3px;
	color: #42bd56;
	border:1px solid #42bd56;
}
.status-bar{
	height: 0.4rem;
	padding: 0.1rem 0.18rem;
}
.avatar{
	float: left;
	height: 0.4rem;
	width: 0.4rem;
	background-image: url("https://img1.doubanio.com/icon/user_normal.jpg");
	background-size: cover;
	border-radius: 50%;
}
.holder{
	float: left;
	line-height: 0.4rem;
	font-size: 0.15rem;
	color: #aaa;
	margin-left: 0.1rem;
}
.icon-camera{
	float: right;
	width: 0.24rem;
	height: 0.24rem;
	padding: 0.08rem;
}
.icon-pen{
	float: right;
	width: 0.24rem;
	height: 0.24rem;
	padding: 0.08rem;
}
.icon-camera div{
	width: 0.24rem;
	height: 0.24rem;
	background-image: url('../../../static/img/photo.png');	
}
</style>