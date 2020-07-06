<template>
  <div class="detail">
    <form-dialog title="转入个账注资业务报表" width="1200px" new-calss="big" :is-show="show" @update:isShow="addIsShow">
      <div class="box">
        <div class="box-body">
          <div class="box-header handle">
            <span class="box-title">转入个账注资业务报表</span>
            <div class="box-tools">
              <el-button type="primary" @click="isShowSuccess = true">全是本月的拨付成功数据</el-button>
              <el-button type="primary" @click="isShowFail = true">全是本月的拨付失败数据</el-button>
              <el-button type="primary" @click="isShowChart = true">柱状图</el-button>
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
            <el-row style="margin-top:10px" :gutter="12">
              <el-col :md="6" :lg="6" :xl="6">
                <el-form-item label="总条数" prop="总条数">
                  <el-input v-model="queryForm.总条数" />
                </el-form-item>
              </el-col>
              <el-col :md="6" :lg="6" :xl="6">
                <el-form-item label="总人数" prop="总人数">
                  <el-input v-model="queryForm.总人数" />
                </el-form-item>
              </el-col>
              <el-col :md="6" :lg="6" :xl="6">
                <el-form-item label="总人数" prop="总人数">
                  <el-input v-model="queryForm.总人数" />
                </el-form-item>
              </el-col>
              <el-col :md="6" :lg="6" :xl="6">
                <el-form-item label="总金额" prop="总金额">
                  <el-input v-model="queryForm.总金额" />
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
    <!-- 成功数据 -->
    <SuccessData :show.sync="isShowSuccess" />
    <!-- 失败数据 -->
    <FailData :show.sync="isShowFail" />
    <!-- 柱状图 -->
    <Chart :show.sync="isShowChart" />
  </div>
</template>

<script>
// import Chart from '@/components/Charts/Keyboard'
import SuccessData from './successData'
import FailData from './failData'
import Chart from './chart'
export default {
  name: 'Detail',
  components: {
    FailData,
    SuccessData,
    Chart
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
      isShowSuccess: false,
      isShowFail: false,
      isShowChart: false,
      queryForm: {},
      options: [
        { label: '未确认', value: 1 },
        { label: '已确认', value: 2 }
      ],
      columns: [
        { type: 'index', label: '序号', width: '55px' },
        { prop: '时间', label: '时间', align: 'center', overflow: true },
        { prop: '总人数', label: '总人数', align: 'center', overflow: true },
        { prop: '总人次', label: '总人次', align: 'center', overflow: true },
        { prop: '总金额', label: '总金额', align: 'center', overflow: true }
      ],
      tableData: [1, 2, 3].map(i => {
        return {
          时间: '时间',
          总人次: '总人次',
          总人数: '总人数',
          总金额: '总金额'

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
