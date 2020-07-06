<template>
  <!--  转入个账核发汇总-->
  <div class="addEdit item4">
    <section class="layer layer-query">
      <div class="box">
        <ConditionHeader />
        <div class="box-body query">

          <el-form ref="searchForm" :model="searchForm" label-width="105px">
            <el-row :gutter="10">
              <el-col :md="12" :lg="8" :xl="6">
                <el-form-item label="审核标志" prop="审核标志">
                  <Bank v-model="searchForm.审核标志" />
                </el-form-item>
              </el-col>
              <el-col :md="12" :lg="8" :xl="6">
                <el-form-item label="匹配标志" prop="匹配标志">
                  <Bank v-model="searchForm.匹配标志" />
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
            <span class="box-title">转入个账核发列表</span>
            <div class="box-tools">
              <el-button type="primary" @click="gather">汇总</el-button>
            </div>
          </div>
          <div class="box-body result">
            <my-table-view
              v-loading="loading"
              :data="tableData"
              :columns="columns"
              :multiple-selection.sync="multipleSelection"
            />
            <Pagination :data="pageInfo" @refresh="pageChange" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Bank from '@/components/Select/Bank'
export default {
  name: 'DepartmentMessageMaintenance',
  components: {
    Bank
  },
  mixins: [],
  props: {},
  data() {
    return {
      isShowDetail: false,
      isShowEdit: false,
      isShowAdd: false,
      searchForm: {},
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
          银行转入人姓名: '银行转入人姓名',
          匹配方式: '匹配方式',
          确认情况: '确认情况',
          银行转出地: '银行转出地',
          银行转出地省属: '银行转出地省属',
          银行转出单位: '银行转出单位',
          银行转出账号: '银行转出账号',
          银行转出分行: '银行转出分行',
          银行到账金额: '银行到账金额',
          银行到账时间: '银行到账时间',
          数据接收时间: '数据接收时间',
          备注: '备注'
        }
      }),
      columns: [
        { type: 'selection' },
        { type: 'index', label: '序号', width: '55px' },
        { prop: '银行转入人姓名', label: '银行转入人姓名', align: 'center', overflow: true },
        { prop: '匹配方式', label: '匹配方式', align: 'center', overflow: true },
        { prop: '确认情况', label: '确认情况', align: 'center', overflow: true },
        { prop: '银行转出地', label: '银行转出地', align: 'center', overflow: true },
        { prop: '银行转出地省属', label: '银行转出地省属', align: 'center', overflow: true },
        { prop: '银行转出单位', label: '银行转出单位', align: 'center', overflow: true },
        { prop: '银行转出账号', label: '银行转出账号', align: 'center', overflow: true },
        { prop: '银行转出分行', label: '银行转出分行', align: 'center', overflow: true },
        { prop: '银行到账金额', label: '银行到账金额（元）', align: 'center', overflow: true },
        { prop: '银行到账时间', label: '银行到账时间', align: 'center', overflow: true },
        { prop: '数据接收时间', label: '数据接收时间', align: 'center', overflow: true },
        { prop: '备注', label: '备注', align: 'center', overflow: true }
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

