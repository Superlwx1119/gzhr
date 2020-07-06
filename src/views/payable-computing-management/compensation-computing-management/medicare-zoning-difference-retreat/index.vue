<template>
  <!--  医保区划差额补退-->
  <div class="addEdit item4">
    <section class="layer layer-query">
      <div class="box">
        <ConditionHeader />
        <div class="box-body query">
          <el-form ref="searchForm" :model="searchForm" label-width="105px">
            <el-row :gutter="12">
              <el-col :md="12" :lg="8" :xl="6">
                <el-form-item label="医保区划" prop="医保区划">
                  <MedicalZonation v-model="searchForm.医保区划" />
                </el-form-item>
              </el-col>
              <el-col :md="12" :lg="8" :xl="6">
                <el-form-item label="险种" prop="险种">
                  <InsuranceType v-model="searchForm.险种" />
                </el-form-item>
              </el-col>
              <el-col :md="12" :lg="8" :xl="6">
                <el-form-item label="费用所属期" prop="费用所属期">
                  <el-date-picker
                    v-model="searchForm.费用所属期"
                    type="date"
                    style="height:100%"
                    placeholder="选择时间"
                  />
                </el-form-item>
              </el-col>
              <el-col :md="12" :lg="8" :xl="6">
                <el-form-item label="单位类型" prop="单位类型">
                  <el-select v-model="searchForm.单位类型" placeholder="请选择">
                    <el-option
                      v-for="item in departmentOptions"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    />
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :md="12" :lg="8" :xl="6">
                <el-form-item label="执行时间" prop="执行时间">
                  <el-date-picker
                    v-model="searchForm.执行时间"
                    placeholder="选择时间"
                    type="date"
                    style="height:100%"
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
            <span class="box-title">医保区划差额补退列表</span>
            <div class="box-tools">
              <el-button type="primary" @click="isShowDetail = true">计算进度</el-button>
              <el-button type="primary">提交计算</el-button>
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
    <!-- 进度 -->
    <Prograss :show.sync="isShowDetail" />
  </div>
</template>

<script>
import MedicalZonation from '@/components/Select/MedicalZonation'
import Prograss from './dialog/prograss'
import InsuranceType from '@/components/Select/InsuranceType'
export default {
  name: 'ZoningDifferenceRetreat',
  components: {
    InsuranceType,
    MedicalZonation,
    Prograss
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
      departmentOptions: [
        { label: '企业', value: '1' },
        { label: '机关单位', value: '2' },
        { label: '事业单位', value: '3' }
      ],
      computeStatus: [
        { label: '未试算', value: '1' },
        { label: '已试算', value: '2' }
      ],
      multipleSelection: [],
      loading: false,
      tableData: [1, 2, 3, 4].map((i) => {
        return {
          医保区划: '医保区划',
          险种: '险种',
          参保单位总数: '参保单位总数',
          已计算单位: '已计算单位',
          未计算单位: '未计算单位'
        }
      }),
      columns: [
        // { type: 'selection' },
        { type: 'index', label: '序号', width: '55px' },
        { prop: '医保区划', label: '医保区划', align: 'center', overflow: true },
        { prop: '险种', label: '险种', align: 'center', overflow: true },
        { prop: '参保单位总数', label: '参保单位总数', align: 'center', overflow: true },
        { prop: '已计算单位', label: '已计算单位', align: 'center', overflow: true },
        { prop: '未计算单位', label: '未计算单位', align: 'center', overflow: true }
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

