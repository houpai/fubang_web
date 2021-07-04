/**
*@desc: 首页-业务领域
*@author: houpai
*@date 2021/07/04 23:48:57
*/
<template>
  <div>
    <div class="business_container" :style="{'background-image':'url(\'https://ntemimg.wezhan.cn/contents/sitefiles2002/10011693/images/-36288.jpeg\')'}">
      <commonTitle
        :title-text="'业务领域'"
        :title-text-en="'Business areas'"
        :title-text-color="'#fff'"
        :title-text-en-color="'#fff'"
      />
    </div>

    <ul class="business_list">
        <li class="business_list_item" v-for="index in 4">
          <img src="https://img0.baidu.com/it/u=1346465076,1813408680&fm=11&fmt=auto&gp=0.jpg" alt="" class="business_img">
          <div class="business_title">
            <p class="title_text">合作贸易</p>
            <p class="sub_title_text">合作贸易</p>
          </div>
        </li>
    </ul>

  </div>
</template>

<script>

import commonTitle from '@/components/Title/Title'

export default {
  name: "business",
  components:{
    commonTitle
  }
}
</script>

<style scoped lang="scss">
@import "business";
</style>
