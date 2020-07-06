<template>
  <!--  转入个账注资审签-->
  <div class="addEdit item4">
    <section class="layer layer-query">
      <div class="box">
        <ConditionHeader />
        <div class="box-body query">

          <el-form ref="searchForm" :model="searchForm" label-width="105px">
            <el-row :gutter="10">
              <el-col :md="12" :lg="8" :xl="6">
                <el-form-item label="汇总批次号" prop="汇总批次号">
                  <Bank v-model="searchForm.汇总批次号" />
                </el-form-item>
              </el-col>
              <el-col :md="12" :lg="8" :xl="6">
                <el-form-item label="医保区划" prop="医保区划">
                  <Bank v-model="searchForm.医保区划" />
                </el-form-item>
              </el-col>
              <el-col :md="12" :lg="8" :xl="6">
                <el-form-item label="审签状态" prop="审签状态">
                  <Bank v-model="searchForm.审签状态" />
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
          <div class="box">
            <div class="box-header handle">
              <span class="box-title">转入个账注资审签列表</span>
              <div class="box-tools">
                <el-button type="primary" @click="isShowAudit = true">批量审签</el-button>
              </div>
            </div>
            <div class="box-body">
              <my-table-view
                v-loading="loading"
                :data="tableData"
                :columns="columns"
                :multiple-selection.sync="multipleSelection"
              >
                <template slot="operation" slot-scope="scope">
                  <el-button type="modify" class="modify" title="查看详情" :class="scope.$index" @click="isShowDetail = true">
                    <svg-icon icon-class="details" />
                  </el-button>
                </template>
              </my-table-view>
              <Pagination :data="pageInfo" @refresh="pageChange" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- 审核 -->
    <AuditDialog v-model="isShowAudit" dialog-title="批量审签" />
    <!-- 详情 -->
    <Detail :show.sync="isShowDetail" />
  </div>
</template>

<script>
import Detail from './dialog/detail'
import Bank from '@/components/Select/Bank'
import AuditDialog from '@/views/components/AuditDialog'
export default {
  name: 'DepartmentMessageMaintenance',
  components: {
    Bank,
    AuditDialog,
    Detail
  },
  mixins: [],
  props: {},
  data() {
    return {
      isShowDetail: false,
      isShowAudit: false,
      isShowAdd: false,
      searchForm: {},
      tableOperates: {
        width: '200px',
        fixed: 'right',
        list: [
          { show: true, label: '审核', type: 'text', method: () => {
            this.editVisible = true
          } }
        ]
      },
      pageInfo: {
        pageNum: 1,
        pageSize: 15,
        total: 10,
        startRow: 1,
        endRow: 10
      },
      multipleSelection: [],
      loading: false,
      tableData: [1, 2, 3, 4].map((i) => {
        return {
          批次号: '批次号',
          医保区划: '医保区划',
          总人数: '总人数',
          总金额: '总金额',
          审签状态: '审签状态'
        }
      }),
      columns: [
        { type: 'selection' },
        { type: 'index', label: '序号', width: '55px' },
        { prop: '批次号', label: '批次号', align: 'center', overflow: true },
        { prop: '医保区划', label: '医保区划', align: 'center', overflow: true },
        { prop: '总人数', label: '总人数', align: 'center', overflow: true },
        { prop: '总金额', label: '总金额', align: 'center', overflow: true },
        { prop: '审签状态', label: '审签状态', align: 'center', overflow: true },
        { type: 'operation', label: '操作', fixed: 'right', width: '100px' }
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

