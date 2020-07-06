<template>
  <form-dialog :title="dialogTitle" :is-show="isDialogVisible" @update:isShow="isShow" @resetForm="resetForm">
    <form-items
      ref="ruleFrom"
      :model="dataForm"
      :rules="rules"
      :is-grid="false"
      :items-datas="itemsDatas"
      :form-datas="dataForm"
    />
    <span slot="footer" class="dialog-footer">
      <el-button @click="close">取消</el-button>
      <el-button type="primary" @click="save">保存</el-button>
    </span>
  </form-dialog>
</template>

<script>
export default {
  props: {
    dialogTitle: {
      type: String,
      default: ''
    },
    isDialogVisible: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      itemsDatas: [
        { label: '医疗机构编码', prop: '医疗机构编码', type: 'input' },
        { label: '机构名称', prop: '机构名称', type: 'input' },
        { label: '机构级别', prop: '机构级别', type: 'select' },
        { label: '所属省', prop: '所属省', type: 'select' },
        { label: '所属市', prop: '所属市', type: 'select' },
        { label: '所属区', prop: '所属区', type: 'select' },
        { label: '机构登记', prop: '机构登记', type: 'select' },
        { label: '机构类别', prop: '机构类别', type: 'select' },
        { label: '异地类型', prop: '异地类型', type: 'select' },
        { label: '单位地址', prop: '单位地址', type: 'input' },
        { label: '邮政编码', prop: '邮政编码', type: 'input' },
        { label: '联系人', prop: '联系人', type: 'input' },
        { label: '联系电话', prop: '联系电话', type: 'input' },
        { label: '维护人工号', prop: '维护人工号', type: 'input' },
        { label: '维护人', prop: '维护人', type: 'input' },
        { label: '维护时间', prop: '维护时间', type: 'input' },
        { label: '复核人工号', prop: '复核人工号', type: 'input' },
        { label: '复核时间', prop: '复核时间', type: 'input' },
        { label: '备注', prop: '备注', type: 'input', span: 24 }
      ],
      dataForm: {
        '医疗机构编码': '',
        '机构名称': '',
        '机构级别': '',
        '所属省': '',
        '所属市': '',
        '所属区': '',
        '机构登记': '',
        '机构类别': '',
        '异地类型': '',
        '单位地址': '',
        '邮政编码': '',
        '联系人': '',
        '联系电话': '',
        '维护人工号': '',
        '维护人': '',
        '维护时间': '',
        '复核人工号': '',
        '复核时间': '',
        '备注': ''
      },
      rules: {
        医疗机构编码: [{ required: true, message: '请输入', trigger: 'blur' }],
        机构名称: [{ required: true, message: '请输入', trigger: 'blur' }],
        机构级别: [{ required: true, message: '请选择', trigger: 'change' }],
        所属省: [{ required: true, message: '请选择', trigger: 'change' }],
        所属市: [{ required: true, message: '请选择', trigger: 'change' }],
        异地类型: [{ required: true, message: '请选择', trigger: 'change' }]
      }
    }
  },
  watch: {},
  methods: {
    close() {
      this.$emit('update:isShow', false)
    },
    resetForm() {
      this.$refs.ruleFrom.elForm.resetFields()
      this.$emit('update:isShow', false)
    },
    isShow(v) {
      this.$emit('update:isShow', v)
    },
    save() {
      this.$refs.ruleFrom.elForm.validate((valid) => {
        if (valid) {
          this.$msgSuccess('保存成功')
          this.$emit('update:isShow', false)
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

