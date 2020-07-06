<template>
  <div class="item2 third-index inst-relationship-maint">
    <section class="layer layer-query">
      <div class="box">
        <div class="box-body">
          <el-form ref="searchForm" :model="searchForm" label-width="105px">
            <el-row :gutter="12">
              <el-col :md="12" :lg="8" :xl="6">
                <el-form-item label="银行行号" prop="backNuber">
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
          <span class="box-title">基础银行信息维护汇总</span>
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
              <el-button type="text" @click="deleteData(scope.row)">删除</el-button>
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
  props: {},
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
          prop: '银行名称',
          label: '银行名称'
        },
        {
          prop: '是否注资处理银行',
          label: '是否注资处理银行'
        },
        {
          prop: '是否支出户银行',
          label: '是否支出户银行'
        },
        {
          prop: '是否零报处理银行',
          label: '是否零报处理银行'
        },
        {
          prop: '注资处理银行',
          label: '注资处理银行'
        },
        {
          prop: '支出户银行',
          label: '支出户银行'
        },
        {
          prop: '零报处理银行',
          label: '零报处理银行'
        },
        {
          label: '操作',
          type: 'operation'
        }
      ],
      tableData: [
        {
          银行名称: '农业银行',
          是否注资处理银行: '是',
          是否支出户银行: '是',
          是否零报处理银行: '是',
          注资处理银行: '是',
          支出户银行: '是',
          零报处理银行: '是'
        }
      ]
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    reset(searchForm) {
      this.$refs.searchForm.resetFields()
    },
    search() {},
    Addnew() {
      this.control = true
      this.printTitle = '新增银行信息'
    },
    editor() {
      this.control = true
      this.printTitle = '修改银行信息'
    },
    deleteData() {
      this.$msgConfirm('是否删除？')
        .then(res => {
          this.$msgSuccess(res)
        })
        .catch(err => {
          this.$msgInfo(err)
        })
    },
    changek() {
      this.visible = true
      this.bouncedTitle = '变更日志'
    },
    multipleSelection() {}
  }
}
</script>

<style scoped lang="scss">
</style>
