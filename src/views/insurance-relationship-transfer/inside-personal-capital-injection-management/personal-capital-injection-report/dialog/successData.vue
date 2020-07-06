<template>
  <div class="detail">
    <form-dialog title="全是本月的拨付成功数据" width="1200px" new-calss="big" :is-show="show" @update:isShow="addIsShow">
      <div class="box">
        <div class="box-body">
          <div class="box-header handle">
            <span class="box-title">注资详细信息</span>
            <div class="box-tools">
              <el-button type="primary">导出</el-button>
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
        { type: 'index', label: '序号', width: '55px' },
        { prop: '注资流水号', label: '注资流水号', align: 'center', overflow: true },
        { prop: '银行数据交换批次', label: '银行数据交换批次', align: 'center', overflow: true },
        { prop: '银行名称', label: '银行名称', align: 'center', overflow: true },
        { prop: '个人电脑号', label: '个人电脑号', align: 'center', overflow: true },
        { prop: '姓名', label: '姓名', align: 'center', overflow: true },
        { prop: '公民身份证号码', label: '公民身份证号码', align: 'center', overflow: true },
        { prop: '医保账号', label: '医保账号', align: 'center', overflow: true },
        { prop: '划入金额', label: '划入金额', align: 'center', overflow: true },
        { prop: '说明或备注', label: '说明或备注', align: 'center', overflow: true },
        { prop: '银行处理时间', label: '银行处理时间', align: 'center', overflow: true },
        { prop: '银行处理结果', label: '银行处理结果', align: 'center', overflow: true },
        { prop: '银行处理说明', label: '银行处理说明', align: 'center', overflow: true }
      ],
      tableData: [1, 2, 3].map(i => {
        return {
          注资流水号: '注资流水号',
          银行名称: '银行名称',
          银行数据交换批次: '银行数据交换批次',
          个人电脑号: '个人电脑号',
          姓名: '姓名',
          公民身份证号码: '公民身份证号码',
          医保账号: '医保账号',
          划入金额: '划入金额',
          说明或备注: '说明或备注',
          银行处理时间: '银行处理时间',
          银行处理结果: '银行处理结果',
          银行处理说明: '银行处理说明'

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
