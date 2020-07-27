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
              <el-form-item label="现工作单位" prop="aab069">
                <OrganizationName v-model="addForm.aab069" disabled @input="handleSelectChange" />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="参加工作时间" prop="aac007">
                <el-date-picker
                  v-model="addForm.aac007"
                  disabled
                  type="date"
                  value-format="yyyyMMdd"
                  style="width:100%;height:100%"
                  placeholder="选择日期"
                  @input="handleSelectChange"
                />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="姓名" prop="aac003">
                <el-input v-model="addForm.aac003" disabled @input="handleSelectChange" />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="身份证号" prop="aac002">
                <el-input v-model="addForm.aac002" disabled @input="handleSelectChange" />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="性别" prop="aac004">
                <OrganizationName v-model="addForm.aac004" :disabled="true" @input="handleSelectChange" />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="出生日期" prop="aac006">
                <el-date-picker
                  v-model="addForm.aac006"
                  disabled
                  type="date"
                  value-format="yyyyMMdd"
                  style="width:100%;height:100%"
                  placeholder="选择日期"
                  @input="handleSelectChange"
                />
              </el-form-item>
            </el-col>
            <!-- <el-col :span="8">
              <el-form-item label="当前在职状态" prop="当前在职状态">
                <el-input v-model="addForm.当前在职状态" disabled @input="handleSelectChange" />
              </el-form-item>
            </el-col> -->
            <el-col :span="8">
              <el-form-item label="进入单位时间" prop="rc0301">
                <el-date-picker
                  v-model="addForm.rc0301"
                  disabled
                  type="date"
                  value-format="yyyyMMdd"
                  style="width:100%;height:100%"
                  placeholder="选择日期"
                  @input="handleSelectChange"
                />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="退出时人员类别" prop="rc0215">
                <el-input v-model="addForm.rc0215" @input="handleSelectChange" />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="退出时任职务" prop="rc0704">
                <el-input v-model="addForm.rc0704" @input="handleSelectChange" />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="退出时岗位等级" prop="rc0703">
                <JobsLevel v-model="addForm.rc0703" @input="handleSelectChange" />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="退出方式" prop="rc0909">
                <el-input v-model="addForm.rc0909" @input="handleSelectChange" />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="退出日期" prop="rc0502">
                <el-date-picker
                  v-model="addForm.rc0502"
                  type="date"
                  value-format="yyyyMMdd"
                  style="width:100%;height:100%"
                  placeholder="选择日期"
                  @input="handleSelectChange"
                />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="去往何处" prop="rc0503">
                <OrganizationName v-model="addForm.rc0503" @input="handleSelectChange" />
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item label="批准文号" prop="rc0506">
                <el-input v-model="addForm.rc0506" @input="handleSelectChange" />
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item label="备注" prop="rc0504">
                <el-input v-model="addForm.rc0504" type="textarea" :rows="4" @input="handleSelectChange" />
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
      <el-button v-if="operation === 'add'" type="primary" @click="addExit">保存</el-button>
      <el-button v-if="operation === 'add'" type="primary" @click="addExit(true)">保存并申报</el-button>
      <!-- 修改 -->
      <el-button v-if="operation === 'edit'" type="primary" @click="changeExit">保存</el-button>
      <el-button @click="closeDialog">关闭</el-button>
    </span>
  </form-dialog>
</template>

<script>
import OrganizationName from '@/components/Select/OrganizationName'
import JobsLevel from '@/components/Select/JobsLevel'
import { infoExit, addExit, changeExit } from '@/api/BaseInformation/PersonalInformationManagement/exit'
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
    infoExit(row) {
      row.aac007 = row.aac007.toString()
      row.aac006 = row.aac006.toString()
      row.rc0301 = row.rc0301.toString()
      row.rc0502 = row.rc0502.toString()
      this.addForm = row
    },
    changeExit() {
      this.loading = true
      changeExit(Object.assign(this.addForm, { arc061: this.detailId })).then(res => {
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
      this.detailId = row.arc061
      infoExit({ arc061: Number(row.arc061) }).then(res => {
        this.loading = false
        if (res.code === 0) {
          if (res.data.aac007)res.data.aac007 = res.data.aac007.toString()
          if (res.data.aac006)res.data.aac006 = res.data.aac006.toString()
          if (res.data.rc0301)res.data.rc0301 = res.data.rc0301.toString()
          if (res.data.rc0502)res.data.rc0502 = res.data.rc0502.toString()
          this.addForm = res.data
        }
      }).catch(() => {
        this.loading = false
      })
    },
    addExit(type) {
      this.loading = true
      addExit(Object.assign(this.addForm, { flag: !!type })).then(res => {
        this.loading = false
        if (res.code === 0) {
          this.$msgSuccess(res.message)
          this.closeDialog()
          this.cloeseParent()
        }
      }).catch(() => {
        this.loading = false
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
