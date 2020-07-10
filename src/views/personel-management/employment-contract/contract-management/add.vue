<!-- 新增合同签订-->
<template>
  <form-dialog
    :title="dialogTitle"
    :is-show="isDialogVisible"
    size="big"
    @update:isShow="isShow"
  >
    <div class="box" style="height: auto">
      <box-title title-name="基本信息" />
      <form-items :items-datas="itemsDatas" :form-datas="dataForm" :is-grid="false">
        <template slot="签订状态">
          <ContractSigningStatus v-model="queryForm.签订状态" />
        </template>
      </form-items>
    </div>
    <div class="box" style="height: auto">
      <box-title title-name="业务附件" title-need-handle>
        <el-button type="primary">上传</el-button>
        <el-button type="danger">批量删除</el-button>
      </box-title>
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
import FormItems from '@/views/components/PageLayers/form-items'
import ContractSigningStatus from '@/components/Select/ContractSigningStatus'
import pageHandle from '@/mixins/pageHandle'

export default {
  components: {
    FormItems,
    BoxTitle,
    ContractSigningStatus
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
        { label: '姓名', prop: 'xxx', type: 'input', span: 8, disabled: true },
        { label: '当前岗位等级', prop: 'b', type: 'input', span: 8, disabled: true },
        { label: '签订状态', prop: '签订状态', type: 'custom' },
        { label: '聘期起始日期', prop: 'xxx1', type: 'date', span: 8 },
        { label: '聘期结束日期', prop: 'xxx1', type: 'date', span: 8 },
        { label: '是否试用期', prop: 'xxx1', type: 'select', options: [{ value: '0', label: '是' }, { value: '1', label: '否' }], span: 8 },
        { label: '聘期考核结果', prop: 'xxx1', type: 'select', options: [{ value: '0', label: '合格' }, { value: '1', label: '不合格' }], span: 8 }
      ],

      dataForm: {
        xxx: '王五',
        b: '工勤二级(技师)',
        xxx1: ''
      },
      columns: [
        { label: '文件名称', prop: 'a', align: 'center' },
        { label: '上传日期', prop: 'b', align: 'center' }

      ],
      tableData: [
        { a: '文件名称', b: '上传日期' },
        { a: '文件名称', b: '上传日期' },
        { a: '文件名称', b: '上传日期' }
      ],
      tableOperates: {
        width: '120px',
        fixed: 'right',
        list: [
          { show: true, label: '下载', type: 'text', method: () => {
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
