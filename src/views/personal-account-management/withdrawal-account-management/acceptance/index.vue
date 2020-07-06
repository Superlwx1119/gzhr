<!-- 支取个人账户资金受理 -->
<template>
  <normal-layer
    :search-number="itemsDatas.length"
    title-name="支取个人账户资金待办列表"
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
      :multiple-selection.sync="multipleSelection"
    >
      <template slot="operation" slot-scope="scope">
        <el-button type="text" class="modify" @click="handelClick(scope.row)">开始办理</el-button>
      </template>
    </my-table-view>
    <Pagination />

    <edit-dialog v-model="showEditDialog" :dialog-title="dialogTitle" />
  </normal-layer>
</template>

<script>
import NormalLayer from '@/views/components/PageLayers/normalLayer'
import FormItems from '@/views/components/PageLayers/form-items'
import PageHandle from '@/mixins/pageHandle'
import Columns from './listCloumns'
import moment from 'moment'
import EditDialog from './edit-dialog'
export default {
  components: {
    NormalLayer,
    FormItems,
    EditDialog
  },
  mixins: [PageHandle],
  data() {
    return {
      loading: false,
      multipleSelection: [],
      itemsDatas: [
        { label: '证件类型', prop: 'xxx', type: 'select' },
        { label: '证件号码', prop: 'xxx', type: 'input' },
        { label: '姓名', prop: 'xxx', type: 'select' }
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
      ],
      dialogTitle: '新增',
      showEditDialog: false
    }
  },
  methods: {
    handelClick(row) {
      this.dialogTitle = '支取个人账户资金办理'
      this.showEditDialog = true
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

