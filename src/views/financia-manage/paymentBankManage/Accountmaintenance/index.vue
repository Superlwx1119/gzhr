<template>
  <div class="item2 third-index inst-relationship-maint">
    <section class="layer layer-query">
      <div class="box">
        <div class="box-body">
          <el-form ref="searchForm" :model="searchForm" label-width="105px">
            <el-row :gutter="12">
              <el-col :md="12" :lg="8" :xl="6">
                <el-form-item label="银行编号" prop="backNuber">
                  <el-input v-model="searchForm.backNuber" placeholder="请输入" />
                </el-form-item>
              </el-col>
              <el-col :md="12" :lg="8" :xl="6">
                <el-form-item label="银行名称" prop="backName">
                  <el-input v-model="searchForm.backName" placeholder="请输入" />
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
          <span class="box-title">转入个账接收账户维护</span>
          <div class="box-tools">
            <el-button type="primary" @click="Addnew">新增</el-button>
          </div>
        </div>
        <div class="box-body">
          <MyTableView
            :columns="tableColumns"
            :data="tableData"
            :border="true"
            @update:multipleSelection="multipleSelection"
          >
            <template slot="operation" slot-scope="scope">
              <el-button type="text" @click="editor(scope.row)">编辑</el-button>
              <el-button type="text" @click="changek(scope.row)">查看变更</el-button>
            </template>
          </MyTableView>
          <Pagination />
        </div>
      </div>
    </section>
    <Add :show.sync="control" :bounced-title="printTitle" />
    <Detailsthebase :show.sync="visible" :bounced-title="bouncedTitle" />
  </div>
</template>

<script>
import Add from './components/Add'
import Detailsthebase from './components/Detailsthebase'
export default {
  components: {
    Add,
    Detailsthebase
  },
  props: {

  },
  data() {
    return {
      control: false,
      printTitle: '',
      visible: false,
      bouncedTitle: '',
      searchForm: {
        backNuber: '',
        backName: ''
      },
      tableColumns: [
        { label: '序号', type: 'index', width: '50' },
        {
          prop: '账户编码',
          label: '账户编码'
        },
        {
          prop: '机构编码',
          label: '机构编码'
        },
        {
          prop: '机构名称',
          label: '机构名称'
        },
        {
          prop: '开户银行',
          label: '开户银行'
        },
        {
          prop: '银行行号',
          label: '银行行号'
        },
        {
          prop: '开户名称',
          label: '开户名称'
        },
        {
          prop: '银行账号',
          label: '银行账号'
        },
        {
          label: '操作',
          type: 'operation'
        }
      ],
      tableData: [{
        账户编码: '1',
        机构编码: '440000001',
        机构名称: 'XX市医保中心',
        开户银行: 'XX银行广州市流花支',
        银行行号: 'XXXX',
        开户名称: 'XX市医疗保险服务管理局',
        银行账号: 'XXXXXXXXX'
      }]
    }
  },
  computed: {

  },
  watch: {

  },
  created() {

  },
  mounted() {

  },
  methods: {
    reset(searchForm) {
      this.$refs.searchForm.resetFields()
    },
    search() {},
    Addnew() {
      this.control = true
      this.printTitle = '新增转入个账接收账户'
    },
    changek() {
      this.visible = true
      this.bouncedTitle = '变更日志'
    },
    editor() {
      this.control = true
      this.printTitle = '修改转入个账接收账户'
    },
    multipleSelection() {

    }
  }
}
</script>

<style scoped lang="scss">

</style>
