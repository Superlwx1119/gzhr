<template>
  <div class="businessCheckControlParamMaintenance item5">
    <section class="layer layer-query">
      <div class="box">
        <ConditionHeader />
        <div class="box-body query">
          <el-form ref="searchForm" :model="searchForm" label-width="105px">
            <el-row :gutter="10">
              <el-col :md="12" :lg="8" :xl="6">
                <el-form-item label="参数代码" prop="参数代码">
                  <el-input v-model="searchForm.参数代码" placeholder="请输入" />
                </el-form-item>
              </el-col>
              <el-col :md="12" :lg="8" :xl="6">
                <el-form-item label="参数名称" prop="参数名称">
                  <el-input v-model="searchForm.参数名称" placeholder="请输入" />
                </el-form-item>
              </el-col>
              <el-col :md="12" :lg="8" :xl="6">
                <el-form-item label="审核状态" prop="参数名称">
                  <el-select v-model="searchForm.审核状态" style="width: 100%" placeholder="请输入" />
                </el-form-item>
              </el-col>
              <el-col :md="12" :lg="8" :xl="6">
                <el-form-item label="结束时间" prop="结束时间">
                  <el-date-picker
                    v-model="searchForm.结束时间"
                    type="date"
                    style="height: 100%"
                    placeholder="结束时间"
                  />
                </el-form-item>
              </el-col>
              <el-col :md="12" :lg="8" :xl="6">
                <el-form-item label="开始时间" prop="开始时间">
                  <el-date-picker
                    v-model="searchForm.开始时间"
                    type="date"
                    style="height: 100%"
                    placeholder="开始日期"
                  />
                </el-form-item>
              </el-col>
              <el-col :md="12" :lg="8" :xl="6">
                <el-button @click="reset('searchForm')">重置</el-button>
                <el-button type="primary" @click="search('searchForm')">查询</el-button>
              </el-col>
            </el-row>
          </el-form>
        </div>
      </div>
    </section>
    <section class="layer layer-result">
      <div class="box">
        <div class="box-header handle">
          <span class="box-title">系统参数审核</span>
          <div class="box-tools">
            <el-button type="primary" @click="add()">批量审核</el-button>
          </div>
        </div>
        <div class="box-body result">
          <!--          <expand-list :is-index="true" :is-selection="true" :is-border="true" :columns="tableColumns" :operates="tableOperates" :data="tableData" />-->
          <List height="100%" is-selection :is-border="true" :is-index="true" :columns="tableColumns" :operates="tableOperates" :data="tableData" />
          <Pagination />
        </div>
      </div>
    </section>
    <Add :dialogtitle="dialogtitle" :show.sync="addVisible" />
    <!--    <Edit :show.sync="editVisible" />-->
  </div>
</template>

<script>
// import ParamStatus from '@/components/Select/policy-param-manage/ParamStatus'
import Add from './add'
// import Edit from './edit'
export default {
  name: '',
  components: {
    // ParamStatus,
    Add
    // Edit
  },
  mixins: [],
  props: {},
  data() {
    return {
      dialogtitle: '',
      addVisible: false,
      editVisible: false,
      searchForm: {},
      tableColumns: [
        { label: '审核状态', prop: '审核状态', align: 'center', overflow: true },
        { label: '参数名称', prop: '参数名称', align: 'center', overflow: true },
        { label: '参数代码', prop: '参数代码', align: 'center', overflow: true },
        { label: '参数值', prop: '参数值', align: 'center', overflow: true },
        { label: '有效开始时间', prop: '开始日期', align: 'center', overflow: true },
        { label: '有效结束时间', prop: '结束日期', align: 'center', overflow: true },
        { label: '备注', prop: '备注', align: 'center', overflow: true },
        { label: '最后操作人', prop: '最后操作人', align: 'center', overflow: true },
        { label: '最后操作时间', prop: '最后操作时间', align: 'center', overflow: true }
      ],
      tableOperates: {
        fixed: 'right',
        width: '120px',
        list: [
          { show: true, type: 'text', label: '审核', method: (key, row, index) => {
            this.addVisible = true
            this.dialogtitle = '审核'
          } }
        ]
      },
      tableData: [1, 2, 3, 4, 5, 6, 7].map(item => {
        return { '参数名称': '参数名称', '参数代码': '参数代码', '医疗类别': '医疗类别',
          '人员类别': '人员类别', '参数编码': '参数编码', '参数值': '参数值',
          '参数描述': '参数描述', '开始日期': '开始日期', '结束日期': '结束日期',
          '备注': '备注', '最后操作人': '最后操作人', '最后操作时间': '最后操作时间', '审核状态': '审核状态' }
      })
    }
  },
  computed: {},
  watch: {},
  created() {
  },
  mounted() {
  },
  methods: {
    add() {
      this.addVisible = true
      this.dialogtitle = '批量审核'
    },
    reset(formName) {
      this.$refs[formName].resetFields()
    },
    search(formName) {}
  }
}
</script>

<style scoped lang="scss">
  .el-date-editor{
    width: 100%;
  }
</style>
