<template>
  <form-dialog
    :title="dialogTitle"
    :is-show="isDialogVisible"
    size="big"
    @update:isShow="isShow"
  >
    <div class="box" style="height: auto">
      <el-form ref="searchForm" :model="searchForm" label-width="105px">
        <el-row :gutter="12">
          <el-col :span="8">
            <el-form-item label="查询条件" prop="查询条件">
              <el-input v-model="searchForm.查询条件" placeholder="请输入身份证或姓名" clearable />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="姓名" prop="姓名">
              <el-input v-model="searchForm.姓名" placeholder />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="证件号码" prop="证件号码">
              <el-input v-model="searchForm.证件号码" placeholder />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="性别" prop="证件号码">
              <el-input v-model="searchForm.证件号码" placeholder />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="出生日期" prop="证件号码">
              <el-input v-model="searchForm.证件号码" placeholder />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="参加工作日期" prop="证件号码">
              <el-input v-model="searchForm.证件号码" placeholder />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="单位管理码" prop="证件号码">
              <el-input v-model="searchForm.证件号码" placeholder />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="单位名称" prop="证件号码">
              <el-input v-model="searchForm.证件号码" placeholder />
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </div>
    <div class="box" style="height: auto">
      <box-title title-name="个人账户补注信息新增" />
      <el-form ref="searchForm" :model="searchForm" label-width="105px">
        <el-row :gutter="12">
          <el-col :span="8">
            <el-form-item label="补注扣减类型" prop="查询条件">
              <el-input v-model="searchForm.查询条件" />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="开始结束年月" prop="姓名">
              <el-input v-model="searchForm.姓名" placeholder />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="补注业务类型" prop="证件号码">
              <el-input v-model="searchForm.证件号码" placeholder />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="人员类别" prop="检查项目">
              <el-input v-model="searchForm.检查项目" placeholder />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="补注金额" prop="检查项目">
              <el-input v-model="searchForm.检查项目" placeholder />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="计算基数" prop="检查项目">
              <el-input v-model="searchForm.检查项目" placeholder />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="补注原因" prop="检查项目">
              <el-input v-model="searchForm.检查项目" placeholder />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="联系人手机" prop="检查项目">
              <el-input v-model="searchForm.检查项目" placeholder />
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </div>

    <div class="box" style="height: 400px">
      <div class="box-header handle">
        <span class="box-title">个人呢账户正常注资信息</span>
        <!-- <div class="box-tools">
          <el-button type="primary">导出检查结果</el-button>
        </div>-->
      </div>
      <div class="box-body">
        <my-table-view :border="true" :columns="columns" :data="tableData" />
        <Pagination />
      </div>
    </div>
    <span slot="footer" class="dialog-footer">
      <el-button type="primary" @click="saveEvent">保存</el-button>
      <el-button type="primary" @click="closeDialog">取消</el-button>
    </span>
  </form-dialog>
</template>
<script>
import { detailColumns } from '../tableConfig'
import BoxTitle from '@/views/components/PageLayers/box-title'
export default {
  components: {
    BoxTitle
  },
  model: {
    prop: 'isDialogVisible',
    event: 'closeAll'
  },
  props: {
    isDialogVisible: {
      type: Boolean,
      default: false
    },
    dialogTitle: {
      type: String,
      default: '标题'
    }
  },
  data() {
    return {
      itemsDatas: [
        { label: '查询条件', prop: 'xxx', type: 'input' },
        { label: '姓名', prop: 'xxx', type: 'input' },
        { label: '证件号码', prop: 'xxx', type: 'input' },
        { label: '检查项目', prop: 'xxx', type: 'input' }
      ],
      queryForm: {
        xxx: ''
      },
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
  methods: {
    // resetForm() {
    //   this.$emit('closeAll', false)
    //   this.$refs.ruleFrom.elForm.resetFields()
    // },
    closeDialog() {
      this.$emit('closeAll', false)
    },
    saveEvent() {
      this.$msgSuccess('保存成功')
      this.$emit('closeAll', false)
    },
    // },
    isShow(v) {
      this.$emit('closeAll', false)
    }
  }
}
</script>

<style lang="scss" scoped>
.box-body {
  height: 100%;
}
.detail-info {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  margin-left: 16px;
  & > div {
    margin-right: 30px;
    label {
      color: #636363;
    }
    span {
      color: #101010;
    }
  }
}
.pf-table .el-table {
  min-height: 400px !important;
}
.ml {
  margin-left: 10px;
}
</style>
