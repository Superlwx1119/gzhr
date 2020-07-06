<template>
  <section class="tab-component">
    <FormItems :items-datas="itemsDatas" :form-datas="formData">
      <el-button type="primary">确认</el-button>
      <el-button type="danger" @click="handleReturnAll">回退</el-button>
    </FormItems>
    <my-table-view style="height: calc(100% - 83px)!important;" :border="true" :columns="columns" :data="tableData">
      <template slot="operation" slot-scope="scope">
        <el-button type="text" class="delete" @click="handleReturn(scope.row)">回退</el-button>
        <el-button type="text" @click="handleCheck(scope.row)">明细</el-button>
      </template>
    </my-table-view>
    <Pagination />
    <Detail :show.sync="detailVisible" />
  </section>
</template>

<script>
import Detail from './detail'
export default {
  name: 'HaveChecked',
  components: { Detail },
  mixins: [],
  props: {},
  data() {
    return {
      detailVisible: false,
      itemsDatas: [
        { label: '发送方式', prop: '发送方式1', type: 'select' }
      ],
      formData: {},
      columns: [
        { type: 'selection' },
        { label: '序号', type: 'index' },
        { label: '核定批号', prop: 'a' },
        { label: '单位编码', prop: 'b' },
        { label: '统筹区', prop: 'c' },
        { label: '单位类型', prop: 'd' },
        { label: '单位名称', prop: 'e' },
        { label: '台账年月', prop: 'e' },
        { label: '对应费款所属期', prop: 'e' },
        { label: '应缴类型', prop: 'e' },
        { label: '缴费对象', prop: 'e' },
        { label: '状态', prop: 'e' },
        { label: '无效人数', prop: 'e' },
        { label: '有效人数', prop: 'e' },
        { label: '应缴金额（元）', prop: 'e' },
        { label: '日结时间', prop: 'e' },
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
    handleCheck() { this.detailVisible = true },
    //  回退
    handleReturnAll() {
      this.$msgConfirm('是否回退？').then(res => {
        this.$msgSuccess('回退成功！')
      }).catch(err => {
        this.$msgInfo(err)
      })
    },
    handleReturn() {
      this.$msgConfirm('是否回退？').then(res => {
        this.$msgSuccess('回退成功！')
      }).catch(err => {
        this.$msgInfo(err)
      })
    }
  }
}
</script>

<style scoped>

</style>
