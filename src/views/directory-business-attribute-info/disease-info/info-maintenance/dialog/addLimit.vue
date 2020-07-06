<template>
  <form-dialog title="疾病限额新增" :is-show="show" size="middle" @update:isShow="updateIsShow" @resetForm="resetForm">
    <el-form ref="addForm" :model="addForm" :rules="rules" label-width="105px">
      <div class="box">
        <div class="box-body">
          <el-row :gutter="10">
            <el-col :span="12">
              <el-form-item label="限额" prop="限额">
                <el-input v-model="addForm.限额" placeholder="请输入" />
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="限额方式" prop="限额方式">
                <TransfiniteType v-model="addForm.限额方式" />
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="险种类型" prop="险种类型">
                <InsuranceType v-model="addForm.险种类型" />
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="人员类别" prop="人员类别">
                <PersonalType v-model="addForm.人员类别" />
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="医院级别" prop="医院级别">
                <HospitalLevel v-model="addForm.医院级别" />
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="医院等级" prop="医院等级">
                <HospitalGrade v-model="addForm.医院等级" />
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="病种分型" prop="病种分型">
                <DiseaseBranch v-model="addForm.病种分型" />
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="生效日期" prop="生效日期">
                <el-date-picker v-model="addForm.生效日期" style="width: 100%;" type="date" placeholder="选择时间" />
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="失效日期" prop="失效日期">
                <el-date-picker v-model="addForm.失效日期" style="width: 100%;" type="date" placeholder="选择时间" />
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="严重程度" prop="严重程度">
                <Severity v-model="addForm.严重程度" />
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
import TransfiniteType from '@/components/Select/TransfiniteType'
import InsuranceType from '@/components/Select/InsuranceType'
import PersonalType from '@/components/Select/PersonalType'
import HospitalLevel from '@/components/Select/HospitalLevel'
import HospitalGrade from '@/components/Select/HospitalGrade'
import DiseaseBranch from '@/components/Select/DiseaseBranch'
import Severity from '@/components/Select/Severity'
export default {
  name: 'AddLimit',
  components: {
    TransfiniteType,
    InsuranceType,
    PersonalType,
    HospitalLevel,
    HospitalGrade,
    DiseaseBranch,
    Severity
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
