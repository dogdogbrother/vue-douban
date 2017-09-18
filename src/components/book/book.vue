<template>
	<div id="book">
		<section class="movie-play">
			<header>
				<h2>{{in_theaters_name}}</h2>
				<a>更多</a>
			</header>
			<ul class="section-content">
				<li v-for="item in in_theaters.subject_collection_items">
					<a class="clearFi box">
						<div class="img" :style="{'background-image':'url('+item.cover.url+')'}"></div>
						<span class="title">{{item.title}}</span>
						<div class="rating">
							<span class="start">
								<span :class="{good:item.rating.value>2}">★</span>
								<span :class="{good:item.rating.value>4}">★</span>
								<span :class="{good:item.rating.value>6}">★</span>
								<span :class="{good:item.rating.value>8}">★</span>
								<span :class="{good:item.rating.value>9}">★</span>
							</span>
							<span class="nmb">{{item.rating.value}}</span>
						</div>
					</a>
				</li>
			</ul>
		</section>
		<section class="movie-play">
			<header>
				<h2>{{coming_soon_name}}</h2>
				<a>更多</a>
			</header>
			<ul class="section-content">
				<li v-for="item in coming_soon.subject_collection_items">
					<a class="clearFi box">
						<div class="img" :style="{'background-image':'url('+item.cover.url+')'}"></div>
						<span class="title">{{item.title}}</span>
						<div class="rating">
							<span class="start">
								<span :class="{good:item.rating.value>2}">★</span>
								<span :class="{good:item.rating.value>4}">★</span>
								<span :class="{good:item.rating.value>6}">★</span>
								<span :class="{good:item.rating.value>8}">★</span>
								<span :class="{good:item.rating.value>9}">★</span>
							</span>
							<span class="nmb">{{item.rating.value}}</span>
						</div>
					</a>
				</li>
			</ul>
		</section>
		<section class="mark_book">
			<div class="book_header">
				<header>
					<h2>{{bookStore_name.name}}</h2>
					<a>更多</a>
				</header>
				<a class="title_book">
					<img :src="bookStore_header_cover.url" referrerpolicy="no-referrer" class="img">
					<div class="content">
						<div class="title">
							<p>{{bookStore_header.title}}</p>
							<span>￥{{bookStore_header.price}}</span>
						</div>
						<p class="text">{{bookStore_header.info}}</p>
					</div>				
				</a>
			</div>
			<ul class="row">
				<li v-for="item in bookStore.subject_collection_items">
					<a>
						<div class="item_img" :style="{'background-image':'url('+item.cover.url+')'}"></div>
						<p class="item_neme">{{item.title}}</p>
						<p class="rank">￥{{item.price}}</p>
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
		this.$jsonp('https://m.douban.com/rexxar/api/v2/subject_collection/book_fiction/items?count=8').then(data=>{
			this.in_theaters=data;
			this.in_theaters_name=data.subject_collection.name;
		}),
		this.$jsonp('https://m.douban.com/rexxar/api/v2/subject_collection/book_nonfiction/items?count=8').then(data=>{
			this.coming_soon=data;
			this.coming_soon_name=data.subject_collection.name;;
		}),
		this.$jsonp('https://m.douban.com/rexxar/api/v2/subject_collection/market_product_book_mobile_web/items?').then(data=>{
			this.bookStore_name=data.subject_collection;
			this.bookStore=data;
			this.bookStore_header=data.header;
			this.bookStore_header_cover=data.header.cover;
			console.log(this.bookStore_header);
		})
	},
	data(){
		return{
			in_theaters:[],
			in_theaters_name:[],
			coming_soon:[],
			coming_soon_name:[],
			bookStore:[],
			bookStore_name:[],
			bookStore_header:[],
			bookStore_header_cover:[],
			classify:[{name:'小说'},{name:'爱情'},{name:'历史'},{name:'外国文学'},{name:'青春'},{name:'励志'},{name:'随笔'},{name:'传记'},{name:'推理'},{name:'旅行'},{name:'奇幻'},{name:'经管'}]
		}
	},
	components:{
	   "douban-footer":footer
	}
}
</script>
<style scoped>
#book{
	padding-top:0.57rem;
}	
.movie-play{
	height: 2.69rem;
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
.mark_book{
	height: 4.15rem;
}
.book_header{
	height: 1.7rem;
}
.title_book{
	display: block;
	width: 3.78rem;
	height: 1.32rem;	
	margin:0.15rem auto 0;
}
.title_book .img{
	width: 1rem;
	height: 1.32rem;
	margin-right: 0.15rem;
	float: left;
}
.content{
	float: left;
	width: 2.63rem;
	height: 0.8rem;
}
.title{
	height: 0.22rem;
	line-height: 0.22rem;
	margin: 0.1rem 0;
}
.title p{
	float: left;
	font-size: 0.19rem;
	color: #494949;
}
.title span{
	float: right;
	color: #E76648;
	font-size: 0.16rem;
}
.title_book .text{
	line-height: 0.195rem;
	font-size: 0.13rem;
	color: #9b9b9b;
}
.row{
	height: 1.87rem;
	padding-top: 0.15rem;
	width: 23.6rem;
}
.row li{
	width: 1rem;
	height: 1.87rem;
	margin-left: 0.18rem;
	float: left;
}
.row li a{
	display: block;
	width: 1rem;
	height: 1.87rem;
}
.row .item_img{
	height: 1.43rem;
	background-size: cover;
	background-position: center center;
}
.row .item_neme{
	height: 0.15rem;
	line-height: 0.15rem;
	margin-top: 0.1rem;
	text-align: center;
	font-size: 0.15rem;
	color: #111;
}
.row .rank{
	color: #aaa;
	font-size: 0.12rem;
	text-align: center;
	height: 0.15rem;
	line-height: 0.15rem;
}
</style>