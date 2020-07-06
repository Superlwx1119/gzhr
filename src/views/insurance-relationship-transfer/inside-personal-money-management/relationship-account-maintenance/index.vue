<template>
  <!--  医保关系转入个账接收账户维护-->
  <div class="addEdit item4">
    <section class="layer layer-query">
      <div class="box">
        <ConditionHeader />
        <div class="box-body query">
          <el-form ref="searchForm" :model="searchForm" label-width="105px">
            <el-row :gutter="10">
              <el-col :md="12" :lg="8" :xl="6">
                <el-form-item label="账户编码" prop="账户编码">
                  <el-input v-model="searchForm.账户编码" />
                </el-form-item>
              </el-col>
              <el-col :md="12" :lg="8" :xl="6">
                <el-form-item label="机构编码" prop="机构编码">
                  <el-input v-model="searchForm.机构编码" />
                </el-form-item>
              </el-col>
              <el-col :md="12" :lg="8" :xl="6">
                <el-form-item label="机构名称" prop="机构名称">
                  <el-input v-model="searchForm.机构名称" />
                </el-form-item>
              </el-col>
              <el-col :md="12" :lg="8" :xl="6">
                <el-form-item label="开户银行" prop="开户银行">
                  <Bank v-model="searchForm.开户银行" />
                </el-form-item>
              </el-col>
              <el-col :md="12" :lg="8" :xl="6">
                <el-form-item label="银行行号" prop="银行行号">
                  <el-input v-model="searchForm.银行行号" />
                </el-form-item>
              </el-col>
              <el-col :md="12" :lg="8" :xl="6">
                <el-form-item label="开户名称" prop="开户名称">
                  <el-input v-model="searchForm.开户名称" />
                </el-form-item>
              </el-col>
              <el-col :md="12" :lg="8" :xl="6">
                <el-form-item label="银行账号" prop="银行账号">
                  <el-input v-model="searchForm.银行账号" />
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
            <span class="box-title">医保关系转入个账接收账户维护列表</span>
            <div class="box-tools">
              <el-button type="primary" @click="isShowAdd = true">新增</el-button>
              <el-button type="danger">删除</el-button>
            </div>
          </div>
          <div class="box-body result">
            <my-table-view
              v-loading="loading"
              :data="tableData"
              :columns="columns"
              :multiple-selection.sync="multipleSelection"
            >
              <template slot="operation" slot-scope="scope">
                <el-button type="warning" class="warning" title="修改" :class="scope.$index" @click="isShowEdit = true">
                  <svg-icon icon-class="edit" />
                </el-button>
                <el-button type="modify" class="modify" title="查看变更操作" :class="scope.$index" @click="isShowDetail = true">
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
    <!-- 新增 -->
    <Add :show.sync="isShowAdd" />
    <!-- 变更信息 -->
    <Detail :show.sync="isShowDetail" />
  </div>
</template>

<script>
import Bank from '@/components/Select/Bank'
import Edit from './dialog/edit'
import Add from './dialog/add'
import Detail from './dialog/detail'
export default {
  name: 'DepartmentMessageMaintenance',
  components: {
    Bank,
    Detail,
    Edit,
    Add
  },
  mixins: [],
  props: {},
  data() {
    return {
      isShowDetail: false,
      isShowEdit: false,
      isShowAdd: false,
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
          账号编码: '账号编码',
          机构编码: '机构编码',
          机构名称: '机构名称',
          开户银行: '开户银行',
          银行卡号: '银行卡号',
          开户名称: '开户名称',
          联系电话: '联系电话'
        }
      }),
      columns: [
        { type: 'selection' },
        { type: 'index', label: '序号', width: '55px' },
        { prop: '账号编码', label: '账号编码', align: 'center', overflow: true },
        { prop: '机构编码', label: '机构编码', align: 'center', overflow: true },
        { prop: '机构名称', label: '机构名称', align: 'center', overflow: true },
        { prop: '开户银行', label: '开户银行', align: 'center', overflow: true },
        { prop: '银行卡号', label: '银行卡号', align: 'center', overflow: true },
        { prop: '开户名称', label: '开户名称', align: 'center', overflow: true },
        { prop: '联系电话', label: '联系电话', align: 'center', overflow: true },
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

