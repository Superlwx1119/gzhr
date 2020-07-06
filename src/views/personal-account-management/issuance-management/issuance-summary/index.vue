<template>
  <!--省外统筹区就医地信息提取-->
  <div class="info-extract" style="height: 100%">
    <normal-layer :search-number="1">
      <template slot="search-header">
        <FormItems :items-datas="itemsDatas" :form-datas="queryForm">
          <div>
            <el-button @click="reset('queryForm')">重置</el-button>
            <el-button type="primary" @click="search('queryForm')">查询</el-button>
          </div>
        </FormItems>
      </template>
      <div slot="table-title" class="box-header handle">
        <span class="box-title">个人核发汇总结果</span>
        <div slot="title-btns" class="box-tools">
          <el-button type="primary" @click="summary">汇总</el-button>
          <el-button type="primary" @click="checkSummary">注资检查汇总表</el-button>
          <el-button type="primary" @click="calculateLog">计算日志</el-button>
          <el-button type="primary" @click="issueLog">核发日志</el-button>
          <el-button type="primary" @click="dataDistribution">数据下发</el-button>
          <el-button type="primary" @click="exportTable">导出</el-button>
        </div>
      </div>
      <template>
        <my-table-view :border="true" :columns="columns" :data="tableData">
          <template slot="operation" slot-scope="scope">
            <el-button type="text" @click="checkRow(scope.row)">查看详情</el-button>
          </template>
        </my-table-view>
        <Pagination />
      </template>
    </normal-layer>
    <Log
      :dialog-title="logTitle"
      :is-dialog-visible="isLogVisible"
      @update:isShow="isLogShow"
    />
    <Detail
      :dialog-title="detailTitle"
      :is-dialog-visible="isDetailVisible"
      @update:isShow="isDetailShow"
    />
  </div>
</template>

<script>
import pageHandle from '@/mixins/pageHandle'
import NormalLayer from '@/views/components/PageLayers/normalLayer'
import FormItems from '@/views/components/PageLayers/form-items'
import Log from './components/Log'
import Detail from './components/Detail'
import { tableColumns } from './tableConfig'
export default {
  name: 'PeopleApply',
  components: {
    NormalLayer,
    FormItems,
    Log,
    Detail
  },
  mixins: [pageHandle],
  props: {},
  data() {
    return {
      logTitle: '',
      isLogVisible: false,
      detailTitle: '',
      isDetailVisible: false,
      queryForm: {
        数据交换批号: ''
      },
      itemsDatas: [
        { label: '数据交换批号', prop: '数据交换批号', type: 'select' }
      ],
      columns: tableColumns,
      tableData: [1, 2, 3].map(item => {
        return {
          '交换数据批号': '3975983',
          '核查项目': '本月核发',
          '人数': '21',
          '人次': '44',
          '金额(元)': '32',
          '业务状态': '数据下发'
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
    summary() {

    },
    checkSummary() {

    },
    calculateLog() {
      this.isLogVisible = true
      this.logTitle = '计算日志'
    },
    issueLog() {
      this.isLogVisible = true
      this.logTitle = '核发日志'
    },
    dataDistribution() {

    },
    exportTable() {

    },
    checkRow(row) {
      this.isDetailVisible = true
      this.detailTitle = '个人核发结果详情'
    },
    isLogShow(v) {
      this.isLogVisible = v
    },
    isDetailShow(v) {
      this.isDetailVisible = v
    }
  }
}
</script>

<style scoped lang="scss"></style>
