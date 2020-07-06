<template>
  <!--单位预缴核查-->
  <div class="paymentInAdvanceVerification">
    <normal-layer :search-number="1">
      <template slot="search-header">
        <FormItems :items-datas="itemsDatas" :form-datas="queryForm">
          <template slot="单位信息1">
            <company-info v-model="queryForm.单位信息1" :return-label="true" @select="companySelect" />
          </template>
          <template slot="险种1">
            <insurance-type v-model="queryForm.险种1" />
          </template>
          <div>
            <el-button @click="reset('queryForm')">重置</el-button>
            <el-button type="primary" @click="search('queryForm')">查询</el-button>
          </div>
        </FormItems>
      </template>
      <div slot="table-title" class="box-header handle">
        <span class="box-title">单位预缴核定列表</span>
        <div slot="title-btns" class="box-tools">
          <el-button type="primary" @click="handleAdd">新增</el-button>
        </div>
      </div>
      <template>
        <my-table-view :border="true" :columns="columns" :data="tableData">
          <template slot="type" slot-scope="scope">
            <insurance-type v-if="scope.row.isEdit" v-model="scope.row.newType" />
            <span v-else>{{ scope.row.typeName }}</span>
          </template>
          <template slot="editPrice" slot-scope="scope">
            <el-input v-if="scope.row.isEdit" v-model="scope.row.newEditPrice" placeholder="请输入" />
          </template>
          <template slot="reason" slot-scope="scope">
            <el-input v-if="scope.row.isEdit" v-model="scope.row.newReason" placeholder="请输入" />
          </template>
          <template slot="operation" slot-scope="scope">
            <el-button v-if="scope.row.isEdit" type="text" class="delete" @click="handleCancel(scope.row)">取消</el-button>
            <el-button v-if="scope.row.isEdit" type="text" @click="handleSave(scope.row)">保存</el-button>
            <el-button v-if="!scope.row.isEdit" type="text" class="delete" @click="handleDelete(scope.row)">删除</el-button>
            <el-button v-if="!scope.row.isEdit" type="text" @click="handleEdit(scope.row)">修改</el-button>
          </template>
        </my-table-view>
        <Pagination />
      </template>
    </normal-layer>
  </div>
</template>

<script>
import pageHandle from '@/mixins/pageHandle'
import NormalLayer from '@/views/components/PageLayers/normalLayer'
import FormItems from '@/views/components/PageLayers/form-items'
import CompanyInfo from '@/components/Select/fund-insurance-manage/CompanyInfo'
import InsuranceType from '@/components/Select/InsuranceType'

export default {
  name: 'PaymentInAdvanceVerification',
  components: { InsuranceType, CompanyInfo, NormalLayer, FormItems },
  mixins: [pageHandle],
  props: {},
  data() {
    return {
      itemsDatas: [
        { label: '单位信息', prop: '单位信息1', type: 'custom' },
        { label: '险种', prop: '险种1', type: 'custom' }
      ],
      columns: [
        { type: 'selection' },
        { label: '序号', type: 'index' },
        { label: '单位管理码', prop: 'code' },
        { label: '单位名称', prop: 'name' },
        { label: '险种类型', prop: 'type', type: 'custom', slotName: 'type' },
        { label: '修改前金额（元）', prop: 'price' },
        { label: '修改后金额（元）', prop: 'editPrice', type: 'custom', slotName: 'editPrice' },
        { label: '修改原因', prop: 'reason', type: 'custom', slotName: 'reason' },
        { label: '操作', type: 'operation' }
      ],
      tableData: [1, 2, 3].map(item => {
        return {
          code: 'DW' + item,
          name: '单位A',
          type: '2',
          typeName: '大病医疗保险',
          price: '1000',
          editPrice: '',
          reason: ''
        }
      })
    }
  },
  computed: {},
  watch: {},
  created() {
  },
  mounted() {
  },
  methods: {
    companySelect(v) {
      this.currCompanyName = v.label
    },
    //  新增
    handleAdd() {
      this.tableData.unshift({
        code: this.queryForm.单位信息1,
        name: this.currCompanyName,
        type: '',
        typeName: '',
        price: '100',
        editPrice: '',
        reason: '',
        isEdit: true
      })
    },
    //  取消
    handleCancel() {
      this.tableData.shift()
    },
    //  保存
    handleSave(row) {
      this.$set(row, 'isEdit', false)
      this.$set(row, 'type', row.newType)
      this.$set(row, 'typeName', '选择的险种')
      this.$set(row, 'editPrice', row.newEditPrice)
      this.$set(row, 'reason', row.newReason)
    },
    //  删除
    handleDelete(row) {
      this.$msgConfirm('是否删除？' + this.tableData.indexOf(row)).then(res => {
        this.tableData.splice(this.tableData.indexOf(row), 1)
        this.$msgSuccess('删除成功！')
      }).catch(err => {
        this.$msgInfo(err)
      })
    },
    //  修改
    handleEdit(row) {
      this.$set(row, 'isEdit', true)
      this.$set(row, 'newType', row.type)
      this.$set(row, 'newEditPrice', row.editPrice)
      this.$set(row, 'newReason', row.reason)
    }
  }
}
</script>

<style scoped lang="scss"></style>
