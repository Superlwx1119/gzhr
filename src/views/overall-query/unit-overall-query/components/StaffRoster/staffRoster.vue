<!-- 参保信息详情 -->
<template>
  <normal-layer
    :search-number="itemsDatas.length"
  >
    <template slot="search-header">
      <form-items :items-datas="itemsDatas" :form-datas="queryForm">
        <el-button @click="reset">重置</el-button>
        <el-button type="primary" @click="search">查询</el-button>
        <el-button type="primary" @click="exportClick">导出</el-button>
      </form-items>
    </template>
    <my-table-view
      v-loading="loading"
      :data="tableData"
      :columns="columns"
    >
      <template slot="medcial">
        <el-checkbox />
      </template>
      <template slot="pension">
        <el-checkbox />
      </template>
      <template slot="workInjury">
        <el-checkbox />
      </template>
      <template slot="childBirth">
        <el-checkbox />
      </template>
      <template slot="unemployment">
        <el-checkbox />
      </template>
    </my-table-view>
    <Pagination />
  </normal-layer>
</template>

<script>
import NormalLayer from '@/views/components/PageLayers/normalLayer'
import FormItems from '@/views/components/PageLayers/form-items'
import PageHandle from '@/mixins/pageHandle'
import Columns from './listCloumns'
export default {
  components: {
    NormalLayer,
    FormItems
  },
  mixins: [PageHandle],
  props: {
  },
  data() {
    return {
      loading: false,
      columns: Columns,
      itemsDatas: [
        { label: '查询条件', prop: 'xxx', type: 'select' },
        { label: '参保身份', prop: 'xxx', type: 'select' },
        { label: '缴费状态', prop: 'xxx', type: 'select' },
        { label: '生存状态', prop: 'XXX', type: 'select' }
      ],
      queryForm: {
        xxx: ''
      },
      tableData: [
        { name: '2020200', code: 'xxx', nameCode: 'xxx' },
        { name: '2020200', code: 'xxx', nameCode: 'xxx' }
      ]
    }
  },
  watch: {
  },
  methods: {
    exportClick() {

    }
  }

}
</script>

<style scoped lang="scss">
</style>
