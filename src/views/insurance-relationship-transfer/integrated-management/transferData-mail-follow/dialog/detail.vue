<template>
  <div class="detail">
    <form-dialog title="跟进详情" width="1000px" new-calss="small" :is-show="show" @update:isShow="addIsShow">
      <div class="box">
        <el-form :model="queryForm" label-width="105px">
          <el-row :gutter="12">
            <el-col :md="12" :lg="8" :xl="6">
              <el-form-item prop="跟进进度" label="跟进进度">
                <el-input v-model="queryForm.跟进进度" />
              </el-form-item>
            </el-col>
            <el-col :md="12" :lg="8" :xl="6">
              <el-form-item prop="跟进信息" label="跟进信息">
                <el-input v-model="queryForm.跟进信息" />
              </el-form-item>
            </el-col>
            <el-col :md="12" :lg="8" :xl="6" style="text-align: right">
              <el-button type="primary">查询</el-button>
            </el-col>
          </el-row>
        </el-form>
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
        { prop: '跟进时间编号', label: '跟进时间编号', align: 'center', overflow: true },
        { prop: '操作员', label: '操作员', align: 'center', overflow: true },
        { prop: '操作时间', label: '操作时间', align: 'center', overflow: true },
        { prop: '跟进进度', label: '跟进进度', align: 'center', overflow: true },
        { prop: '跟进信息', label: '跟进信息', align: 'center', overflow: true }
      ],
      tableData: [1, 2, 3, 4, 5, 6, 7].map(i => {
        return {
          跟进时间编号: '跟进时间编号',
          操作员: '操作员',
          操作时间: '操作时间',
          跟进进度: '跟进进度',
          跟进信息: '跟进信息'
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
