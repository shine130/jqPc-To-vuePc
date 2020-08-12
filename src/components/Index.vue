<template>
  <div class="page">

<div class="slide" id="slide">
      <ul class="slideFul" id="slideFul">
        <li style="display: list-item;"><img src="http://suti.jinlinkj.cn/uploads/images/2020/c23d1d4fe6bc8872a0e550965f6a49bc.jpeg" alt="">
        </li>
        <li style="display: list-item;"><img src="http://suti.jinlinkj.cn/uploads/images/2020/c23d1d4fe6bc8872a0e550965f6a49bc.jpeg" alt=""></li>
        </ul>
      <div class="slideBtn" id="slideBtn">
        <span></span>
        <span></span>
        </div>
      <span class="preBtn"></span>
      <span class="nextBtn"></span>
    </div>

<ul class="pdbox" id="pdbox">
  <li v-for="pditem in product" :key="pditem.product_id" class="item" :data-id="pditem.product_id">
    <router-link :to="/pic/+pditem.product_id"><img class="pic" :src="pditem.product_img" alt=""><p class="title">{{pditem.product_name}}</p></router-link>
    </li>
  </ul>

  <div class="botimg"><img src="../assets/bt.jpg" alt="" width="1200" height="80"></div>

  </div>
</template>

<script>
import axios from 'axios';
import $ from 'jquery';
import focusSlide from '../assets/js/slides.js';

export default {
  data:function(){
    return {
      product:[],
      name:'name的值'
    }
  },
  created:function(){
    console.log('ajax加载产品')
    axios.get('http://suti.jinlinkj.cn/api/api/home').then((res) => {
      this.product = res.data.product;
    } )

  },
  mounted:function(){
    $('#slide').focusSlide();
  }

}
</script>

<style>

    body,html,ul,li,p{margin:0; padding:0}
    ul,li{list-style: none;}
    .slide{width: 1440px; margin:0 auto; height: 300px;  overflow:hidden; position:relative;}
    .slideFul {width:1440px; position:absolute; left:0;top:0; }
.slideFul li{position:absolute; display: none;}
.slideBtn {position:absolute; z-index:99; bottom:10px; width:100%; text-align:center;}
.slideBtn span{display: inline-block; background-color:#ccc; width: 10px; height: 10px; border-radius: 50%; color:#000; cursor:pointer; margin-right: 10px;}
.slideBtn span.on{color:#fff; background-color:#000;}
.preBtn,.nextBtn{position: absolute; border: 1px solid #000000; z-index: 99; top:300px; background-color: #fff; cursor:pointer; }
.nextBtn{right: 10px;}
    .pdbox{overflow: hidden; width: 1200px; margin: 0 auto; padding-top: 20px;}
    .pdbox a{color: #000; text-decoration: none;}
    .pdbox .item{float: left; display: inline; width: 200px; margin:20px; text-align: center;}
    .pdbox .pic{display: inline-block; width: 150px; height: 150px;}
    .pdbox .title{text-align: center; padding-top: 8px;}
    .botimg{ width: 100%; text-align: center; padding-top: 70px;}
    @media screen and (max-width:1000px){
      /* .slide{height: 600px;}
      .slide img{height: 600px;} */
      .pdbox{width: 1440px; padding-left: 20px;}
      .botimg{width: 1440px;}
      .pdbox .item{width: 30%; box-sizing: border-box; text-align: center;}
      .pdbox .pic{width: 320px; height: 320px;}
      .pdbox .title{font-size: 38px; padding-top: 20px;}
    }
  
</style>
