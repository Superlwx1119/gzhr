<template>
  <!-- 培训进修 -->
  <div>
    <el-form ref="addForm" :model="addForm" :rules="rules" label-width="105px" style="margin-bottom:10px">
      <el-row :gutter="12">
        <el-col :md="12" :lg="8" :xl="6">
          <el-form-item label="培训班名称" prop="培训班名称">
            <el-input v-model="addForm.培训班名称" @input="handleSelectChange" />
          </el-form-item>
        </el-col>
        <el-col :md="12" :lg="8" :xl="6">
          <el-form-item label="培训类别" prop="培训类别">
            <Appellation v-model="addForm.培训类别" @input="handleSelectChange" />
          </el-form-item>
        </el-col>
        <el-col :md="12" :lg="8" :xl="6">
          <el-form-item label="起止日期" prop="起止日期">
            <el-date-picker
              v-model="addForm.起止日期"
              type="date"
              value-format="yyyyMMdd"
              style="width:100%;height:100%"
              placeholder="选择日期"
              @input="handleSelectChange"
            />
          </el-form-item>
        </el-col>
        <el-col :md="12" :lg="8" :xl="6">
          <el-form-item label="培训时长(天)" prop="培训时长">
            <el-input v-model="addForm.培训时长" @input="handleSelectChange" />
          </el-form-item>
        </el-col>
        <el-col :md="12" :lg="8" :xl="6">
          <el-form-item label="主办机构名称" prop="主办机构名称">
            <el-input v-model="addForm.主办机构名称" @input="handleSelectChange" />
          </el-form-item>
        </el-col>
        <el-col :md="12" :lg="8" :xl="6">
          <el-form-item label="主办机构类型" prop="主办机构类型">
            <National v-model="addForm.主办机构类型" @input="handleSelectChange" />
          </el-form-item>
        </el-col>

        <el-col :md="12" :lg="8" :xl="6">
          <el-form-item label="出国境标识" prop="出国境标识">
            <Relationship v-model="addForm.出国境标识" @input="handleSelectChange" />
          </el-form-item>
        </el-col>
        <el-col :md="12" :lg="8" :xl="6">
          <el-form-item label="培训离岗状态" prop="培训离岗状态">
            <PoliticsStatus v-model="addForm.培训离岗状态" @input="handleSelectChange" />
          </el-form-item>
        </el-col>
        <el-col :md="12" :lg="8" :xl="6">
          <el-form-item label="培训结果" prop="培训结果">
            <HealthType v-model="addForm.培训结果" @input="handleSelectChange" />
          </el-form-item>
        </el-col>
        <el-col :md="12" :lg="8" :xl="6">
          <el-form-item label="学习内容" prop="学习内容">
            <el-input v-model="addForm.学习内容" />
          </el-form-item>
        </el-col>
        <el-col :md="24" :lg="16" :xl="12" style="text-align: right">
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
import National from '@/components/Select/National'
import Appellation from '@/components/Select/Appellation'
import Relationship from '@/components/Select/Relationship'
import HealthType from '@/components/Select/HealthType'
import PoliticsStatus from '@/components/Select/PoliticsStatus'
export default {
  components: {
    National,
    Appellation,
    Relationship,
    PoliticsStatus,
    HealthType
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
        { label: '称谓', prop: 'aab069' },
        { label: '与本人关系', prop: 'c' },
        { label: '姓名', prop: 'c' },
        { label: '出生日期', prop: 'c' },
        { label: '政治面貌', prop: 'c' },
        { label: '工作单位及职务', prop: 'c' },
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
