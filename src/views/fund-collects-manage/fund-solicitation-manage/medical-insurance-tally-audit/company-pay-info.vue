<template>
  <section class="layer" :style="{height: `calc(100% - 113px)`}">
    <div class="box">
      <div class="box-header">
        <span class="box-title">单位缴费明细</span>
      </div>
      <div class="box-body">
        <expand-list :is-index="true" :is-border="true" :columns="columns" :operates="operates" :data="tableData" />
        <Pagination />
      </div>
    </div>
    <Drawer :show.sync="drawer">
      <div class="box">
        <div class="box-header">
          <span class="box-title">个人缴费明细</span>
        </div>
        <div class="box-body">
          <expand-list :is-index="true" :is-border="true" :columns="drawerColumns" :data="drawerTableData" />
          <Pagination />
        </div>
      </div>
    </Drawer>
  </section>
</template>

<script>
import Drawer from '@/components/Drawer/Drawer'
export default {
  name: 'CompanyPayInfo',
  components: {
    Drawer
  },
  mixins: [],
  props: {},
  data() {
    return {
      drawer: false,
      columns: [
        { label: '单位管理码', prop: '单位管理码' },
        { label: '单位名称', prop: '单位名称' },
        { label: '费款所属期', prop: '费款所属期' },
        { label: '险种', prop: '险种' },
        { label: '应缴金额（元）', prop: '应缴金额' },
        { label: '已实缴金额（元）', prop: '已实缴金额' },
        { label: '到账标志', prop: '到账标志' },
        { label: '到账时间', prop: '到账时间' }
      ],
      operates: {
        list: [
          { show: true, label: '明细', type: 'text', method: () => { this.drawer = true } }
        ]
      },
      tableData: [
        { '单位管理码': '单位管理码', '单位名称': '单位名称', '费款所属期': '费款所属期', '险种': '险种', '应缴金额': '应缴金额', '已实缴金额': '已实缴金额', '到账标志': '到账标志', '到账时间': '到账时间' }
      ],
      drawerColumns: [
        { label: '单位管理码', prop: '单位管理码' },
        { label: '单位名称', prop: '单位名称' },
        { label: '姓名', prop: '姓名' },
        { label: '身份证号码', prop: '身份证号码' },
        { label: '费款所属期', prop: '费款所属期' },
        { label: '险种', prop: '险种' },
        { label: '应缴金额（元）', prop: '应缴金额' },
        { label: '已实缴金额（元）', prop: '已实缴金额' },
        { label: '到账标志', prop: '到账标志' },
        { label: '到账时间', prop: '到账时间' }
      ],
      drawerTableData: [
        { '单位管理码': '单位管理码', '单位名称': '单位名称', '姓名': '姓名', '身份证号码': '身份证号码', '费款所属期': '费款所属期', '险种': '险种', '应缴金额': '应缴金额', '已实缴金额': '已实缴金额', '到账标志': '到账标志', '到账时间': '到账时间' }
      ]
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

<style scoped lang="scss"></style>
