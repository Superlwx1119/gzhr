<template>
  <!--出院结算日对账-->
  <div class="reconceiliation">
    <normal-layer :search-number="4">
      <template slot="search-header">
        <FormItems :items-datas="itemsDatas" :form-datas="queryForm">
          <div>
            <el-button @click="reset('queryForm')">重置</el-button>
            <el-button type="primary" @click="search('queryForm')">查询</el-button>
          </div>
        </FormItems>
      </template>
      <template>
        <div class="layer-tab">
          <el-tabs v-model="activeName" type="border-card">
            <el-tab-pane label="本地数据" name="first">
              <div class="box">
                <div class="box-header handle">
                  <div class="box-tools">
                    <el-button type="primary">打印</el-button>
                    <el-button type="primary">导出</el-button>
                  </div>
                </div>
                <div class="box-body">
                  <my-table-view :border="true" :columns="localDataColumns" :data="localDataTable" />
                  <Pagination />
                </div>
              </div>
            </el-tab-pane>
            <el-tab-pane label="本地日志" name="second">
              <div class="box">
                <div class="box-header handle">
                  <div class="box-tools">
                    <el-button type="primary">打印</el-button>
                    <el-button type="primary">导出</el-button>
                  </div>
                </div>
                <div class="box-body">
                  <my-table-view :border="true" :columns="localLogColumns" :data="localLogTable" />
                  <Pagination />
                </div>
              </div>
            </el-tab-pane>
            <el-tab-pane label="对账数据" name="third">
              <div class="box">
                <div class="box-header handle">
                  <div class="box-tools">
                    <el-button type="primary">对账</el-button>
                    <el-button type="primary">打印</el-button>
                    <el-button type="primary">导出</el-button>
                  </div>
                </div>
                <div class="box-body">
                  <my-table-view :columns="reconciliationDataColumns" :data="reconciliationDataTable" />
                  <Pagination />
                </div>
              </div>
            </el-tab-pane>
          </el-tabs>
        </div>
      </template>
    </normal-layer>
  </div>
</template>

<script>
import pageHandle from '@/mixins/pageHandle'
import NormalLayer from '@/views/components/PageLayers/normalLayer'
import FormItems from '@/views/components/PageLayers/form-items'
import { localDataColumns, localLogColumns, reconciliationDataColumns } from './tableCofig'
export default {
  components: {
    NormalLayer,
    FormItems
  },
  mixins: [pageHandle],
  props: {},
  data() {
    return {
      activeName: 'first',
      queryForm: {
        选择时间: '',
        对账类型: '',
        对账状态: '',
        经办部门: ''
      },
      itemsDatas: [
        { label: '对账类型', prop: '对账类型', type: 'select' },
        { label: '选择时间', prop: '选择时间', type: 'dateRange' },
        { label: '对账状态', prop: '对账状态', type: 'select' },
        { label: '经办部门', prop: '经办部门', type: 'select' }
      ],
      localDataColumns,
      localLogColumns,
      reconciliationDataColumns,
      localDataTable: [
        {
          '对账状态': '已对账',
          '就医地经办机构': '机构121',
          '参保地经办机构': '机构14441',
          '医疗费总额(元)': '11',
          '就诊结算时间': '2020-01-03',
          '交易类型': '类型11',
          '就诊登记号': '3213213213213',
          '结算流水号': '3213213213213',
          '原交易流水号': '12321421421'
        }
      ],
      localLogTable: [
        {
          '对账状态': '已对账',
          '就医地经办机构': '机构121',
          '参保地经办机构': '机构14441',
          '医疗费总额(元)': '11',
          '就诊结算时间': '2020-01-03',
          '交易类型': '类型11',
          '就诊登记号': '3213213213213',
          '结算流水号': '3213213213213',
          '原交易流水号': '12321421421'
        }
      ],
      reconciliationDataTable: [
        {
          '就医地': '长沙',
          '参保地': '广州',
          '就诊登记号': '123124214',
          '结算流水号': '321312312312',
          '原交易流水号': '321321313231',
          '成功标志': '是'
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
  methods: {}
}
</script>

<style scoped lang="scss">
.reconceiliation {
  height: 100%;
  >>> .layer-result {
    > .box {
      > .box-body {
        height: 100%;
        padding: 0;

        .el-tabs__content {
          padding: 0;
        }
      }
    }
  }
}
</style>
