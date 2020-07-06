<template>
  <!--省外统筹区就医地信息提取-->
  <div class="info-extract" style="height: 100%">
    <normal-layer :search-number="4">
      <template slot="search-header">
        <FormItems :items-datas="itemsDatas" :form-datas="queryForm">
          <div>
            <el-button @click="reset('queryForm')">重置</el-button>
            <el-button type="primary" @click="search('queryForm')">查询</el-button>
          </div>
        </FormItems>
      </template>
      <div slot="table-title" class="box-header handle">
        <span class="box-title">医疗机构库</span>
        <div class="box-tools">
          <el-button type="primary" @click="addList">新增</el-button>
        </div>
      </div>
      <template>
        <my-table-view :border="true" :columns="columns" :data="tableData">
          <template slot="operation" slot-scope="scope">
            <el-button type="text" class="modify" @click="editRow(scope.row)">修改</el-button>
            <el-button type="text" class="delete" @click="deleteRow(scope.row)">删除</el-button>
            <el-button type="text" class="modify" @click="checkRow(scope.row)">详情</el-button>
          </template>
        </my-table-view>
        <Pagination />
      </template>
    </normal-layer>
    <Edit
      :dialog-title="dialogTitle"
      :is-dialog-visible="isDialogVisible"
      @update:isShow="isShow"
    />
    <Detail
      :dialog-title="detailTitle"
      :is-dialog-visible="isDetailDialogVisible"
      @update:isShow="isDetailShow"
    />
  </div>
</template>

<script>
import pageHandle from '@/mixins/pageHandle'
import NormalLayer from '@/views/components/PageLayers/normalLayer'
import FormItems from '@/views/components/PageLayers/form-items'
import Edit from './components/Edit'
import Detail from './components/Detail'
import { tableColumns } from './tableConfig'
export default {
  components: {
    NormalLayer,
    FormItems,
    Edit,
    Detail
  },
  mixins: [pageHandle],
  props: {},
  data() {
    return {
      detailTitle: '',
      isDetailDialogVisible: false,
      dialogTitle: '',
      isDialogVisible: false,
      queryForm: {
        医疗机构编码: '',
        医疗机构名称: '',
        异地类型: '',
        就医地: ''
      },
      itemsDatas: [
        { label: '医疗机构编码', prop: '医疗机构编码', type: 'input' },
        { label: '医疗机构名称', prop: '医疗机构名称', type: 'input' },
        { label: '异地类型', prop: '异地类型', type: 'select' },
        { label: '就医地', prop: '就医地', type: 'cascader' }
      ],
      columns: tableColumns,
      tableData: [1, 2, 3].map(item => {
        return {
          '省份': '湖南',
          '区县': '长沙',
          '异地医疗机构名称': '湘雅',
          '医疗机构级别': '1',
          '医疗机构等级': '1',
          '医疗机构类别': '1',
          '异地类型': '1',
          '地址': '长沙',
          '审核标志': '是'
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
    addList() {
      this.isDialogVisible = true
      this.dialogTitle = '异地医疗机构新增'
    },
    editRow(row) {
      this.isDialogVisible = true
      this.dialogTitle = '异地医疗机构编辑'
    },
    deleteRow(row) {
      this.$msgSuccess('删除成功')
    },
    checkRow(row) {
      this.isDetailDialogVisible = true
      this.detailTitle = '异地医疗机构详情'
    },
    isShow(v) {
      this.isDialogVisible = v
    },
    isDetailShow(v) {
      this.isDetailDialogVisible = v
    }
  }
}
</script>

<style scoped lang="scss"></style>
