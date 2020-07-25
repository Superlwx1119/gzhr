<template>
  <form-dialog
    class="audit-dialog-wrapper"
    :title="dialogTitle"
    :is-show="isDialogVisible"
    size="big"
    width="1200px"
    :loading="loading"
    @update:isShow="isShow"
    @resetForm="reset"
  >
    <div class="box">
      <div class="box-body">
        <BaseInformation ref="addForm" :add-form-data="addForm" />
        <ReviewOpinion ref="addForm1" :add-form-data="addForm" />
      </div>
    </div>

    <span slot="footer" class="dialog-footer">
      <el-button type="primary" @click="approveNew(true)">审核通过</el-button>
      <el-button type="danger" @click="approveNew(false)">审核不通过</el-button>
      <el-button @click="closeDialog">关闭</el-button>
    </span>
  </form-dialog>
</template>

<script>
import { approveNew, personDetail } from '@/api/BaseInformation/PersonalInformationManagement/index'
import BaseInformation from '../../component/base-information'
import ReviewOpinion from '../../component/review-opinion'
export default {
  components: {
    BaseInformation,
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
      default: 'add'
    }
  },
  data() {
    return {
      addForm: {},
      activeName: '1',
      queryForm: {},
      isShowAdd: false,
      loading: false,
      detailId: ''
    }
  },
  methods: {
    personDetail(row) {
      this.loading = true
      this.detailId = row.aac001
      personDetail({ aab001: row.aab001, aac001: row.aac001 }).then(res => {
        this.loading = false
        this.addForm = {
          aac001: row.aac001,
          rc0202: res.data.rc02.rc0202,
          arc021: res.data.rc02.arc021,
          arc031: res.data.rc03.arc031,
          aac003: res.data.ac01.aac003,
          aac002: res.data.ac01.aac002,
          aac004: res.data.ac01.aac004,
          aab069: res.data.rc02.aab069,
          aac006: res.data.ac01.aac006.toString(),
          aac007: res.data.ac01.aac007.toString(),
          aab001: res.data.rc02.aab001.toString(),
          rc0301: res.data.rc03.rc0301.toString(),
          rc0206: res.data.rc03.rc0206,
          aac005: res.data.ac01.aac005,
          rc0181: res.data.ac01.rc0181,
          aac010: res.data.ac01.aac010,
          rc0215: res.data.ac01.rc0215,
          rc0302: res.data.rc03.rc0302,
          rc0303: res.data.rc03.rc0303,
          rc0311: res.data.rc03.rc0311,
          rc0212: res.data.rc03.rc0212,
          aac033: res.data.ac01.aac033,
          aac017: res.data.ac01.aac017,
          rc0310: res.data.rc03.rc0310,
          rc0307: res.data.rc03.rc0307

        }
      }).catch(() => {
        this.loading = false
      })
    },
    approveNew(type) {
      const form = {
        busId: this.detailId,
        businessKey: 'B01-01-01',
        isPass: type,
        message: this.addForm.message
      }
      const p1 = new Promise((resolve, reject) => {
        this.$refs['addForm'].$refs['addForm'].validate(valid => {
          if (valid) {
            this.addForm = Object.assign(this.addForm, this.$refs['addForm'].$refs['addForm'].model)
            resolve()
          }
        })
      })
      const p2 = new Promise((resolve, reject) => {
        this.$refs['addForm1'].$refs['addForm'].validate(valid => {
          if (valid) {
            this.addForm = Object.assign(this.addForm, this.$refs['addForm1'].$refs['addForm'].model)
            resolve()
          }
        })
      })
      Promise.all([p1, p2]).then(() => {
        this.loading = true

        approveNew(form).then(res => {
          this.loading = false
          if (res.code === 0) {
            this.closeDialog()
            this.$emit('search')
            this.$msgSuccess(res.message)
          }
        }).catch(() => {
          this.loading = false
        })
      }).catch(() => {
        this.loading = false
      })
    },
    closeDialog() {
      this.$emit('closeAll', false)
      this.reset()
    },
    reset() {
      this.$refs.addForm.$refs.addForm.resetFields()
      this.$refs.addForm1.$refs.addForm.resetFields()
    },
    isShow(v) {
      this.$emit('closeAll', false)
    }
  }
}
</script>

<style scoped lang="scss">

</style>
