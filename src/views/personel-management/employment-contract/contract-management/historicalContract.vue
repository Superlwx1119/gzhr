<!-- 历史合同-->
<template>
  <form-dialog
    :title="dialogTitle"
    :is-show="isDialogVisible"
    size="big"
    @update:isShow="isShow"
  >
    <div class="box" style="height: auto">
      <box-title title-name="基本信息" />
      <div class="box-body" style="padding-right: 0;">
        <table-items
          :item-datas="itemsDatas"
          :form-datas="formsDatas"
        />
      </div>
    </div>
    <div class="box" style="height: auto">
      <box-title title-name="历史合同情况(选择行查看附件)" />
      <List :is-border="true" :is-index="true" :columns="columns" is-selection="true" :operates="tableOperates" :data="tableData" />
    </div>
    <span slot="footer" class="dialog-footer">
      <el-button @click="closeDialog">关闭</el-button>
      <el-button type="primary" @click="saveEvent">保存</el-button>
    </span>
  </form-dialog>
</template>
<script>
import BoxTitle from '@/views/components/PageLayers/box-title'
import TableItems from '@/views/components/PageLayers/table-items'
import pageHandle from '@/mixins/pageHandle'

export default {
  components: {
    BoxTitle,
    TableItems
  },
  mixins: [pageHandle],
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
          { label: '单位名称', prop: 'xxx', colspan: 5 }

        ],
        [
          { label: '姓名', prop: 'xxx', colspan: 2 },
          { label: '当前岗位等级', prop: 'xxx', colspan: 2 }
        ],
        [
          { label: '进入方式', prop: 'xxx', colspan: 2 },
          { label: '账户余额(元)', prop: 'xxx', colspan: 2 }
        ]
      ],
      formsDatas: {
        xxx: 'xxx'
      },
      dataForm: {
        xxx: '王五',
        b: '工勤二级(技师)',
        xxx1: ''
      },
      columns: [
        { label: '签订状态', prop: 'a', align: 'center', width: '200px' },
        { label: '聘期起始时间', prop: 'b', align: 'center' },
        { label: '聘期结束时间', prop: 'b', align: 'center' },
        { label: '聘期考核结果', prop: 'b', align: 'center' },
        { label: '是否试用期', prop: 'b', align: 'center' }

      ],
      tableData: [
        { a: '签订固定期限聘用合同', b: '2020-04-02', c: '2021-04-02', d: '合格', e: '是' },
        { a: '签订固定期限聘用合同', b: '2020-04-02', c: '2021-04-02', d: '合格', e: '是' },
        { a: '签订固定期限聘用合同', b: '2020-04-02', c: '2021-04-02', d: '合格', e: '是' }
      ],
      tableOperates: {
        width: '150px',
        fixed: 'right',
        list: [
          { show: true, label: '修订', type: 'text', method: () => {
          }
          },
          { show: true, label: '上传', type: 'text', method: () => {
          }
          },
          { show: true, label: '删除', type: 'text', class: 'delete', method: () => {
          }
          }
        ]
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
<style lang="scss" scoped>

</style>
