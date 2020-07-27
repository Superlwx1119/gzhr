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
        <BaseInformation ref="addForm" :add-form-data="addForm" />
      </div>
    </div>

    <span slot="footer" class="dialog-footer">
      <el-button @click="closeDialog">关闭</el-button>
    </span>
  </form-dialog>
</template>

<script>
import { personDetail } from '@/api/BaseInformation/PersonalInformationManagement/index'

import BaseInformation from '../../component/base-information'
export default {
  components: {
    BaseInformation
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
      queryForm: {},
      isShowAdd: false,
      loading: false

    }
  },
  methods: {
    personDetail(row) {
      this.loading = true
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
    closeDialog() {
      this.$emit('closeAll', false)
      this.reset()
    },
    reset() {
      this.$refs.addForm.$refs.addForm.resetFields()
    },
    isShow(v) {
      this.$emit('closeAll', false)
    }
  }
}
</script>

<style scoped lang="scss">

</style>
