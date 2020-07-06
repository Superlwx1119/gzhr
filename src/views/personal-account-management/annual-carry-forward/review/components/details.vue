<template>
  <div>
    <form-dialog :title="title" width="1000px" new-calss="big" :is-show="show" @update:isShow="addIsShow">
      <template>
        <!--  单位注销审核详情-->
        <div>

          <section class="layer layer-query">
            <div class="box">
              <div class="box-header">
                <span class="box-title">查询条件</span>
              </div>
              <div class="box-body query">
                <form-items :items-datas="itemsDatas" :form-datas="seachForm" :is-grid="false" :span="8">
                  <!-- <el-button>重置</el-button>
                  <el-button type="primary" @click="search">查询</el-button> -->
                  <template slot="cxtj">
                    <el-select v-model="seachForm.cxtj" filterable placeholder="请在此输入身份证或姓名" @change="change">
                      <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                      />
                    </el-select>
                  </template>
                </form-items>
              </div>
            </div>
          </section>

          <section class="layer layer-result">
            <div class="box">
              <div class="box-header handle">
                <span class="box-title">查询结果</span>
                <div class="box-tools">
                  <el-button type="primary">导出检查结果</el-button>
                </div>
              </div>
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
import FormItems from '@/views/components/PageLayers/form-items'
export default {
  name: '',
  components: { FormItems },
  mixins: [],
  props: {
    show: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: '审核'
    }
  },
  data() {
    return {
      loading: false,
      seachForm: {
        cxtj: '',
        xm: '',
        zjhm: ''
      },
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }],
      itemsDatas: [
        { label: '查询条件', prop: 'cxtj', type: 'custom', slotName: 'cxtj' },
        { label: '姓名', prop: 'xm', type: 'select', disabled: true },
        { label: '证件号码', prop: 'zjhm', type: 'select', disabled: true }
      ],
      tableColumns: [
        // { type: 'selection' },
        { type: 'index', label: '序号', width: '55px' },
        { label: '年度', prop: 'name', align: 'center' },
        { label: '证件号码', prop: 'name', align: 'center' },
        { label: '姓名', prop: 'name', align: 'center' },
        { label: '单位名称', prop: 'name', align: 'center' },
        { label: '医保区划', prop: 'name', align: 'center' },
        { label: '计息标志', prop: 'name', align: 'center' },
        { label: '转账后余额（元）', prop: 'name', align: 'center', width: '180px' }
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
    change() {
      console.log(111)
    },
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
