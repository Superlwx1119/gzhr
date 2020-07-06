<template>
  <div class="businessCheckControlParamMaintenance item4">
    <section class="layer layer-query">
      <div class="box">
        <ConditionHeader />
        <div class="box-body query">
          <el-form ref="searchForm" :model="searchForm" label-width="105px">
            <el-row :gutter="10">
              <el-col :md="12" :lg="8" :xl="6">
                <el-form-item label="参数代码" prop="参数代码">
                  <el-input v-model="searchForm.参数代码" placeholder="请输入" />
                </el-form-item>
              </el-col>
              <el-col :md="12" :lg="8" :xl="6">
                <el-form-item label="参数状态" prop="参数状态">
                  <param-status v-model="searchForm.参数状态" />
                </el-form-item>
              </el-col>
              <el-col :md="12" :lg="8" :xl="6">
                <el-form-item label="参数描述" prop="参数描述">
                  <el-input v-model="searchForm.参数描述" placeholder="请输入" />
                </el-form-item>
              </el-col>
              <el-col :md="12" :lg="8" :xl="6">
                <el-form-item label="起始时间" prop="起始时间">
                  <el-date-picker v-model="searchForm.起始时间" style="width: 100%;" type="daterange" start-placeholder="选择时间" end-placeholder="选择时间" />
                </el-form-item>
              </el-col>
              <el-col :md="24" :lg="16" :xl="24">
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
          <span class="box-title">业务检查控制参数</span>
          <div class="box-tools">
            <el-button type="primary" @click="addVisible = true">新增</el-button>
          </div>
        </div>
        <div class="box-body result">
          <expand-list :is-index="true" :is-selection="true" :is-border="true" :columns="tableColumns" :operates="tableOperates" :data="tableData" />
          <Pagination />
        </div>
      </div>
    </section>
    <Add :show.sync="addVisible" />
    <Edit :show.sync="editVisible" />
  </div>
</template>

<script>
import ParamStatus from '@/components/Select/policy-param-manage/ParamStatus'
import Add from './add'
import Edit from './edit'
export default {
  name: '',
  components: {
    ParamStatus,
    Add,
    Edit
  },
  mixins: [],
  props: {},
  data() {
    return {
      addVisible: false,
      editVisible: false,
      searchForm: {},
      tableColumns: [
        { label: '医保区划', prop: '医保区划', align: 'center', display_colums: true },
        { label: '险种', prop: '险种', align: 'center', display_colums: true },
        { label: '医疗类别', prop: '医疗类别', align: 'center', display_colums: true },
        { label: '人员类别', prop: '人员类别', align: 'center', display_colums: true },
        { label: '参数编码', prop: '参数编码', align: 'center', display_colums: true },
        { label: '参数值', prop: '参数值', align: 'center', display_colums: true },
        { label: '参数描述', prop: '参数描述', align: 'center' },
        { label: '开始日期', prop: '开始日期', align: 'center' },
        { label: '结束日期', prop: '结束日期', align: 'center' },
        { label: '备注', prop: '备注', align: 'center' },
        { label: '最后操作人', prop: '最后操作人', align: 'center' },
        { label: '最后操作时间', prop: '最后操作时间', align: 'center' }
      ],
      tableOperates: {
        width: '120px',
        list: [
          { show: true, type: 'text', label: '修改', method: (key, row, index) => { this.editVisible = true } },
          { show: true, type: 'text', label: '删除', class: 'delete', method: (key, row, index) => {} }
        ]
      },
      tableData: [1, 2, 3, 4, 5, 6, 7].map(item => {
        return { '医保区划': '医保区划', '险种': '险种', '医疗类别': '医疗类别', '人员类别': '人员类别', '参数编码': '参数编码', '参数值': '参数值', '参数描述': '参数描述', '开始日期': '开始日期', '结束日期': '结束日期', '备注': '备注', '最后操作人': '最后操作人', '最后操作时间': '最后操作时间' }
      })
    }
  },
  computed: {},
  watch: {},
  created() {
  },
  mounted() {
  },
  methods: {
    reset(formName) {
      this.$refs[formName].resetFields()
    },
    search(formName) {}
  }
}
</script>

<style scoped lang="scss"></style>
