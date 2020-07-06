<template>
  <div class="item3 third-index inst-relationship-maint">
    <section class="layer layer-query">
      <div class="box">
        <div class="box-body">
          <el-form ref="searchForm" :model="searchForm" label-width="105px">
            <el-row :gutter="12">
              <el-col :md="12" :lg="8" :xl="6">
                <el-form-item label="台账年月" prop="backNuber">
                  <el-date-picker
                    v-model="searchForm.years"
                    type="monthrange"
                    range-separator="至"
                    start-placeholder="开始月份"
                    end-placeholder="结束月份"
                  />
                </el-form-item>
              </el-col>
              <el-col :md="12" :lg="8" :xl="6">
                <SelectForm
                  :search-form="searchForm"
                  :options="divisionOptions"
                  label-name="label"
                  value-name="value"
                  form-label="医保区划"
                  form-prop="division"
                />
              </el-col>
              <el-col :md="12" :lg="8" :xl="6">
                <SelectForm
                  :search-form="searchForm"
                  :options="FundingTypeOptions"
                  label-name="label"
                  value-name="value"
                  form-label="资助类型"
                  form-prop="FundingType"
                />
              </el-col>
              <!-- <el-col :md="12" :lg="8" :xl="6">
                <SelectForm
                  :search-form="searchForm"
                  :options="PleaseStateOptions"
                  label-name="label"
                  value-name="value"
                  form-label="请款状态"
                  form-prop="PleaseState"
                />
              </el-col> -->
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
        years: '',
        division: '',
        FundingType: '',
        PleaseState: ''
      },
      divisionOptions: [
        {
          value: '中央',
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
          prop: '台账年月',
          label: '台账年月'
        },
        {
          prop: '医保区划',
          label: '医保区划'
        },
        {
          prop: '资助类型',
          label: '资助类型'
        },

        {
          prop: '本期资助人数',
          label: '本期资助人数'
        },
        {
          prop: '累计资助人数',
          label: '累计资助人数'
        },
        {
          prop: '本期应资助总额',
          label: '本期应资助总额(元)'
        },
        {
          prop: '应拨基本医疗',
          label: '应拨基本医疗(元)'
        },

        {
          prop: '应资助大病补助',
          label: '应资助大病补助(元)'
        },
        {
          prop: '到账标志',
          label: '到账标志'
        },
        {
          prop: '到账日期',
          label: '到账日期'
        },
        {
          prop: '到账情况备注',
          label: '到账情况备注'
        }
      ],
      tableData: [{
        台账年月: '1201912',
        医保区划: '中央',
        资助类型: '全额资助',
        本期资助人数: '111',
        累计资助人数: '111',
        本期应资助总额: '2000',
        应拨基本医疗: '1234567',
        应资助大病补助: '1234',
        到账标志: '已到账',
        到账日期: '2019-08-27',
        到账情况备注: '2345678'
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
