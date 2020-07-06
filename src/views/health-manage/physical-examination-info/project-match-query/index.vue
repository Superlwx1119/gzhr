<template>
  <div class="ProjectMatchQuery">
    <el-row :gutter="10" class="tab-body">
      <el-col :md="10" :lg="8" :xl="6" class="tab-body-left">
        <left-search-table :search-height="'100px'" :show-more-btn="false">
          <el-form ref="queryForm" label-width="105px">
            <el-form-item label="体检机构" prop="体检机构">
              <health-institution v-model="queryForm.体检机构" />
            </el-form-item>
          </el-form>
          <template slot="btn">
            <el-button @reset="reset('queryForm')">重置</el-button>
            <el-button type="primary" @click="search">查询</el-button>
          </template>
          <div slot="list" class="box">
            <div class="box-header">
              <span class="box-title">体检机构信息</span>
            </div>
            <div class="box-body">
              <my-table-view :border="true" :max-cloumns="4" :first-highlight="true" :highlight-current-row="true" :columns="columns" :data="tableData" @rowClick="rowClick" />
              <Pagination layout="total,prev, pager, next,jumper" />
            </div>
          </div>
        </left-search-table>
      </el-col>
      <el-col :md="14" :lg="16" :xl="18" class="tab-body-right">
        <div class="box">
          <div class="box-body">
            <RightDetailInfo :title="'机构详情'" :options="columns.slice(2)" :list-data="currDetail" />
            <section class="layer" style="height: calc(100% - 172px)">
              <div class="box">
                <div class="box-header handle">
                  <span class="box-title">匹配项目列表</span>
                </div>
                <div class="box-body">
                  <filter-box />
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
import HealthInstitution from '@/components/Select/health-manage/HealthInstitution'
import FilterBox from './right/filter-box' //  右侧查询条件
export default {
  name: 'ProjectMatchQuery',
  components: {
    LeftSearchTable,
    HealthInstitution,
    FilterBox
  },
  mixins: [pageHandle],
  props: {},
  data() {
    return {
      columns: [
        { type: 'selection' },
        { type: 'index', label: '序号' },
        { label: '体检机构编号', prop: '体检机构编号1' },
        { label: '体检机构名称', prop: '体检机构名称1' }
      ],
      tableData: [1, 2, 3, 4, 5, 6, 7, 8].map(item => {
        return { '体检机构编号1': 'CAC414288123' + item, '体检机构名称1': '夕阳红体检' + item }
      }),
      currDetail: {},
      detailColumns: [
        { type: 'selection' },
        { type: 'index', label: '序号' },
        { label: '审核状态', prop: '审核状态1' },
        { label: '体检机构编号', prop: '体检机构编号1' },
        { label: '体检机构名称', prop: '体检机构名称1' },
        { label: '体检机构项目编码', prop: '体检机构项目编码1' },
        { label: '体检机构项目名称', prop: '体检机构项目名称1' },
        { label: '医保项目编码', prop: '医保项目编码1' },
        { label: '医保项目名称', prop: '医保项目名称1' },
        { label: '机构项目单价(元)', prop: '机构项目单价(元)1' },
        { label: '目录类别', prop: '目录类别1' },
        { label: '开始日期', prop: '开始日期1' },
        { label: '结束日期', prop: '结束日期1' },
        { label: '经办人', prop: '经办人1' },
        { label: '经办时间', prop: '经办时间1' }
      ],
      detailData: [1, 2, 3].map(item => {
        return {
          '审核状态1': '审核状态',
          '体检机构编号1': 'CAC414288123' + item,
          '体检机构名称1': '夕阳红体检' + item,
          '体检机构项目编码1': '体检机构项目编码',
          '体检机构项目名称1': '体检机构项目名称',
          '医保项目编码1': '医保项目编码',
          '医保项目名称1': '医保项目名称',
          '机构项目单价(元)1': '320',
          '目录类别1': '目录类别',
          '开始日期1': '2020-02-02',
          '结束日期1': '2020-03-03',
          '经办人1': 'john',
          '经办时间1': '2020-02-02'
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
