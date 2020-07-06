<template>
  <form-dialog title="自付比例修改" width="1100px" new-calss="big" :is-show="show" @update:isShow="editIsShow">
    <el-form ref="editForm" :model="editForm" label-width="105px">
      <el-row :gutter="10">
        <el-col :span="8">
          <el-form-item label="医保目录" prop="医保目录">
            <insurance-directory v-model="editForm.医保目录" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="医疗收费项目" prop="医疗收费项目">
            <medical-charge-category v-model="editForm.医疗收费项目" />
          </el-form-item>
        </el-col>
      </el-row>
      <div class="box">
        <div class="box-header">
          <span class="box-title">自付比例信息</span>
        </div>
        <div class="box-body">
          <el-row :gutter="10">
            <el-col :span="8">
              <el-form-item label="医保区划" prop="医保区划">
                <insurance-area-division v-model="editForm.医保区划" />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="自付比例人员" prop="自付比例人员">
                <self-pay-proportion-people v-model="editForm.自付比例人员" />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="自付比例类别" prop="自付比例类别">
                <self-pay-proportion-type v-model="editForm.自付比例类别" />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="自付比例" prop="自付比例">
                <el-input v-model="editForm.自付比例" placeholder="请输入" />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="段内自付比例" prop="段内自付比例">
                <el-input v-model="editForm.段内自付比例" placeholder="请输入" />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="起始日期" prop="起始日期">
                <el-date-picker v-model="editForm.起始日期" type="daterange" style="width: 100%;" start-placeholder="选择日期" end-placeholder="选择日期" />
              </el-form-item>
            </el-col>
          </el-row>
        </div>
      </div>
    </el-form>
    <div class="box">
      <div class="box-header">
        <span class="box-title">历史维护记录</span>
      </div>
      <div class="box-body">
        <el-table :data="historyData" style="width: 100%">
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
          <el-table-column prop="date" label="医保目录编码" />
          <el-table-column prop="name" label="医保目录名称" />
          <el-table-column prop="address" label="医保目录自付比例人员类别" />
          <el-table-column prop="address" label="目录自付比例类别" />
          <el-table-column prop="address" label="自付比例" />
        </el-table>
      </div>
    </div>
    <span slot="footer" class="dialog-footer">
      <el-button @click="cancelEdit('editForm')">取消</el-button>
      <el-button type="primary" @click="editSubmit('editForm')">保存</el-button>
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
  name: 'PercentInfoEdit',
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
    },
    form: {
      type: Object,
      default: () => { return {} }
    }
  },
  data() {
    return {
      editForm: this.form,
      historyData: []
    }
  },
  computed: {
  },
  watch: {
    form: {
      handler: function(newValue) {
        this.editForm = newValue
      },
      deep: true
    }
  },
  created() {
  },
  mounted() {
  },
  methods: {
    editIsShow(v) {
      this.$emit('update:show', v)
    },
    //  取消新增弹窗
    cancelEdit(formName) {
      this.$emit('update:show', false)
    },
    //  提交新增弹窗
    editSubmit(formName) {
      this.$emit('update:show', false)
      this.$emit('save')
    }
  }
}
</script>

<style scoped lang="scss"></style>
