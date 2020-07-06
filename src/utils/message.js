import { MessageBox, Message } from 'element-ui'
import { getCodeByType } from '@/api/Common/Request'
/**
 * @author 封装 element-ui 确认框弹框
 * @param text
 * @param type
 * @returns {Promise}
 */
export function handleConfirm(text = '确定执行此操作吗？', type = 'danger') {
  return MessageBox.confirm(`<div class="myalert-header">操作提醒</div><div class="myalert-content">${text}</div></div>`, {
    confirmButtonText: '确定',
    dangerouslyUseHTMLString: true,
    cancelButtonText: '取消',
    type: 'warning'
  })
}

/**
 * @author 封装 element-ui 成功消息提示
 * @param text
 * @param type
 * @returns {Promise}
 */
export function msgSuccess(msg = '操作成功', type = 'success') {
  return Message({
    type: 'success',
    dangerouslyUseHTMLString: true,
    message: `<strong>操作成功</strong><p>${msg}</p>`,
    duration: 1000
  })
}
/**
 * @author 封装 element-ui 失败消息提示
 * @param text
 * @param type
 * @returns {Promise}
 */
export function msgError(msg = '操作失败', type = 'success') {
  return MessageBox.alert(`<div class="myalert-header">操作失败</div>
    <div class="myalert-content">${msg}</div>`, {
    dangerouslyUseHTMLString: true, confirmButtonText: '确定',
    type: 'error'
  })
}
/**
 *保存修改api封装
 */
export function saveAddministrativeDomain(myapi = Function, form, myfuntion) {
  this.$refs.addForm.validate((valid) => {
    if (valid) {
      let params = {}
      params = Object.assign({}, form)
      myapi(params).then(res => {
        console.log(res)
        if (res.code === 0) {
          if (myfuntion) {
            return myfuntion(form)
          } else {
            this.$msgSuccess(res.message)
            this.$emit('saveAddministrativeDomain', form)
          }
        } else {
          this.$msgError(res.message)
        }
      }).catch(error => error)
    }
  })
}
/**
 *查询api封装
 */
export function serch(myapi = Function, form, myfuntion) {
  this.loading = true
  let params = {}
  params = Object.assign({}, form, this.pageInfo)
  myapi(params).then(res => {
    if (res.code === 0) {
      this.tableData = res.data.list
      const pageInfo = {
        pageNum: res.data.pageNum,
        pageSize: res.data.pageSize,
        total: res.data.total
      }
      this.pageInfo = Object.assign({}, pageInfo)
      this.loading = false
    } else {
      this.$msgError(res.message)
      this.loading = false
    }
  }).catch(error => {
    this.loading = false
    console.log(error)
  })
}
/**
 *删除api封装
 */
export function del(myapi = Function, params) {
  myapi(params).then(res => {
    if (res.code === 0) {
      this.$msgSuccess(res.message)
      this.search()
    } else {
      this.$msgError(res.message)
    }
  }).catch(error => {
    console.log(error)
  })
}
/**
 *查询码表封装
 */
export function getType(params, myfuntion) {
  getCodeByType({ codeType: params }).then(res => {
    console.log(res)
    if (res.code === 0) {
      if (myfuntion) {
        return myfuntion(res.data)
      } else {
        // this.$msgSuccess(res.message)
        const dictionary = {}
        dictionary[params] = res.data
        this.$store.getters.dictionary.dictionary = dictionary
        // this.$store.commit('setDictionary')
      }
    } else {
      this.$msgError(res.message)
    }
  }).catch(error => {
    console.log(error)
  })
}
// Vue.prototype.$openLoadingxx = function() {
//   const loading = this.$loading({ // 声明一个loading对象
//     lock: true, // 是否锁屏
//     text: '', // 加载动画的文字
//     spinner: 'el-icon-loading', // 引入的loading图标
//     background: 'hsla(0,0%,100%,.9)', // 背景颜色
//     target: document.querySelector('.el-table'), // 需要遮罩的区域document.querySelector('.div1').el-table__body-wrapper
//     body: false,
//     customClass: 'mask' // 遮罩层新增类名
//   })
//   console.log(loading.close, '1')
//   // setTimeout(function() { // 设定定时器，超时5S后自动关闭遮罩层，避免请求失败时，遮罩层一直存在的问题
//   //   loading.close() // 关闭遮罩层
//   // }, 5000)
//   return loading
// }
// Vue.prototype.$openLoading = Loading.service({ // 声明一个loading对象
//   lock: true, // 是否锁屏
//   text: '', // 加载动画的文字
//   spinner: 'el-icon-loading', // 引入的loading图标
//   background: 'rgba(0, 0, 0, 0.8)', // 背景颜色
//   target: document.querySelector('.el-table'), // 需要遮罩的区域document.querySelector('.div1').el-table__body-wrapper
//   body: false,
//   customClass: 'mask' // 遮罩层新增类名
// })
