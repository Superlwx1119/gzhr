<template>
  <div class="HiringApply">
    <!-- 经办信息 -->
    <div class="box-header handle">
      <span class="box-title">经办信息</span>
    </div>
    <el-form ref="addForm" :model="addForm" :rules="rules" label-width="105px">
      <el-row :gutter="12">
        <el-col :span="8">
          <el-form-item label="姓名" prop="姓名">
            <el-input v-model="addForm.姓名" @input="handleSelectChange" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="联系电话" prop="联系电话">
            <el-input v-model="addForm.联系电话" @input="handleSelectChange" />
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script>
export default {
  components: {
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
      addForm: {},
      rules: {
        姓名: [{ required: true, message: '请输入姓名', trigger: 'blur' }],
        联系电话: [{ required: true, message: '请输入联系电话', trigger: 'blur' }]
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
