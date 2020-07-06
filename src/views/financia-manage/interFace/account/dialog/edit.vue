<!-- 新增 编辑 -->
<template>
  <form-dialog
    :title="dialogTitle"
    :is-show="isDialogVisible"
    size="big"
    @update:isShow="isShow"
  >
    <el-table :data="tableData">
      <el-table-column prop="name" label="序号" align="center" />
      <el-table-column prop="name" label="账套号" align="center" />
      <el-table-column prop="name" label="财务期间" align="center" />
      <el-table-column prop="name" label="凭证类型" align="center" />
      <el-table-column prop="name" label="凭证号" align="center" />
      <el-table-column prop="name" label="摘要" align="center" />
      <el-table-column prop="name" label="附件数" align="center" />
      <el-table-column prop="name" label="凭证日期" align="center" />
      <el-table-column prop="name" label="制单人" align="center" />
      <el-table-column prop="name" label="制单时间" align="center" />
    </el-table>
    <el-tabs v-model="activeName" type="border-card" @tab-click="handleClick">
      <el-tab-pane label="凭着分录" name="first">
        <my-table-view :data="tableData" :columns="columns" />
      </el-tab-pane>
      <el-tab-pane label="业务记录" name="second">
        <my-table-view :data="tableData" :columns="columns" />
      </el-tab-pane>
    </el-tabs>
    <span slot="footer" class="dialog-footer">
      <el-button @click="closeDialog">关闭</el-button>
      <el-button type="primary" @click="saveEvent">保存</el-button>
    </span>
  </form-dialog>
</template>
<script>
// import BoxTitle from '@/views/components/PageLayers/box-title'
export default {
  components: {
    // BoxTitle
  },
  model: {
    prop: 'isDialogVisible',
    event: 'closeAll'
  },
  props: {
    isDialogVisible: {
      type: Boolean,
      default: false
    },
    dialogTitle: {
      type: String,
      default: '标题'
    }
  },
  data() {
    return {
      activeName: 'first',
      tableData: [
        { name: 'xxx', code: 'xxx', nameCode: 'xxx' }
      ],
      columns: [
        { type: 'index', label: '序号', width: '55px' },
        { prop: 'nameCode', label: '账套号', align: 'center' },
        { prop: 'nameCode', label: '财务期间', align: 'center' },
        { prop: 'code', label: '凭证类型', align: 'center' },
        { prop: 'nameCode', label: '凭证号', align: 'center' },
        { prop: 'nameCode', label: '摘要', minWidth: '200px', align: 'center' },
        { prop: 'code', label: '附件数', align: 'center' },
        { prop: 'code', label: '凭证日期', align: 'center' },
        { prop: 'code', label: '制单人', align: 'center' },
        { prop: 'code', label: '制单时间', align: 'center' }
      ],
      dataForm: {
        xxx: '',
        xxx1: ''
      }
    }
  },
  methods: {
    // resetForm() {
    //   this.$emit('closeAll', false)
    //   this.$refs.ruleFrom.elForm.resetFields()
    // },
    closeDialog() {
      this.$emit('closeAll', false)
    },
    saveEvent() {
      this.$msgSuccess('保存成功')
      this.$emit('closeAll', false)
    },
    // },
    isShow(v) {
      this.$emit('closeAll', false)
    },
    handleClick(tab, event) {
      console.log(tab, event)
    }
  }
}
</script>
<style lang="scss" scoped>
// .special-form {
//   /deep/.el-form {
//     .el-form-item__label {
//       display: flex;
//       justify-content: center;
//       flex-direction: column;
//       height: 32px;
//       line-height: 14px;
//     }
//   }
// }
// .table-transfer-box {
//   padding: 10px;
//   box-sizing: border-box;
//   border: 1px solid #dcdfe6;
//   border-radius: 5px;
// }
</style>
