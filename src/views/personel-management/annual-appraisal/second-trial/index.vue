<template>
  <!--年度考核复审-->
  <div class="specialPersonBonusVerification">
    <normal-layer :search-number="2">
      <template slot="search-header">
        <FormItems :items-datas="itemsDatas" :form-datas="queryForm">
          <template slot="单位">
            <OrganizationName v-model="queryForm.单位" />
          </template>>
          <div style="text-align: right">
            <el-button @click="reset('queryForm')">重置</el-button>
            <el-button type="primary" @click="search('queryForm')">查询</el-button>
          </div>
        </FormItems>
      </template>
      <div slot="table-title" class="box-header handle">
        <span class="box-title">年度考核复审列表</span>
        <!-- <div slot="title-btns" class="box-tools">
          <el-button type="primary" @click="isShowAdd = true">新增</el-button>
          <el-button type="primary">数据导入</el-button>
        </div> -->
      </div>
      <template>
        <my-table-view v-loading="loading" :border="true" :max-cloumns="20" :columns="columns" :data="tableData">
          <template slot="operation" slot-scope="{row}">
            <el-button type="text" @click="doAudit(row)">审核</el-button>
          </template>
        </my-table-view>
        <Pagination :data="pageInfo" @refresh="pageChange" />
      </template>
    </normal-layer>
    <!-- 审核 -->
    <reportIndex v-model="isShowAudit" :detail-info="detailInfo" />
  </div>
</template>

<script>
import { list } from '@/api/BaseInformation/PersonalInformationManagement/index'
import FormItems from '@/views/components/PageLayers/form-items'
import OrganizationName from '@/components/Select/OrganizationName'
import NormalLayer from '@/views/components/PageLayers/normalLayer'
import reportIndex from '../component/reportIndex'
import pageHandle from '@/mixins/pageHandle'
export default {
  name: 'SecondTrial',
  components: { FormItems, NormalLayer, OrganizationName, reportIndex },
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
      isShowAudit: false,
      isShowAdd: false,
      isShowEdit: false,
      isShowTheDetail: false,
      reportVisible: false,
      operation: 'detail',
      itemsDatas: [
        { label: '单位', prop: '单位', type: 'custom' },
        { label: '考核年度', prop: '考核年度', type: 'dateYear' }
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
    doAudit(row) {
      this.detailInfo = row
      this.isShowAudit = true
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
