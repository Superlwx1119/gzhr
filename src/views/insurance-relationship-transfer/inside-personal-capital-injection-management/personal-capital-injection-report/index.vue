<template>
  <!--  转入个账注资业务报表-->
  <div class="addEdit item4">
    <section class="layer layer-query">
      <div class="box">
        <ConditionHeader />
        <div class="box-body query">

          <el-form ref="searchForm" :model="searchForm" label-width="105px">
            <el-row :gutter="10">
              <el-col :md="12" :lg="8" :xl="6">
                <el-form-item label="报表类型" prop="报表类型">
                  <Bank v-model="searchForm.报表类型" />
                </el-form-item>
              </el-col>
              <el-col :md="12" :lg="8" :xl="6">
                <el-form-item label="汇总批次号" prop="汇总批次号">
                  <Bank v-model="searchForm.汇总批次号" />
                </el-form-item>
              </el-col>
              <el-col :md="12" :lg="8" :xl="6">
                <el-form-item label="起止时间" prop="起止时间">
                  <el-date-picker
                    v-model="searchForm.起止时间"
                    style="width:100%"
                    type="daterange"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
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
            <span class="box-title">转入个账注资业务报表列表</span>
          </div>
          <div class="box-body result">
            <my-table-view
              v-loading="loading"
              :data="tableData"
              :columns="columns"
              :multiple-selection.sync="multipleSelection"
            >
              <template slot="operation" slot-scope="scope">
                <el-button type="modify" class="modify" title="查看报表" :class="scope.$index" @click="isShowDetail = true">
                  <svg-icon icon-class="details" />
                </el-button>
              </template>
            </my-table-view>
            <Pagination :data="pageInfo" @refresh="pageChange" />
          </div>
        </div>
      </div>
    </section>
    <!-- 详情 -->
    <Detail :show.sync="isShowDetail" />
  </div>
</template>

<script>
import Detail from './dialog/detail'
import Bank from '@/components/Select/Bank'
export default {
  name: 'DepartmentMessageMaintenance',
  components: {
    Bank,
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
          汇总批次号: '汇总批次号',
          医保区划: '医保区划',
          总人数: '总人数',
          总人次: '总人次',
          总金额: '总金额'
        }
      }),
      columns: [
        { type: 'selection' },
        { type: 'index', label: '序号', width: '55px' },
        { prop: '汇总批次号', label: '汇总批次号', align: 'center', overflow: true },
        { prop: '医保区划', label: '医保区划', align: 'center', overflow: true },
        { prop: '总人数', label: '总人数', align: 'center', overflow: true },
        { prop: '总人次', label: '总人次', align: 'center', overflow: true },
        { prop: '总金额', label: '总金额(元)', align: 'center', overflow: true },
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

