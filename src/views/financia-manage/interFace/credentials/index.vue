<template>
  <normal-layer
    :search-number="itemsDatas.length"
    title-name="凭证冲账列表"
    title-need-handle
    class="credit-file-maintenance"
  >
    <template slot="search-header">
      <form-items :items-datas="itemsDatas" :form-datas="queryForm">
        <el-button @click="reset">重置</el-button>
        <el-button type="primary" @click="search">查询</el-button>
      </form-items>
    </template>

    <template slot="title-btns">
      <el-button type="primary" @click="addClick">凭证冲账</el-button>
    </template>
    <el-tabs v-model="activeName" type="border-card" @tab-click="handleClick">
      <el-tab-pane label="凭着分录" name="first">
        <my-table-view
          v-loading="loading"
          :data="tableData"
          :columns="columns"
          :multiple-selection.sync="multipleSelection"
        />
      </el-tab-pane>
      <el-tab-pane label="业务记录" name="second">
        <my-table-view
          v-loading="loading"
          :data="tableData"
          :columns="columns2"
          :multiple-selection.sync="multipleSelection"
        />
      </el-tab-pane>
      <el-tab-pane label="个人拨付记录" name="third">
        <my-table-view
          v-loading="loading"
          :data="tableData"
          :columns="columns3"
          :multiple-selection.sync="multipleSelection"
        />
      </el-tab-pane>
    </el-tabs>

    <edit-dialog v-model="showEditDialog" :dialog-title="dialogTitle" />
    <detai-dialog v-model="showDetailDialog" :dialog-title="dialogTitle" />
  </normal-layer>
</template>

<script>
import NormalLayer from '@/views/components/PageLayers/normalLayer'
import FormItems from '../../components/form-items'
import PageHandle from '@/mixins/pageHandle'
import Columns from './columns'
import DetaiDialog from './dialog/details'
import EditDialog from './dialog/edit'
import itemData from './itemData'
import moment from 'moment'
export default {
  components: {
    NormalLayer,
    FormItems,
    DetaiDialog,
    EditDialog
  },
  mixins: [PageHandle],
  data() {
    return {
      activeName: 'first',
      loading: false,
      multipleSelection: [],
      itemsDatas: itemData,
      queryForm: {
        xxx: '',
        dateRange: [
          moment().startOf('month').format('YYYY-MM-DD'),
          moment().endOf('month').format('YYYY-MM-DD')
        ]
      },
      columns: Columns,
      columns2: [
        { prop: 'nameCode', label: '业务单号', align: 'center' },
        { prop: 'nameCode', label: '业务名称', align: 'center' },
        { prop: 'code', label: '接口项目名称', align: 'center' },
        { prop: 'nameCode', label: '金额（元）', align: 'center' },
        { prop: 'nameCode', label: '往来对象类型', minWidth: '200px', align: 'center' },
        { prop: 'nameCode', label: '往来对象编码', minWidth: '200px', align: 'center' },
        { prop: 'nameCode', label: '录入人', minWidth: '200px', align: 'center' },
        { prop: 'nameCode', label: '录入时间', minWidth: '200px', align: 'center' }
      ],
      columns3: [
        { prop: 'nameCode', label: '凭证号', align: 'center' },
        { prop: 'nameCode', label: '拨付单号', align: 'center' },
        { prop: 'code', label: '对方支付系统行号', align: 'center' },
        { prop: 'nameCode', label: '对方账号', align: 'center' },
        { prop: 'nameCode', label: '对方名称', minWidth: '200px', align: 'center' }
      ],
      tableData: [
        { name: 'xxx', code: 'xxx', nameCode: 'xxx' },
        { name: 'xxx', code: 'xxx', nameCode: 'xxx' }
      ],
      showDetailDialog: false, // 详情
      dialogTitle: '',
      showEditDialog: false // 审核弹窗
    }
  },
  methods: {
    addClick(row) {
      this.$msgSuccess('冲账成功')
    },
    detailsClick(row) {
      this.dialogTitle = 'asd'
      this.showDetailDialog = true
    },
    deleteEvent(row) {
      this.$msgSuccess('删除成功')
    },
    batchDeleteEvent() {
      this.$msgSuccess('批量删除成功')
    },
    deleteAll() {
      this.$msgConfirm('是否删除？').then(res => {
        this.$msgSuccess('删除成功！')
      }).catch(err => {
        this.$msgInfo(err)
      })
    },
    handleClick(tab, event) {
      console.log(tab, event)
    }
  }
}
</script>

<style lang="scss" scoped>
.credit-file-maintenance {
  position: relative;
}
.el-tabs{
  height: 100%;
}
</style>
