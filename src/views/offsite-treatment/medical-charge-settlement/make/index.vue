<template>
  <!--异地制作基金结算单-->
  <div class="offsite-charge-make">
    <el-row :gutter="10" class="tab-body">
      <el-col :md="10" :lg="8" :xl="6" class="tab-body-left">
        <el-form ref="searchForm" label-width="105px" :model="searchForm">
          <left-search-table :search-height="'162px'" :show-more-btn="true">
            <el-form-item label="申报日期" prop="申报日期">
              <el-date-picker
                v-model="searchForm.申报日期"
                type="daterange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                style="width: 100%"
                format="yyyy-MM-dd"
                value-format="yyyy-MM-dd"
              />
            </el-form-item>
            <el-form-item label="清算类型" prop="清算类型">
              <el-select v-model="searchForm.清算类型" clearable style="width: 100%">
                <el-option label="选项1" :value="1" />
                <el-option label="选项2" :value="2" />
              </el-select>
            </el-form-item>
            <template slot="more">
              <el-form-item label="清算状态" prop="清算状态">
                <el-select v-model="searchForm.清算状态" clearable style="width: 100%">
                  <el-option label="状态1" :value="1" />
                  <el-option label="状态2" :value="2" />
                </el-select>
              </el-form-item>
              <el-form-item label="医保区划" prop="医保区划">
                <el-select v-model="searchForm.医保区划" clearable style="width: 100%">
                  <el-option label="区划1" :value="1" />
                  <el-option label="区划2" :value="2" />
                </el-select>
              </el-form-item>
              <el-form-item label="业务交接号" prop="业务交接号">
                <el-input v-model="searchForm.业务交接号" clearable placeholder="请输入" />
              </el-form-item>
            </template>
            <template slot="btn">
              <el-button @click="reset">重置</el-button>
              <el-button type="primary" @click="search">查询</el-button>
            </template>
            <div slot="list" class="box">
              <div class="box-header">
                <span class="box-title">基本申报信息</span>
              </div>
              <div class="box-body">
                <my-table-view :border="true" :max-cloumns="4" :first-highlight="true" :highlight-current-row="true" :columns="columns | filterColumns(4)" :data="tableData" @rowClick="rowClick" />
                <Pagination layout="total,prev, pager, next,jumper" />
              </div>
            </div>
          </left-search-table>
        </el-form>
      </el-col>
      <el-col :md="14" :lg="16" :xl="18" class="tab-body-right">
        <div class="box">
          <RightDetailInfo :title="'基本申报信息'" :handle="false" :options="columns.slice(2)" :list-data="currDetail" />
          <section style="height: calc(100% - 195px)">
            <div class="layer-tab">
              <el-tabs v-model="activeName" type="border-card">
                <el-tab-pane label="基金结算信息" name="first">
                  <my-table-view :border="true" :max-cloumns="7" :columns="detailColumns" :data="detailData" />
                  <Pagination />
                </el-tab-pane>
                <el-tab-pane label="基金结算表" name="second">
                  <div>自定义报表</div>
                </el-tab-pane>
              </el-tabs>
            </div>
          </section>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { declareColumns, settlementColumns } from './tableColumns'
export default {
  props: {},
  data() {
    return {
      searchForm: {
        申报日期: '',
        清算类型: '',
        清算状态: '',
        医保区划: '',
        业务交接号: ''
      },
      activeName: 'first',
      columns: declareColumns,
      tableData: [1, 2, 3, 4, 5, 6, 7, 8].map(item => {
        return {
          '清算状态': '清算状态1',
          '业务交接号': '12321',
          '申报医疗机构编码': '3213213',
          '申报医疗机构名称': '机构1',
          '结算申报年月': '2020-02-01',
          '行政区划': '行政区划',
          '清算类型': '类型1',
          '开始日期': '2020-01-01',
          '结束日期': '2020-01-02',
          '申报单据数': '12321321',
          '申报说明': '说明1',
          '申报人': 'alex',
          '受理说明': '说明111',
          '受理人': 'jack',
          '受理时间': '2020-02-01'
        }
      }),
      currDetail: {},
      detailColumns: settlementColumns,
      detailData: [1, 2, 3].map(item => {
        return {
          '清算类别': '类别11',
          '医疗类别': '类别22',
          '人员类别': '类别1',
          '清算方式': '方式1',
          '基金支付类型': '类型1',
          '统筹区基金支付类型': '类型2',
          '基金申报总额(元)': '12',
          '应拨金额(元)': '21',
          '扣款总额(元)': '33',
          '预留金额(元)': '44',
          '总控扣款金额(元)': '55',
          '补扣金额(元)': '66',
          '实拨金额(元)': '77'
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
    }
  }
}
</script>

<style scoped lang="scss">
.offsite-charge-make {
  height: 100%;
}
.el-tabs {
  margin: 0 10px;
  height: calc(100% - 10px);
}
</style>
