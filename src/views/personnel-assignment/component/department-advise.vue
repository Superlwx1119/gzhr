<template>
  <div class="HiringApply">
    <!-- 相关部门意见 -->
    <div class="box-header handle">
      <span class="box-title">相关部门意见</span>
    </div>
    <el-form ref="addForm" :model="addForm" label-width="105px">
      <el-row :gutter="12">
        <el-col :span="8">
          <el-form-item label="调出单位" prop="调出单位">
            <el-input v-model="addForm.调出单位" @input="handleSelectChange" />
          </el-form-item>
        </el-col>
        <el-col :span="16">
          <el-form-item label="意见" prop="调出意见">
            <el-input v-model="addForm.调出意见" @input="handleSelectChange" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="调入单位" prop="调入单位">
            <el-input v-model="addForm.调入单位" @input="handleSelectChange" />
          </el-form-item>
        </el-col>
        <el-col :span="16">
          <el-form-item label="意见" prop="调入单位意见">
            <el-input v-model="addForm.调入单位意见" @input="handleSelectChange" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="调出单位主管部门" prop="调出单位主管部门">
            <el-input v-model="addForm.调出单位主管部门" @input="handleSelectChange" />
          </el-form-item>
        </el-col>
        <el-col :span="16">
          <el-form-item label="意见" prop="调出主管意见">
            <el-input v-model="addForm.调出主管意见" @input="handleSelectChange" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="调入单位主管部门" prop="调入单位主管部门">
            <el-input v-model="addForm.调入单位主管部门" @input="handleSelectChange" />
          </el-form-item>
        </el-col>
        <el-col :span="16">
          <el-form-item label="意见" prop="调入主管意见">
            <el-input v-model="addForm.调入主管意见" @input="handleSelectChange" />
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script>
export default {
  components: {},
  mixins: [],
  props: {
    addFormData: {
      type: Object,
      default: function() { return {} }
    }
  },
  data() {
    return {
      addForm: {}
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
