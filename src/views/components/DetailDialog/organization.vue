<template>
  <div class="box">
    <div class="box-body">
      <el-form ref="queryForm" :model="queryForm" label-width="105px">
        <el-row :gutter="12">
          <el-col :span="8">
            <el-form-item label="机构名称">
              <el-input v-model="queryForm.机构名称" />
            </el-form-item>
          </el-col>
          <el-col :span="16" style="float:right">
            <el-form-item>
              <el-button v-if="operation === 'add'||operation === 'edit'" type="primary" @click="isShowAdd = true">新增</el-button>
              <el-button type="primary">查询</el-button>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <List :is-border="true" :is-index="true" :columns="columns" :data="tableData" :operates="tableOperates" />
    </div>
    <AddOrganization v-model="isShowAdd" dialog-title="内设机构信息编辑" />
  </div>
</template>

<script>
import AddOrganization from './addOrganization'
export default {
  components: {
    AddOrganization
  },
  props: {
    operation: {
      type: String,
      default: 'detail'
    }
  },
  data() {
    return {
      queryForm: {},
      isShowAdd: false,
      tableOperates: {
        width: '120px',
        fixed: 'right',
        list: [
          { show: true, label: '查看', type: 'text', method: () => {
            this.isShowDetail = true
          } },
          { show: true, label: '修改', type: 'text', method: () => {
            this.isShowDetail = true
          } }
        ]
      },
      columns: [
        { label: '机构名称', prop: '机构名称', align: 'center' },
        { label: '机构简称', prop: '机构简称', align: 'center' },
        { label: '机构级别', prop: '机构级别', align: 'center', width: '300px' },
        { label: '上级机构名称', prop: '上级机构名称', align: 'center' },
        { label: '领导数', prop: '领导数', align: 'center' },
        { label: '行政编制数', prop: '行政编制数', align: 'center' },
        { label: '事业编制数', prop: '事业编制数', align: 'center' },
        { label: '成立日期', prop: '成立日期', align: 'center' }
      ],
      tableData: [
        { 机构名称: '机构名称', 机构简称: '机构简称', 机构级别: '机构级别', 上级机构名称: '上级机构名称', 领导数: '领导数', 行政编制数: '行政编制数', 事业编制数: '事业编制数' },
        { 机构名称: '机构名称', 机构简称: '机构简称', 机构级别: '机构级别', 上级机构名称: '上级机构名称', 领导数: '领导数', 行政编制数: '行政编制数', 事业编制数: '事业编制数' },
        { 机构名称: '机构名称', 机构简称: '机构简称', 机构级别: '机构级别', 上级机构名称: '上级机构名称', 领导数: '领导数', 行政编制数: '行政编制数', 事业编制数: '事业编制数' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
