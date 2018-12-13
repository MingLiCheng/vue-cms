<template>
<section class="newsinfo-container">
  <h3 class="title">{{ newsinfo.title }}</h3>
  <p class="subtitle">
    <span>发布时间:{{ newsinfo.add_time | dateFormat }}</span>
    <span>点击:{{ newsinfo.click }}次</span>
  </p>
  <div class="content" v-html="newsinfo.content"></div>

  <Comment  :id="this.id"></Comment>



</section>

</template>

<script>
import Comment from '../news/Comment'
export default{
  data() {
    return {
      id:this.$route.params.id,
      newsinfo:{}
    }
  },
  components:{
    Comment,
  },
  created() {
    this.getNewsInfo()
  },
  methods: {
    getNewsInfo() {
      // 获取新闻详情
      this.$http.get("http://www.liulongbin.top:3005/api/getnew/"+this.id).then(result => {
        if (result.body.status === 0) {
          this.newsinfo = result.body.message[0];
          console.log(this.newsinfo);

        }else{
          Toast('获取新闻失败')
        }
      })
    }
  }
}

</script>
<style lang="scss">
.newsinfo-container {
  padding: 0px 4px 40px 0px;;
  .title {
    font-size: 16px;
    text-align: center;
    margin: 15px 0;
    color: red;
  }
  .subtitle {
    font-size: 13px;
    color: #226aff;
    display: flex;
    justify-content: space-between;
  }
  .content {
    img {
      width: 100%;
    }
  }
}
</style>
