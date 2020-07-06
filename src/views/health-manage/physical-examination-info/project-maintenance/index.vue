<template>
  <!--  体检项目维护-->
  <div class="projectMaintenance item3">
    <section class="layer layer-query">
      <div class="box">
        <ConditionHeader />
        <div class="box-body query">
          <el-form ref="searchForm" :model="searchForm" label-width="105px">
            <el-row :gutter="10">
              <el-col :md="12" :lg="8" :xl="6">
                <el-form-item label="体检项目" prop="体检项目">
                  <health-project v-model="searchForm.体检项目" />
                </el-form-item>
              </el-col>
              <el-col :md="12" :lg="8" :xl="6">
                <el-form-item label="起止时间" prop="起止时间">
                  <el-date-picker v-model="searchForm.起止时间" style="width: 100%;height: 100%;" type="daterange" placeholder="选择时间" />
                </el-form-item>
              </el-col>
              <el-col :md="12" :lg="8" :xl="6">
                <el-form-item label="统计类别" prop="统计类别">
                  <statistical-type v-model="searchForm.统计类别" />
                </el-form-item>
              </el-col>
              <el-col :md="12" :lg="16" :xl="6" style="text-align: right">
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
          <span class="box-title">体检项目列表</span>
          <div class="box-tools">
            <el-button type="primary" @click="addVisible = true">新增</el-button>
            <el-button type="danger" @click="deleteAll">批量删除</el-button>
          </div>
        </div>
        <div class="box-body result">
          <MyTableView :border="true" :columns="columns" :data="tableData">
            <template slot="operation" slot-scope="scope">
              <el-button type="text" @click="handleEdit(scope.row)">修改</el-button>
            </template>
          </MyTableView>
          <Pagination />
        </div>
      </div>
    </section>
    <Add :show.sync="addVisible" />
    <Edit :show.sync="editVisible" :form="editForm" />
  </div>
</template>

<script>
import Add from './Add'
import Edit from './Edit'
import columns from './columns'
import StatisticalType from '@/components/Select/health-manage/StatisticalType'
import HealthProject from '@/components/Select/health-manage/HealthProject'
export default {
  name: 'ProjectMaintenance',
  components: {
    Add,
    Edit,
    StatisticalType,
    HealthProject
  },
  mixins: [],
  props: {},
  data() {
    return {
      addVisible: false,
      editVisible: false,
      searchForm: {
      },
      columns: columns,
      tableData: [
        { projectNo: 'AC001', projectName: '入职体检', type: '体检', price: '100', unit: '元', wubi: 'DUJK', pinyin: 'rztj', beginDate: '2020-06-01', endDate: '2020-06-07', people: 'xxx', date: '2020-02-02', remark: '无' }
      ],
      editForm: {}
    }
  },
  computed: {},
  watch: {},
  created() {
  },
  mounted() {
  },
  methods: {
    deleteAll() {
      this.$msgConfirm('是否删除？').then(res => {
        this.$msgSuccess('删除成功！')
      }).catch(err => {
        this.$msgInfo(err)
      })
    },
    reset(formName) {
      this.$refs[formName].resetFields()
    },
    search(formName) {},
    handleEdit(row) {
      this.editVisible = true
      this.editForm = row
    }
  }
}
</script>

<style scoped lang="scss"></style>
