<template>
  <section class="tab-component">
    <div class="action-btn-group">
      <el-button type="primary">置为有效</el-button>
    </div>
    <my-table-view style="height: calc(100% - 83px)!important;" :border="true" :columns="columns" :data="tableData" />
    <Pagination />
  </section>
</template>

<script>
export default {
  name: 'ProblemData',
  components: {},
  mixins: [],
  props: {},
  data() {
    return {
      columns: [
        { type: 'selection' },
        { label: '序号', type: 'index' },
        { label: '单位编码', prop: 'a' },
        { label: '单位名称', prop: 'b' },
        { label: '统筹区', prop: 'c' },
        { label: '证件号码', prop: 'd' },
        { label: '姓名', prop: 'e' },
        { label: '人员类别', prop: 'e' },
        { label: '免费标识', prop: 'e' },
        { label: '台账年月', prop: 'e' },
        { label: '对应费款所属期', prop: 'e' },
        { label: '应收金额（元）', prop: 'e' },
        { label: '问题类型', prop: 'e' }
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
  methods: {}
}
</script>

<style scoped>

</style>
