<template>
  <section class="layer" :style="{height:`calc(100% - 90px)`}">
    <div class="box">
      <div class="box-header handle">
        <span class="box-title">已维护疾病限额列表</span>
        <div class="box-tools">
          <el-button type="primary" @click="addVisible = true">新增</el-button>
          <el-button type="primary">保存</el-button>
          <el-button type="danger" @click="deleteAll">批量删除</el-button>
        </div>
      </div>
      <div class="box-body">
        <ExpandList :is-border="true" :is-selection="true" :is-index="true" :operates="tableOperates" :columns="tableColumns" :data="tableData" />
        <Pagination />
      </div>
    </div>
    <add-limit :show.sync="addVisible" />
    <edit-limit :show.sync="editVisible" :form="editForm" />
  </section>
</template>

<script>
import AddLimit from './dialog/addLimit'
import EditLimit from './dialog/editLimit'
export default {
  name: 'Maintained',
  components: {
    AddLimit,
    EditLimit
  },
  mixins: [],
  props: {},
  data() {
    return {
      addVisible: false,
      editVisible: false,
      tableColumns: [
        { label: '限额', prop: '限额', align: 'center', display_colums: true },
        { label: '限额方式', prop: '限额方式', align: 'center', display_colums: true },
        { label: '险种类型', prop: '险种类型', align: 'center', display_colums: true },
        { label: '人员类别', prop: '人员类别', align: 'center', display_colums: true },
        { label: '医院级别', prop: '医院级别', align: 'center', display_colums: true },
        { label: '医院类别', prop: '医院类别', align: 'center', display_colums: true },
        { label: '医院等级', prop: '医院等级', align: 'center' },
        { label: '病种分型', prop: '病种分型', align: 'center' },
        { label: '严重程度', prop: '严重程度', align: 'center' },
        { label: '开始时间', prop: '开始时间', align: 'center' },
        { label: '结束时间', prop: '结束时间', align: 'center' }
      ],
      tableOperates: {
        width: '120px',
        list: [
          { show: true, type: 'text', label: '修改', method: () => {
            this.editVisible = true
          } },
          { show: true, type: 'text', label: '删除', class: 'delete', method: () => {
            this.$msgConfirm('是否删除选中项？').then(res => {
              this.$msgSuccess('删除成功')
            }).catch(err => {
              this.$msgInfo(err)
            })
          } }
        ]
      },
      tableData: [
        { '限额': '限额限额', '开始时间': '开始时间', '结束时间': '结束时间', '限额方式': '限额方式', '险种类型': '险种类型', '人员类别': '人员类别', '医院级别': '医院级别', '医院类别': '医院类别', '医院等级': '医院等级', '病种分型': '病种分型', '严重程度': '严重程度' }
      ],
      editForm: {}
    }
  },
  computed: {},
  watch: {},
  created() {
  },
  mounted() {
  },
  methods: {
    deleteAll() {
      this.$msgConfirm('是否删除选中项？').then(res => {
        this.$msgSuccess('删除成功')
      }).catch(err => {
        this.$msgInfo(err)
      })
    }
  }
}
</script>

<style scoped lang="scss"></style>
