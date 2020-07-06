<template>
  <form-dialog title="限价信息增加" width="1100px" new-calss="big" :is-show="show" @update:isShow="addIsShow">
    <el-form ref="addForm" :model="addForm" label-width="105px">
      <div class="box">
        <div class="box-body">
          <el-row :gutter="10">
            <el-col :span="8">
              <el-form-item label="医保目录" prop="医保目录">
                <insurance-directory v-model="addForm.医保目录" />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="医疗收费项目" prop="医疗收费项目">
                <medical-charge-category v-model="addForm.医疗收费项目" />
              </el-form-item>
            </el-col>
          </el-row>
        </div>
      </div>
      <div class="box">
        <div class="box-header">
          <span class="box-title">限价信息</span>
        </div>
        <div class="box-body">
          <el-row :gutter="10">
            <el-col :span="8">
              <el-form-item label="医保区划" prop="医保区划">
                <insurance-area-division v-model="addForm.医保区划" />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="医保限价类型" prop="医保限价类型">
                <insurance-price-limit-type v-model="addForm.医保限价类型" />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="医保超限处理" prop="医保超限处理">
                <insurance-transfinite-dispose-type v-model="addForm.医保超限处理" />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="参保定价上限" prop="参保定价上限">
                <el-input v-model="addForm.参保定价上限" placeholder="请输入" />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="起始日期" prop="起始日期">
                <el-date-picker v-model="addForm.起始日期" type="daterange" style="width: 100%;" start-placeholder="选择日期" end-placeholder="选择日期" />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="人员类别" prop="人员类别">
                <personal-type v-model="addForm.人员类别" />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="医院级别" prop="医院级别">
                <hospital-level v-model="addForm.医院级别" />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="待遇类别" prop="待遇类别">
                <treatment-type v-model="addForm.待遇类别" />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="限价方式" prop="限价方式">
                <transfinite-type v-model="addForm.限价方式" />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="限价金额" prop="限价金额">
                <el-input v-model="addForm.限价金额" placeholder="请输入" />
              </el-form-item>
            </el-col>
          </el-row>
        </div>
      </div>
      <div class="box">
        <div class="box-header">
          <span class="box-title">历史维护记录</span>
        </div>
        <div class="box-body">
          <el-table :data="historyData" border style="width: 100%">
            <el-table-column type="expand">
              <template slot-scope="props">
                <el-form label-position="left" inline class="demo-table-expand">
                  <el-form-item label="医保区划">
                    <span>{{ props.row.医保区划 }}</span>
                  </el-form-item>
                  <el-form-item label="人员类别">
                    <span>{{ props.row.人员类别 }}</span>
                  </el-form-item>
                  <el-form-item label="医院级别">
                    <span>{{ props.row.医院级别 }}</span>
                  </el-form-item>
                  <el-form-item label="开始时间">
                    <span>{{ props.row.开始时间 }}</span>
                  </el-form-item>
                  <el-form-item label="结束时间">
                    <span>{{ props.row.结束时间 }}</span>
                  </el-form-item>
                </el-form>
              </template>
            </el-table-column>
            <el-table-column prop="医保目录编码" align="center" label="医保目录编码" />
            <el-table-column prop="医保目录名称" align="center" label="医保目录名称" />
            <el-table-column prop="医保目录限价类型" align="center" label="医保目录限价类型" />
            <el-table-column prop="医保目录超限处理方式" align="center" label="医保目录超限处理方式" width="240" />
            <el-table-column prop="医保目录定价上限金额" align="center" label="医保目录定价上限金额" width="240" />
          </el-table>
          <Pagination />
        </div>
      </div>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="cancelAdd('addForm')">取消</el-button>
      <el-button type="primary" @click="addSubmit('addForm')">保存</el-button>
    </span>
  </form-dialog>
</template>

<script>
import InsuranceDirectory from '@/components/Select/InsuranceDirectory'
import MedicalChargeCategory from '@/components/Select/MedicalChargeCategory'
import InsuranceAreaDivision from '@/components/Select/InsuranceAreaDivision'
import InsurancePriceLimitType from '@/components/Select/InsurancePriceLimitType'
import InsuranceTransfiniteDisposeType from '@/components/Select/InsuranceTransfiniteDisposeType'
import PersonalType from '@/components/Select/PersonalType'
import HospitalLevel from '@/components/Select/HospitalLevel'
import TreatmentType from '@/components/Select/TreatmentType'
import TransfiniteType from '@/components/Select/TransfiniteType'
export default {
  name: 'PercentInfoAdd',
  components: {
    InsuranceDirectory,
    MedicalChargeCategory,
    InsuranceAreaDivision,
    InsurancePriceLimitType,
    InsuranceTransfiniteDisposeType,
    PersonalType,
    TreatmentType,
    TransfiniteType,
    HospitalLevel
  },
  mixins: [],
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      addForm: {},
      historyData: [
        { '目录自付比例类别': '目录自付比例类别', '自付比例': '自付比例', '医保区划': '医保区划', '开始时间': '2020-02-02', '结束时间': '2020-02-02', '段内自付比例': '2', '医保目录编码': 'AXX0021CB828', '医保目录名称': '大力', '医保目录自付比例人员类别': '医保目录自付比例人员类别' }
      ]
    }
  },
  computed: {},
  watch: {},
  created() {
  },
  mounted() {
  },
  methods: {
    addIsShow(v) {
      this.$emit('update:show', v)
    },
    //  取消新增弹窗
    cancelAdd(formName) {
      this.$emit('update:show', false)
    },
    //  提交新增弹窗
    addSubmit(formName) {
      this.$emit('update:show', false)
      this.$emit('save')
    }
  }
}
</script>

<style scoped lang="scss"></style>
