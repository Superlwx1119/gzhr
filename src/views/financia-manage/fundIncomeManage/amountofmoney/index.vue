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
                  :options="PleaseStateOptions"
                  label-name="label"
                  value-name="value"
                  form-label="请款状态"
                  form-prop="PleaseState"
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
            <el-button type="primary" @click="Modify">修改</el-button>
            <el-button type="primary" @click="ConfirmTheRequest">确认请款</el-button>
          </div>
        </div>
        <div class="box-body">
          <MyTableView
            :columns="tableColumns"
            :data="tableData"
            :border="true"
            @update:multipleSelection="multipleSelection"
          />
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
  props: {

  },
  data() {
    return {
      visible: false,
      bouncedTitle: '',
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
        {
          type: 'selection', label: '', width: '30px'
        },
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
          prop: '请款状态',
          label: '请款状态'
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
          prop: '应资助基本医疗',
          label: '应资助基本医疗(元)'
        },
        {
          prop: '应资助大病补助',
          label: '应资助大病补助(元)'
        }
        // {
        //   label: '操作',
        //   type: 'operation'
        // }
      ],
      tableData: [{
        台账年月: '1201912',
        医保区划: '中央',
        资助类型: '全额资助',
        请款状态: '未请款',
        本期资助人数: '111',
        累计资助人数: '111',
        本期应资助总额: '2000',
        应资助基本医疗: '1000',
        应资助大病补助: '1234'
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
    search() {

    },
    Modify() {
      this.visible = true
      this.bouncedTitle = '修改个人明细信息'
    },
    ConfirmTheRequest() {

    },
    multipleSelection() {

    }
  }
}
</script>

<style scoped lang="scss">

</style>
