<!-- 灵活就业零星应收核定 -->
<template>
  <div class="third-index employment-sporadic-approved">
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
          { label: '人员编号', prop: 'a' },
          { label: '姓名', prop: 'b' },
          { label: '证件号码', prop: 'c' },
          { label: '性别', prop: 'd' },
          { label: '参保身份', prop: 'e' },
          { label: '个人工资', prop: 'f' },
          { label: '险种', prop: 'g' },
          { label: '最大计算期间', prop: 'h' },
          { label: '未计算开始期间', prop: 'i' },
          { label: '未计算结束期间', prop: 'j' }
        ],
        leftTableData: [1, 2, 3, 4, 5, 6, 7, 8].map(item => {
          return {
            a: '1' + item,
            b: '陈某某' + item,
            c: '632121YYYYMMDD0056' + item,
            d: '男' + item,
            e: '在职' + item,
            f: '3000.00' + item,
            g: '基本医疗' + item,
            h: '201901' + item,
            i: '201901' + item,
            j: '201901' + item
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
          { label: '个人应缴划个账(元)', prop: 'nn' },
          { label: '单位应缴汇总(元)', prop: 'oo' },
          { label: '个人应缴汇总(元)', prop: 'pp' },
          { label: '应缴总金额(元)', prop: 'qq' }
        ],
        rightUnitTableData: [1, 2, 3].map(item => {
          return {
            aa: '1030120' + item,
            bb: 'XXXX灵活就业' + item,
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
          { label: '个人应缴划个账(元)', prop: 'pp' },
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
          { label: '人员编号', prop: 'a' },
          { label: '姓名', prop: 'b' },
          { label: '证件号码', prop: 'c' },
          { label: '性别', prop: 'd' },
          { label: '参保身份', prop: 'e' },
          { label: '个人工资', prop: 'f' }
        ],
        leftTableData: [1, 2, 3, 4, 5, 6, 7, 8].map(item => {
          return {
            a: '1' + item,
            b: 'zz某某' + item,
            c: '632121YYYYMMDD0056' + item,
            d: '男' + item,
            e: '在职' + item,
            f: '30000.00' + item
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
          { label: '个人应缴划个账(元)', prop: 'nn' },
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
          { label: '个人应缴划个账(元)', prop: 'pp' },
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
