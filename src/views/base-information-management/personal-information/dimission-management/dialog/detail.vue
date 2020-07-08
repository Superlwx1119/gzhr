<template>
  <form-dialog
    class="audit-dialog-wrapper"
    :title="dialogTitle"
    :is-show="isDialogVisible"
    size="big"
    width="1200px"
    @update:isShow="isShow"
  >
    <div class="box">
      <div class="box-body">
        <table class="table-data total-info">
          <tbody>
            <tr>
              <td>姓名</td>
              <td>姓名</td>
              <td>证件号码</td>
              <td>证件号码</td>
              <td>性别</td>
              <td>性别</td>
            </tr>
            <tr>
              <td>出生日期</td>
              <td>出生日期</td>
              <td>单位名称</td>
              <td>单位名称</td>
              <td>参加工作时间</td>
              <td>参加工作时间</td>
            </tr>
            <tr>
              <td>退休时人员类别</td>
              <td>退休时人员类别</td>
              <td>退休时级别</td>
              <td>退休时级别</td>
              <td>退休时任职务</td>
              <td>退休时任职务</td>
            </tr>
            <tr>
              <td>退休后管理单位</td>
              <td>退休后管理单位</td>
              <td>退休日期</td>
              <td>退休日期</td>
              <td>退休时年龄</td>
              <td>退休时年龄</td>
            </tr>
            <tr>
              <td>退休批准文号</td>
              <td>退休批准文号</td>
              <td>退休批准单位</td>
              <td colspan="3">退休批准单位</td>
            </tr>
            <tr rowspan="2">
              <td>备注</td>
              <td colspan="5">备注</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <span slot="footer" class="dialog-footer">
      <el-button @click="closeDialog">关闭</el-button>
    </span>
  </form-dialog>
</template>

<script>

export default {
  components: {
  },
  model: {
    prop: 'isDialogVisible',
    event: 'closeAll'
  },
  props: {
    detailInfo: {
      type: Object,
      default: function() { return {} }
    },
    dialogTitle: {
      type: String,
      default: '信息查看'
    },
    isDialogVisible: {
      type: Boolean,
      default: false
    },
    operation: {
      type: String,
      default: 'detail'
    }
  },
  data() {
    return {
      addForm: {},
      activeName: '1',
      isShowAdd: false,
      loading: false
    }
  },
  methods: {
    closeDialog() {
      this.$emit('closeAll', false)
    },
    isShow(v) {
      this.$emit('closeAll', false)
    }
  }
}
</script>

<style scoped lang="scss">

</style>
