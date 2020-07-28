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
          <ContractSigningStatus v-model="dataForm.签订状态" />
        </template>
        <template slot="单位名称">
          <OrganizationName v-model="dataForm.单位名称" />
        </template>
      </form-items>
    </div>
    <div class="box" style="height: auto">
      <box-title title-name="业务附件" title-need-handle>
        <el-button type="primary">上传</el-button>
        <el-button type="danger">批量删除</el-button>
      </box-title>
      <List :is-border="true" :is-index="true" :columns="columns" :operates="tableOperates" :data="tableData" />
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
import OrganizationName from '@/components/Select/OrganizationName'
import pageHandle from '@/mixins/pageHandle'

export default {
  components: {
    FormItems,
    BoxTitle,
    ContractSigningStatus,
    OrganizationName
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
        { label: '单位名称', prop: '单位名称', type: 'custom', slotName: '单位名称', span: 8 },
        { label: '身份证', prop: 'b', type: 'input', span: 8 },
        { label: '申请人', prop: '签订状态', type: 'custom' },
        { label: '主体岗位', prop: 'xxx1', type: 'date', span: 8 },
        { label: '回避事项', prop: 'xxx2', type: 'date', span: 8 },
        { label: '回避类型', prop: 'xxx3', type: 'select', span: 8 },
        { label: '申请时间', prop: 'xxx3', type: 'date', span: 8 },
        { label: '回避情况', prop: 'xxx4', type: 'textarea', span: 24 }
      ],

      dataForm: {},
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
