<template>
  <!--  查询与统计-->
  <div class="addEdit item4">
    <section class="layer layer-query">
      <div class="box">
        <ConditionHeader />
        <div class="box-body query">
          <el-form ref="searchForm" :model="searchForm" label-width="105px">
            <el-row :gutter="10">
              <el-col :md="12" :lg="8" :xl="6">
                <el-form-item label="办理形式" prop="办理形式">
                  <TransferType v-model="searchForm.办理形式" />
                </el-form-item>
              </el-col>
              <el-col :md="12" :lg="8" :xl="6">
                <el-form-item label="审核起止时间" prop="审核起止时间">
                  <el-date-picker
                    v-model="searchForm.审核起止时间"
                    style="width:100%"
                    type="daterange"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                  />
                </el-form-item>
              </el-col>
              <el-col :md="12" :lg="8" :xl="6">
                <el-form-item label="转移起止日期" prop="转移起止日期">
                  <el-date-picker
                    v-model="searchForm.转移起止日期"
                    style="width:100%"
                    type="daterange"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                  />
                </el-form-item>
              </el-col>
              <el-col :md="12" :lg="24" :xl="6" style="text-align: right">
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
            <span class="box-title">查询与统计列表</span>
            <div class="box-tools">
              <el-button type="primary">导出</el-button>
              <el-button type="danger">统计</el-button>
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
                <el-button type="text" class="modify" :class="scope.$index" @click="isShowDetail = true">查看详细</el-button>
                <el-button type="text" class="modify" :class="scope.$index" @click="isShowAdd = true">录入</el-button>
              </template>
            </my-table-view>
            <Pagination :data="pageInfo" @refresh="pageChange" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import TransferType from '@/components/Select/TransferType'
export default {
  name: 'IntegratedSearchStatistical',
  components: {
    TransferType
  },
  mixins: [],
  props: {},
  data() {
    return {
      isShowDetail: false,
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
          受理号: '受理号',
          事项类型: '事项类型',
          姓名: '姓名',
          身份证: '身份证',
          凭证号: '凭证号',
          个人账号转移方式: '个人账号转移方式',
          个人账户金额: '个人账户金额',
          业务状态: '业务状态',
          审核日期: '审核日期',
          是否跨省: '是否跨省',
          户籍类型: '户籍类型',
          原参保地: '原参保地',
          新参保地: '新参保地',
          原医疗保障类型: '原医疗保障类型',
          新医疗保障类型: '新医疗保障类型',
          参保身份变更类型: '参保身份变更类型',
          经办部门: '经办部门',
          转移日期: '转移日期'
        }
      }),
      columns: [
        { type: 'selection' },
        { type: 'index', label: '序号', width: '55px' },
        { prop: '受理号', label: '受理号', align: 'center', overflow: true },
        { prop: '事项类型', label: '事项类型', align: 'center', overflow: true },
        { prop: '姓名', label: '姓名', align: 'center', overflow: true },
        { prop: '身份证', label: '身份证', align: 'center', overflow: true },
        { prop: '凭证号', label: '凭证号', align: 'center', overflow: true },
        { prop: '个人账号转移方式', label: '个人账号转移方式', align: 'center', overflow: true },
        { prop: '个人账户金额', label: '个人账户金额', align: 'center', overflow: true },
        { prop: '转移日期', label: '转移日期', align: 'center', overflow: true },
        { prop: '业务状态', label: '业务状态', align: 'center', overflow: true },
        { prop: '审核日期', label: '审核日期', align: 'center', overflow: true },
        { prop: '是否跨省', label: '是否跨省', align: 'center', overflow: true },
        { prop: '户籍类型', label: '户籍类型', align: 'center', overflow: true },
        { prop: '原参保地', label: '原参保地', align: 'center', overflow: true },
        { prop: '原医疗保障类型', label: '原医疗保障类型', align: 'center', overflow: true },
        { prop: '新参保地', label: '新参保地', align: 'center', overflow: true },
        { prop: '新医疗保障类型', label: '新医疗保障类型', align: 'center', overflow: true },
        { prop: '参保身份变更类型', label: '参保身份变更类型', align: 'center', overflow: true },
        { prop: '经办部门', label: '经办部门', align: 'center', overflow: true }
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

