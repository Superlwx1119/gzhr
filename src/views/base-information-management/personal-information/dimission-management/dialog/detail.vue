<template>
  <form-dialog
    class="audit-dialog-wrapper"
    :title="dialogTitle"
    :is-show="isDialogVisible"
    size="big"
    :loading="loading"
    width="1200px"
    @update:isShow="isShow"
  >
    <div class="box">
      <div class="box-body">
        <table class="table-data total-info">
          <tbody>
            <tr>
              <td>姓名</td>
              <td>{{ infoData.aab069 }}</td>
              <td>证件号码</td>
              <td>{{ infoData.aac002 }}</td>
              <td>性别</td>
              <td>{{ infoData.aac004 }}</td>
            </tr>
            <tr>
              <td>出生日期</td>
              <td>{{ infoData.aac006 }}</td>
              <td>单位名称</td>
              <td>{{ infoData.aab019 }}</td>
              <td>参加工作时间</td>
              <td>{{ infoData.aac007 }}</td>
            </tr>
            <tr>
              <!-- <td>退休时人员类别</td>
              <td>{{infoData.aac006}}</td> -->
              <td>退休批准文号</td>
              <td>{{ infoData.rc0905 }}</td>
              <td>退休时级别</td>
              <td>{{ infoData.rc0903 }}</td>
              <td>退休时任职务</td>
              <td>{{ infoData.rc0908 }}</td>
            </tr>
            <tr>
              <td>退休后管理单位</td>
              <td>{{ infoData.rc0904 }}</td>
              <td>退休日期</td>
              <td>{{ infoData.rc0902 }}</td>
              <td>退休时年龄</td>
              <td>{{ infoData.rc0909 }}</td>
            </tr>
            <tr>

              <td>退休批准单位</td>
              <td colspan="5">{{ infoData.rc0906 }}</td>
            </tr>
            <tr rowspan="2">
              <td>备注</td>
              <td colspan="5">{{ infoData.rc0907 }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <ReviewOpinion v-if="operation === 'audit'" ref="addForm" :add-form-data="addForm" />
    <span slot="footer" class="dialog-footer">
      <el-button v-if="operation === 'audit'" type="primary" @click="retireAudit(true)">审核通过</el-button>
      <el-button v-if="operation === 'audit'" type="danger" @click="retireAudit(false)">审核不通过</el-button>
      <el-button @click="closeDialog">关闭</el-button>
    </span>
  </form-dialog>
</template>

<script>
import { info, retireAudit } from '@/api/BaseInformation/PersonalInformationManagement/DimissionAudit'
import ReviewOpinion from '../../component/review-opinion'
export default {
  components: {
    ReviewOpinion
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
      activeName: '1',
      isShowAdd: false,
      loading: false,
      infoData: {}
    }
  },
  methods: {
    closeDialog() {
      this.$emit('closeAll', false)
    },
    info(row) {
      this.loading = true
      info({ arc081: row.arc081 }).then(res => {
        this.loading = false
        if (res.code === 0) {
          this.infoData = res.data
        }
      }).catch(() => {
        this.loading = false
      })
    },
    retireAudit(type) {
      this.$msgConfirm(`确定${type ? '审核通过?' : '审核不通过?'}`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        const form = {
          busId: this.infoData.arc081,
          businessKey: 'B01-01-03',
          isPass: type,
          message: this.addForm.message,
          workflowNode: [2]
        }
        this.loading = true
        retireAudit(form).then(res => {
          this.loading = false
          this.$emit('search')
          this.$msgSuccess(res.message)
        }).catch(() => {
          this.loading = false
        })
      }).catch(() => {
        this.loading = false
        this.$msgInfo('已取消')
      })
    },
    isShow(v) {
      this.$emit('closeAll', false)
    }
  }
}
</script>

<style scoped lang="scss">

</style>
