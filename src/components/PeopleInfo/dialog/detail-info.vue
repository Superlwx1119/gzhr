<template>
  <form-dialog title="就诊信息及不受理回执信息" :is-show="visible" width="1000px" new-class="big" @update:isShow="updateIsShow" @resetForm="resetForm">
    <section class="layer">
      <div class="box">
        <div class="box-body">
          <el-form ref="searchForm" class="box-search" :model="searchForm" :inline="true" label-width="105px">
            <el-form-item label="查询日期" prop="date">
              <el-date-picker v-model="searchForm.date" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" />
            </el-form-item>
            <el-button type="primary">查询</el-button>
          </el-form>
          <List :loading="loading" :is-index="true" :is-border="true" :columns="tableColumns" :data="fundData" />
          <Pagination />
        </div>
      </div>
    </section>
    <span slot="footer" class="dialog-footer">
      <el-button @click="close">关闭</el-button>
    </span>
  </form-dialog>
</template>

<script>
export default {
  name: 'DetailInfo',
  components: {},
  mixins: [],
  props: {
    show: {
      type: Boolean,
      default: () => { return false }
    }
  },
  data() {
    return {
      visible: this.show,
      loading: false,
      searchForm: {
        date: null
      },
      tableColumns: [
        { label: '医院名称', prop: 'fundName', sortable: false, align: 'center', overflow: true, width: '120px' },
        { label: '疾病名称', prop: 'fundName', sortable: false, align: 'center', overflow: true, width: '120px' },
        { label: '就诊日期', prop: 'date', sortable: false, align: 'center' },
        { label: '结算日期', prop: 'date', sortable: false, align: 'center' },
        { label: '业务类型', prop: 'fundStatus', sortable: false, align: 'center' },
        { label: '待遇类型', prop: 'fundStatus', sortable: false, align: 'center' },
        { label: '经办人', prop: 'fundStatus', sortable: false, align: 'center' },
        { label: '经办日期', prop: 'date', sortable: false, align: 'center' },
        { label: '回执类型', prop: 'fundStatus', sortable: false, align: 'center' }
      ],
      fundData: [
        { fundName: '统筹基金', date: '2020-05-22', fundStatus: '已参保' }
      ]
    }
  },
  computed: {},
  watch: {
    show() {
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
    resetForm() {
      this.$refs.searchForm.resetFields()
    },
    close() {
      this.visible = false
      this.resetForm()
      this.$emit('update:show', false)
    }
  }
}
</script>

<style scoped lang="scss"></style>
