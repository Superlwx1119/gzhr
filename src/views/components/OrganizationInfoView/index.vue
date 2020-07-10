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
        <el-tabs type="border-card">
          <el-tab-pane label="基本信息">
            <BaseInformation :detail-info="detailInfo" />
          </el-tab-pane>
          <el-tab-pane label="详细信息">
            <DetailInfo />
          </el-tab-pane>
          <el-tab-pane label="内设机构">
            <Organization :operation="operation" />
          </el-tab-pane>
        </el-tabs>
        <!-- <div class="box-header handle">
          <span class="box-title">业务材料</span>
        </div>
        <List :is-border="true" :is-index="true" :columns="columns" :operates="operation === 'detail'||operation === 'apply'?tableOperatesEdit:tableOperates" :data="tableData" /> -->
      </div>
    </div>

    <span slot="footer" class="dialog-footer">
      <el-button @click="closeDialog">关闭</el-button>
    </span>
  </form-dialog>
</template>

<script>
import BaseInformation from '../DetailDialog/baseInformation'
import Organization from '../DetailDialog/organization'
import DetailInfo from './detailInfo'

export default {
  components: {
    BaseInformation,
    Organization,
    DetailInfo
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
      loading: false,
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

    isShow(v) {
      this.$emit('closeAll', false)
    }
  }
}
</script>

<style scoped lang="scss">

</style>
