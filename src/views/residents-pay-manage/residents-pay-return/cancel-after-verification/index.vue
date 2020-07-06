<template>
  <!--居民应缴核销-->
  <div class="cancelAfterVerification">
    <normal-layer :search-number="3">
      <template slot="search-header">
        <FormItems :items-datas="itemsDatas" :form-datas="queryForm">
          <template slot="人员信息1">
            <personal-info v-model="queryForm.人员信息1" />
          </template>
          <div style="text-align: right">
            <el-button @click="reset('queryForm')">重置</el-button>
            <el-button type="primary" @click="search('queryForm')">查询</el-button>
          </div>
        </FormItems>
      </template>
      <div slot="table-title" class="box-header">
        <span class="box-title">居民应缴核销列表</span>
      </div>
      <template>
        <FormItems :items-datas="returnItems" :form-datas="returnForm">
          <el-button type="primary" @click="handleVerificationAll">批量核销</el-button>
        </FormItems>
        <my-table-view style="height: calc(100% - 83px)!important;" :border="true" :columns="columns" :data="tableData">
          <template slot="operation" slot-scope="scope">
            <el-button type="text" @click="handleVerification(scope.row)">核销</el-button>
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
import FormItems from '@/views/components/PageLayers/form-items'
import PersonalInfo from '@/components/Select/fund-insurance-manage/PersonalInfo'
export default {
  name: 'CancelAfterVerification',
  components: {
    PersonalInfo,
    NormalLayer,
    FormItems
  },
  mixins: [pageHandle],
  props: {},
  data() {
    return {
      itemsDatas: [
        { label: '人员信息', prop: '人员信息1', type: 'custom' },
        { label: '年度', prop: '年度1', type: 'dateMoon' },
        { label: '户号', prop: '户号1', type: 'input' }
      ],
      returnItems: [
        { label: '核销原因', prop: '核销原因1', type: 'input' }
      ],
      returnForm: {},
      columns: [
        { type: 'selection' },
        { label: '序号', type: 'index' },
        { label: '人员姓名', prop: 'a' },
        { label: '身份证号码', prop: 'b' },
        { label: '参保身份', prop: 'c' },
        { label: '缴费年度', prop: 'd' },
        { label: '缴费金额（元）', prop: 'e' },
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
    handleVerification() {},
    handleVerificationAll() {}
  }
}
</script>

<style scoped lang="scss"></style>
