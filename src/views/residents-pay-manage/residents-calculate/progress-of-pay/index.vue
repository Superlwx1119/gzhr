<template>
  <!--  居民缴费核定进度插叙-->
  <div class="progressOfPay">
    <normal-layer :search-number="2">
      <template slot="search-header">
        <FormItems :items-datas="itemsDatas" :form-datas="queryForm">
          <template slot="医保区划1">
            <insurance-area v-model="queryForm.医保区划1" />
          </template>
          <div style="text-align: right">
            <el-button @click="reset('queryForm')">重置</el-button>
            <el-button type="primary" @click="search('queryForm')">查询</el-button>
          </div>
        </FormItems>
      </template>
      <div slot="table-title" class="box-header">
        <span class="box-title">居民缴费核定列表</span>
      </div>
      <template>
        <my-table-view :border="true" :columns="columns" :data="tableData">
          <template slot="operation">
            <el-button type="text" @click="checkDetail">明细</el-button>
          </template>
        </my-table-view>
        <Pagination />
      </template>
    </normal-layer>
    <Detail :show.sync="detailVisible" />
  </div>
</template>

<script>
import pageHandle from '@/mixins/pageHandle'
import NormalLayer from '@/views/components/PageLayers/normalLayer'
import FormItems from '@/views/components/PageLayers/form-items'
import InsuranceArea from '@/components/Select/residents-pay-manage/InsuranceArea'
import Detail from './detail'
export default {
  name: 'ProgressOfPay',
  components: {
    InsuranceArea,
    NormalLayer,
    FormItems,
    Detail
  },
  mixins: [pageHandle],
  props: {},
  data() {
    return {
      detailVisible: false,
      itemsDatas: [
        { label: '医保区划', prop: '医保区划1', type: 'custom' },
        { label: '年度', prop: '年度1', type: 'dateYear' }
      ],
      columns: [
        { type: 'selection' },
        { label: '序号', type: 'index' },
        { label: '医保区划', prop: 'area' },
        { label: '征缴年度', prop: 'year' },
        { label: '计算村/社区总数', prop: 'a' },
        { label: '已计算村/社区数', prop: 'b' },
        { label: '计算中村社区数', prop: 'c' },
        { label: '计算发起时间', prop: 'd' },
        { label: '操作', type: 'operation' }
      ],
      tableData: [1, 2, 3].map(item => {
        return {
          area: '医保区划' + item,
          year: '2020',
          a: '100',
          b: '2',
          c: '200',
          d: '200'
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
  methods: {
    checkDetail() { this.detailVisible = true }
  }
}
</script>

<style scoped lang="scss"></style>
