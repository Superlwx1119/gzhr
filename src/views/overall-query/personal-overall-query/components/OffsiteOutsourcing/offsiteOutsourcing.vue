<!-- 异地门诊包干 -->
<template>
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
import PageHandle from '@/mixins/pageHandle'
export default {
  components: {
    // NormalLayer
  },
  mixins: [PageHandle],
  data() {
    return {
      loading: false,
      tableData: [
        { name: '----', nameCode: 'xxx' }
      ],
      columns: [
        { prop: 'nameCode', label: '包干序列号', align: 'center' },
        { prop: 'name', label: '所属单位', align: 'center' },
        { prop: 'name', label: '费款所属期', align: 'center' },
        { prop: 'name', label: '对应费款所属期', align: 'center' },
        { prop: 'name', label: '拨付金额（元）', align: 'center' },
        { prop: 'name', label: '基数', align: 'center' },
        { prop: 'name', label: '批次号', align: 'center' },
        { prop: 'name', label: '银行交换批次号', align: 'center' },
        { prop: 'name', label: '拨付日期', align: 'center' },
        { prop: 'name', label: '所属管理区', align: 'center' },
        { prop: 'name', label: '业务状态', align: 'center' },
        { prop: 'name', label: '异地邮寄标志', align: 'center' }
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
