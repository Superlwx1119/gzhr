<template>
  <!-- 计算执行计划管理 -->
  <div class="unitInsuranceReview item4 third-index">

    <section class="layer layer-query">
      <div class="box">
        <div class="box-body query">
          <el-form ref="searchForm" :model="searchForm" label-width="105px">
            <el-row :gutter="10">
              <el-col :md="12" :lg="8" :xl="6">
                <el-form-item label="任务类型" prop="单位批量应缴">
                  <task-type v-model="searchForm.单位批量应缴" />
                </el-form-item>
              </el-col>
              <el-col :md="12" :lg="8" :xl="6">
                <el-form-item label="确认标志" prop="未确认">
                  <confirm-mark v-model="searchForm.未确认" />
                </el-form-item>
              </el-col>
              <el-col :md="12" :lg="8" :xl="6">
                <el-form-item label="任务批次号" prop="批次号">
                  <el-input v-model="searchForm.批次号" placeholder="请输入" />
                </el-form-item>
              </el-col>
              <el-col :md="12" :lg="8" :xl="6">
                <el-form-item label="执行时间" prop="执行时间1">
                  <el-date-picker v-model="searchForm.执行时间1" style="width: 100%" type="daterange" start-placeholder="开始时间" end-placeholder="结束时间" />
                </el-form-item>
              </el-col>
              <el-col :md="24" :lg="8" :xl="6">
                <el-button @click="reset">重置</el-button>
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
          <span class="box-title">审核单位列表</span>
          <div class="box-tools">
            <el-button type="primary" @click="batchAuditClick">批量审核</el-button>
          </div>
        </div>
        <div class="box-body result">
          <ExpandList
            :is-index="true"
            :is-selection="true"
            :columns="tableColumns"
            :operates="tableOperates"
            :data="tableData"
            @update:multipleSelection="multipleSelection"
          />
          <Pagination />
        </div>
      </div>
    </section>

    <!-- 审核弹窗 -->
    <audit-dialog v-model="showAuditDialog" dialog-title="单位参保登记审核" />

    <!-- 详情弹窗 -->
    <Details :show="DetaVisible" @update:show="DetaIsShow" />
  </div>
</template>

<script>
import TaskType from '@/components/Select/insurance-management/TaskType'
import ConfirmMark from '@/components/Select/insurance-management/ConfirmMark'
import AuditDialog from '@/views/components/AuditDialog'
import Details from './components/details'
export default {
  name: '',
  components: {
    TaskType,
    ConfirmMark,
    AuditDialog,
    Details
  },
  mixins: [],
  props: {},
  data() {
    return {
      addVisible: false,
      DetaVisible: false,
      showAuditDialog: false,
      searchForm: {},
      selectRows: [],
      tableColumns: [
        { label: '任务批次号', prop: '任务批次号1' },
        { label: '任务类型', prop: '任务类型1' },
        { label: '执行时间', prop: 'dateRange', slotName: 'dateRange', type: 'custom' },
        { label: '确认标志', prop: '确认标志1' },
        { label: '经办人', prop: '经办人1' },
        { label: '经办时间', prop: '经办时间1' }
      ],
      tableData: [{ 任务批次号1: '10001', 任务类型1: '单位批量应缴', dateRange: '2018-01-01', 确认标志1: '有效', 经办人1: '张三', 经办时间1: '2010-10-10' }],
      tableOperates: {
        width: '120px',
        fixed: 'right',
        list: [
          { show: true, label: '详情', type: 'text', method: () => {
            this.DetaVisible = true
          } }
        ]
      }
    }
  },
  computed: {},
  watch: {},
  created() {
  },
  mounted() {
  },
  methods: {
    // 批量审核
    batchAuditClick() {
      if (this.selectRows.length > 0) {
        this.showAuditDialog = true
      } else {
        this.$msgConfirm('请选择')
        console.log(this.selectRows.length)
      }
    },
    multipleSelection(val) {
      this.selectRows = val
    },
    reset() {
      this.searchForm = {}
    },
    search(formName) {},
    // 监听批量审核的显示与隐藏
    // addIsShow() {
    //   this.addVisible = false
    // },
    DetaIsShow() {
      this.DetaVisible = false
    }
  }
}
</script>

<style scoped lang="scss"></style>
