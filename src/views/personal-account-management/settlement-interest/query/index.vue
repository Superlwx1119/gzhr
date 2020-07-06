<!-- 个人账户结息查询 -->
<template>
  <normal-layer
    :search-number="itemsDatas.length"
    title-name="结息明细信息"
    title-need-handle
    class="credit-file-maintenance"
  >
    <template slot="search-header">
      <form-items :items-datas="itemsDatas" :form-datas="queryForm">
        <el-button @click="reset(queryForm)">重置</el-button>
        <el-button type="primary" @click="search(queryForm)">查询</el-button>
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
import Columns from './columns'
// import EditDialog from './dialog/edit'
// import itemData from './itemData'
import moment from 'moment'
export default {
  components: {
    NormalLayer,
    FormItems
    // EditDialog
  },
  mixins: [PageHandle],
  data() {
    return {
      searchForm: {

      },
      loading: false,
      itemsDatas: [
        { label: '查询条件', prop: 'xx', type: 'input' },
        { label: '姓名', prop: 'xx', type: 'input' },
        { label: '证件号码', prop: 'xx', type: 'input' },
        { label: '查询条件2', prop: 'xx', type: 'input' },
        { label: '单位名称', prop: 'xx', type: 'input' },
        { label: '单位编码', prop: 'xx', type: 'input' },
        { label: '起始日期', prop: 'dateRange', type: 'dateRange' }
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
        { name: 'xxx', code: 'xxx', nameCode: 'xxx' },
        { name: 'xxx', code: 'xxx', nameCode: 'xxx' }
      ]
    }
  },
  methods: {

  }
}
</script>

<style lang="scss">

</style>
