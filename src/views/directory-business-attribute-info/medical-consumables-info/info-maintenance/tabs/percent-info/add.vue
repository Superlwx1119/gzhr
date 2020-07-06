<template>
  <form-dialog title="自付比例增加" width="1100px" new-calss="big" :is-show="show" @update:isShow="addIsShow">
    <div class="box layer-tab">
      <el-tabs v-model="activeName" type="card">
        <el-tab-pane label="正常自付比例" name="first">
          <el-form ref="addForm" :model="addNormalForm" label-width="105px">
            <div class="box">
              <div class="box-body">
                <el-row :gutter="10">
                  <el-col :span="8">
                    <el-form-item label="医保目录" prop="医保目录">
                      <insurance-directory v-model="addNormalForm.医保目录" />
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">
                    <el-form-item label="医疗收费项目" prop="医疗收费项目">
                      <medical-charge-category v-model="addNormalForm.医疗收费项目" />
                    </el-form-item>
                  </el-col>
                </el-row>
              </div>
            </div>
            <div class="box">
              <div class="box-header">
                <span class="box-title">自付比例信息</span>
              </div>
              <div class="box-body">
                <el-row :gutter="10">
                  <el-col :span="8">
                    <el-form-item label="医保区划" prop="医保区划">
                      <insurance-area-division v-model="addNormalForm.医保区划" />
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">
                    <el-form-item label="自付比例人员" prop="自付比例人员">
                      <self-pay-proportion-people v-model="addNormalForm.自付比例人员" />
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">
                    <el-form-item label="自付比例类别" prop="自付比例类别">
                      <self-pay-proportion-type v-model="addNormalForm.自付比例类别" />
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">
                    <el-form-item label="自付比例" prop="自付比例">
                      <el-input v-model="addNormalForm.自付比例" placeholder="请输入" />
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">
                    <el-form-item label="段内自付比例" prop="段内自付比例">
                      <el-input v-model="addNormalForm.段内自付比例" placeholder="请输入" />
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">
                    <el-form-item label="起始日期" prop="起始日期">
                      <el-date-picker v-model="addNormalForm.起始日期" type="daterange" style="width: 100%;" start-placeholder="选择日期" end-placeholder="选择日期" />
                    </el-form-item>
                  </el-col>
                </el-row>
              </div>
            </div>
            <div class="box">
              <div class="box-header">
                <span class="box-title">历史维护记录</span>
              </div>
              <div class="box-body">
                <el-table :data="historyData" border style="width: 100%">
                  <el-table-column type="expand">
                    <template slot-scope="props">
                      <el-form label-position="left" inline class="demo-table-expand">
                        <el-form-item label="医保区划">
                          <span>{{ props.row.医保区划 }}</span>
                        </el-form-item>
                        <el-form-item label="开始时间">
                          <span>{{ props.row.开始时间 }}</span>
                        </el-form-item>
                        <el-form-item label="结束时间">
                          <span>{{ props.row.结束时间 }}</span>
                        </el-form-item>
                        <el-form-item label="段内自付比例">
                          <span>{{ props.row.段内自付比例 }}</span>
                        </el-form-item>
                      </el-form>
                    </template>
                  </el-table-column>
                  <el-table-column prop="医保目录编码" align="center" label="医保目录编码" />
                  <el-table-column prop="医保目录名称" align="center" label="医保目录名称" />
                  <el-table-column prop="医保目录自付比例人员类别" align="center" label="医保目录自付比例人员类别" width="240" />
                  <el-table-column prop="目录自付比例类别" align="center" label="目录自付比例类别" />
                  <el-table-column prop="自付比例" align="center" label="自付比例" />
                </el-table>
                <Pagination />
              </div>
            </div>
          </el-form>
        </el-tab-pane>
        <el-tab-pane label="浮动自付比例" name="second">
          <el-form ref="addForm" :model="addFloatForm" label-width="105px">
            <div class="box">
              <div class="box-body">
                <el-row :gutter="10">
                  <el-col :span="8">
                    <el-form-item label="医保目录" prop="医保目录">
                      <insurance-directory v-model="addFloatForm.医保目录" />
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">
                    <el-form-item label="医疗收费项目" prop="医疗收费项目">
                      <medical-charge-category v-model="addFloatForm.医疗收费项目" />
                    </el-form-item>
                  </el-col>
                </el-row>
              </div>
            </div>
            <div class="box">
              <div class="box-header">
                <span class="box-title">自付比例信息</span>
              </div>
              <div class="box-body">
                <el-row :gutter="10">
                  <el-col :span="8">
                    <el-form-item label="医保区划" prop="医保区划">
                      <insurance-area-division v-model="addFloatForm.医保区划" />
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">
                    <el-form-item label="自付比例人员" prop="自付比例人员">
                      <self-pay-proportion-people v-model="addFloatForm.自付比例人员" />
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">
                    <el-form-item label="自付比例类别" prop="自付比例类别">
                      <self-pay-proportion-type v-model="addFloatForm.自付比例类别" />
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">
                    <el-form-item label="比例维护方式" prop="比例维护方式">
                      <el-input v-model="addFloatForm.比例维护方式" disabled placeholder="请输入" />
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">
                    <el-form-item label="起始日期" prop="起始日期">
                      <el-date-picker v-model="addFloatForm.起始日期" type="daterange" style="width: 100%;" start-placeholder="选择日期" end-placeholder="选择日期" />
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">
                    <el-form-item label="浮动比例" prop="浮动比例">
                      <el-input v-model="addFloatForm.浮动比例" placeholder="请输入" />
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">
                    <el-form-item label="金额上限" prop="金额上限">
                      <el-input v-model="addFloatForm.金额上限" placeholder="请输入" />
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">
                    <el-form-item label="金额下限" prop="金额下限">
                      <el-input v-model="addFloatForm.金额下限" placeholder="请输入" />
                    </el-form-item>
                  </el-col>
                </el-row>
              </div>
            </div>
            <div class="box">
              <div class="box-header handle">
                <span class="box-title">本次维护记录</span>
                <div class="box-tools">
                  <el-button type="primary">新增</el-button>
                </div>
              </div>
              <div class="box-body">
                <el-table :data="historyData" border style="width: 100%">
                  <el-table-column type="expand">
                    <template slot-scope="props">
                      <el-form label-position="left" inline class="demo-table-expand">
                        <el-form-item label="医保区划">
                          <span>{{ props.row.医保区划 }}</span>
                        </el-form-item>
                        <el-form-item label="开始时间">
                          <span>{{ props.row.开始时间 }}</span>
                        </el-form-item>
                        <el-form-item label="结束时间">
                          <span>{{ props.row.结束时间 }}</span>
                        </el-form-item>
                        <el-form-item label="段内自付比例">
                          <span>{{ props.row.段内自付比例 }}</span>
                        </el-form-item>
                      </el-form>
                    </template>
                  </el-table-column>
                  <el-table-column prop="医保目录编码" align="center" label="医保目录编码" />
                  <el-table-column prop="医保目录名称" align="center" label="医保目录名称" />
                  <el-table-column prop="医保目录自付比例人员类别" align="center" label="医保目录自付比例人员类别" width="240" />
                  <el-table-column prop="目录自付比例类别" align="center" label="目录自付比例类别" />
                  <el-table-column prop="自付比例" align="center" label="自付比例" />
                </el-table>
                <Pagination />
              </div>
            </div>
          </el-form>
        </el-tab-pane>
      </el-tabs>
    </div>
    <span slot="footer" class="dialog-footer">
      <el-button @click="cancelAdd('addForm')">取消</el-button>
      <el-button type="primary" @click="addSubmit('addForm')">保存</el-button>
    </span>
  </form-dialog>
</template>

<script>
import InsuranceDirectory from '@/components/Select/InsuranceDirectory'
import MedicalChargeCategory from '@/components/Select/MedicalChargeCategory'
import InsuranceAreaDivision from '@/components/Select/InsuranceAreaDivision'
import SelfPayProportionPeople from '@/components/Select/SelfPayProportionPeople'
import SelfPayProportionType from '@/components/Select/SelfPayProportionType'
export default {
  name: 'PercentInfoAdd',
  components: {
    InsuranceDirectory,
    MedicalChargeCategory,
    InsuranceAreaDivision,
    SelfPayProportionPeople,
    SelfPayProportionType
  },
  mixins: [],
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      addForm: {},
      addNormalForm: {},
      addFloatForm: {
        比例维护方式: '浮动比例'
      },
      historyData: [
        { '目录自付比例类别': '目录自付比例类别', '自付比例': '自付比例', '医保区划': '医保区划', '开始时间': '2020-02-02', '结束时间': '2020-02-02', '段内自付比例': '2', '医保目录编码': 'AXX0021CB828', '医保目录名称': '大力', '医保目录自付比例人员类别': '医保目录自付比例人员类别' }
      ],
      activeName: 'first'
    }
  },
  computed: {},
  watch: {},
  created() {
  },
  mounted() {
  },
  methods: {
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
      this.$emit('save')
    }
  }
}
</script>

<style scoped lang="scss"></style>
