<!-- 职工政策维护审核 -->
<template>
  <div class="third-index employee-policy-maintenance-review item4">
    <section class="layer layer-query">
      <div class="box">
        <ConditionHeader />
        <div class="box-body query">
          <el-form ref="searchForm" :model="searchForm" label-width="105px">
            <el-row :gutter="10">
              <el-col :md="12" :lg="8" :xl="6">
                <el-form-item label="医保区划" prop="ybqh">
                  <el-select v-model="searchForm.ybqh" style="width:100%;" />
                </el-form-item>
              </el-col>
              <el-col :md="12" :lg="8" :xl="6">
                <el-form-item label="险种" prop="xz">
                  <el-select v-model="searchForm.xz" style="width:100%;">
                    <el-option label="基本医疗保险" value="基本医疗保险" />
                    <el-option label="大额互助" value="大额互助" />
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :md="12" :lg="8" :xl="6">
                <el-form-item label="款项" prop="kx">
                  <el-select v-model="searchForm.kx" style="width:100%;">
                    <el-option label="基本医疗统筹" value="基本医疗统筹" />
                    <el-option label="基本医疗统筹划入个人账户" value="基本医疗统筹划入个人账户" />
                    <el-option label="基本医疗个人应缴" value="基本医疗个人应缴" />
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :md="12" :lg="8" :xl="6">
                <el-form-item label="审核状态" prop="shzt">
                  <el-select v-model="searchForm.shzt" style="width:100%;">
                    <el-option label="未审核" value="未审核" />
                    <el-option label="已审核" value="已审核" />
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :md="12" :lg="8" :xl="6">
                <el-button @click="reset('searchForm')">重置</el-button>
                <el-button type="primary" @click="search('searchForm')">查询</el-button>
              </el-col>
            </el-row>
          </el-form>
        </div>
      </div>
    </section>
    <section class="layer layer-result">
      <div class="box">
        <div class="box-header handle">
          <span class="box-title">职工政策维护审核列表</span>
          <div class="box-tools">
            <el-button v-if="searchForm.shzt === '未审核'" type="primary" @click="batchReview">批量审核</el-button>
          </div>
        </div>
        <div class="box-body">
          <MyTableView :border="true" :columns="columns" :data="tableData" @update:multipleSelection="multipleSelection">
            <template slot="operation" slot-scope="scope">
              <el-button type="text" @click="openDetailDialog(scope.row)">明细</el-button>
              <el-button type="text" @click="review(scope.row)">审核</el-button>
            </template>
          </MyTableView>
          <Pagination />
        </div>
      </div>
    </section>
    <AuditDialog :is-dialog-visible="reviewDialogVisible" :dialog-title="reviewDialogTitle" @closeAll="closeAuditDialog" />
    <Edit :show.sync="isDetailDialogVisible" :form="detailForm" />
  </div>
</template>
<script>
import AuditDialog from '@/views/components/AuditDialog' // 审核弹窗
import Edit from './components/Edit'
export default {
  components: {
    AuditDialog,
    Edit
  },
  data() {
    return {
      searchForm: {
        ybqh: '',
        xz: '',
        kx: '',
        shzt: '未审核'
      },
      columns: [
        { type: 'selection', label: '', width: '30px' },
        { label: '序号', type: 'index', width: '50' },
        { label: '申请事件ID', prop: 'sqsjid' },
        { label: '统筹区', prop: 'tcq' },
        { label: '险种', prop: 'xz' },
        { label: '款项', prop: 'kx' },
        { label: '政策描述', prop: 'zcms' },
        { label: '计算周期', prop: 'jszq' },
        { label: '生效时间', prop: 'sxsj1' },
        { label: '失效时间', prop: 'sxsj2' },
        { label: '计算基数', prop: 'jsjs' },
        { label: '计算比率', prop: 'jsbl' },
        { type: 'operation', label: '操作' }
      ],
      tableData: [
        {
          sqsjid: '1233',
          tcq: 'xxx中心',
          xz: '基本医疗',
          kx: '单位缴纳',
          zcms: '基本医疗单位应缴',
          jszq: '年',
          sxsj1: '2000-01-01',
          sxsj2: '2099-12-31',
          jsjs: '个人工资【社平60%保底300%拦头】',
          jsbl: '单位缴纳8%'
        }
      ],
      reviewDialogVisible: false,
      selectRows: [],
      reviewDialogTitle: '',
      detailForm: {},
      isDetailDialogVisible: false
    }
  },
  watch: {
  },
  methods: {
    reset(formName) {
      this.$refs[formName].resetFields()
    },
    search(formName) {},
    multipleSelection(val) {
      this.selectRows = val
    },
    batchReview() {
      if (this.selectRows.length > 0) {
        this.reviewDialogTitle = '单位零星应收批量审核'
        this.reviewDialogVisible = true
      } else {
        this.$msgError('请选择要操作的数据！')
      }
    },
    review() {
      this.reviewDialogTitle = '单位零星应收审核'
      this.reviewDialogVisible = true
    },
    closeAuditDialog() {
      this.reviewDialogVisible = false
    },
    openDetailDialog(row) {
      this.isDetailDialogVisible = true
      this.detailForm = row
    }
  }
}
</script>
<style lang='scss' scoped>
</style>
