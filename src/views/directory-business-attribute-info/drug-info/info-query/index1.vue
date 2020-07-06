<template>
  <!--  药品目录业务属性信息查询-->
  <div class="drugInfoQuery">
    <div class="layer-tab">
      <el-row :gutter="10" class="tab-body">
        <el-col :md="10" :lg="8" :xl="6" class="tab-body-left">
          <el-form label-width="105px">
            <search-table
              type="tab"
              :tab-options="tabOptions"
              :search-height="'150px'"
              :list-title="'自付比例信息列表'"
              :table-col-count="3"
              :page-info="pageInfo"
              :is-selection="true"
              @getTabListData="getListData"
              @selectAll="selectAll"
            >
              <template>
                <el-form-item label="医保目录" prop="医保目录">
                  <insurance-directory v-model="searchForm.医保目录" />
                </el-form-item>
                <el-form-item label="医疗收费项目" prop="医疗收费项目类别1">
                  <medical-charge-category v-model="searchForm.医疗收费项目类别1" />
                </el-form-item>
              </template>
              <template #more>
                <el-form-item label="审核状态" prop="审核状态1">
                  <audit-status v-model="searchForm.审核状态1" />
                </el-form-item>
                <el-form-item label="起始时间" prop="录入时间">
                  <el-date-picker v-model="searchForm.录入时间" type="daterange" style="width: 100%;" start-placeholder="选择时间" end-placeholder="选择时间" />
                </el-form-item>
              </template>
              <template #btn>
                <el-button>重置</el-button>
                <el-button type="primary">查询</el-button>
              </template>
              <template #listTools>
                <el-button type="primary">批量操作</el-button>
                <el-button type="primary">批量操作</el-button>
              </template>
            </search-table>
          </el-form>
        </el-col>
        <el-col :md="14" :lg="16" :xl="18" class="tab-body-right">
          <div class="box">
            <div class="box-body">
              <RightDetailInfo :title="'自付比例信息列表'" :options="columns" :list-data="detail" />
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import RightDetailInfo from '@/components/RightDetailInfo'
import AuditStatus from '@/components/Select/AuditStatus'
import InsuranceDirectory from '@/components/Select/InsuranceDirectory'
import MedicalChargeCategory from '@/components/Select/MedicalChargeCategory'
export default {
  name: 'DrugInfoQuery',
  components: {
    RightDetailInfo,
    AuditStatus,
    InsuranceDirectory,
    MedicalChargeCategory
  },
  mixins: [],
  props: {},
  data() {
    return {
      tabOptions: [
        { label: '自付比例信息',
          tableColumns: [
            { label: '审核状态', prop: '审核状态', align: 'center' },
            { label: '医保目录编码', prop: '医保目录编码', align: 'center' },
            { label: '医保目录名称', prop: '医保目录名称', align: 'center' },
            { label: '医保目录自付比例人员类别', prop: '医保目录自付比例人员类别', align: 'center' },
            { label: '目录自付比例类别', prop: '目录自付比例类别', align: 'center' },
            { label: '自付比例', prop: '自付比例', align: 'center' },
            { label: '开始时间', prop: '开始时间', align: 'center' },
            { label: '结束时间', prop: '结束时间', align: 'center' },
            { label: '医保区划', prop: '医保区划', align: 'center' },
            { label: '段内自付比例', prop: '段内自付比例', align: 'center' }
          ],
          tabBtns: [
            { label: '批量删除', type: 'danger', method: () => {
              console.log(123)
            } },
            { label: '批量审核', method: () => {} }
          ],
          tableData: [111, 222, 333, 444, 555, 666, 777, 888, 999].map((item) => {
            return { '审核状态': '已审核' + item, '医保目录编码': '医保目录编码', '医保目录名称': '医保目录名称', '医保目录自付比例人员类别': '医保目录自付比例人员类别', '目录自付比例类别': '目录自付比例类别', '自付比例': '自付比例', '开始时间': '开始时间', '结束时间': '结束时间', '医保区划': '医保区划', '段内自付比例': '段内自付比例' }
          })
        },
        { label: '限价信息',
          tableColumns: [
            { label: '审核状态', prop: '审核状态', align: 'center' },
            { label: '医保目录编码', prop: '医保目录编码', align: 'center' },
            { label: '医保目录限价类型', prop: '医保目录限价类型', align: 'center', overflow: true },
            { label: '医保目录超限处理方式', prop: '医保目录超限处理方式', align: 'center' },
            { label: '医保目录定价上限金额', prop: '医保目录定价上限金额', align: 'center' },
            { label: '开始时间', prop: '开始时间', align: 'center' },
            { label: '结束时间', prop: '结束时间', align: 'center' },
            { label: '医保区划', prop: '医保区划', align: 'center' },
            { label: '人员类别', prop: '人员类别', align: 'center' },
            { label: '医院级别', prop: '医院级别', align: 'center' }
          ],
          tableData: [111, 222, 333, 444, 555, 666, 777, 888, 999, 0, 123, 222].map((item) => {
            return { '审核状态': '未审核' + item, '医保目录编码': '医保目录编码', '医保目录限价类型': '医保目录超限处理方式', '医保目录超限处理方式': '医保目录自付比例人员类别', '医保目录定价上限金额': '医保目录定价上限金额', '医院级别': '医院级别', '开始时间': '开始时间', '结束时间': '结束时间', '医保区划': '医保区划', '人员类别': '人员类别' }
          })
        }
      ],
      searchForm: {},
      detail: {},
      columns: [],
      pageInfo: {
        pageNum: 1,
        pageSize: 15,
        total: 10,
        startRow: 1,
        endRow: 10
      }
    }
  },
  computed: {
  },
  watch: {},
  created() {
  },
  mounted() {
  },
  methods: {
    getListData(data, options) {
      this.detail = data
      this.columns = options
    },
    selectAll(v) {
      console.log(v)
    }
  }
}
</script>

<style scoped lang="scss"></style>
