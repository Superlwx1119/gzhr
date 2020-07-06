<template>
  <!--  特殊业务信息-->
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
            <el-form-item label="生育日期" prop="生育日期">
              <el-date-picker v-model="infoForm.生育日期" type="date" style="width: 100%;" :disabled="isDisabled" placeholder="选择时间" />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="生育类别" prop="生育类别">
              <fertility-type v-model="infoForm.生育类别" :disabled="isDisabled" />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="是否并发症" prop="是否并发症" style="border-bottom: 1px solid transparent;">
              <el-switch v-model="infoForm.是否并发症" :disabled="isDisabled" />  {{ infoForm.是否并发症 ? '是' : '否' }}
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="妊娠日期" prop="妊娠日期">
              <el-date-picker v-model="infoForm.妊娠日期" type="date" style="width: 100%;" :disabled="isDisabled" placeholder="选择时间" />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="计生服务证号" prop="计生服务证号">
              <el-input v-model="infoForm.计生服务证号" :disabled="isDisabled" style="width: 100%;" placeholder="请输入" />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="计划生育类别" prop="计划生育类别">
              <el-date-picker v-model="infoForm.计划生育类别" type="date" style="width: 100%;" :disabled="isDisabled" placeholder="选择时间" />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="晚育标志" prop="晚育标志" style="border-bottom: 1px solid transparent;">
              <el-switch v-model="infoForm.晚育标志" :disabled="isDisabled" />  {{ infoForm.晚育标志 ? '是' : '否' }}
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="早产标志" prop="早产标志" style="border-bottom: 1px solid transparent;">
              <el-switch v-model="infoForm.早产标志" :disabled="isDisabled" />  {{ infoForm.早产标志 ? '是' : '否' }}
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="胎次" prop="胎次">
              <el-input v-model="infoForm.胎次" :disabled="isDisabled" style="width: 100%;" placeholder="请输入" />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="孕周数" prop="孕周数">
              <el-input v-model="infoForm.孕周数" :disabled="isDisabled" style="width: 100%;" placeholder="请输入" />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="胎儿数" prop="胎儿数">
              <el-input v-model="infoForm.胎儿数" :disabled="isDisabled" style="width: 100%;" placeholder="请输入" />
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
import FertilityType from '@/components/Select/FertilityType'
import BaseInfo from '@/components/BaseInfo'

export default {
  name: 'SpecialBusinessInfo',
  components: {
    SporadicReimbursementReason,
    SporadicReimbursementType,
    MedicalInstitution,
    MedicalCategory,
    FertilityType,
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
        { label: '生育日期', key: '生育日期' },
        { label: '生育类别', key: '生育类别' },
        { label: '是否并发症', key: '是否并发症' },
        { label: '妊娠日期', key: '妊娠日期' },
        { label: '计生服务证号', key: '计生服务证号' },
        { label: '计划生育类别', key: '计划生育类别' },
        { label: '晚育标志', key: '晚育标志' },
        { label: '早产标志', key: '早产标志' },
        { label: '胎次', key: '胎次' },
        { label: '孕周数', key: '孕周数' },
        { label: '胎儿数', key: '胎儿数' },
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
