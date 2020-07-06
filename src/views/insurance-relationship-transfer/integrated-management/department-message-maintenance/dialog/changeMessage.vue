<template>
  <div class="detail">
    <form-dialog title="变更信息" width="1000px" new-calss="small" :is-show="show" @update:isShow="addIsShow">
      <div class="box">
        <div class="box-body">
          <my-table-view
            v-loading="loading"
            :data="tableData"
            :height="300"
            :columns="columns"
            :multiple-selection.sync="multipleSelection"
          />
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
        { type: 'index', label: '序号', width: '55px' },
        { prop: '变更类型', label: '变更类型', align: 'center', overflow: true },
        { prop: '变更前信息', label: '变更前信息', align: 'center', overflow: true },
        { prop: '变更项目', label: '变更项目', align: 'center', overflow: true },
        { prop: '经办人', label: '经办人', align: 'center', overflow: true },
        { prop: '经办时间', label: '经办时间', align: 'center', overflow: true },
        { prop: '机构编码', label: '机构编码', align: 'center', overflow: true }
      ],
      tableData: [1, 2, 3].map(i => {
        return {
          变更类型: '变更类型',
          变更前信息: '变更前信息',
          变更项目: '变更项目',
          经办人: '经办人',
          经办时间: '经办时间',
          机构编码: '机构编码'
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
    deleteRow() {
      console.log(this.multipleSelection)
    },
    addRow(row) {
      const json = {
        街道名称: 'xx',
        街道办事处名称: 'xx',
        单位地址: 'xx',
        联系电话: 'xx',
        edit: true
      }
      this.tableData.push(json)
    },
    editRow(row) {
      this.tableData[row.rowIndex].edit = !this.tableData[row.rowIndex].edit
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
