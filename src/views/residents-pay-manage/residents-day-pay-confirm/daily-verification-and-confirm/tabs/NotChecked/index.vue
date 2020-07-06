<template>
  <section class="tab-component">
    <FormItems :items-datas="itemsDatas" :form-datas="formData">
      <el-button type="primary" @click="handleVerification">核查</el-button>
    </FormItems>
    <my-table-view style="height: calc(100% - 303px)!important;" :border="true" :columns="columns" :data="tableData">
      <template slot="operation" slot-scope="scope">
        <el-button type="text" @click="handleCheck(scope.row)">明细</el-button>
      </template>
    </my-table-view>
    <Pagination />
    <el-alert type="warning" style="height: auto;margin: 20px 0;" :closable="false">
      <p>提示：若核查时间较久，可以不用等待，关闭或离开当前页面进行其他工作，下次可以到该页面左下角查看执行情况。</p>
    </el-alert>
    <el-alert type="info" style="height: auto;margin: 20px 0;" :closable="false">
      <p>当前无结转正在进行，您可以进行年度结转。 </p>
      <p>您最近一次日结核查于2018-08-30 20:54:18结束，日结核查问题数据[0]人次，耗时5.123秒</p>
    </el-alert>
    <div>
      <el-button type="text">查看日志</el-button>
      <el-button type="text">启动刷新</el-button>
    </div>
    <Detail :show.sync="detailVisible" />
  </section>
</template>

<script>
import Detail from './detail'
export default {
  name: 'NotChecked',
  components: { Detail },
  mixins: [],
  props: {},
  data() {
    return {
      detailVisible: false,
      itemsDatas: [
        { label: '显示延迟扣费', prop: '显示延迟扣费1', type: 'select' }
      ],
      formData: {},
      columns: [
        { type: 'selection' },
        { label: '序号', type: 'index' },
        { label: '单位编号', prop: 'a' },
        { label: '统筹区', prop: 'b' },
        { label: '单位名称', prop: 'c' },
        { label: '台账年月', prop: 'd' },
        { label: '对应费款所属期', prop: 'e' },
        { label: '应缴类型', prop: 'e' },
        { label: '缴费对象', prop: 'e' },
        { label: '应缴人数', prop: 'e' },
        { label: '应缴金额（元）', prop: 'type' },
        { label: '操作', type: 'operation' }
      ],
      tableData: [1, 3, 2].map(item => {
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
    //  核查
    handleVerification() {},
    handleCheck() { this.detailVisible = true }
  }
}
</script>

<style scoped lang="scss">
</style>
