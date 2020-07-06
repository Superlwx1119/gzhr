<template>
  <!--  疾病限额审核-->
  <div class="drugInfoQuery item4">
    <section class="layer layer-query">
      <div class="box">
        <ConditionHeader />
        <div class="box-body">
          <el-form label-width="105px">
            <el-row :gutter="10">
              <el-col :md="12" :lg="8" :xl="6">
                <el-form-item label="病种类别" prop="病种类别">
                  <disease-type v-model="searchForm.病种类别" />
                </el-form-item>
              </el-col>
              <el-col :md="12" :lg="8" :xl="6">
                <el-form-item label="选择疾病" prop="选择疾病">
                  <disease-info v-model="searchForm.选择疾病" />
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
      <div class="box">
        <div class="box-header handle">
          <span class="box-title">疾病限额列表</span>
          <div class="box-tools">
            <el-button type="primary">批量审核</el-button>
          </div>
        </div>
        <div class="box-body">
          <expand-list :is-border="true" :is-selection="true" :is-index="true" :operates="firstOperates" :columns="firstColumns" :data="firstData" />
          <Pagination />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import AuditStatus from '@/components/Select/AuditStatus'
import DiseaseType from '@/components/Select/DiseaseType'
import DiseaseInfo from '@/components/Select/DiseaseInfo'
export default {
  name: '',
  components: {
    AuditStatus,
    DiseaseType,
    DiseaseInfo
  },
  mixins: [],
  props: {},
  data() {
    return {
      searchForm: {},
      activeName: 'first',
      firstColumns: [
        { label: '病种类别', prop: '病种类别', align: 'center', overflow: true, display_colums: true },
        { label: '病种名称', prop: '病种名称', align: 'center', overflow: true, display_colums: true },
        { label: '限额', prop: '限额', align: 'center', overflow: true, display_colums: true },
        { label: '限制方式', prop: '限制方式', align: 'center', overflow: true, display_colums: true },
        { label: '险种类型', prop: '险种类型', align: 'center', overflow: true, display_colums: true },
        { label: '人员类别', prop: '人员类别', align: 'center', overflow: true, display_colums: true },
        { label: '医院级别', prop: '医院级别', align: 'center', overflow: true, display_colums: true },
        { label: '医院等级', prop: '医院等级', align: 'center', overflow: true },
        { label: '病种分型', prop: '病种分型', align: 'center', overflow: true },
        { label: '严重程度', prop: '严重程度', align: 'center', overflow: true },
        { label: '生效日期', prop: '生效日期', align: 'center', overflow: true },
        { label: '失效日期', prop: '失效日期', align: 'center', overflow: true },
        { label: '审核状态', prop: '审核状态', align: 'center', overflow: true },
        { label: '行政级别', prop: '行政级别', align: 'center', overflow: true },
        { label: '医院经营类型', prop: '医院经营类型', align: 'center', overflow: true },
        { label: '修改状态', prop: '修改状态', align: 'center', overflow: true }
      ],
      firstOperates: {
        width: '80px',
        list: [
          { label: '审核', type: 'text', show: true, method: () => {} }
        ]
      },
      firstData: [111, 222, 333, 444, 555, 666, 777, 888, 999].map((item) => {
        return { '审核状态': '已审核' + item, '修改状态': '修改状态', '行政级别': '行政级别', '医院经营类型': '医院经营类型', '严重程度': '严重程度', '生效日期': '生效日期', '失效日期': '失效日期', '病种类别': '病种类别', '病种名称': '病种名称', '限额': '限额', '限制方式': '限制方式', '险种类型': '险种类型', '人员类别': '人员类别', '医院级别': '医院级别', '医院等级': '医院等级', '病种分型': '病种分型' }
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
