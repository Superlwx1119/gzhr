<template>
  <div class="item2 third-index inst-relationship-maint">
    <section class="layer layer-query">
      <div class="box">
        <div class="box-body">
          <el-form ref="searchForm" :model="searchForm" label-width="105px">
            <el-row :gutter="12">
              <el-col :md="12" :lg="8" :xl="6">
                <SelectForm
                  :search-form="searchForm"
                  :options="TypesOptions"
                  label-name="label"
                  value-name="value"
                  form-label="收入种类"
                  form-prop="Types"
                />
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
            <el-button type="primary" @click="combined">合计</el-button>
            <el-button type="primary" @click="confirm">到账确认</el-button>
          </div>
        </div>
        <div class="box-body">
          <!-- <MyTableView
            :columns="tableColumns"
            :data="tableData"
            :border="true"
            @update:multipleSelection="multipleSelection"
          >
            <template slot="operation" slot-scope="scope">
              <el-button type="text" @click="Checkthedetails(scope.row)">查看明细</el-button>
            </template>
          </MyTableView> -->
          <ExpandList
            :is-index="true"
            :columns="columns"
            :data="tableData"
            :is-selection="true"
            :show-summary="true"
            @handleSelect="handleSelect"
          />
          <Pagination />
        </div>
      </div>
    </section>
    <Add :show.sync="visible" :bounced-title="bouncedTitle" />
    <!-- <Add :show.sync="control" :bounced-title="printTitle" /> -->
  </div>
</template>

<script>
import SelectForm from '@/components/Select/FormComponents/SelectForm'
import ExpandList from '@/views/components/AcombinedForm'
import Add from './components/Add'
export default {
  components: {
    SelectForm,
    ExpandList,
    Add
  },
  props: {

  },
  data() {
    return {
      bouncedTitle: '',
      visible: false,
      searchForm: {
        Types: '',
        date: ''

      },
      TypesOptions: [
        {
          value: '全部',
          lable: '1'
        }
      ],
      columns: [
        {
          prop: '到账日期',
          label: '到账日期'
        },
        {
          prop: '险种',
          label: '险种'
        },
        {
          prop: '类型',
          label: '类型'
        },
        {
          prop: '金额',
          label: '金额(元)'
        }
      ],
      tableData: [{
        到账日期: '2019-02-20',
        险种: '职工医保',
        类型: '违约金',
        金额: '111'
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
      this.visible = true
      this.bouncedTitle = '新增到账信息'
    },
    combined() {

    },
    confirm() {
      this.$msgSuccess('确认成功')
    },
    handleSelect() {

    }

  }

}
</script>

<style scoped lang="scss">
.pf-table {
    position: relative;
    .el-table {
      min-height: none !important;
    }
    .is-scrolling-none{
      min-height: none !important;
    }
  }
</style>
