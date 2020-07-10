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
        <el-dropdown style="position:absolute;right:100px;top:6px;z-index:999">
          <el-button type="primary">
            审核<i class="el-icon-arrow-down el-icon--right" />
          </el-button>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>
              <el-button type="text">通过</el-button>
            </el-dropdown-item>
            <el-dropdown-item>
              <el-button type="text" class="delete">退回</el-button>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <el-dropdown style="position:absolute;right:10px;top:6px;z-index:999">
          <el-button type="primary">
            打印<i class="el-icon-arrow-down el-icon--right" />
          </el-button>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item><el-button type="text">统计表</el-button></el-dropdown-item>
            <el-dropdown-item><el-button type="text">明细表</el-button></el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <el-tabs type="border-card">
          <el-tab-pane label="考核比例">
            <AppraisalProportion :detail-info="detailInfo" />
          </el-tab-pane>
          <el-tab-pane label="人员详情">
            <PersonDetail />
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>

    <span slot="footer" class="dialog-footer">
      <el-button @click="closeDialog">关闭</el-button>
    </span>
  </form-dialog>
</template>

<script>
import AppraisalProportion from './appraisalProportion'
import PersonDetail from './personDetail'
export default {
  components: {
    AppraisalProportion,
    PersonDetail
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
      default: '年度考核详情'
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
  /deep/ .delete{
    color: #F56C6C;
  }
</style>
