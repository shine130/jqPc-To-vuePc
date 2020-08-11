<template>
  <div class="page">
   <ul class="pdbox" id="pdbox">
     <li v-for="item in product_img" :key="item.product_id" class="item"><a :href="item.pdetail_img" data-fancybox-group="picgroup"><img class="pic" :src="item.pdetail_img" alt=""><p class="title">{{item.pdetail_name}}</p></a>
     </li>
     </ul>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data:function(){
    return {
      product_img:[]
    }
  },
  created:function(){
    var pid = this.$route.params.id;
    console.log('ajax加载详情页')
    console.log(`产品id${pid}`)
    
    axios.post('http://suti.jinlinkj.cn/api/api/product_detail',{
      product_id:pid
    }
      ).then((res) => {
        this.product_img = res.data.product_img;
    } )

  }

}
</script>

<style>

    .pdbox{overflow: hidden; width: 1200px; margin: 0 auto; padding-top: 20px;}
    .pdbox a{color: #000; text-decoration: none;}
    .pdbox .item{float: left; display: inline; width: 200px; margin:20px; text-align: center;}
    .pdbox .pic{width: 150px; height: 150px;}
    .pdbox .title{text-align: center; padding-top: 8px;}
    .pdname{text-align: center; padding:20px; font-weight: bold;}
    #fancybox-buttons{display: none;}

</style>
