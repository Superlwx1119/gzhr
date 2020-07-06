<template>
  <el-row :gutter="10" class="tab-body">
    <el-col :md="10" :lg="8" :xl="6" class="tab-body-left">
      <el-form ref="queryForm" label-width="105px">
        <left-search-table :search-height="'150px'" :show-more-btn="true">
          <el-form-item label="单位名称" prop="单位名称1">
            <el-input v-model="queryForm.单位名称1" placeholder="请输入" />
          </el-form-item>
          <el-form-item label="单位编码" prop="单位编码1">
            <el-input v-model="queryForm.单位编码1" placeholder="请输入" />
          </el-form-item>
          <template slot="more">
            <el-form-item v-if="searchArr.includes('险种') " label="险种" prop="险种">
              <InsuranceType v-model="queryForm.险种" />
            </el-form-item>
            <el-form-item v-if="searchArr.includes('计算状态') " label="计算状态" prop="计算状态">
              <el-select v-model="queryForm.计算状态" style="width: 100%;" placeholder="请选择">
                <el-option label="未试算" value="1" />
                <el-option label="已试算" value="2" />
              </el-select>
            </el-form-item>
            <el-form-item v-if="searchArr.includes('存储类型') " label="存储类型" prop="存储类型">
              <el-select v-model="queryForm.存储类型" style="width: 100%;" placeholder="请选择">
                <el-option label="单位" value="1" />
                <el-option label="个体" value="2" />
              </el-select>
            </el-form-item>
            <el-form-item v-if="searchArr.includes('录入方式') " label="录入方式" prop="录入方式">
              <el-select v-model="queryForm.录入方式" style="width: 100%;" placeholder="请选择">
                <el-option label="单位" value="1" />
                <el-option label="个体" value="2" />
              </el-select>
            </el-form-item>
            <el-form-item v-if="searchArr.includes('审核状态') " label="审核状态" prop="审核状态">
              <audit-status v-model="queryForm.审核状态" />
            </el-form-item>
            <el-form-item v-if="searchArr.includes('计算期间') " label="计算期间" prop="计算期间">
              <el-date-picker
                v-model="queryForm.计算期间"
                type="daterange"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                placeholder="开始日期"
              />
            </el-form-item>
            <el-form-item v-if="searchArr.includes('费用所属期') " label="费用所属期" prop="费用所属期">
              <el-date-picker
                v-model="queryForm.费用所属期"
                type="date"
                style="width:100%"
                placeholder="请选择时间"
              />
            </el-form-item>
            <el-form-item v-if="searchArr.includes('手工费用类型') " label="手工费用类型" prop="复核状态1">
              <el-select v-model="queryForm.手工费用类型" style="width: 100%;" placeholder="请选择">
                <el-option label="退休一次性缴纳" value="1" />
                <el-option label="基数补差单位" value="2" />
                <el-option label="基数补差个体" value="3" />
              </el-select>
            </el-form-item>
            <el-form-item v-if="searchArr.includes('姓名')" label="姓名" prop="姓名">
              <el-input v-model="queryForm.姓名" placeholder="请输入" />
            </el-form-item>
            <el-form-item v-if="searchArr.includes('证件号码') " label="证件号码" prop="证件号码">
              <el-input v-model="queryForm.证件号码" placeholder="请输入" />
            </el-form-item>

          </template>
          <template slot="btn">
            <el-button @reset="reset('queryForm')">重置</el-button>
            <el-button type="primary" @click="search">查询</el-button>
          </template>
          <div slot="list" class="box">
            <div class="box-header handle">
              <span class="box-title">{{ tableTitle }}</span>
              <slot name="left-tools" />
            </div>
            <div class="box-body" :style="{ height: tableHeight }">
              <my-table-view :border="true" :max-cloumns="5" :first-highlight="true" :highlight-current-row="true" :columns="columns | filterColumns(5)" :multiple-selection.sync="multipleSelection" :data="tableData" @rowClick="rowClick" @update:multipleSelection="selectAll" />
              <Pagination layout="total,prev, pager, next,jumper" />
            </div>
          </div>
        </left-search-table>
      </el-form>
    </el-col>
    <el-col :md="14" :lg="16" :xl="18" class="tab-body-right">
      <div class="box">
        <div class="box-body">
          <RightDetailInfo :title="detailTitle" :options="columns.slice(2)" :list-data="currDetail">
            <slot slot="tools" name="right-tools" />
          </RightDetailInfo>
          <section class="layer" :style="{ height: detailHeight }">
            <div class="layer-tab">
              <el-row :gutter="12" :style="{ height: detailHeight }">
                <el-col :span="12">
                  <div class="box" :style="{ height: 'calc(100% + 80px)' }">
                    <div class="box-body">
                      <div class="box-header handle">
                        <span class="box-title">单位应缴明细</span>
                        <div v-if="searchArr.includes('button')" class="box-tools">
                          <el-button type="success" @click="addRow">新增</el-button>
                          <el-button type="primary">保存</el-button>
                          <el-button type="danger">删除</el-button>
                        </div>
                      </div>
                      <my-table-view :border="true" :first-highlight="true" :highlight-current-row="true" :max-cloumns="7" :columns="confluenceColumns" :data="confluenceData" @rowClick="detailRowClick">
                        <template slot="operation" slot-scope="scope">
                          <!-- <el-button type="text" class="modify" :class="scope.$index" @click="rowDeal(scope)">{{ scope.row.edit? '确定':'编辑' }}</el-button> -->
                          <el-button :class="scope.row.edit?'modify':'warning'" :title="scope.row.edit?'确定':'编辑'" @click="rowDeal(scope)">
                            <svg-icon :icon-class="scope.row.edit?'modify':'edit'" />
                          </el-button>
                        </template>
                        <template v-if="scope.row.edit" slot="款项类型" slot-scope="scope">
                          <el-select v-model="scope.row.aa" style="width: 100%;" placeholder="请选择">
                            <el-option v-for="item of moneyType" :key="item.value" :label="item.label" :value="item.value" />
                          </el-select>
                        </template>
                        <template v-if="scope.row.edit" slot="款项金额" slot-scope="scope">
                          <el-input v-model="scope.row.bb" />
                        </template>
                        <template v-if="scope.row.edit" slot="备注" slot-scope="scope">
                          <el-input v-model="scope.row.cc" />
                        </template>
                      </my-table-view>
                      <Pagination />
                    </div>
                  </div>
                </el-col>
                <el-col :span="12">
                  <div class="box" :style="{ height: searchArr.includes('button')?'calc(100% + 30px)':'calc(100% + 80px)'}">
                    <div class="box-body">
                      <div class="box-header handle">
                        <span class="box-title">个人应缴明细</span>
                        <div v-if="searchArr.includes('button')" class="box-tools" />
                      </div>
                      <el-row v-if="searchArr.includes('button')" :gutter="10">
                        <el-form>
                          <el-col :span="8">
                            <el-form-item label="调整模式" label-width="80px">
                              <el-select v-model="queryForm.调整模式" placeholder="请选择">
                                <el-option label="统一比例" value="1" />
                                <el-option label="统一基数" value="2" />
                              </el-select>
                            </el-form-item>
                          </el-col>
                          <el-col :span="6">
                            <el-form-item label="值域" label-width="40px">
                              <el-input v-model="queryForm.值域" />
                            </el-form-item>
                          </el-col>
                          <el-col :span="10">
                            <el-button type="primary">调整</el-button>
                            <el-button type="primary">保存</el-button>
                          </el-col>
                        </el-form>
                      </el-row>
                      <my-table-view :border="true" :max-cloumns="5" :columns="personalColumns" :data="personalData" />
                      <Pagination />
                    </div>
                  </div>
                </el-col>
              </el-row>
              <!-- <el-tabs v-model="activeName" type="card">
                <el-tab-pane label="单位总汇" name="first">
                  <div class="box">
                    <div class="box-body">
                      <my-table-view :border="true" :max-cloumns="7" :columns="confluenceColumns" :data="confluenceData" />
                      <Pagination />
                    </div>
                  </div>
                </el-tab-pane>
                <el-tab-pane label="个人明细" name="second">
                  <div class="box">
                    <div class="box-body">
                      <my-table-view :border="true" :max-cloumns="7" :columns="personalColumns" :data="personalData" />
                      <Pagination />
                    </div>
                  </div>
                </el-tab-pane>
              </el-tabs> -->
            </div>
          </section>
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import LeftSearchTable from '@/components/SearchList/LeftSearchTable'
import pageHandle from '@/mixins/pageHandle'
import AuditStatus from '@/components/Select/AuditStatus'
import InsuranceType from '@/components/Select/InsuranceType'

export default {
  name: 'Allocated',
  components: { AuditStatus, LeftSearchTable, InsuranceType },
  mixins: [pageHandle],
  props: {
    searchArr: { type: Array, default: function() { return [] } },
    differenceRereat: { type: Boolean, default: false },
    showPerson: { type: Boolean, default: false },
    receiptAudit: { type: Boolean, default: false },
    repaymentAudit: { type: Boolean, default: false },
    approve: { type: Boolean, default: false },
    tableTitle: { type: String, default: '查询结果' },
    detailTitle: { type: String, default: '查询详情' },
    tableHeight: { type: String, default: 'calc(100% - 40px)' },
    detailHeight: { type: String, default: 'calc(100% - 35px)' },
    columns: { type: Array, default: function() { return [] } },
    tableData: { type: Array, default: function() { return [] } },
    detailColumns: { type: Array, default: function() { return [] } },
    detailData: { type: Array, default: function() { return [] } },
    confluenceColumns: { type: Array, default: function() { return [] } },
    confluenceData: { type: Array, default: function() { return [] } },
    personalColumns: { type: Array, default: function() { return [] } },
    personalData: { type: Array, default: function() { return [] } }
  },
  data() {
    return {
      activeName: 'first',
      currDetail: {},
      detailForm: {},
      multipleSelection: [],
      moneyType: [
        { label: '基本医疗单位应缴', value: '1' },
        { label: '基本医疗单位应缴划入个人账户', value: '2' },
        { label: '基本医疗个人应缴', value: '3' },
        { label: '基本医疗个人应缴划入个人账户', value: '4' }
      ]
    }
  },
  computed: {},
  watch: {},
  created() {
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      this.currDetail = this.tableData[0]
      this.$emit('row-click', this.tableData[0])
    },
    //  全选
    selectAll(val) {
      console.log(val)
      this.$emit('select', val)
    },
    addRow() {
      const json = { edit: true }
      this.confluenceData.push(json)
    },
    rowDeal(row) {
      row.row.edit = !row.row.edit
      this.moneyType.forEach(item => {
        if (item.value === row.row.aa) {
          row.row.aa = item.label
        }
      })
    },
    deleteDetail() {
      console.log(this.currDetail)
    },
    detailRowClick(v) {
      this.$emit('clickDetail', v.row)
    },
    rowClick(v) {
      this.currDetail = v.row
      this.$emit('row-click', v.row)
    },
    detailSave() { this.$msgSuccess('保存成功!') }
  }
}
</script>

<style scoped lang="scss"></style>
