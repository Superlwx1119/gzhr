<template>
  <!-- 结算信息-->
  <section class="layer">
    <div class="box">
      <div class="box-header">
        <span class="box-title">结算信息</span>
      </div>
      <div class="box-body">
        <el-row :gutter="10">
          <el-col :span="8">
            <div class="info">
              <div class="info-header">总费用信息</div>
              <div class="info-body">
                <table class="table-data">
                  <tbody>
                    <tr><td>本次申报总费用</td><td>{{ infoData.a || 0 }}</td></tr>
                    <tr><td>个人自付总额</td><td>{{ infoData.b || 0 }}</td></tr>
                    <tr><td>历次大病合规费用累计</td><td>{{ infoData.c || 0 }}</td></tr>
                    <tr><td>历次大病已支付累计</td><td>{{ infoData.d || 0 }}</td></tr>
                    <tr><td>本次大病合规费用</td><td>{{ infoData.e || 0 }}</td></tr>
                    <tr><td>本次大病补偿合计</td><td>{{ infoData.f || 0 }}</td></tr>
                    <tr><td>补助后个人自付费用</td><td>{{ infoData.g || 0 }}</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </el-col>
          <el-col :span="16">
            <div class="info">
              <div class="info-header">补助基金分段明细</div>
              <div class="info-body">
                <my-table-view style="height: calc(100% - 120px)" :columns="columns" :data="info.list || []" />
                <Pagination />
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SettlementInfo',
  components: {},
  mixins: [],
  props: {
    info: { type: Object, default: () => { return {} } }
  },
  data() {
    return {
      columns: [
        { label: '序号', type: 'index' },
        { label: '基金款项', prop: 'a' },
        { label: '金额', prop: 'b' },
        { label: '支付类型', prop: 'c' },
        { label: '分类标志', prop: 'd' },
        { label: '补助比例', prop: 'e' }
      ],
      tableData: []
    }
  },
  computed: {
    infoData: function() {
      return this.info
    }
  },
  watch: {},
  created() {
  },
  mounted() {
  },
  methods: {}
}
</script>

<style scoped lang="scss">
  .info {
    height: 320px;
    .info-header {
      width: 100%;
      height: 40px;
      line-height: 40px;
      padding-left: 10px;
      font-size: 14px;
      color: #333333;
      background: #f5f7fa;
      border-top: 1px solid #E0E1E2;
      border-left: 1px solid #E0E1E2;
      border-right: 1px solid #E0E1E2;
    }
    .table-data tr>td:nth-child(2n-1) {
      width: 50%;
    }
    .info-body {
      height: calc(100% - 40px);
    }
  }
</style>
