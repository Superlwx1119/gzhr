<!-- 单位零星应收核定 -->
<template>
  <div class="third-index unit-sporadic-approved">
    <section class="layer-tab">
      <el-tabs v-model="activeName" type="border-card">
        <el-tab-pane label="未试算" name="first">
          <Allocated :show-audit-query="true" :all-table-data="untrialAllTableData" />
        </el-tab-pane>
        <el-tab-pane label="已试算" name="second">
          <Allocated :show-audit-query="true" :all-table-data="trialAllTableData" />
        </el-tab-pane>
      </el-tabs>
    </section>
  </div>
</template>
<script>
import Allocated from './components/allocated'
export default {
  components: {
    Allocated
  },
  data() {
    return {
      activeName: 'first',
      untrialAllTableData: {
        leftTableTitle: '未试算',
        leftTableColumns: [
          { type: 'selection' },
          { type: 'index', label: '序号' },
          { label: '单位管理码', prop: 'a' },
          { label: '单位名称', prop: 'b' },
          { label: '单位类型', prop: 'c' },
          { label: '单位征缴类别', prop: 'd' },
          { label: '险种', prop: 'e' },
          { label: '最大计算期间', prop: 'f' },
          { label: '费用所属期', prop: 'g' },
          { label: '对接税务单位类型', prop: 'h' },
          { label: '有效人数', prop: 'i' },
          { label: '在职人数', prop: 'j' },
          { label: '退休人数', prop: 'k' },
          { label: '其他人数', prop: 'l' }
        ],
        leftTableData: [1, 2, 3, 4, 5, 6, 7, 8].map(item => {
          return {
            a: '1010001' + item,
            b: 'XXXX咨询中心' + item,
            c: '企业',
            d: '一般单位',
            e: '基本医疗',
            f: '201908',
            g: '201908',
            h: '非税务对接单位',
            i: '1200',
            j: '1000',
            k: '100',
            l: '100'
          }
        }),
        rightUnitTableColumns: [
          { type: 'index', label: '序号' },
          { label: '单位管理码', prop: 'aa' },
          { label: '单位名称', prop: 'bb' },
          { label: '费款所属期', prop: 'cc' },
          { label: '对应费款所属期', prop: 'dd' },
          { label: '险种', prop: 'ee' },
          { label: '应缴人数', prop: 'ff' },
          { label: '单位应缴基数', prop: 'gg' },
          { label: '单位应缴(元)', prop: 'hh' },
          { label: '单位划个账基数', prop: 'ii' },
          { label: '单位划个账(元)', prop: 'jj' },
          { label: '个人应缴基数', prop: 'kk' },
          { label: '个人应缴(元)', prop: 'll' },
          { label: '个人应缴划个账基数', prop: 'mm' },
          { label: '个人应缴划个账金额(元)', prop: 'nn' },
          { label: '单位应缴汇总(元)', prop: 'oo' },
          { label: '个人应缴汇总(元)', prop: 'pp' },
          { label: '应缴总金额(元)', prop: 'qq' }
        ],
        rightUnitTableData: [1, 2, 3].map(item => {
          return {
            aa: '1030120' + item,
            bb: 'XXXX公路总段' + item,
            cc: '201908',
            dd: '201908',
            ee: '基本医疗',
            ff: '1',
            gg: '3000',
            hh: '3000',
            ii: '0',
            jj: '0',
            kk: '0',
            ll: '0',
            mm: '0',
            nn: '0',
            oo: '3000',
            pp: '0',
            qq: '3000'
          }
        }),
        rightPersonalDetailsColumns: [
          { type: 'index', label: '序号' },
          { label: '单位管理码', prop: 'aa' },
          { label: '单位名称', prop: 'bb' },
          { label: '身份证号码', prop: 'cc' },
          { label: '姓名', prop: 'dd' },
          { label: '费款所属期', prop: 'ee' },
          { label: '对应费款所属期', prop: 'ff' },
          { label: '险种', prop: 'gg' },
          { label: '应缴人数', prop: 'hh' },
          { label: '单位应缴基数', prop: 'ii' },
          { label: '单位应缴(元)', prop: 'jj' },
          { label: '单位划个账基数', prop: 'kk' },
          { label: '单位划个账(元)', prop: 'll' },
          { label: '个人应缴基数', prop: 'mm' },
          { label: '个人应缴(元)', prop: 'nn' },
          { label: '个人应缴划个账基数', prop: 'oo' },
          { label: '个人应缴划个账金额(元)', prop: 'pp' },
          { label: '单位应缴汇总(元)', prop: 'qq' },
          { label: '个人应缴汇总(元)', prop: 'rr' },
          { label: '应缴总金额(元)', prop: 'ss' }
        ],
        rightPersonalDetailsData: [1, 2, 3].map(item => {
          return {
            aa: '1030120' + item,
            bb: 'XXXX公路总段' + item,
            cc: '632121YYYYMMDD0056',
            dd: '陈某某',
            ee: '201908',
            ff: '201908',
            gg: '基本医疗',
            hh: '1',
            ii: '3000',
            jj: '3000',
            kk: '0',
            ll: '0',
            mm: '0',
            nn: '0',
            oo: '0',
            pp: '0',
            qq: '3000',
            rr: '0',
            ss: '3000'
          }
        })
      },
      trialAllTableData: {
        leftTableTitle: '已试算',
        leftTableColumns: [
          { type: 'selection' },
          { type: 'index', label: '序号' },
          { label: '单位管理码', prop: 'a' },
          { label: '单位名称', prop: 'b' },
          { label: '单位类型', prop: 'c' },
          { label: '单位征缴类别', prop: 'd' },
          { label: '对接税务单位类型', prop: 'e' },
          { label: '应缴金额', prop: 'f' },
          { label: '经办人', prop: 'g' },
          { label: '经办时间', prop: 'h' }
        ],
        leftTableData: [1, 2, 3, 4, 5, 6, 7, 8].map(item => {
          return {
            a: '1030120' + item,
            b: 'XXXXX公路总段' + item,
            c: '事业单位' + item,
            d: '全额拨款' + item,
            e: '非税务对接单位' + item,
            f: '30000.00' + item,
            g: '管理员' + item,
            h: '2020-04-13' + item
          }
        }),
        rightUnitTableColumns: [
          { type: 'index', label: '序号' },
          { label: '单位管理码', prop: 'aa' },
          { label: '单位名称', prop: 'bb' },
          { label: '费款所属期', prop: 'cc' },
          { label: '对应费款所属期', prop: 'dd' },
          { label: '险种', prop: 'ee' },
          { label: '应缴人数', prop: 'ff' },
          { label: '单位应缴基数', prop: 'gg' },
          { label: '单位应缴(元)', prop: 'hh' },
          { label: '单位划个账基数', prop: 'ii' },
          { label: '单位划个账(元)', prop: 'jj' },
          { label: '个人应缴基数', prop: 'kk' },
          { label: '个人应缴(元)', prop: 'll' },
          { label: '个人应缴划个账基数', prop: 'mm' },
          { label: '个人应缴划个账金额(元)', prop: 'nn' },
          { label: '单位应缴汇总(元)', prop: 'oo' },
          { label: '个人应缴汇总(元)', prop: 'pp' },
          { label: '应缴总金额(元)', prop: 'qq' }
        ],
        rightUnitTableData: [1, 2, 3].map(item => {
          return {
            aa: '1030120' + item,
            bb: 'XXXX公路总段' + item,
            cc: '201908',
            dd: '201908',
            ee: '基本医疗',
            ff: '1',
            gg: '3000',
            hh: '3000',
            ii: '0',
            jj: '0',
            kk: '0',
            ll: '0',
            mm: '0',
            nn: '0',
            oo: '3000',
            pp: '0',
            qq: '3000'
          }
        }),
        rightPersonalDetailsColumns: [
          { type: 'index', label: '序号' },
          { label: '单位管理码', prop: 'aa' },
          { label: '单位名称', prop: 'bb' },
          { label: '身份证号码', prop: 'cc' },
          { label: '姓名', prop: 'dd' },
          { label: '费款所属期', prop: 'ee' },
          { label: '对应费款所属期', prop: 'ff' },
          { label: '险种', prop: 'gg' },
          { label: '应缴人数', prop: 'hh' },
          { label: '单位应缴基数', prop: 'ii' },
          { label: '单位应缴(元)', prop: 'jj' },
          { label: '单位划个账基数', prop: 'kk' },
          { label: '单位划个账(元)', prop: 'll' },
          { label: '个人应缴基数', prop: 'mm' },
          { label: '个人应缴(元)', prop: 'nn' },
          { label: '个人应缴划个账基数', prop: 'oo' },
          { label: '个人应缴划个账金额(元)', prop: 'pp' },
          { label: '单位应缴汇总(元)', prop: 'qq' },
          { label: '个人应缴汇总(元)', prop: 'rr' },
          { label: '应缴总金额(元)', prop: 'ss' }
        ],
        rightPersonalDetailsData: [1, 2, 3].map(item => {
          return {
            aa: '1030120' + item,
            bb: 'XXXX公路总段' + item,
            cc: '632121YYYYMMDD0056',
            dd: '陈某某',
            ee: '201908',
            ff: '201908',
            gg: '基本医疗',
            hh: '1',
            ii: '3000',
            jj: '3000',
            kk: '0',
            ll: '0',
            mm: '0',
            nn: '0',
            oo: '0',
            pp: '0',
            qq: '3000',
            rr: '0',
            ss: '3000'
          }
        })
      }
    }
  },
  watch: {
  },
  methods: {
  }
}
</script>
<style lang='scss' scoped>
</style>
