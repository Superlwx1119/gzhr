<template>
  <!--  单位及人员核定查询-->
  <div class="CompanyAndPeopleQuery">
    <el-row :gutter="10" class="tab-body">
      <el-col :md="10" :lg="8" :xl="6" class="tab-body-left">
        <el-form ref="queryForm" label-width="105px">
          <left-search-table :search-height="'150px'" :show-more-btn="true">
            <el-form-item label="核定状态" prop="核定状态1">
              <el-select v-model="queryForm.核定状态1" style="width: 100%" placeholder="请选择">
                <el-option label="已核定" value="1" />
                <el-option label="未核定" value="2" />
              </el-select>
            </el-form-item>
            <el-form-item label="体检年度" prop="体检年度1">
              <el-date-picker v-model="queryForm.体检年度1" style="width: 100%" type="year" placeholder="选择年份" />
            </el-form-item>
            <template slot="more">
              <el-form-item label="体检机构" prop="体检机构1">
                <health-institution v-model="queryForm.体检机构1" />
              </el-form-item>
              <el-form-item label="体检单位" prop="体检单位1">
                <health-package v-model="queryForm.体检单位1" />
              </el-form-item>
            </template>
            <template slot="btn">
              <el-button @reset="reset('queryForm')">重置</el-button>
              <el-button type="primary" @click="search">查询</el-button>
            </template>
            <div slot="list" class="box">
              <div class="box-header">
                <span class="box-title">体检单位及人员信息</span>
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
            <RightDetailInfo :title="'体检单位及人员详情'" :options="columns.slice(2)" :list-data="currDetail" />
            <section class="layer" style="height: calc(100% - 115px)">
              <div class="box">
                <div class="box-header">
                  <span class="box-title">单位人员信息</span>
                </div>
                <div class="box-body">
                  <my-table-view :border="true" :max-cloumns="7" :columns="detailColumns" :data="detailData" />
                  <Pagination />
                </div>
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
import HealthPackage from '@/components/Select/health-manage/HealthPackage'
import HealthInstitution from '@/components/Select/health-manage/HealthInstitution'
export default {
  name: 'CompanyAndPeopleQuery',
  components: {
    LeftSearchTable,
    HealthInstitution,
    HealthPackage
  },
  mixins: [pageHandle],
  props: {},
  data() {
    return {
      columns: [
        { type: 'selection' },
        { type: 'index', label: '序号' },
        { label: '核定状态', prop: '核定状态1' },
        { label: '体检年度', prop: '体检年度1' },
        { label: '体检机构编号', prop: '体检机构编号1' },
        { label: '体检机构名称', prop: '体检机构名称1' },
        { label: '单位编号', prop: '单位编号1' },
        { label: '单位名称', prop: '单位名称1' },
        { label: '经办人', prop: '经办人1' },
        { label: '经办时间', prop: '经办时间1' }
      ],
      tableData: [1, 2, 3, 4, 5, 6, 7, 8].map(item => {
        return { '核定状态1': '未核定', '体检年度1': '2020', '体检机构编号1': '89757' + item, '体检机构名称1': '名称', '单位编号1': '单位编号', '单位名称1': '名称', '经办人1': '经办ren', '经办时间1': '2020-02-02' }
      }),
      currDetail: {},
      detailColumns: [
        { type: 'index', label: '序号' },
        { label: '姓名', prop: 'name' },
        { label: '性别', prop: 'sex' },
        { label: '身份证号', prop: 'cardNo' },
        { label: '出生日期', prop: 'birth' },
        { label: '公务员级别', prop: 'level' },
        { label: '体检套餐', prop: 'package' },
        { label: '体检开始日期', prop: 'beginDate' },
        { label: '体检结束日期', prop: 'endDate' },
        { label: '电话', prop: 'mobile' },
        { label: '所属单位', prop: 'company' },
        { label: '居住地址', prop: 'address' }
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
          endDate: '2020-02-02',
          date: '2020-02-02'
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
