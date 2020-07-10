<template>
  <!--年度考核查询-->
  <div class="specialPersonBonusVerification">
    <normal-layer :search-number="2">
      <template slot="search-header">
        <FormItems :items-datas="itemsDatas" :form-datas="queryForm">
          <template slot="单位">
            <OrganizationName v-model="queryForm.单位" />
          </template>>
          <template slot="主管部门">
            <Department v-model="queryForm.主管部门" />
          </template>>
          <template slot="状态">
            <SearchStatus v-model="queryForm.状态" />
          </template>>
          <div style="text-align: right">
            <el-button @click="reset('queryForm')">重置</el-button>
            <el-button type="primary" @click="search('queryForm')">查询</el-button>
          </div>
        </FormItems>
      </template>
      <div slot="table-title" class="box-header handle">
        <span class="box-title">年度考核查询列表</span>
        <!-- <div slot="title-btns" class="box-tools">
          <el-button type="primary" @click="isShowAdd = true">新增</el-button>
          <el-button type="primary">数据导入</el-button>
        </div> -->
      </div>
      <template>
        <my-table-view v-loading="loading" :border="true" :max-cloumns="20" :columns="columns" :data="tableData">
          <template slot="operation">
            <el-button type="text">查看</el-button>
          </template>
        </my-table-view>
        <Pagination :data="pageInfo" @refresh="pageChange" />
      </template>
    </normal-layer>
    <!-- 人员信息 -->
    <PersonalDetail v-model="isShowDetail" :detail-info="detailInfo" :dialog-title="`查看《${detailName}的个人档案》信息`" />
  </div>
</template>

<script>
import { list } from '@/api/BaseInformation/PersonalInformationManagement/index'
import FormItems from '@/views/components/PageLayers/form-items'
import OrganizationName from '@/components/Select/OrganizationName'
import SearchStatus from '@/components/Select/SearchStatus'
import Department from '@/components/Select/Department'
import NormalLayer from '@/views/components/PageLayers/normalLayer'
import PersonalDetail from '@/views/components/personalDetail/index'
import pageHandle from '@/mixins/pageHandle'
export default {
  name: 'ForTheRecord',
  components: { FormItems, NormalLayer, OrganizationName, PersonalDetail, SearchStatus, Department },
  mixins: [pageHandle],
  props: {},
  data() {
    return {
      pageInfo: {
        pageNum: 1,
        pageSize: 15,
        total: 10,
        startRow: 1,
        endRow: 10
      },
      detailName: '',
      detailInfo: {},
      loading: false,
      isShowDetail: false,
      isShowAdd: false,
      isShowEdit: false,
      isShowTheDetail: false,
      reportVisible: false,
      operation: 'detail',
      itemsDatas: [
        { label: '单位', prop: '单位', type: 'custom' },
        { label: '主管部门', prop: '主管部门', type: 'custom' },
        { label: '考核年度', prop: '考核年度', type: 'dateYear' },
        { label: '状态', prop: '状态', type: 'custom' }
      ],
      columns: [
        { type: 'selection' },
        { type: 'index', label: '序号' },
        { label: '审核状态', prop: 'aab069' },
        { label: '主管单位名称', prop: 'c' },
        { label: '考核年度', prop: 'aab019' },
        { label: '应参加考核人数', prop: 'rb0195' },
        { label: '实际参加考核人数', prop: 'aab022' },
        { label: '优秀等次人数', prop: 'aab023' },
        { label: '管理岗位设置数', prop: 'rb0705' },
        { label: '专业岗位设置数', prop: 'i' },
        { label: '工勤岗位设置数', prop: 'k' },
        { label: '岗位总数', prop: 'k' },
        { label: '编制数', prop: 'k' },
        { label: '操作', type: 'operation', fixed: 'right', width: '120px' }
      ],
      tableData: [{ aab019: '张三', aab022: '12312312313' }]
    }
  },
  computed: {},
  watch: {},
  created() {
    this.search()
  },
  mounted() {
  },
  methods: {
    showDialog(type, row) {
      if (type === 'add') {
        this.isShowAdd = true
      } else {
        this.isShowDetail = true
      }
    },
    getDetail(row) {
      this.detailName = row.aab019
      this.isShowDetail = true
    },
    search() {
      const form = Object.assign(this.queryForm, { pageNum: this.pageInfo.pageNum, pageSize: this.pageInfo.pageSize })
      this.$search(list, form)
    },
    pageChange(data) {
      this.pageInfo = data.pagination
      this.search()
    },
    deleteRow(row) {
      this.$msgConfirm('确认删除?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$msgSuccess('删除成功')
      }).catch(() => {
        this.$msgInfo('已取消删除')
      })
    },
    handleSave() {
      this.$msgSuccess('保存成功！')
    },
    calculate() { this.reportVisible = true }
  }
}
</script>

<style scoped lang="scss">
  /deep/ .el-table .el-table__body-wrapper{
    z-index: 0;
  }

</style>
