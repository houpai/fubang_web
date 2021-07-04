import HttpUtils from '@/utils/http.utils'

const urls = {
  'LOGIN':"/ScSystemUserController/systemLogin", // 登录
}

let userSrv = {
  login: function(params) {
    return HttpUtils.postToQs(urls.LOGIN, params)
  }
}

export { userSrv }

