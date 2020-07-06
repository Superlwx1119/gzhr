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
      <box-title title-name="支取信息" />
      <div class="box-body">
        <table-items
          :item-datas="itemsDatas3"
          :form-datas="formsDatas3"
        />
      </div>
    </div>

    <span slot="footer" class="dialog-footer">
      <el-button @click="closeDialog">关闭</el-button>
      <el-button type="primary" @click="closeDialog">查看影像档案</el-button>
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
          { label: '账户处理方式', prop: 'xxx' },
          { label: '个人账户余额', prop: 'xxx' },
          { label: '开户银行', prop: 'xxx' }
        ],
        [
          { label: '卡状态', prop: 'xxx' },
          { label: '封面卡号', prop: 'xxx' },
          { label: '发卡日期', prop: 'xxx' }
        ],
        [
          { label: '受理单号', prop: 'xxx' },
          { label: '经办人', prop: 'xxx' },
          { label: '经办时间', prop: 'xxx' }
        ],
        [
          { label: '个人账户余额', prop: 'xxx' },
          { label: '送单人', prop: 'xxx' },
          { label: '联系电话', prop: 'xxx' }
        ],
        [
          { label: '支取人姓名', prop: 'xxx' },
          { label: '支取人证件类', prop: 'xxx' },
          { label: '支取人证件号', prop: 'xxx' }
        ],
        [
          { label: '支取日期', prop: 'xxx' },
          { label: '支取原因', prop: 'xxx', colspan: 3 }
        ],
        [
          { label: '审核人', prop: 'xxx' },
          { label: '审核时间', prop: 'xxx' },
          { label: '业务状态', prop: 'xxx' }
        ],
        [
          { label: '备注', prop: 'xxx', colspan: 5 }
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
