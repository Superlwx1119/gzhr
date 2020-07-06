<template>
  <!--   体检套餐新增-->
  <form-dialog title="体检套餐新增" width="1000px" new-class="big" :is-show="visible" @update:isShow="updateIsShow">
    <FormItems ref="form" :items-datas="itemsDatas" :model="form" :rules="rules" :form-datas="form">
      <template slot="体检类别1">
        <health-type v-model="form.体检类别1" />
      </template>
      <template slot="套餐性别1">
        <package-sex v-model="form.套餐性别1" />
      </template>
      <template slot="套餐年龄段1">
        <age-range v-model="form.套餐年龄段1" />
      </template>
      <template slot="默认套餐1">
        <el-select v-model="form.默认套餐1" style="width: 100%;" placeholder="请选择">
          <el-option label="是" value="1" />
          <el-option label="否" value="0" />
        </el-select>
      </template>
    </FormItems>
    <section class="layer">
      <TableTransfer
        :left-title="'未选择项目'"
        :right-title="'已选择项目'"
        :left-data="leftData"
        :right-data="rightData"
        :left-select="leftSelect"
        :right-select="rightSelect"
      >
        <!--        穿梭框左边表格-->
        <template slot="leftItem">
          <health-project v-model="leftSearch" style="width: 230px;margin-bottom: 15px" />
          <el-button type="primary">查询</el-button>
          <my-table-view height="400px" :columns="leftColumns" :data="leftData" @update:multipleSelection="leftSelectChange" />
        </template>
        <!--        穿梭框右边表格-->
        <template slot="rightItem">
          <health-project v-model="rightSearch" style="width: 230px;margin-bottom: 15px" />
          <el-button type="primary">查询</el-button>
          <my-table-view height="400px" :columns="rightColumns" :data="rightData" @update:multipleSelection="rightSelectChange">
            <template slot="classify" slot-scope="scope">
              <el-select v-model="scope.row.classify" placeholder="请选择">
                <el-option label="可选" value="1" />
                <el-option label="必选" value="2" />
              </el-select>
            </template>
            <template slot="combination" slot-scope="scope">
              <el-select v-model="scope.row.combination" placeholder="请选择">
                <el-option label="未归类" value="1" />
                <el-option label="二合一" value="2" />
                <el-option label="三合一" value="3" />
              </el-select>
            </template>
          </my-table-view>
        </template>
      </TableTransfer>
    </section>
    <span slot="footer" class="dialog-footer">
      <el-button @click="cancel('form')">取消</el-button>
      <el-button type="primary" @click="submit('form')">保存</el-button>
    </span>
  </form-dialog>
</template>

<script>
import FormItems from '@/views/components/PageLayers/form-items'
import HealthType from '@/components/Select/health-manage/HealthType'
import AgeRange from '@/components/Select/health-manage/AgeRange'
import PackageSex from '@/components/Select/health-manage/PackageSex'
import TableTransfer from '@/components/TableTransfer'
import HealthProject from '@/components/Select/health-manage/HealthProject'
export default {
  name: '',
  components: {
    AgeRange,
    FormItems,
    HealthType,
    PackageSex,
    TableTransfer,
    HealthProject
  },
  props: {
    show: { type: Boolean, default: () => false }
  },
  data() {
    return {
      itemsDatas: [
        { label: '套餐名称', prop: '套餐名称1', type: 'input' },
        { label: '体检类别', prop: '体检类别1', type: 'custom' },
        { label: '套餐性别', prop: '套餐性别1', type: 'custom' },
        { label: '默认套餐', prop: '默认套餐1', type: 'custom' },
        { label: '生效年度', prop: '生效年度1', type: 'dateYear' },
        { label: '失效年度', prop: '失效年度1', type: 'dateYear' },
        { label: '套餐年龄段', prop: '套餐年龄段1', type: 'custom' },
        { label: '套餐价格(元)', prop: '套餐价格1', type: 'input' }
      ],
      form: {},
      visible: this.show,
      rules: {
        套餐名称1: { required: true, message: '请输入套餐名称', trigger: 'blur' },
        体检类别1: { required: true, message: '请选择体检类别', trigger: 'change' },
        套餐性别1: { required: true, message: '请选择套餐性别', trigger: 'change' },
        默认套餐1: { required: true, message: '请选择默认套餐', trigger: 'change' },
        生效年度1: { required: true, message: '请选择生效年度', trigger: 'change' },
        失效年度1: { required: true, message: '请选择失效年度', trigger: 'change' },
        套餐价格1: { required: true, message: '请输入套餐价格', trigger: 'blur' }
      },
      leftSearch: '',
      rightSearch: '',
      leftSelect: [],
      rightSelect: [],
      leftColumns: [
        { type: 'selection' },
        { label: '项目编码', prop: 'code' },
        { label: '项目名称', prop: 'name' }
      ],
      leftData: [
        { code: 'ACE09889021', name: '盆腔B超' },
        { code: 'BCE09889022', name: '血糖检测' },
        { code: 'CCE09889023', name: '尿常规' }
      ],
      rightColumns: [
        { type: 'selection' },
        { label: '项目编码', prop: 'code' },
        { label: '项目名称', prop: 'name' },
        { label: '目录归类', prop: 'classify', type: 'custom', slotName: 'classify' },
        { label: '组合类型', prop: 'combination', type: 'custom', slotName: 'combination' }
      ],
      rightData: [
        { code: 'ACE09889021', name: '盆腔B超', classify: '', combination: '' }
      ]
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
  },
  methods: {
    updateIsShow(v) {
      this.$emit('update:show', v)
    },
    resetForm() {
      this.$refs['form']['elForm'].resetFields()
    },
    submit() {
      this.$refs['form']['elForm'].validate((valid) => {
        if (valid) {
          this.cancel()
          this.$msgSuccess('成功')
        } else {
          return false
        }
      })
    },
    cancel() {
      this.visible = false
      this.$refs['form']['elForm'].clearValidate()
      this.$emit('update:show', false)
    },
    leftSelectChange(val) {
      this.leftSelect = val
    },
    rightSelectChange(val) {
      this.rightSelect = val
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
