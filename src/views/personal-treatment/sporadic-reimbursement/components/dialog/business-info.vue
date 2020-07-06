<template>
  <!--  业务信息-->
  <section class="layer">
    <div class="box">
      <div class="box-header">
        <span class="box-title">业务信息</span>
      </div>
      <div class="box-body">
        <el-row v-if="isEdit" :gutter="10">
          <el-col :span="8">
            <el-form-item label="零报原因" prop="零报原因">
              <sporadic-reimbursement-reason v-model="infoForm.零报原因" :disabled="isDisabled" />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="就医日期" prop="就医日期">
              <el-date-picker v-model="infoForm.就医日期" type="date" style="width: 100%;" :disabled="isDisabled" placeholder="选择时间" />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="结束日期" prop="结束日期">
              <el-date-picker v-model="infoForm.结束日期" type="date" style="width: 100%;" :disabled="isDisabled" placeholder="选择时间" />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="医疗机构" prop="医疗机构">
              <medical-institution v-model="infoForm.医疗机构" :disabled="isDisabled" @change="medicalChange" />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="医疗机构编码" prop="医疗机构编码">
              <el-input v-model="infoForm.医疗机构编码" style="width: 100%;" disabled />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="住院(门诊)号" prop="住院(门诊)号">
              <el-input v-model="infoForm.住院门诊号" style="width: 100%;" :disabled="isDisabled" placeholder="请输入" />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="零报类型" prop="零报类型">
              <sporadic-reimbursement-type v-model="infoForm.零报类型" :disabled="isDisabled" />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="医疗类型" prop="医疗类型">
              <medical-category v-model="infoForm.医疗类型" :disabled="isDisabled" />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="基金先行支付" prop="基金先行支付" style="border-bottom: 1px solid transparent;">
              <el-switch v-model="infoForm.基金先行支付" :disabled="isDisabled" />  {{ infoForm.基金先行支付 ? '是' : '否' }}
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="诊断疾病" prop="诊断疾病">
              <Diagnosis v-model="infoForm.诊断疾病" :disabled="isDisabled" />
            </el-form-item>
          </el-col>
          <el-col :span="16">
            <el-form-item label="备注" prop="备注">
              <el-input v-model="infoForm.备注" :disabled="isDisabled" style="width: 100%;" placeholder="请输入" />
            </el-form-item>
          </el-col>
        </el-row>
        <BaseInfo v-else :options="options" :info="infoForm" />
      </div>
    </div>
  </section>
</template>

<script>
import SporadicReimbursementReason from '@/components/Select/SporadicReimbursementReason'
import SporadicReimbursementType from '@/components/Select/SporadicReimbursementType'
import MedicalCategory from '@/components/Select/MedicalCategory'
import MedicalInstitution from '@/components/Select/MedicalInstitution'
import Diagnosis from '@/components/Select/Diagnosis'
import BaseInfo from '@/components/BaseInfo'

export default {
  name: 'BusinessInfo',
  components: {
    SporadicReimbursementReason,
    SporadicReimbursementType,
    MedicalInstitution,
    MedicalCategory,
    Diagnosis,
    BaseInfo
  },
  mixins: [],
  props: {
    info: {
      type: Object,
      default: () => { return {} }
    },
    isDisabled: {
      type: Boolean,
      default: () => { return false }
    },
    isEdit: {
      type: Boolean,
      default: () => { return false }
    }
  },
  data() {
    return {
      options: [
        { label: '零报原因', key: '零报原因' },
        { label: '就医日期', key: '就医日期' },
        { label: '结束日期', key: '结束日期' },
        { label: '医疗机构', key: '医疗机构' },
        { label: '医疗机构编码', key: '医疗机构编码' },
        { label: '住院(门诊)号', key: '住院(门诊)号' },
        { label: '零报类型', key: '零报类型' },
        { label: '医疗类型', key: '医疗类型' },
        { label: '基金先行支付', key: '基金先行支付' },
        { label: '诊断疾病', key: '诊断疾病' },
        { label: '备注', key: '备注' }
      ]
    }
  },
  computed: {
    infoForm: function() {
      return this.info
    }
  },
  watch: {},
  created() {
  },
  mounted() {
  },
  methods: {
    //  医疗机构选择
    medicalChange(v) { this.infoForm.医疗机构编码 = v }
  }
}
</script>

<style scoped>

</style>
