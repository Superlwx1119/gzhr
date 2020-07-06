<!-- 参保信息详情 -->
<template>
  <normal-layer
    :search-number="itemsDatas.length"
    title-name="缴费信息"
  >
    <template slot="search-header">
      <form-items :items-datas="itemsDatas" :form-datas="queryForm">
        <el-button @click="reset">重置</el-button>
        <el-button type="primary" @click="search">查询</el-button>
      </form-items>
    </template>

    <section>
      <!-- <List height="100%" :is-index="true" :is-border="true" :columns="Columns" :data="tableData" :show-summary="true" /> -->
      <el-table
        :data="tableData"
        border
        show-summary
        :summary-method="getSum"
        style="width: 100%"
      >
        <el-table-column
          prop="id"
          type="index"
          label="序号"
          width="50"
          align="center"
        />
        <el-table-column
          prop="insuranceType"
          label="险种类型"
          align="center"
        />
        <el-table-column
          prop="feePeriod1"
          label="费款所属期"
          align="center"
        />
        <el-table-column
          prop="feePeriod2"
          label="对应费款所属期"
          align="center"
        />
        <el-table-column
          prop="payType"
          label="应缴类型"
          align="center"
        />
        <el-table-column
          prop="payUnit"
          label="单位应缴金额(元)"
          align="center"
        />
        <el-table-column
          prop="unitInto"
          label="单位划入(元)"
          align="center"
        />
        <el-table-column
          prop="personalPay"
          label="个人应缴金额(元)"
          align="center"
        />
        <el-table-column
          prop="personalInto"
          label="个人划入(元)"
          align="center"
        />
        <el-table-column
          prop="account"
          label="总计应缴(元)"
          align="center"
        />
        <el-table-column
          prop="arriveSign"
          label="到账标志"
          align="center"
        />
        <el-table-column
          prop="arriveDate"
          label="到账日期"
          align="center"
        />
      </el-table>

    </section>

  </normal-layer>
</template>

<script>
import NormalLayer from '@/views/components/PageLayers/normalLayer'
import FormItems from '@/views/components/PageLayers/form-items'
import moment from 'moment'
import PageHandle from '@/mixins/pageHandle'
export default {
  components: {
    NormalLayer,
    FormItems
  },
  mixins: [PageHandle],
  props: {
  },
  data() {
    return {
      loading: false,
      tableData: [{
        arriveSign: '1',
        insuranceType: '1',
        feePeriod1: '20201',
        feePeriod2: '20201',
        payType: '11',
        payUnit: 1,
        unitInto: 2,
        personalPay: 3,
        personalInto: 4,
        account: 5,
        arriveDate: '---'
      }],
      // Columns: [
      //   {
      //     prop: 'name',
      //     label: '姓名',
      //     align: 'center'
      //   },
      //   {
      //     prop: 'insuranceType',
      //     label: '险种类型',
      //     align: 'center'
      //   },
      //   {
      //     prop: 'feePeriod1',
      //     label: '费款所属期',
      //     align: 'center',
      //     overflow: true
      //   },
      //   {
      //     prop: 'feePeriod2',
      //     label: '对应费款所属期',
      //     align: 'center'
      //   },
      //   {
      //     prop: 'payType',
      //     label: '应缴类型',
      //     align: 'center'
      //   },
      //   {
      //     prop: 'payUnit',
      //     label: '单位应缴金额(元)',
      //     align: 'right'
      //   },
      //   {
      //     prop: 'unitInto',
      //     label: '单位划入(元)',
      //     align: 'right'
      //   },
      //   {
      //     prop: 'personalPay',
      //     label: '个人应缴金额(元)',
      //     align: 'right'
      //   },
      //   {
      //     prop: 'personalInto',
      //     label: '个人划入(元)',
      //     align: 'center'
      //   },
      //   {
      //     prop: 'account',
      //     label: '总计应缴(元)',
      //     align: 'right'
      //   },
      //   {
      //     prop: 'sign',
      //     label: '到账标志',
      //     align: 'center'
      //   },
      //   {
      //     prop: 'arriveDate',
      //     label: '到账日期',
      //     align: 'center'
      //   }
      // ],
      itemsDatas: [
        { label: '开始费款所属期', prop: 'dateRange', type: 'dateRange' },
        { label: '险种类型', prop: 'xxx', type: 'select' },
        { label: '缴费状态', prop: 'xxx', type: 'select' },
        { label: '应缴类型', prop: 'xxx', type: 'select' }
      ],
      queryForm: {
        xxx: '',
        dateRange: [
          moment().startOf('month').format('YYYY-MM-DD'),
          moment().endOf('month').format('YYYY-MM-DD')
        ]
      }

    }
  },
  methods: {
    getSum(param) {
      const { columns, data } = param
      const sums = []
      console.log(columns, data,)
      columns.forEach((column, index) => {
        if (index === 0) {
          sums[index] = '合计'
          return
        }
        // calcProp 为需要计算的列的prop值的集合
        const calcProp = ['payUnit', 'unitInto', 'personalPay', 'personalInto', 'account']
        if (calcProp.includes(column.property)) {
          // 将每列的所有数据数字化处理成为一个数组
          const values = data.map(item => Number(item[column.property]))
          // 当前列的所有数据全是数字类型时，从左到右依次累加处理
          sums[index] = values.reduce((prev, curr) => {
            const value = Number(curr)
            if (!isNaN(value)) {
              return prev + curr
            } else {
              return prev
            }
          }, 0)
        }
      })
      return sums
    }
  }
}
</script>

<style scoped lang="scss">

</style>
