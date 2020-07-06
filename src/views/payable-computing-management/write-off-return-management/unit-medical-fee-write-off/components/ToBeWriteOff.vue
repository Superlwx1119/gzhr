<template>
  <normal-layer :search-number="5">
    <template slot="search-header">
      <FormItems :items-datas="itemsDatas" :form-datas="queryForm">
        <template slot="应缴类型1">
          <payable-type v-model="queryForm.应缴类型1" />
        </template>
        <template slot="选择单位1">
          <select-units v-model="queryForm.选择单位1" />
        </template>
        <template slot="选择险种1">
          <choose-insurance v-model="queryForm.选择险种1" />
        </template>
        <template slot="缴费状态1">
          <payment-status v-model="queryForm.缴费状态1" />
        </template>
        <div style="text-align: right">
          <el-button @click="reset('queryForm')">重置</el-button>
          <el-button type="primary" @click="search('queryForm')">查询</el-button>
        </div>
      </FormItems>
    </template>
    <slot slot="table-title" name="tools" />
    <template>
      <my-table-view :border="true" :columns="columns" :data="tableData" @update:multipleSelection="selectAll" />
      <Pagination />
    </template>
  </normal-layer>
</template>

<script>
import NormalLayer from '@/views/components/PageLayers/normalLayer'
import pageHandle from '@/mixins/pageHandle'
import FormItems from '@/views/components/PageLayers/form-items'
import SelectUnits from '@/components/Select/payable-calculation-management/SelectUnits'
import PayableType from '@/components/Select/payable-calculation-management/PayableType'
import ChooseInsurance from '@/components/Select/payable-calculation-management/ChooseInsurance'
import PaymentStatus from '@/components/Select/payable-calculation-management/PaymentStatus'
export default {
  name: 'Business',
  components: {
    PaymentStatus,
    NormalLayer,
    FormItems,
    SelectUnits,
    PayableType,
    ChooseInsurance
  },
  mixins: [pageHandle],
  props: {
    showAuditQuery: { type: Boolean, default: false }
  },
  data() {
    return {
      itemsDatas: [
        { label: '应缴类型', prop: '应缴类型1', type: 'custom' },
        { label: '选择单位', prop: '选择单位1', type: 'custom' },
        { label: '费用所属期', prop: '费用所属期1', type: 'dateRange' },
        { label: '选择险种', prop: '选择险种1', type: 'custom' },
        { label: '缴费状态', prop: '缴费状态1', type: 'custom' }
      ],
      columns: [
        { label: '序号', type: 'index' },
        { type: 'selection' },
        { label: '单位编码', prop: 'dwbm' },
        { label: '单位名称', prop: 'dwmc' },
        { label: '费款所属期', prop: 'fkssq' },
        { label: '对应费款所属期', prop: 'dyfkssq' },
        { label: '险种名称', prop: 'xzmc' },
        { label: '应缴类型', prop: 'yjlx' },
        { label: '单位应缴金额(元)', prop: 'dwyjje' },
        { label: '个人应缴金额(元)', prop: 'gryjje' },
        { label: '应缴总金额(元)', prop: 'yjzje' }
      ],
      tableData: [{
        dwbm: '1234', dwmc: '创智和宇', fkssq: '2020-06-23', dyfkssq: '2020-06-23', xzmc: '大额互助',
        yjlx: '正常应缴', dwyjje: '5000', gryjje: '5000', yjzje: '5000'
      }]
    }
  },
  computed: {
  },
  watch: {},
  created() {
  },
  mounted() {
  },
  methods: {
    //  全选
    selectAll(val) {
      console.log(val)
      this.$emit('select', val)
    },
    cancel(row) {
      this.$msgConfirm('是否取消拨付？').then(res => {
        this.$msgSuccess('取消成功')
      }).catch(err => {
        this.$msgInfo(err)
      })
    }
  }
}
</script>

<style scoped lang="scss"></style>
