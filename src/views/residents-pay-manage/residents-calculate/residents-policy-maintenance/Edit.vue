<template>
  <!-- 居民政策信息修改-->
  <form-dialog title="居民政策信息修改" width="1000px" new-class="big" :is-show="visible" @update:isShow="updateIsShow">
    <FormItems ref="form" :is-grid="false" :items-datas="itemsDatas" :model="editForm" :rules="rules" :form-datas="editForm">
      <template slot="医保区划1">
        <insurance-area v-model="editForm.医保区划1" />
      </template>
      <template slot="险种1">
        <insurance-type v-model="editForm.险种1" />
      </template>
      <template slot="人员类别1">
        <personal-type v-model="editForm.人员类别1" />
      </template>
    </FormItems>
    <span slot="footer" class="dialog-footer">
      <el-button @click="cancelEdit()">取消</el-button>
      <el-button type="primary" @click="submit('form')">保存</el-button>
    </span>
  </form-dialog>
</template>

<script>
import FormItems from '@/views/components/PageLayers/form-items'
import InsuranceArea from '@/components/Select/residents-pay-manage/InsuranceArea'
import PersonalType from '@/components/Select/PersonalType'
import InsuranceType from '@/components/Select/InsuranceType'

export default {
  name: '',
  components: { InsuranceType, PersonalType, InsuranceArea, FormItems },
  props: {
    form: { type: Object, default: () => { return {} } },
    show: { type: Boolean, default: () => false }
  },
  data() {
    return {
      visible: this.show,
      editForm: this.form,
      itemsDatas: [
        { label: '社保业务编号', prop: '社保业务系统编号1', type: 'select' },
        { label: '地市', prop: '地市1', type: 'select' },
        { label: '医保区划', prop: '医保区划1', type: 'custom' },
        { label: '险种', prop: '险种1', type: 'custom' },
        { label: '人员类别', prop: '人员类别1', type: 'custom' },
        { label: '补助类型', prop: '补助类型1', type: 'select' },
        { label: '生效年月', prop: '生效年月1', type: 'dateMoon' },
        { label: '失效年月', prop: '失效年月1', type: 'dateMoon' },
        { label: '人群类别', prop: '人群类别1', type: 'select' },
        { label: '计算周期', prop: '计算周期1', type: 'select' },
        { label: '政策描述', prop: '政策描述1', type: 'input' },
        { label: '个人缴纳(元)', prop: '个人缴纳1', type: 'input' },
        { label: '个人缴纳划入', prop: '个人缴纳划入1', type: 'input' },
        { label: '中央财政(元)', prop: '中央财政1', type: 'input' },
        { label: '省财政(元)', prop: '省财政1', type: 'input' },
        { label: '市财政(元)', prop: '市财政1', type: 'input' },
        { label: '县财政(元)', prop: '县财政1', type: 'input' },
        { label: '民政(元)', prop: '民政1', type: 'input' },
        { label: '残联(元)', prop: '残联1', type: 'input' },
        { label: '计生(元)', prop: '计生1', type: 'input' }
      ],
      rules: {
        社保业务系统编号1: { required: true, message: '请选择社保业务系统编号', trigger: 'change' },
        医保区划1: { required: true, message: '请选择医保区划', trigger: 'change' },
        地市1: { required: true, message: '请选择地市', trigger: 'change' },
        险种1: { required: true, message: '请选择险种', trigger: 'change' },
        人员类别1: { required: true, message: '请选择人员类别', trigger: 'change' },
        补助类型1: { required: true, message: '请选择补助类型', trigger: 'change' },
        生效年月1: { required: true, message: '请选择生效年月', trigger: 'change' },
        失效年月1: { required: true, message: '请选择失效年月', trigger: 'change' },
        人群类别1: { required: true, message: '请选择人群类别', trigger: 'change' },
        计算周期1: { required: true, message: '请选择计算周期', trigger: 'change' },
        政策描述1: { required: true, message: '请输入政策描述', trigger: 'blur' }
      }
    }
  },
  computed: {
  },
  watch: {
    show: function(newVal, oldVal) {
      this.visible = this.show
    },
    form: function(newVal, oldVal) {
      this.editForm = this.form
    }
  },
  created() {
  },
  mounted() {
  },
  methods: {
    updateIsShow(v) {
      this.$emit('update:show', v)
    },
    resetForm() {
      this.$refs['form']['elForm'].resetFields()
    },
    submit(formName) {
      this.$refs['form']['elForm'].validate((valid) => {
        if (valid) {
          this.cancelEdit()
          this.$msgSuccess('成功')
        } else {
          return false
        }
      })
    },
    cancelEdit() {
      this.visible = false
      this.$refs['form']['elForm'].clearValidate()
      this.$emit('update:show', false)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
