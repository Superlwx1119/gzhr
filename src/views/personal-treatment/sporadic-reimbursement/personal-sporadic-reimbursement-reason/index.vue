<template>
  <div class="personalSporadicReimbursementReason item3">
    <normal-layer :search-number="2">
      <template slot="search-header">
        <FormItems :items-datas="itemsDatas" :form-datas="queryForm">
          <template slot="险种类型1">
            <insurance-type v-model="queryForm.险种类型1" />
          </template>
          <template slot="零报情形类别1">
            <sporadic-reimbursement-situation-type v-model="queryForm.零报情形类别1" />
          </template>
          <template slot="零报类型1">
            <sporadic-reimbursement-type v-model="queryForm.零报类型1" />
          </template>
          <el-button @click="reset('queryForm')">重置</el-button>
          <el-button type="primary" @click="search('queryForm')">查询</el-button>
        </FormItems>
      </template>
      <div slot="table-title" class="box-header handle">
        <span class="box-title">个人零星报销列表</span>
        <div slot="title-btns" class="box-tools">
          <el-button type="primary" @click="add">新增</el-button>
        </div>
      </div>
      <template>
        <my-table-view :border="true" :columns="columns" :data="tableData">
          <template slot="operation" slot-scope="scope">
            <el-button type="text" @click="handleEdit(scope.row)">修改</el-button>
            <el-button type="text" class="delete" @click="handleDelete(scope.row)">删除</el-button>
          </template>
        </my-table-view>
        <Pagination />
      </template>
    </normal-layer>
    <Add :show.sync="addVisible" />
    <Edit :show.sync="editVisible" :form="editForm" />
  </div>
</template>

<script>
import pageHandle from '@/mixins/pageHandle'
import NormalLayer from '@/views/components/PageLayers/normalLayer'
import FormItems from '@/views/components/PageLayers/form-items'
import InsuranceType from '@/components/Select/InsuranceType'
import SporadicReimbursementType from '@/components/Select/SporadicReimbursementType'
import SporadicReimbursementSituationType from '@/components/Select/SporadicReimbursementSituationType'
import Add from './Add'
import Edit from './Edit'
export default {
  name: 'PersonalSporadicReimbursementReason',
  components: {
    SporadicReimbursementSituationType,
    SporadicReimbursementType,
    InsuranceType,
    NormalLayer,
    FormItems,
    Add,
    Edit
  },
  mixins: [pageHandle],
  props: {},
  data() {
    return {
      addVisible: false,
      editVisible: false,
      itemsDatas: [
        { label: '险种类型', prop: '险种类型1', type: 'custom' },
        { label: '零报情形类别', prop: '零报情形类别1', type: 'custom' },
        { label: '零报类型', prop: '零报类型1', type: 'custom' },
        { label: '零报原因', prop: '零报原因1', type: 'input' }
      ],
      columns: [
        { label: '序号', type: 'index' },
        { label: '险种类型', prop: 'a' },
        { label: '零报情形', prop: 'b' },
        { label: '零报分类', prop: 'c' },
        { label: '零报原因', prop: 'd' },
        { label: '有效标志', prop: 'e' },
        { label: '操作', type: 'operation' }
      ],
      tableData: [1, 2, 3].map(item => {
        return {
          no: '' + item,
          a: '医疗保险',
          b: '异地就医',
          c: '系统故障',
          d: '参保人已死亡拨付其他账号',
          e: '有效'
        }
      }),
      editForm: {}
    }
  },
  computed: {},
  watch: {},
  created() {
  },
  mounted() {
  },
  methods: {
    add() { this.addVisible = true },
    handleEdit(row) {
      this.editVisible = true
      this.editForm = {}
    },
    handleDelete(row) {}
  }
}
</script>

<style scoped lang="scss"></style>
