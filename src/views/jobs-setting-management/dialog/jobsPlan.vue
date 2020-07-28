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
        <BaseInformation ref="base" :add-form-data="addForm" @input="changeBase" />
        <JobsInformation ref="jobs" :add-form-data="addForm1" @input="changeJobs" />
        <Attachment />
      </div>
    </div>

    <span slot="footer" class="dialog-footer">
      <!-- 新增 -->
      <el-button v-if="dialogTitle === '岗位设置新增'" type="primary" @click="savePostSetup(1)">保存</el-button>
      <el-button v-if="dialogTitle === '岗位设置新增'" type="primary">申报</el-button>
      <!-- 修改 -->
      <el-button v-if="dialogTitle === '岗位设置修改'" type="primary" @click="savePostSetup(2)">保存</el-button>
      <!-- 审核 -->
      <el-button v-if="dialogTitle === '岗位设置审核'" type="primary" @click="audit(true,2)">审核通过</el-button>
      <el-button v-if="dialogTitle === '岗位设置审核'" type="danger" @click="audit(false,2)">审核不通过</el-button>
      <!-- 审批 -->
      <el-button v-if="dialogTitle === '岗位设置审批'" type="primary">审批通过</el-button>
      <el-button v-if="dialogTitle === '岗位设置审批'" type="danger">审批不通过</el-button>

      <el-button @click="closeDialog">关闭</el-button>
    </span>
  </form-dialog>
</template>

<script>
import { savePostSetup } from '@/api/JobsSettingManagement/index'
import { audit } from '@/api/Common/Request'
import BaseInformation from '../component/baseInformation'
import JobsInformation from '../component/jobsInformation'
import Attachment from '../component/attachment'
export default {
  components: {
    BaseInformation,
    JobsInformation,
    Attachment
  },
  model: {
    prop: 'isDialogVisible',
    event: 'closeAll'
  },
  props: {
    detailInfo: {
      type: Object,
      default: function() { return {} }
    },
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
      addForm: {},
      addForm1: {},
      activeName: '1',
      queryForm: {},
      isShowAdd: false,
      loading: false

    }
  },
  methods: {
    changeBase(v) {
      this.addForm = v
    },
    editPostSetup(row) {
      this.$nextTick(() => {
        this.$refs.jobs.editPostSetup(row)
        this.$refs.base.editPostSetup(row)
      })
    },
    audit(type, step) {
      audit()
      // let form = {
      //   busId:'',

      // }
    },
    changeJobs(v) {
      this.addForm1 = v
    },
    savePostSetup(type) {
      this.$msgConfirm('请注意整体比例?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        const form1 = Object.assign(this.addForm, { dataMap: this.addForm1 }, { brb208: this.addForm1.brb208 }, { brb209: this.addForm1.brb209 }, { brb210: this.addForm1.brb210 }, { bissFlag: type })
        savePostSetup(form1).then(res => {
          if (res.code === 0) {
            this.$emit('search')
            this.closeDialog()
            this.$msgSuccess(res.message)
          }
        })
      }).catch(() => {
        this.$msgInfo('已取消删除')
      })
    },
    closeDialog() {
      this.$emit('closeAll', false)
      this.reset()
    },
    addPostSetup(row) {
      this.$nextTick(() => {
        this.$refs.base.addPostSetup(row)
        this.$refs.jobs.addPostSetup(row)
      })
    },
    reset() {
      this.$refs.base.$refs.addForm.resetFields()
      this.$refs.jobs.$refs.addForm.resetFields()
    },
    isShow(v) {
      this.$emit('closeAll', false)
    }
  }
}
</script>

<style scoped lang="scss">

</style>
