/**
 * @Description: axios拦截器
 * @Author: 侯湃
 * @Date: 2020/6/11
 */
import store from "../store/index";
// import {loginSrv} from "../views/Login/login.service";
import {Message} from "element-ui";
import {resetRouter} from '../router'

let res = {};

/**
 * 对接口返回的code进行统一处理 读取headers存token
 * */
const handleCode = () => {
  try {
    if(res.headers['x-auth-token']) {
      let serviceToken = res.headers['x-auth-token'] || '';
      localStorage.setItem('serviceToken', serviceToken)
    }
    let code = res.data.code;
    if (code == "00006") {
      // Message("登录已过期,请重新登录");
      resetRouter()
      localStorage.setItem('serviceToken', '')
      let outputDir = process.env.VUE_APP_BASE_API == "https://lnyhztest.quickhealmall.com/pfks_screening_beta" ? "/yhz_screening_sys_beta" : "/yhz_screening_sys"
      location.href = location.origin + outputDir + "/#/login";
    }
  } catch (e) {
    console.log("handleCode error ", e);

  }
};

export default {
  docode: response => {
    res = response || {};
    handleCode();
  }
};
