<template>
  <!--  药品目录业务属性信息查询-->
  <div class="drugInfoQuery">
    <el-row :gutter="10" class="tab-body">
      <el-col :md="10" :lg="8" :xl="6" class="tab-body-left">
        <el-form label-width="105px">
          <search-table :search-height="'150px'" :show-more-btn="false" :list-title="'疾病诊断分类列表'" :table-col-count="3" :table-columns="firstColumns" :table-data="firstData" :page-info="firstPageInfo" :is-selection="true" @getListData="getFirstListData" @selectAll="firstSelectAll">
            <template>
              <el-form-item label="疾病种类" prop="疾病种类">
                <disease-type v-model="searchForm.疾病种类" />
              </el-form-item>
              <el-form-item label="疾病信息" prop="疾病信息">
                <disease-info v-model="searchForm.疾病信息" />
              </el-form-item>
            </template>
            <template #btn>
              <el-button>重置</el-button>
              <el-button type="primary">查询</el-button>
            </template>
            <template #listTools>
              <el-button type="primary" @click="addVisible = true">新增</el-button>
            </template>
          </search-table>
        </el-form>
      </el-col>
      <el-col :md="14" :lg="16" :xl="18" class="tab-body-right">
        <div class="box">
          <div class="box-body">
            <RightDetailInfo :title="'疾病诊断分类详情'" :options="firstColumns" :list-data="firstDetail">
              <template #tools>
                <el-button type="danger">删除</el-button>
                <el-button type="primary" @click="editVisible = true">修改</el-button>
              </template>
            </RightDetailInfo>
            <Maintained />
          </div>
        </div>
      </el-col>
    </el-row>
    <add :show.sync="addVisible" />
    <edit :show.sync="editVisible" :form="editForm" />
  </div>
</template>

<script>
import RightDetailInfo from '@/components/RightDetailInfo'
import Maintained from './maintained'
import Add from './dialog/add'
import Edit from './dialog/edit'
import DiseaseType from '@/components/Select/DiseaseType'
import DiseaseInfo from '@/components/Select/DiseaseInfo'
export default {
  name: 'DrugInfoQuery',
  components: {
    RightDetailInfo,
    Maintained,
    Add,
    Edit,
    DiseaseType,
    DiseaseInfo
  },
  mixins: [],
  props: {},
  data() {
    return {
      addVisible: false,
      editVisible: false,
      activeName: 'first',
      searchForm: {},
      firstColumns: [
        { label: '病种名称', prop: '病种名称', align: 'center' },
        { label: '病种类别', prop: '病种类别', align: 'center' },
        { label: '病种代码', prop: '病种代码', align: 'center' },
        { label: '使用标志', prop: '使用标志', align: 'center' }
      ],
      firstDetail: {},
      firstPageInfo: {
        pageNum: 1,
        pageSize: 15,
        total: 10,
        startRow: 1,
        endRow: 10
      },
      firstData: [111, 222, 333, 444, 555, 666, 777, 888, 999].map((item) => {
        return { '病种名称': '高血脂' + item, '病种类别': '病种类别', '病种代码': '病种代码', '使用标志': '使用标志' }
      }),
      editForm: {}
    }
  },
  computed: {
  },
  watch: {},
  created() {
  },
  mounted() {
  },
  methods: {
    getFirstListData(data) {
      this.firstDetail = data
      console.log(this.firstDetail)
    },
    firstSelectAll(v) {
      console.log(v)
    },
    getSecondListData(data) {
      this.secondDetail = data
    },
    secondSelectAll(v) {
      console.log(v)
    }
  }
}
</script>

<style scoped lang="scss"></style>
