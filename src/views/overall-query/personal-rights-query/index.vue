<!-- 个人权益记录查询 -->
<template>
  <section>
    <normal-layer
      :search-number="itemsDatas.length"
      title-name="柜台待办申请"
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
      >
        <template slot="operation" slot-scope="scope">
          <el-button type="text" class="modify" @click="selectClick(scope.row)">选择</el-button>
        </template>
      </my-table-view>
      <Pagination />
    </normal-layer>

    <look-detail v-if="DetaVisible" @update:show="DetaIsShow" />
  </section>
</template>
<script>
import NormalLayer from '@/views/components/PageLayers/normalLayer'
import FormItems from '@/views/components/PageLayers/form-items'
import PageHandle from '@/mixins/pageHandle'
import moment from 'moment'
import Columns from './listCloumns'
import LookDetail from '@/views/overall-query/personal-rights-query/components/LookDetail/index'
export default {
  components: {
    NormalLayer,
    FormItems,
    LookDetail
  },
  mixins: [PageHandle],
  data() {
    return {
      loading: false,
      DetaVisible: false,
      itemsDatas: [
        { label: '截止时间', prop: 'date', type: 'dateRange' }
      ],
      queryForm: {
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
    selectClick(row) {
      this.DetaVisible = true
      console.log('1')
    },
    DetaIsShow() {
      this.DetaVisible = false
    }
  }
}
</script>
<style lang='scss' scoped>
</style>
