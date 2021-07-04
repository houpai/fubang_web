/**
*@desc: 关于我们
*@author: houpai
*@date 2021/07/05 02:08:47
*/
<template>
  <div class="aboutUs_container">
    <commonTitle
      :title-text="'关于我们'"
      :title-text-en="'About Us'"
    />

    <div class="aboutUs_container_content">
      <p class="aboutUs_text">
        国际贸易有限公司是省投资设立的国际贸易公司。履行国有资产出资者职能，承担国有资产保值增值的责任。
        省国贸集团注册资本金为9亿元，经营范围为授权范围内国有资产的经营管理，涉及商贸流通、金融服务、产业投资、经济合作等领域。集团与世界上213个国家和地区的知名客商建立了广泛和稳定的贸易合作关系，经营的出口商品多达210个大类品种，主要为轻工业品、医化产品、农副产品、机电产品等。
        集团拥有二级控股子公司22家，有国有资产覆盖的各级公司180家。控股子公司中一家为上市公司在省内比较有影响的子公司，这些公司在全国行业排名中均名列前茅。2016年底，公司在岗职工13168人。
        2015年，集团在克服国内外诸多不利因素取得稳定健康发展。2016年集团实现销售收入355.82亿元，实现利润总额10.67亿元。按照母子公司合并口径，2016年集团实现进出口总额40.76亿美元，其中出口35.96亿美元，进口4.79亿美元。按中国企业家联合会2015年发布的500强排名口径，集团位居第222名。
      </p>

      <img src="//ntemimg.wezhan.cn/contents/sitefiles2002/10011693/images/-36286.jpeg" alt="" class="aboutUs_img">

    </div>
  </div>
</template>

<script>
import commonTitle from '../../components/Title/Title'

export default {
  name: "about",
  components: {
    commonTitle
  }
}
</script>

<style scoped lang="scss">
@import "about";
</style>
