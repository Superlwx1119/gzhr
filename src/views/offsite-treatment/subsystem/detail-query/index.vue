<template>
  <!--异地医疗费扣付原因维护-->
  <div class="info-extract" style="height: 100%">
    <normal-layer :search-number="4">
      <template slot="search-header">
        <FormItems :items-datas="itemsDatas" :form-datas="queryForm">
          <div>
            <el-button @click="reset('queryForm')">重置</el-button>
            <el-button type="primary" @click="search('queryForm')">查询</el-button>
          </div>
        </FormItems>
      </template>
      <div slot="table-title" class="box-header handle">
        <span class="box-title">异地医疗费扣付列表</span>
        <div class="box-tools">
          <el-button type="primary">清分汇总</el-button>
          <el-button type="primary">取消清分</el-button>
          <el-button type="primary">打印</el-button>
          <el-button type="primary">导出</el-button>
        </div>
      </div>
      <template>
        <my-table-view :border="true" :columns="columns" :data="tableData">
          <template slot="operation" slot-scope="scope">
            <el-button type="text" class="modify" @click="checkDetail(scope.row)">详情</el-button>
          </template>
        </my-table-view>
        <Pagination />
      </template>
    </normal-layer>
    <ReportForm
      :dialog-title="reportTitle"
      :is-dialog-visible="isReportDialogVisible"
      @update:isShow="isReportShow"
    />
  </div>
</template>

<script>
import ReportForm from './components/ReportForm'
import pageHandle from '@/mixins/pageHandle'
import NormalLayer from '@/views/components/PageLayers/normalLayer'
import FormItems from '@/views/components/PageLayers/form-items'
import { tableColumns } from './tableConfig'
export default {
  components: {
    NormalLayer,
    FormItems,
    ReportForm
  },
  mixins: [pageHandle],
  props: {},
  data() {
    return {
      isReportDialogVisible: false,
      reportTitle: '',
      queryForm: {
        清分年月: '',
        职工: '',
        处理状态: '',
        清分批号: ''
      },
      itemsDatas: [
        { label: '清分年月', prop: '清分年月', type: 'dateMoon' },
        { label: '职工', prop: '职工', type: 'select' },
        { label: '处理状态', prop: '处理状态', type: 'select' },
        { label: '清分批号', prop: '清分批号', type: 'input' }
      ],
      columns: tableColumns,
      tableData: [1, 2, 3].map(item => {
        return {
          '拒付原因编号': '984732984',
          '拒付原因': 'uiowur',
          '拒付类别': 'ewqeq',
          '所属中心': 'eqwewqe',
          '有效标志': '1'
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
    checkDetail() {
      this.isReportDialogVisible = true
      this.reportTitle = '详情'
    },
    isReportShow(v) {
      this.isReportDialogVisible = v
    }
  }
}
</script>

<style scoped lang="scss"></style>
