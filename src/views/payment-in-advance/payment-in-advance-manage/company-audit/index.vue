<template>
  <!-- 单位预缴审核-->
  <div class="paymentInAdvanceAudit">
    <normal-layer :search-number="1">
      <template slot="search-header">
        <FormItems :items-datas="itemsDatas" :form-datas="queryForm">
          <template slot="单位信息1">
            <company-info v-model="queryForm.单位信息1" />
          </template>
          <div>
            <el-button @click="reset('queryForm')">重置</el-button>
            <el-button type="primary" @click="search('queryForm')">查询</el-button>
          </div>
        </FormItems>
      </template>
      <div slot="table-title" class="box-header handle">
        <span class="box-title">单位预缴审核列表</span>
        <div slot="title-btns" class="box-tools">
          <el-button type="primary" @click="handleAuditAll">批量审核</el-button>
        </div>
      </div>
      <template>
        <my-table-view :border="true" :columns="columns" :data="tableData">
          <template slot="operation" slot-scope="scope">
            <el-button type="text" @click="handleAudit(scope.row)">审核</el-button>
          </template>
        </my-table-view>
        <Pagination />
      </template>
    </normal-layer>
    <Audit :show.sync="auditVisible" />
  </div>
</template>

<script>
import pageHandle from '@/mixins/pageHandle'
import NormalLayer from '@/views/components/PageLayers/normalLayer'
import FormItems from '@/views/components/PageLayers/form-items'
import CompanyInfo from '@/components/Select/fund-insurance-manage/CompanyInfo'
export default {
  name: 'PaymentInAdvanceAudit',
  components: { CompanyInfo, NormalLayer, FormItems },
  mixins: [pageHandle],
  props: {},
  data() {
    return {
      auditVisible: false,
      itemsDatas: [
        { label: '单位信息', prop: '单位信息1', type: 'custom' }
      ],
      columns: [
        { type: 'selection' },
        { label: '序号', type: 'index' },
        { label: '单位管理码', prop: 'a' },
        { label: '单位名称', prop: 'b' },
        { label: '险种类型', prop: 'c' },
        { label: '修改前金额（元）', prop: 'd' },
        { label: '修改后金额（元）', prop: 'e' },
        { label: '修改原因', prop: 'f' },
        { label: '操作', type: 'operation' }
      ],
      tableData: [1, 2, 3].map(item => {
        return {
          a: 'DW' + item,
          b: '单位A',
          c: '基本医疗保险',
          d: '1000',
          e: '500',
          f: '征缴误入'
        }
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
    handleAudit(row) { this.auditVisible = true },
    handleAuditAll() { this.auditVisible = true }
  }
}
</script>

<style scoped lang="scss"></style>
