<template>
  <!--  医疗服务项目业务属性信息维护-->
  <div class="drugInfoMaintenance item4">
    <section class="layer layer-query">
      <div class="box">
        <ConditionHeader />
        <div class="box-body query">
          <el-form ref="searchForm" :model="searchForm" label-width="105px">
            <el-row :gutter="10">
              <el-col :md="12" :lg="8" :xl="6">
                <el-form-item label="医保目录" prop="医保目录">
                  <insurance-directory v-model="searchForm.医保目录" />
                </el-form-item>
              </el-col>
              <el-col :md="12" :lg="8" :xl="6">
                <el-form-item label="医疗收费项目" prop="医疗收费项目类别">
                  <medical-charge-category v-model="searchForm.医疗收费项目类别" />
                </el-form-item>
              </el-col>
              <el-col :md="12" :lg="8" :xl="6">
                <el-form-item label="审核状态" prop="审核状态">
                  <audit-status v-model="searchForm.审核状态" />
                </el-form-item>
              </el-col>
              <el-col :md="12" :lg="8" :xl="6">
                <el-form-item label="起始时间" prop="录入时间">
                  <el-date-picker v-model="searchForm.录入时间" type="daterange" style="width: 100%;" start-placeholder="选择时间" end-placeholder="选择时间" />
                </el-form-item>
              </el-col>
              <el-col :md="24" :lg="16" :xl="24" style="text-align: right">
                <el-button @click="reset('searchForm')">重置</el-button>
                <el-button type="primary" @click="search('searchForm')">查询</el-button>
              </el-col>
            </el-row>
          </el-form>
        </div>
      </div>
    </section>
    <section class="layer layer-result">
      <div class="layer-tab">
        <div class="box">
          <div class="box-body">
            <el-tabs v-model="activeName" type="card">
              <el-tab-pane label="自付比例信息" name="percent-info">
                <percent-info :list="percentList" @add-save="percentAddSave" @edit-save="percentEditSave" />
              </el-tab-pane>
              <el-tab-pane label="限价信息" name="price-info">
                <price-info :list="priceList" @add-save="priceAddSave" @edit-save="priceEditSave" />
              </el-tab-pane>
            </el-tabs>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import AuditStatus from '@/components/Select/AuditStatus'
import InsuranceDirectory from '@/components/Select/InsuranceDirectory'
import MedicalChargeCategory from '@/components/Select/MedicalChargeCategory'
import PercentInfo from './tabs/percent-info/index'
import PriceInfo from './tabs/price-info/index'
export default {
  name: 'DrugInfoMaintenance',
  components: {
    AuditStatus,
    InsuranceDirectory,
    MedicalChargeCategory,
    PercentInfo,
    PriceInfo
  },
  mixins: [],
  props: {},
  data() {
    return {
      searchForm: {},
      activeName: 'percent-info',
      percentList: [],
      priceList: []
    }
  },
  computed: {},
  watch: {},
  created() {
  },
  mounted() {
  },
  methods: {
    percentAddSave() {
      this.percentList = [
        { status: '已审核', code: '123', name: 'asjk', type: 'sfs', pay: '20', beginDate: '2020-05-05', endDate: '2020-06-06', address: '阿空间发', percent: '30' }
      ]
    },
    percentEditSave() {},
    priceAddSave() {
      this.priceList = [
        { status: '已审核', code: '123', name: 'asjk', type: 'sfs', pay: '20', beginDate: '2020-05-05', endDate: '2020-06-06', address: '阿空间发', percent: '30' }
      ]
    },
    priceEditSave() {}
  }
}
</script>

<style scoped lang="scss"></style>
