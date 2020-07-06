<template>
  <form-dialog title="条件要素信息" :is-show="visible" width="1000px" new-class="big" @update:isShow="updateIsShow">
    <div class="box" style="height:auto;">
      <div class="box-header">
        <span class="box-title">条件要素</span>
      </div>
      <div class="box-body">
        <form-items
          ref="addForm"
          :model="addForm"
          :rules="rules"
          :is-grid="false"
          :items-datas="itemsDatas"
          :form-datas="addForm"
        />
      </div>
    </div>
    <div class="box" style="height:auto;">
      <div class="box-header handle">
        <span class="box-title">条件要素列表</span>
        <div class="box-tools">
          <el-button type="primary" @click="add">新增</el-button>
          <el-button type="primary" @click="submit">保存</el-button>
        </div>
      </div>
      <div class="box-body">
        <MyTableView :border="true" :columns="columns" :data="tableData">
          <template slot="ysType" slot-scope="scope">
            <div>
              <el-select v-if="scope.row.isEdit" v-model="scope.row.ysType" style="width:100%;">
                <el-option label="人员状态" value="人员状态" />
                <el-option label="单位类型" value="单位类型" />
                <el-option label="人员类别" value="人员类别" />
                <el-option label="个人险种状态" value="个人险种状态" />
              </el-select>
              <span v-else>{{ scope.row.ysType }}</span>
            </div>
          </template>
          <template slot="gxf" slot-scope="scope">
            <el-input v-if="scope.row.isEdit" v-model="scope.row.gxf" style="width:100%;" />
            <span v-else>{{ scope.row.gxf }}</span>
          </template>
          <template slot="ysz" slot-scope="scope">
            <el-input v-if="scope.row.isEdit" v-model="scope.row.ysz" style="width:100%;" />
            <span v-else>{{ scope.row.ysz }}</span>
          </template>
          <template slot="fjxx" slot-scope="scope">
            <el-input v-if="scope.row.isEdit" v-model="scope.row.fjxx" style="width:100%;" />
            <span v-else>{{ scope.row.fjxx }}</span>
          </template>
          <template slot="operation" slot-scope="scope">
            <el-button v-if="!scope.row.isEdit" type="text" @click="modify(scope.row)">修改</el-button>
            <el-button type="text" style="color:red;" @click="deleteItem(scope.row)">删除</el-button>
            <el-button v-if="scope.row.isEdit" type="text" @click="scope.row.isEdit = false">保存</el-button>
          </template>
        </MyTableView>
      </div>
    </div>
    <span slot="footer" class="dialog-footer" />
  </form-dialog>
</template>

<script>
import FormItems from '@/views/components/PageLayers/form-items'
export default {
  name: 'Add',
  components: {
    FormItems
  },
  mixins: [],
  props: {
    show: { type: Boolean, default: () => false }
  },
  data() {
    return {
      visible: this.show,
      addForm: {
        ybqh: '',
        xz: '',
        tjms: ''
      },
      rules: {
        ybqh: { required: true, message: '请选择医保区划', trigger: 'blur' },
        xz: { required: true, message: '请选择险种', trigger: 'blur' },
        tjms: { required: true, message: '请输入条件描述', trigger: 'blur' }
      },
      itemsDatas: [
        { label: '医保区划', prop: 'ybqh', type: 'select' },
        { label: '险种', prop: 'xz', type: 'select' },
        { label: '条件描述', prop: 'tjms', type: 'input' }
      ],
      columns: [
        { type: 'selection', label: '', width: '30px' },
        { label: '序号', type: 'index', width: '50' },
        { type: 'custom', label: '要素类型', prop: 'ysType', slotName: 'ysType' },
        { type: 'custom', label: '关系符', prop: 'gxf', slotName: 'gxf' },
        { type: 'custom', label: '要素值', prop: 'ysz', slotName: 'ysz' },
        { type: 'custom', label: '附加信息', prop: 'fjxx', slotName: 'fjxx' },
        { type: 'operation', label: '操作' }
      ],
      tableData: [
        {
          ysType: '人员状态',
          gxf: '=',
          ysz: '1',
          fjxx: '人员状态/有效',
          isEdit: false
        }
      ]
    }
  },
  computed: {},
  watch: {
    show: function(newVal, oldVal) {
      this.visible = this.show
    }
  },
  created() {
  },
  mounted() {
  },
  methods: {
    updateIsShow(v) {
      this.cancel()
      this.$emit('update:show', v)
    },
    resetForm() {
      this.$refs.addForm.elForm.resetFields()
    },
    submit(formName) {
      this.$refs.addForm.elForm.validate((valid) => {
        if (valid) {
          this.cancel()
          this.$msgSuccess('保存成功!')
          this.$emit('submit')
        } else {
          return false
        }
      })
    },
    cancel() {
      this.visible = false
      this.$refs.addForm.elForm.resetFields()
      this.$emit('update:show', false)
    },
    deleteItem(row) {
      this.$msgSuccess('删除成功')
    },
    modify(row) {
      row.isEdit = true
    },
    add() {
      this.tableData.push(
        {
          ysType: '',
          gxf: '',
          ysz: '',
          fjxx: '',
          isEdit: true
        }
      )
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
