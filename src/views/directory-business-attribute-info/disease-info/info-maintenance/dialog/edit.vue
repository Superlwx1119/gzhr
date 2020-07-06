<template>
  <form-dialog title="病种类别修改" :is-show="show" new-class="small" @update:isShow="updateIsShow" @resetForm="resetForm">
    <el-form ref="editForm" :model="editForm" :rules="rules" label-width="105px">
      <div class="box">
        <div class="box-body">
          <el-row :gutter="10">
            <el-col :span="24">
              <el-form-item label="病种类别" prop="病种类别">
                <disease-type v-model="editForm.病种类别" />
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item label="选择疾病" prop="选择疾病">
                <disease-info v-model="editForm.选择疾病" />
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
  name: 'Edit',
  components: {
    DiseaseType,
    DiseaseInfo
  },
  mixins: [],
  props: {
    form: { type: Object, default: () => {} },
    show: {
      type: Boolean,
      default: () => { return false }
    }
  },
  data() {
    return {
      rules: {
        type: { required: true }
      }
    }
  },
  computed: {
    editForm: function() {
      return this.form
    }
  },
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
      this.$refs.editForm.resetFields()
    },
    close() {
      this.$emit('update:show', false)
    },
    confirm() {}
  }
}
</script>

<style scoped lang="scss"></style>
