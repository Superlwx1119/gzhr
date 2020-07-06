<template>
  <!--  单位补欠核定-->
  <div class="addEdit item4">
    <section class="layer layer-query">
      <div class="box">
        <ConditionHeader />
        <div class="box-body query">
          <el-form ref="searchForm" :model="searchForm" label-width="105px">
            <el-row :gutter="12">
              <el-col :md="12" :lg="8" :xl="6">
                <el-form-item label="查询条件" prop="查询条件">
                  <el-input v-model="searchForm.查询条件" placeholder="请在此输入身份证或姓名" />
                </el-form-item>
              </el-col>
              <el-col :md="12" :lg="8" :xl="6">
                <el-form-item label="应缴类型" prop="应缴类型">
                  <el-select v-model="searchForm.应缴类型" placeholder="请选择">
                    <el-option
                      v-for="item in repaymentOptions"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    />
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :md="12" :lg="8" :xl="6">
                <el-form-item label="计算状态" prop="计算状态">
                  <el-select v-model="searchForm.计算状态" placeholder="请选择">
                    <el-option
                      v-for="item in computeStatus"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    />
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :md="12" :lg="8" :xl="6">
                <el-form-item label="计算起止时间" prop="计算起止时间">
                  <el-date-picker
                    v-model="searchForm.计算起止时间"
                    type="daterange"
                    style="height:100%"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                    placeholder="开始日期"
                  />
                </el-form-item>
              </el-col>
              <el-col :md="12" :lg="8" :xl="6">
                <el-form-item label="险种" prop="险种">
                  <InsuranceType v-model="searchForm.险种" />
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
            <span class="box-title">单位补欠核定列表</span>
            <div class="box-tools">
              <el-button type="primary">计算</el-button>
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
import InsuranceType from '@/components/Select/InsuranceType'
export default {
  name: 'DepartmentMessageMaintenance',
  components: {
    InsuranceType
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
      repaymentOptions: [
        { label: '正常应缴', value: '1' },
        { label: '退收', value: '2' },
        { label: '正常补收', value: '3' }
      ],
      computeStatus: [
        { label: '未试算', value: '1' },
        { label: '已试算', value: '2' }
      ],
      multipleSelection: [],
      loading: false,
      tableData: [1, 2, 3, 4].map((i) => {
        return {
          个人缴费明细ID: '个人缴费明细ID',
          姓名: '姓名',
          身份证: '身份证',
          单位名称: '单位名称',
          险种: '险种',
          费款所属期: '费款所属期',
          对应费款所属期: '对应费款所属期',
          人员缴费基数: '人员缴费基数',
          单位应缴金额: '单位应缴金额',
          个人应缴金额: '个人应缴金额'
        }
      }),
      columns: [
        { type: 'selection' },
        { type: 'index', label: '序号', width: '55px' },
        { prop: '个人缴费明细ID', label: '个人缴费明细ID', align: 'center', overflow: true },
        { prop: '姓名', label: '姓名', align: 'center', overflow: true },
        { prop: '身份证', label: '身份证', align: 'center', overflow: true },
        { prop: '单位名称', label: '单位名称', align: 'center', overflow: true },
        { prop: '险种', label: '险种', align: 'center', overflow: true },
        { prop: '费款所属期', label: '费款所属期', align: 'center', overflow: true },
        { prop: '对应费款所属期', label: '对应费款所属期', align: 'center', overflow: true },
        { prop: '人员缴费基数', label: '人员缴费基数', align: 'center', overflow: true },
        { prop: '单位应缴金额', label: '单位应缴金额', align: 'center', overflow: true },
        { prop: '个人应缴金额', label: '个人应缴金额', align: 'center', overflow: true }
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

