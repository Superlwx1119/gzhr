<!-- 单位应缴查询 -->
<template>
  <div class="third-index">
    <el-row :gutter="10" class="tab-body" style="height:100%;">
      <el-col :md="10" :lg="8" :xl="6" class="tab-body-left" style="height:100%;">
        <el-form ref="queryForm" label-width="105px">
          <left-search-table :search-height="'150px'" :show-more-btn="true">
            <el-form-item label="选择单位" prop="xzdw">
              <el-select v-model="queryForm.xzdw" style="width:100%" />
            </el-form-item>
            <el-form-item label="险种" prop="xz">
              <el-select v-model="queryForm.shzt" style="width:100%">
                <el-option label="基本医疗保险" value="基本医疗保险" />
                <el-option label="大额互助" value="大额互助" />
                <el-option label="生育" value="生育" />
                <el-option label="公务员" value="公务员" />
              </el-select>
            </el-form-item>
            <template #more>
              <div>
                <el-form-item label="查询期间" prop="cxqj">
                  <el-date-picker
                    v-model="queryForm.fyssq"
                    type="daterange"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                    style="width:100%"
                  />
                </el-form-item>
              </div>
            </template>
            <template slot="btn">
              <el-button @reset="reset('queryForm')">重置</el-button>
              <el-button type="primary" @click="search">查询</el-button>
            </template>
            <div slot="list" class="box">
              <div class="box-header handle">
                <span class="box-title">单位明细信息列表</span>
                <div class="box-tools" />
              </div>
              <div class="box-body">
                <my-table-view :border="true" :max-cloumns="5" :first-highlight="true" :highlight-current-row="true" :columns="columns | filterColumns(5)" :data="tableData" @update:multipleSelection="multipleSelection" />
                <Pagination layout="total,prev, pager, next,jumper" />
              </div>
            </div>
          </left-search-table>
        </el-form>
      </el-col>
      <el-col :md="14" :lg="16" :xl="18" class="tab-body-right">
        <div class="box">
          <div class="box-body">
            <RightDetailInfo :title="'单位明细信息详情'" :options="columns.slice(2)" :list-data="tableData[0]">
              <slot slot="tools" name="right-tools" />
            </RightDetailInfo>
            <section class="layer" style="height: calc(100% - 174px)">
              <div class="box">
                <div class="box-header handle">
                  <span class="box-title">个人明细信息列表</span>
                  <div class="box-tools" />
                </div>
                <div class="box-body">
                  <my-table-view :border="true" :max-cloumns="7" :columns="personalDetailsColumns" :data="personalDetailsData" />
                  <Pagination />
                </div>
              </div>
            </section>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  components: {
  },
  data() {
    return {
      columns: [
        { type: 'selection' },
        { type: 'index', label: '序号' },
        { label: '单位管理码', prop: 'a' },
        { label: '单位名称', prop: 'b' },
        { label: '计算期间', prop: 'c' },
        { label: '缴费情况', prop: 'd' },
        { label: '应缴类型', prop: 'e' },
        { label: '险种名称', prop: 'f' },
        { label: '应缴人数', prop: 'g' },
        { label: '单位应缴(元)', prop: 'h' },
        { label: '单位应缴划入(元)', prop: 'i' },
        { label: '个人应缴(元)', prop: 'j' },
        { label: '财政缴纳单位(元)', prop: 'k' },
        { label: '财政缴纳个人(元)', prop: 'l' },
        { label: '应缴总额(元)', prop: 'm' }
      ],
      tableData: [
        {
          a: '1001',
          b: '1030120',
          c: 'XXXX公路总段',
          d: '事业单位',
          e: '1',
          f: 'XXXXX',
          g: 'XXXXX',
          h: '张三',
          i: '2010-10-10',
          j: 'XXXXX',
          k: 'XXXXX',
          l: 'XXXXX',
          m: 'XXXXX'
        }
      ],
      selectRows: [],
      queryForm: {
        xzdw: '',
        xz: '',
        cxqj: ''
      },
      personalDetailsColumns: [
        { type: 'index', label: '序号' },
        { label: '姓名', prop: 'aa' },
        { label: '证件号码', prop: 'bb' },
        { label: '计算期间', prop: 'cc' },
        { label: '所属期间', prop: 'dd' },
        { label: '缴费情况', prop: 'ee' },
        { label: '应缴类型', prop: 'ff' },
        { label: '险种名称', prop: 'gg' },
        { label: '单位应缴(元)', prop: 'hh' },
        { label: '单位应缴划入(元)', prop: 'ii' },
        { label: '个人应缴(元)', prop: 'jj' },
        { label: '财政缴纳单位(元)', prop: 'kk' },
        { label: '财政缴纳个人(元)', prop: 'll' },
        { label: '应缴总额(元)', prop: 'mm' }
      ],
      personalDetailsData: [
        {
          aa: '张某',
          bb: '630103YYYYMMDD0048',
          cc: '201908',
          dd: '201908',
          ee: '未缴费',
          ff: '补收',
          gg: '基本医疗',
          hh: '3000',
          ii: '0',
          jj: '0',
          kk: '0',
          ll: '0',
          mm: '0'
        }
      ]
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
