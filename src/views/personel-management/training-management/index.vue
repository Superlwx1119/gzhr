<template>
  <!--培训管理-->
  <div class="specialPersonBonusVerification">
    <normal-layer :search-number="7">
      <template slot="search-header">
        <FormItems :items-datas="itemsDatas" :form-datas="queryForm">
          <template slot="单位">
            <OrganizationName v-model="queryForm.单位" />
          </template>
          <template slot="岗位等级">
            <JobsLevel v-model="queryForm.岗位等级" />
          </template>
          <div style="text-align: right">
            <el-button @click="reset('queryForm')">重置</el-button>
            <el-button type="primary" @click="search('queryForm')">查询</el-button>
          </div>
        </FormItems>
      </template>
      <div slot="table-title" class="box-header handle">
        <span class="box-title">培训管理列表</span>
        <!-- <div slot="title-btns" class="box-tools">
          <el-button type="primary" @click="isShowAdd = true">新增</el-button>
          <el-button type="primary">数据导入</el-button>
        </div> -->
      </div>
      <template>
        <my-table-view v-loading="loading" :border="true" :max-cloumns="20" :columns="columns" :data="tableData">
          <template slot="姓名" slot-scope="{row}">
            <el-button type="text" @click="getDetail(row)">{{ row.aab019 }}</el-button>
          </template>
          <template slot="身份证号码" slot-scope="{row}">
            <el-button type="text" @click="getDetail(row)">{{ row.aab022 }}</el-button>
          </template>
          <template slot="operation">
            <el-button type="text" @click="isShowDetail = true">查看</el-button>
            <el-button type="text" @click="isShowTheDetail = true">审核通过</el-button>
            <el-button type="text" class="delete" @click="isShowEdit = true">审核不通过</el-button>
          </template>
        </my-table-view>
        <Pagination :data="pageInfo" @refresh="pageChange" />
      </template>
    </normal-layer>
    <!-- 人员信息 -->
    <PersonnelInfoView v-model="isShowDetail" :operation="operation" :dialog-title="`查看《${detailName}的个人档案》信息`" />
  </div>
</template>

<script>
import { list } from '@/api/BaseInformation/PersonalInformationManagement/index'
import PersonnelInfoView from '@/views/components/PersonnelInfoView/index'
import FormItems from '@/views/components/PageLayers/form-items'
import OrganizationName from '@/components/Select/OrganizationName'
import JobsLevel from '@/components/Select/JobsLevel'
import NormalLayer from '@/views/components/PageLayers/normalLayer'
import pageHandle from '@/mixins/pageHandle'
export default {
  name: 'TrainingManagement',
  components: { FormItems, NormalLayer, OrganizationName, JobsLevel, PersonnelInfoView },
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
        // { label: '年度', prop: '年度1', type: 'dateYear' },
        { label: '单位', prop: '单位', type: 'custom' },
        { label: '姓名', prop: '姓名', type: 'input' },
        { label: '岗位等级', prop: '岗位等级', type: 'custom' },
        { label: '身份证号', prop: '身份证号', type: 'input' },
        { label: '退休时间', prop: '退休时间', type: 'dateRange' },
        { label: '年龄范围', prop: '年龄范围', type: 'select', options: [{ label: '30岁以下', value: '1' }, { label: '30~45岁', value: '2' }, { label: '45岁以上', value: '3' }] },
        { label: '参加工作时间', prop: '参加工作时间', type: 'dateRange' }

      ],
      columns: [
        { type: 'selection' },
        { type: 'index', label: '序号' },
        { label: '单位', prop: 'aab069' },
        { label: '主管单位', prop: 'c' },
        { label: '姓名', prop: 'aab019', type: 'custom', slotName: '姓名' },
        { label: '性别', prop: 'rb0195' },
        { label: '身份证号码', prop: 'aab022', type: 'custom', slotName: '身份证号码' },
        { label: '出生日期', prop: 'aab023' },
        { label: '参加工作日期', prop: 'rb0705' },
        { label: '最高学历', prop: 'i' },
        { label: '岗位类别', prop: 'k' },
        { label: '培训次数', prop: 'k' },
        { label: '培训总时长(时)', prop: 'k' }
        // { label: '操作', type: 'operation', fixed: 'right', width: '250px' }
      ],
      tableData: [{ aab019: '张三', aab022: '12312312313' }]
    }
  },
  computed: {},
  watch: {},
  created() {
    // this.search()
  },
  mounted() {
  },
  methods: {
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
