/**
 * Parse the time to string
 * @param {(Object|string|number)} time
 * @param {string} cFormat
 * @returns {string | null}
 */
export function parseTime(time, cFormat) {
  if (arguments.length === 0 || !time) {
    return null
  }
  const format = cFormat || "{y}-{m}-{d} {h}:{i}:{s}"
  let date
  if (typeof time === "object") {
    date = time
  } else {
    if ((typeof time === "string")) {
      if ((/^[0-9]+$/.test(time))) {
        // support "1548221490638"
        time = parseInt(time)
      } else {
        // support safari
        // https://stackoverflow.com/questions/4310953/invalid-date-in-safari
        time = time.replace(new RegExp(/-/gm), "/")
      }
    }

    if ((typeof time === "number") && (time.toString().length === 10)) {
      time = time * 1000
    }
    date = new Date(time)
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  }
  const time_str = format.replace(/{([ymdhisa])+}/g, (result, key) => {
    const value = formatObj[key]
    // Note: getDay() returns 0 on Sunday
    if (key === "a") {
      return ["日", "一", "二", "三", "四", "五", "六"][value]
    }
    return value.toString().padStart(2, "0")
  })
  return time_str
}

/**
 * @param {number} time
 * @param {string} option
 * @returns {string}
 */
export function formatTime(time, option) {
  if (("" + time).length === 10) {
    time = parseInt(time) * 1000
  } else {
    time = +time
  }
  const d = new Date(time)
  const now = Date.now()

  const diff = (now - d) / 1000

  if (diff < 30) {
    return "刚刚"
  } else if (diff < 3600) {
    // less 1 hour
    return Math.ceil(diff / 60) + "分钟前"
  } else if (diff < 3600 * 24) {
    return Math.ceil(diff / 3600) + "小时前"
  } else if (diff < 3600 * 24 * 2) {
    return "1天前"
  }
  if (option) {
    return parseTime(time, option)
  } else {
    return (
      d.getMonth() +
      1 +
      "月" +
      d.getDate() +
      "日" +
      d.getHours() +
      "时" +
      d.getMinutes() +
      "分"
    )
  }
}

/**
 * @param {string} url
 * @returns {Object}
 */
export function param2Obj(url) {
  const search = decodeURIComponent(url.split("?")[1]).replace(/\+/g, " ")
  if (!search) {
    return {}
  }
  const obj = {}
  const searchArr = search.split("&")
  searchArr.forEach(v => {
    const index = v.indexOf("=")
    if (index !== -1) {
      const name = v.substring(0, index)
      const val = v.substring(index + 1, v.length)
      obj[name] = val
    }
  })
  return obj
}

/**
 * @Description: 验证电话号码
 * @Author: 侯湃
 * @Date: 2020/12/7
 */
export function $testPhone(value) {
  return /^1[0-9]{10}$/.test(value)
}

/**
 * @Description: 验证身份证号码
 * @Author: 侯湃
 * @Date: 2020/12/7
 */
export function $idNumberVerification(s) {
  let vcity = {
    11: "北京",
    12: "天津",
    13: "河北",
    14: "山西",
    15: "内蒙古",
    21: "辽宁",
    22: "吉林",
    23: "黑龙江",
    31: "上海",
    32: "江苏",
    33: "浙江",
    34: "安徽",
    35: "福建",
    36: "江西",
    37: "山东",
    41: "河南",
    42: "湖北",
    43: "湖南",
    44: "广东",
    45: "广西",
    46: "海南",
    50: "重庆",
    51: "四川",
    52: "贵州",
    53: "云南",
    54: "西藏",
    61: "陕西",
    62: "甘肃",
    63: "青海",
    64: "宁夏",
    65: "新疆",
    71: "台湾",
    81: "香港",
    82: "澳门",
    91: "国外"
  }

  let province = s.substr(0, 2)
  //进行开头2位数的匹配
  if (vcity[province] == undefined) {
    return false
  }
  //获取位数
  let len = s.length

  if (len == "15") {
    //身份证15位时，次序为省（3位）市（3位）年（2位）月（2位）日（2位）校验位（3位），皆为数字
    let year = s.substring(6, 8) //年
    let month = s.substring(8, 10) //月
    let day = s.substring(10, 12) //日
    let temp_date = new Date(year, parseFloat(month) - 1, parseFloat(day))
    // 对于老身份证中的你年龄则不需考虑千年虫问题而使用getYear()方法
    if (
      temp_date.getYear() != parseFloat(year) ||
      temp_date.getMonth() != parseFloat(month) - 1 ||
      temp_date.getDate() != parseFloat(day)
    ) {
      return false
    } else {
      return true
    }
  }

  if (len == "18") {
    //身份证18位时，次序为省（3位）市（3位）年（4位）月（2位）日（2位）校验位（4位），校验位末尾可能为X
    let year = s.substring(6, 10) //年
    let month = s.substring(10, 12) //月
    let day = s.substring(12, 14) //日
    let temp_date = new Date(year, parseFloat(month) - 1, parseFloat(day))
    // 这里用getFullYear()获取年份，避免千年虫问题
    if (
      temp_date.getFullYear() != parseFloat(year) ||
      temp_date.getMonth() != parseFloat(month) - 1 ||
      temp_date.getDate() != parseFloat(day)
    ) {
      return false
    } else {
      return true
    }
  }
  return false
}

/**
 * @Description: 生成唯一uuid 标识
 * @Author: 侯湃
 * @Date: 2020/12/7
 */
export function $uuid() {
  return "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    let r = (Math.random() * 16) | 0,
      v = c === "x" ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })
}

/**
 * author houpai
 * 判断数组对象中是否存在某个对象
 * @param arr 数组对象
 * @param origin(String)要匹配的某个字段
 * @param value 要匹配的字段值
 * @return {index: number, value}
 * */
export function $hasValueFromArray(arr, origin, value) {
  if (!Array.isArray) {
    //Polyfill
    Array.isArray = function (arg) {
      return Object.prototype.toString.call(arg) === "[object Array]"
    }
  }
  if (!Array.isArray(arr)) {
    throw new Error("arr 不是一个数组")
  } else {
    let flag = false //没有匹配
    let temp = {}
    let index = 0
    for (let i = 0; i < arr.length; i++) {
      if (arr[i][origin] === value) {
        flag = true
        temp = arr[i]
        index = i
        break
      }
    }
    if (!flag) {
      temp = null
    }
    return {index: index, value: temp}
  }
}

/**
 * @Description: 数组对象去重
 * @params Array,String
 * @return Array
 * @Author: 侯湃
 * @Date: 2020/12/7
 */
export function $objectArrNorepeat(arr, name) {
  let hash = {}
  return arr.reduce(function (item, next) {
    hash[next[name]] ? "" : (hash[next[name]] = true && item.push(next))
    return item
  }, [])
}


/**
 * @Description: 数组某项上移
 * @params Array,Number
 * @return Array
 * @Author: 侯湃
 * @Date: 2020/12/7
 */
export function $listMoveUp(array, index) {
  let list = array.concat([])
  if (index === 0) {
    return list
  }
  //在上一项插入该项
  list.splice(index - 1, 0, (list[index]))
  //删除后一项
  list.splice(index + 1, 1)
  return list
}

/**
 * @Description: 数组某项下移
 * @params Array,Number
 * @return Array
 * @Author: 侯湃
 * @Date: 2020/12/7
 */
export function $listMoveDown(array, index) {
  let list = array.concat([])
  if (index === (list.length - 1)) {
    return list
  }
  // 在下一项插入该项
  list.splice(index + 2, 0, (list[index]))
  // 删除前一项
  list.splice(index, 1)
  return list
}

/**
 * @Description: 验证正整数
 * @params Number
 * @return boolean
 * @Author: 侯湃
 * @Date: 2020/12/7
 */
export function $testNumber(value) {
  return /^[0-9]*[1-9][0-9]*$/.test(value)
}

/**
 * 判断数组中是否有重复
 * @param arr 数组
 * @param key 要校验的key值
 */
export function $isRepeat(arr, key) {
  var obj = {}
  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i][key]]) {
      return false
    } else {
      obj[arr[i][key]] = arr[i]
    }
  }
  return obj
}

export function deepClone(source) {
  if (!source && typeof source !== 'object') {
    throw new Error('error arguments', 'deepClone')
  }
  const targetObj = source.constructor === Array ? [] : {}
  Object.keys(source).forEach(keys => {
    if (source[keys] && typeof source[keys] === 'object') {
      targetObj[keys] = deepClone(source[keys])
    } else {
      targetObj[keys] = source[keys]
    }
  })
  return targetObj
}


