<template>
  <div class="detail">
    <form-dialog title="维护信息修改" width="1000px" new-calss="small" :is-show="show" @update:isShow="addIsShow">
      <div class="box">
        <div class="box-body">
          <el-form ref="addForm" :model="addForm" label-width="105px">
            <el-row :gutter="12">
              <el-col :md="12" :lg="12" :xl="12">
                <el-form-item label="机构编码">
                  <el-input v-model="addForm.机构编码" placeholder="请输入" />
                </el-form-item>
              </el-col>
              <el-col :md="12" :lg="12" :xl="12">
                <el-form-item label="所属辖区">
                  <el-input v-model="addForm.所属辖区" placeholder="请输入" />
                </el-form-item>
              </el-col>
              <el-col :md="12" :lg="12" :xl="12">
                <el-form-item label="经办机构名称">
                  <el-input v-model="addForm.经办机构名称" placeholder="请输入" />
                </el-form-item>
              </el-col>
              <el-col :md="12" :lg="12" :xl="12">
                <el-form-item label="机构简称">
                  <el-input v-model="addForm.机构简称" placeholder="请输入" />
                </el-form-item>
              </el-col>
              <el-col :md="12" :lg="12" :xl="12">
                <el-form-item label="行政区划代码">
                  <el-input v-model="addForm.行政区划代码" placeholder="请输入" />
                </el-form-item>
              </el-col>
              <el-col :md="12" :lg="12" :xl="12">
                <el-form-item label="行政区名称">
                  <el-input v-model="addForm.行政区名称" placeholder="请输入" />
                </el-form-item>
              </el-col>
              <el-col :md="12" :lg="12" :xl="12">
                <el-form-item label="地址">
                  <el-input v-model="addForm.地址" placeholder="请输入" />
                </el-form-item>
              </el-col>
              <el-col :md="12" :lg="12" :xl="12">
                <el-form-item label="联系电话">
                  <el-input v-model="addForm.联系电话" placeholder="请输入" />
                </el-form-item>
              </el-col>
              <el-col :md="12" :lg="12" :xl="12">
                <el-form-item label="邮编">
                  <el-input v-model="addForm.邮编" placeholder="请输入" />
                </el-form-item>
              </el-col>
            </el-row>
            <div class="box-header handle">
              <span class="box-title">区下属街道</span>
              <div class="box-tools">
                <el-button type="success" @click="addRow">新增</el-button>
                <el-button type="danger" @click="deleteRow">删除</el-button>
              </div>
            </div>
            <my-table-view
              v-loading="loading"
              :data="tableData"
              :columns="columns"
              :multiple-selection.sync="multipleSelection"
            >
              <template v-if="scope.row.edit" slot="街道名称" slot-scope="scope">
                <el-input v-model="scope.row.街道名称" />
              </template>
              <template v-if="scope.row.edit" slot="街道办事处名称" slot-scope="scope">
                <el-input v-model="scope.row.街道办事处名称" />
              </template>
              <template v-if="scope.row.edit" slot="单位地址" slot-scope="scope">
                <el-input v-model="scope.row.单位地址" />
              </template>
              <template v-if="scope.row.edit" slot="联系电话" slot-scope="scope">
                <el-input v-model="scope.row.联系电话" />
              </template>
              <template slot="operation" slot-scope="scope">
                <el-button type="text" :class="scope.row.edit?'modify':'warning'" :title="scope.row.edit?'保存':'修改'" @click="editRow(scope)">
                  <svg-icon :icon-class="scope.row.edit?'modify':'edit'" />
                </el-button>
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
      options: [
        { label: '未确认', value: 1 },
        { label: '已确认', value: 2 }
      ],
      columns: [
        { type: 'selection' },
        { type: 'index', label: '序号', width: '55px' },
        { type: 'custom', slotName: '街道名称', prop: '街道名称', label: '街道名称', align: 'center', overflow: true },
        { type: 'custom', slotName: '街道办事处名称', prop: '街道办事处名称', label: '街道办事处名称', align: 'center', overflow: true },
        { type: 'custom', slotName: '单位地址', prop: '单位地址', label: '单位地址', align: 'center', overflow: true },
        { type: 'custom', slotName: '联系电话', prop: '联系电话', label: '联系电话', align: 'center', overflow: true },
        { type: 'operation', label: '操作', fixed: 'right', width: '100px' }
      ],
      tableData: [
        {
          街道名称: '街道名称1',
          街道办事处名称: '街道办事处名称',
          单位地址: '单位地址',
          联系电话: '联系电话',
          edit: false
        },
        {
          街道名称: '街道名称2',
          街道办事处名称: '街道办事处名称',
          单位地址: '单位地址',
          联系电话: '联系电话',
          edit: false
        },
        {
          街道名称: '街道名称3',
          街道办事处名称: '街道办事处名称',
          单位地址: '单位地址',
          联系电话: '联系电话',
          edit: false
        }
      ],
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
    deleteRow() {
      console.log(this.multipleSelection)
    },
    addRow(row) {
      const json = {
        街道名称: 'xx',
        街道办事处名称: 'xx',
        单位地址: 'xx',
        联系电话: 'xx',
        edit: true
      }
      this.tableData.push(json)
    },
    editRow(row) {
      this.tableData[row.rowIndex].edit = !this.tableData[row.rowIndex].edit
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
