<template>
  <div class="newslist">
    <!-- <h1>NewsList</h1> -->

    <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="item in newslist" :key="item.id">
					<a href="javascript:;">
						<img class="mui-media-object mui-pull-left" :src="item.img_url">
						<div class="mui-media-body">
							{{ item.title }}
							<p class='mui-ellipsis'>
              <span>发表时间: {{ item.add_time | dateFormat}} </span> <span>点击: {{ item.click }}次数</span></p>
						</div>
					</a>
				</li>

			</ul>




  </div>
</template>

<script>
import { Toast } from 'mint-ui'
export default {
  name: 'newslist',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      newslist:[],
    }
  },
  created(){
    this.getnewslist()
  },
  methods:{
    getnewslist(){
      this.$http.get('http://www.liulongbin.top:3005/api/getnewslist').then(data => {
        if(data.body.status === 0) {
        this.newslist = data.body.message       
        }else{
          // 失败
          Toast('获取新闻列表失败')
        }        
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mui-ellipsis{
  color: #3f81b8;
  display: flex;
  justify-content: space-between;
}

</style>
