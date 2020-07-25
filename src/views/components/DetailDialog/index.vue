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
        <div class="box-header handle">
          <span class="box-title">单位基础信息</span>
        </div>
        <AddInformation v-if="operation === 'add'||operation === 'edit'" ref="addForm" :add-form-data="addForm" :detail-info="detailInfo" />
        <BaseInformation v-else :detail-info="detailInfo" />
        <!-- <AddInformation v-if="operation === 'add'" ref="addForm" v-loading="loading" :add-form-data="addForm" />
        <el-tabs v-else type="border-card">
          <el-tab-pane label="基本信息">
            <AddInformation v-if="operation === 'edit'" ref="addForm" :add-form-data="addForm" :detail-info="detailInfo" />
            <BaseInformation v-else :detail-info="detailInfo" />
          </el-tab-pane>
          <el-tab-pane v-if="operation === 'detail'" label="岗位设置信息">
            <SettingInformation />
          </el-tab-pane>
          <el-tab-pane label="内设机构">
            <Organization :operation="operation" />
          </el-tab-pane>
        </el-tabs> -->
        <div class="box-header handle">
          <span class="box-title">业务材料</span>
          <div slot="title-btns" style="float:right;width:60px" class="box-tools">
            <!-- <el-button type="primary">上传</el-button> -->
            <el-upload
              class="upload-demo"
              :action="url"
              :on-success="handleAvatarSuccess"
            >
              <el-button size="small" type="primary">上传</el-button>
            </el-upload>
          </div>
        </div>
        <List :is-border="true" :is-index="true" :columns="columns" :operates="operation === 'detail'||operation === 'apply'?tableOperatesEdit:tableOperates" :data="tableData" />
      </div>
    </div>

    <span slot="footer" class="dialog-footer">
      <!-- 新增申报 -->
      <el-button v-if="operation === 'add'" type="primary" @click="addCorp">保存</el-button>
      <!-- 编辑保存 -->
      <el-button v-if="operation === 'edit'" type="primary" @click="modifyCorp">保存</el-button>
      <el-button v-if="operation === 'add'" @click="reset">重置</el-button>
      <el-button v-if="operation === 'apply'" type="success">申报</el-button>
      <el-button v-if="operation === 'audit'" type="success">审核通过</el-button>
      <el-button v-if="operation === 'audit'" type="danger">退回</el-button>
      <el-button @click="closeDialog">关闭</el-button>
    </span>
  </form-dialog>
</template>

<script>
import { addCorp, modifyCorp, queryCorpDetail } from '@/api/OrganizationInformationManagement/AddOrganizationApply'
import fileUrl from '@/api/Common/Api'
import AddInformation from './addInformation'
import BaseInformation from './baseInformation'
// import SettingInformation from './settingInformation'
// import Organization from './organization'
export default {
  components: {
    // Organization,
    BaseInformation,
    // SettingInformation,
    AddInformation
  },
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
      url: '',
      addForm: {},
      activeName: '1',
      queryForm: {},
      isShowAdd: false,
      loading: false,
      detailInfo: {},
      tableOperates: {
        width: '120px',
        fixed: 'right',
        list: [
          { show: true, label: '删除', class: 'delete', type: 'text', method: () => {
          } }
        ]
      },
      tableOperatesEdit: {
        width: '120px',
        fixed: 'right',
        list: []
      },
      columns: [
        { label: '附件数', prop: '附件数', align: 'center' },
        { label: '材料名称', prop: '材料名称', align: 'center' },
        { label: '材料说明', prop: '材料说明', align: 'center', width: '300px' },
        { label: '是否必须', prop: '是否必须', align: 'center' }
      ],
      tableData: [
        { 单位编码: '单位编码', 单位名称: '单位名称', 社会信用代码: '社会信用代码', 单位类型: '单位类型', 是否参公: '是否参公', 主管部门: '主管部门', 行业代码: '行业代码' },
        { 单位编码: '单位编码', 单位名称: '单位名称', 社会信用代码: '社会信用代码', 单位类型: '单位类型', 是否参公: '是否参公', 主管部门: '主管部门', 行业代码: '行业代码' },
        { 单位编码: '单位编码', 单位名称: '单位名称', 社会信用代码: '社会信用代码', 单位类型: '单位类型', 是否参公: '是否参公', 主管部门: '主管部门', 行业代码: '行业代码' }
      ]
    }
  },
  create() {
    this.url = fileUrl.uploadAttachment
  },
  methods: {
    closeDialog() {
      this.$emit('closeAll', false)
      this.reset()
    },
    handleAvatarSuccess(res, file) {

    },
    queryCorpDetail(id) {
      if (id === '') {
        this.addForm = {}
        this.detailInfo = {}
        return
      }
      queryCorpDetail({ id: id }).then(res => {
        res.data.rb0806 = res.data.rb0806.toString()
        this.detailInfo = Object.assign(res.data, { aab001: id })
      })
    },
    reset() {
      this.$refs.addForm.$refs.addForm.resetFields()
    },
    modifyCorp() { // 修改保存
      this.$refs.addForm.$refs.addForm.validate((valid) => {
        if (valid) {
          this.detailInfo.aab226 = this.detailInfo.aab226[this.detailInfo.aab226.length - 1]
          this.detailInfo.aab001 = this.detailInfo.aab001
          this.loading = true
          modifyCorp(this.detailInfo).then(res => {
            this.loading = false
            console.log(res)
            if (res.code === 0) {
              this.$emit('search')
              this.closeDialog()
              this.$msgSuccess(res.message)
            } else {
              this.$msgError(res.message)
            }
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    addCorp() { // 新增申报
      this.$refs.addForm.$refs.addForm.validate((valid) => {
        if (valid) {
          this.addForm.aab226 = this.addForm.aab226[this.addForm.aab226.length - 1]
          addCorp(this.addForm).then(res => {
            // console.log(res)
            if (res.code === 0) {
              this.closeDialog()
              this.$msgSuccess(res.message)
              this.$emit('search')
            } else {
              this.$$msgError(res.message)
            }
          })
        } else {
          console.log('error submit!!')
          return false
        }
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
