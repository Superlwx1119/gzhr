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
        <el-form ref="addForm" :model="addForm" label-width="105px" style="margin-bottom:10px">
          <el-row :gutter="12">
            <el-col :span="8">
              <el-form-item label="姓名" prop="aac003">
                <el-input v-model="addForm.aac003" disabled @input="handleSelectChange" />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="证件号码" prop="aac002">
                <el-input v-model="addForm.aac002" disabled @input="handleSelectChange" />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="性别" prop="aac004">
                <el-input v-model="addForm.aac004" disabled @input="handleSelectChange" />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="出生日期" prop="aac006">
                <el-input v-model="addForm.aac006" disabled @input="handleSelectChange" />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="单位名称" prop="aab069">
                <OrganizationName v-model="addForm.aab069" :disabled="true" @input="handleSelectChange" />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="参加工作时间" prop="aac007">
                <el-input v-model="addForm.aac007" disabled @input="handleSelectChange" />
              </el-form-item>
            </el-col>
            <!-- <el-col :span="8">
              <el-form-item label="退休时人员类别" prop="退休时人员类别">
                <el-input v-model="addForm.退休时人员类别" disabled @input="handleSelectChange"/>
              </el-form-item>
            </el-col> -->
            <el-col :span="8">
              <el-form-item label="退休时级别" prop="rc0903">
                <JobsLevel v-model="addForm.rc0903" @input="handleSelectChange" />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="退休时任职务" prop="rc0908">
                <el-input v-model="addForm.rc0908" @input="handleSelectChange" />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="退休后管理单位" prop="rc0904">
                <el-input v-model="addForm.rc0904" @input="handleSelectChange" />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="退休日期" prop="rc0902">
                <el-date-picker
                  v-model="addForm.rc0902"
                  type="date"
                  value-format="yyyyMMdd"
                  style="width:100%;height:100%"
                  placeholder="选择日期"
                  @input="handleSelectChange"
                />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="退休时年龄" prop="rc0909">
                <el-input v-model="addForm.rc0909" @input="handleSelectChange" />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="退休批准号" prop="rc0905">
                <el-input v-model="addForm.rc0905" @input="handleSelectChange" />
              </el-form-item>
            </el-col>
            <el-col :span="16">
              <el-form-item label="退休批准单位" prop="rc0906">
                <el-input v-model="addForm.rc0906" @input="handleSelectChange" />
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item label="备注" prop="rc0907">
                <el-input v-model="addForm.rc0907" type="textarea" :rows="4" @input="handleSelectChange" />
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
        <div class="box-header handle">
          <span class="box-title">业务材料</span>
        </div>
        <List :is-border="true" :is-index="true" :columns="columns" :operation="tableOperates" :data="tableData" />
      </div>
    </div>

    <span slot="footer" class="dialog-footer">
      <!-- 新增 -->
      <el-button v-if="operation === 'add'" type="primary" @click="retire">保存</el-button>
      <!-- 修改 -->
      <el-button v-if="operation === 'edit'" type="primary" @click="retireChange">保存</el-button>
      <el-button @click="closeDialog">关闭</el-button>
    </span>
  </form-dialog>
</template>

<script>
import OrganizationName from '@/components/Select/OrganizationName'
import JobsLevel from '@/components/Select/JobsLevel'
import { info, retire, retireChange } from '@/api/BaseInformation/PersonalInformationManagement/DimissionAudit'
export default {
  components: {
    OrganizationName,
    JobsLevel
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
      detailId: '',
      columns: [
        { label: '附件数', prop: '附件数', align: 'center' },
        { label: '材料名称', prop: '材料名称', align: 'center' },
        { label: '材料说明', prop: '材料说明', align: 'center', width: '300px' },
        { label: '是否必须', prop: '是否必须', align: 'center' }
      ],
      tableOperates: {
        width: '120px',
        fixed: 'right',
        list: [
          { show: true, label: '上传', type: 'text', method: () => {
          } }
        ]
      },
      tableData: []
    }
  },
  methods: {
    info(row) {
      row.aab019 = row.aab019.toString()
      this.addForm = row
    },
    retireChange() {
      this.loading = true
      retireChange(Object.assign(this.addForm, { arc081: this.detailId })).then(res => {
        this.loading = false
        if (res.code === 0) {
          this.$msgSuccess(res.message)
          this.closeDialog()
          this.cloeseParent()
        }
      })
    },
    getDetail(row) {
      this.loading = true
      this.detailId = row.arc081
      info({ arc081: row.arc081 }).then(res => {
        this.loading = false
        if (res.code === 0) {
          if (res.data.aab019)res.data.aab019 = res.data.aab019.toString()
          if (res.data.rc0902)res.data.rc0902 = res.data.rc0902.toString()
          this.addForm = res.data
        }
      }).catch(() => {
        this.loading = false
      })
    },
    retire() {
      this.loading = true
      retire(this.addForm).then(res => {
        this.loading = false
        if (res.code === 0) {
          this.$msgSuccess(res.message)
          this.closeDialog()
          this.cloeseParent()
        }
      })
    },
    cloeseParent() {
      this.$emit('cloeseParent', false)
    },
    closeDialog() {
      this.$emit('closeAll', false)
      this.reset()
    },
    handleSelectChange(v) {
      this.$emit('input', v)
    },
    reset() {
      this.detailId = ''
      this.$refs.addForm.resetFields()
    },
    isShow(v) {
      this.$emit('closeAll', false)
    }
  }
}
</script>

<style scoped lang="scss">

</style>
