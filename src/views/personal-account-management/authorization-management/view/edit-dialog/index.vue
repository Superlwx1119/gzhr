<!-- 新增 编辑 -->
<template>
  <form-dialog
    :title="dialogTitle"
    :is-show="isDialogVisible"
    size="big"
    @update:isShow="isShow"
    @resetForm="resetForm"
  >
    <div class="box" style="height: auto">
      <box-title title-name="授权人信息" />
      <div class="box-body" style="padding-right: 0;">
        <table-items
          :item-datas="itemsDatas"
          :form-datas="formsDatas"
        />
      </div>
    </div>

    <div class="box" style="height: auto">
      <box-title title-name="代理人信息" />
      <div class="box-body" style="padding-right: 0;">
        <table-items
          :item-datas="itemsDatas1"
          :form-datas="formsDatas"
        />
      </div>
    </div>

    <div class="box" style="height: auto">
      <box-title title-name="使用人信息" />
      <div class="box-body" style="padding-right: 0;">
        <table-items
          :item-datas="itemsDatas2"
          :form-datas="formsDatas"
        />
      </div>
    </div>

    <div class="box" style="height: auto">
      <box-title title-name="解绑信息" />
      <form-items
        ref="ruleFrom"
        :model="formDataForm"
        :rules="rules"
        :is-grid="false"
        :items-datas="formItemsDatas"
        :form-datas="formDataForm"
      />
    </div>

    <span slot="footer" class="dialog-footer">
      <el-button @click="closeDialog">关闭</el-button>
      <el-button type="primary" @click="saveEvent">保存</el-button>
    </span>
  </form-dialog>

</template>
<script>
import TableItems from '@/views/components/PageLayers/table-items'
import FormItems from '@/views/components/PageLayers/form-items'
import BoxTitle from '@/views/components/PageLayers/box-title'
export default {
  components: {
    TableItems,
    FormItems,
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
      itemsDatas: [
        [
          { label: '证件类型', prop: 'xxx' },
          { label: '证件号码', prop: 'xxx' },
          { label: '姓名', prop: 'xxx' }
        ],
        [
          { label: '性别', prop: 'xxx' },
          { label: '人员类别', prop: 'xxx' },
          { label: '单位名称', prop: 'xxx' }
        ],
        [
          { label: '医保区划', prop: 'xxx', colspan: 3 },
          { label: '账户余额(元)', prop: 'xxx' }
        ]
      ],
      itemsDatas1: [
        [
          { label: '证件类型', prop: 'xxx' },
          { label: '证件号码', prop: 'xxx' },
          { label: '联系方式', prop: 'xxx' }
        ],
        [
          { label: '联系地址', prop: 'xxx', colspan: 5 }
        ]
      ],
      itemsDatas2: [
        [
          { label: '人员编号', prop: 'xxx' },
          { label: '证件类型', prop: 'xxx' },
          { label: '证件号码', prop: 'xxx' }
        ],
        [
          { label: '姓名', prop: 'xxx' },
          { label: '性别', prop: 'xxx' },
          { label: '人员类别', prop: 'xxx' }
        ],
        [
          { label: '医保区划', prop: 'xxx', colspan: 3 },
          { label: '与授权人关系', prop: 'xxx' }
        ]
      ],
      formsDatas: {
        xxx: 'xxx'
      },
      formItemsDatas: [
        { label: '解绑原因', prop: 'xxx', type: 'textarea', span: 24 }
      ],
      formDataForm: {
        xxxx: '',
        xxx: ''
      },
      rules: {
        xxx: [{ required: true, message: '请输入', trigger: 'blur' }]
      }
    }
  },
  methods: {
    resetForm() {
      this.$emit('closeAll', false)
      this.$refs.ruleFrom.elForm.resetFields()
    },
    closeDialog() {
      this.$emit('closeAll', false)
    },
    saveEvent() {
      this.$refs.ruleFrom.elForm.validate((valid) => {
        if (valid) {
          this.$msgSuccess('保存成功')
          this.$emit('closeAll', false)
        }
      })
    },
    isShow(v) {
      this.$emit('closeAll', false)
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
