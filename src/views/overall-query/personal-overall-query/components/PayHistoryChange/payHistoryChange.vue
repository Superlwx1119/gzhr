<!-- 缴费历史变动 -->
<template>
  <section>
    <normal-layer
      :search-number="tableData.length"
      title-name="医保关系转移"
    >
      <my-table-view
        :data="tableData"
        :columns="medcialRalationTransfer"
      >
        <template slot="operation" slot-scope="scope">
          <el-button type="text" class="modify" @click="detailsClick(scope.row)">详细信息</el-button>
        </template>
      </my-table-view>
      <Pagination />
      <detail v-model="showDetail" :dialog-title="detailTitle" />
    </normal-layer>

    <normal-layer
      :search-number="tableData.length"
      title-name="参保人缴费历史修订信息"
    >
      <my-table-view
        :data="tableData"
        :columns="payHistory"
      >
        <template slot="operation" slot-scope="scope">
          <el-button type="text" class="modify" @click="detailsHistory(scope.row)">详情</el-button>
        </template>
      </my-table-view>
      <Pagination />
      <detai-dialog v-model="showDetailDialog" :dialog-title="dialogTitle" />
    </normal-layer>

    <normal-layer
      :search-number="tableData.length"
      title-name="军龄接入信息"
    >
      <my-table-view
        :data="tableData"
        :columns="militaryAge"
      />
      <Pagination />
    </normal-layer>

    <normal-layer
      :search-number="tableData.length"
      title-name="政府资助信息"
    />
  </section>
</template>
<script>
import NormalLayer from '@/views/components/PageLayers/normalLayer'
import MedcialRalationTransfer from './columns/medcialRalationTransfer'
import PayHistory from './columns/payHistory'
import MilitaryAge from './columns/militaryAge'
import DetaiDialog from '@/views/overall-query/personal-overall-query/components/PayHistoryChange/dialog/details'
import Detail from '@/views/overall-query/personal-overall-query/components/PayHistoryChange/dialog/detail'
export default {
  components: {
    NormalLayer,
    DetaiDialog,
    Detail
  },
  data() {
    return {
      medcialRalationTransfer: MedcialRalationTransfer,
      payHistory: PayHistory,
      militaryAge: MilitaryAge,
      showDetailDialog: false, // 缴费历史详情
      dialogTitle: '',
      detailTitle: '',
      showDetail: false, // 医保关系详情
      tableData: [
        { name: '----', nameCode: 'xxx' }
      ],
      columns: [
        { type: 'index', label: '序号', width: '55px' },
        { prop: 'nameCode', label: '组织ID', align: 'center' },
        { prop: 'name', label: '经办时间', align: 'center' },
        { prop: 'name', label: '变更时间', align: 'center' },
        { prop: 'name', label: '卡变更类型', align: 'center' },
        { prop: 'name', label: '经办人', align: 'center' },
        { prop: 'name', label: '变更前信息', align: 'center' },
        { prop: 'name', label: '变更后信息', align: 'center' },
        { prop: 'name', label: '备注', align: 'center' }
      ],
      columns1: [
        { type: 'index', label: '序号', width: '55px' },
        { prop: 'nameCode', label: '提现序号', align: 'center' },
        { prop: 'name', label: '提现类别', align: 'center' },
        { prop: 'name', label: '提现原因', align: 'center' },
        { prop: 'name', label: '业务状态', align: 'center' },
        { prop: 'name', label: '银行处理说明', align: 'center' },
        { prop: 'name', label: '经办人', align: 'center' },
        { prop: 'name', label: '经办人工号', align: 'center' },
        { prop: 'name', label: '经办时间', align: 'center' }
      ]
    }
  },
  methods: {
    detailsClick(row) {
      this.detailTitle = '人员转移接续明细'
      this.showDetail = true
    },
    detailsHistory(row) {
      this.dialogTitle = '参保人缴费历史修订详细信息'
      this.showDetailDialog = true
    }
  }
}
</script>
