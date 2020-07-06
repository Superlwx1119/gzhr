<template>
  <!--单位预缴查询-->
  <div class="paymentInAdvanceQuery">
    <normal-layer :search-number="3">
      <template slot="search-header">
        <FormItems :items-datas="itemsDatas" :form-datas="queryForm">
          <template slot="单位信息1">
            <company-info v-model="queryForm.单位信息1" />
          </template>
          <template slot="险种1">
            <insurance-type v-model="queryForm.险种1" />
          </template>
          <div style="text-align: right">
            <el-button @click="reset('queryForm')">重置</el-button>
            <el-button type="primary" @click="search('queryForm')">查询</el-button>
          </div>
        </FormItems>
      </template>
      <div slot="table-title" class="box-header">
        <span class="box-title">单位预缴列表</span>
      </div>
      <template>
        <my-table-view :border="true" :columns="columns" :data="tableData" />
        <Pagination />
      </template>
    </normal-layer>
  </div>
</template>

<script>
import InsuranceType from '@/components/Select/InsuranceType'
import pageHandle from '@/mixins/pageHandle'
import NormalLayer from '@/views/components/PageLayers/normalLayer'
import FormItems from '@/views/components/PageLayers/form-items'
import CompanyInfo from '@/components/Select/fund-insurance-manage/CompanyInfo'
export default {
  name: 'PaymentInAdvanceRefund',
  components: { InsuranceType, CompanyInfo, NormalLayer, FormItems },
  mixins: [pageHandle],
  props: {},
  data() {
    return {
      itemsDatas: [
        { label: '单位信息', prop: '单位信息1', type: 'custom' },
        { label: '险种', prop: '险种1', type: 'custom' },
        { label: '经办时间', prop: '经办时间1', type: 'dateRange' }
      ],
      columns: [
        { type: 'selection' },
        { label: '序号', type: 'index' },
        { label: '单位管理码', prop: 'a' },
        { label: '单位名称', prop: 'b' },
        { label: '险种类型', prop: 'c' },
        { label: '修改前金额（元）', prop: 'd' },
        { label: '修改后金额（元）', prop: 'e' },
        { label: '修改原因', prop: 'f' },
        { label: '申请人', prop: 'g' },
        { label: '申请时间', prop: 'h' },
        { label: '审核状态', prop: 'i' }
      ],
      tableData: [1, 2, 3].map(item => {
        return {
          a: 'DW' + item,
          b: '单位A',
          c: '基本医疗保险',
          d: '1000',
          e: '500',
          f: '征缴误入',
          g: '李四',
          h: '2020-02-02',
          i: '已审核'
        }
      })
    }
  },
  computed: {},
  watch: {},
  created() {
  },
  mounted() {
  },
  methods: {}
}
</script>

<style scoped lang="scss"></style>
