<template>
  <form-dialog title="基数要素信息" :is-show="visible" width="1000px" new-class="big" @update:isShow="updateIsShow">
    <div class="box" style="height:auto;">
      <div class="box-header">
        <span class="box-title">基数要素</span>
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
        <span class="box-title">基数要素列表</span>
        <div class="box-tools" />
      </div>
      <div class="box-body">
        <MyTableView :border="true" :columns="columns" :data="tableData">
          <template slot="jsType" slot-scope="scope">
            <div>
              <el-select v-if="scope.row.isEdit" v-model="scope.row.jsType" style="width:100%;">
                <el-option label="个人工资" value="个人工资" />
              </el-select>
              <span v-else>{{ scope.row.jsType }}</span>
            </div>
          </template>
          <template slot="jsfysxz" slot-scope="scope">
            <el-input v-if="scope.row.isEdit" v-model="scope.row.jsfysxz" style="width:100%;" />
            <span v-else>{{ scope.row.jsfysxz }}</span>
          </template>
          <template slot="jsfysxys" slot-scope="scope">
            <div>
              <el-select v-if="scope.row.isEdit" v-model="scope.row.jsfysxys" style="width:100%;">
                <el-option label="社平工资60%" value="社平工资60%" />
                <el-option label="社平工资300%" value="社平工资300%" />
              </el-select>
              <span v-else>{{ scope.row.jsfysxys }}</span>
            </div>
          </template>
          <template slot="jsfyxxz" slot-scope="scope">
            <el-input v-if="scope.row.isEdit" v-model="scope.row.jsfyxxz" style="width:100%;" />
            <span v-else>{{ scope.row.jsfyxxz }}</span>
          </template>
          <template slot="jsfyxxys" slot-scope="scope">
            <div>
              <el-select v-if="scope.row.isEdit" v-model="scope.row.jsfyxxys" style="width:100%;">
                <el-option label="社平工资60%" value="社平工资60%" />
                <el-option label="社平工资300%" value="社平工资300%" />
              </el-select>
              <span v-else>{{ scope.row.jsfyxxys }}</span>
            </div>
          </template>
          <!-- <template slot="operation" slot-scope="scope">
            <el-button v-if="!scope.row.isEdit" type="text" @click="modify(scope.row)">修改</el-button>
            <el-button type="text" style="color:red;" @click="deleteItem(scope.row)">删除</el-button>
            <el-button v-if="scope.row.isEdit" type="text" @click="scope.row.isEdit = false">保存</el-button>
          </template> -->
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
        // ybqh: { required: true, message: '请选择医保区划', trigger: 'blur' },
        // xz: { required: true, message: '请选择险种', trigger: 'blur' },
        // jsms: { required: true, message: '请输入基数描述', trigger: 'blur' },
        // ds: { required: true, message: '请选择地市', trigger: 'blur' },
        // sbywCode: { required: true, message: '请选择社保业务编号', trigger: 'blur' }
      },
      itemsDatas: [
        { label: '医保区划', prop: 'ybqh', type: 'select', disabled: true },
        { label: '险种', prop: 'xz', type: 'select', disabled: true },
        { label: '基数描述', prop: 'jsms', type: 'input', disabled: true },
        { label: '地市', prop: 'ds', type: 'select', disabled: true },
        { label: '社保业务编号', prop: 'sbywCode', type: 'select', disabled: true }
      ],
      columns: [
        { type: 'selection', label: '', width: '30px' },
        { label: '序号', type: 'index', width: '50' },
        { type: 'custom', label: '基数类型', prop: 'jsType', slotName: 'jsType' },
        { type: 'custom', label: '计算费用上限值', prop: 'jsfysxz', slotName: 'jsfysxz' },
        { type: 'custom', label: '计算费用上限要素', prop: 'jsfysxys', slotName: 'jsfysxys' },
        { type: 'custom', label: '计算费用下限值', prop: 'jsfyxxz', slotName: 'jsfyxxz' },
        { type: 'custom', label: '计算费用下限要素', prop: 'jsfyxxys', slotName: 'jsfyxxys' }
        // { type: 'operation', label: '操作' }
      ],
      tableData: [
        {
          jsType: '个人工资',
          jsfysxz: '',
          jsfysxys: '社平均工资60%',
          jsfyxxz: '',
          jsfyxxys: '社平均工资60%',
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
    cancel() {
      this.visible = false
      this.$refs.addForm.elForm.resetFields()
      this.$emit('update:show', false)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
