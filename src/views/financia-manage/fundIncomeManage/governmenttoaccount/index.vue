<template>
  <div class="item4 third-index inst-relationship-maint">
    <section class="layer layer-query">
      <div class="box">
        <div class="box-body">
          <el-form ref="searchForm" :model="searchForm" label-width="105px">
            <el-row :gutter="12">
              <el-col :md="12" :lg="8" :xl="6">
                <el-form-item label="开始结束时间" prop="date">
                  <el-date-picker
                    v-model="searchForm.date"
                    type="daterange"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                  />
                </el-form-item>
              </el-col>
              <el-col :md="12" :lg="8" :xl="6">
                <SelectForm
                  :search-form="searchForm"
                  :options="divisionOptions"
                  label-name="label"
                  value-name="value"
                  form-label="业务状态"
                  form-prop="division"
                />
              </el-col>
              <el-col :md="12" :lg="8" :xl="6">
                <el-form-item label="政府资助标准" prop="central">
                  <el-input v-model="searchForm.FundingType" placeholder="请输入" />
                </el-form-item>
              </el-col>
              <el-col :md="12" :lg="8" :xl="6">
                <el-form-item label="中央资助标准" prop="central">
                  <el-input v-model="searchForm.central" placeholder="请输入" />
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
          <!-- <div class="box-tools">
            <el-button type="primary" @click="Addnew">新增</el-button>
            <el-button type="primary" @click="confirm">确认</el-button>
          </div> -->
        </div>
        <div class="box-body">
          <MyTableView
            :columns="tableColumns"
            :data="tableData"
            :border="true"
            @update:multipleSelection="multipleSelection"
          >
            <!-- <template slot="operation" slot-scope="scope">
              <el-button type="text" @click="Checkthedetails(scope.row)">查看明细</el-button>
            </template> -->
          </MyTableView>
          <Pagination />
        </div>
      </div>
    </section>

  </div>
</template>

<script>
import SelectForm from '@/components/Select/FormComponents/SelectForm'
export default {
  components: {
    SelectForm
  },
  props: {

  },
  data() {
    return {
      control: false,
      printTitle: '',
      searchForm: {
        date: '',
        division: '',
        FundingType: '',
        central: ''
      },
      divisionOptions: [
        {
          value: '已复核',
          lable: '1'
        }
      ],
      FundingTypeOptions: [
        {
          value: '全额资助',
          lable: '1'
        }
      ],
      PleaseStateOptions: [
        {
          value: '全部',
          lable: '1'
        }
      ],
      tableColumns: [
        // {
        //   type: 'selection', label: '', width: '30px'
        // },
        { label: '序号', type: 'index', width: '50' },
        {
          prop: '业务状态',
          label: '业务状态'
        },
        {
          prop: '政府资助标准',
          label: '政府资助标准'
        },
        {
          prop: '中央资助标准',
          label: '中央资助标准'
        },

        {
          prop: '缴费人数',
          label: '缴费人数'
        }
      ],
      tableData: [{
        业务状态: '1201912',
        政府资助标准: '中央',
        中央资助标准: '全额资助',
        缴费人数: '111'
      }],
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
    search() {

    },
    // Checkthedetails() {
    //   this.visible = true
    //   this.bouncedTitle = '个人明细信息'
    // },
    // Addnew() {
    //   this.control = true
    //   this.printTitle = '社申资助到账信息录入'
    // },
    // confirm() {

    // },
    multipleSelection(v) {
      this.selectItem = v
    }
    // closeAuditDialog() {
    //   this.reviewDialogVisible = false
    // }
  }
}
</script>

<style scoped lang="scss">

</style>
