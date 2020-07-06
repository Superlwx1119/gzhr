<template>
  <!-- 城乡居民缴费日结核查确认-->
  <div class="dailyVerificationAndConfirm">
    <normal-layer :search-number="5">
      <template slot="search-header">
        <FormItems :items-datas="itemsDatas" :form-datas="queryForm">
          <template slot="单位信息1">
            <company-info v-model="queryForm.单位信息1" />
          </template>
          <template slot="单位类型1">
            <company-type v-model="queryForm.单位类型1" />
          </template>
          <div style="text-align: right">
            <el-button @click="reset('queryForm')">重置</el-button>
            <el-button type="primary" @click="search('queryForm')">查询</el-button>
          </div>
        </FormItems>
      </template>
      <template>
        <section class="layer-tab">
          <el-tabs v-model="activeName" type="border-card">
            <el-tab-pane label="待核查数据" name="first">
              <NotChecked />
            </el-tab-pane>
            <el-tab-pane label="已核查数据" name="second">
              <HaveChecked />
            </el-tab-pane>
            <el-tab-pane label="问题数据" name="third">
              <ProblemData />
            </el-tab-pane>
            <el-tab-pane label="延迟扣费单位维护" name="fourth">
              <CompanyMaintenance />
            </el-tab-pane>
          </el-tabs>
        </section>
      </template>
    </normal-layer>
  </div>
</template>

<script>
import pageHandle from '@/mixins/pageHandle'
import NormalLayer from '@/views/components/PageLayers/normalLayer'
import FormItems from '@/views/components/PageLayers/form-items'
import CompanyInfo from '@/components/Select/fund-insurance-manage/CompanyInfo'
import CompanyType from '@/components/Select/health-manage/CompanyType'
import NotChecked from './tabs/NotChecked/index'
import HaveChecked from './tabs/HaveChecked/index'
import ProblemData from './tabs/ProblemData/index'
import CompanyMaintenance from './tabs/CompanyMaintenance/index'

export default {
  name: 'DailyVerificationAndConfirm',
  components: {
    NormalLayer,
    FormItems,
    CompanyType,
    CompanyInfo,
    NotChecked,
    HaveChecked,
    ProblemData,
    CompanyMaintenance
  },
  mixins: [pageHandle],
  props: {},
  data() {
    return {
      activeName: 'first',
      itemsDatas: [
        { label: '单位信息', prop: '单位信息1', type: 'custom' },
        { label: '单位类型', prop: '单位类型1', type: 'custom' },
        { label: '医保年度', prop: '医保年度1', type: 'dateYear' },
        { label: '统筹区', prop: '统筹区', type: 'select' },
        { label: '是否代征代缴', prop: '是否代征代缴', type: 'select' }
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
  }
}
</script>

<style scoped lang="scss">
  /deep/.layer-result {
    .box {
      .box-body {
        height: 100%;
        padding: 0;
      }
      .box-title + .box-body {
        height: calc(100% - 37px);
      }
    }
  }
  .tab-component {
    height: 100%;
  }
</style>
