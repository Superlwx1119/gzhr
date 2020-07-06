<template>
  <!--异地基金结算表领导审签-->
  <div class="offsite-charge-review">
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
              <el-form-item label="领导审签批号" prop="领导审签批号">
                <el-input v-model="searchForm.领导审签批号" clearable placeholder="请输入" />
              </el-form-item>
              <el-form-item label="二次汇总批号" prop="二次汇总批号">
                <el-input v-model="searchForm.二次汇总批号" clearable placeholder="请输入" />
              </el-form-item>
            </template>
            <template slot="btn">
              <el-button @click="reset">重置</el-button>
              <el-button type="primary" @click="search">查询</el-button>
            </template>
            <div slot="list" class="box">
              <div class="box-header handle">
                <span class="box-title">医疗费结算表</span>
                <div class="box-tools">
                  <el-button type="primary" @click="batchAudit">批量审签</el-button>
                </div>
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
            <RightDetailInfo :title="'医疗费结算信息'" :options="columns.slice(2)" :list-data="currDetail">
              <template slot="tools">
                <el-button type="primary" @click="audit">审签</el-button>
              </template>
            </RightDetailInfo>
            <section class="layer" style="height: calc(100% - 188px)">
              <div class="layer-tab">
                <el-tabs v-model="activeName" type="border-card">
                  <el-tab-pane label="医疗费结算单详情" name="first">
                    <my-table-view :border="true" :max-cloumns="7" :columns="detailColumns" :data="detailData" />
                    <Pagination />
                  </el-tab-pane>
                  <el-tab-pane label="二次汇总表" name="second">
                    <div class="box">二次汇总表</div>
                  </el-tab-pane>
                  <el-tab-pane label="二次汇总明细表" name="third">
                    <div class="box">二次汇总明细表</div>
                  </el-tab-pane>
                </el-tabs>
              </div>
            </section>
          </div>
        </div>
      </el-col>
    </el-row>
    <audit-dialog v-model="showAuditDialog" handle-name="审签" :dialog-title="dialogTitle" />
  </div>
</template>

<script>
import AuditDialog from '@/views/components/AuditDialog'
import { medicalColumns, medicalDetailColumns } from './tableColumns'
export default {
  components: {
    AuditDialog
  },
  props: {},
  data() {
    return {
      showAuditDialog: false,
      dialogTitle: '',
      multipleSelection: [],
      searchForm: {
        申报日期: '',
        清算类型: '',
        清算状态: '',
        医保区划: '',
        领导审签批号: '',
        二次汇总批号: ''
      },
      activeName: 'first',
      columns: medicalColumns,
      tableData: [1, 2, 3, 4, 5, 6, 7, 8].map(item => {
        return {
          '二次汇总批号': '89784',
          '经办部门': '医保',
          '领导审签批号': '12312321',
          '业务交接号': '32132',
          '拨付单号': '213213',
          '拨付对象': '1',
          '清算类型': '23',
          '拨付对象名称': '名称',
          '总拨付人次': '21',
          '违规人次': '21',
          '制单人': 'alex',
          '制单时间': '2020-01-02',
          '清算状态': '清算状态',
          '拨付标志': '是',
          '审核人': 'jack',
          '审核时间': '2020-03-03'
        }
      }),
      currDetail: {},
      detailColumns: medicalDetailColumns,
      detailData: [1, 2, 3].map(item => {
        return {
          '拨付单号': '812462',
          '单位性质': '单位1',
          '基金类别': 'cate',
          '业务类型': 'bus',
          '人员类别': 'person',
          '医院记帐(元)': '123',
          '个人现金(元)': '323',
          '本次应拨付金额': '32',
          '实际应拨付金额': '323',
          '拔付累计金额': '32',
          '预留金额': '32',
          '审核扣减金额': '32',
          '补/扣金额': '32',
          '定额调节金额': '32',
          '上次结转金额': '322',
          '下次结转金额': '33'
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
    batchAudit() {
      if (this.multipleSelection.length > 0) {
        this.showAuditDialog = true
        this.dialogTitle = '医疗费结算表审签'
      } else {
        this.$msgInfo('请选择操作数据')
      }
    },
    audit() {
      this.showAuditDialog = true
      this.dialogTitle = '医疗费结算表审签'
    }
  }
}
</script>

<style scoped lang="scss">
.offsite-charge-review {
  height: 100%;
}
</style>
