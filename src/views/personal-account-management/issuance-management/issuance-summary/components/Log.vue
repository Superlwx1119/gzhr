<template>
  <form-dialog :title="dialogTitle" :is-show="isDialogVisible" @update:isShow="isShow" @resetForm="resetForm">
    <div style="height: 500px">
      <my-table-view :border="true" :columns="columns" :data="tableData" />
      <Pagination />
    </div>
    <span slot="footer" class="dialog-footer">
      <el-button @click="close">关闭</el-button>
    </span>
  </form-dialog>
</template>

<script>
import { calculateLogColumns, issueLogColumns } from '../tableConfig'
export default {

  props: {
    dialogTitle: {
      type: String,
      default: ''
    },
    isDialogVisible: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      columns: [],
      tableData: []
    }
  },
  watch: {
    dialogTitle: {
      handler(v) {
        this.columns = v === '计算日志' ? calculateLogColumns : issueLogColumns
      },
      immediate: true
    }
  },
  methods: {
    close() {
      this.$emit('update:isShow', false)
    },
    isShow(v) {
      this.$emit('update:isShow', v)
    },
    resetForm() {
      this.$emit('update:isShow', false)
    }
  }

}
</script>

<style lang="scss" scoped>

</style>

