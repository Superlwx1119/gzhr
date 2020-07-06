<template>
  <el-row :gutter="10" class="tab-body">
    <el-col :md="10" :lg="8" :xl="6" class="tab-body-left">
      <el-form ref="queryForm" label-width="105px">
        <left-search-table :search-height="'150px'" :show-more-btn="true">
          <el-form-item label="结算时间" prop="结算时间1">
            <el-date-picker v-model="queryForm.结算时间1" style="width: 100%" type="daterange" start-placeholder="选择时间" end-placeholder="选择时间" />
          </el-form-item>
          <el-form-item label="体检机构" prop="体检机构1">
            <health-institution v-model="queryForm.体检机构1" />
          </el-form-item>
          <template slot="more">
            <el-form-item v-if="showAuditQuery" label="审核状态" prop="审核状态1">
              <audit-status v-model="queryForm.审核状态1" />
            </el-form-item>
            <el-form-item v-if="showAllocatedQuery" label="拨付状态" prop="拨付状态1">
              <el-select v-model="queryForm.拨付状态1" style="width: 100%;" placeholder="请选择">
                <el-option label="未拨付" value="1" />
                <el-option label="已拨付" value="2" />
              </el-select>
            </el-form-item>
            <el-form-item label="拨付单号" prop="拨付单号1">
              <el-input v-model="queryForm.拨付单号1" placeholder="请输入" />
            </el-form-item>
          </template>
          <template slot="btn">
            <el-button @reset="reset('queryForm')">重置</el-button>
            <el-button type="primary" @click="search">查询</el-button>
          </template>
          <div slot="list" class="box">
            <div class="box-header handle">
              <span class="box-title">拨付信息</span>
              <slot name="left-tools" />
            </div>
            <div class="box-body" :style="{ height: tableHeight }">
              <my-table-view :border="true" :max-cloumns="5" :first-highlight="true" :highlight-current-row="true" :columns="columns | filterColumns(5)" :data="tableData" @rowClick="rowClick" @update:multipleSelection="selectAll" />
              <Pagination layout="total,prev, pager, next,jumper" />
            </div>
          </div>
        </left-search-table>
      </el-form>
    </el-col>
    <el-col :md="14" :lg="16" :xl="18" class="tab-body-right">
      <div class="box">
        <div class="box-body">
          <RightDetailInfo :title="'拨付信息详情'" :options="columns.slice(2)" :list-data="currDetail">
            <slot slot="tools" name="right-tools" />
          </RightDetailInfo>
          <section class="layer" :style="{ height: detailHeight }">
            <div v-if="showAllocatedDocuments" class="layer-tab">
              <el-tabs v-model="activeName" type="card">
                <el-tab-pane label="拨付基金明细" name="first">
                  <div class="box">
                    <div class="box-body">
                      <el-form v-if="showDetailSave" ref="detailForm" :model="detailForm" label-width="105px">
                        <el-row :gutter="10">
                          <el-col :span="8">
                            <el-form-item label="补/扣金额">
                              <el-input v-model="detailForm.金额" placeholder="请输入" />
                            </el-form-item>
                          </el-col>
                          <el-col :span="10">
                            <el-form-item label="补/扣原因">
                              <el-input v-model="detailForm.原因" placeholder="请输入" />
                            </el-form-item>
                          </el-col>
                          <el-col :span="6" style="text-align: right">
                            <el-button type="primary" @click="detailSave">保存</el-button>
                          </el-col>
                        </el-row>
                      </el-form>
                      <my-table-view :style="{ height: showDetailSave ? 'calc(100% - 82px)!important' : '100%' }" :border="true" :max-cloumns="7" :columns="detailColumns" :data="detailData" />
                      <Pagination />
                    </div>
                  </div>
                </el-tab-pane>
                <el-tab-pane label="拨付单" name="second" />
              </el-tabs>
            </div>
            <div v-else class="box">
              <div class="box-header">
                <span class="box-title">拨付基金明细</span>
              </div>
              <div class="box-body">
                <el-form v-if="showDetailSave" ref="detailForm" :model="detailForm" label-width="105px">
                  <el-row :gutter="10">
                    <el-col :span="8">
                      <el-form-item label="补/扣金额">
                        <el-input v-model="detailForm.金额" placeholder="请输入" />
                      </el-form-item>
                    </el-col>
                    <el-col :span="10">
                      <el-form-item label="补/扣原因">
                        <el-input v-model="detailForm.原因" placeholder="请输入" />
                      </el-form-item>
                    </el-col>
                    <el-col :span="6" style="text-align: right">
                      <el-button type="primary" @click="detailSave">保存</el-button>
                    </el-col>
                  </el-row>
                </el-form>
                <my-table-view :border="true" :max-cloumns="7" :columns="detailColumns" :data="detailData" />
                <Pagination />
              </div>
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
import HealthInstitution from '@/components/Select/health-manage/HealthInstitution'
import AuditStatus from '@/components/Select/AuditStatus'

export default {
  name: 'Allocated',
  components: { AuditStatus, LeftSearchTable, HealthInstitution },
  mixins: [pageHandle],
  props: {
    showDetailSave: { type: Boolean, default: false },
    showAuditQuery: { type: Boolean, default: false },
    showAllocatedQuery: { type: Boolean, default: false },
    showAllocatedDocuments: { type: Boolean, default: true },
    tableHeight: { type: String, default: 'calc(100% - 40px)' },
    detailHeight: { type: String, default: 'calc(100% - 228px)' }
  },
  data() {
    return {
      activeName: 'first',
      columns: [
        { type: 'selection' },
        { type: 'index', label: '序号' },
        { label: '制单状态', prop: 'a' },
        { label: '拨付单号', prop: 'b' },
        { label: '拨付对象编码', prop: 'c' },
        { label: '拨付对象名称', prop: 'd' },
        { label: '拨付人次', prop: 'e' },
        { label: '总金额(元)', prop: 'f' },
        { label: '申报金额(元)', prop: 'g' },
        { label: '应拨金额(元)', prop: 'h' },
        { label: '预留金额(元)', prop: 'i' },
        { label: '补扣金额(元)', prop: 'j' },
        { label: '实拨金额(元)', prop: 'k' },
        { label: '个人支付(元)', prop: 'l' },
        { label: '开始日期', prop: 'm' },
        { label: '结束日期', prop: 'n' },
        { label: '经办人', prop: 'o' },
        { label: '经办时间', prop: 'p' }
      ],
      tableData: [1, 2, 3, 4, 5, 6, 7, 8].map(item => {
        return {
          a: '已制单',
          b: '1227297495',
          c: 'CD00' + item,
          d: '一般人员',
          e: '36',
          f: '5000',
          g: '4000',
          h: '3000',
          i: '1200',
          j: '1000',
          k: '100',
          l: '100',
          m: '2020-02-02',
          n: '2020-02-02',
          o: '周杰伦',
          p: '2020-02-02'
        }
      }),
      currDetail: {},
      detailColumns: [
        { type: 'index', label: '序号' },
        { label: '拨付对象编码', prop: 'aa' },
        { label: '拨付对象名称', prop: 'bb' },
        { label: '财务经办机构', prop: 'cc' },
        { label: '拨付经办机构', prop: 'dd' },
        { label: '人员类别', prop: 'ee' },
        { label: '基金支付类型', prop: 'ff' },
        { label: '统筹区基金支付类型', prop: 'gg' },
        { label: '基金申报总额(元)', prop: 'hh' },
        { label: '支付标准(元/人)', prop: 'ii' },
        { label: '支付比例(%)', prop: 'jj' },
        { label: '本次应拨金额(元)', prop: 'kk' },
        { label: '预留金额(元)', prop: 'll' },
        { label: '补/扣金额(元)', prop: 'mm' },
        { label: '本次实拨金额(元)', prop: 'nn' }
      ],
      detailData: [1, 2, 3].map(item => {
        return {
          aa: 'CN00' + item,
          bb: '康斯洛夫斯基',
          cc: '斯大林',
          dd: '列宁',
          ee: '政府人员',
          ff: '随便',
          gg: '不知道',
          hh: '2002',
          ii: '30',
          jj: '70',
          kk: '90',
          ll: '10000',
          mm: '506',
          nn: '720'
        }
      }),
      detailForm: {}
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
    rowClick(v) {
      console.log(v)
      this.currDetail = v.row
      this.$emit('row-click', v.row)
    },
    detailSave() { this.$msgSuccess('保存成功!') }
  }
}
</script>

<style scoped lang="scss"></style>
