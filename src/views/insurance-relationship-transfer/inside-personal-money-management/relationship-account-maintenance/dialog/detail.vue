<template>
  <div class="detail">
    <form-dialog title="转入个账接收账户信息变更操作记录" width="1000px" new-calss="small" :is-show="show" @update:isShow="addIsShow">
      <div class="box">
        <div class="box-body">
          <el-form ref="addForm" :model="addForm" label-width="105px">
            <my-table-view
              v-loading="loading"
              :data="tableData"
              :columns="columns"
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
        { type: 'index', label: '序号', width: '55px' },
        { prop: '修改内容', label: '修改内容', align: 'center', overflow: true },
        { prop: '操作人员', label: '操作人员', align: 'center', overflow: true },
        { prop: '修改时间', label: '修改时间', align: 'center', overflow: true },
        { prop: '备注', label: '备注', align: 'center', overflow: true }
      ],
      tableData: [1, 2, 3].map(i => {
        return {
          修改内容: '修改内容',
          操作人员: '操作人员',
          修改时间: '修改时间',
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
    selectRow(v) {
      if (this.multipleSelection.length > 1) {
        this.$msgError('只能选择一个结果')
        return
      }
      this.$emit('update:selectRow', this.multipleSelection)
      this.multipleSelection = []
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
