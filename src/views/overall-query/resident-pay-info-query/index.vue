<!-- 居民缴费信息查询 -->
<template>
  <normal-layer
    :search-number="itemsDatas.length"
    title-name="居民缴费信息列表"
  >
    <template slot="search-header">
      <form-items :items-datas="itemsDatas" :form-datas="queryForm">
        <el-button @click="reset">重置</el-button>
        <el-button type="primary" @click="search">查询</el-button>
      </form-items>
    </template>
    <my-table-view
      v-loading="loading"
      :data="tableData"
      :columns="columns"
    />
    <Pagination />
  </normal-layer>
</template>
<script>
import NormalLayer from '@/views/components/PageLayers/normalLayer'
import FormItems from '@/views/components/PageLayers/form-items'
import PageHandle from '@/mixins/pageHandle'
import Columns from './listCloumns'
import moment from 'moment'
export default {
  components: {
    NormalLayer,
    FormItems
  },
  mixins: [PageHandle],
  data() {
    return {
      loading: false,
      itemsDatas: [
        { label: '人员编号', prop: 'xxx', type: 'input' },
        { label: '人员名称', prop: 'xxx', type: 'input' },
        { label: '缴费标识', prop: 'xxx', type: 'select' },
        { label: '险种类型', prop: 'XXX', type: 'select' },
        { label: '征集通知流水号', prop: 'xxx', type: 'input' },
        { label: '医保区划', prop: 'xxx', type: 'select' },
        { label: '费款所属期', prop: 'dateRange', type: 'dateRange' }
      ],
      queryForm: {
        xxx: '',
        dateRange: [
          moment().startOf('month').format('YYYY-MM-DD'),
          moment().endOf('month').format('YYYY-MM-DD')
        ]
      },
      columns: Columns,
      tableData: [
        { name: '白兰花', code: 'xxx', nameCode: 'xxx' },
        { name: '白兰花', code: 'xxx', nameCode: 'xxx' }
      ]
    }
  },
  watch: {
  },
  methods: {
  }
}
</script>
<style lang='scss' scoped>
</style>
