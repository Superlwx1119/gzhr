<template>
  <div class="packageMaintenance">
    <el-row :gutter="10" class="tab-body">
      <el-col :md="10" :lg="8" :xl="6" class="tab-body-left">
        <left-search-table :search-height="'150px'" :show-more-btn="false">
          <el-form ref="queryForm" label-width="105px">
            <el-form-item label="套餐名称" prop="套餐名称1">
              <el-input v-model="queryForm.套餐名称1" placeholder="请输入" />
            </el-form-item>
            <el-form-item label="体检类型" prop="体检类型1">
              <health-type v-model="queryForm.体检类型1" />
            </el-form-item>
          </el-form>
          <template slot="btn">
            <el-button @reset="reset('queryForm')">重置</el-button>
            <el-button type="primary" @click="search">查询</el-button>
          </template>
          <div slot="list" class="box">
            <div class="box-header handle">
              <span class="box-title">体检套餐信息</span>
              <div class="box-tools">
                <el-button type="primary" @click="addVisible = true">新增</el-button>
              </div>
            </div>
            <div class="box-body">
              <MyTableView :border="true" :first-highlight="true" :highlight-current-row="true" :columns="columns | filterColumns(4)" :data="tableData" @rowClick="rowClick" />
              <Pagination layout="total,prev, pager, next,jumper" />
            </div>
          </div>
        </left-search-table>
      </el-col>
      <el-col :md="14" :lg="16" :xl="18" class="tab-body-right">
        <div class="box">
          <div class="box-body">
            <RightDetailInfo :title="'体检套餐详情'" :options="columns | filterIndexAndSelection" :list-data="currDetail">
              <template slot="tools">
                <el-button type="primary" @click="editVisible = true">修改</el-button>
              </template>
            </RightDetailInfo>
            <section class="layer" style="height: calc(100% - 152px)">
              <div class="box">
                <div class="box-header">
                  <span class="box-title">套餐项目信息</span>
                </div>
                <div class="box-body">
                  <MyTableView :border="true" :columns="projectColumns" :data="projectData" />
                  <Pagination />
                </div>
              </div>
            </section>
          </div>
        </div>
      </el-col>
    </el-row>
    <Add :show.sync="addVisible" />
    <Edit :show.sync="editVisible" :form="editForm" />
  </div>
</template>

<script>
import pageHandle from '@/mixins/pageHandle'
import HealthType from '@/components/Select/health-manage/HealthType'
import Add from './Add'
import Edit from './Edit'
export default {
  name: 'PackageMaintenance',
  components: {
    HealthType,
    Add,
    Edit
  },
  mixins: [pageHandle],
  props: {},
  data() {
    return {
      addVisible: false,
      editVisible: false,
      columns: [
        { type: 'selection' },
        { type: 'index', label: '序号' },
        { label: '套餐名称', prop: '套餐名称1' },
        { label: '默认套餐', prop: '默认套餐1' },
        { label: '套餐价格(元)', prop: '套餐价格1' },
        { label: '套餐年龄段', prop: '套餐年龄段1' },
        { label: '套餐性别', prop: '套餐性别1' },
        { label: '体检类别', prop: '体检类别1' },
        { label: '生效年度', prop: '生效年度1' },
        { label: '失效年度', prop: '失效年度1' },
        { label: '经办人', prop: '经办人1' },
        { label: '经办时间', prop: '经办时间1' }
      ],
      tableData: [1, 2, 3, 4, 5, 6, 7, 8].map(item => {
        return { '套餐名称1': '套餐名称' + item, '默认套餐1': '默认套餐', '套餐价格1': '套餐价格', '套餐年龄段1': '套餐年龄段', '套餐性别1': '套餐性别', '体检类别1': '体检类别', '生效年度1': '2021', '失效年度1': '2022', '经办人1': 'adssa', '经办时间1': '2020-02-21' }
      }),
      currDetail: {},
      //  体检项目详情列表
      projectColumns: [
        { type: 'index', label: '序号' },
        { label: '项目编码', prop: 'code' },
        { label: '项目名称', prop: 'name' },
        { label: '目录归类', prop: 'classify' },
        { label: '组合类型', prop: 'combination' }
      ],
      projectData: [
        { code: 'ACE09889021', name: '盆腔B超', classify: '必选', combination: '二合一' }
      ],
      editForm: {}
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
      this.currDetail = v.row
    }
  }
}
</script>

<style scoped lang="scss"></style>
