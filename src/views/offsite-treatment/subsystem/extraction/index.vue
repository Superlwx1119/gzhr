<template>
  <!--跨省就医结算费用清分结果提取(参保地)-->
  <div class="offsite-charge-review">
    <el-row :gutter="10" class="tab-body">
      <el-col :md="10" :lg="8" :xl="6" class="tab-body-left">
        <el-form ref="searchForm" label-width="105px" :model="searchForm">
          <left-search-table :search-height="'162px'" :show-more-btn="true">
            <el-form-item label="清分年月" prop="清分年月">
              <el-date-picker
                v-model="searchForm.清分年月"
                type="month"
                placeholder="请选择"
                style="width: 100%; height: 100%"
                format="yyyy-MM"
                value-format="yyyy-MM"
              />
            </el-form-item>
            <el-form-item label="行政区划" prop="行政区划">
              <el-select v-model="searchForm.行政区划" clearable style="width: 100%">
                <el-option label="选项1" :value="1" />
                <el-option label="选项2" :value="2" />
              </el-select>
            </el-form-item>
            <template slot="more">
              <el-form-item label="医疗机构" prop="医疗机构">
                <el-cascader
                  :options="[]"
                  filterable
                  :props="{ checkStrictly: true }"
                  clearable
                  style="width: 100%"
                />
              </el-form-item>
            </template>
            <template slot="btn">
              <el-button @click="reset">重置</el-button>
              <el-button type="primary" @click="search">查询</el-button>
            </template>
            <div slot="list" class="box">
              <div class="box-header">
                <span class="box-title">跨省赴外就医清算明细</span>
              </div>
              <div class="box-body">
                <my-table-view :border="true" :max-cloumns="4" :first-highlight="true" :highlight-current-row="true" :columns="columns | filterColumns(4)" :data="tableData" :multiple-selection.sync="multipleSelection" @rowClick="rowClick" />
                <Pagination layout="total,prev, pager, next,jumper" />
              </div>
            </div>
          </left-search-table>
        </el-form>
      </el-col>
      <el-col :md="14" :lg="16" :xl="18" class="tab-body-right">
        <div class="box">
          <div class="box-body">
            <RightDetailInfo :title="'跨省赴外就医清算明细'" :handle="false" :options="columns.slice(2)" :list-data="currDetail">
              <!-- <template slot="tools">
                <el-button type="primary" @click="audit">审签</el-button>
              </template> -->
            </RightDetailInfo>
            <section class="layer" style="height: calc(100% - 158px)">
              <div class="box">
                <div class="box-header">
                  <span class="box-title">赴外就医审核扣款汇总</span>
                </div>
                <div class="box-body">
                  <MyTableView :border="true" :columns="detailColumns" :data="detailData">
                    <template slot="operation" slot-scope="scope">
                      <el-button type="text" class="modify" @click="checkRow(scope.row)">明细</el-button>
                    </template>
                  </MyTableView>
                  <Pagination />
                </div>
              </div>
            </section>
          </div>
        </div>
      </el-col>
    </el-row>
    <DeductionDetail
      :drawer-title="drawerTitle"
      :is-drawer-visible="isDrawerVisible"
      size="60%"
      @update:isShow="isShow"
    />
  </div>
</template>

<script>
import DeductionDetail from './components/DeductionDetail'
import { sortingDetailColumns, summaryColumns } from './tableColumns'
export default {
  components: {
    DeductionDetail
  },
  props: {},
  data() {
    return {
      isDrawerVisible: false,
      drawerTitle: '',
      multipleSelection: [],
      searchForm: {
        清分年月: '',
        行政区划: '',
        医疗机构: ''
      },
      activeName: 'first',
      columns: sortingDetailColumns,
      tableData: [1, 2, 3, 4, 5, 6, 7, 8].map(item => {
        return {
          '就医地所属省': '湖南省',
          '就医地所属市': '长沙市',
          '就医地所属区县': '天心区',
          '医疗机构编码(省平台)': '8923478932',
          '定点医药机构编号': '34243243',
          '定点医药机构名称': '第一医院',
          '社会保障号': '489127489274',
          '就诊登记号(省平台)': '9823478932',
          '结算流水号': '3874343434',
          '就诊事件ID': '1023890123',
          '结算事件ID': '390893293',
          '费用类型': '医药',
          '经办机构支付总额(元)': '213'
        }
      }),
      currDetail: {},
      detailColumns: summaryColumns,
      detailData: [1, 2, 3].map(item => {
        return {
          '就医地所属省': '湖南省',
          '就医地所属市': '长沙市',
          '就医地所属区县': '岳麓区',
          '医疗机构编码(省平台)': '891274891234',
          '定点医药机构编码': '3218937892',
          '定点医药机构名称': '第一医院',
          '结算审核扣款信息ID': '329088293',
          '社会保障号': '98345743',
          '姓名': 'alex',
          '就诊登记号(省平台)': '98437498',
          '结算流水号(省平台)': '3092830982',
          '对医疗机构审核扣款金额(元)': '434',
          '医疗费用结算扣款原因': 'iouwei',
          '扣款经办人': 'js',
          '扣款经办时间': '2020-01-02'
        }
      })
    }
  },
  computed: {},
  watch: {},
  created() {
  },
  mounted() {
    this.currDetail = this.tableData[0]
  },
  methods: {
    rowClick(v) {
      console.log(v)
      this.currDetail = v.row
    },
    search() {
      console.log(this.searchForm)
    },
    reset() {
      console.log(1)
      this.$refs.searchForm.resetFields()
    },
    checkRow(row) {
      this.isDrawerVisible = true
      this.drawerTitle = '扣款明细'
    },
    isShow(v) {
      this.isDrawerVisible = v
    }
  }
}
</script>

<style scoped lang="scss">
.offsite-charge-review {
  height: 100%;
}
</style>
