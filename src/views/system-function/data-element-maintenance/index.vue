<template>
  <!-- 数据元维护 -->
  <div class="item2">
    <section class="layer layer-query">
      <div class="box">
        <ConditionHeader />
        <div class="box-body">
          <el-row :gutter="12">
            <el-form ref="searchForm" :model="searchForm" label-width="100px">
              <el-col :md="12" :lg="8" :xl="6">
                <el-form-item label="数据元编码" prop="Code">
                  <el-input v-model="searchForm.Code" placeholder="请输入数据元编码" clearable />
                </el-form-item>
              </el-col>
              <el-col :md="12" :lg="8" :xl="6">
                <el-form-item label="数据元中文名" prop="CnName">
                  <el-input
                    v-model="searchForm.CnName"
                    placeholder="请输入数据元中文名"
                    clearable
                  />
                </el-form-item>
              </el-col>
              <el-col :md="12" :lg="8" :xl="12">
                <el-button @click="reset">重置</el-button>
                <el-button type="primary" @click="search">查询</el-button>
              </el-col>
            </el-form>
          </el-row>
        </div>
        <div />

      </div>
    </section>
    <section class="layer layer-result">
      <div class="box">
        <div class="box-header handle">
          <span class="box-title">查询结果</span>
          <div class="box-tools">
            <el-button type="primary" @click="openDialog">新增</el-button>
          </div>
        </div>
        <div class="box-body search-result">
          <List height="100%" :is-index="true" :is-border="true" :columns="tableColumns" :operates="tableOperates" :data="tableData" />
          <Pagination />
        </div>
      </div>
    </section>
    <!-- 新增弹窗-->
    <add-dialog :show="addVisible" @update:show="addShow" />

    <!-- 修改弹窗 -->
    <modify-dialog :form="modifyForm" :show="modifyVisible" @update:show="modifyShow" />
  </div>
</template>

<script>
import AddDialog from './components/add'
import ModifyDialog from './components/modify'
export default {
  // name: 'DataSourceMaintenance',
  components: {
    'add-dialog': AddDialog,
    'modify-dialog': ModifyDialog
  },
  data() {
    return {
      addVisible: false,
      modifyVisible: false,
      searchForm: {
        Code: '',
        CnName: ''
      },
      modifyForm: {},
      tableData: [{
        id: '1',
        Identifier: '事项', // 数据元标识符
        Code: 'matter', // 数据元编码
        CnName: 'matt', // 数据元中文名
        domainAdmin: '', // 管理域
        DataElementType: '系统管理员', // 数据元类型
        Precision: '2020-04-28'// 数据元精度
      }, {
        id: '2',
        Identifier: '受理', // 数据元标识符
        Code: 'accept', // 数据元编码
        CnName: 'acp', // 数据元中文名
        domainAdmin: '', // 管理域
        DataElementType: '系统管理员', // 数据元类型
        Precision: '2020-04-28'// 数据元精度
      }, {
        id: '3',
        Identifier: '状态', // 数据元标识符
        Code: 'states', // 数据元编码
        CnName: 'stas', // 数据元中文名
        domainAdmin: '', // 管理域
        DataElementType: '系统管理员', // 数据元类型
        Precision: '2020-04-28'// 数据元精度
      }],
      tableOperates: {
        width: '200px',
        list: [
          { show: true, label: '修改', type: 'text',
            method: (key, row, index) => {
              this.modifyVisible = true
              this.modifyForm = { ...row }
            } },
          { show: true, label: '删除', type: 'text',
            method: (key, row, index) => {
              this.$confirm(`<div class="myalert-header">操作提醒</div><div class="myalert-content">确认删除数据元？</div></div>`, {
                confirmButtonText: '确定',
                dangerouslyUseHTMLString: true,
                cancelButtonText: '取消',
                type: 'warning'
              }).then(() => {
                this.$message({
                  type: 'success',
                  dangerouslyUseHTMLString: true,
                  message: `<strong>操作成功</strong><p>删除成功</p>`
                })
              }).catch(() => {
                // this.$message({
                //   type: 'info',
                //   message: '已取消删除'
                // })
              })
            }
          }
        ]
      },
      tableColumns: [
        { label: '数据元标识符', prop: 'Identifier', sortable: false, align: 'center' },
        { label: '数据元编码', prop: 'Code', sortable: false, align: 'center' },
        { label: '数据元中文名', prop: 'CnName', sortable: false, align: 'center' },
        { label: '管理域', prop: 'domainAdmin', sortable: false, align: 'center' },
        { label: '数据元类型', prop: 'DataElementType', sortable: false, align: 'center' },
        { label: '数据元精度', prop: 'Precision', sortable: false, align: 'center' }
      ],
      rules: {
        Identifier: [{ required: true, message: '请输入数据元标识符', trigger: 'blur' }],
        Code: [{ required: true, message: '请输入数据元编码', trigger: 'blur' }],
        CnName: [{ required: true, message: '请输入数据元中文名', trigger: 'blur' }],
        DataElementType: [{ required: true, message: '请选择数据元类型', trigger: 'blur' }],
        Precision: [{ required: true, message: '请输入数据元精度', trigger: 'blur' }]
      },
      AdminOptions: [
        { label: '糖尿病', value: '1' }
      ],
      TypeOptions: [
        { label: '糖尿病', value: '1' }
      ]
    }
  },
  mounted() {

  },
  methods: {
    // 新增按钮
    openDialog() {
      this.addVisible = true
    },
    addShow(v) {
      this.addVisible = v
    },
    modifyShow(v) {
      this.modifyVisible = v
    },
    refresh(v) {
      console.log(v)
    },
    // 查询按钮
    search() {},
    // 重置按钮
    reset() {}
  }
}
</script>
<style lang="scss" scoped>

</style>
