<template>
  <!--  医保关系转出信息查询-->
  <div class="addEdit item4">
    <section class="layer layer-query">
      <div class="box">
        <ConditionHeader />
        <div class="box-body query">
          <el-form ref="searchForm" :model="searchForm" label-width="105px">
            <el-row :gutter="10">
              <el-col :md="12" :lg="8" :xl="6">
                <el-form-item label="查询条件" prop="查询条件">
                  <el-input v-model="searchForm.查询条件" placeholder="请在此输入身份证或姓名" />
                </el-form-item>
              </el-col>
              <el-col :md="12" :lg="8" :xl="6">
                <el-form-item label="姓名" prop="姓名">
                  <el-input v-model="searchForm.姓名" placeholder="请输入" />
                </el-form-item>
              </el-col>
              <el-col :md="12" :lg="8" :xl="6">
                <el-form-item label="证件号码" prop="证件号码">
                  <el-input v-model="searchForm.证件号码" placeholder="请输入" />
                </el-form-item>
              </el-col>
              <el-col :md="12" :lg="8" :xl="6">
                <el-form-item label="经办部门" prop="经办部门">
                  <el-input v-model="searchForm.经办部门" placeholder="请输入" />
                </el-form-item>
              </el-col>
              <el-col :md="12" :lg="8" :xl="6">
                <el-form-item label="受理号" prop="受理号">
                  <el-input v-model="searchForm.受理号" placeholder="请输入" />
                </el-form-item>
              </el-col>
              <el-col :md="12" :lg="8" :xl="6">
                <el-form-item label="业务状态" prop="业务状态">
                  <BusinessStatus v-model="searchForm.业务状态" />
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
              <el-col :md="12" :lg="8" :xl="6">
                <el-form-item label="所属银行" prop="所属银行">
                  <Bank v-model="searchForm.所属银行" />
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
            <span class="box-title">医保关系转出录入及修改列表</span>
            <div class="box-tools">
              <el-button type="primary" @click="isShowPrint = true">打印《参保凭证》</el-button>
              <el-button type="primary" @click="isShowPrint = true">打印《医保关系变更表》</el-button>
              <el-button type="primary">导出</el-button>
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
                <el-button type="text" class="modify" title="查看详细" :class="scope.$index" @click="isShowDetail = true">
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
    <!-- 打印 -->
    <!-- <Print :show.sync="isShowPrint" /> -->
  </div>
</template>

<script>
import Detail from '../../components/outsideDetail'
// import Print from './dialog/print'
import Bank from '@/components/Select/Bank'
import BusinessStatus from '@/components/Select/BusinessStatus'
export default {
  name: 'InsideMessageSearch',
  components: {
    BusinessStatus,
    Detail,
    // Print,
    Bank
  },
  mixins: [],
  props: {},
  data() {
    return {
      isShowDetail: false,
      isShowPrint: false,
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
          受理号: '受理号',
          事项类型: '事项类型',
          姓名: '姓名',
          证件号码: '证件号码',
          凭证号: '凭证号',
          接收地: '接收地',
          申请日期: '申请日期',
          录入日期: '录入日期',
          审核日期: '审核日期',
          转入方式: '转入方式',
          转入金额: '转入金额(元)',
          转出状态: '转出状态',
          转出日期: '转出日期',
          业务状态: '业务状态',
          经办部门: '经办部门'
        }
      }),
      columns: [
        { type: 'selection' },
        { type: 'index', label: '序号', width: '55px' },
        { prop: '受理号', label: '受理号', align: 'center', overflow: true },
        { prop: '事项类型', label: '事项类型', align: 'center', overflow: true },
        { prop: '姓名', label: '姓名', align: 'center', overflow: true },
        { prop: '证件号码', label: '证件号码', align: 'center', overflow: true },
        { prop: '凭证号', label: '凭证号', align: 'center', overflow: true },
        { prop: '接收地', label: '接收地', align: 'center', overflow: true },
        { prop: '申请日期', label: '申请日期', align: 'center', overflow: true },
        { prop: '录入日期', label: '录入日期', align: 'center', overflow: true },
        { prop: '审核日期', label: '审核日期', align: 'center', overflow: true },
        { prop: '转入方式', label: '转入方式', align: 'center', overflow: true },
        { prop: '转入金额', label: '转入金额(元)', align: 'center', overflow: true },
        { prop: '转出状态', label: '转出状态', align: 'center', overflow: true },
        { prop: '转出日期', label: '转出日期', align: 'center', overflow: true },
        { prop: '业务状态', label: '业务状态', align: 'center', overflow: true },
        { prop: '经办部门', label: '经办部门', align: 'center', overflow: true },
        { type: 'operation', label: '操作', fixed: 'right', width: '160px' }
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
      height: calc(100% - 160px);
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

