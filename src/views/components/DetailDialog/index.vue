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
        <AddInformation v-if="operation === 'add'" ref="addForm" :add-form-data="addForm" />
        <el-tabs v-else type="border-card">
          <el-tab-pane label="基本信息">
            <AddInformation v-if="operation === 'edit'" ref="addForm" :add-form-data="addForm" />
            <BaseInformation v-else :detail-info="detailInfo" />
          </el-tab-pane>
          <el-tab-pane v-if="operation === 'detail'" label="岗位设置信息">
            <SettingInformation />
          </el-tab-pane>
          <el-tab-pane label="内设机构">
            <Organization :operation="operation" />
          </el-tab-pane>
        </el-tabs>
        <div class="box-header handle">
          <span class="box-title">业务材料</span>
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
      <el-button @click="closeDialog">关闭</el-button>
      <el-button v-if="operation === 'apply'" type="success">申报</el-button>
      <el-button v-if="operation === 'audit'" type="success">审核通过</el-button>
      <el-button v-if="operation === 'audit'" type="danger">退回</el-button>
    </span>
  </form-dialog>
</template>

<script>
import { addCorp } from '@/api/OrganizationInformationManagement/AddOrganizationApply'
import AddInformation from './addInformation'
import BaseInformation from './baseInformation'
import SettingInformation from './settingInformation'
import Organization from './organization'
export default {
  components: {
    Organization,
    BaseInformation,
    SettingInformation,
    AddInformation
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
      tableOperates: {
        width: '120px',
        fixed: 'right',
        list: [
          { show: true, label: '上传', type: 'text', method: () => {
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
  methods: {
    closeDialog() {
      this.$emit('closeAll', false)
      this.reset()
    },
    reset() {
      this.$refs.addForm.$refs.addForm.resetFields()
    },
    modifyCorp() { // 修改保存
      this.$refs.addForm.$refs.addForm.validate((valid) => {
        if (valid) {
          this.addForm.aab021 = this.addForm.aab021[this.addForm.aab021.length - 1]
          this.addForm.rb0174 = this.addForm.rb0174[this.addForm.rb0174.length - 1]
          addCorp(this.addForm).then(res => {
            console.log(res)
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
          this.addForm.aab021 = this.addForm.aab021[this.addForm.aab021.length - 1]
          this.addForm.rb0174 = this.addForm.rb0174[this.addForm.rb0174.length - 1]
          addCorp(this.addForm).then(res => {
            console.log(res)
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
