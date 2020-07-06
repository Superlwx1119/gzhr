<!-- 灵活就业应缴查询 -->
<template>
  <div class="third-index doctor-info-query item3">
    <section class="layer layer-query">
      <div class="box">
        <ConditionHeader />
        <div class="box-body query">
          <el-form ref="searchForm" :model="searchForm" label-width="105px">
            <el-row :gutter="10">
              <el-col :md="12" :lg="8" :xl="6">
                <el-form-item label="选择人员" prop="xzry">
                  <el-select v-model="searchForm.xzry" style="width:100%;" />
                </el-form-item>
              </el-col>
              <el-col :md="12" :lg="8" :xl="6">
                <el-form-item label="险种" prop="xz">
                  <el-input v-model="searchForm.xz" placeholder="请输入" />
                </el-form-item>
              </el-col>
              <el-col :md="12" :lg="8" :xl="6">
                <el-form-item label="费用所属期" prop="fyssq">
                  <el-date-picker
                    v-model="searchForm.fyssq"
                    type="daterange"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                    style="width:100%"
                  />
                </el-form-item>
              </el-col>
              <el-col :md="12" :lg="8" :xl="6" style="text-align: right">
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
          <span class="box-title">灵活就业应缴列表</span>
          <div class="box-tools" />
        </div>
        <div class="box-body">
          <MyTableView :border="true" :columns="columns" :data="tableData" @update:multipleSelection="multipleSelection" />
          <Pagination />
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  components: {
  },
  data() {
    return {
      searchForm: {
        xzry: '',
        xz: '',
        fyssq: ''
      },
      columns: [
        { type: 'selection', label: '', width: '30px' },
        { label: '序号', type: 'index', width: '50' },
        { label: '姓名', prop: 'name' },
        { label: '证件号码', prop: 'zjhm' },
        { label: '计算期间', prop: 'jsqj' },
        { label: '所属期间', prop: 'ssqj' },
        { label: '单位编码', prop: 'dwCode' },
        { label: '个人缴费(元)', prop: 'grjf' },
        { label: '补充医疗(元)', prop: 'bcyl' },
        { label: '大病(元)', prop: 'db' },
        { label: '生育(元)', prop: 'sy' },
        { label: '意外(元)', prop: 'yw' },
        { label: '本月合计(元)', prop: 'byhj' },
        { label: '应划个人账户', prop: 'yhgrzh' },
        { label: '缴费时间', prop: 'jfsj' },
        { label: '所属中心', prop: 'sszx' }
      ],
      tableData: [
        {
          name: '张某',
          zjhm: '632121YYYYMMDD0056',
          jsqj: '201908',
          ssqj: '201908',
          dwCode: '18106',
          grjf: '200',
          bcyl: '0.00',
          db: '160',
          sy: '0.00',
          yw: '0.00',
          byhj: '360',
          yhgrzh: '0.00',
          jfsj: '2019-08-01',
          sszx: 'XX中心'
        }
      ],
      selectRows: []
    }
  },
  watch: {
  },
  methods: {
    reset(formName) {
      this.$refs[formName].resetFields()
    },
    search(formName) {},
    multipleSelection(val) {
      this.selectRows = val
    }
  }
}
</script>
<style lang='scss' scoped>
</style>
