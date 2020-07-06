<template>
  <div class="flexibleEmploymentDocuments item3">
    <section class="layer layer-query">
      <div class="box">
        <ConditionHeader />
        <div class="box-body query">
          <el-form ref="searchForm" :rules="rules" :model="searchForm" label-width="105px">
            <el-row :gutter="10">
              <el-col :md="12" :lg="8" :xl="6">
                <el-form-item label="人员信息" prop="人员信息">
                  <personal-info v-model="searchForm.人员信息" />
                </el-form-item>
              </el-col>
              <el-col :md="12" :lg="8" :xl="6">
                <el-form-item label="单据状态" prop="单据状态">
                  <documents-status v-model="searchForm.单据状态" />
                </el-form-item>
              </el-col>
              <el-col :md="12" :lg="8" :xl="6">
                <el-form-item label="费款所属期" prop="费款所属期">
                  <el-date-picker v-model="searchForm.费款所属期" style="width: 100%;" type="date" placeholder="选择时间" />
                </el-form-item>
              </el-col>
              <el-col :md="12" :lg="16" :xl="6" style="text-align: right">
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
          <span class="box-title">征缴通知单</span>
          <div class="box-tools" />
        </div>
        <div class="box-body result">
          <expand-list :is-index="true" :is-border="true" :columns="tableColumns" :operates="tableOperates" :data="tableData" />
          <Pagination />
        </div>
      </div>
    </section>
    <print :show.sync="printVisible" />
  </div>
</template>

<script>
import PersonalInfo from '@/components/Select/fund-insurance-manage/PersonalInfo'
import DocumentsStatus from '@/components/Select/fund-insurance-manage/DocumentsStatus'
import Print from './print'
export default {
  name: 'FlexibleEmploymentDocuments',
  components: {
    PersonalInfo,
    DocumentsStatus,
    Print
  },
  mixins: [],
  props: {},
  data() {
    return {
      printVisible: false,
      searchForm: {},
      rules: {
        '单据状态': { required: true, message: '请选择单据状态', trigger: 'change' },
        '费款所属期': { required: true, message: '请选择费款所属期', trigger: 'change' }
      },
      tableColumns: [
        { label: '单据号', prop: '单据号', align: 'center', display_colums: true },
        { label: '单据状态', prop: '单据状态', align: 'center', display_colums: true },
        { label: '姓名', prop: '姓名', align: 'center', display_colums: true },
        { label: '证件号码', prop: '证件号码', align: 'center', display_colums: true },
        { label: '费款所属期', prop: '费款所属期', align: 'center' },
        { label: '打印次数', prop: '打印次数', align: 'center', display_colums: true },
        { label: '经办人', prop: '经办人', align: 'center' },
        { label: '经办时间', prop: '经办时间', align: 'center' },
        { label: '撤销人', prop: '撤销人', align: 'center' },
        { label: '撤销时间', prop: '撤销时间', align: 'center' }
      ],
      tableOperates: {
        list: [
          { show: true, label: '生成', type: 'text', method: () => {} },
          { show: true, label: '打印', type: 'text', method: () => { this.printVisible = true } },
          { show: true, label: '撤销', class: 'delete', type: 'text', method: () => {} }
        ]
      },
      tableData: [
      ]
    }
  },
  computed: {},
  watch: {},
  created() {
  },
  mounted() {
  },
  methods: {
    search(formName) {
      const tableData = [
        { '单据号': '单据号', '单据状态': '未生成', '姓名': '姓名', '证件号码': '证件号码', '费款所属期': '费款所属期', '打印次数': '打印次数', '经办人': '经办人', '经办时间': '经办时间', '撤销人': '撤销人', '撤销时间': '撤销时间' },
        { '单据号': '单据号', '单据状态': '已生成', '姓名': '姓名', '证件号码': '证件号码', '费款所属期': '费款所属期', '打印次数': '打印次数', '经办人': '经办人', '经办时间': '经办时间', '撤销人': '撤销人', '撤销时间': '撤销时间' },
        { '单据号': '单据号', '单据状态': '已撤销', '姓名': '姓名', '证件号码': '证件号码', '费款所属期': '费款所属期', '打印次数': '打印次数', '经办人': '经办人', '经办时间': '经办时间', '撤销人': '撤销人', '撤销时间': '撤销时间' }
      ]
      this.tableData = tableData.map(item => {
        if (item.单据状态 === '未生成') {
          this.$set(item, 'operateBtnList', [0])
        } else if (item.单据状态 === '已生成') {
          this.$set(item, 'operateBtnList', [1, 2])
        } else if (item.单据状态 === '已撤销') {
          this.$set(item, 'operateBtnList', [1])
        }
        return item
      })
    }
  }
}
</script>

<style scoped lang="scss"></style>
