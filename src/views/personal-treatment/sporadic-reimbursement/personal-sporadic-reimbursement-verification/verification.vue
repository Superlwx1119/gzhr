<template>
  <!--个人零星报销核查-->
  <form-dialog title="个人零星报销核查" width="1200px" new-class="big" :is-show="visible" @update:isShow="updateIsShow">
    <business-info :info="medicalForm" />
    <documents-info :info="medicalForm" />
    <cost-info />
    <!--    核查信息-->
    <section class="layer">
      <div class="box">
        <div class="box-header">
          <span class="box-title">核查信息</span>
        </div>
        <div class="box-body">
          <FormItems ref="form" :model="verificationForm" :is-grid="false" :items-datas="itemsDatas" :rules="rules" :form-datas="verificationForm" />
        </div>
      </div>
    </section>
    <span slot="footer" class="dialog-footer">
      <el-button @click="cancelEdit">取消</el-button>
      <el-button type="primary" @click="submit">核查</el-button>
    </span>
  </form-dialog>
</template>

<script>
import BusinessInfo from '../components/dialog/business-info'
import DocumentsInfo from '../components/dialog/documents-info'
import CostInfo from '../components/dialog/cost-info'
import FormItems from '@/views/components/PageLayers/form-items'
export default {
  name: '',
  components: { CostInfo, DocumentsInfo, BusinessInfo, FormItems },
  props: {
    show: { type: Boolean, default: () => false }
  },
  data() {
    return {
      visible: this.show,
      medicalForm: {},
      itemsDatas: [
        { label: '核查电话', prop: '核查电话1', type: 'input' },
        { label: '是否属实', prop: '是否属实1', type: 'switch' },
        { label: '是否异地记账', prop: '是否异地记账1', type: 'switch' },
        { label: '不符内容', prop: '不符内容1', type: 'textarea', span: 24 }
      ],
      verificationForm: {
        是否属实1: true,
        是否异地记账1: true
      },
      rules: {
        核查电话1: { required: true, message: '请输入核查电话', trigger: 'blur' },
        是否属实1: { required: true, message: '请选择是否属实', trigger: 'change' },
        是否异地记账1: { required: true, message: '请选择是否异地记账', trigger: 'change' }
      }
    }
  },
  computed: {
  },
  watch: {
    show: function(newVal, oldVal) {
      this.visible = this.show
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
    submit() {
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
