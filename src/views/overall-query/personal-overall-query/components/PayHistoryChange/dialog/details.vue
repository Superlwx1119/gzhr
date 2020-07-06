<template>
  <form-dialog
    :title="dialogTitle"
    :is-show="isDialogVisible"
    size="big"
    @update:isShow="isShow"
  >

    <normal-layer
      :search-number="tableData.length"
      title-name="原始记录"
    >
      <my-table-view
        :data="tableData"
        :columns="columns"
      />

      <Pagination />
    </normal-layer>

    <normal-layer
      :search-number="tableData.length"
      title-name="变更后记录"
    >
      <my-table-view
        :data="tableData"
        :columns="columns"
      />
      <Pagination />
    </normal-layer>

    <normal-layer
      :search-number="tableData.length"
      title-name="删除记录"
    >
      <my-table-view
        :data="tableData"
        :columns="columns"
      />
      <Pagination />
    </normal-layer>

    <normal-layer
      :search-number="tableData.length"
      title-name="新增记录"
    >
      <my-table-view
        :data="tableData"
        :columns="columns"
      />
      <Pagination />
    </normal-layer>
  </form-dialog>
</template>
<script>
import NormalLayer from '@/views/components/PageLayers/normalLayer'
export default {
  components: {
    NormalLayer
  },
  model: {
    prop: 'isDialogVisible',
    event: 'closeAll'
  },
  props: {
    isDialogVisible: {
      type: Boolean,
      default: false
    },
    dialogTitle: {
      type: String,
      default: '标题'
    }
  },
  data() {
    return {
      columns: [
        { type: 'index', label: '序号', width: '55px' },
        { prop: 'nameCode', label: '流水号', align: 'center' },
        { prop: 'nameCode', label: '个人编号', align: 'center' },
        { prop: 'code', label: '费款所属期', align: 'center' },
        { prop: 'nameCode', label: '对应费款所属期', align: 'center' },
        { prop: 'nameCode', label: '单位编号', minWidth: '200px', align: 'center' },
        { prop: 'nameCode', label: '统筹区编码', align: 'center' },
        { prop: 'nameCode', label: '险种类型', align: 'center' },
        { prop: 'code', label: '缴费类型', align: 'center' },
        { prop: 'nameCode', label: '核定方式', align: 'center' },
        { prop: 'nameCode', label: '款项', minWidth: '200px', align: 'center' },
        { prop: 'nameCode', label: '金额(元)', align: 'center' },
        { prop: 'nameCode', label: '到账标志', align: 'center' },
        { prop: 'code', label: '变更标记', align: 'center' },
        { prop: 'nameCode', label: '到账日期', align: 'center' }
      ],
      tableData: [
        { name: 'xxx', code: 'xxx', nameCode: 'xxx' }
      ]
    }
  },
  methods: {
    // resetForm() {
    //   this.$emit('closeAll', false)
    //   this.$refs.ruleFrom.elForm.resetFields()
    // },
    closeDialog() {
      this.$emit('closeAll', false)
    },
    saveEvent() {
      this.$msgSuccess('保存成功')
      this.$emit('closeAll', false)
    },
    // },
    isShow(v) {
      this.$emit('closeAll', false)
    }
  }
}
</script>

<style lang="scss">
.box-body {
  height: 100%;
}
.detail-info {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  margin-left: 16px;
  & > div {
    margin-right: 30px;
    label {
      color: #636363;
    }
    span {
      color: #101010;
    }
  }
}
</style>
