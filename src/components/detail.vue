<template>
  <div class="page">
      <div class="pdname" id="pdname">{{product_name}}</div>
   <ul class="pdbox" id="pdbox">
     <li v-for="item in product_img" :key="item.pdetail_id" class="item"><a class="fancybox" :href="item.pdetail_img" rel="gallery"><img class="pic" :src="item.pdetail_img" alt=""><p class="title">{{item.pdetail_name}}</p></a>
     </li>
     </ul>
  </div>
</template>

<script>

import axios from 'axios';
var $ = require('jquery');
require('fancybox')($);
import '../../node_modules/fancybox/dist/css/jquery.fancybox.css'

export default {
  data:function(){
    return {
      product_img:[],
      product_name:""
    }
  },
  created:function(){

  },
  mounted:function(){
    var pid = this.$route.params.id;
    console.log('ajax加载详情页')
    console.log(`产品id${pid}`)
    
    axios.post('http://suti.jinlinkj.cn/api/api/product_detail',{
      product_id:pid
    }
      ).then((res) => {
        // console.log(res)
        this.product_img = res.data.product_img;
        this.product_name = res.data.product_name;
        $(document).ready(function() {
    $(".fancybox").fancybox({
        beforeLoad : function() {
            this.title = 'Image ' + (this.index + 1) + ' of ' + this.group.length + (this.title ? ' - ' + this.title : '');

            /*
                "this.element" refers to current element, so you can, for example, use the "alt" attribute of the image to store the title:
                this.title = $(this.element).find('img').attr('alt');
            */
        }
    });
        });

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


</style>
