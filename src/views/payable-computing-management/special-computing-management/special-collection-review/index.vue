<!-- 特殊收款征集审核 --->
<template>
  <div class="third-index supplementaryReceipt">
    <section class="layer-tab">
      <Allocated
        ref="allocated"
        :show-detail-save="true"
        detail-height="calc(100% - 100px)"
        :confluence-data="confluenceData"
        :confluence-columns="confluenceColumns"
        :personal-columns="personalColumns"
        :detail-columns="detailColumns"
        :personal-data="personalData"
        :detail-data="detailData"
        detail-title="审核详情"
        :show-person="true"
        table-title="特殊收款征集审核列表"
        :table-data="tableData"
        :receipt-audit="true"
        :search-arr="searchArr"
        :columns="columns"
        @select="handleSelect"
        @row-click="rowClick"
        @clickDetail="clickDetail"
      >
        <template slot="left-tools">
          <div class="box-tools">
            <el-button type="primary" @click="isShowAudit = true">批量审核</el-button>
          </div>
        </template>
      </Allocated>
    </section>
    <!-- 审核 -->
    <AuditDialog v-model="isShowAudit" dialog-title="特殊收款征集审核" />
  </div>
</template>

<script>
import Allocated from '../components/allocated'
import AuditDialog from '@/views/components/AuditDialog/index'
// import Business from '../components/business'
export default {
  name: 'SpecialCollectionReview',
  components: {
    Allocated,
    AuditDialog
    // Business
  },
  mixins: [],
  props: {},
  data() {
    return {
      searchArr: ['审核状态', '计算期间', '存储类型'],
      activeName: 'first',
      selection: [],
      queryForm: {},
      isShowSingle: false,
      isShowAudit: false,
      businessSelection: [],
      confluenceData: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map(item => {
        return {
          aa: 'CN00' + item,
          bb: 3000 + Number((Math.random() * 10).toFixed(2)),
          cc: '康斯洛夫斯基' + item
        }
      }),
      personalData: [1, 2, 3].map(item => {
        return {
          aa: 'CN00' + item,
          bb: '康斯洛夫斯基',
          cc: '斯大林',
          dd: '列宁',
          ee: '政府人员',
          ff: '随便',
          gg: '不知道',
          hh: '2002',
          ii: '30'
        }
      }),
      confluenceColumns: [
        { type: 'index', label: '序号' },
        { label: '款项类型', prop: 'aa' },
        { label: '款项金额', prop: 'bb' },
        { label: '备注', prop: 'cc' }
      ],
      personalColumns: [
        { type: 'index', label: '序号' },
        { label: '姓名', prop: 'aa' },
        { label: '身份证', prop: 'bb' },
        { label: '款项类别', prop: 'cc' },
        { label: '费用开始期', prop: 'dd' },
        { label: '费用结束期', prop: 'ee' },
        { label: '基数', prop: 'ff' },
        { label: '比例', prop: 'gg' },
        { label: '应缴人数', prop: 'hh' },
        { label: '备注', prop: 'ii' }
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
      detailColumns: [
        { type: 'index', label: '序号' },
        { label: '单位管理码', prop: 'aa' },
        { label: '单位名称', prop: 'bb' },
        { label: '费款所属期', prop: 'cc' },
        { label: '对应费款所属期', prop: 'dd' },
        { label: '险种', prop: 'ee' },
        { label: '应缴人数', prop: 'ff' },
        { label: '统筹区基金支付类型', prop: 'gg' },
        { label: '基金申报总额(元)', prop: 'hh' },
        { label: '支付标准(元/人)', prop: 'ii' },
        { label: '支付比例(%)', prop: 'jj' },
        { label: '本次应拨金额(元)', prop: 'kk' },
        { label: '预留金额(元)', prop: 'll' },
        { label: '补/扣金额(元)', prop: 'mm' },
        { label: '本次实拨金额(元)', prop: 'nn' }
      ],
      columns: [
        { type: 'selection' },
        { type: 'index', label: '序号' },
        { label: '单位管理码', prop: 'a' },
        { label: '单位名称', prop: 'b' },
        { label: '手工费用状态', prop: 'c' },
        { label: '手工费用金额', prop: 'd' },
        { label: '存储类型', prop: 'e' },
        { label: '手工费用类型', prop: 'f' }
      ],
      tableData: [1, 2, 3, 4, 5, 6, 7, 8].map(item => {
        return {
          a: '已制单',
          b: '1227297495',
          c: 'CD00' + item,
          d: '一般人员',
          e: '36',
          f: '5000'
        }
      })
    }
  },
  computed: {},
  watch: {},
  created() {
  },
  mounted() {
  },
  methods: {
    handleSelect(val) { this.selection = val },
    rowClick(val) { console.log(val) },
    allocatedCalculateAll() { this.$msgSuccess('计算成功！') },
    allocatedSaveAll() { this.$msgSuccess('保存成功！') },
    allocatedCalculate() { this.$msgSuccess('计算成功！') },
    allocatedSave() { this.$msgSuccess('保存成功！') },
    deleteDetail(row) {
      console.log(row)
      this.$refs.allocated.deleteDetail()
    },
    clickDetail(v) {
      this.personalData.forEach(item => {
        item.cc = v.aa
      })
    },
    //  业务信息全选
    selectAll(val) { this.businessSelection = val },
    cancelAllocated() {
      this.$msgConfirm('是否取消拨付？').then(res => {
        this.$msgSuccess('取消成功')
      }).catch(err => {
        this.$msgInfo(err)
      })
    }
  }
}
</script>

<style scoped lang="scss"></style>

