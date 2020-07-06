<template>
  <div class="entityObjectMaintenance item3">
    <!-- 实体对象维护 -->
    <section class="layer layer-query">
      <div class="box">
        <ConditionHeader />
        <div class="box-body">
          <el-form ref="searchForm" :model="searchForm" label-width="100px">
            <el-row :gutter="12">
              <el-col :md="12" :lg="8" :xl="6">
                <el-form-item label="实体对象编码" prop="code">
                  <el-input
                    v-model="searchForm.code"
                    clearable
                    style="width: 100%"
                    placeholder="请输入"
                  />
                </el-form-item>
              </el-col>
              <el-col :md="12" :lg="8" :xl="6">
                <el-form-item label="实体对象名称" prop="name">
                  <el-input
                    v-model="searchForm.name"
                    clearable
                    style="width: 100%"
                    placeholder="请输入"
                  />
                </el-form-item>
              </el-col>
              <el-col :md="12" :lg="8" :xl="6">
                <el-form-item label="实体对象名称" prop="name">
                  <el-input
                    v-model="searchForm.name"
                    clearable
                    style="width: 100%"
                    placeholder="请输入"
                  />
                </el-form-item>
              </el-col>
              <el-col :md="12" :lg="8" :xl="6">
                <el-button @click="restSearch">重置</el-button>
                <el-button type="primary" @click="search">查询</el-button>
              </el-col>
            </el-row>
          </el-form>
        </div>
      </div>
    </section>
    <section class="layer layer-result">
      <div class="box">
        <div class="box-header handle">
          <span class="box-title">查询结果</span>
          <div class="box-tools">
            <el-button type="primary" @click="handleAdd">新增</el-button>
          </div>
        </div>
        <div class="box-body">
          <List :data="tableData" is-index :is-border="true" height="100%" :columns="tableColumns" :operates="tableOperates" />
          <Pagination @refresh="refresh" />
        </div>
      </div>
    </section>
    <!--    新增弹窗-->
    <add-dialog :show="addShow" title="新增实体对象" @update:show="updateShow" />
    <!--    修改弹窗-->
    <edit-dialog :form="editForm" :show="editVisible" @update:show="editShow" />
  </div>
</template>

<script>
import AddDialog from './components/add'
import EditDialog from './components/edit'
export default {
  name: '',
  components: {
    'add-dialog': AddDialog,
    'edit-dialog': EditDialog
  },
  mixins: [],
  props: {},
  data() {
    return {
      addShow: false,
      editVisible: false,
      editForm: {},
      searchForm: {
        name: '',
        code: ''
      },
      tableColumns: [
        { label: '实体对象编码', prop: 'objectCode', sortable: false, align: 'center', overflow: true },
        { label: '实体对象名称', prop: 'objectName', sortable: false, align: 'center', overflow: true },
        { label: '实体对象标识符', prop: 'objectIdentifier', sortable: false, align: 'center', overflow: true },
        { label: '分配方案', prop: 'plan', sortable: false, align: 'center', overflow: true },
        { label: '数据元标识符', prop: 'dataIdentifier', sortable: false, align: 'center', overflow: true },
        { label: '管理域', prop: 'manageDomain', sortable: false, align: 'center', overflow: true }
      ],
      tableData: [
        { id: 1, objectCode: 'FLKABHJK2020JFAH', objectName: '终端指令', objectIdentifier: 'CK', plan: '随意', dataIdentifier: 'SY', manageDomain: 'Domain' },
        { id: 2, objectCode: 'G20200508HGBHAK001', objectName: '究极变换形态', objectIdentifier: 'Dior', plan: '正则', dataIdentifier: 'ZZ', manageDomain: 'Domain' }
      ],
      tableOperates: {
        width: '200px',
        list: [
          { show: true, label: '修改', type: 'text', method: (key, row, index) => {
            this.editVisible = true
            this.editForm = { ...row }
          } },
          { show: true, label: '删除', type: 'text', method: (key, row, index) => {
            this.handleDelete(row.manageDomain)
          } }
        ]
      }
    }
  },
  computed: {},
  watch: {},
  created() {
  },
  mounted() {
  },
  methods: {
    search() {
    },
    restSearch() {
    },
    refresh(v) {
      console.log(v)
    },
    handleAdd() {
      this.addShow = true
    },
    updateShow(v) {
      this.addShow = v
    },
    editShow(v) {
      this.editVisible = v
    },
    //  点击删除
    handleDelete(delName) {
      this.$confirm(`<div class="myalert-header">操作提醒</div><div class="myalert-content">确认删除` + delName + `？</div></div>`, {
        confirmButtonText: '确定',
        dangerouslyUseHTMLString: true,
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          dangerouslyUseHTMLString: true,
          message: `<strong>操作成功<[表情]><p>删除成功</p>`
        })
      }).catch(() => {
        // this.$message({
        //   type: 'info',
        //   message: '已取消删除'
        // })
      })
    }
  }
}
</script>

<style scoped lang="scss">

</style>
