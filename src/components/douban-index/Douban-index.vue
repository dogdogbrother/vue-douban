<template>
	<div class="douban-index">
		<nav>
			<router-link to="">影院热评</router-link>
			<router-link to="">近期值得看的美剧</router-link>
			<router-link to="">豆瓣时间</router-link>
			<router-link to="">使用豆瓣App</router-link>
		</nav>
		<ul>
			<li v-for="item in indexData">
				<router-link to=''>
					<div class="imgBox" v-if="item.target.more_pic_urls.length>0">
						<div class="photos">
							<img class="left-img" :src="item.target.cover_url" referrerpolicy="no-referrer">
							<div class="right-img">
								<img class="top-img" :src="item.target.more_pic_urls[0]" referrerpolicy="no-referrer">
								<img class="bottom-img" :src="item.target.more_pic_urls[1]" referrerpolicy="no-referrer">
							</div>

						</div>
						<h3>{{item.title}}</h3>
					</div>
					<div class="content clearFix" v-else>
						<img :src="item.target.cover_url" :class="{img:item.target.cover_url}" referrerpolicy="no-referrer">
						<h3>{{item.title}}</h3>
						<p>{{item.target.desc}}</p>
					</div>
					<div class="foot">
						<span>by</span>
						<span>{{item.target.author.name}}</span>
						<span>{{item.source_cn}}</span>
					</div>
				</router-link>
			</li>
		</ul>
	</div>
</template>
<script type="text/javascript">
export default{
	created(){
		document.onscroll=function(){
			console.log(1);
		},
		this.$jsonp('https://m.douban.com/rexxar/api/v2/recommend_feed?alt=json&next_date=&loc_id=108288&gender=&birthday=&udid=9fcefbf2acf1dfc991054ac40ca5114be7cd092f&for_mobile=1').then(data=>{
			this.indexData=data.recommend_feeds
		})
	},
	data(){
		return{
			indexData:[],
			dataFlag(){

			}
		}
	}
}
</script>
<style type="text/css" scoped>
.douban-index{
	width: 100%;
	box-sizing: border-box;
	padding: 0 0.18rem;
	margin-top: 0.47rem;
}
nav{
	padding-top: 0.26rem;
	height: 1rem;
}
nav a{
	margin: 0.03rem;
	width: 1.83rem;
	height: 0.44rem;
	background: #f6f6f6;
	color: #494949;
	font-size: 0.15rem;
	line-height: 0.44rem;
	text-align: center;
	float: left;
}
li{
	border-bottom: 1px solid #e3e3e3;
}
li a{
	display: block;
	padding: 0.25rem 0 0.28rem 0;
	min-height: 1.22rem;
}
.content{
	min-height: 0.96rem;
	margin-bottom: 0.1rem;
}
.img{
	width: 0.97rem;
	height: 0.97rem;
	float: right;
	margin-left: 0.25rem;
	background-size:cover;
	background-position: center center;
}
.foot{
	height: 0.16rem;
}
h3{
	margin-bottom: 0.06rem;
	line-height: 0.23rem;
	font-size: 0.17rem;
	color: #494949;
}
.content p{
	max-height: 0.54rem;
	font-size: 0.12rem;
	line-height: 1.5;
	color: #aaa;
	overflow: hidden;
}
.foot{
	font-size: 0.12rem;
	color: #ccc;
}
.foot span:nth-of-type(1){
	width: 0.16rem;
	float: left;
}
.foot span:nth-of-type(2){
	float: left;
}
.foot span:nth-of-type(3){
	float: right;
	text-align: right;
}
.photos{
	height: 1.82rem;
}
.left-img{
	width: 2.85rem;
	height: 1.82rem;
	margin-right: 0.04rem;
	float: left;
}
.right-img{
	width: 0.89rem;
	height: 1.82rem;
	float: left;
}
.right-img img{
	height: 0.89rem;
}
.top-img{
	margin-bottom:0.04rem;
	float: left;
}
.bottom-img{
	float: left;
}
</style>