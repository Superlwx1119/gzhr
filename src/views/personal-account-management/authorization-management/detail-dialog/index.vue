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
    <div class="box" style="height: auto">
      <box-title title-name="人员基本信息" />
      <div class="box-body">
        <table-items
          :item-datas="itemsDatas1"
          :form-datas="formsDatas1"
        />
      </div>
    </div>

    <div class="box" style="height: auto">
      <box-title title-name="详细信息" />
      <div class="box-body">
        <table-items
          :item-datas="itemsDatas3"
          :form-datas="formsDatas3"
        />
      </div>
    </div>

    <span slot="footer" class="dialog-footer">
      <el-button @click="closeDialog">关闭</el-button>
    </span>
  </form-dialog>

</template>
<script>
import TableItems from '@/views/components/PageLayers/table-items'
import BoxTitle from '@/views/components/PageLayers/box-title'
export default {
  components: {
    TableItems,
    BoxTitle
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
      itemsDatas1: [
        [
          { label: '姓名', prop: 'xxx' },
          { label: '证件号码', prop: 'xxx' },
          { label: '性别', prop: 'xxx' }
        ],
        [
          { label: '出生日期', prop: 'xxx' },
          { label: '参加工作日期', prop: 'xxx', colspan: 3 }
        ]
      ],
      formsDatas1: {
        xxx: 'xxx'
      },
      itemsDatas3: [
        [
          { label: '提现原因', prop: 'xxx' },
          { label: '提现类型', prop: 'xxx' },
          { label: '个人账户处理', prop: 'xxx' }
        ],
        [
          { label: '联系电话', prop: 'xxx' },
          { label: '申请人姓名', prop: 'xxx' },
          { label: '申请人证件号', prop: 'xxx' }
        ],
        [
          { label: '提现日期', prop: 'xxx' },
          { label: '开户银行', prop: 'xxx' },
          { label: '发卡日期', prop: 'xxx' }
        ],
        [
          { label: '封面卡号', prop: 'xxx' },
          { label: '卡状态', prop: 'xxx' },
          { label: '个人账户余额', prop: 'xxx' }
        ]
      ],
      formsDatas3: {
        xxx: 'xxx'
      }
    }
  },
  methods: {
    resetForm() {
      this.$emit('closeAll', false)
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
