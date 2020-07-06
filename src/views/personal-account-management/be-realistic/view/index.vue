<template>
  <!-- 个人账户做实 -->

  <div>

    <section class="layer layer-query">
      <div class="box">
        <!-- <div class="box-header">
          <span class="box-title">查询条件</span>
        </div> -->
        <div class="box-body query">

          <form-items :items-datas="itemsDatas" :form-datas="queryForm">
            <el-button @click="reset">重置</el-button>
            <el-button type="primary">查询</el-button>

            <template slot="cxtj">
              <el-select v-model="queryForm.cxtj" filterable placeholder="请在此输入身份证或姓名" @change="change">
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

    <section class="layer layer-query">
      <div class="box">
        <div class="box-header">
          <span class="box-title">做实信息</span>
        </div>
        <div class="box-body query">

          <form-items :items-datas="itemsDatas2" :form-datas="queryForm2">
            <!-- <el-button @click="reset">重置</el-button> -->
            <el-button type="primary">保存</el-button>
          </form-items>

        </div>
      </div>
    </section>

    <section class="layer layer-result">
      <div class="box">
        <div class="box-header handle">
          <span class="box-title">做实明细信息</span>
          <div class="box-tools">
            <el-button type="danger" @click="batchAuditClick">批量删除</el-button>
          </div>
        </div>
        <div class="box-body result">
          <my-table-view
            v-loading="loading"
            :data="tableData"
            :columns="columns"
            :multiple-selection.sync="multipleSelection"
          >

            <template slot="operation" slot-scope="scope">
              <el-button type="text" class="modify" @click="details(scope.row)">修改</el-button>
              <el-button type="text" class="delete" @click="delect(scope.row)">删除</el-button>
            </template>

          </my-table-view>
          <Pagination />
        </div>
      </div>
    </section>

    <!-- 详情弹窗 -->
    <Details :show="DetaVisible" title="个人账户做实信息" @update:show="DetaIsShow" />

  </div>
</template>

<script>
import FormItems from '@/views/components/PageLayers/form-items'
// import AuditDialog from '@/views/components/AuditDialog'
import moment from 'moment'
import Details from './components/details'
// import Progress from './components/progress'
export default {
  components: {
    FormItems,
    // AuditDialog,
    Details
    // Progress
  },
  mixins: [],
  data() {
    return {
      loading: false,
      DetaVisible: false,
      ProVisible: false,
      showAuditDialog: false,
      multipleSelection: [],
      itemsDatas: [
        { label: '查询条件', prop: 'cxtj', type: 'custom', slotName: 'cxtj' },
        { label: '姓名', prop: 'xxx', type: 'select', disabled: true },
        { label: '证件号码', prop: 'xxx', type: 'select', disabled: true },
        { label: '单位编码', prop: 'xxx', type: 'input', disabled: true },
        { label: '单位名称', prop: 'xxx', type: 'select', disabled: true, xl: 12 }
      ],
      queryForm: {
        cxtj: '',
        xxx: '',
        dateRange: [
          moment().startOf('month').format('YYYY-MM-DD'),
          moment().endOf('month').format('YYYY-MM-DD')
        ]
      },
      itemsDatas2: [
        { label: '发放方式', prop: 'xxx', type: 'select' },
        { label: '拨付对象类型', prop: 'xxx', type: 'select' },
        { label: '返还类型', prop: 'xxx', type: 'select' },
        { label: '计息标志', prop: 'xxx', type: 'select' },
        { label: '账户做实金额', prop: 'xxx', type: 'input' }
      ],
      queryForm2: {
        xxx: ''
      },
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }],
      columns: [
        { type: 'selection' },
        { type: 'index', label: '序号', width: '55px' },
        { prop: 'name', label: '审核标志' },
        { prop: 'name', label: '余额（元）' },
        { prop: 'name', label: '证件号码' },
        { prop: 'name', label: '姓名' },
        { prop: 'name', label: '出生日期' },
        { prop: 'name', label: '医疗人员类别' },
        { prop: 'name', label: '单位名称' },
        { prop: 'name', label: '所属行业' },
        { prop: 'name', label: '特殊单位类别' },
        { prop: 'name', label: '隶属关系' },
        { prop: 'name', label: '经济类型' },
        { prop: 'name', label: '单位类型' },
        { prop: 'name', label: '年度' },
        { prop: 'name', label: '发放方式' },
        { prop: 'name', label: '拨付对象类型' },
        { prop: 'name', label: '返换类型' },
        { prop: 'name', label: '计息标志' },
        { prop: 'name', label: '支付标志' },
        { prop: 'name', label: '账户返还金额（元）', width: '150px' },
        { prop: 'name', label: '金融行业机构代码', width: '150px' },
        { prop: 'name', label: '银行行别代码' },
        { prop: 'name', label: '银行账号' },
        { prop: 'name', label: '户名' },
        { prop: 'name', label: '银行同城异地标志', width: '150px' },
        { type: 'operation', label: '操作', fixed: 'right', width: '200px' }
      ],
      tableData: [1, 2, 3, 4, 5, 6, 7].map(item => {
        return { name: '大碗宽面', code: 'xxx', nameCode: 'xxx' }
      })
    }
  },
  methods: {
    // 批量审核
    batchAuditClick() {
      if (this.multipleSelection.length <= 0) {
        this.$msgConfirm('请选择')
      } else {
        // this.showAuditDialog = true
      }
    },
    reset() {
      this.queryForm = {}
    },
    change() {},
    delect(row) {

    },
    ProgressShow(v) {
      this.ProVisible = v
    },
    details(row) {
      this.DetaVisible = true
    },
    DetaIsShow(v) {
      this.DetaVisible = v
    },
    review(row) {
      this.showAuditDialog = true
    }
  }
}
</script>

<style lang="scss" scoped>
.credit-file-maintenance{
  position: relative;
}
</style>

