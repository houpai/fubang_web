/**
*@desc: 行业动态详情
*@author: houpai
*@date 2021/07/10 08:22:41
*/
<template>
  <div class="TrendsDetail_container">
    <div class="main">
      <articleBar />
      <div class="article_content">
        <h4 class="article_title">国际贸易中电子合同诈骗的骗术与防范</h4>
        <div class="detail_message">
          <span class="time">2017年9月29日 11:34</span>
          <span class="liulanliang">
            <i class="iconfont icon-liulanliang"></i>
            浏览量 0
          </span>
        </div>

        <div class="article_detail_content">
          随着互联网的飞速发展，国际贸易越来越依赖电子商务的应用，电子合同的当事人通过电子邮件和数据交换，明确双方的权利和义务。这种商业交易模式，可以节约成本、提高效率，促进国际贸易的飞速发展。但是，国际贸易的诈骗分子通过各种骗术，利用电子合同进行诈骗，致使国际贸易诈骗案件不断增加。国际贸易法律网首席律师贾庆坤对国际贸易中电子合同诈骗的骗术和防范措施进行介绍，希冀对广大企业有所裨益。
        </div>
      </div>


      <div class="page_action_box">
        <div class="pre_btn">
          <i class="iconfont icon-arrowLeft"></i>
          <span>上一篇：</span>
          <span class="article_name"></span>
        </div>
        <div class="next_btn">
          <i class="iconfont icon-arrowRight"></i>
          <span>下一篇：</span>
          <span class="article_name">因国际货物买卖合同引发的纠纷应适用哪国的法律？</span>
        </div>
      </div>

    </div>
  </div>
</template>

<script>

import articleBar from './component/articleBar/articleBar'

export default {
  name: "TrendsDetail",
  props:{
    articleDetail:{
      type:Object,
      default() {
        return {}
      }
    }
  },
  components:{
    articleBar
  },
  data() {
    return {

    }
  },
  methods:{

  }
}
</script>

<style scoped lang="scss">
@import "./TrendsDetail.scss";
</style>
