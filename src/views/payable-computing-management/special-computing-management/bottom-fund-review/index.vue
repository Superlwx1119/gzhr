<template>
  <!--  铺底资金审核-->
  <div class="addEdit item4">
    <section class="layer layer-query">
      <div class="box">
        <ConditionHeader />
        <div class="box-body query">
          <el-form ref="searchForm" :model="searchForm" label-width="105px">
            <el-row :gutter="12">
              <el-col :md="12" :lg="8" :xl="6">
                <el-form-item label="查询条件" prop="查询条件">
                  <el-input v-model="searchForm.查询条件" placeholder="请在此输入单位名称或编码" />
                </el-form-item>
              </el-col>
              <el-col :md="12" :lg="8" :xl="6">
                <el-form-item label="单位名称" prop="单位名称">
                  <el-input v-model="searchForm.单位名称" />
                </el-form-item>
              </el-col>
              <el-col :md="12" :lg="8" :xl="6">
                <el-form-item label="单位管理码" prop="单位管理码">
                  <el-input v-model="searchForm.单位管理码" />
                </el-form-item>
              </el-col>
              <el-col :md="12" :lg="8" :xl="6">
                <el-form-item label="审核状态" prop="审核状态">
                  <el-select v-model="searchForm.审核状态" placeholder="请选择">
                    <el-option label="未审核" value="1" />
                    <el-option label="已审核" value="2" />
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :md="12" :lg="8" :xl="6">
                <el-form-item label="批次号" prop="批次号">
                  <el-input v-model="searchForm.批次号" />
                </el-form-item>
              </el-col>
              <el-col :md="12" :lg="8" :xl="6">
                <el-form-item label="经办起止时间" prop="经办起止时间">
                  <el-date-picker
                    v-model="searchForm.经办起止时间"
                    type="daterange"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                    placeholder="开始日期"
                  />
                </el-form-item>
              </el-col>
              <el-col :md="12" :lg="8" :xl="6" style="text-align: right">
                <el-button @click="reset('searchForm')">重置</el-button>
                <el-button type="primary" @click="search('searchForm')">查询</el-button>
              </el-col>
            </el-row>
          </el-form>
        </div>
      </div>
    </section>
    <section class="layer layer-tab">
      <div class="box">
        <div class="box-body">
          <div class="box-header handle">
            <span class="box-title">铺底资金审核列表</span>
            <div class="box-tools">
              <el-button type="primary" @click="isShowAudit = true">批量审核</el-button>
            </div>
          </div>
          <div class="box-body result">
            <my-table-view
              v-loading="loading"
              :data="tableData"
              :columns="columns"
              :multiple-selection.sync="multipleSelection"
            >
              <template slot="operation" slot-scope="scope">
                <el-button type="text" title="明细" class="modify" :class="scope.$index" @click="isShowDetail = true">
                  <svg-icon icon-class="details" />
                </el-button>
                <el-button type="text" class="modify" :class="scope.$index">征缴单</el-button>
              </template>
            </my-table-view>
            <Pagination :data="pageInfo" @refresh="pageChange" />
          </div>
        </div>
      </div>
    </section>
    <!-- 审核 -->
    <AuditDialog v-model="isShowAudit" dialog-title="铺底资金审核" />
    <!-- 明细 -->
    <Detail :show.sync="isShowDetail" />
    <!-- 成功 -->
    <!-- <Success :show.sync="isShowSuccess" /> -->
    <!-- 失败 -->
    <!-- <Fail :show.sync="isShowFail" /> -->
  </div>
</template>

<script>
import AuditDialog from '@/views/components/AuditDialog/index'
import Detail from './dialog/detail'
// import Success from './dialog/success'
// import Fail from './dialog/fail'
export default {
  name: 'FundReview',
  components: {
    AuditDialog,
    Detail
    // Success,
    // Fail
  },
  mixins: [],
  props: {},
  data() {
    return {
      isShowAudit: false,
      isShowSuccess: false,
      isShowDetail: false,
      searchForm: {},
      pageInfo: {
        pageNum: 1,
        pageSize: 15,
        total: 10,
        startRow: 1,
        endRow: 10
      },
      insertOptions: [
        { label: '单位 ', value: '1' },
        { label: '人员', value: '2' }
      ],
      computeStatus: [
        { label: '未试算', value: '1' },
        { label: '已试算', value: '2' }
      ],
      multipleSelection: [],
      loading: false,
      tableData: [1, 2, 3, 4].map((i) => {
        return {
          批次号: '批次号',
          单位管理码: '单位管理码',
          单位名称: '单位名称',
          铺底类型: '铺底类型',
          费款所属期: '费款所属期',
          铺底总金额: '铺底总金额',
          经办人: '经办人',
          经办时间: '经办时间'
        }
      }),
      columns: [
        { type: 'selection' },
        { type: 'index', label: '序号', width: '55px' },
        { prop: '批次号', label: '批次号', align: 'center', overflow: true },
        { prop: '单位管理码', label: '单位管理码', align: 'center', overflow: true },
        { prop: '单位名称', label: '单位名称', align: 'center', overflow: true },
        { prop: '铺底类型', label: '铺底类型', align: 'center', overflow: true },
        { prop: '费款所属期', label: '费款所属期', align: 'center', overflow: true },
        { prop: '铺底总金额', label: '铺底总金额(元)', align: 'center', overflow: true },
        { prop: '经办人', label: '经办人', align: 'center', overflow: true },
        { prop: '经办时间', label: '经办时间', align: 'center', overflow: true },
        { label: '操作', type: 'operation', align: 'center', overflow: true }
      ]
    }
  },
  computed: {},
  watch: {},
  created() {
  },
  mounted() {
  },
  methods: {
    gather() {
      this.$msgConfirm('确定汇总?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$msgSuccess('操作成功!')
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },
    reset(formName) {
      this.$refs[formName].resetFields()
    },
    pageChange(data) {
      this.pageInfo = data.pagination
    },
    search(formName) {}
  }
}
</script>

<style scoped lang="scss">
.addEdit {
    height: calc(100% - 8px);
    position: relative;
    .layer-tab {
      height: calc(100% - 120px);
      &>.box>.box-body{
        height: 100%;
        padding-top: 0;
        padding-left: 0;
        .el-tabs {
          height: 100%;
          /deep/ {
            .el-tabs__header {
              background-color: #fafafa;
            }
            .el-tabs__nav {
              margin-left: 0;
            }
            .el-tabs__content {
              height: calc(100% - 30px);
              .el-tab-pane, .box, .box-body {
                padding-top: 0;
                height: calc(100% - 16px);
              }
            }
          }
        }
      }
    }
    .el-date-editor,.el-select {
      width: 100%;
    }
  }
  </style>

