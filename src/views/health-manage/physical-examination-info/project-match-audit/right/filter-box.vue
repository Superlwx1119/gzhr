<template>
  <div class="audit-filter-box">
    <el-form ref="filterForm" :model="filterForm" label-width="80px">
      <el-row :gutter="10">
        <el-col :span="8">
          <el-form-item label="审核状态" prop="审核状态1">
            <audit-status v-model="filterForm.审核状态1" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="医保项目" prop="医保项目1">
            <insurance-directory v-model="filterForm.医保项目1" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="体检项目" prop="体检项目1">
            <health-project v-model="filterForm.体检项目1" @keyup.enter="query" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="统计类别" prop="统计类别1">
            <statistical-type v-model="filterForm.统计类别1" />
          </el-form-item>
        </el-col>
        <el-col :span="16" style="text-align: right">
          <el-button>重置</el-button>
          <el-button type="primary">查询</el-button>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script>
import AuditStatus from '@/components/Select/fund-insurance-manage/AuditStatus'
import InsuranceDirectory from '@/components/Select/InsuranceDirectory'
import HealthProject from '@/components/Select/health-manage/HealthProject'
import StatisticalType from '@/components/Select/health-manage/StatisticalType'
export default {
  name: 'FilterBox',
  components: {
    AuditStatus,
    InsuranceDirectory,
    HealthProject,
    StatisticalType
  },
  mixins: [],
  props: {},
  data() {
    return {
      filterForm: {}
    }
  },
  computed: {},
  watch: {},
  created() {
  },
  mounted() {
  },
  methods: {
    query() {
    }
  }
}
</script>

<style scoped lang="scss"></style>
