<!-- 个人账户信息 -->
<template>
  <section>
    <div class="box" style="height: auto">
      <div class="box-body" style="padding-right: 0;">
        <table-items
          :item-datas="itemsDatas"
          :form-datas="formsDatas"
        />
      </div>
    </div>

    <normal-layer
      :search-number="tableData.length"
      title-name="变更信息"
    >
      <my-table-view
        :data="tableData"
        :columns="columns"
      />
      <Pagination />
    </normal-layer>

    <normal-layer
      :search-number="tableData.length"
      title-name="提现信息"
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
import TableItems from '@/views/components/PageLayers/table-items'
import NormalLayer from '@/views/components/PageLayers/normalLayer'
export default {
  components: {
    TableItems,
    NormalLayer
  },
  data() {
    return {
      itemsDatas: [
        [
          { label: '医保账户', prop: 'bb' },
          { label: '卡阶段', prop: 'bb' },
          { label: '卡类型', prop: 'bb' },
          { label: '统筹区', prop: 'bb' }
        ],
        [

          { label: '发卡日期', prop: 'bb' },
          { label: '开卡日期', prop: 'bb' },
          { label: '卡片序列号', prop: 'bb' },
          { label: '银行 ', prop: 'bb' }
        ],
        [
          { label: '金融账户', prop: 'bb' },
          { label: '市民卡卡号', prop: 'bb' },
          { label: '医保启用日期', prop: 'bb' },
          { label: '是否医保新发放社保卡', prop: 'bb' }
        ],
        [
          { label: '跨省应用验证情况', prop: 'bb' }
        ]
      ],
      formsDatas: {
        bb: '--'
      },
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
  }
}
</script>
