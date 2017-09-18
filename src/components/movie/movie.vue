<template>
	<div id="movie">
		<section class="movie-play">
			<header>
				<h2>{{in_theaters.title}}</h2>
				<a>更多</a>
			</header>
			<ul class="section-content">
				<li v-for="item in in_theaters.subjects">
					<a class="clearFi box">
						<div class="img" :style="{'background-image':'url('+item.images.large+')'}"></div>
						<span class="title">{{item.title}}</span>
						<div class="rating">
							<span class="start">
								<span :class="{good:item.rating.stars>=10}">★</span>
								<span :class="{good:item.rating.stars>=20}">★</span>
								<span :class="{good:item.rating.stars>=30}">★</span>
								<span :class="{good:item.rating.stars>=40}">★</span>
								<span :class="{good:item.rating.stars>=50}">★</span>
							</span>
							<span class="nmb">{{item.rating.average}}</span>
						</div>
					</a>
				</li>
			</ul>
		</section>
		<section class="movie-play">
			<header>
				<h2>{{coming_soon.title}}</h2>
				<a>更多</a>
			</header>
			<ul class="section-content">
				<li v-for="item in coming_soon.subjects">
					<a class="clearFi box">
						<div class="img" :style="{'background-image':'url('+item.images.large+')'}"></div>
						<span class="title">{{item.title}}</span>
						<div class="rating">
							<span class="start">
								<span :class="{good:item.rating.stars>=10}">★</span>
								<span :class="{good:item.rating.stars>=20}">★</span>
								<span :class="{good:item.rating.stars>=30}">★</span>
								<span :class="{good:item.rating.stars>=40}">★</span>
								<span :class="{good:item.rating.stars>=50}">★</span>
							</span>
							<span class="nmb">{{item.rating.average}}</span>
						</div>
					</a>
				</li>
			</ul>
		</section>
		<section class="classify">
			<header>
				<h2>分类浏览</h2>
			</header>
			<ul class="clearFi">
				<li v-for="item,index in classify">
					<a  href="https://m.douban.com/movie/mystery">
						<span :class="{two:index%2==1}" class="text">{{item.name}}</span>
						<span class="icon" v-show="item.name">></span>
					</a>
				</li>
			</ul>
		</section>
		<douban-footer></douban-footer>
	</div>
</template>
<script>
import footer from '../footer/footer'
export default{
	created(){
		document.onscroll=function(){
			console.log(1);
		},
		this.$jsonp('https://api.douban.com/v2/movie/in_theaters').then(data=>{
			this.in_theaters=data;
		}),
		this.$jsonp('https://api.douban.com/v2/movie/coming_soon').then(data=>{
			this.coming_soon=data;
			console.log(data);
		})
	},
	data(){
		return{
			in_theaters:[],
			coming_soon:[],
			classify:[{name:'经典'},{name:'冷门佳片'},{name:'豆瓣高分'},{name:'动作'},{name:'喜剧'},{name:'爱情'},{name:'悬疑'},{name:'恐怖'},{name:'科幻'},{name:'治愈'},{name:'文艺'},{name:'成长'},{name:'动画'},{name:'华语'},{name:'欧美'},{name:'韩国'},{name:'日本'},{name:''}]
		}
	},
	components:{
	   "douban-footer":footer
	}
}
</script>
<style scoped>
#movie{
	padding-top:0.57rem;
}	
.movie-play{
	height: 4.33rem;
	margin-bottom: 0.15rem;
}
header{
	height: 0.24rem;
	padding:0 0.18rem;
}
h2{
	float: left;
	font-size: 0.17rem;
}
header a{
	float: right;
	font-size: 0.14rem;
	color: #42bd56;
	line-height: 0.24rem;
}
.movie-play ul{
	height: 3.94rem;
	padding-top: 0.15rem;
	width: 11.8rem;
}
.movie-play li{
	height: 1.87rem;
	margin-left: 0.18rem;
	margin-bottom: 0.1rem;
	width: 1rem;
	float: left;
}
.box{
	height: 1.87rem;
	display: block;
}
.img{
	height: 1.42rem;
	background-size: cover;
}
.title{
	display: block;
	margin-top: 0.096rem;
	height: 0.15rem;
	font-size: 0.15rem;
	line-height: 0.15rem;
	text-overflow:ellipsis;
	overflow:hidden;
	white-space:nowrap;
}
.rating{
	margin-top: 0.048rem;
	font-size: 0.12rem;
	height: 0.15rem;
	line-height: 0.15rem;
}
.start{
	width: 0.55rem;
	height: 0.15rem;
}
.start span{
	width: 0.1rem;
	height: 0.1rem;
	color: #aaa;
}
.start .good{
	color: #ffb712;
}
.classify ul{
	border-top: solid #eee 1px;
	width: 4rem;
	margin: 0.2rem 0 0 0.15rem;
	overflow: hidden;
}
.classify li{
	border-bottom: solid #eee 1px;
	border-right: solid #eee 1px;
	line-height: 0.43rem;
	height: 0.43rem;
	font-size: 0.14rem;
	width: 1.99rem;
	float: left;
}
.classify a{
	display: block;
	width: 1.99rem;
	height: 0.43rem;
	color: #42bd56;
}
.classify li .text{
	float: left;
}
.classify .icon{
	font-size: 0.2rem;
	color: #eee;
	float: right;
	margin-right: 0.15rem;
}
.two{
	margin-left: 0.18rem;
}
</style>