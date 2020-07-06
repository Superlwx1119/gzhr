<!-- 待遇冻结 -->
<template>
  <section>
    <normal-layer
      :search-number="itemsDatas.length"
      title-name="基金状态信息"
      title-need-handle
    >
      <template slot="search-header">
        <form-items :items-datas="itemsDatas" :form-datas="queryForm">
          <el-button type="primary" @click="search">查询</el-button>
        </form-items>
      </template>
      <my-table-view
        v-loading="loading"
        :data="tableData"
        :columns="columns"
      />
      <Pagination />
    </normal-layer>

    <normal-layer
      :search-number="tableData.length"
      title-name="冻结信息"
    >
      <my-table-view
        :data="tableData"
        :columns="columns1"
      />
      <Pagination />
    </normal-layer>

    <normal-layer
      :search-number="tableData.length"
      title-name="特殊情形待遇查询结果"
    >
      <my-table-view
        :data="tableData"
        :columns="columns2"
      />
      <Pagination />
    </normal-layer>
  </section>
</template>
<script>
import NormalLayer from '@/views/components/PageLayers/normalLayer'
import FormItems from '@/views/components/PageLayers/form-items'
import PageHandle from '@/mixins/pageHandle'
import moment from 'moment'
export default {
  components: {
    NormalLayer,
    FormItems
  },
  mixins: [PageHandle],
  data() {
    return {
      loading: false,
      itemsDatas: [
        { label: '注资期间', prop: 'dateRange', type: 'dateRange' },
        { label: '基金类型', prop: 'xxx', type: 'select' }
      ],
      queryForm: {
        xxx: '',
        dateRange: [
          moment().startOf('month').format('YYYY-MM-DD'),
          moment().endOf('month').format('YYYY-MM-DD')
        ]
      },
      tableData: [
        { name: '----', nameCode: 'xxx' }
      ],
      columns: [
        { type: 'index', label: '序号', width: '55px' },
        { prop: 'nameCode', label: '基金名称', align: 'center' },
        { prop: 'name', label: '期间', align: 'center' },
        { prop: 'name', label: '基金状态', align: 'center' }
      ],
      columns1: [
        { type: 'index', label: '序号', width: '55px' },
        { prop: 'nameCode', label: '险种', align: 'center' },
        { prop: 'name', label: '对饮费款所属期', align: 'center' },
        { prop: 'name', label: '冻结状态', align: 'center' },
        { prop: 'name', label: '操作员', align: 'center' },
        { prop: 'name', label: '操作时间', align: 'center' },
        { prop: 'name', label: '冻结原因', align: 'center' }
      ],
      columns2: [
        { type: 'index', label: '序号', width: '55px' },
        { prop: 'nameCode', label: '冻结数据来源', align: 'center' },
        { prop: 'name', label: '事件类型', align: 'center' },
        { prop: 'name', label: '冻结业务类型', align: 'center' },
        { prop: 'name', label: '冻结开始时间', align: 'center' },
        { prop: 'name', label: '冻结结束时间', align: 'center' },
        { prop: 'name', label: '业务状态', align: 'center' },
        { prop: 'name', label: '经办人', align: 'center' },
        { prop: 'name', label: '经办时间', align: 'center' }
      ]

    }
  },
  methods: {
    feeInquire() {

    }
  }
}
</script>
