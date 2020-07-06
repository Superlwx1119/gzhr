<template>
  <!--  个人零星报销受理-->
  <div class="PersonalSporadicReimbursement item3">
    <section class="layer layer-query">
      <div class="box">
        <ConditionHeader />
        <div class="box-body query">
          <el-form ref="searchForm" :model="searchForm" label-width="105px">
            <el-row :gutter="10">
              <el-col :md="12" :lg="8" :xl="6">
                <el-form-item label="受理时间" prop="受理时间">
                  <el-date-picker v-model="searchForm.受理时间" style="width: 100%;" type="daterange" placeholder="选择时间" />
                </el-form-item>
              </el-col>
              <el-col :md="12" :lg="8" :xl="6">
                <el-form-item label="受理状态" prop="受理状态">
                  <el-select v-model="searchForm.受理状态" style="width: 100%;" placeholder="请选择">
                    <el-option label="已受理" value="1" />
                    <el-option label="已打回" value="2" />
                    <el-option label="受理暂存" value="3" />
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :md="12" :lg="8" :xl="6">
                <el-form-item label="筛选关键字" prop="筛选关键字">
                  <el-input v-model="searchForm.筛选关键字" placeholder="请输入" />
                </el-form-item>
              </el-col>
              <el-col :md="12" :lg="24" :xl="6" style="text-align: right">
                <el-button @click="reset('searchForm')">重置</el-button>
                <el-button type="primary" @click="search('searchForm')">查询</el-button>
              </el-col>
            </el-row>
          </el-form>
        </div>
      </div>
    </section>
    <section class="layer layer-result">
      <div class="box">
        <div class="box-header handle">
          <span class="box-title">个人零星报销受理列表</span>
          <div class="box-tools">
            <el-button type="danger">批量取消受理</el-button>
            <el-button type="primary" @click="addVisible = true">受理登记</el-button>
          </div>
        </div>
        <div class="box-body result">
          <List :is-border="true" :is-index="true" :is-selection="true" :columns="tableColumns" :operates="tableOperates" :data="tableData" />
          <Pagination />
        </div>
      </div>
    </section>
    <!--    新增-->
    <Add :show.sync="addVisible" />
    <!--    修改-->
    <Edit :show.sync="editVisible" :form="editForm" />
    <!--    详情-->
    <Detail :show.sync="detailVisible" :form="detailForm" />
  </div>
</template>

<script>
import Add from './add'
import Edit from './edit'
import Detail from './detail'
export default {
  name: 'PersonalSporadicReimbursement',
  components: {
    Add,
    Edit,
    Detail
  },
  mixins: [],
  props: {},
  data() {
    return {
      searchForm: {},
      tableColumns: [
        { label: '姓名', prop: 'name', align: 'center' },
        { label: '证件类型', prop: 'cardType', align: 'center' },
        { label: '证件号码', prop: 'cardNo', align: 'center', width: '200px' },
        { label: '联系人电话', prop: 'mobile', align: 'center' },
        { label: '就诊信息数', prop: 'amount', align: 'center' },
        { label: '备注', prop: 'remark', align: 'center' },
        { label: '受理号', prop: 'amount', align: 'center' },
        { label: '经办人', prop: 'name', align: 'center' },
        { label: '经办日期', prop: 'date', align: 'center', width: '120px' }
      ],
      tableOperates: {
        width: '120px',
        fixed: 'right',
        list: [
          { show: true, label: '修改', type: 'text', method: () => {
            this.editVisible = true
            this.editForm = { '收款账户': '1', '开户银行行号': '123123', no: 'MZ001', type: '普通零报', name: '刘璐', sex: '女', birth: '1997-07-07', address: '香格里拉', medicalType: '高血压', medicalName: '湘雅附一', medicalNo: 'YY002', cardType: '身份证', hospitalName: 'xxxx医院', hospitalNo: 'ac002', date: '2020-02-02', total: '5' }
          } },
          { show: true, label: '详情', type: 'text', method: () => {
            this.detailVisible = true
            this.detailForm = { '收款账户': '1', '开户银行行号': '123123', no: 'MZ001', type: '普通零报', name: '刘璐', sex: '女', birth: '1997-07-07', address: '香格里拉', medicalType: '高血压', medicalName: '湘雅附一', medicalNo: 'YY002', cardType: '身份证', hospitalName: 'xxxx医院', hospitalNo: 'ac002', date: '2020-02-02', total: '5' }
          } }
        ]
      },
      tableData: [
        { name: '小哥', cardType: '身份证', cardNo: '431227xxxxxxxx2714', mobile: '12341234', amount: '2', remark: '哈哈', date: '2020-11-24' }
      ],
      addVisible: false,
      editVisible: false,
      editForm: {},
      detailVisible: false,
      detailForm: {}
    }
  },
  computed: {},
  watch: {},
  created() {
  },
  mounted() {
  },
  methods: {
    reset(formName) {
      this.$refs[formName].resetFields()
    },
    search(formName) {}
  }
}
</script>

<style scoped lang="scss"></style>
