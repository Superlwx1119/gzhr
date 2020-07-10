<template>
  <div class="box">
    <div class="box-body">
      <el-form ref="queryForm" :model="queryForm" label-width="105px" style="margin-bottom:10px">
        <el-row :gutter="12">
          <el-col :span="16">
            <el-form-item label="单位" prop="单位">
              <el-input v-model="queryForm.单位" readonly />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="考核年度" prop="考核年度">
              <el-date-picker
                v-model="queryForm.考核年度"
                type="year"
                placeholder="选择日期"
                @input="handleSelectChange"
              />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="姓名" prop="姓名">
              <el-input v-model="queryForm.姓名" />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="考核等级" prop="考核等级">
              <AppraisalLevel v-model="queryForm.考核等级" @input="handleSelectChange" />
            </el-form-item>
          </el-col>
          <el-col :span="8" style="text-align: right">
            <el-button type="primary" @click="save('queryForm')">查询</el-button>
            <el-button @click="reset('queryForm')">重置</el-button>
          </el-col>
        </el-row>
      </el-form>
      <my-table-view v-loading="loading" :border="true" :max-cloumns="20" :columns="columns" :data="tableData">
        <template slot="operation" slot-scope="{row}">
          <el-button type="text" @click="doAudit(row)">审核</el-button>
        </template>
      </my-table-view>
      <Pagination :data="pageInfo" @refresh="pageChange" />
    </div>
  </div>
</template>

<script>
import AppraisalLevel from '@/components/Select/AppraisalLevel'
export default {
  components: {
    AppraisalLevel
  },
  props: {
    detailInfo: {
      type: Object,
      default: function() { return {} }
    }
  },
  data() {
    return {
      queryForm: {},
      loading: false,
      pageInfo: {
        pageNum: 1,
        pageSize: 15,
        total: 10,
        startRow: 1,
        endRow: 10
      },
      columns: [
        { type: 'selection' },
        { type: 'index', label: '序号' },
        { label: '考核年度', prop: 'aab069' },
        { label: '姓名', prop: 'c' },
        { label: '证件号码', prop: 'aab019' },
        { label: '岗位级别', prop: 'rb0195' },
        { label: '考评等级', prop: 'aab022' },
        { label: '考评依据', prop: 'aab023' }
      ],
      tableData: [1, 2, 3, 4, 4, 5, 2]
    }
  },
  watch: {
    detailInfo: function(newValue) {
      this.queryForm = newValue
    }
  },
  methods: {
    reset(formName) {
      this.$refs[formName].resetFields()
    },
    handleSelectChange(v) {
      this.$emit('input', v)
    },
    pageChange(data) {
      this.pageInfo = data.pagination
    },
    save(formName) {}
  }
}
</script>

<style lang="scss" scoped>
  .appraisalDepartment{
    display: flex;
  }
</style>
