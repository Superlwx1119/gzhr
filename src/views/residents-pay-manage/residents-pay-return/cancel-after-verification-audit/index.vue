<template>
  <!-- 居民应缴核销审核-->
  <div class="cancelAfterVerificationAudit">
    <normal-layer :search-number="4">
      <template slot="search-header">
        <FormItems :items-datas="itemsDatas" :form-datas="queryForm">
          <template slot="医保区划1">
            <insurance-area v-model="queryForm.医保区划1" />
          </template>
          <template slot="人员信息1">
            <personal-info v-model="queryForm.人员信息1" />
          </template>
          <div style="text-align: right">
            <el-button @click="reset('queryForm')">重置</el-button>
            <el-button type="primary" @click="search('queryForm')">查询</el-button>
          </div>
        </FormItems>
      </template>
      <div slot="table-title" class="box-header handle">
        <span class="box-title">居民应缴核销列表</span>
        <div slot="title-btns" class="box-tools">
          <el-button type="primary" @click="handleAuditAll">审核</el-button>
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
import PersonalInfo from '@/components/Select/fund-insurance-manage/PersonalInfo'
import InsuranceArea from '@/components/Select/residents-pay-manage/InsuranceArea'
export default {
  name: 'CancelAfterVerificationAudit',
  components: {
    InsuranceArea,
    PersonalInfo,
    NormalLayer,
    FormItems
  },
  mixins: [pageHandle],
  props: {},
  data() {
    return {
      auditVisible: false,
      itemsDatas: [
        { label: '医保区划', prop: '医保区划1', type: 'custom' },
        { label: '人员信息', prop: '人员信息1', type: 'custom' },
        { label: '年度', prop: '年度1', type: 'dateMoon' },
        { label: '经办时间', prop: '经办时间1', type: 'dateRange' }
      ],
      columns: [
        { type: 'selection' },
        { label: '序号', type: 'index' },
        { label: '村/社区名称', prop: 'a' },
        { label: '人员姓名', prop: 'aa' },
        { label: '身份证号码', prop: 'b' },
        { label: '参保身份', prop: 'c' },
        { label: '缴费年度', prop: 'd' },
        { label: '缴费金额（元）', prop: 'e' },
        { label: '核销原因', prop: 'f' },
        { label: '经办人', prop: 'h' },
        { label: '经办时间', prop: 'i' },
        { label: '操作', type: 'operation' }
      ],
      tableData: [1, 2, 3].map(item => {
        return { 'a': 'CAC414288123' + item, 'aa': '统筹区' + item, 'b': '统筹区' + item, c: 'xxx', d: 'xxx', e: 'xxx', f: 'xxx', g: 'xxx', h: 'xxx', i: 'xxx', j: 'xxx' }
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
    handleAudit() { this.auditVisible = true },
    handleAuditAll() { this.auditVisible = true }
  }
}
</script>

<style scoped lang="scss"></style>
