<template>
  <!--  居民缴费核定-->
  <div class="payVerification">
    <normal-layer :search-number="2">
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
      <div slot="table-title" class="box-header handle">
        <span class="box-title">居民缴费核定列表</span>
        <div slot="title-btns" class="box-tools">
          <el-button type="primary" @click="calculate">计算</el-button>
        </div>
      </div>
      <template>
        <my-table-view :border="true" :columns="columns" :data="tableData" />
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
  name: 'PayVerification',
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
        { label: '年度', prop: '年度1', type: 'dateYear' }
      ],
      columns: [
        { type: 'selection' },
        { label: '序号', type: 'index' },
        { label: '身份证号码', prop: 'cardNo' },
        { label: '姓名', prop: 'name' },
        { label: '参保身份', prop: 'identity' },
        { label: '缴费年度', prop: 'year' },
        { label: '应缴金额', prop: 'price' }
      ],
      tableData: []
    }
  },
  computed: {},
  watch: {},
  created() {
  },
  mounted() {
  },
  methods: {
    search() {
      this.tableData = [1, 2, 3].map(item => {
        return {
          cardNo: '13512341234' + item,
          name: 'xxx',
          identity: '未知',
          year: '2020',
          price: '5692'
        }
      })
    },
    calculate() {
      this.$msgSuccess('计算成功！')
      this.tableData = []
    }
  }
}
</script>

<style scoped lang="scss"></style>
