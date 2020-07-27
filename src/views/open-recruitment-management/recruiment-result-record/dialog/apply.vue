<template>
  <form-dialog
    class="audit-dialog-wrapper"
    :title="dialogTitle"
    :is-show="isDialogVisible"
    size="big"
    width="1200px"
    @update:isShow="isShow"
  >
    <div class="box">
      <div class="box-body">
        <div slot="table-title" class="box-header handle">
          <span class="box-title">基本信息</span>
        </div>
        <el-form ref="addForm" :model="addForm" label-width="105px" style="margin-bottom:10px">
          <el-row :gutter="12">
            <el-col :span="8">
              <el-form-item label="单位名称" prop="aac003">
                <el-input v-model="addForm.aac003" @input="handleSelectChange" />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="方案名称" prop="aac002">
                <el-input v-model="addForm.aac002" @input="handleSelectChange" />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="主管单位" prop="aac006">
                <el-input v-model="addForm.aac006" @input="handleSelectChange" />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="所属年度" prop="aac004">
                <el-input v-model="addForm.aac004" @input="handleSelectChange" />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="编制数" prop="aab069">
                <OrganizationName v-model="addForm.aab069" @input="handleSelectChange" />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="计划人数" prop="aac007">
                <el-input v-model="addForm.aac007" @input="handleSelectChange" />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="联系人" prop="单位咨询电话">
                <el-input v-model="addForm.单位咨询电话" @input="handleSelectChange" />
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
        <div slot="table-title" class="box-header handle">
          <span class="box-title">拟聘人员花名册</span>
          <div slot="title-btns" class="box-tools">
            <el-button type="primary" @click="isShowAdd = true">新增</el-button>
          </div>
        </div>
        <my-table-view v-loading="loading" :border="true" :max-cloumns="20" :columns="columns" :data="tableData">
          <template slot="operation" slot-scope="scope">
            <el-button type="text" @click="showDialog('edit',scope.row)">详情</el-button>
            <el-button type="text" @click="showDialog('edit',scope.row)">编辑</el-button>
            <el-button type="text" class="delete" @click="showDialog('edit',scope.row)">删除</el-button>
          </template>
        </my-table-view>
        <div class="box-header handle">
          <span class="box-title">业务材料</span>
        </div>
        <!-- <List :is-border="true" :is-index="true" :columns="columns" :operation="tableOperates" :data="tableData" /> -->
      </div>
    </div>

    <span slot="footer" class="dialog-footer">
      <!-- 新增 -->
      <el-button v-if="operation === 'add'" type="primary" @click="retire">保存</el-button>
      <!-- 修改 -->
      <el-button v-if="operation === 'edit'" type="primary" @click="retireChange">保存</el-button>
      <el-button @click="closeDialog">关闭</el-button>
    </span>
    <Add v-model="isShowAdd" />
  </form-dialog>
</template>

<script>
import OrganizationName from '@/components/Select/OrganizationName'
import Add from './add'
export default {
  components: {
    OrganizationName,
    Add
  },
  model: {
    prop: 'isDialogVisible',
    event: 'closeAll'
  },
  props: {
    detailInfo: {
      type: Object,
      default: function() { return {} }
    },
    dialogTitle: {
      type: String,
      default: '信息查看'
    },
    isDialogVisible: {
      type: Boolean,
      default: false
    },
    operation: {
      type: String,
      default: 'detail'
    }
  },
  data() {
    return {
      addForm: {},
      activeName: '1',
      isShowAdd: false,
      loading: false,
      detailId: '',
      columns: [
        { type: 'selection' },
        { type: 'index', label: '序号' },
        { label: '姓名', prop: 'aab069' },
        { label: '性别', prop: 'c' },
        { label: '身份证号', prop: 'aab019' },
        { label: '人员类别', prop: 'rb0195' },
        { label: '应聘岗位', prop: 'aab023' },
        { label: '部门名称', prop: 'rb0705' },
        { label: '学 历', prop: 'k' },
        { label: '学 位', prop: 'k' },
        { label: '年龄', prop: 'k' },
        { label: '所学专业', prop: 'k' },
        { label: '工作经历', prop: 'k' },
        { label: '备注', prop: 'k' },
        { label: '操作', type: 'operation', fixed: 'right', width: '220px' }
      ],
      tableData: []
    }
  },
  methods: {
    cloeseParent() {
      this.$emit('cloeseParent', false)
    },
    closeDialog() {
      this.$emit('closeAll', false)
      this.reset()
    },
    handleSelectChange(v) {
      this.$emit('input', v)
    },
    reset() {
      this.detailId = ''
      this.$refs.addForm.resetFields()
    },
    isShow(v) {
      this.$emit('closeAll', false)
    }
  }
}
</script>

<style scoped lang="scss">

</style>
