<template>
  <div class="medicalInsuranceTallyAudit">
    <el-row :gutter="10" class="tab-body">
      <el-col :md="10" :lg="8" :xl="6" class="tab-body-left">
        <el-form label-width="105px">
          <search-table :search-height="'150px'" :show-more-btn="true" :list-title="'医疗保险费缴费列表'" :table-col-count="3" :table-columns="columns" :table-data="tableData" :page-info="pageInfo" :is-selection="true" @getListData="getListData" @selectAll="selectAll">
            <template>
              <el-form-item label="医保区划" prop="医保区划">
                <medical-zonation v-model="searchForm.医保区划" />
              </el-form-item>
              <el-form-item label="经办时间" prop="经办时间">
                <el-date-picker v-model="searchForm.经办时间" style="width: 100%;" type="daterange" placeholder="请选择" />
              </el-form-item>
            </template>
            <template #more>
              <el-form-item label="缴费类型" prop="缴费类型">
                <pay-type v-model="searchForm.缴费类型" />
              </el-form-item>
              <el-form-item label="单位信息" prop="单位信息">
                <company-info v-model="searchForm.单位信息" />
              </el-form-item>
              <el-form-item label="审核状态" prop="审核状态">
                <audit-status v-model="searchForm.审核状态" />
              </el-form-item>
              <el-form-item label="缴费来源" prop="缴费来源">
                <pay-source v-model="searchForm.缴费来源" />
              </el-form-item>
              <el-form-item label="缴费单据号" prop="缴费单据号">
                <el-input v-model="searchForm.缴费单据号" placeholder="请输入" />
              </el-form-item>
            </template>
            <template #btn>
              <el-button>重置</el-button>
              <el-button type="primary">查询</el-button>
            </template>
            <template #listTools>
              <el-button type="danger" @click="deleteAll">删除单据</el-button>
              <el-button type="primary" @click="auditVisible = true">批量审核</el-button>
            </template>
          </search-table>
        </el-form>
      </el-col>
      <el-col :md="14" :lg="16" :xl="18">
        <div class="box">
          <div class="box-body">
            <right-detail-info :title="'医疗保险费缴费详情'" :options="columns" :list-data="dataDetail" />
            <!--单位缴费明细-->
            <company-pay-info />
          </div>
        </div>
      </el-col>
    </el-row>
    <Audit :show.sync="auditVisible" @audit="handleAudit" />
  </div>
</template>

<script>
import CompanyInfo from '@/components/Select/fund-insurance-manage/CompanyInfo'
import AuditStatus from '@/components/Select/fund-insurance-manage/AuditStatus'
import PayType from '@/components/Select/fund-insurance-manage/PayType'
import PaySource from '@/components/Select/fund-insurance-manage/PaySource'
import MedicalZonation from '@/components/Select/MedicalZonation'
import CompanyPayInfo from './company-pay-info'
// import Audit from './audit'
export default {
  name: 'MedicalInsuranceTallyAudit',
  components: {
    AuditStatus,
    PayType,
    PaySource,
    CompanyInfo,
    MedicalZonation,
    CompanyPayInfo
    // Audit
  },
  mixins: [],
  props: {},
  data() {
    return {
      auditVisible: false,
      searchForm: {},
      columns: [
        { label: '单据号', prop: '单据号', align: 'center' },
        { label: '缴款金额（元）', prop: '缴款金额', align: 'center' },
        { label: '缴费来源', prop: '缴费来源', align: 'center' },
        { label: '缴费类型', prop: '缴费类型', align: 'center' },
        { label: '医保区划', prop: '医保区划', align: 'center' },
        { label: '经办人', prop: '经办人', align: 'center' },
        { label: '经办时间', prop: '经办时间', align: 'center' }
      ],
      dataDetail: {},
      pageInfo: {
        pageNum: 1,
        pageSize: 15,
        total: 10,
        startRow: 1,
        endRow: 10
      },
      tableData: [111, 222, 333, 444, 555, 666, 777, 888, 999].map((item) => {
        return { '单据号': '单据号' + item, '缴款金额': '缴款金额', '缴费来源': '缴费来源', '缴费类型': '缴费类型', '医保区划': '医保区划', '经办人': '经办人', '经办时间': '经办时间' }
      })
    }
  },
  computed: {},
  watch: {},
  created() {
  },
  mounted() {
  },
  methods: {
    getListData(data) {
      this.dataDetail = data
      console.log(this.dataDetail)
    },
    selectAll(v) {
      console.log(v)
    },
    deleteAll() {
      this.$msgConfirm('是否删除？').then(res => {
        this.$msgSuccess('删除成功！')
      }).catch(err => {
        this.$msgInfo(err)
      })
    },
    handleAudit(v) {
      console.log(v)
    }
  }
}
</script>

<style scoped lang="scss"></style>

