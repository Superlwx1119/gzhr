<!-- 单位批量应收核定 -->
<template>
  <div class="third-index unit-batch-receivable-approved item6">
    <section class="layer layer-query">
      <div class="box">
        <ConditionHeader />
        <div class="box-body query">
          <el-form ref="searchForm" :model="searchForm" label-width="105px">
            <el-row :gutter="10">
              <el-col :md="12" :lg="8" :xl="6">
                <el-form-item label="医保区划" prop="ybqh">
                  <el-select v-model="searchForm.ybqh" style="width:100%;" />
                </el-form-item>
              </el-col>
              <el-col :md="12" :lg="8" :xl="6">
                <el-form-item label="险种" prop="xz">
                  <el-select v-model="searchForm.xz" style="width:100%;" />
                </el-form-item>
              </el-col>
              <el-col :md="12" :lg="8" :xl="6">
                <el-form-item label="费用所属期" prop="fyssq">
                  <el-date-picker
                    v-model="searchForm.fyssq"
                    type="month"
                    placeholder="选择日期"
                    style="width:100%"
                  />
                </el-form-item>
              </el-col>
              <el-col :md="12" :lg="8" :xl="6">
                <el-form-item label="上月已计算单位" prop="ysyjsdw">
                  <el-select v-model="searchForm.ysyjsdw" style="width:100%;" />
                </el-form-item>
              </el-col>
              <el-col :md="12" :lg="8" :xl="6">
                <el-form-item label="本年度工资申报" prop="bndgzsb">
                  <el-select v-model="searchForm.bndgzsb" style="width:100%;" />
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
        ybqh: '',
        xz: '',
        fyssq: '',
        ysyjsdw: '',
        bndgzsb: '',
        zxsj: ''
      },
      columns: [
        { type: 'selection', label: '', width: '30px' },
        { label: '序号', type: 'index', width: '50' },
        { label: '统筹区', prop: 'tcq' },
        { label: '险种', prop: 'xz' },
        { label: '参保单位总数', prop: 'cbdw' },
        { label: '已计算单位', prop: 'yjsdw' },
        { label: '未计算单位', prop: 'wjsdw' },
        { label: '进度', type: 'custom', slotName: 'jd', prop: 'jd' }
      ],
      tableData: [
        {
          tcq: '市本级',
          xz: '基本医疗保险',
          cbdw: '1',
          yjsdw: '1',
          wjsdw: '2',
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
