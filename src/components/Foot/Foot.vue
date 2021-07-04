<template>
<div>
  <div class="foot_container">
    <div class="foot_content">
      <ul class="company-info">
        <li class="company-info-item">
          <div class="company-info-titleBox">邮箱：</div>
          中国北京市东城区某某大厦8-88室
        </li>
        <li class="company-info-item">
          <div class="company-info-titleBox">电话：</div>
          name@400xxx8888.xxx
        </li>
        <li class="company-info-item">
          <div class="company-info-titleBox">传真：</div>
          010xxxx8888
        </li>
        <li class="company-info-item">
          <div class="company-info-titleBox">邮箱：</div>
          name@example.xxx
        </li>
        <li class="company-info-item">
          <div class="company-info-titleBox" style="width:80px">版权所有：</div>
          某某有限公司
        </li>
      </ul>
      <div class="foot_form">
        <el-form ref="form" :model="form" :rules="rules" label-width="0px">
          <el-form-item prop="name">
            <el-input v-model="form.name" placeholder="留言标题"></el-input>
          </el-form-item>
          <el-form-item prop="content">
            <el-input v-model="form.content" placeholder="留言内容"></el-input>
          </el-form-item>
          <el-form-item prop="email">
            <el-input v-model="form.email" placeholder="联系邮箱"></el-input>
          </el-form-item>
          <el-form-item prop="code" class="el-form-item_flex">
            <el-input v-model="form.code" placeholder="验证码">

            </el-input>
            <div class="verify_dom" id="v_container">

            </div>
          </el-form-item>
          <el-form-item>
            <div class="btn">
              <div class="submit_btn" @click="onSubmit('form')">提交</div>
            </div>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
  <div class="foot_area">
    <div class="foot_page">
      <div class="foot_text">
        <a class="bottom-words" target="_blank" href="https://s.click.taobao.com/t?e=m%3D2%26s%3DeiY7Rxe8w3Jw4vFB6t2Z2iperVdZeJviv2laukthwYj87chln4Noyl5NG076NsGgs8PRrPA3B48Wuy8IWhndkHndrBPSyPYAlXc7gv2mh9sF8HbtEOMyxZPfjt5nz5avlntEOsmn00xRRjj7xTWTDTsGFuxRGRKDjbWOQdzGwNlEiFenDNcIzk9%2FYFgWEAd0TXcy3f2zBgfXb7YcYklj7O0zwX2FaoHjTMnzF9P%2FknghhQs2DjqgEA%3D%3D&amp;union_lens=lensId%3AOPT%401611714771%4021055abf_079b_17741afbae3_d899%4001" style="color: rgb(152, 152, 152);">
          <svg width="55px" height="13px" viewBox="0 0 55 13" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="height: 12px; width: 50px;">
            <g id="备案信息优化" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" style="fill: rgb(152, 152, 152); height: 12px; width: 50px;">
              <g id="底部样式4-没有ipv6" transform="translate(-562.000000, -366.000000)" fill="#989898" fill-rule="nonzero" style="fill: rgb(152, 152, 152); height: 12px; width: 50px;">
                <g id="编组-2备份" transform="translate(57.000000, 301.000000)" style="fill: rgb(152, 152, 152); height: 12px; width: 50px;">
                  <g id="编组-5" transform="translate(505.000000, 49.000000)" style="fill: rgb(152, 152, 152); height: 12px; width: 50px;">
                    <g id="编组" transform="translate(0.000000, 16.000000)" style="fill: rgb(152, 152, 152); height: 12px; width: 50px;">
                      <path d="M30.4355785,11.3507179 C32.2713894,11.2986909 32.9105785,10.0128801 32.9105785,8.9203125 L32.9105785,2.23112331 L33.1558488,2.23112331 L33.4011191,1.2426098 L28.0051731,1.2426098 L28.2504434,2.23112331 L31.9146326,2.23112331 L31.9146326,8.82369088 C31.9146326,9.7676098 31.2234164,10.406799 30.1828758,10.406799 L30.4355785,11.3507179 L30.4355785,11.3507179 Z" id="路径"></path>
                      <path d="M30.6288218,9.06896115 C30.8740921,8.82369088 30.9781461,8.47436655 30.9781461,7.87977196 L30.9781461,3.1230152 L28.0572002,3.1230152 L28.0572002,9.41828547 L29.6923353,9.41828547 C30.0862542,9.41828547 30.4355785,9.32166385 30.6288218,9.06896115 Z M29.0977407,8.32571791 L29.0977407,4.11896115 L29.9896326,4.11896115 L29.9896326,7.78315034 C29.9896326,8.17706926 29.840984,8.32571791 29.4916596,8.32571791 L29.0977407,8.32571791 Z M23.9396326,1.14598818 L23.9396326,11.3061233 L24.9281461,11.3061233 L24.9281461,2.23855574 L26.1693623,2.23855574 L25.4261191,5.41220439 C25.7234164,5.65747466 26.265984,6.30409628 26.265984,7.44125845 C26.265984,8.57842061 25.6193623,8.97977196 25.4261191,9.07639358 L25.4261191,10.1169341 C25.9686867,10.0649071 27.3585515,9.32166385 27.3585515,7.49328547 C27.3585515,6.40071791 26.9646326,5.61288007 26.6153083,5.11490709 L27.5072002,1.15342061 C27.5072002,1.14598818 23.9396326,1.14598818 23.9396326,1.14598818 L23.9396326,1.14598818 Z M35.340984,10.3101774 L35.1403083,11.2986909 L44.1558488,11.2986909 L43.9105785,10.3101774 L40.1423353,10.3101774 L40.1423353,9.02436655 L43.6132812,9.02436655 L43.368011,8.03585304 L40.1497677,8.03585304 L40.1497677,6.7426098 L42.4761191,6.7426098 C43.5686867,6.7426098 44.1632813,6.20004223 44.1632813,5.05544764 L44.1632813,1.09396115 L35.1403083,1.09396115 L35.1403083,6.69058277 L39.1017948,6.69058277 L39.1017948,7.93179899 L35.8835515,7.93179899 L35.6382812,8.9203125 L39.1092272,8.9203125 L39.1092272,10.2581503 L35.340984,10.2581503 L35.340984,10.3101774 Z M40.1423353,4.51288007 L42.5207137,4.51288007 L42.2754434,3.52436655 L40.1423353,3.52436655 L40.1423353,2.23112331 L43.1153083,2.23112331 L43.1153083,5.05544764 C43.1153083,5.55342061 42.9146326,5.74666385 42.5207137,5.74666385 L40.1423353,5.74666385 L40.1423353,4.51288007 Z M36.2328758,5.75409628 L36.2328758,2.23112331 L39.1538218,2.23112331 L39.1538218,3.47233953 L37.0207137,3.47233953 L36.7754434,4.46085304 L39.1538218,4.46085304 L39.1538218,5.74666385 L36.2328758,5.74666385 L36.2328758,5.75409628 Z M53.922065,1.14598818 L46.8389569,1.14598818 L46.5862542,2.23112331 L54.2193623,2.23112331 L53.922065,1.14598818 Z M46.4376056,11.2540963 L46.3855785,11.3507179 L53.320038,11.3507179 C53.7139569,11.3507179 54.0112542,11.2540963 54.2119299,11.0013936 C54.4126056,10.7040963 54.3605785,10.354772 54.2639569,10.1615287 C54.1673353,9.66355574 53.765984,7.87977196 53.6693623,7.63450169 L53.6693623,7.58247466 L52.6288218,7.58247466 L52.6808488,7.67909628 C52.7328758,7.92436655 53.1788218,9.76017736 53.2754434,10.354772 L47.7234164,10.354772 C47.9686867,9.16558277 48.4146326,7.18112331 48.6673353,6.1926098 L54.9105785,6.1926098 L54.6653083,5.20409628 L46.1403083,5.20409628 L45.895038,6.1926098 L47.6267948,6.1926098 C47.4261191,7.09193412 46.7869299,9.61896115 46.4376056,11.2540963 L46.4376056,11.2540963 Z M3.72341639,9.86423142 C3.27747044,9.7676098 2.98017314,9.41828547 2.98017314,8.9203125 L2.98017314,3.91828547 C3.03220017,3.47233953 3.32949747,3.1230152 3.72341639,3.02639358 L8.38355152,2.03788007 L8.88152449,0.0534206081 L3.47814611,0.0534206081 C1.54571368,0.00139358108 0.00720016892,1.53990709 0.00720016892,3.4203125 L0.00720016892,9.36625845 C0.00720016892,11.2466639 1.59030828,12.8372044 3.47814611,12.8372044 L8.88152449,12.8372044 L8.38355152,10.8527449 L3.72341639,9.86423142 Z M17.3024704,0.00139358108 L11.8544975,0.00139358108 L12.3524704,1.98585304 L17.0051731,2.97436655 C17.4511191,3.07098818 17.7484164,3.4203125 17.7484164,3.86625845 L17.7484164,8.86828547 C17.6963894,9.31423142 17.3990921,9.66355574 17.0051731,9.76017736 L12.345038,10.7561233 L11.847065,12.7405828 L17.3024704,12.7405828 C19.1828758,12.7405828 20.7734164,11.2020693 20.7734164,9.26963682 L20.7734164,3.32369088 C20.7213894,1.53990709 19.1828758,0.00139358108 17.3024704,0.00139358108 Z" id="形状"></path>
                      <polygon id="路径" points="8.38355152 6.1480152 12.345038 6.1480152 12.345038 6.64598818 8.38355152 6.64598818"></polygon>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </svg>
          <span class="bottom-words" style="color: rgb(152, 152, 152);"> &nbsp;本网站由阿里云提供云计算及安全服务</span>
        </a>
      </div>
      <div class="divider"></div>
      <div class="foot_text">
        本网站支持
        <span class="ipv6-box">IPv6</span>
      </div>
      <div class="divider"></div>
      <div class="foot_text">
        <a target="_blank" href="https://www.clouddream.net/">
          Powered by CloudDream
        </a>
      </div>
    </div>
  </div>
</div>
</template>

<script>

import '@/utils/verify'

export default {
  name: "Foot",

  data() {
    return {
      form: {
        name: '',
        content: '',
        email: '',
        code: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入留言标题', trigger: 'blur' }
        ],
        content: [
          { required: true, message: '请输入留言内容', trigger: 'blur' }
        ],
        email: [
          { required: true, message: '请输入留言邮箱', trigger: 'blur' },
          { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
        ],
        code: [
          { required: true, message: '请输入验证码', trigger: 'blur' }
        ]
      }
    };
  },
  methods: {
    onSubmit (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    }
  },
  created() {
    this.$nextTick(() => {
      // 表单提交 和 图片验证码验证逻辑
      var verifyCode = new GVerify("v_container");
      // document.getElementById("submit_btn").onclick = function(){
      //   var res = verifyCode.validate(document.getElementById("input_code_value").value);
      //   if(res){
      //     alert("验证正确");
      //   }else{
      //     alert("验证码错误");
      //   }
      // }
    })
  }
};
</script>

<style scoped lang="scss">
@import "Foot";
</style>
