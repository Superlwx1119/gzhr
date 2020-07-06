<!-- 个人异动信息 -->
<template>
  <section style="height:100%">
    <my-table-view
      :data="tableData"
      :columns="columns"
    >
      <template slot="operation" slot-scope="scope">
        <el-button type="text" class="modify" @click="detailsClick(scope.row)">详细信息</el-button>
      </template>
    </my-table-view>
    <Pagination />
    <detail-dialog v-model="showDetailDialog" dialog-title="个人异动变更明细" />
  </section>
</template>

<script>
import Columns from './listCloumns'
import DetailDialog from '../../detail-dialog'
export default {
  components: {
    DetailDialog
  },
  props: {
  },
  data() {
    return {
      showDetailDialog: false,
      columns: Columns,
      tableData: [
        { name: '2020200', code: 'xxx', nameCode: 'xxx' },
        { name: '2020200', code: 'xxx', nameCode: 'xxx' }
      ]
    }
  },
  methods: {
    detailsClick(row) {
      this.showDetailDialog = true
    }
  }
}
</script>

<style scoped lang="scss">

</style>
