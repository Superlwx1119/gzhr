<template>
  <div class="HiringApply">
    <!-- 其他家庭成员情况 -->
    <div class="box-header handle">
      <span class="box-title">其他家庭成员情况</span>
      <div slot="title-btns" class="box-tools">
        <el-button type="primary" @click="pushFamily">添加</el-button>
      </div>
    </div>
    <el-form ref="addForm" :model="addForm" :rules="rules" label-width="105px">
      <el-row v-for="(item,index) of addForm.familyList" :key="index" :gutter="12">
        <el-col :span="8">
          <el-form-item label="称谓" prop="称谓">
            <Appellation v-model="item.称谓" @input="handleSelectChange" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="姓名" prop="姓名">
            <el-input v-model="item.姓名" @input="handleSelectChange" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="政治面貌" prop="政治面貌">
            <PoliticsStatus v-model="item.政治面貌" @input="handleSelectChange" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="工作单位" prop="工作单位">
            <el-input v-model="item.工作单位" @input="handleSelectChange" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="职务" prop="职务">
            <el-input v-model="item.职务" @input="handleSelectChange" />
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script>
import Appellation from '@/components/Select/Appellation'
import PoliticsStatus from '@/components/Select/PoliticsStatus'
export default {
  components: {
    Appellation,
    PoliticsStatus
  },
  mixins: [],
  props: {
    addFormData: {
      type: Object,
      default: function() { return {} }
    }
  },
  data() {
    return {
      addForm: {
        familyList: [
          { 称谓: '', 姓名: '', 政治面貌: '', 工作单位: '', 职务: '' }
        ]
      },
      rules: {
        姓名: [{ required: true, message: '请输入姓名', trigger: 'blur' }],
        学位: [{ required: true, message: '请选择学位', trigger: 'change' }],
        称谓: [{ required: true, message: '请选择称谓', trigger: 'change' }],
        全日毕业时间: [{ required: true, message: '请选择全日毕业时间', trigger: 'change' }],
        政治面貌: [{ required: true, message: '请选择政治面貌', trigger: 'change' }],
        工作单位: [{ required: true, message: '请输入工作单位', trigger: 'blur' }],
        职务: [{ required: true, message: '请输入职务', trigger: 'blur' }]
      }
    }
  },
  computed: {},
  watch: {
    addFormData: function(newValue) {
      this.addForm = newValue
      this.$emit('input', this.addForm)
    }
  },
  created() {
  },
  mounted() {
  },
  methods: {
    handleSelectChange(v) {
      this.$emit('input', v)
    },
    pushFamily() {
      this.addForm.familyList.push({ 称谓: '', 姓名: '', 政治面貌: '', 工作单位: '', 职务: '' })
    }
  }
}
</script>

<style scoped lang="scss">
  .HiringApply{
    >div {
      height: 100%;
    }
  }
</style>
