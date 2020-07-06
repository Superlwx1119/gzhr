<template>
  <!--省平台未对账数据提取-->
  <div class="extract">
    <normal-layer :search-number="3">
      <template slot="search-header">
        <FormItems :items-datas="itemsDatas" :form-datas="queryForm">
          <div>
            <el-button @click="reset('queryForm')">重置</el-button>
            <el-button type="primary" @click="search('queryForm')">查询</el-button>
          </div>
        </FormItems>
      </template>
      <section class="layer">
        <el-row :gutter="12">
          <el-col :md="24" :lg="10" :xl="8">
            <div class="box">
              <div slot="table-title" class="box-header handle">
                <span class="box-title">汇总表</span>
                <div slot="title-btns" class="box-tools">
                  <el-button type="primary" @click="extractSummary">提取</el-button>
                  <el-button type="primary" @click="exportSummary">导出</el-button>
                </div>
              </div>
              <div class="box-body">
                <template>
                  <my-table-view :border="true" :columns="summaryColumns" :data="summaryData">
                    <template slot="operation">
                      <el-button type="text" @click="detailTable">明细表</el-button>
                    </template>
                  </my-table-view>
                  <Pagination />
                </template>
              </div>
            </div>
          </el-col>
          <el-col :md="24" :lg="14" :xl="16">
            <div class="box">
              <div slot="table-title" class="box-header handle">
                <span class="box-title">明细表</span>
                <div slot="title-btns" class="box-tools">
                  <el-button type="primary" @click="extractDatail">提取</el-button>
                  <el-button type="primary" @click="exportDatail">导出</el-button>
                </div>
              </div>
              <div class="box-body">
                <template>
                  <my-table-view :border="true" :max-cloumns="7" :columns="detailColumns" :data="detailData" />
                  <Pagination />
                </template>
              </div>
            </div>
          </el-col>
        </el-row>
      </section>
    </normal-layer>
    <Progress v-if="isShowProgress" :type="'line'" :is-loaded="isLoaded" />
  </div>
</template>

<script>
import pageHandle from '@/mixins/pageHandle'
import NormalLayer from '@/views/components/PageLayers/normalLayer'
import FormItems from '@/views/components/PageLayers/form-items'
import Progress from '@/components/Progress'
import { summaryColumns, detailColumns } from './tableConfig'
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
        对账类型: '',
        选择时间: '',
        业务经办部门: ''
      },
      itemsDatas: [
        { label: '对账类型', prop: '对账类型', type: 'select' },
        { label: '选择时间', prop: '选择时间', type: 'dateRange' },
        { label: '业务经办部门', prop: '业务经办部门', type: 'select' }
      ],
      summaryColumns: summaryColumns,
      summaryData: [1, 2, 3].map(item => {
        return {
          '交易流水号': '12312421421421',
          '行数': '1',
          '错误代码': '2',
          '错误信息': 'error'
        }
      }),
      detailColumns,
      detailData: [
        {
          '行政区划(参保地)': '广州市',
          '行政区划(就医地)': '长沙市',
          '医疗总费用(元)': '123',
          '个人现金支付(元)': '321',
          '医保基金支付总额(元)': '123',
          '就诊结算时间': '2020-02-03',
          '原交易流水号': '63278462312346723',
          '交易类型': '类型1',
          '就诊登记号': '37489712894',
          '结算流水号': '37826487326'
        }
      ]
    }
  },
  computed: {},
  watch: {},
  created() {
  },
  mounted() {
  },
  methods: {
    extractSummary() {
      this.isShowProgress = true
      console.log(133)
      setTimeout(() => {
        setTimeout(() => {
          this.isShowProgress = false
        }, 100)
      }, 6000)
    },
    extractDatail() {
      this.isShowProgress = true
      console.log(133)
      setTimeout(() => {
        setTimeout(() => {
          this.isShowProgress = false
        }, 100)
      }, 6000)
    },
    exportSummary() {
      console.log('exportSummary')
    },
    exportDatail() {
      console.log('exportDatail')
    },
    detailTable() {
      console.log('getDetailTable')
    }
  }
}
</script>

<style scoped lang="scss">
.extract {
  height: 100%;
  >>> .layer-result {
    >.box {
      background-color: transparent;
      >.box-body {
        height: 100%;
        padding: 0;
        section.layer {
          height: 100%;
          .el-row {
            height: 100%;
          }
          .el-col {
            height: 100%;
          }
        }
      }
    }
  }
}
</style>
