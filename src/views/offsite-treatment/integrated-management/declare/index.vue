<template>
  <!--参保地提取月度清分数据-->
  <div class="declare" style="height: 100%">
    <normal-layer :search-number="3">
      <template slot="search-header">
        <FormItems :items-datas="itemsDatas" :form-datas="queryForm">
          <div>
            <el-button @click="reset('queryForm')">重置</el-button>
            <el-button type="primary" @click="search('queryForm')">查询</el-button>
          </div>
        </FormItems>
      </template>
      <div slot="table-title" class="box-header handle">
        <span class="box-title">月度清分数据列表</span>
        <div slot="title-btns" class="box-tools">
          <el-button type="primary" @click="extractSummary">提取清分汇总表</el-button>
          <el-button type="primary" @click="extractClassifySum">提取清分分险种汇总表</el-button>
          <el-button type="primary" @click="exportTable">导出</el-button>
          <el-button type="primary">打印</el-button>
        </div>
      </div>
      <template>
        <my-table-view :border="true" :columns="columns" :data="tableData" />
        <Pagination />
      </template>
    </normal-layer>
    <Progress v-if="isShowProgress" :type="'line'" :is-loaded="isLoaded" />
  </div>
</template>

<script>
import pageHandle from '@/mixins/pageHandle'
import NormalLayer from '@/views/components/PageLayers/normalLayer'
import FormItems from '@/views/components/PageLayers/form-items'
import Progress from '@/components/Progress'
import { tableColumns } from './tableConfig'
export default {
  name: 'PeopleApply',
  components: {
    NormalLayer,
    FormItems,
    Progress
  },
  mixins: [pageHandle],
  props: {},
  data() {
    return {
      isShowProgress: false,
      isLoaded: false,
      queryForm: {
        申报月份: '',
        险种: '',
        参保地: ''
      },
      itemsDatas: [
        { label: '申报月份', prop: '申报月份', type: 'dateMoon' },
        { label: '险种', prop: '险种', type: 'select' },
        { label: '参保地', prop: '参保地', type: 'cascader' }
      ],
      columns: tableColumns,
      tableData: [1, 2, 3].map(item => {
        return {
          '顺序号': item + '',
          '结算申报业务号': '结算申报业务号',
          '行政区划': '行政区划',
          '医院编码': '医院编码',
          '医院名称': '医院名称',
          '社会保障号码': '社会保障号码',
          '证件类型': '证件类型',
          '证件号码': '证件号码',
          '姓名': '姓名',
          '业务交接号': '业务交接号',
          '结算业务号': '结算业务号',
          '入院日期': '入院日期',
          '出院日期': '出院日期',
          '结算日期': '结算日期',
          '住院天数': '住院天数',
          '入院疾病诊断名称': '入院疾病诊断名称',
          '医疗费总金额(元)': '医疗费总金额(元)',
          '医疗类别': '医疗类别',
          '险种': '险种'
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
    exportTable() {

    },
    extractSummary() {
      this.isShowProgress = true
      setTimeout(() => {
        this.isLoaded = true
        setTimeout(() => {
          this.isShowProgress = false
        }, 100)
      }, 6000)
    },
    extractClassifySum() {
      this.isShowProgress = true
      console.log(133)
      setTimeout(() => {
        setTimeout(() => {
          this.isShowProgress = false
        }, 100)
      }, 6000)
    }
  }
}
</script>

<style scoped lang="scss"></style>
