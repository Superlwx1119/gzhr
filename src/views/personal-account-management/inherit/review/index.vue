<template>
  <div class="item5 third-index inst-relationship-maint">
    <section class="layer layer-query">
      <div class="box">
        <!-- <div class="box-header handle">
          <span class="box-title">人员基本信息</span>
        </div> -->
        <div class="box-body">
          <el-form ref="searchForm" :model="searchForm" label-width="105px">
            <el-row :gutter="12">
              <el-col :md="12" :lg="8" :xl="6">
                <el-form-item label="查询条件" prop="conditions">
                  <el-input v-model="searchForm.conditions" placeholder="在此入身份证或者姓名" />
                </el-form-item>
              </el-col>
              <el-col :md="12" :lg="8" :xl="6">
                <el-form-item label="姓名" prop="name">
                  <el-input v-model="searchForm.name" placeholder="请输入" />
                </el-form-item>
              </el-col>
              <el-col :md="12" :lg="8" :xl="6">
                <el-form-item label="证件号码" prop="certificate">
                  <el-input v-model="searchForm.certificate" placeholder="请输入" />
                </el-form-item>
              </el-col>
              <el-col :md="12" :lg="8" :xl="6">
                <SelectForm
                  :search-form="searchForm"
                  :options="categoryOptions"
                  label-name="label"
                  value-name="value"
                  form-label="见证类别"
                  form-prop="category"
                />
              </el-col>
              <el-col :md="12" :lg="8" :xl="6">
                <DateSelect
                  :search-form="searchForm"
                  form-label="日期"
                  form-prop="dateBelongs"
                  format="yyyy-MM-dd"
                  value-format="yyyy-MM-dd"
                  date-type="daterange"
                />
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
          <span class="box-title">清退明细信息</span>
          <div class="box-tools">
            <el-button type="primary" @click="review">批量审核</el-button>

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
              <el-button type="text" @click="audit(scope.row)">审核</el-button>
            </template>
          </MyTableView>
          <Pagination />
        </div>
      </div>
    </section>
    <AuditDialog :is-dialog-visible="reviewDialogVisible" :dialog-title="reviewDialogTitle" @closeAll="closeAuditDialog" />
  </div>
</template>

<script>
import DateSelect from '@/components/Select/FormComponents/DateSelect'
import SelectForm from '@/components/Select/FormComponents/SelectForm'
import AuditDialog from '@/views/components/AuditDialog'
export default {
  components: {
    DateSelect,
    SelectForm,
    AuditDialog
  },
  props: {

  },
  data() {
    return {
      reviewDialogVisible: false,
      reviewDialogTitle: '',

      searchForm: {
        conditions: '',
        name: '',
        certificate: '',
        dateBelongs: '',
        category: ''
      },
      categoryOptions: [
        {
          value: '未继承',
          label: '1'
        }
      ],
      tableColumns: [
        {
          type: 'selection',
          label: '',
          width: '30px'
        },
        { label: '序号', type: 'index', width: '50' },

        {
          prop: '证件号码',
          label: '证件号码'
        },
        {
          prop: '姓名',
          label: '姓名'
        },

        {
          prop: '账户余额',
          label: '账户余额(元)'
        },

        {
          prop: '个人账户状态',
          label: '个人账户状态'
        },

        {
          prop: '继承人姓名',
          label: '继承人姓名'
        },

        {
          prop: '继承人员证件号码',
          label: '继承人员证件号码'
        },

        {
          prop: '继承人账户余额',
          label: '继承人账户余额(元)'
        },
        {
          prop: '继承人账户状态',
          label: '继承人账户状态'
        },
        {
          prop: '申请时间',
          label: '申请时间'
        },
        {
          label: '操作',
          type: 'operation'
        }
      ],
      tableData: [
        {
          证件号码: '430223XXXXXXXX1235',
          姓名: '张三',
          账户余额: '100.01',
          个人账户状态: '正常',
          继承人姓名: '李四',
          继承人员证件号码: '2020-01-01',
          继承人账户余额: 'xxxxxxxxxxx',
          继承人账户状态: '正常',
          申请时间: '2020-01-03 10:10:10'
        }
      ],
      selectItem: []
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

    review() {
      if (this.selectItem.length <= 0) {
        this.$msgInfo('请先选择需要处理的行')
      } else {
        this.reviewDialogVisible = true
        this.reviewDialogTitle = '个人账户预划审核'
      }
    },
    audit() {
      this.reviewDialogVisible = true
      this.reviewDialogTitle = '个人账户预划审核'
    },
    multipleSelection(v) {
      this.selectItem = v
    },
    closeAuditDialog() {
      this.reviewDialogVisible = false
    }
  }
}
</script>

<style scoped lang="scss">

</style>
