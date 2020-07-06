<template>
  <!--  实际转入个账导入-->
  <div class="addEdit item4">
    <section class="layer layer-query">
      <div class="box">
        <ConditionHeader />
        <div class="box-body query">
          <el-form ref="searchForm" :model="searchForm" label-width="105px">
            <el-row :gutter="10">
              <el-col :md="12" :lg="8" :xl="6">
                <el-form-item label="转入人姓名" prop="转入人姓名">
                  <el-input v-model="searchForm.转入人姓名" />
                </el-form-item>
              </el-col>
              <el-col :md="12" :lg="8" :xl="6">
                <el-form-item label="转出地" prop="转出地">
                  <el-input v-model="searchForm.转出地" />
                </el-form-item>
              </el-col>
              <el-col :md="12" :lg="8" :xl="6">
                <el-form-item label="转出地省属" prop="转出地省属">
                  <el-input v-model="searchForm.转出地省属" />
                </el-form-item>
              </el-col>
              <el-col :md="12" :lg="8" :xl="6">
                <el-form-item label="到账金额" prop="到账金额">
                  <Bank v-model="searchForm.到账金额" />
                </el-form-item>
              </el-col>
              <el-col :md="12" :lg="8" :xl="6">
                <el-form-item label="到账起止时间" prop="到账起止时间">
                  <el-date-picker
                    v-model="searchForm.到账起止时间"
                    style="width:100%;height:100;"
                    type="daterange"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                  />
                </el-form-item>
              </el-col>
              <el-col :md="12" :lg="8" :xl="6">
                <el-form-item label="数据接收起止时间" prop="数据接收起止时间">
                  <el-date-picker
                    v-model="searchForm.数据接收起止时间"
                    style="width:100%;height:100;"
                    type="daterange"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                  />
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
            <span class="box-title">实际转入个账导入列表</span>
            <div class="box-tools">
              <el-form label-width="105px">
                <el-row :gutter="10">
                  <el-col :md="6" :lg="6" :xl="6">
                    <el-form-item label="总条数" prop="总条数">
                      <el-input v-model="searchForm.总条数" readonly />
                    </el-form-item>
                  </el-col>
                  <el-col :md="6" :lg="6" :xl="6">
                    <el-form-item label="总金额" prop="总金额">
                      <el-input v-model="searchForm.总金额" readonly />
                    </el-form-item>
                  </el-col>
                  <el-col :md="12" :lg="12" :xl="12">
                    <el-form-item label="">
                      <el-button type="primary">打印</el-button>
                      <el-button type="primary">导出</el-button>
                      <el-button type="primary">导入</el-button>
                      <el-button type="danger">删除</el-button>
                      <el-button type="primary">确认接收</el-button>
                    </el-form-item>
                  </el-col>
                </el-row>
              </el-form>

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
                <el-button type="text" class="modify" title="查看修改记录" :class="scope.$index" @click="isShowDetail = true">
                  <svg-icon icon-class="details" />
                </el-button>
                <el-button type="text" class="warning" title="修改" :class="scope.$index" @click="isShowEdit = true">
                  <svg-icon icon-class="edit" />
                </el-button>
                <el-button type="text" class="danger" title="删除" :class="scope.$index">
                  <svg-icon icon-class="delete" />
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
    <Detail :show.sync="isShowDetail" />
  </div>
</template>

<script>
import Bank from '@/components/Select/Bank'
import Edit from './dialog/edit'
import Detail from './dialog/detail'
export default {
  name: 'DepartmentMessageMaintenance',
  components: {
    Bank,
    Detail,
    Edit
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
          银行转入人姓名: '银行转入人姓名',
          接收状态: '接收状态',
          银行转出地: '银行转出地',
          银行转出地省属: '银行转出地省属',
          银行转出单位: '银行转出单位',
          银行转出账号: '银行转出账号',
          银行转出分行: '银行转出分行',
          银行到账金额: '银行到账金额',
          银行到账时间: '银行到账时间',
          数据接收时间: '数据接收时间',
          备注: '备注'
        }
      }),
      columns: [
        { type: 'selection' },
        { type: 'index', label: '序号', width: '55px' },
        { prop: '银行转入人姓名', label: '银行转入人姓名', align: 'center', overflow: true },
        { prop: '接收状态', label: '接收状态', align: 'center', overflow: true },
        { prop: '银行转出地', label: '银行转出地', align: 'center', overflow: true },
        { prop: '银行转出地省属', label: '银行转出地省属', align: 'center', overflow: true },
        { prop: '银行转出单位', label: '银行转出单位', align: 'center', overflow: true },
        { prop: '银行转出账号', label: '银行转出账号', align: 'center', overflow: true },
        { prop: '银行转出分行', label: '银行转出分行', align: 'center', overflow: true },
        { prop: '银行到账金额', label: '银行到账金额(元)', align: 'center', overflow: true },
        { prop: '银行到账时间', label: '银行到账时间', align: 'center', overflow: true },
        { prop: '数据接收时间', label: '数据接收时间', align: 'center', overflow: true },
        { prop: '备注', label: '备注', align: 'center', overflow: true },
        { type: 'operation', label: '操作', fixed: 'right', width: '200px' }
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
      height: calc(100% - 165px);
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

