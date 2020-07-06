<template>
  <!-- 个人零星报销原因新增-->
  <form-dialog title="个人零星报销原因新增" width="1000px" new-class="big" :is-show="visible" @update:isShow="updateIsShow">
    <FormItems ref="addForm" :is-grid="false" :items-datas="itemsDatas" :rules="rules" :model="addForm" :form-datas="addForm">
      <template slot="险种类型1">
        <insurance-type v-model="addForm.险种类型1" />
      </template>
      <template slot="零报情形类别1">
        <sporadic-reimbursement-situation-type v-model="addForm.零报情形类别1" :allow-create="true" />
      </template>
      <template slot="零报类型1">
        <sporadic-reimbursement-type v-model="addForm.零报类型1" :allow-create="true" />
      </template>
    </FormItems>
    <section class="layer">
      <div class="box">
        <div class="box-header handle">
          <span class="box-title">提交材料</span>
          <div class="box-tools">
            <el-button type="primary" @click="handleAdd">新增</el-button>
          </div>
        </div>
        <div class="box-body">
          <my-table-view height="400px" :columns="columns" :data="tableData">
            <template slot="name" slot-scope="scope">
              <el-input v-if="scope.row.isEdit" v-model="scope.row.newName" placeholder="请输入" />
            </template>
            <template slot="must" slot-scope="scope">
              <el-switch v-if="scope.row.isEdit" v-model="scope.row.newMust" :active-text="scope.row.newMust ? '是' : '否'" />
              <span v-else>{{ scope.row.must ? '是' : '否' }}</span>
            </template>
            <template slot="operation" slot-scope="scope">
              <el-button v-if="!scope.row.isEdit" type="text" class="delete" @click="handleDelete(scope.row)">删除</el-button>
              <el-button v-if="!scope.row.isEdit" type="text" @click="handleEdit(scope.row)">修改</el-button>
              <el-button v-if="scope.row.isEdit" type="text" class="delete" @click="handleCancel(scope.row)">取消</el-button>
              <el-button v-if="scope.row.isEdit" type="text" @click="handleSave(scope.row)">保存</el-button>
            </template>
          </my-table-view>
        </div>
      </div>
    </section>
    <span slot="footer" class="dialog-footer">
      <el-button @click="cancelEdit()">取消</el-button>
      <el-button type="primary" @click="submit('addForm')">保存</el-button>
    </span>
  </form-dialog>
</template>

<script>
import FormItems from '@/views/components/PageLayers/form-items'
import InsuranceType from '@/components/Select/InsuranceType'
import SporadicReimbursementType from '@/components/Select/SporadicReimbursementType'
import SporadicReimbursementSituationType from '@/components/Select/SporadicReimbursementSituationType'
export default {
  name: '',
  components: {
    FormItems,
    SporadicReimbursementSituationType,
    SporadicReimbursementType,
    InsuranceType
  },
  props: {
    show: { type: Boolean, default: () => false }
  },
  data() {
    return {
      visible: this.show,
      itemsDatas: [
        { label: '险种类型', prop: '险种类型1', type: 'custom' },
        { label: '零报情形类别', prop: '零报情形类别1', type: 'custom' },
        { label: '零报类型', prop: '零报类型1', type: 'custom' },
        { label: '零报原因', prop: '零报原因1', type: 'input', span: 16 },
        { label: '有效标志', prop: '有效标志1', type: 'switch' }
      ],
      addForm: {},
      rules: {
        险种类型1: { required: true, message: '请选择险种类型', trigger: 'change' },
        零报情形类别1: { required: true, message: '请选择零报情形', trigger: 'change' },
        零报类型1: { required: true, message: '请选择零报类型', trigger: 'change' },
        零报原因1: { required: true, message: '请输入零报原因', trigger: 'blur' },
        有效标志1: { required: true, message: '请选择有效标志', trigger: 'change' }
      },
      columns: [
        { label: '序号', type: 'index' },
        // { type: 'selection' },
        { label: '材料名称', prop: 'name', type: 'custom', slotName: 'name' },
        { label: '是否必须', prop: 'must', type: 'custom', slotName: 'must' },
        { label: '操作', type: 'operation' }
      ],
      tableData: [1, 2, 3].map(item => {
        return {
          no: '' + item,
          name: '个人情况说明',
          must: false
        }
      })
    }
  },
  computed: {
  },
  watch: {
    show: function(newVal, oldVal) {
      this.visible = this.show
    }
  },
  created() {
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      this.tableData.forEach(item => {
        this.$set(item, 'isEdit', false)
        this.$set(item, 'newName', '')
        this.$set(item, 'newMust', '')
      })
    },
    //  新增
    handleAdd() {
      this.tableData.unshift({ newName: '', name: '', newMust: false, must: false, isEdit: true, isNew: true })
    },
    //  修改
    handleEdit(row) {
      row.isEdit = true
      row.newMust = row.must
      row.newName = row.name
      console.log(row)
    },
    //  删除
    handleDelete(row) {
      this.$msgConfirm('确认删除？').then(res => {
        this.$msgSuccess('删除成功')
      }).catch(() => {
        this.$msgInfo('取消删除')
      })
    },
    //  取消修改
    handleCancel(row) {
      if (row.isNew) { //  如果这条是新增的
        this.tableData.shift()
      } else {
        row.isEdit = false
      }
    },
    //  保存
    handleSave(row) {
      if (row.newName === '') {
        this.$msgError('请输入材料名称')
      } else {
        row.isEdit = false
        row.name = row.newName
        row.must = row.newMust
      }
    },
    updateIsShow(v) {
      this.$emit('update:show', v)
    },
    resetForm() {
      this.$refs['addForm']['elForm'].resetFields()
    },
    submit() {
      this.$refs['addForm']['elForm'].validate((valid) => {
        if (valid) {
          this.cancelEdit()
          this.$msgSuccess('成功')
        } else {
          return false
        }
      })
    },
    cancelEdit() {
      this.visible = false
      this.$refs['addForm']['elForm'].clearValidate()
      this.$emit('update:show', false)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
