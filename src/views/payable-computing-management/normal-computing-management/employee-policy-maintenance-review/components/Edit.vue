<template>
  <form-dialog title="政策信息修改" :is-show="visible" width="1000px" new-class="big" @update:isShow="updateIsShow">
    <form-items
      ref="editForm"
      :model="editForm"
      :rules="rules"
      :is-grid="false"
      :items-datas="itemsDatas"
      :form-datas="editForm"
    >
      <template slot="tjys">
        <div>
          <el-input v-model="editForm.tjys" placeholder="请输入内容" disabled class="input-with-select">
            <el-button slot="append" icon="el-icon-more" @click="openConditionalElementInfoDialog" />
          </el-input>
        </div>
      </template>
      <template slot="jsys">
        <div>
          <el-input v-model="editForm.jsys" placeholder="请输入内容" disabled class="input-with-select">
            <el-button slot="append" icon="el-icon-more" @click="openCardinalityElementInfoDialog" />
          </el-input>
        </div>
      </template>
      <template slot="blys">
        <div>
          <el-input v-model="editForm.blys" placeholder="请输入内容" disabled class="input-with-select">
            <el-button slot="append" icon="el-icon-more" @click="openRatioElementInfoDialog" />
          </el-input>
        </div>
      </template>
    </form-items>
    <span slot="footer" class="dialog-footer">
      <!-- <el-button @click="cancel('editForm')">取消</el-button>
      <el-button type="primary" @click="submit('editForm')">保存</el-button> -->
    </span>
    <ConditionalElementInfoDialog :show.sync="isConditionalElementInfoDialogVisible" @submit="selectConditional" />
    <CardinalityElementInfoDialog :show.sync="isCardinalityElementInfoDialogVisible" @submit="selectCardinality" />
    <RatioElementInfoDialog :show.sync="isRatioElementInfoDialogVisible" @submit="selectRatio" />
  </form-dialog>
</template>

<script>
import FormItems from '@/views/components/PageLayers/form-items'
import ConditionalElementInfoDialog from './ConditionalElementInfoDialog'
import CardinalityElementInfoDialog from './CardinalityElementInfoDialog'
import RatioElementInfoDialog from './RatioElementInfoDialog'
export default {
  name: 'Edit',
  components: {
    FormItems,
    ConditionalElementInfoDialog,
    CardinalityElementInfoDialog,
    RatioElementInfoDialog
  },
  mixins: [],
  props: {
    show: { type: Boolean, default: () => false },
    form: { type: Object, default: () => {} }
  },
  data() {
    return {
      visible: this.show,
      editForm: this.form,
      rules: {
      },
      itemsDatas: [
        { label: '社保业务编号', prop: 'xxx', type: 'select', disabled: true },
        { label: '地市', prop: 'ds', type: 'select', disabled: true },
        { label: '医保区划', prop: 'ybqh', type: 'select', disabled: true },
        { label: '险种', prop: 'xz', type: 'select', disabled: true },
        { label: '条件要素', prop: 'tjys', type: 'custom', disabled: true },
        { label: '基数要素', prop: 'jsys', type: 'custom', disabled: true },
        { label: '有效时间', prop: 'yxsj', type: 'dateRange', disabled: true },
        { label: '款项', prop: 'kx', type: 'select', disabled: true },
        { label: '比率要素', prop: 'blys', type: 'custom', disabled: true },
        { label: '政策类型', prop: 'zcType', type: 'select', disabled: true },
        { label: '政策描述', prop: 'zcms', type: 'input', disabled: true },
        { label: '计算周期', prop: 'jszq', type: 'select', disabled: true },
        { label: '计算方式', prop: 'jsfs', type: 'select', disabled: true }
      ],
      isConditionalElementInfoDialogVisible: false,
      isCardinalityElementInfoDialogVisible: false,
      isRatioElementInfoDialogVisible: false
    }
  },
  computed: {
  },
  watch: {
    show: function(newVal, oldVal) {
      this.visible = this.show
    },
    form: function(newVal, oldVal) {
      this.editForm = this.form
    }
  },
  created() {
  },
  mounted() {
  },
  methods: {
    updateIsShow(v) {
      this.cancel()
      this.$emit('update:show', v)
    },
    resetForm() {
      this.$refs.editForm.elForm.resetFields()
    },
    cancel() {
      this.visible = false
      this.$refs.editForm.elForm.resetFields()
      this.$emit('update:show', false)
    },
    openConditionalElementInfoDialog() {
      this.isConditionalElementInfoDialogVisible = true
    },
    openCardinalityElementInfoDialog() {
      this.isCardinalityElementInfoDialogVisible = true
    },
    openRatioElementInfoDialog() {
      this.isRatioElementInfoDialogVisible = true
    },
    selectCardinality() {
      this.editForm.jsys = '个人工资【社平60%保底300%拦头】'
    },
    selectConditional() {
      this.editForm.tjys = '基本医疗单位缴纳'
    },
    selectRatio() {
      this.editForm.blys = '单位缴纳8%'
    }
  }
}
</script>

<style lang="scss" scoped>
  .input-with-select /deep/ .el-input-group__append {
    padding: 0 20px !important;
}
</style>
