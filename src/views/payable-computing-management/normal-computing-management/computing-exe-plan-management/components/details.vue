<template>
  <div>
    <form-dialog title="详情信息" width="1000px" new-calss="big" :is-show="show" @update:isShow="addIsShow">
      <template>
        <div>
          <section class="layer layer-result">
            <div class="box">
              <div class="box-body result">
                <ExpandList
                  :is-border="true"
                  :is-index="true"
                  :columns="tableColumns"
                  :data="tableData"
                />
                <Pagination />
              </div>
            </div>
          </section>
        </div>
      </template>

      <span slot="footer" class="dialog-footer">
        <el-button @click="cancel">关闭</el-button>
      </span>
    </form-dialog>
  </div>
</template>

<script>
export default {
  name: '',
  mixins: [],
  props: {
    show: {
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
      searchForm: {

      },
      tableColumns: [
        { label: '单位管理码', prop: '单位管理码1', align: 'center' },
        { label: '单位名称', prop: '单位名称1', align: 'center' },
        { label: '险种类型', prop: '险种类型1', align: 'center', width: '200px' },
        { label: '费用计算期起', prop: '费用计算期起1', align: 'center' },
        { label: '费用计算期止', prop: '费用计算期止1', align: 'center' }
      ],
      tableData: [
        { 单位管理码1: '100801', 单位名称1: '创智和宇', 险种类型1: '基本医疗保险', 费用计算期起1: '201908', 费用计算期止1: '201908' }
      ]
    }
  },
  computed: {},
  watch: {},
  created() {
  },
  mounted() {
  },
  methods: {
    addIsShow(v) {
      this.$emit('update:show', v)
    },
    //  取消审核弹窗
    cancel() {
      this.$emit('update:show', false)
    }
  }
}
</script>

<style scoped lang="scss">
.bottomline{
  border-bottom:1px solid red($color: #cf8e43)}
</style>
