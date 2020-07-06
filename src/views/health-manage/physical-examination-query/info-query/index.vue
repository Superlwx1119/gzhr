<template>
  <!--体检业务信息查询-->
  <div class="physicalExaminationQuery">
    <el-row :gutter="10" class="tab-body">
      <el-col :md="10" :lg="8" :xl="6" class="tab-body-left">
        <el-form ref="queryForm" label-width="105px">
          <left-search-table :search-height="'150px'" :show-more-btn="true">
            <el-form-item label="时间类型" prop="时间范围1">
              <el-select v-model="queryForm.时间范围1" style="width: 100%" placeholder="请选择">
                <el-option label="登记日期" value="1" />
                <el-option label="结算日期" value="2" />
              </el-select>
            </el-form-item>
            <el-form-item label="开始时间" prop="开始时间1">
              <el-date-picker v-model="queryForm.开始时间1" style="width: 100%" type="date" placeholder="选择时间" />
            </el-form-item>
            <template slot="more">
              <el-form-item label="结束时间" prop="结束时间1">
                <el-date-picker v-model="queryForm.结束时间1" style="width: 100%" type="date" placeholder="选择时间" />
              </el-form-item>
              <el-form-item label="体检类别" prop="体检类别1">
                <health-type v-model="queryForm.体检类别1" />
              </el-form-item>
              <el-form-item label="体检机构" prop="体检机构1">
                <health-institution v-model="queryForm.体检机构1" />
              </el-form-item>
              <el-form-item label="证件类型" prop="证件类型">
                <card-type v-model="queryForm.证件类型" />
              </el-form-item>
              <el-form-item label="证件号码" prop="证件号码1">
                <el-input v-model="queryForm.证件号码1" placeholder="请输入" />
              </el-form-item>
              <el-form-item label="体检单位" prop="体检单位1">
                <health-company v-model="queryForm.体检单位1" />
              </el-form-item>
            </template>
            <template slot="btn">
              <el-button @reset="reset('queryForm')">重置</el-button>
              <el-button type="primary" @click="search">查询</el-button>
            </template>
            <div slot="list" class="box">
              <div class="box-header">
                <span class="box-title">体检业务信息</span>
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
          <div class="box-body">
            <RightDetailInfo :title="'体检业务信息详情'" :options="columns.slice(2)" :list-data="currDetail" />
            <section class="layer" style="height: calc(100% - 188px)">
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
                  <el-tab-pane label="结算单" name="second" />
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
import HealthInstitution from '@/components/Select/health-manage/HealthInstitution'
import HealthType from '@/components/Select/health-manage/HealthType'
import CardType from '@/components/Select/CardType'
import HealthCompany from '@/components/Select/health-manage/HealthCompany'
export default {
  name: 'PhysicalExaminationQuery',
  components: {
    HealthCompany,
    CardType,
    HealthType,
    LeftSearchTable,
    HealthInstitution
  },
  mixins: [pageHandle],
  props: {},
  data() {
    return {
      activeName: 'first',
      columns: [
        { type: 'selection' },
        { type: 'index', label: '序号' },
        { label: '姓名', prop: 'a' },
        { label: '性别', prop: 'b' },
        { label: '身份证号', prop: 'c' },
        { label: '体检类别', prop: 'd' },
        { label: '体检机构', prop: 'e' },
        { label: '体检套餐', prop: 'f' },
        { label: '结算状态', prop: 'g' },
        { label: '所属单位', prop: 'h' },
        { label: '总费用(元)', prop: 'i' },
        { label: '基金支付(元)', prop: 'j' },
        { label: '现金支付(元)', prop: 'k' },
        { label: '其他费用(元)', prop: 'l' },
        { label: '体检日期', prop: 'm' },
        { label: '业务序列号', prop: 'n' }

      ],
      tableData: [1, 2, 3, 4, 5, 6, 7, 8].map(item => {
        return {
          a: '哈理由',
          b: '男',
          c: '430981199102219982',
          d: '一般人员',
          e: '体检机构',
          f: '体检套餐A' + item,
          g: '已申报',
          h: '中国电信',
          i: '1200',
          j: '1000',
          k: '100',
          l: '100',
          m: '2020-02-02',
          n: '11087298'
        }
      }),
      currDetail: {},
      detailColumns: [
        { type: 'index', label: '序号' },
        { label: '医保目录名称', prop: 'name' },
        { label: '医药机构目录名称', prop: 'sex' },
        { label: '目录类别', prop: 'cardNo' },
        { label: '费用发生日期', prop: 'birth' },
        { label: '规格', prop: 'level' },
        { label: '剂型', prop: 'package' },
        { label: '单价(元)', prop: 'beginDate' },
        { label: '数量', prop: 'endDate' },
        { label: '费用总额(元)', prop: 'mobile' },
        { label: '自付比例', prop: 'company' }
      ],
      detailData: [1, 2, 3].map(item => {
        return {
          name: 'xxx' + item,
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
          endDate: '2020-02-02'
        }
      })
    }
  },
  computed: {},
  watch: {},
  created() {
  },
  mounted() {
    this.currDetail = this.tableData[0]
  },
  methods: {
    rowClick(v) {
      console.log(v)
      this.currDetail = v.row
    }
  }
}
</script>

<style scoped lang="scss"></style>
