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
      </div>
    </div>

    <span slot="footer" class="dialog-footer">
      <!-- 新增 -->
      <el-button v-if="operation === 'add'" type="primary" @click="addPerson">保存</el-button>
      <!-- 修改 -->
      <el-button v-else type="primary" @click="modifyPerson">保存</el-button>
      <el-button @click="closeDialog">关闭</el-button>
    </span>
  </form-dialog>
</template>

<script>
import { addPerson, personDetail, modifyPerson } from '@/api/BaseInformation/PersonalInformationManagement/index'
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
      default: 'add'
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
    modifyPerson() {
      this.loading = true
      this.$refs.addForm.$refs.addForm.validate((valid) => {
        if (valid) {
          const form = {
            ac01Vo: {
              aac001: this.addForm.aac001,
              aac002: this.addForm.aac002,
              aac003: this.addForm.aac003,
              aac004: this.addForm.aac004,
              rc0215: this.addForm.rc0215,
              aac005: this.addForm.aac005,
              aac006: this.addForm.aac006,
              aac007: this.addForm.aac007,
              aac010: this.addForm.aac010,
              aac017: this.addForm.aac017,
              aac033: this.addForm.aac033,
              rc0181: this.addForm.rc0181
            },
            rc02Vo: {
              aac001: this.addForm.aac001,
              arc021: this.addForm.arc021,
              aab001: this.addForm.aab001,
              aab069: this.addForm.aab069,
              rc0202: this.addForm.rc0202,
              rc0203: this.addForm.rc0301
            },
            rc03Vo: {
              aac001: this.addForm.aac001,
              arc031: this.addForm.arc031,
              aab001: this.addForm.aab001,
              aab069: this.addForm.aab069,
              rc0206: this.addForm.rc0206,
              rc0212: this.addForm.rc0212,
              rc0301: this.addForm.rc0301,
              rc0302: this.addForm.rc0302,
              rc0303: this.addForm.rc0303,
              rc0307: this.addForm.rc0307,
              rc0310: this.addForm.rc0310,
              rc0311: this.addForm.rc0311
            }
          }
          modifyPerson(form).then(res => {
            if (res.code === 0) {
              this.$msgSuccess(res.message)
              this.closeDialog()
              this.$emit('search')
            }
          }).catch(() => {
            this.loading = false
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    addPerson() {
      this.$refs.addForm.$refs.addForm.validate((valid) => {
        if (valid) {
          const form = {
            ac01Vo: {
              aac002: this.addForm.aac002,
              aac003: this.addForm.aac003,
              aac004: this.addForm.aac004,
              aac005: this.addForm.aac005,
              aac006: this.addForm.aac006,
              aac007: this.addForm.aac007,
              aac010: this.addForm.aac010,
              aac017: this.addForm.aac017,
              aac033: this.addForm.aac033,
              rc0215: this.addForm.rc0215,
              rc0181: this.addForm.rc0181
            },
            rc02Vo: {
              aab001: this.addForm.aab001,
              rc0202: this.addForm.rc0202,
              rc0203: this.addForm.rc0301
            },
            rc03Vo: {
              aab001: this.addForm.aab001,
              rc0206: this.addForm.rc0206,
              rc0212: this.addForm.rc0212,
              rc0301: this.addForm.rc0301,
              rc0302: this.addForm.rc0302,
              rc0303: this.addForm.rc0303,
              rc0307: this.addForm.rc0307,
              rc0310: this.addForm.rc0310,
              rc0311: this.addForm.rc0311
            }
          }
          this.loading = true
          addPerson(form).then(res => {
            this.loading = false
            if (res.code === 0) {
              this.$msgSuccess(res.message)
              this.closeDialog()
              this.$emit('search')
            }
          }).catch(() => {
            this.loading = false
          })
        } else {
          console.log('error submit!!')
          return false
        }
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
