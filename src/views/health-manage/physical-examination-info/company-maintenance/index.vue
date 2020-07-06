<template>
  <!--体检单位维护-->
  <div class="CompanyMaintenance">
    <normal-layer :search-number="2">
      <template slot="search-header">
        <FormItems :items-datas="itemsDatas" :form-datas="queryForm">
          <template slot="单位信息1">
            <company-info v-model="queryForm.单位信息1" />
          </template>
          <template slot="单位类型1">
            <company-type v-model="queryForm.单位类型1" />
          </template>
          <div style="text-align: right">
            <el-button @click="reset('queryForm')">重置</el-button>
            <el-button type="primary" @click="search('queryForm')">查询</el-button>
          </div>
        </FormItems>
      </template>
      <div slot="table-title" class="box-header handle">
        <span class="box-title">体检单位列表</span>
        <div slot="title-btns" class="box-tools">
          <el-button type="primary" @click="add">新增</el-button>
        </div>
      </div>
      <template>
        <my-table-view :border="true" :columns="columns" :data="tableData">
          <template slot="name" slot-scope="scope">
            <company-info v-if="scope.row.isEdit" v-model="scope.row.newName" placeholder="placeholder" />
          </template>
          <template slot="level" slot-scope="scope">
            <company-type v-if="scope.row.isEdit" v-model="scope.row.newType" placeholder="placeholder" />
          </template>
          <template slot="mobile" slot-scope="scope">
            <el-input v-if="scope.row.isEdit" v-model="scope.row.newMobile" placeholder="请输入手机号" />
          </template>
          <template slot="operation" slot-scope="scope">
            <el-button v-if="!scope.row.isEdit" type="text" class="delete" @click="deleteClick">删除</el-button>
            <template v-else>
              <el-button type="text" class="delete" @click="cancelAdd(scope.row)">取消</el-button>
              <el-button type="text" @click="saveAdd(scope.row)">保存</el-button>
            </template>
          </template>
        </my-table-view>
        <Pagination />
      </template>
    </normal-layer>
  </div>
</template>

<script>
import NormalLayer from '@/views/components/PageLayers/normalLayer'
import pageHandle from '@/mixins/pageHandle'
import FormItems from '@/views/components/PageLayers/form-items'
import CompanyInfo from '@/components/Select/fund-insurance-manage/CompanyInfo'
import CompanyType from '@/components/Select/health-manage/CompanyType'
export default {
  name: 'CompanyMaintenance',
  components: {
    CompanyType,
    CompanyInfo,
    NormalLayer,
    FormItems
  },
  mixins: [pageHandle],
  props: {},
  data() {
    return {
      queryForm: {
        单位信息1: '',
        单位类型1: ''
      },
      itemsDatas: [
        { label: '单位信息', prop: '单位信息1', type: 'custom' },
        { label: '单位类型', prop: '单位类型1', type: 'custom' }
      ],
      columns: [
        { label: '序号', type: 'index' },
        { type: 'selection' },
        { label: '单位名称', prop: 'name', type: 'custom', slotName: 'name', minWidth: '180' },
        { label: '单位类型', prop: 'type', type: 'custom', slotName: 'level' },
        { label: '联系电话', prop: 'mobile', type: 'custom', slotName: 'mobile' },
        { label: '经办人', prop: 'people' },
        { label: '经办时间', prop: 'date' },
        { label: '操作', type: 'operation' }
      ],
      tableData: [1, 2, 3].map(item => {
        return { name: '创智和宇', type: '企业', mobile: '13512341234', people: '夏尔', date: '2020-02-02' }
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
    add() {
      this.tableData.push(
        { newName: '', newType: '', newMobile: '', people: '夏尔', date: '2020-02-02', isEdit: true }
      )
    },
    cancelAdd(row) {
      this.tableData.pop()
    },
    saveAdd(row) {
      this.$set(row, 'name', row.newName)
      this.$set(row, 'type', row.newType)
      this.$set(row, 'mobile', row.newMobile)
      this.$set(row, 'isEdit', false)
    },
    search() { console.log(this.queryForm) }
  }
}
</script>

<style scoped lang="scss"></style>
