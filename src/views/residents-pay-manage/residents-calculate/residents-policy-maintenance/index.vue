<template>
  <!--  居民政策维护-->
  <div class="residentsPolicyMaintenance">
    <normal-layer :search-number="2">
      <template slot="search-header">
        <FormItems :items-datas="itemsDatas" :form-datas="queryForm">
          <template slot="险种1">
            <insurance-type v-model="queryForm.险种1" />
          </template>
          <template slot="医保区划1">
            <insurance-area v-model="queryForm.医保区划1" />
          </template>
          <div style="text-align: right">
            <el-button @click="reset('queryForm')">重置</el-button>
            <el-button type="primary" @click="search('queryForm')">查询</el-button>
          </div>
        </FormItems>
      </template>
      <div slot="table-title" class="box-header handle">
        <span class="box-title">居民政策信息列表</span>
        <div slot="title-btns" class="box-tools">
          <el-button type="primary" @click="handleAdd">新增</el-button>
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
import InsuranceArea from '@/components/Select/residents-pay-manage/InsuranceArea'
import Add from './Add'
import Edit from './Edit'
export default {
  name: 'ResidentsPolicyMaintenance',
  components: {
    InsuranceArea,
    InsuranceType,
    NormalLayer,
    FormItems,
    Edit,
    Add
  },
  mixins: [pageHandle],
  props: {},
  data() {
    return {
      addVisible: false,
      editVisible: false,
      itemsDatas: [
        { label: '险种', prop: '险种1', type: 'custom' },
        { label: '医保区划', prop: '医保区划1', type: 'custom' }
      ],
      columns: [
        { type: 'selection' },
        { label: '序号', type: 'index' },
        { label: '申请事件ID', prop: 'a' },
        { label: '统筹区', prop: 'b' },
        { label: '险种', prop: 'c' },
        { label: '人员类别', prop: 'd' },
        { label: '政策描述', prop: 'e' },
        { label: '补助类型', prop: 'f' },
        { label: '生效年月', prop: 'g' },
        { label: '失效年月', prop: 'h' },
        { label: '人群类别', prop: 'i' },
        { label: '申报周期', prop: 'j' },
        { label: '个人缴纳', prop: 'k' },
        { label: '中央财政', prop: 'l' },
        { label: '省级财政', prop: 'm' },
        { label: '市财政', prop: 'n' },
        { label: '县财政', prop: 'o' },
        { label: '民政', prop: 'p' },
        { label: '残联', prop: 'q' },
        { label: '计生', prop: 'r' },
        { label: '个人缴纳划入', prop: 's' },
        { label: '操作', type: 'operation' }
      ],
      tableData: [1, 2, 3].map(item => {
        return { 'a': 'CAC414288123' + item, 'b': '统筹区' + item, c: 'xxx', d: 'xxx', e: 'xxx',
          f: 'xxx', g: 'xxx', h: 'xxx', i: 'xxx', j: 'xxx', k: 'xxx', l: 'xxx', m: 'xxx', n: 'xxx', o: 'xxx',
          p: 'xxx', q: 'xxx', r: 'xxx', s: 'xxx'
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
    handleAdd() { this.addVisible = true },
    handleEdit(row) { this.editVisible = true },
    handleDelete(row) {
      this.$msgConfirm('是否删除？').then(res => {
        this.$msgSuccess('删除成功！')
      }).catch(err => {
        this.$msgInfo(err)
      })
    }
  }
}
</script>

<style scoped lang="scss"></style>
