<template>
  <!--  个人就诊信息查询-->
  <div class="personal-clinic-query">
    <el-row :gutter="10" class="tab-body">
      <el-col :md="10" :lg="8" :xl="6" class="tab-body-left">
        <el-form ref="queryForm" label-width="105px">
          <left-search-table :search-height="'150px'" :show-more-btn="true">
            <el-form-item label="险种" prop="险种1">
              <insurance-type v-model="queryForm.险种1" />
            </el-form-item>
            <el-form-item label="结算类型" prop="结算类型1">
              <settlement-type v-model="queryForm.结算类型1" />
            </el-form-item>
            <template slot="more">
              <el-form-item label="证件类型" prop="证件类型1">
                <card-type v-model="queryForm.证件类型1" />
              </el-form-item>
              <el-form-item label="证件号码" prop="证件号码1">
                <el-input v-model="queryForm.证件号码1" placeholder="请输入" />
              </el-form-item>
              <el-form-item label="时间类型" prop="时间类型1">
                <el-select v-model="queryForm.时间类型1" style="width: 100%;" placeholder="请选择">
                  <el-option label="结算时间" value="1" />
                  <el-option label="住院时间" value="2" />
                </el-select>
              </el-form-item>
              <el-form-item label="时间区间" prop="时间区间1">
                <el-date-picker v-model="queryForm.时间区间1" style="width: 100%" type="daterange" start-placeholder="选择时间" end-placeholder="选择时间" />
              </el-form-item>
              <el-form-item label="在院状态" prop="在院状态1">
                <el-select v-model="queryForm.在院状态1" style="width: 100%;" placeholder="请选择">
                  <el-option label="在院" value="1" />
                  <el-option label="出院" value="2" />
                </el-select>
              </el-form-item>
              <el-form-item label="医疗类别" prop="医疗类别1">
                <medical-category v-model="queryForm.医疗类别1" />
              </el-form-item>
              <el-form-item label="医疗机构" prop="医疗机构1">
                <medical-institution v-model="queryForm.医疗机构1" />
              </el-form-item>
            </template>
            <template slot="btn">
              <el-button @reset="reset('queryForm')">重置</el-button>
              <el-button type="primary" @click="search">查询</el-button>
            </template>
            <div slot="list" class="box">
              <div class="box-header handle">
                <span class="box-title">个人就诊信息</span>
              </div>
              <div class="box-body">
                <my-table-view :border="true" :max-cloumns="4" :first-highlight="true" :highlight-current-row="true" :columns="columns | filterColumns(4)" :data="tableData" @rowClick="rowClick" />
                <Pagination layout="total,prev, pager, next,jumper" />
              </div>
            </div>
          </left-search-table>
        </el-form>
      </el-col>
      <el-col :md="14" :lg="16" :xl="18" class="tab-body-right">
        <div class="box">
          <div class="box-body" style="height: 100%">
            <RightDetailInfo :title="'个人就诊信息详情'" :options="columns.slice(2)" :list-data="currDetail" />
            <section class="layer" style="height: calc(100% - 540px)">
              <div class="layer-tab">
                <el-tabs v-model="activeName" type="card">
                  <el-tab-pane label="费用明细" name="first">
                    <div class="box">
                      <div class="box-body">
                        <my-table-view :border="true" :max-cloumns="7" :columns="detailColumns" :data="detailData" />
                        <Pagination />
                      </div>
                    </div>
                  </el-tab-pane>
                  <el-tab-pane label="结算单" name="second">
                    <div class="box">
                      <div class="box-body" style="overflow-y: scroll;">
                        <div style="height: auto;">123</div>
                        <div style="height: auto;">123</div>
                        <div style="height: auto;">123</div>
                        <div style="height: auto;">123</div>
                        <div style="height: auto;">123</div>
                        <div style="height: auto;">123</div>
                        <div style="height: auto;">123</div>
                        <div style="height: auto;">123</div>
                        <div style="height: auto;">123</div>
                        <div style="height: auto;">123</div>
                        <div style="height: auto;">123</div>
                        <div style="height: auto;">123</div>
                        <div style="height: auto;">123</div>
                        <div style="height: auto;">123</div>
                        <div style="height: auto;">123</div>
                        <div style="height: auto;">123</div>
                        <div style="height: auto;">123</div>
                        <div style="height: auto;">123</div>
                        <div style="height: auto;">123</div>
                        <div style="height: auto;">123</div>
                        <div style="height: auto;">123</div>
                        <div style="height: auto;">123</div>
                        <div style="height: auto;">123</div>
                        <div style="height: auto;">123</div>
                        <div style="height: auto;">123</div>
                        <div style="height: auto;">123</div>
                        <div style="height: auto;">123</div>
                        <div style="height: auto;">123</div>
                        <div style="height: auto;">123</div>
                        <div style="height: auto;">123</div>
                        <div style="height: auto;">123</div>
                        <div style="height: auto;">123</div>
                        <div style="height: auto;">123</div>
                        <div style="height: auto;">123</div>
                      </div>
                    </div>
                  </el-tab-pane>
                  <el-tab-pane label="病案首页" name="third" />
                  <el-tab-pane label="电子病历" name="fourth" />
                </el-tabs>
              </div>
            </section>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import LeftSearchTable from '@/components/SearchList/LeftSearchTable'
import pageHandle from '@/mixins/pageHandle'
import InsuranceType from '@/components/Select/InsuranceType'
import SettlementType from '@/components/Select/SettlementType'
import CardType from '@/components/Select/CardType'
import MedicalInstitution from '@/components/Select/MedicalInstitution'
import MedicalCategory from '@/components/Select/MedicalCategory'
import columns from '../columns'
export default {
  name: 'PersonalClinicQuery',
  components: { LeftSearchTable, MedicalCategory, MedicalInstitution, CardType, SettlementType, InsuranceType },
  mixins: [pageHandle],
  props: {},
  data() {
    return {
      activeName: 'first',
      columns: columns,
      tableData: [1, 2, 3, 4, 5, 6, 7, 8].map(item => {
        return {
          a: 'JG00' + item, b: '中心医院', c: '甲等', d: '一般人员', e: '36', f: '5000', g: '4000',
          h: '3000', i: '1200', j: '1000', k: '100', l: '100', m: '2020-02-02', n: '2020-02-02', o: '周杰伦',
          p: '2020-02-02', q: 'xxx', r: 'xxx', s: 'xxx', t: 'xxx', u: 'xxx', v: 'xxx', w: 'xxx', x: 'xxx', y: 'xxx', z: 'xxx', aa: 'xxx',
          bb: 'xxx', cc: 'xxx', dd: 'xxx', ee: 'xxx', ff: 'xxx', gg: 'xxx', hh: 'xxx', ii: 'xxx', jj: 'xxx', kk: 'xxx', ll: 'xxx', mm: 'xxx',
          nn: 'xxx', oo: 'xxx', pp: 'xxx', qq: 'xxx', rr: 'xxx', ss: 'xxx'
        }
      }),
      currDetail: {},
      detailColumns: [
        { type: 'index', label: '序号' },
        { label: '医保目录名称', prop: 'aa' },
        { label: '医药机构目录名称', prop: 'bb' },
        { label: '目录类别', prop: 'cc' },
        { label: '费用发生日期', prop: 'dd' },
        { label: '规格', prop: 'ee' },
        { label: '剂型', prop: 'ff' },
        { label: '单价(元)', prop: 'gg' },
        { label: '数量', prop: 'hh' },
        { label: '费用总额(元)', prop: 'ii' },
        { label: '自付比例', prop: 'jj' }
      ],
      detailData: [1, 2, 3].map(item => {
        return {
          aa: '目录A' + item,
          bb: '康斯洛夫斯基',
          cc: '斯大林',
          dd: '列宁',
          ee: '政府人员',
          ff: '随便',
          gg: '不知道',
          hh: '2002',
          ii: '30',
          jj: '70'
        }
      })
    }
  },
  computed: {},
  watch: {},
  created() {
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      this.currDetail = this.tableData[0]
    },
    rowClick(v) {
      console.log(v)
      this.currDetail = v.row
    }
  }
}
</script>

<style scoped lang="scss"></style>
