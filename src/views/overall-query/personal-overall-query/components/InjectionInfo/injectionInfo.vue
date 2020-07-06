<!-- 注资信息 -->
<template>
  <section>
    <normal-layer
      :search-number="itemsDatas.length"
      title-name="注资信息"
      title-need-handle
    >
      <template slot="search-header">
        <form-items :items-datas="itemsDatas" :form-datas="queryForm">
          <el-button @click="reset">重置</el-button>
          <el-button type="primary" @click="search">查询</el-button>
        </form-items>
      </template>

      <template slot="title-btns">
        <el-button type="primary" @click="feeInquire">当前余额查询</el-button>
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
      title-name="个人账户减扣信息"
    >
      <my-table-view
        :data="tableData"
        :columns="columns1"
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
        { label: '起始时间', prop: 'dateRange', type: 'dateRange' }
      ],
      queryForm: {
        dateRange: [
          moment().startOf('month').format('YYYY-MM-DD'),
          moment().endOf('month').format('YYYY-MM-DD')
        ]
      },
      tableData: [
        { name: '----', nameCode: 'xxx' }
      ],
      columns: [
        { prop: 'nameCode', label: '注资系列号', align: 'center' },
        { prop: 'name', label: '费款所属期', align: 'center' },
        { prop: 'name', label: '对饮费款所属期', align: 'center' },
        { prop: 'name', label: '单位编号', align: 'center' },
        { prop: 'name', label: '所属统筹区', align: 'center' },
        { prop: 'name', label: '注资类型', align: 'center' },
        { prop: 'name', label: '业务处理状态', align: 'center' },
        { prop: 'name', label: '个人应拨金额（元）', align: 'center' },
        { prop: 'name', label: '应拨门诊统筹金（元）', align: 'center' },
        { prop: 'name', label: '个人实拨金额（元）', align: 'center' }
      ],
      columns1: [
        { type: 'index', label: '序号', width: '55px' },
        { prop: 'nameCode', label: '交换数据批号', align: 'center' },
        { prop: 'name', label: '银行数据交换批号', align: 'center' },
        { prop: 'name', label: '医保账户', align: 'center' },
        { prop: 'name', label: '对应费款所属期', align: 'center' },
        { prop: 'name', label: '业务状态', align: 'center' },
        { prop: 'name', label: '应扣金额(元)', align: 'center' },
        { prop: 'name', label: '实扣金额(元)', align: 'center' },
        { prop: 'name', label: '扣减说明', align: 'center' },
        { prop: 'name', label: '银行处理时间', align: 'center' },
        { prop: 'name', label: '银行处理结果', align: 'center' }
      ]

    }
  },
  methods: {
    feeInquire() {

    }
  }
}
</script>
