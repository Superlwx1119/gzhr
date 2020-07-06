<template>
  <!--  灵活就业收入登账-->
  <div class="flexibleEmploymentTally">
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
        <span class="box-title">灵活就业收入列表</span>
        <div slot="title-btns" class="box-tools">
          <el-button type="primary" @click="handleAdd">新增</el-button>
          <el-button type="danger" @click="handleDeleteAll">批量删除</el-button>
          <el-button type="primary" @click="handleRegister">缴费登记</el-button>
        </div>
      </div>
      <template>
        <my-table-view :border="true" :columns="columns" :data="tableData">
          <template slot="operation" slot-scope="scope">
            <el-button type="text" class="delete" @click="handleDelete(scope.row)">删除</el-button>
          </template>
        </my-table-view>
        <Pagination />
      </template>
    </normal-layer>
  </div>
</template>

<script>
import pageHandle from '@/mixins/pageHandle'
import NormalLayer from '@/views/components/PageLayers/normalLayer'
import PersonalInfo from '@/components/Select/fund-insurance-manage/PersonalInfo'
import InsuranceArea from '@/components/Select/residents-pay-manage/InsuranceArea'

export default {
  name: 'FlexibleEmploymentTally',
  components: {
    InsuranceArea,
    NormalLayer,
    PersonalInfo
  },
  mixins: [pageHandle],
  props: {},
  data() {
    return {
      itemsDatas: [
        { label: '医保区划', prop: '医保区划1', type: 'custom' },
        { label: '人员信息', prop: '人员信息1', type: 'custom' },
        { label: '计算期间', prop: '计算期间1', type: 'dateRange' },
        { label: '费款期间', prop: '费款期间1', type: 'dateRange' },
        { label: '缴费分配方案', prop: '缴费分配方案1', type: 'select' },
        { label: '缴费来源', prop: '缴费来源1', type: 'select' },
        { label: '是否零缴费', prop: '是否零缴费1', type: 'select' }
      ],
      columns: [
        { type: 'selection' },
        { label: '序号', type: 'index' },
        { label: '证件号码', prop: 'a' },
        { label: '姓名', prop: 'b' },
        { label: '应缴金额（元）', prop: 'c' },
        { label: '实缴金额（元）', prop: 'd' },
        { label: '到账时间', prop: 'e' },
        { label: '操作', type: 'operation' }
      ],
      tableData: [1, 2, 3].map(item => {
        return { 'a': 'CAC414288123' + item, 'b': '统筹区' + item, c: 'xxx', d: 'xxx', e: 'xxx', type: '2' }
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
    handleAdd() {},
    handleDelete() {
      this.$msgConfirm('是否删除？').then(res => {
        this.$msgSuccess('删除成功！')
      }).catch(err => {
        this.$msgInfo(err)
      })
    },
    handleDeleteAll() {
      this.$msgConfirm('是否删除？').then(res => {
        this.$msgSuccess('删除成功！')
      }).catch(err => {
        this.$msgInfo(err)
      })
    },
    handleRegister() {}
  }
}
</script>

<style scoped lang="scss"></style>
