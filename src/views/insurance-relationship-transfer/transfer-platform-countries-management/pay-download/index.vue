<template>
  <!--  缴费年限和缴费时段下载-->
  <div class="addEdit item4">
    <section class="layer layer-query">
      <div class="box">
        <ConditionHeader />
        <div class="box-body query">
          <el-form ref="searchForm" :model="searchForm" label-width="105px">
            <el-row :gutter="10">
              <el-col :md="12" :lg="8" :xl="6">
                <el-form-item label="原医疗保障号" prop="原医疗保障号">
                  <el-input v-model="searchForm.原医疗保障号" />
                </el-form-item>
              </el-col>
              <el-col :md="12" :lg="8" :xl="6">
                <el-form-item label="通知单编号" prop="通知单编号">
                  <el-input v-model="searchForm.通知单编号" />
                </el-form-item>
              </el-col>
              <el-col :md="12" :lg="8" :xl="6">
                <el-form-item label="转入地险种" prop="转入地险种">
                  <InsuranceType v-model="searchForm.转入地险种" />
                </el-form-item>
              </el-col>
              <el-col :md="12" :lg="8" :xl="6">
                <el-form-item label="转出地险种" prop="转出地险种">
                  <InsuranceType v-model="searchForm.转出地险种" />
                </el-form-item>
              </el-col>
              <el-col :md="12" :lg="8" :xl="6">
                <el-form-item label="转入地行政区" prop="转入地行政区">
                  <MedicalZonation v-model="searchForm.转入地行政区" />
                </el-form-item>
              </el-col>
              <el-col :md="12" :lg="8" :xl="6">
                <el-form-item label="转出地行政区" prop="转出地行政区">
                  <MedicalZonation v-model="searchForm.转出地行政区" />
                </el-form-item>
              </el-col>
              <el-col :md="12" :lg="8" :xl="6">
                <el-form-item label="社会保障号码" prop="社会保障号码">
                  <el-input v-model="searchForm.社会保障号码" />
                </el-form-item>
              </el-col>
              <el-col :md="12" :lg="8" :xl="6">
                <el-form-item label="业务环节状态" prop="业务环节状态">
                  <MedicalZonation v-model="searchForm.业务环节状态" />
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
            <span class="box-title">缴费年限和缴费时段列表</span>
            <div class="box-tools">
              <el-button type="primary">下载选择数据</el-button>
              <el-button type="primary">下载全部数据</el-button>
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
import MedicalZonation from '@/components/Select/MedicalZonation'
export default {
  name: 'PayDownload',
  components: {
    InsuranceType,
    MedicalZonation
  },
  mixins: [],
  props: {},
  data() {
    return {
      isShowDetail: false,
      isShowEdit: false,
      isShowAdd: false,
      searchForm: {},
      options: [
        { label: '男', value: 1 },
        { label: '女', value: 2 }
      ],
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
          转入地行政区划分: '转入地行政区划分',
          转出地行政区划分: '转出地行政区划分',
          业务环节状态: '业务环节状态',
          转移申请通知单编号: '转移申请通知单编号',
          姓名: '姓名',
          原医疗保险号: '原医疗保险号',
          转入地险种类型: '转入地险种类型',
          转出地险种类型: '转出地险种类型',
          开始日期: '开始日期',
          截止日期: '截止日期',
          医疗保险统账类别: '医疗保险统账类别',
          状态: '状态'
        }
      }),
      columns: [
        { type: 'selection' },
        { type: 'index', label: '序号', width: '55px' },
        { prop: '转入地行政区划分', label: '转入地行政区划分', align: 'center', overflow: true },
        { prop: '转出地行政区划分', label: '转出地行政区划分', align: 'center', overflow: true },
        { prop: '业务环节状态', label: '业务环节状态', align: 'center', overflow: true },
        { prop: '转移申请通知单编号', label: '转移申请通知单编号', align: 'center', overflow: true },
        { prop: '姓名', label: '姓名', align: 'center', overflow: true },
        { prop: '原医疗保险号', label: '原医疗保险号', align: 'center', overflow: true },
        { prop: '转入地险种类型', label: '转入地险种类型', align: 'center', overflow: true },
        { prop: '转出地险种类型', label: '转出地险种类型', align: 'center', overflow: true },
        { prop: '开始日期', label: '开始日期', align: 'center', overflow: true },
        { prop: '截止日期', label: '截止日期', align: 'center', overflow: true },
        { prop: '医疗保险统账类别', label: '医疗保险统账类别', align: 'center', overflow: true },
        { prop: '状态', label: '状态', align: 'center', overflow: true }
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
      height: calc(100% - 165px);
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

