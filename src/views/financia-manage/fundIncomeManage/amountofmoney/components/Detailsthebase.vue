<template>
  <form-dialog
    :title="bouncedTitle"
    :is-show="visible"
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
        <MyTableView :border="true" :columns="tableColumns" :data="tableData">
          <template slot="czbz" slot-scope="scope">
            <el-input v-model="scope.row.czbz" placeholder="请输入内容" />
          </template>
          <template slot="operation" slot-scope="scope">
            <el-button type="text" @click="deleteData(scope.row)">删除</el-button>
          </template>
        </MyTableView>
        <Pagination />
      </el-col>
    </el-row>
    <span slot="footer" class="dialog-footer">
      <el-button type="primary" @click="SubmitTheRequest">提交请款</el-button>
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
          prop: '个人编码',
          label: '个人编码'
        },
        {
          prop: '证件号码',
          label: '证件号码',
          width: '120px'
        },
        {
          prop: '姓名',
          label: '姓名'
        },
        {
          prop: '性别',
          label: '性别'
        },
        {
          prop: '企业补偿月数',
          label: '企业补偿月数'
        },
        {
          prop: '政府资助月数',
          label: '政府资助月数'
        },
        {
          prop: '应资助总额',
          label: '应资助总额',
          width: '120px'
        },
        {
          prop: '应拨基本医疗',
          label: '应拨基本医疗'
        },
        {
          prop: '应拨大病补助',
          label: '应拨大病补助'
        },
        {
          type: 'custom',
          slotName: 'czbz',
          prop: '操作备注',
          label: '操作备注',
          width: '150px'
        },
        {
          label: '操作',
          type: 'operation'
        }
      ],
      tableData: [
        {
          个人编码: '202001',
          证件号码: '440106200702156520',
          姓名: 'xxx',
          性别: '女',
          企业补偿月数: '0',
          政府资助月数: '40',
          应资助总额: '18028.03',
          应拨基本医疗: '1802.8',
          应拨大病补助: '604.03',
          操作备注: ''
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
    SubmitTheRequest() {
      this.$msgConfirm('确定要提交请款吗?')
        .then(res => {
          this.$msgSuccess(res)
          this.visible = false
        })
        .catch(err => {
          this.$msgInfo(err)
        })

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
