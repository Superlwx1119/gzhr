<template>
  <form-dialog title="病种类别新增" :is-show="show" new-class="small" @update:isShow="updateIsShow" @resetForm="resetForm">
    <el-form ref="addForm" :model="addForm" :rules="rules" label-width="105px">
      <div class="box">
        <div class="box-body">
          <el-row :gutter="10">
            <el-col :span="24">
              <el-form-item label="病种类别" prop="病种类别">
                <disease-type v-model="addForm.病种类别" />
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item label="选择疾病" prop="选择疾病">
                <disease-info v-model="addForm.选择疾病" />
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
import DiseaseType from '@/components/Select/DiseaseType'
import DiseaseInfo from '@/components/Select/DiseaseInfo'
export default {
  name: 'Add',
  components: {
    DiseaseType,
    DiseaseInfo
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
        type: { required: true }
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
