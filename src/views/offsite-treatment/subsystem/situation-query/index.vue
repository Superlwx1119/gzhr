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
                <span class="box-title">清分信息</span>
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
            <RightDetailInfo :title="'清分信息'" :options="columns.slice(2)" :list-data="currDetail">
              <!-- <template slot="tools">
                <el-button type="primary" @click="audit">审签</el-button>
              </template> -->
            </RightDetailInfo>
            <section class="layer" style="height: calc(100% - 188px)">
              <div class="box">
                <div class="box-header">
                  <span class="box-title">就医结算明细</span>
                </div>
                <div class="box-body">
                  <MyTableView :border="true" :columns="detailColumns" :data="detailData">
                    <template slot="operation" slot-scope="scope">
                      <el-button type="text" class="modify" @click="checkRow(scope.row)">扣费明细</el-button>
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
import { medicalColumns, medicalDetailColumns } from './tableColumns'
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
      columns: medicalColumns,
      tableData: [1, 2, 3, 4, 5, 6, 7, 8].map(item => {
        return {
          '就医地所属省': '湖南省' + item,
          '就医地所属市': '长沙市',
          '就医地所属区县': '天心区',
          '医疗机构编码': '289847927',
          '医疗机构名称': '第一医院',
          '清分年月': '2020-01-02',
          '业务类型': '业务1',
          '就医人次': '1',
          '就医人数': '2',
          '总费用(元)': '999',
          '个人支付费用(元)': '998',
          '记账费用(元)': '1',
          '审核扣减费用(元)': '1',
          '预付金实际支付费用(元)': '0',
          '确认标志': '确认标志',
          '备注': '备注'
        }
      }),
      currDetail: {},
      detailColumns: medicalDetailColumns,
      detailData: [1, 2, 3].map(item => {
        return {
          '比对结果': '一致',
          '就医地所属省': '湖南省',
          '就医地所属市': '长沙市',
          '就医地所属区县': '天心区',
          '医疗机构编码': '1290821',
          '医疗机构名称': '第一医院',
          '清分年月': '2020-01-01',
          '业务类型': '1',
          '就诊记录号': '89278921',
          '身份证号': '2109487012948',
          '姓名': 'iuwq',
          '性别': 'man',
          '异地就医类型': 'oiue',
          '入院日期': '2020-02-01',
          '出院日期': '2020-04-01',
          '结算日期': '2020-05-01',
          '总费用(元)': '392',
          '个人支付费用(元)': '321',
          '记账费用(元)': '123',
          '审核扣减费用(元)': '32',
          '预付金实际支付费用(元)': '12',
          '自费费用(元)': '32',
          '个人自付费用(元)': '32',
          '备注': '备注'
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
