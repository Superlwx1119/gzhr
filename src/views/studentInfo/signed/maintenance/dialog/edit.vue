<!-- 新增 编辑 -->
<template>
  <form-dialog
    :title="dialogTitle"
    :is-show="isDialogVisible"
    size="big"
    @update:isShow="isShow"
  >
    <div class="box" style="height: auto">
      <box-title title-name="选择条件" />
      <form-items :items-datas="itemsDatas" :form-datas="dataForm" :is-grid="false" />
    </div>
    <div class="box" style="height: auto">
      <box-title title-name="大专院校基本信息" />
      <form-items :items-datas="itemsDatas1" :form-datas="dataForm" :is-grid="false" />
    </div>
    <div class="box" style="height: auto">
      <box-title title-name="大专院校联系信息" />
      <form-items :items-datas="itemsDatas2" :form-datas="dataForm" :is-grid="false" />
    </div>
    <div class="box" style="height: auto">
      <box-title title-name="协议维护信息" />
      <form-items :items-datas="itemsDatas3" :form-datas="dataForm" :is-grid="false" />
    </div>
    <span slot="footer" class="dialog-footer">
      <el-button @click="closeDialog">关闭</el-button>
      <el-button type="primary" @click="saveEvent">保存</el-button>
    </span>
  </form-dialog>
</template>
<script>
import BoxTitle from '@/views/components/PageLayers/box-title'
import FormItems from '@/views/components/PageLayers/form-items'
export default {
  components: {
    FormItems,
    BoxTitle
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
      itemsDatas: [
        { label: '查询条件', prop: 'xxx', type: 'input', span: 8 },
        { label: '单位电脑号', prop: 'xxx', type: 'input', span: 8 },
        { label: '单位名称', prop: 'xxx1', type: 'input', span: 8 }
      ],
      itemsDatas1: [
        { label: '单位管理码', prop: 'xxx', type: 'input', span: 8 },
        { label: '单位名称', prop: 'xxx', type: 'input', span: 8 },
        { label: '名称', prop: 'xxx1', type: 'input', span: 8 },
        { label: '医保区划', prop: 'xxx1', type: 'select', span: 8 },
        { label: '邮政编码', prop: 'xxx1', type: 'input', span: 8 },
        { label: '法定代表人', prop: 'xxx1', type: 'input', span: 8 },
        { label: '统一社会信用', prop: 'xxx1', type: 'input', span: 8 },
        { label: '单位地址', prop: 'xxx1', type: 'input', span: 8 }
      ],
      itemsDatas2: [
        { label: '负责人姓名', prop: 'xxx', type: 'input', span: 8 },
        { label: '人联系电话', prop: 'xxx', type: 'input', span: 8 },
        { label: '负责人手机', prop: 'xxx1', type: 'input', span: 8 },
        { label: '经办人姓名', prop: 'xxx1', type: 'input', span: 8 },
        { label: '经办人电话', prop: 'xxx1', type: 'input', span: 8 },
        { label: '经办人手机', prop: 'xxx1', type: 'input', span: 8 },
        { label: '传真', prop: 'xxx1', type: 'input', span: 8 },
        { label: '电子邮箱', prop: 'xxx1', type: 'input', span: 8 }
      ],
      itemsDatas3: [
        { label: '维护人', prop: 'xxx', type: 'input', span: 8 },
        { label: '维护工号', prop: 'xxx', type: 'input', span: 8 },
        { label: '维护时间', prop: 'xxx', type: 'input', span: 8 },
        { label: '生效时间', prop: 'xxx', type: 'date', span: 8 },
        { label: '失效时间', prop: 'xxx', type: 'date', span: 8 },
        { label: '有效标志', prop: 'xxx', type: 'select', span: 8 },
        { label: '修改人', prop: 'xxx', type: 'input', span: 8 },
        { label: '修改人工号', prop: 'xxx', type: 'input', span: 8 },
        { label: '修改时间', prop: 'xxx', type: 'input', span: 8 },
        { label: '删除人', prop: 'xxx', type: 'input', span: 8 },
        { label: '删除人工号', prop: 'xxx', type: 'input', span: 8 },
        { label: '删除时间', prop: 'xxx', type: 'input', span: 8 },
        { label: '支付比例', prop: 'xxx', type: 'input', span: 8 },
        { label: '支付比例1', prop: 'xxx', type: 'input', span: 8 },
        { label: 'pos机编号', prop: 'xxx', type: 'input', span: 8 },
        { label: '备注', prop: 'xxx', type: 'textarea', span: 24 }
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
    }
  }
}
</script>
<style lang="scss" scoped>
.special-form {
  /deep/.el-form {
    .el-form-item__label {
      display: flex;
      justify-content: center;
      flex-direction: column;
      height: 32px;
      line-height: 14px;
    }
  }
}
.table-transfer-box {
  padding: 10px;
  box-sizing: border-box;
  border: 1px solid #dcdfe6;
  border-radius: 5px;
}
</style>
