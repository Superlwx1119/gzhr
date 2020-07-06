<template>
  <div class="detail">
    <form-dialog title="计算进度信息" width="1000px" new-calss="small" :is-show="show" @update:isShow="addIsShow">
      <div class="box">
        <div class="box-body">
          <div class="box-header handle">
            <span class="box-title">计算进度信息</span>
            <div class="box-tools">
              <el-button type="primary">刷新进度</el-button>
            </div>
          </div>
          <el-form ref="addForm" :model="addForm" label-width="105px">
            <my-table-view
              v-loading="loading"
              :data="tableData"
              :columns="columns"
              :height="300"
              :multiple-selection.sync="multipleSelection"
            />
            <Pagination :data="pageInfo" @refresh="pageChange" />
          </el-form>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="cancelAdd('addForm')">关闭</el-button>
      </span>
    </form-dialog>
  </div>
</template>

<script>
export default {
  name: 'Detail',
  components: {
  },
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      multipleSelection: [],
      loading: false,
      activeName: 1,
      showDetail: false,
      queryForm: {},
      options: [
        { label: '未确认', value: 1 },
        { label: '已确认', value: 2 }
      ],
      columns: [
        { type: 'selection' },
        { type: 'index', label: '序号', width: '55px' },
        { prop: '单位名称', label: '单位名称', align: 'center', overflow: true },
        { prop: '险种类型', label: '险种类型', align: 'center', overflow: true },
        { prop: '计算开始时间', label: '计算开始时间', align: 'center', overflow: true },
        { prop: '计算结算时间', label: '计算结算时间', align: 'center', overflow: true },
        { prop: '计算状态', label: '计算状态', align: 'center', overflow: true },
        { prop: '备注', label: '备注', align: 'center', overflow: true }
      ],
      tableData: [1, 2, 3].map(i => {
        return {
          单位名称: '单位名称',
          险种类型: '险种类型',
          计算开始时间: '计算开始时间',
          计算结算时间: '计算结算时间',
          计算状态: '计算状态',
          备注: '备注'

        }
      }),
      addForm: {},
      pageInfo: {
        pageNum: 1,
        pageSize: 15,
        total: 10,
        startRow: 1,
        endRow: 10
      }
    }
  },
  methods: {
    pageChange(data) {
      this.pageInfo = data.pagination
    },
    addIsShow(v) {
      this.$emit('update:show', v)
    },
    //  取消新增弹窗
    cancelAdd(formName) {
      this.$emit('update:show', false)
    },
    //  提交新增弹窗
    addSubmit(formName) {
      this.$emit('update:show', false)
    }
  }
}
</script>

<style scoped lang="scss"></style>
