<template>
  <!--异地医疗费受理-->
  <div class="medical-charge-accept" style="height: 100%">
    <normal-layer :search-number="6">
      <template slot="search-header">
        <FormItems :items-datas="itemsDatas" :form-datas="queryForm">
          <div>
            <el-button @click="reset('queryForm')">重置</el-button>
            <el-button type="primary" @click="search('queryForm')">查询</el-button>
          </div>
        </FormItems>
      </template>
      <div slot="table-title" class="box-header handle">
        <span class="box-title">申报基本信息</span>
        <div slot="title-btns" class="box-tools">
          <el-button type="primary" @click="batchAccept">批量受理</el-button>
          <el-button type="primary" @click="cancelBatchAccept">取消批量受理</el-button>
          <el-button type="primary" @click="exportTable">导出</el-button>
          <el-button type="primary" @click="printer">打印</el-button>
        </div>
      </div>
      <template>
        <my-table-view :border="true" :columns="columns" :data="tableData" :multiple-selection.sync="multipleSelection">
          <template slot="operation" slot-scope="scope">
            <el-button type="text" class="modify" @click="checkDetail(scope.row)">查看详情</el-button>
            <el-button v-if="!scope.row.受理状态" type="text" class="modify" @click="accept(scope.row)">受理</el-button>
            <el-button v-if="scope.row.受理状态" type="text" class="modify" @click="cancelAccept(scope.row)">取消受理</el-button>
          </template>
        </my-table-view>
        <Pagination />
      </template>
    </normal-layer>
    <Detail
      :dialog-title="detailTitle"
      :is-dialog-visible="isDetailDialogVisible"
      @update:isShow="isDetailShow"
    />
    <Accept
      :dialog-title="acceptTitle"
      :is-dialog-visible="isAcceptDialogVisible"
      @update:isShow="isAcceptShow"
    />
  </div>
</template>

<script>
import pageHandle from '@/mixins/pageHandle'
import NormalLayer from '@/views/components/PageLayers/normalLayer'
import FormItems from '@/views/components/PageLayers/form-items'
import Detail from './components/Detail'
import Accept from './components/Accept'
import { tableColumns } from './tableConfig'
export default {
  name: 'PeopleApply',
  components: {
    NormalLayer,
    FormItems,
    Detail,
    Accept
  },
  mixins: [pageHandle],
  props: {},
  data() {
    return {
      multipleSelection: [],
      detailTitle: '',
      isDetailDialogVisible: false,
      acceptTitle: '',
      isAcceptDialogVisible: false,
      queryForm: {
        受理日期: '',
        申报受理号: '',
        受理状态: '',
        医疗机构: '',
        医保经办部门: '',
        就医地: ''
      },
      itemsDatas: [
        { label: '受理日期', prop: '受理日期', type: 'dateRange' },
        { label: '申报受理号', prop: '申报受理号', type: 'input' },
        { label: '受理状态', prop: '受理状态', type: 'select' },
        { label: '医疗机构', prop: '医疗机构', type: 'cascader' },
        { label: '医保经办部门', prop: '医保经办部门', type: 'select' },
        { label: '就医地', prop: '就医地', type: 'cascader' }
      ],
      columns: tableColumns,
      tableData: [1, 2, 3].map(item => {
        return {
          '业务环节': '环节1',
          '医保经办部门': '部门1',
          '业务交接号': '3221312',
          '医院编码': '32143214',
          '医院名称': '湘雅',
          '申报起始日期': '2020-01-01',
          '申报终止日期': '2020-01-02',
          '就医人数合计': '2',
          '就医人次合计': '3',
          '医疗费用总额合计(元)': '123',
          '个人自负金额合计(元)': '321',
          '记账金额合计(元)': '333',
          '申报单据数': '21',
          '申报说明': 'explain',
          '申报人': 'alex',
          '申报日期': '2020-01-01',
          '受理说明': 'tip',
          '受理人': 'cherry',
          '受理时间': '2020-01-01',
          '受理状态': item !== 2
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
    batchAccept() {
      if (this.multipleSelection.length > 0) {
        this.isAcceptDialogVisible = true
        this.acceptTitle = '基本信息受理'
      } else {
        this.$msgInfo('请选择操作数据')
      }
    },
    exportTable() {

    },
    printer() {

    },
    cancelBatchAccept() {
      if (this.multipleSelection.length > 0) {
        console.log(this.multipleSelection)
      } else {
        this.$msgInfo('请选择操作数据')
      }
    },
    isDetailShow(v) {
      this.isDetailDialogVisible = v
    },
    checkDetail(row) {
      this.detailTitle = '详情报表'
      this.isDetailDialogVisible = true
    },
    accept(row) {
      this.isAcceptDialogVisible = true
      this.acceptTitle = '基本信息受理'
    },
    cancelAccept(row) {
      console.log(row, '取消受理')
    },
    isAcceptShow(v) {
      this.isAcceptDialogVisible = v
    }
  }
}
</script>

<style scoped lang="scss"></style>
