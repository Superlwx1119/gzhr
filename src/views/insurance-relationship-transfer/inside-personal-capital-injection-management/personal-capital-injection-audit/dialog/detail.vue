<template>
  <div class="detail">
    <form-dialog title="汇总批次详情" width="1000px" new-calss="small" :is-show="show" @update:isShow="addIsShow">
      <div class="box">
        <div class="box-body">
          <el-form ref="addForm" :model="addForm" label-width="105px">
            <my-table-view
              v-loading="loading"
              :data="tableData"
              :columns="columns"
              :height="300"
              :multiple-selection.sync="multipleSelection"
            />
            <Pagination :data="pageInfo" @refresh="pageChange" />
            <el-row :gutter="12">
              <el-col :md="12" :lg="8" :xl="8">
                <el-form-item label="总金额" prop="总金额">
                  <el-input v-model="queryForm.总金额" />
                </el-form-item>
              </el-col>
              <el-col :md="12" :lg="8" :xl="8">
                <el-form-item label="总条数" prop="总条数">
                  <el-input v-model="queryForm.总条数" />
                </el-form-item>
              </el-col>
            </el-row>
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
        { prop: '银行转入人姓名', label: '银行转入人姓名', align: 'center', overflow: true },
        { prop: '匹配方式', label: '匹配方式', align: 'center', overflow: true },
        { prop: '确认情况', label: '确认情况', align: 'center', overflow: true },
        { prop: '银行转出地', label: '银行转出地', align: 'center', overflow: true },
        { prop: '银行转出单位', label: '银行转出单位', align: 'center', overflow: true },
        { prop: '银行转出账号', label: '银行转出账号', align: 'center', overflow: true },
        { prop: '银行转出分行', label: '银行转出分行', align: 'center', overflow: true },
        { prop: '银行到账金额', label: '银行到账金额', align: 'center', overflow: true },
        { prop: '银行到账时间', label: '银行到账时间', align: 'center', overflow: true },
        { prop: '数据接收时间', label: '数据接收时间', align: 'center', overflow: true },
        { prop: '备注', label: '备注', align: 'center', overflow: true }
      ],
      tableData: [1, 2, 3].map(i => {
        return {
          银行转入人姓名: '银行转入人姓名',
          匹配方式: '匹配方式',
          确认情况: '确认情况',
          银行转出地: '银行转出地',
          银行转出单位: '银行转出单位',
          银行转出账号: '银行转出账号',
          银行转出分行: '银行转出分行',
          银行到账金额: '银行到账金额',
          银行到账时间: '银行到账时间',
          数据接收时间: '数据接收时间',
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
