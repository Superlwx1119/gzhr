<template>
  <!-- 任职履历 -->
  <div>
    <el-form ref="addForm" :model="addForm" :rules="rules" label-width="105px" style="margin-bottom:10px">
      <el-row :gutter="12">
        <el-col :md="12" :lg="8" :xl="6">
          <el-form-item label="岗位类别" prop="岗位类别">
            <StaffType v-model="addForm.岗位类别" @input="handleSelectChange" />
          </el-form-item>
        </el-col>
        <el-col :md="12" :lg="8" :xl="6">
          <el-form-item label="岗位级别" prop="岗位级别">
            <JobsLevel v-model="addForm.岗位级别" @input="handleSelectChange" />
          </el-form-item>
        </el-col>
        <el-col :md="12" :lg="8" :xl="6">
          <el-form-item label="享受岗位待遇" prop="享受岗位待遇">
            <JobsLevel v-model="addForm.享受岗位待遇" @input="handleSelectChange" />
          </el-form-item>
        </el-col>
        <el-col :md="12" :lg="8" :xl="6">
          <el-form-item label="任职状态" prop="任职状态">
            <el-select v-model="addForm.任职状态" placeholder="请选择" @input="handleSelectChange">
              <el-option label="在职" value="1" />
              <el-option label="不在职" value="2" />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :md="12" :lg="8" :xl="6">
          <el-form-item label="异动时间" prop="异动时间">
            <el-date-picker
              v-model="addForm.异动时间"
              type="date"
              value-format="yyyyMMdd"
              style="width:100%;height:100%"
              placeholder="选择日期"
              @input="handleSelectChange"
            />
          </el-form-item>
        </el-col>
        <el-col :md="12" :lg="8" :xl="6">
          <el-form-item label="选拔任用方式" prop="选拔任用方式">
            <EnterType v-model="addForm.选拔任用方式" @input="handleSelectChange" />
          </el-form-item>
        </el-col>
        <el-col :md="12" :lg="8" :xl="6">
          <el-form-item label="职务名称" prop="职务名称">
            <el-input v-model="addForm.职务名称" />
          </el-form-item>
        </el-col>
        <el-col :md="12" :lg="8" :xl="6">
          <el-form-item label="任职日期" prop="任职日期">
            <el-date-picker
              v-model="addForm.任职日期"
              type="date"
              value-format="yyyyMMdd"
              style="width:100%;height:100%"
              placeholder="选择日期"
              @input="handleSelectChange"
            />
          </el-form-item>
        </el-col>
        <el-col :md="12" :lg="8" :xl="6">
          <el-form-item label="任职文号" prop="任职文号">
            <el-input v-model="addForm.任职文号" />
          </el-form-item>
        </el-col>
        <el-col :md="12" :lg="8" :xl="6">
          <el-form-item label="双肩挑专技等级" prop="双肩挑专技等级">
            <el-input v-model="addForm.双肩挑专技等级" />
          </el-form-item>
        </el-col>
        <el-col :md="12" :lg="8" :xl="6">
          <el-form-item label="双身份拟保等级" prop="双身份拟保等级">
            <el-input v-model="addForm.双身份拟保等级" />
          </el-form-item>
        </el-col>
        <el-col :md="12" :lg="8" :xl="6">
          <el-form-item label="现政工等级" prop="现政工等级">
            <el-input v-model="addForm.现政工等级" />
          </el-form-item>
        </el-col>
        <el-col :md="12" :lg="8" :xl="6">
          <el-form-item label="参加党派时所在单位" prop="参加党派时所在单位">
            <el-input v-model="addForm.参加党派时所在单位" />
          </el-form-item>
        </el-col>
        <el-col :md="12" :lg="16" :xl="18" style="text-align: right">
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
import EnterType from '@/components/Select/EnterType'
import JobsLevel from '@/components/Select/JobsLevel'
import StaffType from '@/components/Select/StaffType'
export default {
  components: {
    StaffType,
    JobsLevel,
    EnterType
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
        { label: '岗位类别', prop: 'aab069' },
        { label: '岗位级别', prop: 'c' },
        { label: '异动时间', prop: 'c' },
        { label: '职务名称', prop: 'c' },
        { label: '任职日期', prop: 'c' },
        { label: '双肩挑', prop: 'c' },
        { label: '双身份', prop: 'aab019' },
        { label: '政工', prop: 'aab019' },
        { label: '任职状态', prop: 'aab019' },
        { label: '选拔任用方式', prop: 'aab019' },
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
