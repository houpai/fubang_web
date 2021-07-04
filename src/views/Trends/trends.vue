<template>
  <div class="index-container">

    <commonTitle
      :title-text="'行业动态'"
      :title-text-en="'Industry trends'"
    />

    <div class="main" id="boxId">
      <div class="content">
        <transition name="fade" enter-active-class="animate__animated animate__bounceInLeft">
          <div class="list animated" v-if="show">
            <ul class="list-ul">
              <li class="list-item" v-for="(item, index) in list.slice(0,3)" :key="index">
                <h3 class="list-title">
                  <a target="_self">{{item.title}}111</a>
                </h3>
                <p class="list-desc">{{item.content}}</p>
                <div class="list-bottom">
                  <span class="list-date">{{item.date}}</span>
                  <span class="list-viewnum">
                    <img src="@/assets/img/look.png" />{{item.num}}
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </transition>
        <transition name="fade" enter-active-class="animate__animated animate__bounceInRight">
          <div class="list animated" v-if="show">
            <ul class="list-ul">
              <li class="list-item" v-for="(item, index) in list.slice(3,6)" :key="index">
                <h3 class="list-title">
                  <a target="_self">{{item.title}}</a>
                </h3>
                <p class="list-desc">{{item.content}}</p>
                <div class="list-bottom">
                  <span class="list-date">{{item.date}}</span>
                  <span class="list-viewnum">
                    <img src="@/assets/img/look.png" />{{item.num}}
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import commonTitle from '../../components/Title/Title'

export default {
  name: "Dashboard",
  components:{
    commonTitle
  },
  computed: {
    ...mapGetters(["name"]),
  },
  data() {
    return {
      show: false,
      list: [
        {
          title: "国际贸易中电子合同诈骗的骗术与防范",
          content: "随着互联网的飞速发展，国际贸易越来越依赖电子商务的应用，电子合同的当事人通过电子邮件和数据交换，明确双方的权利和义务。这种商业交易模式，可以节约成本、提高效率，促进国际贸易的飞速发展。但是，国际贸易的诈骗分子通过各种骗术，利用电子合同进行诈骗，致使国际贸易诈骗案件不断增加。国际贸易法律网首席律师贾庆坤对国际贸易中电子合同诈骗的骗术和防范措施进行介绍，希冀对广大企业有所裨益。",
          date: "2020-01-01",
          num: "0"
        },
        {
          title: "国际贸易中电子合同诈骗的骗术与防范",
          content: "随着互联网的飞速发展，国际贸易越来越依赖电子商务的应用，电子合同的当事人通过电子邮件和数据交换，明确双方的权利和义务。这种商业交易模式，可以节约成本、提高效率，促进国际贸易的飞速发展。但是，国际贸易的诈骗分子通过各种骗术，利用电子合同进行诈骗，致使国际贸易诈骗案件不断增加。国际贸易法律网首席律师贾庆坤对国际贸易中电子合同诈骗的骗术和防范措施进行介绍，希冀对广大企业有所裨益。",
          date: "2020-01-01",
          num: "0"
        },
        {
          title: "国际贸易中电子合同诈骗的骗术与防范",
          content: "随着互联网的飞速发展，国际贸易越来越依赖电子商务的应用，电子合同的当事人通过电子邮件和数据交换，明确双方的权利和义务。这种商业交易模式，可以节约成本、提高效率，促进国际贸易的飞速发展。但是，国际贸易的诈骗分子通过各种骗术，利用电子合同进行诈骗，致使国际贸易诈骗案件不断增加。国际贸易法律网首席律师贾庆坤对国际贸易中电子合同诈骗的骗术和防范措施进行介绍，希冀对广大企业有所裨益。",
          date: "2020-01-01",
          num: "0"
        },
        {
          title: "国际贸易中电子合同诈骗的骗术与防范",
          content: "随着互联网的飞速发展，国际贸易越来越依赖电子商务的应用，电子合同的当事人通过电子邮件和数据交换，明确双方的权利和义务。这种商业交易模式，可以节约成本、提高效率，促进国际贸易的飞速发展。但是，国际贸易的诈骗分子通过各种骗术，利用电子合同进行诈骗，致使国际贸易诈骗案件不断增加。国际贸易法律网首席律师贾庆坤对国际贸易中电子合同诈骗的骗术和防范措施进行介绍，希冀对广大企业有所裨益。",
          date: "2020-01-01",
          num: "0"
        },
        {
          title: "国际贸易中电子合同诈骗的骗术与防范",
          content: "随着互联网的飞速发展，国际贸易越来越依赖电子商务的应用，电子合同的当事人通过电子邮件和数据交换，明确双方的权利和义务。这种商业交易模式，可以节约成本、提高效率，促进国际贸易的飞速发展。但是，国际贸易的诈骗分子通过各种骗术，利用电子合同进行诈骗，致使国际贸易诈骗案件不断增加。国际贸易法律网首席律师贾庆坤对国际贸易中电子合同诈骗的骗术和防范措施进行介绍，希冀对广大企业有所裨益。",
          date: "2020-01-01",
          num: "0"
        },
        {
          title: "国际贸易中电子合同诈骗的骗术与防范",
          content: "随着互联网的飞速发展，国际贸易越来越依赖电子商务的应用，电子合同的当事人通过电子邮件和数据交换，明确双方的权利和义务。这种商业交易模式，可以节约成本、提高效率，促进国际贸易的飞速发展。但是，国际贸易的诈骗分子通过各种骗术，利用电子合同进行诈骗，致使国际贸易诈骗案件不断增加。国际贸易法律网首席律师贾庆坤对国际贸易中电子合同诈骗的骗术和防范措施进行介绍，希冀对广大企业有所裨益。",
          date: "2020-01-01",
          num: "0"
        }
      ]
    };
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll () {
      const elOffsetTop = document.getElementById('boxId').offsetTop
      const docScrollTop = document.documentElement.scrollTop
      if (elOffsetTop >= docScrollTop && elOffsetTop < (docScrollTop + window.innerHeight)) {
        this.show = true;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./trends.scss";
</style>
