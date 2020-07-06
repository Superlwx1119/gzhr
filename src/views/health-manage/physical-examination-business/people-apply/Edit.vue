<template>
  <!-- 体检人员申请修改-->
  <form-dialog title="体检人员申请修改" width="1000px" new-class="big" :is-show="visible" @update:isShow="updateIsShow">
    <section class="layer">
      <div class="box">
        <div class="box-header">
          <span class="box-title">人员信息</span>
        </div>
        <div class="box-body">
          <BaseInfo :options="infoOptions" :info="infoForm" />
        </div>
      </div>
    </section>
    <section class="layer">
      <div class="box">
        <div class="box-header">
          <span class="box-title">申请信息</span>
        </div>
        <div class="box-body">
          <FormItems ref="applyForm" :is-grid="false" :items-datas="applyItems" :model="applyForm" :form-datas="applyForm">
            <template slot="institutions">
              <health-institution v-model="applyForm.institutions" />
            </template>
            <template slot="package">
              <health-package v-model="applyForm.package" />
            </template>
          </FormItems>
        </div>
      </div>
    </section>
    <span slot="footer" class="dialog-footer">
      <el-button @click="cancelEdit()">取消</el-button>
      <el-button type="primary" @click="submit('form')">保存</el-button>
    </span>
  </form-dialog>
</template>

<script>
import BaseInfo from '@/components/BaseInfo'
import HealthInstitution from '../../../../components/Select/health-manage/HealthInstitution'
import HealthPackage from '../../../../components/Select/health-manage/HealthPackage'

export default {
  name: '',
  components: {
    HealthPackage,
    HealthInstitution,
    BaseInfo
  },
  props: {
    show: { type: Boolean, default: () => false }
  },
  data() {
    return {
      visible: this.show,
      infoOptions: [
        { label: '姓名', key: 'name' },
        { label: '证件号码', key: 'cardNo' },
        { label: '性别', key: 'sex' },
        { label: '公务员级别', key: 'level' },
        { label: '出生日期', key: 'birth' },
        { label: '所属单位', key: 'company' },
        { label: '居住地址', key: 'address' }
      ],
      infoForm: {},
      applyItems: [
        { label: '电话', prop: 'mobile', type: 'input' },
        { label: '体检年度', prop: 'year', type: 'dateYear' },
        { label: '体检机构', prop: 'institutions', type: 'custom', slotName: 'institutions' },
        { label: '体检套餐', prop: 'package', type: 'custom', slotName: 'package' },
        { label: '体检开始日期', prop: 'beginDate', type: 'date' },
        { label: '体检结束日期', prop: 'endDate', type: 'date' },
        { label: '体检原因', prop: 'reason', type: 'textarea', span: 24 }
      ],
      applyForm: {},
      rules: {}
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
    this.infoForm = { name: '张三', cardNo: '430602197812218877', sex: '男', level: '无', birth: '2020-02-02', company: '阿里巴巴', address: '杭州市' }
  },
  methods: {
    updateIsShow(v) {
      this.$emit('update:show', v)
    },
    resetForm() {
      this.$refs['applyForm']['elForm'].resetFields()
    },
    submit() {
      this.$refs['applyForm']['elForm'].validate((valid) => {
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
      this.$refs['applyForm']['elForm'].clearValidate()
      this.$emit('update:show', false)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
