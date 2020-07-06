<template>
  <form-dialog :title="dialogTitle" :is-show="isDialogVisible" @update:isShow="isShow" @resetForm="resetForm">
    <el-form ref="searchForm" :model="searchForm" label-width="105px">
      <el-row :gutter="12">
        <el-col :span="8">
          <el-form-item label="查询条件" prop="查询条件">
            <el-input v-model="searchForm.查询条件" placeholder="请输入身份证或姓名" clearable />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="姓名" prop="姓名">
            <el-input v-model="searchForm.姓名" placeholder="" disabled />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="证件号码" prop="证件号码">
            <el-input v-model="searchForm.证件号码" placeholder="" disabled />
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item label="检查项目" prop="检查项目">
            <el-input v-model="searchForm.检查项目" placeholder="" disabled />
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <div class="box" style="height: 400px">
      <div class="box-header handle">
        <span class="box-title">个人核发汇总结果</span>
        <div class="box-tools">
          <el-button type="primary" @click="exportResult">导出检查结果</el-button>
        </div>
      </div>
      <div class="box-body">
        <my-table-view :border="true" :columns="columns" :data="tableData" />
        <Pagination />
      </div>
    </div>
    <span slot="footer" class="dialog-footer">
      <el-button @click="close">关闭</el-button>
    </span>
  </form-dialog>
</template>

<script>
import { detailColumns } from '../tableConfig'
export default {

  props: {
    dialogTitle: {
      type: String,
      default: ''
    },
    isDialogVisible: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      columns: detailColumns,
      tableData: [
        {
          '交换数据批号': '90347859843',
          '费款所属期': '934287',
          '对应费款所属期': '9382473',
          '参保身份': '退休人员',
          '个人划入个账金额(元)': '894734',
          '单位划入个账金额(元)': '8473',
          '门诊统筹基金扣减金额(元)': '984327',
          '实际划款(元)': '89357',
          '注资基数': '3784',
          '医保区划': '854932'
        }
      ],
      searchForm: {
        查询条件: '',
        姓名: '',
        证件号码: '',
        检查项目: ''
      }
    }
  },
  watch: {

  },
  methods: {
    close() {
      this.$emit('update:isShow', false)
    },
    isShow(v) {
      this.$emit('update:isShow', v)
    },
    resetForm() {
      this.$refs.searchForm.resetFields()
      this.$emit('update:isShow', false)
    },
    exportResult() {

    }
  }

}
</script>

<style lang="scss" scoped>

</style>

