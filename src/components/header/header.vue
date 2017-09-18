<template>
    <header>
      <h1><router-link to="/">豆瓣</router-link></h1>
      <nav>
        <ul>
          <li><router-link to="/movie">电影</router-link></li>
          <li><router-link to="book">图书</router-link></li>
          <li><router-link to="broadcast">广播</router-link></li>
          <li><router-link to="">小组</router-link></li>
        </ul>
        <span></span>
      </nav>
    </header>
</template>

<script>
export default {

}
</script>

<style scoped>
header{
  width:100%;
  box-sizing: border-box;
  height: 0.46rem;
  position: fixed;
  top: 0;
  left: 0;
  border-bottom: 1px solid #f3f3f3;
  padding: 0.12rem 0.18rem;
  background-color: #fff;
}
h1{
  float: left;
  font-size: 0;
  width: 0.46rem;
  height: 0.22rem;
  background: url('../../../static/img/index.png');
  background-size: 0.46rem 0.22rem;
}
h1 a{
  display: block;
  width: 0.46rem;
  height: 0.22rem;
}
nav{
  width: 2.3rem;
  float: right;
}
ul{
  float: left;
  line-height: 0.22rem;
  font-size: .15rem;
  height: 0.22rem;
  width: 1.96rem;
  display:flex;
  -webkit-display:flex;
  justify-content:space-around;
  -webkit-justify-content:space-around;
}
a{
  text-decoration: none;

}
li:nth-of-type(1) a{
  color:#2384E8;
}
li:nth-of-type(2) a{
  color:#9F7860;
}
li:nth-of-type(3) a{
  color:#E4A813;
}
li:nth-of-type(4) a{
  color:#2AB8CC;
}
span{
  float: right;
  background: url('../../../static/img/header-search.png');
  width: 0.25rem;
  height: 0.18rem;
  margin-top: 0.04rem;
  background-size: 0.25rem 0.18rem;
}
</style>