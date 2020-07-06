<!-- 灵活就业批量应收核定 --->
<template>
  <div class="third-index employment-batch-receivable-approved item7">
    <section class="layer layer-query">
      <div class="box">
        <ConditionHeader />
        <div class="box-body query">
          <el-form ref="searchForm" :model="searchForm" label-width="105px">
            <el-row :gutter="10">
              <el-col :md="12" :lg="8" :xl="6">
                <el-form-item label="选择单位" prop="xzdw">
                  <el-select v-model="searchForm.xzdw" style="width:100%" />
                </el-form-item>
              </el-col>
              <el-col :md="12" :lg="8" :xl="6">
                <el-form-item label="险种" prop="xz">
                  <el-select v-model="searchForm.xz" style="width:100%">
                    <el-option label="基本医疗保险" value="基本医疗保险" />
                    <el-option label="大额互助" value="大额互助" />
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :md="12" :lg="8" :xl="6">
                <el-form-item label="费用所属期" prop="fyssq">
                  <el-date-picker
                    v-model="searchForm.fyssq"
                    type="daterange"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                    style="width:100%"
                  />
                </el-form-item>
              </el-col>
              <el-col :md="12" :lg="8" :xl="6">
                <el-form-item label="参保身份" prop="cbsf">
                  <el-select v-model="searchForm.cbsf" style="width:100%;">
                    <el-option label="在职" value="在职" />
                    <el-option label="退休" value="退休" />
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :md="12" :lg="8" :xl="6">
                <el-form-item label="执行时间" prop="zxsj">
                  <el-date-picker
                    v-model="searchForm.zxsj"
                    type="date"
                    placeholder="选择日期"
                    style="width:100%"
                  />
                </el-form-item>
              </el-col>
              <el-col :md="12" :lg="8" :xl="6">
                <el-form-item label="医保区划" prop="ybqh">
                  <el-select v-model="searchForm.ybqh" style="width:100%;" />
                </el-form-item>
              </el-col>
              <el-col :md="12" :lg="8" :xl="6">
                <el-form-item label="是否代扣" prop="sfdk">
                  <el-select v-model="searchForm.sfdk" style="width:100%;">
                    <el-option label="否" value="否" />
                    <el-option label="是" value="是" />
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :md="12" :lg="8" :xl="6" style="text-align: right">
                <el-button @click="reset('searchForm')">重置</el-button>
                <el-button type="primary" @click="search('searchForm')">查询</el-button>
              </el-col>
            </el-row>
          </el-form>
        </div>
      </div>
    </section>
    <section class="layer layer-result">
      <div class="box">
        <div class="box-header handle">
          <span class="box-title">定点医药机构银行账号列表</span>
          <div class="box-tools">
            <el-button type="primary" @click="computeProgress">计算进度</el-button>
            <el-button type="primary" @click="save">保存</el-button>
          </div>
        </div>
        <div class="box-body">
          <MyTableView :border="true" :columns="columns" :data="tableData" @update:multipleSelection="multipleSelection">
            <template slot="jd" slot-scope="scope">
              <el-progress :percentage="scope.row.jd" />
            </template>
          </MyTableView>
          <Pagination />
        </div>
      </div>
    </section>
    <ComputeProgressDialog :is-dialog-visible="isComputeProgressVisible" @closeAll="closeComputeProgressDialog" />
  </div>
</template>
<script>
import ComputeProgressDialog from './components/ComputeProgressDialog'
export default {
  components: {
    ComputeProgressDialog
  },
  data() {
    return {
      searchForm: {
        xzdw: '',
        xz: '',
        fyssq: '',
        cbsf: '',
        zxsj: '',
        ybqh: '',
        sfdk: ''
      },
      columns: [
        { type: 'selection', label: '', width: '30px' },
        { label: '序号', type: 'index', width: '50' },
        { label: '单位管理码', prop: 'dwCode' },
        { label: '单位名称', prop: 'dwName' },
        { label: '险种', prop: 'xz' },
        { label: '参保人总数', prop: 'cbrzs' },
        { label: '已计算人数', prop: 'yjsrs' },
        { label: '未计算人数', prop: 'wjsrs' },
        { label: '计算进度', type: 'custom', slotName: 'jd', prop: 'jd' }
      ],
      tableData: [
        {
          dwCode: '12341',
          dwName: 'XXXX灵活就业',
          xz: '基本医疗保险',
          cbrzs: '1',
          yjsrs: '1',
          wjsrs: '0',
          jd: 75
        }
      ],
      selectRows: [],
      isComputeProgressVisible: false
    }
  },
  watch: {
  },
  methods: {
    reset(formName) {
      this.$refs[formName].resetFields()
    },
    search(formName) {},
    multipleSelection(val) {
      this.selectRows = val
    },
    computeProgress() {
      if (this.selectRows.length > 0) {
        this.isComputeProgressVisible = true
      } else {
        this.$msgError('请选择要操作的数据！')
      }
    },
    save() {
      this.$msgSuccess('保存成功！')
    },
    closeComputeProgressDialog() {
      this.isComputeProgressVisible = false
    }
  }
}
</script>
<style lang='scss' scoped>
</style>

