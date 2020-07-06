<template>
  <Drawer :title="drawerTitle" :size="size" :show="isDrawerVisible" @update:isShow="isShow" @resetForm="resetForm">
    <el-form ref="infoForm" :model="infoForm" :rules="rules" label-width="105px" style="padding: 16px 10px">
      <el-row :gutter="10">
        <el-col>
          <el-form-item label="暂扣原因" prop="reason">
            <el-select v-model="infoForm.reason" clearable class="width-full">
              <el-option
                v-for="item of reasonOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col>
          <el-form-item label="暂扣金额" prop="value">
            <el-input v-model="infoForm.value" placeholder="请输入" />
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <div slot="footer" class="drawer-footer">
      <el-button @click="close">关闭</el-button>
      <el-button type="primary" @click="save">保存</el-button>
    </div>

  </Drawer>
</template>

<script>
import Drawer from '@/components/Drawer/Drawer'
export default {
  components: {
    Drawer
  },
  props: {
    drawerTitle: {
      type: String,
      default: ''
    },
    isDrawerVisible: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: '30%'
    }
  },
  data() {
    return {
      infoForm: {
        reason: '',
        value: '10.11'
      },
      reasonOptions: [
        {
          label: '暂扣原因1',
          value: 1
        },
        {
          label: '暂扣原因2',
          value: '2'
        }
      ],
      rules: {
        reason: [{ required: true, message: '请选择', trigger: 'change' }],
        value: [{ required: true, message: '请输入', trigger: 'blur' }]
      }
    }
  },
  watch: {
  },
  methods: {
    close() {
      this.$refs.infoForm.resetFields()
      this.$emit('update:isShow', false)
    },
    isShow(v) {
      this.$emit('update:isShow', v)
    },
    resetForm() {
      this.$emit('update:isShow', false)
    },
    // reset() {
    //   this.$refs.infoSearch.resetFields()
    // },
    // search() {
    //   console.log(this.infoSearch)
    // },
    save() {
      this.$refs.infoForm.validate((valid) => {
        if (valid) {
          this.$emit('update:isShow', false)
          this.$msgSuccess('保存成功')
          this.$refs.infoForm.resetFields()
        }
      })
    }
    // handleSelect(v) {
    //   this.tableData.forEach(val => {
    //     val.edit = false
    //   })
    //   v.forEach(item => {
    //     this.tableData.forEach(val => {
    //       if (val.id === item.id) {
    //         val.edit = true
    //       }
    //     })
    //   })
    // },
    // changeValue() {
    //   let total = 0
    //   this.tableData.forEach(val => {
    //     if (val.edit) {
    //       total += (parseFloat(val['暂扣金额']) || 0) * 100
    //     }
    //   })

    //   this.setForm.value = total / 100
    // }
  }
}
</script>

<style lang="scss" scoped>

</style>

