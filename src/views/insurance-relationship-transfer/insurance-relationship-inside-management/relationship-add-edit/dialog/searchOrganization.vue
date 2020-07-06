<template>
  <div class="detail">
    <form-dialog title="异地经办机构信息" width="1200px" new-calss="small" :is-show="show" @update:isShow="addIsShow">
      <div class="box">
        <div class="box-body">
          <el-form ref="addForm" :model="addForm" label-width="105px">
            <div class="box-header handle">
              <span class="box-title">查询条件</span>
              <div class="box-tools">
                <el-button type="primary">查询</el-button>
              </div>
            </div>
            <el-row :gutter="12">
              <el-col :md="12" :lg="12" :xl="12">
                <el-form-item label="经办机构名称">
                  <el-input v-model="addForm.经办机构名称" placeholder="请输入" />
                </el-form-item>
              </el-col>
              <el-col :md="12" :lg="12" :xl="12">
                <el-form-item label="地区">
                  <el-input v-model="addForm.地区" placeholder="请输入" />
                </el-form-item>
              </el-col>
            </el-row>
            <div class="box-header handle">
              <span class="box-title">申请信息</span>
            </div>
            <my-table-view
              v-loading="loading"
              :data="tableData"
              :columns="columns"
              :multiple-selection.sync="multipleSelection"
              @rowClick="selectRow"
            >
              <template slot="operation" slot-scope="scope">
                <el-button type="text" class="modify" :class="scope.$index" @click="showDetail = true">详情</el-button>
              </template>
            </my-table-view>
            <Pagination :data="pageInfo" @refresh="pageChange" />
          </el-form>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="cancelAdd('addForm')">关闭</el-button>
      </span>
    </form-dialog>
  </div>
</template>

<script>
export default {
  name: 'Detail',
  components: {
  },
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      multipleSelection: [],
      loading: false,
      activeName: 1,
      showDetail: false,
      queryForm: {},
      columns: [
        { type: 'selection' },
        { type: 'index', label: '序号', width: '55px' },
        { prop: '经办机构名称', label: '经办机构名称', align: 'center', overflow: true },
        { prop: '地址', label: '地址', align: 'center', overflow: true },
        { prop: '所属省', label: '所属省', align: 'center', overflow: true },
        { prop: '所属市', label: '所属市', align: 'center', overflow: true },
        { prop: '所属区', label: '所属区', align: 'center', overflow: true },
        { prop: '行政区划代码', label: '行政区划代码', align: 'center', overflow: true },
        { prop: '联系电话', label: '联系电话', align: 'center', overflow: true },
        { prop: '联系人', label: '联系人', align: 'center', overflow: true }
      ],
      tableData: [1, 2, 3].map(i => {
        return {
          经办机构名称: '经办机构名称',
          地址: '地址',
          所属省: '所属省',
          所属市: '所属市',
          所属区: '所属区',
          行政区划代码: '行政区划代码',
          联系电话: '联系电话',
          联系人: '联系人'
        }
      }),
      addForm: {},
      pageInfo: {
        pageNum: 1,
        pageSize: 15,
        total: 10,
        startRow: 1,
        endRow: 10
      }
    }
  },
  methods: {
    pageChange(data) {
      this.pageInfo = data.pagination
    },
    selectRow(v) {
      this.$emit('update:selectRow', v)
    },
    addIsShow(v) {
      this.$emit('update:show', v)
    },
    //  取消新增弹窗
    cancelAdd(formName) {
      this.$emit('update:show', false)
    },
    //  提交新增弹窗
    addSubmit(formName) {
      this.$emit('update:show', false)
    }
  }
}
</script>

<style scoped lang="scss"></style>
