<template>
  <form-dialog :title="bouncedTitle" :is-show="visible" width="1000px" new-class="big" @update:isShow="updateIsShow">

    <!-- <MyTableView
            :columns="tableColumns"
            :data="tableData"
            :border="true"
          /> -->
    <!-- <Pagination :data="pageData" @refresh="pageChange" /> -->
    <el-row :gutter="10">
      <el-col :span="24" style="height:380px;">
        <MyTableView :border="true" :columns="tableColumns" :data="tableData" />
        <Pagination />
      </el-col>
    </el-row>
    <span slot="footer" class="dialog-footer">
      <el-button @click="ShutDown">关闭</el-button>
    </span>
  </form-dialog>
</template>

<script>

export default {
  components: {

  },
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
          prop: '变更项',
          label: '变更项'

        },
        {
          prop: '变更前',
          label: '变更前  '
        },
        {
          prop: '变更后',
          label: '变更后'
        },
        {
          prop: '经办人',
          label: '经办人'
        },
        {
          prop: '经办日期',
          label: '经办日期'
        }
      ],
      tableData: [{
        缴费台账年月: '202001',
        款项所属期: '202001',
        申报工资总额: '3188',
        参保职工人数: '1',
        月平均工资: '3188',
        '上年社平工资*0.6': '202003',
        '上年社平工资*3': '5405.6',
        纳入计算金额: '5405'
      }]
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
      this.$emit('update:show', v)
    },
    ShutDown() {
      this.visible = false
    // this.$emit('update:show', false)
    }
    // print() {
    //   this.visible = false
    //   this.$emit('update:show', false)
    // }
    // exportUp() {
    //   this.visible = false
    //   this.$msgSuccess('操作成功')
    // }
  }
}
</script>

<style  lang='scss' scoped>
 .el-dialog{
   height: 500px !important;
 }
</style>
