<template>
  <!--明细-->
  <form-dialog title="居民缴费核定进度明细" width="1000px" new-class="big" :is-show="visible" @update:isShow="updateIsShow">
    <my-table-view :columns="columns" :data="tableData" />
    <Pagination />
    <span slot="footer" class="dialog-footer">
      <el-button @click="close()">关闭</el-button>
    </span>
  </form-dialog>
</template>

<script>
export default {
  name: 'Detail',
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
        { label: '统筹区', prop: 'area' },
        { label: '乡镇/街道', prop: 'a' },
        { label: '村/社区', prop: 'b' },
        { label: '计算结果', prop: 'c' },
        { label: '备注', prop: 'd' }
      ],
      tableData: [1, 2, 3].map(item => {
        return {
          area: '医保区划' + item,
          year: '2020',
          a: '100',
          b: '2',
          c: '计算完成',
          d: '未找到对应人员'
        }
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
