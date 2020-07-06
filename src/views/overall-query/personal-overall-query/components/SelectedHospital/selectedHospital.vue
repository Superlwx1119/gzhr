<!-- 门诊选定医院 -->
<template>
  <!-- <normal-layer
    title-name="门诊选定医院"
    title-need-handle
  >
    <template slot="title-btns">
      <el-button type="primary" @click="printClick">打印</el-button>
      <el-button type="primary" @click="exportClick">导出</el-button>
    </template>
    <my-table-view
      v-loading="loading"
      :data="tableData"
      :columns="columns"
    />
    <Pagination />
  </normal-layer> -->
  <section class="layer layer-result">
    <div class="box">
      <div class="box-header handle">
        <!-- <span class="box-title">资格申请(中心)列表</span> -->
        <div class="box-tools">
          <el-button type="primary" @click="printClick">打印</el-button>
          <el-button type="primary" @click="exportClick">导出</el-button>
        </div>
      </div>
      <div class="box-body">
        <ExpandList height="100%" :is-border="true" :is-index="true" :columns="columns" :data="tableData" />
        <Pagination />
      </div>
    </div>
  </section>
</template>
<script>
// import NormalLayer from '@/views/components/PageLayers/normalLayer'
// import PageHandle from '@/mixins/pageHandle'
export default {
  components: {
    // NormalLayer
  },
  mixins: [],
  data() {
    return {
      loading: false,
      tableData: [
        { name: '----', nameCode: 'xxx' }
      ],
      columns: [
        { prop: 'nameCode', label: '申请编号', align: 'center' },
        { prop: 'name', label: '就医登记号', minWidth: '140px', align: 'center' },
        { prop: 'name', label: '关联申请号', align: 'center' },
        { prop: 'name', label: '申请方式', align: 'center' },
        { prop: 'name', label: '待遇类型', align: 'center' },
        { prop: 'name', label: '医疗服务机构', align: 'center' },
        { prop: 'name', label: '开始日期', align: 'center' },
        { prop: 'name', label: '结束日期', align: 'center' },
        { prop: 'name', label: '录入人', align: 'center' },
        { prop: 'name', label: '录入时间', align: 'center' },
        { prop: 'name', label: '初审时间', align: 'center' },
        { prop: 'name', label: '初审意见', align: 'center' },
        { prop: 'name', label: '审批人', align: 'center' },
        { prop: 'name', label: '复核人', align: 'center' },
        { prop: 'name', label: '复核时间', align: 'center' },
        { prop: 'name', label: '复核标志', align: 'center' },
        { prop: 'name', label: '备注', align: 'center' }
      ]

    }
  },
  methods: {
    exportClick() {

    },
    printClick() {

    }
  }
}
</script>
