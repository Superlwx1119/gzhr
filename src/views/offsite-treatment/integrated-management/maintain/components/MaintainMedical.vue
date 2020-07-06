<template>
  <form-dialog size="small" :title="dialogTitle" :is-show="isDialogVisible" @update:isShow="isShow" @resetForm="resetForm">
    <el-form ref="maintainForm" :model="maintainForm" :rules="rules" label-width="105px">
      <el-row :gutter="10">
        <el-col>
          <el-form-item label="就医地" prop="medicalLand">
            <el-cascader
              v-model="maintainForm.medicalLand"
              :options="medicalLandOptions"
              :props="{ checkStrictly: true }"
              separator=""
              clearable
              style="width: 100%"
            />
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="closeDialog()">取消</el-button>
      <el-button type="primary" @click="save()">保存</el-button>
    </span>
  </form-dialog>
</template>
<script>
export default {
  props: {
    isDialogVisible: {
      type: Boolean,
      default: false
    },
    dialogTitle: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      maintainForm: {
        medicalLand: ''
      },
      medicalLandOptions: [
        {
          value: 'hunan',
          label: '湖南省',
          children: [{
            value: 'changsha',
            label: '长沙市',
            children: [{
              value: 'yueluqu',
              label: '岳麓区'
            }, {
              value: 'tianxinqu',
              label: '天心区'
            }, {
              value: 'yuhuaqu',
              label: '雨花区'
            }, {
              value: 'furongqu',
              label: '芙蓉区'
            }]
          }, {
            value: 'hengyangshi',
            label: '衡阳市',
            children: [{
              value: 'leiyangshi',
              label: '耒阳'
            }, {
              value: 'hengdongshi',
              label: '衡东'
            }]
          }]
        }
      ],
      rules: {
        medicalLand: [{ required: true, message: '请选择', trigger: 'change' }]
      }
    }
  },
  methods: {
    resetForm() {
      this.$emit('update:isShow', false)
      this.$refs.maintainForm.resetFields()
      this.maintainForm.medicalLand = ''
    },
    closeDialog() {
      this.$emit('update:isShow', false)
    },
    save() {
      this.$refs.maintainForm.validate((valid) => {
        if (valid) {
          this.$msgSuccess('保存成功')
          this.$emit('update:isShow', false)
          this.$refs.maintainForm.resetFields()
          this.maintainForm.medicalLand = ''
        }
      })
    },
    isShow(v) {
      this.$emit('update:isShow', v)
    }
  }
}
</script>
