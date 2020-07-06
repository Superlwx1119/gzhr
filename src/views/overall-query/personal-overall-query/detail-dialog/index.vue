<!-- 详情 -->
<template>
  <form-dialog
    class="audit-dialog"
    :title="dialogTitle"
    :is-show="isDialogVisible"
    size="big"
    @update:isShow="isShow"
    @resetForm="resetForm"
  >

    <div class="box">
      <div class="box-body">
        <my-table-view :border="true" :max-cloumns="7" :columns="detailColumns" :data="detailData" />
      </div>
    </div>

    <span slot="footer" class="dialog-footer">
      <el-button @click="closeDialog">关闭</el-button>
    </span>
  </form-dialog>

</template>
<script>

export default {
  components: {
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
      detailColumns: [
        { type: 'index', label: '序号' },
        { label: '变更类型', prop: 'aa' },
        { label: '亲属关系 ', prop: 'bb' },
        { label: '姓名', prop: 'cc' },
        { label: '变更项目名称', prop: 'dd' },
        { label: '变更前 ', prop: 'ee' },
        { label: '变更后 ', prop: 'ff' }
      ],
      detailData: [
        { aa: 'XXX',
          bb: '----',
          cc: '---',
          dd: '--',
          ee: 'Xx',
          ff: '--'
        }
      ]
    }
  },
  methods: {
    resetForm() {
      this.$emit('closeAll', false)
      // this.$refs.dataFrom1.elForm.resetFields()
      // this.$refs.dataFrom2.elForm.resetFields()
    },
    closeDialog() {
      this.$emit('closeAll', false)
    },
    isShow(v) {
      this.$emit('closeAll', false)
    }
  }
}
</script>
<style lang="scss" scoped>
.link{
  color: #409EFF;
}
  .special-form{
    /deep/.el-form {
      .el-form-item__label{
        display: flex;
        justify-content: center;
        flex-direction: column;
        height: 32px;
        line-height: 14px;
      }
    }
  }
  .table-transfer-box {
    padding: 10px;
    box-sizing: border-box;
    border: 1px solid #DCDFE6;
    border-radius: 5px;
  }
</style>
