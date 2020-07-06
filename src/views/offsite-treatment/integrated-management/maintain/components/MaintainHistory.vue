<template>
  <form-dialog :title="dialogTitle" :is-show="isDialogVisible" @update:isShow="isShow" @resetForm="resetForm">
    <div class="box" style="height: 500px">
      <my-table-view :border="true" :columns="columns" :data="tableData" />
      <Pagination />
    </div>
    <span slot="footer" class="dialog-footer">
      <el-button @click="closeDialog()">关闭</el-button>
    </span>
  </form-dialog>
</template>
<script>
import { historyColumns } from '../tableConfig'
export default {
  props: {
    isDialogVisible: {
      type: Boolean,
      default: false
    },
    dialogTitle: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      columns: historyColumns,
      tableData: []
    }
  },
  methods: {
    resetForm() {
      this.$emit('update:isShow', false)
    },
    closeDialog() {
      this.$emit('update:isShow', false)
    },
    isShow(v) {
      this.$emit('update:isShow', v)
    }
  }
}
</script>
