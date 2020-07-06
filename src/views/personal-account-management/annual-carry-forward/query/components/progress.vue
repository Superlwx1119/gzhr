<template>
  <div>
    <form-dialog :title="title" width="1000px" new-calss="big" :is-show="show" @update:isShow="addIsShow">
      <template>
        <!--  单位注销审核详情-->
        <div>
          <section class="layer layer-result">
            <div class="box">
              <!-- <div class="box-header">
                <span class="box-title">单位信息变更明细</span>
              </div> -->
              <div class="box-body result">
                <my-table-view
                  v-loading="loading"
                  :data="tableData"
                  :columns="tableColumns"
                >
                  <!-- <template slot="operation" slot-scope="scope">
                    <el-button type="text" class="modify" @click="progress(scope.row)">查看进度</el-button>
                    <el-button type="text" class="modify" @click="details(scope.row)">查看详情</el-button>
                    <el-button type="text" class="modify" @click="delect(scope.row)">删除</el-button>
                  </template> -->
                </my-table-view>
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
  components: {},
  mixins: [],
  props: {
    show: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      loading: false,
      tableColumns: [
        // { type: 'selection' },
        { type: 'index', label: '序号', width: '55px' },
        { label: '备注', prop: 'name', align: 'center', width: '600px' },
        { label: '记录时间', prop: 'name', align: 'center' }
        // { type: 'operation', label: '操作', fixed: 'right', width: '200px' }
      ],
      tableData: [
        { name: '小哥', cardType: '身份证', cardNo: '431227xxxxxxxx2714', mobile: '12341234', amount: '2' },
        { name: '小哥', cardType: '身份证', cardNo: '431227xxxxxxxx2714', mobile: '12341234', amount: '2' }
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
    },
    objectSpanMethod({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 0) {
        if (rowIndex % 2 === 0) {
          return {
            rowspan: 2,
            colspan: 1
          }
        } else {
          return {
            rowspan: 0,
            colspan: 0
          }
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">
.bottomline{
  border-bottom:1px solid red($color: #cf8e43)}
</style>
