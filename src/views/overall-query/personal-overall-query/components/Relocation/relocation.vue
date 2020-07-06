<!-- 异地安置 -->
<template>
  <section>
    <normal-layer
      :search-number="tableData.length"
      title-name="异地安置变更信息"
    >
      <my-table-view
        :data="tableData"
        :columns="columns"
      />
      <Pagination />
    </normal-layer>

    <normal-layer
      :search-number="tableData.length"
      title-name="临时异地安置信息"
    >
      <my-table-view
        :data="tableData"
        :columns="columns"
      />
      <Pagination />
    </normal-layer>

    <normal-layer
      :search-number="tableData.length"
      title-name="长期异地安置信息"
    >
      <my-table-view
        :data="tableData"
        :columns="columns"
      />
      <Pagination />
    </normal-layer>

    <normal-layer
      :search-number="tableData.length"
      title-name="临时回统筹区异地安置信息"
    >
      <my-table-view
        :data="tableData"
        :columns="columns"
      />
      <Pagination />
    </normal-layer>

    <normal-layer
      :search-number="tableData.length"
      title-name="异地安置历史信息"
    >
      <my-table-view
        :data="tableData"
        :columns="columns"
      />
      <Pagination />
    </normal-layer>
  </section>
</template>
<script>
import NormalLayer from '@/views/components/PageLayers/normalLayer'
export default {
  components: {
    NormalLayer
  },
  data() {
    return {
      activeName: 'first',
      tableData: [
        { name: '----', nameCode: 'xxx' }
      ],
      columns: [
        { type: 'index', label: '序号', width: '55px' },
        { prop: 'nameCode', label: '变更序号', align: 'center' },
        { prop: 'name', label: '异地安置申请序号', align: 'center' },
        { prop: 'name', label: '变更内容', align: 'center' },
        { prop: 'name', label: '变更前值', align: 'center' },
        { prop: 'name', label: '变更后值', align: 'center' },
        { prop: 'name', label: '操作人', align: 'center' },
        { prop: 'name', label: '操作人工号', align: 'center' },
        { prop: 'name', label: '操作时间', align: 'center' }
      ]
    }
  }

}
</script>
