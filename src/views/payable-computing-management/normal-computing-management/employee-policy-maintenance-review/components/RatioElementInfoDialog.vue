<template>
  <form-dialog title="比率要素信息" :is-show="visible" width="1000px" new-class="big" @update:isShow="updateIsShow">
    <div class="box" style="height:auto;">
      <div class="box-header">
        <span class="box-title">比率要素</span>
      </div>
      <div class="box-body">
        <form-items
          ref="addForm"
          :model="addForm"
          :rules="rules"
          :is-grid="false"
          :items-datas="itemsDatas"
          :form-datas="addForm"
        />
      </div>
    </div>
    <span slot="footer" class="dialog-footer" />
  </form-dialog>
</template>

<script>
import FormItems from '@/views/components/PageLayers/form-items'
export default {
  name: 'Add',
  components: {
    FormItems
  },
  mixins: [],
  props: {
    show: { type: Boolean, default: () => false }
  },
  data() {
    return {
      visible: this.show,
      addForm: {
        ybqh: '',
        xz: '',
        blms: '',
        ds: '',
        sbywCode: '',
        blysType: '',
        blz: ''
      },
      rules: {
        // ybqh: { required: true, message: '请选择医保区划', trigger: 'blur' },
        // xz: { required: true, message: '请选择险种', trigger: 'blur' },
        // blms: { required: true, message: '请输入比例描述', trigger: 'blur' },
        // ds: { required: true, message: '请选择地市', trigger: 'blur' },
        // sbywCode: { required: true, message: '请选择社保业务编号', trigger: 'blur' },
        // blysType: { required: true, message: '请选择比例要素类型', trigger: 'blur' },
        // blz: { required: true, message: '请输入比率值', trigger: 'blur' }
      },
      itemsDatas: [
        { label: '医保区划', prop: 'ybqh', type: 'select', disabled: true },
        { label: '险种', prop: 'xz', type: 'select', disabled: true },
        { label: '比例描述', prop: 'blms', type: 'input', disabled: true },
        { label: '地市', prop: 'ds', type: 'select', disabled: true },
        { label: '社保业务编号', prop: 'sbywCode', type: 'select', disabled: true },
        { label: '比例要素类型', prop: 'blysType', type: 'select', disabled: true },
        { label: '比率值', prop: 'blz', type: 'input', disabled: true }
      ]
    }
  },
  computed: {},
  watch: {
    show: function(newVal, oldVal) {
      this.visible = this.show
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
      this.$refs.addForm.elForm.resetFields()
    },
    cancel() {
      this.visible = false
      this.$refs.addForm.elForm.resetFields()
      this.$emit('update:show', false)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
