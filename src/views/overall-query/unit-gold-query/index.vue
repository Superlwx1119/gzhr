<!-- 单位待转金查询 -->
<template>
  <normal-layer
    :search-number="itemsDatas.length"
    title-name="单位待转金查询列表"
    title-need-handle
  >
    <template slot="search-header">
      <form-items :items-datas="itemsDatas" :form-datas="queryForm">
        <el-button @click="reset">重置</el-button>
        <el-button type="primary" @click="search">查询</el-button>
      </form-items>
    </template>
    <template slot="title-btns">
      <el-button type="primary" @click="printClick">打印</el-button>
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
        { label: '单位编号', prop: 'xxx', type: 'input' },
        { label: '单位名称', prop: 'xxx', type: 'input' },
        { label: '单位类型', prop: 'xxx', type: 'select' }
      ],
      queryForm: {
        xxx: ''
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
    printClick() {
      window.print()
    }
  }
}
</script>
<style lang='scss' scoped>
</style>
