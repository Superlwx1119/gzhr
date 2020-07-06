<template>
  <div class="item4 third-index inst-relationship-maint">
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
              <el-col :md="12" :lg="8" :xl="6">
                <SelectForm
                  :search-form="searchForm"
                  :options="markOptions"
                  label-name="label"
                  value-name="value"
                  form-label="到账标志"
                  form-prop="mark"
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
          <span class="box-title">转入个账接收账户维护</span>
          <div class="box-tools">
            <!-- <el-button type="primary" @click="Addnew">新增</el-button> -->
            <el-button type="primary" @click="confirm">到账确认</el-button>
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
              <el-button type="text" @click="Checkthedetails(scope.row)">查看明细</el-button>
            </template>
          </MyTableView>
          <Pagination />
        </div>
      </div>
    </section>
    <Detailsthebase :show.sync="visible" :bounced-title="bouncedTitle" />
  </div>
</template>

<script>
import SelectForm from '@/components/Select/FormComponents/SelectForm'
import Detailsthebase from './components/Detailsthebase'

export default {
  components: {
    SelectForm,
    Detailsthebase
  },
  props: {},
  data() {
    return {
      visible: false,
      bouncedTitle: '',
      searchForm: {
        years: '',
        month: '',
        date: '',
        division: '',
        FundingType: ''
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
      markOptions: [
        {
          value: '全部',
          lable: '1'
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
          prop: '台账期间',
          label: '台账期间'
        },
        {
          prop: '人员类别',
          label: '人员类别'
        },
        {
          prop: '民政资助类别',
          label: '民政资助类别'
        },
        {
          prop: '应资助人次',
          label: '应资助人次'
        },
        {
          prop: '应资助金额',
          label: '应资助金额(元)'
        },
        {
          prop: '到账标志',
          label: '到账标志'
        },
        {
          prop: '医保区划',
          label: '医保区划'
        },
        {
          label: '操作',
          type: 'operation'
        }
      ],
      tableData: [
        {
          台账期间: '1201912',
          人员类别: '中央',
          民政资助类别: '全额资助',
          应资助人次: '123',
          应资助金额: '111',
          到账标志: '已到账',
          医保区划: '中央'
        }
      ],
      selectItem: []
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

    Checkthedetails() {
      this.visible = true
      this.bouncedTitle = '明细信息'
    },
    confirm() {
      this.$msgSuccess('确认成功!')
    },
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
