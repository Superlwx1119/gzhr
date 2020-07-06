<template>
  <!-- 城居个人缴费明细-->
  <form-dialog title="城居个人缴费明细" width="1000px" new-class="big" :is-show="visible" @update:isShow="updateIsShow">
    <section>
      <my-table-view height="300px" :columns="columns" :data="tableData" />
      <Pagination />
    </section>
    <span slot="footer" class="dialog-footer">
      <el-button @click="close()">关闭</el-button>
    </span>
  </form-dialog>
</template>

<script>
export default {
  name: '',
  components: {},
  props: {
    show: { type: Boolean, default: () => false }
  },
  data() {
    return {
      visible: this.show,
      columns: [
        { type: 'selection' },
        { label: '序号', type: 'index' },
        { label: '单位编码', prop: 'a' },
        { label: '单位名称', prop: 'b' },
        { label: '证件号码', prop: 'd' },
        { label: '姓名', prop: 'e' },
        { label: '性别', prop: 'e' },
        { label: '人员类别', prop: 'e' },
        { label: '征缴状态', prop: 'e' },
        { label: '费款所属期', prop: 'e' },
        { label: '对应费款所属期', prop: 'e' },
        { label: '应收金额（元）', prop: 'e' }
      ],
      tableData: [1, 2, 3].map(item => {
        return { 'a': 'CAC414288123' + item, 'b': '统筹区' + item, c: 'xxx', d: 'xxx', e: 'xxx', type: '2' }
      })
    }
  },
  computed: {
  },
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
      this.$emit('update:show', v)
    },
    close() {
      this.visible = false
      this.$emit('update:show', false)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
