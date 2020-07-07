<template>
  <div>
    <el-form ref="addForm" :model="addForm" :rules="rules" label-width="105px">
      <el-row :gutter="12">
        <el-col :md="12" :lg="8" :xl="6">
          <el-form-item label="参加时间" prop="参加时间">
            <el-date-picker
              v-model="addForm.参加时间"
              type="date"
              value-format="yyyyMMdd"
              style="width:100%;height:100%"
              placeholder="选择日期"
              @input="handleSelectChange"
            />
          </el-form-item>
        </el-col>

        <el-col :md="12" :lg="8" :xl="6">
          <el-form-item label="转正日期" prop="转正日期">
            <el-date-picker
              v-model="addForm.转正日期"
              type="date"
              value-format="yyyyMMdd"
              style="width:100%;height:100%"
              placeholder="选择日期"
              @input="handleSelectChange"
            />
          </el-form-item>
        </el-col>
        <el-col :md="12" :lg="8" :xl="6">
          <el-form-item label="政治面貌" prop="政治面貌">
            <PoliticsStatus v-model="addForm.政治面貌" @input="handleSelectChange" />
          </el-form-item>
        </el-col>
        <el-col :md="12" :lg="8" :xl="6">
          <el-form-item label="参加党派所在单位" prop="参加党派所在单位">
            <el-input v-model="addForm.参加党派所在单位" />
          </el-form-item>
        </el-col>
        <el-col :md="24" :lg="16" :xl="24" style="text-align: right">
          <el-button type="primary" @click="save('searchForm')">保存</el-button>
          <el-button @click="reset('searchForm')">重置</el-button>
        </el-col>
      </el-row>
    </el-form>
    <my-table-view v-loading="loading" :border="true" :max-cloumns="20" :columns="columns" :data="tableData">
      <template slot="operation">
        <el-button type="text">详情</el-button>
      </template>
    </my-table-view>
  </div>
</template>

<script>
import PoliticsStatus from '@/components/Select/PoliticsStatus'
export default {
  components: {
    PoliticsStatus
  },
  props: {
    addFormData: {
      type: Object,
      default: function() { return {} }
    }
  },
  data() {
    return {
      addForm: {},
      rules: {},
      loading: false,
      columns: [
        { type: 'selection' },
        { type: 'index', label: '序号' },
        { label: '政治面貌', prop: 'aab001' },
        { label: '参加时间', prop: 'aab069' },
        { label: '转正日期', prop: 'c' },
        { label: '介绍人', prop: 'aab019' },
        { label: '参加时所在单位', prop: 'rb0195' },
        { label: '操作', type: 'operation', fixed: 'right', width: '120px' }

      ],
      tableData: [1, 2, 3, 4, 5, 6, 7, 8].map(item => {
        return {
          a: '单位编码', b: '单位名称', c: '社会信用代码', d: '单位类型' + item, e: '岗位等级', f: '主管部门', g: '行业代码', h: '编制数', i: '法人代表', j: '奖励金发放比率', k: '联系人', l: '联系电话', m: '地址', n: '批准编制日期', o: '批准编制文号'
        }
      })
    }
  },
  watch: {
    addFormData: function(newValue) {
      this.addForm = newValue
      this.$emit('input', this.addForm)
    }
  },
  methods: {
    reset(formName) {
      this.$refs[formName].resetFields()
    },
    handleSelectChange(v) {
      this.$emit('input', v)
    },
    save(formName) {}
  }
}
</script>

<style lang="scss" scoped>

</style>
