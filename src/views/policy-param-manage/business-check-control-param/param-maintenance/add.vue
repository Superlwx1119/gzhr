<template>
  <form-dialog title="业务检查控制参数新增" :is-show="show" width="1000px" new-class="big" @update:isShow="updateIsShow" @resetForm="resetForm">
    <el-form ref="addForm" :model="addForm" :rules="rules" label-width="105px">
      <div class="box">
        <div class="box-body">
          <el-row :gutter="10">
            <el-col :span="8">
              <el-form-item label="参数编码" prop="参数编码">
                <el-input v-model="addForm.参数编码" placeholder="请输入" />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="参数描述" prop="参数描述">
                <el-input v-model="addForm.参数描述" placeholder="请输入" />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="参数值" prop="参数值">
                <el-input v-model="addForm.参数值" placeholder="请输入" />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="险种" prop="险种">
                <insurance-type v-model="addForm.险种" />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="人员类别" prop="人员类别">
                <personal-type v-model="addForm.人员类别" />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="医疗类别" prop="医疗类别">
                <medical-category v-model="addForm.医疗类别" />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="医保区划" prop="医保区划">
                <medical-zonation v-model="addForm.医保区划" />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="开始时间" prop="开始时间">
                <el-date-picker v-model="addForm.开始时间" style="width: 100%;" type="date" placeholder="选择时间" />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="结束时间" prop="结束时间">
                <el-date-picker v-model="addForm.结束时间" style="width: 100%;" type="date" placeholder="选择时间" />
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item label="备注" prop="备注">
                <el-input v-model="addForm.备注" type="textarea" :rows="3" placeholder="请输入" />
              </el-form-item>
            </el-col>
          </el-row>
        </div>
      </div>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="close">取消</el-button>
      <el-button type="primary" @click="confirm">保存</el-button>
    </span>
  </form-dialog>
</template>

<script>
import PersonalType from '@/components/Select/PersonalType'
import InsuranceType from '@/components/Select/InsuranceType'
import MedicalCategory from '@/components/Select/MedicalCategory'
import MedicalZonation from '@/components/Select/MedicalZonation'
export default {
  name: 'Add',
  components: {
    PersonalType,
    InsuranceType,
    MedicalCategory,
    MedicalZonation
  },
  mixins: [],
  props: {
    show: {
      type: Boolean,
      default: () => { return false }
    }
  },
  data() {
    return {
      addForm: {
      },
      rules: {
      }
    }
  },
  computed: {},
  watch: {},
  created() {
  },
  mounted() {
  },
  methods: {
    updateIsShow(v) {
      this.$emit('update:show', v)
    },
    resetForm() {
      this.$refs.addForm.resetFields()
    },
    close() {
      this.$emit('update:show', false)
    },
    confirm() {}
  }
}
</script>

<style scoped lang="scss"></style>
