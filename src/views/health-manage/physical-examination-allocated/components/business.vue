<template>
  <normal-layer :search-number="3">
    <template slot="search-header">
      <FormItems :items-datas="itemsDatas" :form-datas="queryForm">
        <template slot="体检机构1">
          <health-institution v-model="queryForm.体检机构1" />
        </template>
        <template v-if="showAuditQuery" slot="审核状态1">
          <audit-status v-model="queryForm.审核状态1" />
        </template>>
        <div style="text-align: right">
          <el-button @click="reset('queryForm')">重置</el-button>
          <el-button type="primary" @click="search('queryForm')">查询</el-button>
        </div>
      </FormItems>
    </template>
    <slot slot="table-title" name="tools" />
    <template>
      <my-table-view :border="true" :columns="_columns" :data="tableData" @update:multipleSelection="selectAll">
        <template v-if="showCancelBtn" slot="operation" slot-scope="scope">
          <el-button type="text" class="delete" @click="cancel(scope.row)">取消拨付</el-button>
        </template>
      </my-table-view>
      <Pagination />
    </template>
  </normal-layer>
</template>

<script>
import NormalLayer from '@/views/components/PageLayers/normalLayer'
import pageHandle from '@/mixins/pageHandle'
import FormItems from '@/views/components/PageLayers/form-items'
import HealthInstitution from '@/components/Select/health-manage/HealthInstitution'
import AuditStatus from '@/components/Select/AuditStatus'
export default {
  name: 'Business',
  components: {
    AuditStatus,
    NormalLayer,
    FormItems,
    HealthInstitution
  },
  mixins: [pageHandle],
  props: {
    showAuditQuery: { type: Boolean, default: false },
    showCancelBtn: { type: Boolean, default: false }
  },
  data() {
    return {
      itemsDatas: [
        { label: '结算时间', prop: '结算时间1', type: 'dateRange' },
        { label: '体检机构', prop: '体检机构1', type: 'custom' },
        { label: '审核状态', prop: '审核状态1', type: 'custom' },
        { label: '拨付单号', prop: '拨付单号1', type: 'input' }
      ],
      columns: [
        { label: '序号', type: 'index' },
        { type: 'selection' },
        { label: '姓名', prop: 'name' },
        { label: '性别', prop: 'sex' },
        { label: '身份证号', prop: 'cardNo' },
        { label: '体检类型', prop: 'type' },
        { label: '体检机构', prop: 'institutions' },
        { label: '体检套餐', prop: 'package' },
        { label: '所属单位', prop: 'company' },
        { label: '总费用(元)', prop: 'a' },
        { label: '基金支付(元)', prop: 'b' },
        { label: '现金支付(元)', prop: 'c' },
        { label: '其他费用(元)', prop: 'd' },
        { label: '体检日期', prop: 'date' },
        { label: '业务序列号', prop: 'e' },
        { label: '操作', type: 'operation' }
      ],
      tableData: [1, 2, 3].map(item => {
        return {
          name: '奥巴马', sex: '男', cardNo: '430818196702270012', type: '普通体检', institutions: '爱康中心',
          package: '套餐A', company: '白宫', date: '2020-02-02', a: '5000', b: '4000', c: '1000', d: '0', e: '110032'
        }
      })
    }
  },
  computed: {
    _columns: function() {
      if (!this.showCancelBtn) {
        return this.columns.filter(item => {
          return item.type !== 'operation' && item.prop !== 'operation' && item.type !== 'selection' && item.prop !== 'selection'
        })
      } else {
        return this.columns
      }
    }
  },
  watch: {},
  created() {
  },
  mounted() {
  },
  methods: {
    //  全选
    selectAll(val) {
      console.log(val)
      this.$emit('select', val)
    },
    cancel(row) {
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
