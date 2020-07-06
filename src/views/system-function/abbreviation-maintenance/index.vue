<template>
  <div class="item2">
    <!-- 缩略语维护 -->
    <section class="layer layer-query">
      <div class="box">
        <ConditionHeader />
        <div class="box-body">
          <el-row :gutter="12">
            <el-form ref="searchForm" :model="searchForm" label-width="65px">
              <el-col :md="12" :lg="8" :xl="6">
                <el-form-item label="中文名称" prop="chineseName">
                  <el-input v-model="searchForm.chineseName" placeholder="请输入中文名称" clearable />
                </el-form-item>
              </el-col>
              <el-col :md="12" :lg="8" :xl="6">
                <el-form-item label="英文名称" prop="englishName">
                  <el-input v-model="searchForm.englishName" placeholder="请输入英文名称" clearable />
                </el-form-item>
              </el-col>
              <el-col :md="12" :lg="8" :xl="6">
                <el-button @click="reset">重置</el-button>
                <el-button type="primary" @click="search">查询</el-button>
              </el-col>
            </el-form>
          </el-row>
        </div>
      </div>
    </section>
    <section class="layer layer-result">
      <div class="box">
        <div class="box-header handle">
          <span class="box-title">查询结果</span>
          <div class="box-tools">
            <el-button type="success" @click="openDialog">新增</el-button>
          </div>
        </div>
        <div class="box-body search-result">
          <List :data="tableData" is-index :is-border="true" :operates="tableOperates" :columns="tableColumns" height="100%" />
          <Pagination @refresh="refresh" />
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
  // name: 'AbbreMaintenance',
  components: {
    'add-dialog': AddDialog,
    'modify-dialog': ModifyDialog
  },
  data() {
    return {
      addVisible: false,
      modifyVisible: false,
      searchForm: {
        chineseName: '',
        englishName: ''
      },
      modifyForm: {},
      tableData: [
        {
          id: '1',
          name: '王小虎',
          CnName: '事项',
          EngName: 'matter',
          EngAbbreviation: 'matt',
          domainAdmin: '',
          createdPerson: '系统管理员',
          createdTime: '2020-04-28'
        },
        {
          id: '2',
          name: '王小虎',
          CnName: '受理',
          EngName: 'accept',
          EngAbbreviation: 'acp',
          domainAdmin: '',
          createdPerson: '系统管理员',
          createdTime: '2020-04-28'
        },
        {
          id: '3',
          name: '王小虎',
          CnName: '状态',
          EngName: 'states',
          EngAbbreviation: 'stas',
          domainAdmin: '',
          createdPerson: '系统管理员',
          createdTime: '2020-04-28'
        }
      ],
      tableColumns: [
        { label: '中文名称', prop: 'CnName', sortable: false, align: 'center' },
        { label: '英文名称', prop: 'EngName', sortable: false, align: 'center' },
        { label: '英文缩略语', prop: 'EngAbbreviation', sortable: false, align: 'center' },
        { label: '管理域', prop: 'domainAdmin', sortable: false, align: 'center' },
        { label: '创建人', prop: 'createdPerson', sortable: false, align: 'center' },
        { label: '创建时间', prop: 'createdTime', sortable: false, align: 'center' }
      ],
      tableOperates: {
        width: '200px',
        list: [
          { show: true, label: '修改', type: 'text', method: (key, row, index) => {
            this.modifyVisible = true
            this.modifyForm = { ...row }
          } },
          { show: true, label: '删除', type: 'text',
            method: (key, row, index) => {
              this.$confirm(`<div class="myalert-header">操作提醒</div><div class="myalert-content">确认删除缩略语？</div></div>`, {
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
              })
            }
          }
        ]
      },
      AdminOptions: [{ label: '糖尿病', value: '1' }]
    }
  },
  mounted() {},
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
