<!-- 医保退休不满足年限一次性缴纳审核 --->
<template>
  <div class="third-index supplementaryReceipt">
    <section class="layer-tab">
      <Allocated
        ref="allocated"
        :show-detail-save="true"
        detail-height="calc(100% - 120px)"
        :confluence-data="confluenceData"
        :detail-columns="detailColumns"
        :personal-data="personalData"
        :detail-data="detailData"
        :table-data="tableData"
        :search-arr="searchArr"
        detail-title="审核详情"
        table-title="医保退休不满足年限一次性缴纳审核列表"
        :repayment-audit="true"
        :columns="columns"
        @select="handleSelect"
        @row-click="rowClick"
      >
        <template slot="left-tools">
          <div class="box-tools">
            <el-button type="primary" @click="isShowAudit = true">批量审核</el-button>
          </div>
        </template>
        <!-- <template slot="right-tools">
          <el-button type="primary" @click="isShowSingle = true">申请信息</el-button>
          <el-button type="danger" @click="deleteDetail">删除</el-button>
        </template> -->
      </Allocated>
    </section>
    <!-- 审核 -->
    <AuditDialog v-model="isShowAudit" dialog-title="医保退休不满足年限一次性缴纳审核" />
  </div>
</template>

<script>
import Allocated from '../components/allocated'
import AuditDialog from '@/views/components/AuditDialog/index'
// import Business from '../components/business'
export default {
  name: 'RepaymentReview',
  components: {
    Allocated,
    AuditDialog
    // Business
  },
  mixins: [],
  props: {},
  data() {
    return {
      searchArr: ['审核状态', '起止时间', '姓名', '证件号码'],
      activeName: 'first',
      selection: [],
      queryForm: {},
      isShowSingle: false,
      isShowAudit: false,
      businessSelection: [],
      confluenceData: [1, 2, 3].map(item => {
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
          nn: '720',
          oo: '720',
          pp: '720',
          qq: '720'
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
          ii: '30',
          jj: '70',
          kk: '90',
          ll: '10000',
          mm: '506',
          nn: '720',
          oo: '720',
          pp: '720',
          qq: '720',
          rr: '720',
          ss: '720'
        }
      }),
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
        { label: '姓名', prop: 'a' },
        { label: '证件号码', prop: 'b' },
        { label: '人员类别', prop: 'c' },
        { label: '年龄', prop: 'd' },
        { label: '趸缴基数', prop: 'e' },
        { label: '趸缴总金额', prop: 'f' },
        { label: '经办人', prop: 'g' },
        { label: '经办时间', prop: 'h' }
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
          h: '3000'
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

