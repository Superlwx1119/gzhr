<!-- 职工政策维护 -->
<template>
  <div class="third-index employee-policy-maintenance item2">
    <section class="layer layer-query">
      <div class="box">
        <ConditionHeader />
        <div class="box-body query">
          <el-form ref="searchForm" :model="searchForm" label-width="105px">
            <el-row :gutter="10">
              <el-col :md="12" :lg="8" :xl="6">
                <el-form-item label="险种" prop="xz">
                  <el-select v-model="searchForm.xz" style="width:100%;">
                    <el-option label="基本医疗保险" value="基本医疗保险" />
                    <el-option label="大额互助" value="大额互助" />
                    <el-option label="生育" value="生育" />
                    <el-option label="公务员" value="公务员" />
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :md="12" :lg="8" :xl="6">
                <el-form-item label="医保区划" prop="ybqh">
                  <el-select v-model="searchForm.ybqh" style="width:100%;" />
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
          <span class="box-title">职工政策列表</span>
          <div class="box-tools">
            <el-button type="primary" @click="add">新增</el-button>
            <el-button type="danger" @click="batchDelete">批量删除</el-button>
          </div>
        </div>
        <div class="box-body">
          <MyTableView :border="true" :columns="columns" :data="tableData" @update:multipleSelection="multipleSelection">
            <template slot="operation" slot-scope="scope">
              <el-button type="text" @click="modify(scope.row)">修改</el-button>
              <el-button type="text" style="color:red;" @click="deleteItem(scope.row)">删除</el-button>
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
import Add from './components/Add'
import Edit from './components/Edit'
export default {
  components: {
    Add,
    Edit
  },
  data() {
    return {
      searchForm: {
        ybqh: '',
        xz: '',
        fyssq: '',
        ysyjsdw: '',
        bndgzsb: '',
        zxsj: ''
      },
      columns: [
        { type: 'selection', label: '', width: '30px' },
        { label: '序号', type: 'index', width: '50' },
        { label: '统筹区', prop: 'tcq' },
        { label: '险种', prop: 'xz' },
        { label: '款项', prop: 'kx' },
        { label: '政策描述', prop: 'zcms' },
        { label: '计算周期', prop: 'jszq' },
        { label: '生效时间', prop: 'sxsj1' },
        { label: '失效时间', prop: 'sxsj2' },
        { label: '计算基数', prop: 'jsjs' },
        { label: '计算比率', prop: 'jsbl' },
        { type: 'operation', label: '操作' }
      ],
      tableData: [
        {
          tcq: 'xxx中心',
          xz: '基本医疗',
          kx: '单位缴纳',
          zcms: '基本医疗单位应缴',
          jszq: '年',
          sxsj1: '2000-01-01',
          sxsj2: '2099-12-31',
          jsjs: '个人工资【社平60%保底300%拦头】',
          jsbl: '单位缴纳8%'
        }
      ],
      selectRows: [],
      editVisible: false,
      addVisible: false,
      editForm: {}
    }
  },
  watch: {
  },
  methods: {
    reset(formName) {
      this.$refs[formName].resetFields()
    },
    search(formName) {},
    multipleSelection(val) {
      this.selectRows = val
    },
    add() {
      this.addVisible = true
    },
    batchDelete() {
      if (this.selectRows.length > 0) {
        this.$msgSuccess('删除成功！')
      } else {
        this.$msgError('请选择要操作的数据！')
      }
    },
    modify(row) {
      this.editVisible = true
      this.editForm = row
    },
    deleteItem(row) {
      this.$msgSuccess('删除成功！')
    }
  }
}
</script>
<style lang='scss' scoped>
</style>
