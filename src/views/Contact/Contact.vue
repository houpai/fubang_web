/**
*@desc: 联系我们
*@author: houpai
*@date 2021/07/05 02:00:17
*/
<template>
  <div class="index-container">
    <commonTitle :title-text="'联系我们'" :title-text-en="'CONTACT US'" />
    <div class="main">
      <div class="content">
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
            <div class="code">
              <img src="@/assets/img/QRCode.jpg" />
            </div>
          </li>
        </ul>
        <div class="foot_form">
          <el-form ref="form" :model="form" :rules="rules" label-width="0px">
            <el-form-item prop="name">
              <el-input v-model="form.name" placeholder="留言标题"></el-input>
            </el-form-item>
            <el-form-item prop="content">
              <el-input
                type="textarea"
                resize="none"
                :rows="4"
                v-model="form.content"
                placeholder="留言内容"
              ></el-input>
            </el-form-item>
            <el-form-item prop="email">
              <el-input v-model="form.email" placeholder="联系邮箱"></el-input>
            </el-form-item>
            <el-form-item prop="code" class="el-form-item_flex">
              <el-input v-model="form.code" placeholder="验证码"> </el-input>
              <div class="verify_dom" id="v_container"></div>
            </el-form-item>
            <el-form-item>
              <div class="btn">
                <div class="submit_btn" @click="onSubmit('form')">提交</div>
              </div>
            </el-form-item>
          </el-form>
        </div>
      </div>
      <div id="map_canvas"></div>
    </div>
  </div>
</template>

<script>
import "@/utils/verify";
import commonTitle from "../../components/Title/Title";

export default {
  components: {
    commonTitle,
  },
  name: "Contact",

  data() {
    return {
      form: {
        name: "",
        content: "",
        email: "",
        code: "",
      },
      rules: {
        name: [{ required: true, message: "请输入留言标题", trigger: "blur" }],
        content: [
          { required: true, message: "请输入留言内容", trigger: "blur" },
        ],
        email: [
          { required: true, message: "请输入留言邮箱", trigger: "blur" },
          {
            type: "email",
            message: "请输入正确的邮箱地址",
            trigger: ["blur", "change"],
          },
        ],
        code: [{ required: true, message: "请输入验证码", trigger: "blur" }],
      },
    };
  },
  methods: {
    onSubmit(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    mapHandle() {
      let map = new BMap.Map("map_canvas");
      let poi = new BMap.Point(123.467933, 41.68383);
      map.centerAndZoom(poi, 12);
    },
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
      // 生成地图
      this.mapHandle();
    });
  },
};
</script>

<style lang="scss" scoped>
@import "./contact.scss";
</style>
