<template>
  <form-dialog
    class="audit-dialog-wrapper"
    :title="dialogTitle"
    :is-show="isDialogVisible"
    size="big"
    width="1200px"
    @update:isShow="isShow"
  >
    <div class="box">
      <div class="box-body">
        <el-form ref="addForm" :model="addForm" label-width="105px">
          <el-row :gutter="12">
            <el-col :md="12" :lg="8" :xl="6">
              <el-form-item label="名称" prop="名称">
                <el-input v-model="addForm.名称" />
              </el-form-item>
            </el-col>
            <el-col :md="12" :lg="8" :xl="6">
              <el-form-item label="上级机构名称" prop="上级机构名称">
                <el-input v-model="addForm.上级机构名称" />
              </el-form-item>
            </el-col>
            <el-col :md="12" :lg="8" :xl="6">
              <el-form-item label="简称" prop="简称">
                <el-input v-model="addForm.简称" />
              </el-form-item>
            </el-col>
            <el-col :md="12" :lg="8" :xl="6">
              <el-form-item label="所属单位" prop="所属单位">
                <el-input v-model="addForm.所属单位" />
              </el-form-item>
            </el-col>
            <el-col :md="12" :lg="8" :xl="6">
              <el-form-item label="机构级别" prop="机构级别">
                <el-input v-model="addForm.机构级别" />
              </el-form-item>
            </el-col>
            <el-col :md="12" :lg="8" :xl="6">
              <el-form-item label="正职领导数" prop="正职领导数">
                <el-input v-model="addForm.正职领导数" />
              </el-form-item>
            </el-col>
            <el-col :md="12" :lg="8" :xl="6">
              <el-form-item label="副职领导数" prop="副职领导数">
                <el-input v-model="addForm.副职领导数" />
              </el-form-item>
            </el-col>
            <el-col :md="12" :lg="8" :xl="6">
              <el-form-item label="领导总数" prop="领导总数">
                <el-input v-model="addForm.领导总数" />
              </el-form-item>
            </el-col>
            <el-col :md="12" :lg="8" :xl="6">
              <el-form-item label="正职非领导数" prop="正职非领导数">
                <el-input v-model="addForm.正职非领导数" />
              </el-form-item>
            </el-col>
            <el-col :md="12" :lg="8" :xl="6">
              <el-form-item label="副职非领导数" prop="副职非领导数">
                <el-input v-model="addForm.副职非领导数" />
              </el-form-item>
            </el-col>
            <el-col :md="12" :lg="8" :xl="6">
              <el-form-item label="非领导总数" prop="非领导总数">
                <el-input v-model="addForm.非领导总数" />
              </el-form-item>
            </el-col>
            <el-col :md="12" :lg="8" :xl="6">
              <el-form-item label="行政编制数" prop="行政编制数">
                <el-input v-model="addForm.行政编制数" />
              </el-form-item>
            </el-col>
            <el-col :md="12" :lg="8" :xl="6">
              <el-form-item label="事业编制数" prop="事业编制数">
                <el-input v-model="addForm.事业编制数" />
              </el-form-item>
            </el-col>
            <el-col :md="12" :lg="8" :xl="6">
              <el-form-item label="成立日期" prop="成立日期">
                <el-input v-model="addForm.成立日期" />
              </el-form-item>
            </el-col>
            <el-col :md="12" :lg="8" :xl="6">
              <el-form-item label="主要负责人" prop="主要负责人">
                <el-input v-model="addForm.主要负责人" />
              </el-form-item>
            </el-col>
            <el-col :md="24" :lg="24" :xl="24">
              <el-form-item label="备注" prop="备注">
                <el-input v-model="addForm.备注" type="textarea" :rows="4" />
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </div>
    </div>
    <span slot="footer" class="dialog-footer">
      <el-button type="primary" @click="closeDialog">保存</el-button>
      <el-button @click="closeDialog">关闭</el-button>
    </span>
  </form-dialog>
</template>

<script>
export default {
  model: {
    prop: 'isDialogVisible',
    event: 'closeAll'
  },
  props: {
    dialogTitle: {
      type: String,
      default: '信息查看'
    },
    isDialogVisible: {
      type: Boolean,
      default: false
    },
    operation: {
      type: String,
      default: 'detail'
    }
  },
  data() {
    return {
      addForm: {}
    }
  },
  methods: {
    closeDialog() {
      this.$emit('closeAll', false)
    },
    isShow(v) {
      this.$emit('closeAll', false)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
