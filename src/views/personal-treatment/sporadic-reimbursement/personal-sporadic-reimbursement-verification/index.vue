<template>
  <div class="personalSporadicReimbursementVerification">
    <normal-layer :search-number="2">
      <template slot="search-header">
        <FormItems :items-datas="itemsDatas" :form-datas="queryForm">
          <template slot="医疗机构1">
            <medical-institution v-model="queryForm.医疗机构1" />
          </template>
          <template slot="关键字1">
            <keyword v-model="queryForm.关键字1" />
          </template>
          <div style="text-align: right">
            <el-button @click="reset('queryForm')">重置</el-button>
            <el-button type="primary" @click="search('queryForm')">查询</el-button>
          </div>
        </FormItems>
      </template>
      <div slot="table-title" class="box-header">
        <span class="box-title">个人零星报销列表</span>
      </div>
      <template>
        <my-table-view :border="true" :columns="columns" :data="tableData">
          <template slot="operation" slot-scope="scope">
            <el-button type="text" @click="verification(scope.row)">核查</el-button>
          </template>
        </my-table-view>
        <Pagination />
      </template>
    </normal-layer>
    <verification :show.sync="visible" />
  </div>
</template>

<script>
import pageHandle from '@/mixins/pageHandle'
import NormalLayer from '@/views/components/PageLayers/normalLayer'
import FormItems from '@/views/components/PageLayers/form-items'
import MedicalInstitution from '@/components/Select/MedicalInstitution'
import Keyword from '@/components/Select/personal-sporadic/Keyword'
import verification from './verification'
export default {
  name: 'PersonalSporadicReimbursementVerification',
  components: {
    Keyword,
    MedicalInstitution,
    NormalLayer,
    FormItems,
    verification
  },
  mixins: [pageHandle],
  props: {},
  data() {
    return {
      visible: false,
      itemsDatas: [
        { label: '医疗机构', prop: '医疗机构1', type: 'custom' },
        { label: '关键字', prop: '关键字1', type: 'custom' }
      ],
      columns: [
        { label: '序号', type: 'index' },
        { label: '受理号', prop: 'no' },
        { label: '姓名', prop: 'name' },
        { label: '证件类型', prop: 'cardType' },
        { label: '证件号码', prop: 'cardNo' },
        { label: '住院(门诊)号', prop: 'a' },
        { label: '零报方式', prop: 'level' },
        { label: '医疗类别', prop: 'year' },
        { label: '待遇类型', prop: 'institutions' },
        { label: '医疗机构名称', prop: 'package' },
        { label: '医疗机构编码', prop: 'code' },
        { label: '诊断疾病', prop: 'dicreb' },
        { label: '基金先支付', prop: 'pay' },
        { label: '就诊日期', prop: 'beginDate' },
        { label: '结束日期', prop: 'endDate' },
        { label: '备注', prop: 'remark' },
        { label: '总金额(元)', prop: 'price' },
        { label: '单据数(张)', prop: 'amount' },
        { label: '操作', type: 'operation' }
      ],
      tableData: [1, 2, 3].map(item => {
        return {
          no: '' + item,
          name: 'xxx',
          cardType: '身份证',
          cardNo: '13512341234',
          a: '13512341234',
          level: '无',
          year: '2020',
          institutions: '体检中心A',
          package: '体检套餐A',
          code: '000129',
          dicreb: '高血压',
          pay: '5000',
          beginDate: '2020-02-02',
          endDate: '2020-02-02',
          remark: 'xxxx',
          price: '6000',
          amount: '2'
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
    verification() {
      this.visible = true
    }
  }
}
</script>

<style scoped lang="scss"></style>
