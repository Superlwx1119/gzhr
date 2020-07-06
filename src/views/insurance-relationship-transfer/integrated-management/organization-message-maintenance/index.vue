<template>
  <!--  异地机构信息维护-->
  <div class="addEdit item4">
    <section class="layer layer-query">
      <div class="box">
        <ConditionHeader />
        <div class="box-body query">
          <el-form ref="searchForm" :model="searchForm" label-width="105px">
            <el-row :gutter="10">
              <el-col :md="12" :lg="8" :xl="6">
                <el-form-item label="经办机构名称" prop="经办机构名称">
                  <el-input v-model="searchForm.经办机构名称" />
                </el-form-item>
              </el-col>
              <el-col :md="12" :lg="8" :xl="6">
                <el-form-item label="地区" prop="地区">
                  <MedicalZonation v-model="searchForm.地区" />
                </el-form-item>
              </el-col>
              <el-col :md="12" :lg="8" :xl="6" style="text-align: right">
                <el-button @click="reset('searchForm')">重置</el-button>
                <el-button type="primary" @click="search('searchForm')">查询</el-button>
              </el-col>
            </el-row>
          </el-form>
        </div>
      </div>
    </section>
    <section class="layer layer-tab">
      <div class="box">
        <div class="box-body">
          <div class="box-header handle">
            <span class="box-title">异地机构信息列表</span>
          </div>
          <div class="box-body result">
            <my-table-view
              v-loading="loading"
              :data="tableData"
              :columns="columns"
              :multiple-selection.sync="multipleSelection"
            >
              <template slot="operation" slot-scope="scope">
                <el-button type="text" class="warning" title="修改" :class="scope.$index" @click="isShowEdit = true">
                  <svg-icon icon-class="edit" />
                </el-button>
                <el-button type="text" class="modify" title="变更信息" :class="scope.$index" @click="isShowChange = true">
                  <svg-icon icon-class="details" />
                </el-button>
              </template>
            </my-table-view>
            <Pagination :data="pageInfo" @refresh="pageChange" />
          </div>
        </div>
      </div>
    </section>
    <!-- 修改 -->
    <Edit :show.sync="isShowEdit" />
    <!-- 变更信息 -->
    <ChangeMessage :show.sync="isShowChange" />
  </div>
</template>

<script>
import MedicalZonation from '@/components/Select/MedicalZonation'
import Edit from './dialog/edit'
import ChangeMessage from './dialog/changeMessage'
export default {
  name: 'DepartmentMessageMaintenance',
  components: {
    MedicalZonation,
    Edit,
    ChangeMessage
  },
  mixins: [],
  props: {},
  data() {
    return {
      isShowEdit: false,
      isShowChange: false,
      searchForm: {},
      tableOperates: {
        width: '200px',
        fixed: 'right',
        list: [
          { show: true, label: '审核', type: 'text', method: () => {
            this.editVisible = true
          } }
        ]
      },
      pageInfo: {
        pageNum: 1,
        pageSize: 15,
        total: 10,
        startRow: 1,
        endRow: 10
      },
      multipleSelection: [],
      loading: false,
      tableData: [1, 2, 3, 4].map((i) => {
        return {
          机构编码: '机构编码',
          经办机构名称: '经办机构名称',
          行政区划代码: '行政区划代码',
          地址: '地址',
          所属省: '所属省',
          所属市: '所属市',
          所属区: '所属区',
          联系电话: '联系电话',
          邮编: '邮编',
          联系人: '联系人',
          开户行行号: '开户行行号',
          开户行银行: '开户行银行',
          开户银行: '开户银行',
          银行账号: '银行账号'
        }
      }),
      columns: [
        { type: 'selection' },
        { type: 'index', label: '序号', width: '55px' },
        { prop: '机构编码', label: '机构编码', align: 'center', overflow: true },
        { prop: '经办机构名称', label: '经办机构名称', align: 'center', overflow: true },
        { prop: '行政区划代码', label: '行政区划代码', align: 'center', overflow: true },
        { prop: '地址', label: '地址', align: 'center', overflow: true },
        { prop: '所属省', label: '所属省', align: 'center', overflow: true },
        { prop: '所属市', label: '所属市', align: 'center', overflow: true },
        { prop: '所属区', label: '所属区', align: 'center', overflow: true },
        { prop: '联系电话', label: '联系电话', align: 'center', overflow: true },
        { prop: '转移日期', label: '转移日期', align: 'center', overflow: true },
        { prop: '邮编', label: '邮编', align: 'center', overflow: true },
        { prop: '联系人', label: '联系人', align: 'center', overflow: true },
        { prop: '开户行行号', label: '开户行行号', align: 'center', overflow: true },
        { prop: '开户行银行', label: '开户行银行', align: 'center', overflow: true },
        { prop: '开户银行', label: '开户银行', align: 'center', overflow: true },
        { prop: '银行账号', label: '银行账号', align: 'center', overflow: true },
        { type: 'operation', label: '操作', fixed: 'right', width: '160px' }
      ]
    }
  },
  computed: {},
  watch: {},
  created() {
  },
  mounted() {
  },
  methods: {
    reset(formName) {
      this.$refs[formName].resetFields()
    },
    pageChange(data) {
      this.pageInfo = data.pagination
    },
    search(formName) {}
  }
}
</script>

<style scoped lang="scss">
.addEdit {
    height: calc(100% - 8px);
    position: relative;
    .layer-tab {
      height: calc(100% - 120px);
      &>.box>.box-body{
        height: 100%;
        padding-top: 0;
        padding-left: 0;
        .el-tabs {
          height: 100%;
          /deep/ {
            .el-tabs__header {
              background-color: #fafafa;
            }
            .el-tabs__nav {
              margin-left: 0;
            }
            .el-tabs__content {
              height: calc(100% - 30px);
              .el-tab-pane, .box, .box-body {
                padding-top: 0;
                height: calc(100% - 16px);
              }
            }
          }
        }
      }
    }
    .el-date-editor,.el-select {
      width: 100%;
    }
  }
  </style>

