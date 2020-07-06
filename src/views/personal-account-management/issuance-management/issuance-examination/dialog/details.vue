<template>
  <form-dialog
    :title="dialogTitle"
    :is-show="isDialogVisible"
    size="big"
    @update:isShow="isShow"
  >
    <div class="box">
      <div class="box-body">
        <div class="box-body query">
          <table-items :item-datas="itemsDatas" :form-datas="formsDatas" />
        </div>
      </div>
      <el-col :span="24">
        <el-button type="primary" style="float: right" @click="closeDialog">取消</el-button>
      </el-col>
    </div>
  </form-dialog>
</template>
<script>
import TableItems from '@/views/components/PageLayers/table-items'

export default {
  components: {
    TableItems
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
      itemsDatas: [
        [
          { label: '姓名', prop: 'xxx' },
          { label: '证件号码', prop: 'xxx' },
          { label: '参保身份', prop: 'xxx' }
        ],
        [
          { label: '费款所属期', prop: 'xxx' },
          { label: '对应费款所属期', prop: 'xxx', colspan: 3 }
        ],
        [
          { label: '费款所属期', prop: 'xxx', colspan: 6 }
        ],
        [
          { label: '总金额', prop: 'xxx' },
          { label: '个人划入个账金额', prop: 'xxx' },
          { label: '单位划入个账金额', prop: 'xxx' }
        ],
        [
          { label: '交换数据批号', prop: 'xxx' },
          { label: '历史批号', prop: 'xxx' },
          { label: '银行数据批号', prop: 'xxx' }
        ],
        [
          { label: '备注', prop: 'xxx', colspan: 6 }
        ]
      ],
      formsDatas: {
        xxx: 'xxx',
        xxx1: ''
      }
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
