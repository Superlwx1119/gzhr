<template>
  <!--  体检人员申请-->
  <div class="peopleApply">
    <normal-layer :search-number="3">
      <template slot="search-header">
        <FormItems :items-datas="itemsDatas" :form-datas="queryForm">
          <template slot="cardType">
            <card-type v-model="queryForm.cardType" />
          </template>
          <div style="text-align: right">
            <el-button @click="reset('queryForm')">重置</el-button>
            <el-button type="primary" @click="search('queryForm')">查询</el-button>
          </div>
        </FormItems>
      </template>
      <div slot="table-title" class="box-header">
        <span class="box-title">体检单位列表</span>
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
import CardType from '@/components/Select/CardType'
export default {
  name: 'PeopleApplyAudit',
  components: {
    NormalLayer,
    FormItems,
    CardType
  },
  mixins: [pageHandle],
  props: {},
  data() {
    return {
      queryForm: {},
      itemsDatas: [
        { label: '体检年度', prop: '体检年度1', type: 'dateYear' },
        { label: '证件类型', prop: 'cardType', type: 'custom' },
        { label: '证件号码', prop: 'cardNo', type: 'input' }
      ],
      columns: [
        { label: '序号', type: 'index' },
        { label: '审核状态', prop: 'status' },
        { label: '姓名', prop: 'name' },
        { label: '性别', prop: 'sex' },
        { label: '身份证号', prop: 'cardNo' },
        { label: '出生日期', prop: 'birth' },
        { label: '公务员级别', prop: 'level' },
        { label: '体检年度', prop: 'year' },
        { label: '体检机构', prop: 'institutions' },
        { label: '体检套餐', prop: 'package' },
        { label: '体检开始日期', prop: 'beginDate' },
        { label: '体检结束日期', prop: 'endDate' },
        { label: '申请原因', prop: 'reason' },
        { label: '电话', prop: 'mobile' },
        { label: '所属单位', prop: 'company' },
        { label: '居住地址', prop: 'address' },
        { label: '经办人', prop: 'people' },
        { label: '经办时间', prop: 'date' }
      ],
      tableData: [1, 2, 3].map(item => {
        return {
          status: '未审核',
          name: 'xxx',
          sex: '男',
          cardNo: '13512341234',
          mobile: '13512341234',
          level: '无',
          year: '2020',
          institutions: '体检中心A',
          package: '体检套餐A',
          reason: '开心',
          company: '阿里巴巴',
          address: '别问',
          people: '夏尔',
          birth: '2020-02-02',
          beginDate: '2020-02-02',
          endDate: '2020-02-02',
          date: '2020-02-02'
        }
      }),
      editForm: {}
    }
  },
  computed: {},
  watch: {},
  created() {
  },
  mounted() {
  },
  methods: {
  }
}
</script>

<style scoped lang="scss"></style>
