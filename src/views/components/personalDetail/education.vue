<template>
  <!-- 教育经历 -->
  <div>
    <el-form ref="addForm" :model="addForm" :rules="rules" label-width="105px" style="margin-bottom:10px">
      <el-row :gutter="12">
        <el-col :md="12" :lg="8" :xl="6">
          <el-form-item label="教育类别" prop="教育类别">
            <el-select v-model="addForm.教育类别" placeholder="请选择" @input="handleSelectChange">
              <el-option label="在职教育" value="1" />
              <el-option label="全日制教育" value="2" />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :md="12" :lg="8" :xl="6">
          <el-form-item label="学历" prop="学历">
            <EducationBackground v-model="addForm.学历" @input="handleSelectChange" />
          </el-form-item>
        </el-col>
        <el-col :md="12" :lg="8" :xl="6">
          <el-form-item label="学位" prop="学位">
            <EducationDegree v-model="addForm.学位" @input="handleSelectChange" />
          </el-form-item>
        </el-col>
        <el-col :md="12" :lg="8" :xl="6">
          <el-form-item label="学习形式" prop="学习形式">
            <LearningType v-model="addForm.学习形式" @input="handleSelectChange" />
          </el-form-item>
        </el-col>
        <el-col :md="12" :lg="8" :xl="6">
          <el-form-item label="入学时间" prop="入学时间">
            <el-date-picker
              v-model="addForm.入学时间"
              type="date"
              value-format="yyyyMMdd"
              style="width:100%;height:100%"
              placeholder="选择日期"
              @input="handleSelectChange"
            />
          </el-form-item>
        </el-col>
        <el-col :md="12" :lg="8" :xl="6">
          <el-form-item label="毕业时间" prop="毕业时间">
            <el-date-picker
              v-model="addForm.毕业时间"
              type="date"
              value-format="yyyyMMdd"
              style="width:100%;height:100%"
              placeholder="选择日期"
              @input="handleSelectChange"
            />
          </el-form-item>
        </el-col>
        <el-col :md="12" :lg="8" :xl="6">
          <el-form-item label="学校名称" prop="学校名称">
            <el-input v-model="addForm.学校名称" />
          </el-form-item>
        </el-col>
        <el-col :md="12" :lg="8" :xl="6">
          <el-form-item label="学制" prop="学制">
            <el-input v-model="addForm.学制" min="0" type="number" />
          </el-form-item>
        </el-col>
        <el-col :md="24" :lg="8" :xl="24" style="text-align: right">
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
import EducationBackground from '@/components/Select/EducationBackground'
import EducationDegree from '@/components/Select/EducationDegree'
import LearningType from '@/components/Select/LearningType'
export default {
  components: {
    EducationBackground,
    EducationDegree,
    LearningType
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
        // { type: 'selection' },
        { type: 'index', label: '序号' },
        { label: '学历', prop: 'aab069' },
        { label: '学位', prop: 'c' },
        { label: '学制', prop: 'c' },
        { label: '毕业时间', prop: 'c' },
        { label: '入学时间', prop: 'c' },
        { label: '教育类别', prop: 'c' },
        { label: '学校名称', prop: 'aab019' },
        { label: '所学专业', prop: 'aab019' },
        { label: '参加党派时所在单位', prop: 'rb0195' },
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
