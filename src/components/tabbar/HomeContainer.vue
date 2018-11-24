<template>
  <div class="homecontainer">
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in lunbotulist" :key="item.id">
        <img :src="item.img" alt="">
      </mt-swipe-item>
    </mt-swipe>
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
          <span class="mui-icon mui-icon-home"></span>
          <div class="mui-media-body">Home</div>
        </a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
          <span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span>
          <div class="mui-media-body">Email</div>
        </a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
          <span class="mui-icon mui-icon-chatbubble"></span>
          <div class="mui-media-body">Chat</div>
        </a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
          <span class="mui-icon mui-icon-location"></span>
          <div class="mui-media-body">location</div>
        </a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
          <span class="mui-icon mui-icon-search"></span>
          <div class="mui-media-body">Search</div>
        </a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
          <span class="mui-icon mui-icon-phone"></span>
          <div class="mui-media-body">Phone</div>
        </a></li>
    </ul>
  </div>
</template>

<script>
import { Toast } from 'mint-ui'

export default {
  name: 'HomeContainer',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      lunbotulist:[],
    }
  },
  created(){
    this.getLunbotu()
  },
  methods:{
    getLunbotu(){
      this.$http.get('http://www.liulongbin.top:3005/api/getlunbo').then(result => {
        console.log(result.body)
        if(result.body.status === 0){
          // 成功 success
          this.lunbotulist = result.body.message
          // Toast('轮播图信息获取成功');
        }else{
          // 失败 fail
          Toast('轮播图信息获取失败')
        }
      })
    }


  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  scoped>
.homecontainer{
  /* padding: 20px; */
  /* height: 600px; */
  background-color: coral;
}
.mint-swipe{
  height: 200px;
}
.mint-swipe-item img{
  width: 100%;
  height: 100%;
}
.mint-swipe-item:nth-child(1){
  background-color: red;
}
.mint-swipe-item:nth-child(2){
  background-color: yellow;
}

.mint-swipe-item:nth-child(3){
  background-color: pink;
}
.mui-grid-view.mui-grid-9{
  background-color: #ffffff;
}


</style>
