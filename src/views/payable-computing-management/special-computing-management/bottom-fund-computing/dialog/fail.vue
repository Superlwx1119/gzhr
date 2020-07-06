<template>
  <div class="listAuditAdd">
    <form-dialog title="失败明细" width="1000px" new-class="big" :is-show="show" @update:isShow="addIsShow">
      <div class="box">
        <div class="box-body">
          <el-form ref="searchForm" :model="searchForm">
            <div class="box-header handle">
              <span class="box-title">失败明细</span>
              <div class="box-tools">
                <el-button type="primary">数据下载</el-button>
              </div>
            </div>
            <div class="box-body result">
              <my-table-view
                v-loading="loading"
                :data="tableData"
                :columns="columns"
              />
              <Pagination :data="pageInfo" @refresh="pageChange" />
            </div>
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
      activeName: '1',
      loading: false,
      searchForm: { 补缴原因: '' },
      pageInfo: {
        pageNum: 1,
        pageSize: 15,
        total: 10,
        startRow: 1,
        endRow: 10
      },
      tableData: [1, 2, 3, 4].map((i) => {
        return {
          姓名: '姓名',
          证件号码: '证件号码',
          铺底基数: '铺底基数',
          铺底金额: '铺底金额',
          校验结果: '校验结果'
        }
      }),
      columns: [
        // { type: 'selection' },
        { type: 'index', label: '序号', width: '55px' },
        { prop: '姓名', label: '姓名', align: 'center', overflow: true },
        { prop: '证件号码', label: '证件号码', align: 'center', overflow: true },
        { prop: '铺底基数', label: '铺底基数(元)', align: 'center', overflow: true },
        { prop: '铺底金额', label: '铺底金额(元)', align: 'center', overflow: true },
        { prop: '校验结果', label: '校验结果', align: 'center', overflow: true }
      ]
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
    },
    resetQuery(formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style scoped lang="scss"></style>
