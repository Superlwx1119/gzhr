<!-- 修改-->
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
        <template slot="处分类型">
          <PunishmentType v-model="queryForm.处分类型" />
        </template>
        <template slot="处分名称">
          <PunishmentName v-model="queryForm.处分名称" />
        </template>
        <template slot="批准机关">
          <ApprovalAuthority v-model="queryForm.批准机关" />
        </template>
        <template slot="处分原因">
          <PunishmentReason v-model="queryForm.处分原因" />
        </template>
      </form-items>
    </div>
    <div class="box" style="height: auto">
      <box-title title-name="业务附件" title-need-handle>
        <el-button type="primary">上传</el-button>
        <el-button type="danger">批量删除</el-button>
      </box-title>
      <List :is-border="true" :is-index="true" :columns="columns" :is-selection="true" :operates="tableOperates" :data="tableData" />
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
import PunishmentType from '@/components/Select/PunishmentType'
import PunishmentName from '@/components/Select/PunishmentName'
import ApprovalAuthority from '@/components/Select/ApprovalAuthority'
import PunishmentReason from '@/components/Select/RewardReson'
import pageHandle from '@/mixins/pageHandle'

export default {
  components: {
    FormItems,
    BoxTitle,
    PunishmentType,
    PunishmentName,
    ApprovalAuthority,
    PunishmentReason
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
        { label: '姓名', prop: 'xxx', type: 'input', span: 12, disabled: true },
        { label: '身份证号', prop: 'b', type: 'input', span: 12, disabled: true },
        { label: '单位名称', prop: 'c', type: 'input', span: 24, disabled: true },
        { label: '处分类型', prop: '处分类型', type: 'custom', span: 12 },
        { label: '处分名称', prop: '处分名称', type: 'custom', span: 12 },
        { label: '批准日期', prop: 'd', type: 'date', span: 12 },
        { label: '批准机关', prop: '批准机关', type: 'custom', span: 12 },
        { label: '处分原因', prop: '处分原因', type: 'custom', span: 24 },
        { label: '处分期(月)', prop: '处分期(月)', type: 'input', span: 12 },
        { label: '期满日期', prop: 'd', type: 'date', span: 12 },
        { label: '监察机关标识', prop: 'f', type: 'select', span: 12, options: [{ value: '0', label: '是' }, { value: '1', label: '否' }] },
        { label: '撤销日期', prop: 'd', type: 'date', span: 12 },
        { label: '撤销原因', prop: '撤销原因', type: 'textarea', span: 24 },
        { label: '备注', prop: '备注', type: 'textarea', span: 24 }
      ],

      dataForm: {
        xxx: '王五',
        b: '230302198604059715',
        c: '事业单位',
        d: '',
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
