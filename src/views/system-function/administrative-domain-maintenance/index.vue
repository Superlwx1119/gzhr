<template>
  <div class="item1">
    <section class="layer layer-query">
      <div class="box">
        <ConditionHeader />
        <div class="box-body">
          <el-form label-width="80px">
            <el-row :gutter="12">
              <el-col :md="12" :lg="8" :xl="6">
                <el-form-item label="管理域名称">
                  <el-input v-model="administrativeDomain" placeholder="请输入管理域名称" />
                </el-form-item>
              </el-col>
              <el-col :md="12" :lg="8" :xl="6">
                <el-button @click="reset">重置</el-button>
                <el-button type="primary" @click="search">查询</el-button>
              </el-col>
            </el-row>
          </el-form>
        </div>
      </div>
    </section>
    <section class="layer layer-result">
      <div class="box">
        <!-- <div class="box-header"> -->
        <div class="box-header handle">
          <!-- <div class="box-header handle small"> -->
          <span class="box-title">查询结果</span>
          <div class="box-tools">
            <!-- <el-button type="success" @click="addList">新增</el-button> -->
            <el-form :inline="true">
              <el-form-item label="审批人">
                <el-input v-model="administrativeDomain" placeholder="审批人" />
              </el-form-item>
              <el-button type="primary" @click="addList">查询</el-button>
            </el-form>
          </div>
        </div>
        <div class="box-body">
          <List height="100%" :is-border="true" :is-index="true" :columns="columns" :operates="tableOperates" :data="tableData" />
          <Pagination />
        </div>
      </div>
    </section>
    <EditDialog
      :dialog-title="dialogTitle"
      :administrative-domain-form="administrativeDomainForm"
      :is-dialog-visible="isDialogVisible"
      @saveAddministrativeDomain="saveAddministrativeDomain"
      @update:isShow="isShow"
    />
  </div>
</template>
<script>
import EditDialog from './components/EditDialog'
export default {
  components: {
    EditDialog
  },
  data() {
    return {
      administrativeDomain: '',
      columns: [
        {
          prop: 'operation',
          label: '操作',
          align: 'center'
        },
        {
          prop: 'administrativeDomainName',
          label: '管理域名称',
          align: 'center',
          overflow: true
        },
        {
          prop: 'description',
          label: '管理域描述',
          align: 'center'
        },
        {
          prop: 'founder',
          label: '创建人',
          align: 'center'
        },
        {
          prop: 'createTime',
          label: '创建时间',
          width: '100',
          align: 'center'
        }
      ],
      tableData: [
        {
          operation: '121212',
          administrativeDomainName: 'administrativeDomainName',
          description: 'description',
          founder: 'alex',
          createTime: '2020-05-09'
        },
        {
          operation: '121212',
          administrativeDomainName: 'administrativeDomainName',
          description: 'description',
          founder: 'alex',
          createTime: '2020-05-09'
        },
        {
          operation: '121212',
          administrativeDomainName: 'administrativeDomainName',
          description: 'description',
          founder: 'alex',
          createTime: '2020-05-09'
        },
        {
          operation: '121212',
          administrativeDomainName: 'administrativeDomainName',
          description: 'description',
          founder: 'alex',
          createTime: '2020-05-09'
        },
        {
          operation: '121212',
          administrativeDomainName: 'administrativeDomainName',
          description: 'description',
          founder: 'alex',
          createTime: '2020-05-09'
        },
        {
          operation: '121212',
          administrativeDomainName: 'administrativeDomainName',
          description: 'description',
          founder: 'alex',
          createTime: '2020-05-09'
        },
        {
          operation: '121212',
          administrativeDomainName: 'administrativeDomainName',
          description: 'description',
          founder: 'alex',
          createTime: '2020-05-09',
          width: 300
        },
        {
          operation: '121212',
          administrativeDomainName: 'administrativeDomainName',
          description: 'description',
          founder: 'alex',
          createTime: '2020-05-09',
          width: 200
        },
        {
          operation: '121212',
          administrativeDomainName: 'administrativeDomainName',
          description: 'description',
          founder: 'alex',
          createTime: '2020-05-09',
          width: 200
        },
        {
          operation: '121212',
          administrativeDomainName: 'administrativeDomainName',
          description: 'description',
          founder: 'alex',
          createTime: '2020-05-09',
          width: 200
        },
        {
          operation: '121212',
          administrativeDomainName: 'administrativeDomainName',
          description: 'description',
          founder: 'alex',
          createTime: '2020-05-09'
        }
      ],
      tableOperates: {
        fixed: 'right',
        width: '120',
        list: [
          {
            show: true,
            label: '修改',
            type: 'text',
            class: 'modify',
            method: (key, row, index) => {
              this.isDialogVisible = true
              this.dialogTitle = '修改管理域'
              this.administrativeDomainForm = { name: '123', description: '456' }
            }
          },
          {
            show: true,
            label: '删除',
            type: 'text',
            class: 'delete',
            method: (key, row, index) => {
              this.$confirm(`<div class="myalert-header">操作提醒</div><div class="myalert-content">确认删除管理域？</div></div>`, {
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
      isDialogVisible: false,
      dialogTitle: '',
      administrativeDomainForm: { name: '', description: '' }
    }
  },
  methods: {
    reset() {
      this.administrativeDomain = ''
    },
    search() {
      console.log('搜索管理域' + this.administrativeDomain)
    },
    addList() {
      this.dialogTitle = '新增管理域'
      this.administrativeDomainForm = { name: '', description: '' }
      this.isDialogVisible = true
    },
    saveAddministrativeDomain(data) {
      setTimeout(() => {
        this.isDialogVisible = false
        setTimeout(() => {
          this.$alert(`<div class="myalert-header">操作成功</div>
            <div class="myalert-content">保存成功</div>`, {
            dangerouslyUseHTMLString: true, confirmButtonText: '确定',
            type: 'success'
          })
        }, 200)
      }, 100)
    },
    isShow(v) {
      this.isDialogVisible = v
    }
  }
}
</script>
<style lang="scss" scoped>

</style>

