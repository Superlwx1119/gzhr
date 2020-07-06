<!-- 支取个人账户资金查询 -->
<template>
  <normal-layer
    :search-number="itemsDatas.length"
    title-name="支取个人账户资金查询列表"
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
        <el-button type="text" class="modify" @click="detailsClick(scope.row)">详情</el-button>
      </template>
    </my-table-view>
    <Pagination />

    <detail-dialog v-model="showDetailDialog" dialog-title="支取个人账户资金查询详情" />
  </normal-layer>
</template>

<script>
import NormalLayer from '@/views/components/PageLayers/normalLayer'
import FormItems from '@/views/components/PageLayers/form-items'
import PageHandle from '@/mixins/pageHandle'
import Columns from './listCloumns'
import DetailDialog from '../detail-dialog'
export default {
  components: {
    NormalLayer,
    FormItems,
    DetailDialog
  },
  mixins: [PageHandle],
  data() {
    return {
      loading: false,
      multipleSelection: [],
      itemsDatas: [
        { label: '证件类型', prop: 'xxx', type: 'select' },
        { label: '证件号码', prop: 'xxx', type: 'input' },
        { label: '姓名', prop: 'xxx', type: 'select' },
        { label: '业务状态', prop: 'xxx', type: 'select' },
        { label: '经办日期', prop: 'dateRange', type: 'dateRange' },
        { label: '所属区', prop: 'xxx', type: 'select' },
        { label: '受理单号', prop: 'xxx', type: 'input' },
        { label: '注销原因', prop: 'xxx', type: 'select' },
        { label: '账户处理方式', prop: 'xxx', type: 'select' }
      ],
      queryForm: {
        xxx: '',
        dateRange: []
      },
      columns: Columns,
      tableData: [
        { name: '白兰花', code: 'xxx', nameCode: 'xxx' },
        { name: '白兰花', code: 'xxx', nameCode: 'xxx' }
      ],
      showDetailDialog: false
    }
  },
  methods: {
    detailsClick(row) {
      this.showDetailDialog = true
    }
  }
}
</script>

<style lang="scss" scoped>
/deep/.el-form{
  .el-form-item__label{
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 32px;
    line-height: 14px;
  }
}
</style>
