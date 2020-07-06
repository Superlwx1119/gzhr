<template>
  <!--  批量缴费核定-->
  <div class="batchPayVerification">
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
      <div slot="table-title" class="box-header handle">
        <span class="box-title">居民缴费核定列表</span>
        <div slot="title-btns" class="box-tools">
          <el-button type="primary" @click="calculate">计算</el-button>
        </div>
      </div>
      <template>
        <my-table-view :border="true" :columns="columns" :data="tableData" />
        <Pagination />
      </template>
    </normal-layer>
  </div>
</template>

<script>
import pageHandle from '@/mixins/pageHandle'
import NormalLayer from '@/views/components/PageLayers/normalLayer'
import FormItems from '@/views/components/PageLayers/form-items'
import InsuranceArea from '@/components/Select/residents-pay-manage/InsuranceArea'
export default {
  name: 'BatchPayVerification',
  components: {
    InsuranceArea,
    NormalLayer,
    FormItems
  },
  mixins: [pageHandle],
  props: {},
  data() {
    return {
      itemsDatas: [
        { label: '医保区划', prop: '医保区划1', type: 'custom' },
        { label: '年度', prop: '年度1', type: 'dateYear' }
      ],
      columns: [
        { type: 'selection' },
        { label: '序号', type: 'index' },
        { label: '医保区划', prop: 'area' },
        { label: '乡镇/街道', prop: 'Street' },
        { label: '村/社区/学校', prop: 'school' },
        { label: '征缴年度', prop: 'year' },
        { label: '未计算人数', prop: 'amount1' },
        { label: '已计算人数', prop: 'amount2' },
        { label: '总人数', prop: 'total' }
      ],
      tableData: [1, 2, 3].map(item => {
        return {
          area: '医保区划' + item,
          Street: '街道' + item,
          school: '村' + item,
          year: '2020',
          amount1: '100',
          amount2: '2',
          total: '200'
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
    calculate() {
      this.$msgSuccess('计算成功！')
      this.tableData = []
    }
  }
}
</script>

<style scoped lang="scss"></style>
