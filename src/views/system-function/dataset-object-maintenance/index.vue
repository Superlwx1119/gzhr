<template>
  <div class="entityObjectMaintenance item4">
    <!-- 数据集对象维护 -->
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
                <el-form-item label="数据元编码" prop="dataCode">
                  <el-input
                    v-model="searchForm.dataCode"
                    clearable
                    style="width: 100%"
                    placeholder="请输入"
                  />
                </el-form-item>
              </el-col>
              <el-col :md="12" :lg="8" :xl="6">
                <el-form-item label="数据元中文名" prop="dataName">
                  <el-input
                    v-model="searchForm.dataName"
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
    <add-dialog :show="addVisible" @update:show="addShow" />
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
      addVisible: false,
      editVisible: false,
      editForm: {},
      searchForm: {
        name: '',
        code: '',
        dataCode: '',
        dataName: ''
      },
      tableColumns: [
        { label: '管理域', prop: 'manageDomain', sortable: false, align: 'center', overflow: true },
        { label: '实体对象编码', prop: 'objectCode', sortable: false, align: 'center', overflow: true },
        { label: '实体对象名称', prop: 'objectName', sortable: false, align: 'center', overflow: true },
        { label: '实体对象标识符', prop: 'objectIdentifier', sortable: false, align: 'center', overflow: true },
        { label: '数据元标识符', prop: 'dataIdentifier', sortable: false, align: 'center', overflow: true },
        { label: '数据元编码', prop: 'dataCode', sortable: false, align: 'center', overflow: true },
        { label: '数据元中文名', prop: 'dataName', sortable: false, align: 'center', overflow: true },
        { label: '数据元类型', prop: 'dataType', sortable: false, align: 'center', overflow: true },
        { label: '数据元精度', prop: 'dataPrecision', sortable: false, align: 'center', overflow: true },
        { label: '解决方案', prop: 'plan', sortable: false, align: 'center', overflow: true }
      ],
      tableData: [
        { id: 1, objectCode: 'FLKABHJK2020JFAH', objectName: '终端指令', objectIdentifier: 'CK', plan: '随意', dataIdentifier: 'SY', manageDomain: 'Domain', dataCode: 'AXX', dataName: '阿夏夏', dataType: '鱼', dataPrecision: '百分' },
        {
          id: 2,
          objectCode: 'G20200508HGBHAK001',
          objectName: '究极变换形态',
          objectIdentifier: 'Dior',
          plan: '正则',
          dataIdentifier: 'ZZ',
          manageDomain: 'Domain',
          dataCode: 'PTY',
          dataName: '胖头鱼',
          dataType: '鱼',
          dataPrecision: '千分'
        }
      ],
      tableOperates: {
        width: '200px',
        list: [
          { show: true, label: '修改', type: 'text', method: (key, row, index) => {
            this.editVisible = true
            this.editForm = { ...row } //  赋值引用类型数据，建立一个新的引用，防止影响原数据
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
    //  新增按钮
    handleAdd() {
      this.addVisible = true
    },
    //  新增弹窗
    addShow(v) {
      this.addVisible = v
    },
    //  修改弹窗
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
