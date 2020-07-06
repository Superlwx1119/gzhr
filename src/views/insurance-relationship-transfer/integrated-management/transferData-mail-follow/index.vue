<template>
  <!--  转移资料邮寄和跟进-->
  <div class="addEdit item4">
    <section class="layer layer-query">
      <div class="box">
        <ConditionHeader />
        <div class="box-body query">
          <el-form ref="searchForm" :model="searchForm" label-width="105px">
            <el-row :gutter="10">
              <el-col :md="12" :lg="8" :xl="6">
                <el-form-item label="查询条件" prop="查询条件">
                  <el-input v-model="searchForm.查询条件" placeholder="请在此输入身份证或姓名" />
                </el-form-item>
              </el-col>
              <el-col :md="12" :lg="8" :xl="6">
                <el-form-item label="姓名" prop="姓名">
                  <el-input v-model="searchForm.姓名" placeholder="请输入" />
                </el-form-item>
              </el-col>
              <el-col :md="12" :lg="8" :xl="6">
                <el-form-item label="证件号码" prop="证件号码">
                  <el-input v-model="searchForm.证件号码" placeholder="请输入" />
                </el-form-item>
              </el-col>
              <el-col :md="12" :lg="8" :xl="6">
                <el-form-item label="转入受理号" prop="转入受理号">
                  <el-input v-model="searchForm.转入受理号" placeholder="请输入" />
                </el-form-item>
              </el-col>
              <el-col :md="12" :lg="8" :xl="6">
                <el-form-item label="起止时间" prop="起止时间">
                  <el-date-picker
                    v-model="searchForm.起止时间"
                    style="width:100%"
                    type="daterange"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                  />
                </el-form-item>
              </el-col>
              <el-col :md="12" :lg="8" :xl="6">
                <el-form-item label="办理形式" prop="办理形式">
                  <el-select v-model="searchForm.办理形式" placeholder="请选择">
                    <el-option
                      v-for="item in typeOptions"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    />
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :md="12" :lg="8" :xl="6">
                <el-form-item label="经办部门" prop="经办部门">
                  <el-input v-model="searchForm.经办部门" placeholder="请输入" />
                </el-form-item>
              </el-col>
              <el-col :md="12" :lg="8" :xl="6">
                <el-form-item label="申请业务" prop="申请业务">
                  <TransferType v-model="searchForm.申请业务" />
                </el-form-item>
              </el-col>
              <el-col :md="12" :lg="8" :xl="6">
                <el-form-item label="跟进进度" prop="跟进进度">
                  <el-select v-model="searchForm.跟进进度" placeholder="请选择">
                    <el-option
                      v-for="item in followOptions"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    />
                  </el-select>
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
            <span class="box-title">转移资料邮寄和跟进列表</span>
            <div class="box-tools">
              <el-button type="primary">打印《联系函》</el-button>
              <el-button type="primary">打印《联系函》</el-button>
              <el-button type="primary">打印《变更表》</el-button>
              <el-button type="primary">导出</el-button>
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
                <el-button type="text" class="modify" title="跟进详情" :class="scope.$index" @click="isShowDetail = true">
                  <svg-icon icon-class="details" />
                </el-button>
              </template>
            </my-table-view>
            <Pagination :data="pageInfo" @refresh="pageChange" />
          </div>
        </div>
      </div>
    </section>
    <!-- 详情 -->
    <Detail :show.sync="isShowDetail" />
  </div>
</template>

<script>
import Detail from './dialog/detail'
import TransferType from '@/components/Select/TransferType'
export default {
  name: 'RelationshipAddEdit',
  components: {
    TransferType,
    Detail
  },
  mixins: [],
  props: {},
  data() {
    return {
      isShowDetail: false,
      isShowAdd: false,
      typeOptions: [
        { label: '自带办理', value: '1' },
        { label: '邮寄办理', value: '2' }
      ],
      followOptions: [
        { label: '已申请', value: '1' },
        { label: '已录入', value: '2' },
        { label: '已审核', value: '3' },
        { label: '已注资', value: '4' }
      ],
      searchForm: {},
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
          受理号: '受理号',
          事项类型: '事项类型',
          姓名: '姓名',
          证件号码: '证件号码',
          申请人联系电话: '申请人联系电话',
          异地机构代码: '异地机构代码',
          转出地经办机构: '转出地经办机构',
          转出地联系电话: '转出地联系电话',
          代办人联系电话: '代办人联系电话',
          申请时间: '申请时间',
          申请录入人: '申请录入人',
          最后一次跟进时间: '最后一次跟进时间',
          邮寄单号: '邮寄单号'
        }
      }),
      columns: [
        { type: 'selection' },
        { type: 'index', label: '序号', width: '55px' },
        { prop: '受理号', label: '受理号', align: 'center', overflow: true },
        { prop: '事项类型', label: '事项类型', align: 'center', overflow: true },
        { prop: '姓名', label: '姓名', align: 'center', overflow: true },
        { prop: '证件号码', label: '证件号码', align: 'center', overflow: true },
        { prop: '申请人联系电话', label: '申请人联系电话', align: 'center', overflow: true },
        { prop: '异地机构代码', label: '异地机构代码', align: 'center', overflow: true },
        { prop: '转出地经办机构', label: '转出地经办机构', align: 'center', overflow: true },
        { prop: '转出地联系电话', label: '转出地联系电话', align: 'center', overflow: true },
        { prop: '代办人联系电话', label: '代办人联系电话', align: 'center', overflow: true },
        { prop: '申请时间', label: '申请时间', align: 'center', overflow: true },
        { prop: '申请录入人', label: '申请录入人', align: 'center', overflow: true },
        { prop: '最后一次跟进时间', label: '最后一次跟进时间', align: 'center', overflow: true },
        { prop: '邮寄单号', label: '邮寄单号', align: 'center', overflow: true },
        { type: 'operation', label: '操作', fixed: 'right', width: '100px' }
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

