<template>
  <form-dialog title="基金状态信息" :is-show="visible" width="1000px" new-class="big" @update:isShow="updateIsShow" @resetForm="resetForm">
    <section class="layer">
      <div class="box">
        <div class="box-body">
          <el-form ref="searchForm" class="box-search" :model="searchForm" :inline="true" label-width="105px">
            <el-form-item label="查询日期" prop="date">
              <el-date-picker v-model="searchForm.date" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" />
            </el-form-item>
            <el-form-item label="基金类型" prop="type">
              <el-select v-model="searchForm.type" style="width: 240px;" placeholder="请选择">
                <el-option label="大病基金" value="1" />
                <el-option label="门诊统筹基金" value="2" />
                <el-option label="企业补充基金" value="3" />
                <el-option label="统筹基金" value="4" />
              </el-select>
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
  name: 'FundStatus',
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
        date: null,
        type: null
      },
      tableColumns: [
        { label: '基金名称', prop: 'fundName', sortable: false, align: 'center' },
        { label: '期间', prop: 'date', sortable: false, align: 'center' },
        { label: '基金状态', prop: 'fundStatus', sortable: false, align: 'center' }
      ],
      fundData: [
        { fundName: '统筹基金', date: '2020-05-22', fundStatus: '已参保' },
        { fundName: '大病基金', date: '2020-05-23', fundStatus: '未参保' }
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
