<!-- 新增 编辑 -->
<template>
  <form-dialog
    :title="dialogTitle"
    :is-show="isDialogVisible"
    size="big"
    @update:isShow="isShow"
    @resetForm="resetForm"
  >
    <div class="box" style="height: auto">
      <box-title title-name="人员基本信息" />
      <div class="box-body" style="padding-right: 0;">
        <table-items
          :item-datas="itemsDatas"
          :form-datas="formsDatas"
        />
      </div>
    </div>

    <div class="box" style="height: auto">
      <box-title title-name="提现信息" title-need-handle>
        <el-button type="primary">查看影像档案</el-button>
        <el-button type="primary">获取账户余额</el-button>
      </box-title>
      <table-items
        :item-datas="itemsDatas1"
        :form-datas="formsDatas1"
      />
      <form-items
        ref="ruleFrom"
        :model="formDataForm"
        :rules="rules"
        :is-grid="false"
        :items-datas="formItemsDatas"
        :form-datas="formDataForm"
      />
    </div>

    <span slot="footer" class="dialog-footer">
      <el-button @click="closeDialog">关闭</el-button>
      <el-button type="primary" @click="saveEvent">保存</el-button>
    </span>
  </form-dialog>

</template>
<script>
import TableItems from '@/views/components/PageLayers/table-items'
import FormItems from '@/views/components/PageLayers/form-items'
import BoxTitle from '@/views/components/PageLayers/box-title'
export default {
  components: {
    TableItems,
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
        [
          { label: '姓名', prop: 'xxx' },
          { label: '证件号码', prop: 'xxx' },
          { label: '性别', prop: 'xxx' }
        ],
        [
          { label: '出生日期', prop: 'xxx' },
          { label: '参加工作日期', prop: 'xxx', colspan: 3 }
        ]
      ],
      formsDatas: {
        xxx: 'xxx'
      },
      formItemsDatas: [
        { label: '提现原因', prop: 'xxx', type: 'select' },
        { label: '提现类型', prop: 'xxx', type: 'select' },
        { label: '个人账户处理', prop: 'xxx', type: 'select' },
        { label: '联系电话', prop: 'xxx', type: 'input' },
        { label: '申请人姓名', prop: 'xxxx', type: 'input' },
        { label: '申请人证件号', prop: 'xxxx', type: 'input' },
        { label: '提现日期', prop: 'date', type: 'date' }
      ],
      formDataForm: {
        xxxx: '',
        xxx: '',
        date: '',
        dateRange: [],
        disease: '',
        switch: false
      },
      rules: {
        disease: [{ required: true, message: '请选择', trigger: 'change' }],
        xxx: [{ required: true, message: '请输入', trigger: 'blur' }]
      },
      itemsDatas1: [
        [
          { label: '开户银行', prop: 'xxx' },
          { label: '发卡日期', prop: 'xxx' },
          { label: '封面卡号', prop: 'xxx' }
        ],
        [
          { label: '卡状态', prop: 'xxx' },
          { label: '个人账户余额', prop: 'xxx', colspan: 3 }
        ]
      ],
      formsDatas1: {
        xxx: 'xxx'
      }
    }
  },
  methods: {
    resetForm() {
      this.$emit('closeAll', false)
      this.$refs.ruleFrom.elForm.resetFields()
    },
    closeDialog() {
      this.$emit('closeAll', false)
    },
    saveEvent() {
      this.$refs.ruleFrom.elForm.validate((valid) => {
        if (valid) {
          this.$msgSuccess('保存成功')
          this.$emit('closeAll', false)
        }
      })
    },
    isShow(v) {
      this.$emit('closeAll', false)
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
