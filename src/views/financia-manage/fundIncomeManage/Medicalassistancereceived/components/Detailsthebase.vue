<template>
  <form-dialog
    :title="bouncedTitle"
    :is-show="visible"
    width="1000px"
    new-class="big"
    @update:isShow="updateIsShow"
  >
    <!-- <MyTableView
            :columns="tableColumns"
            :data="tableData"
            :border="true"
    />-->
    <!-- <Pagination :data="pageData" @refresh="pageChange" /> -->
    <el-row :gutter="10">
      <el-col :span="24" style="height:380px;">
        <MyTableView :border="true" :columns="tableColumns" :data="tableData" />
        <Pagination />
      </el-col>
    </el-row>
    <span slot="footer" class="dialog-footer">
      <el-button type="primary" @click="Shutdown">关闭</el-button>
    </span>
  </form-dialog>
</template>

<script>
export default {
  components: {},
  mixins: [],
  props: {
    show: { type: Boolean, default: () => false },
    bouncedTitle: { type: String, default: '' }
  },
  data() {
    return {
      visible: this.show,
      tableColumns: [
        { label: '序号', type: 'index', width: '50' },
        {
          prop: '姓名',
          label: '姓名'
        },
        {
          prop: '人员类别',
          label: '人员类别'

        },
        {
          prop: '民政资助类别',
          label: '民政资助类别'
        },
        {
          prop: '台账年月',
          label: '台账年月'
        },
        {
          prop: '款项年月',
          label: '款项年月'
        },
        {
          prop: '应资助金额',
          label: '应资助金额(元)'
        },
        {
          prop: '到账标志',
          label: '到账标志'

        },
        {
          prop: '到账日期',
          label: '到账日期'
        },
        {
          prop: '单位名称',
          label: '单位名称'
        },
        {

          prop: '医保区划',
          label: '医保区划'

        }
        // {
        //   label: '操作',
        //   type: 'operation'
        // }
      ],
      tableData: [
        {
          姓名: '刘某',
          人员类别: '中小学生',
          民政资助类别: '全额资助',
          台账年月: '201912',
          款项年月: '0201912',
          应资助金额: '40',
          到账标志: '已到账',
          到账日期: '2019-12-23.8',
          单位名称: '604.03',
          医保区划: 'xxxxxxxxxxxxxxxxxx'
        }
      ]
    }
  },
  computed: {},
  watch: {
    show: function(newVal, oldVal) {
      this.visible = this.show
    }
  },
  created() {},
  mounted() {},
  methods: {
    updateIsShow(v) {
      this.$emit('update:show', v)
    },
    Shutdown() {
      this.visible = false

      // this.$emit('update:show', false)
    },
    // print() {
    //   this.visible = false
    //   this.$emit('update:show', false)
    // }
    // exportUp() {
    //   this.visible = false
    //   this.$msgSuccess('操作成功')
    // }
    deleteData() {}
  }
}
</script>

<style  lang='scss' scoped>
.el-dialog {
  height: 500px !important;
}
</style>
