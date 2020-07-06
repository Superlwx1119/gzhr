<template>
  <!-- 居民缴费登记审核-->
  <div class="paymentRegisterAudit">
    <normal-layer :search-number="7">
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
        <span class="box-title">居民缴费登记列表</span>
        <div slot="title-btns" class="box-tools">
          <el-button type="danger" @click="handleDeleteAll">删除单据</el-button>
          <el-button type="primary" @click="handleAuditAll">批量审核</el-button>
        </div>
      </div>
      <template>
        <my-table-view :border="true" :columns="columns" :data="tableData">
          <template slot="operation" slot-scope="scope">
            <el-button type="text" class="delete" @click="handleDelete(scope.row)">删除</el-button>
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
import InsuranceArea from '@/components/Select/residents-pay-manage/InsuranceArea'
import PersonalInfo from '@/components/Select/fund-insurance-manage/PersonalInfo'
export default {
  name: 'PaymentRegisterAudit',
  components: {
    PersonalInfo,
    InsuranceArea,
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
        { label: '审核状态', prop: '审核状态1', type: 'select' },
        { label: '人员信息', prop: '人员信息1', type: 'custom' },
        { label: '户号', prop: '户号1', type: 'input' },
        { label: '缴费来源', prop: '缴费来源1', type: 'select' },
        { label: '经办时间', prop: '经办时间1', type: 'dateRange' },
        { label: '缴费单据号', prop: '缴费单据号1', type: 'input' }
      ],
      columns: [
        { type: 'selection' },
        { label: '序号', type: 'index' },
        { label: '单据号', prop: 'a' },
        { label: '乡镇/街道', prop: 'b' },
        { label: '村/社区', prop: 'c' },
        { label: '证件号码', prop: 'd' },
        { label: '姓名', prop: 'e' },
        { label: '缴费来源', prop: 'e' },
        { label: '缴费年度', prop: 'e' },
        { label: '缴费金额（元）', prop: 'e' },
        { label: '经办人', prop: 'e' },
        { label: '经办时间', prop: 'e' },
        { label: '操作', type: 'operation' }
      ],
      tableData: [1, 2, 3].map(item => {
        return { 'a': 'CAC414288123' + item, 'b': '统筹区' + item, c: 'xxx', d: 'xxx', e: 'xxx' }
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
    handleAuditAll() {},
    handleAudit() {},
    handleDeleteAll() {
      this.$msgConfirm('是否删除？').then(res => {
        this.$msgSuccess('删除成功！')
      }).catch(err => {
        this.$msgInfo(err)
      })
    },
    handleDelete() {
      this.$msgConfirm('是否删除？').then(res => {
        this.$msgSuccess('删除成功！')
      }).catch(err => {
        this.$msgInfo(err)
      })
    }
  }
}
</script>

<style scoped lang="scss"></style>
