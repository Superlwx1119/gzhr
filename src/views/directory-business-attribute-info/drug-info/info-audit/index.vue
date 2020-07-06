<template>
  <!--  药品目录业务属性信息查询-->
  <div class="drugInfoQuery item4">
    <section class="layer layer-query">
      <div class="box">
        <ConditionHeader />
        <div class="box-body">
          <el-form label-width="105px">
            <el-row :gutter="10">
              <el-col :md="12" :lg="8" :xl="6">
                <el-form-item label="医保目录" prop="医保目录">
                  <insurance-directory v-model="searchForm.医保目录" />
                </el-form-item>
              </el-col>
              <el-col :md="12" :lg="8" :xl="6">
                <el-form-item label="医疗收费项目" prop="医疗收费项目类别1">
                  <medical-charge-category v-model="searchForm.医疗收费项目类别1" />
                </el-form-item>
              </el-col>
              <el-col :md="12" :lg="8" :xl="6">
                <el-form-item label="审核状态" prop="审核状态1">
                  <audit-status v-model="searchForm.审核状态1" />
                </el-form-item>
              </el-col>
              <el-col :md="12" :lg="8" :xl="6">
                <el-form-item label="起始时间" prop="录入时间">
                  <el-date-picker v-model="searchForm.录入时间" type="daterange" style="width: 100%;" start-placeholder="选择时间" end-placeholder="选择时间" />
                </el-form-item>
              </el-col>
              <el-col :md="24" :lg="16" :xl="24">
                <el-button>重置</el-button>
                <el-button type="primary">查询</el-button>
              </el-col>
            </el-row>
          </el-form>
        </div>
      </div>
    </section>
    <section class="layer layer-result">
      <div class="layer-tab">
        <div class="box">
          <div class="box-body result">
            <el-tabs v-model="activeName" type="card">
              <el-tab-pane label="自付比例信息" name="first">
                <div class="box">
                  <div class="box-header handle">
                    <div class="box-tools">
                      <el-button type="primary">批量审核</el-button>
                    </div>
                  </div>
                  <div class="box-body">
                    <expand-list :is-border="true" :is-selection="true" :is-index="true" :operates="firstOperates" :columns="firstColumns" :data="firstData" />
                    <Pagination />
                  </div>
                </div>
              </el-tab-pane>
              <el-tab-pane label="限价信息" name="second">
                <div class="box">
                  <div class="box-header handle">
                    <div class="box-tools">
                      <el-button type="primary">批量审核</el-button>
                    </div>
                  </div>
                  <div class="box-body">
                    <expand-list :is-border="true" :is-selection="true" :is-index="true" :operates="secondOperates" :columns="secondColumns" :data="secondData" />
                    <Pagination />
                  </div>
                </div>
              </el-tab-pane>
            </el-tabs>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import AuditStatus from '@/components/Select/AuditStatus'
import InsuranceDirectory from '@/components/Select/InsuranceDirectory'
import MedicalChargeCategory from '@/components/Select/MedicalChargeCategory'
export default {
  name: '',
  components: {
    AuditStatus,
    InsuranceDirectory,
    MedicalChargeCategory
  },
  mixins: [],
  props: {},
  data() {
    return {
      searchForm: {},
      activeName: 'first',
      firstColumns: [
        { label: '审核状态', prop: '审核状态', align: 'center', overflow: true, display_colums: true },
        { label: '医保目录编码', prop: '医保目录编码', align: 'center', overflow: true, display_colums: true },
        { label: '医保目录名称', prop: '医保目录名称', align: 'center', overflow: true, display_colums: true },
        { label: '自付比例人员类别', prop: '自付比例人员类别', align: 'center', overflow: true, display_colums: true },
        { label: '目录自付比例类别', prop: '目录自付比例类别', align: 'center', overflow: true, display_colums: true },
        { label: '自付比例', prop: '自付比例', align: 'center', overflow: true },
        { label: '开始时间', prop: '开始时间', align: 'center', overflow: true },
        { label: '结束时间', prop: '结束时间', align: 'center', overflow: true },
        { label: '医保区划', prop: '医保区划', align: 'center', overflow: true },
        { label: '段内自付比例', prop: '段内自付比例', align: 'center', overflow: true }
      ],
      firstOperates: {
        width: '80px',
        list: [
          { show: true, label: '审核', type: 'text', method: () => {} }
        ]
      },
      firstData: [111, 222, 333, 444, 555, 666, 777, 888, 999].map((item) => {
        return { '审核状态': '已审核' + item, '医保目录编码': '医保目录编码', '医保目录名称': '医保目录名称', '自付比例人员类别': '自付比例人员类别', '目录自付比例类别': '目录自付比例类别', '自付比例': '自付比例', '开始时间': '开始时间', '结束时间': '结束时间', '医保区划': '医保区划', '段内自付比例': '段内自付比例' }
      }),
      secondColumns: [
        { label: '审核状态', prop: '审核状态', align: 'center', overflow: true, display_colums: true },
        { label: '医保目录编码', prop: '医保目录编码', align: 'center', overflow: true, display_colums: true },
        { label: '医保目录限价类型', prop: '医保目录限价类型', align: 'center', overflow: true, display_colums: true },
        { label: '超限出理方式', prop: '超限出理方式', align: 'center', overflow: true, display_colums: true },
        { label: '定价上限金额', prop: '定价上限金额', align: 'center', overflow: true, display_colums: true },
        { label: '开始时间', prop: '开始时间', align: 'center', overflow: true },
        { label: '结束时间', prop: '结束时间', align: 'center', overflow: true },
        { label: '医保区划', prop: '医保区划', align: 'center', overflow: true },
        { label: '人员类别', prop: '人员类别', align: 'center', overflow: true },
        { label: '医院级别', prop: '医院级别', align: 'center', overflow: true }
      ],
      secondOperates: {
        width: '80px',
        list: [
          { show: true, label: '审核', type: 'text', method: () => {} }
        ]
      },
      secondData: [111, 222, 333, 444, 555, 666, 777, 888, 999].map((item) => {
        return { '审核状态': '未审核' + item, '医保目录编码': '医保目录编码', '医保目录限价类型': '医保目录限价类型', '超限出理方式': '超限出理方式', '定价上限金额': '定价上限金额', '医院级别': '医院级别', '开始时间': '开始时间', '结束时间': '结束时间', '医保区划': '医保区划', '人员类别': '人员类别' }
      })
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

<style scoped lang="scss"></style>
