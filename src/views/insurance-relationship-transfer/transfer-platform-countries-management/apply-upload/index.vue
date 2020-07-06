<template>
  <!--  转移申请通知单上传-->
  <div class="addEdit item4">
    <section class="layer layer-query">
      <div class="box">
        <ConditionHeader />
        <div class="box-body query">
          <el-form ref="searchForm" :model="searchForm" label-width="105px">
            <el-row :gutter="10">
              <el-col :md="12" :lg="8" :xl="6">
                <el-form-item label="系统跟踪号" prop="系统跟踪号">
                  <el-input v-model="searchForm.系统跟踪号" />
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
                <el-form-item label="姓名" prop="姓名">
                  <el-input v-model="searchForm.姓名" />
                </el-form-item>
              </el-col>
              <el-col :md="12" :lg="8" :xl="6">
                <el-form-item label="转入地行政区" prop="转入地行政区">
                  <MedicalZonation v-model="searchForm.转入地行政区" />
                </el-form-item>
              </el-col>
              <el-col :md="12" :lg="8" :xl="6">
                <el-form-item label="社会保障号码" prop="社会保障号码">
                  <el-input v-model="searchForm.社会保障号码" />
                </el-form-item>
              </el-col>
              <el-col :md="12" :lg="8" :xl="6">
                <el-form-item label="状态" prop="状态">
                  <MedicalZonation v-model="searchForm.状态" />
                </el-form-item>
              </el-col>
              <el-col :md="12" :lg="8" :xl="6">
                <el-form-item label="转出地险种" prop="转出地险种">
                  <InsuranceType v-model="searchForm.转出地险种" />
                </el-form-item>
              </el-col>
              <el-col :md="12" :lg="8" :xl="6">
                <el-form-item label="转出地行政区" prop="转出地行政区">
                  <MedicalZonation v-model="searchForm.转出地行政区" />
                </el-form-item>
              </el-col>
              <el-col :md="12" :lg="8" :xl="6">
                <el-form-item label="性别" prop="性别">
                  <el-select v-model="searchForm.性别" placeholder="请选择">
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    />
                  </el-select>
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
            <span class="box-title">转移申请通知单信息</span>
            <div class="box-tools">
              <el-button type="primary">上传</el-button>
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
  name: 'ApplyUpload',
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
          系统跟踪流水号: '系统跟踪流水号',
          转入地行政区划分: '转入地行政区划分',
          转出地行政区划分: '转出地行政区划分',
          业务环节状态: '业务环节状态',
          转移申请通知单编号: '转移申请通知单编号',
          姓名: '姓名',
          社会保障号码: '社会保障号码',
          转入地险种类型: '转入地项险种类型',
          转出地险种类型: '转出地项险种类型',
          性别: '性别',
          个人编号: '个人编号',
          医疗保险统账类别: '医疗保险统账类别',
          状态: '状态'
        }
      }),
      columns: [
        { type: 'selection' },
        { type: 'index', label: '序号', width: '55px' },
        { prop: '系统跟踪流水号', label: '系统跟踪流水号', align: 'center', overflow: true },
        { prop: '转入地行政区划分', label: '转入地行政区划分', align: 'center', overflow: true },
        { prop: '转出地行政区划分', label: '转出地行政区划分', align: 'center', overflow: true },
        { prop: '业务环节状态', label: '业务环节状态', align: 'center', overflow: true },
        { prop: '转移申请通知单编号', label: '转移申请通知单编号', align: 'center', overflow: true },
        { prop: '姓名', label: '姓名', align: 'center', overflow: true },
        { prop: '社会保障号码', label: '社会保障号码', align: 'center', overflow: true },
        { prop: '转入地险种类型', label: '转入地险种类型', align: 'center', overflow: true },
        { prop: '转出地险种类型', label: '转出地险种类型', align: 'center', overflow: true },
        { prop: '性别', label: '性别', align: 'center', overflow: true },
        { prop: '个人编号', label: '个人编号', align: 'center', overflow: true },
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

