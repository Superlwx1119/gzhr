<template>
  <!--  限价信息-->
  <div class="box">
    <div class="box-header handle">
      <div class="box-tools">
        <el-button type="primary" @click="templateDownload">模板下载</el-button>
        <el-button type="primary" @click="importFile">导入</el-button>
        <el-button type="primary" @click="addVisible = true">新增</el-button>
        <el-button type="danger" @click="deleteAll">批量删除</el-button>
      </div>
    </div>
    <div class="box-body result">
      <List height="100%" :is-border="true" :is-selection="true" :is-index="true" :columns="tableColumns" :operates="tableOperates" :data="tableData" />
      <Pagination />
    </div>
    <Add :show.sync="addVisible" @save="addSave" />
    <Edit :show.sync="editVisible" @save="editSave" />
  </div>
</template>

<script>
import Add from './add'
import Edit from './edit'
export default {
  name: 'PercentInfo',
  components: {
    Add,
    Edit
  },
  mixins: [],
  props: {
    list: {
      type: Array,
      default: () => { return [] }
    }
  },
  data() {
    return {
      tableColumns: [
        { label: '审核状态', prop: 'status', align: 'center' },
        { label: '医保目录编码', prop: 'code', align: 'center' },
        { label: '医保目录限价类型', prop: 'type', align: 'center', width: '140px' },
        { label: '医保目录超限出理方式', prop: 'way', align: 'center', width: '220px' },
        { label: '医保目录定价上限金额', prop: 'price', align: 'center', width: '220px' },
        { label: '开始时间', prop: 'beginDate', align: 'center' },
        { label: '结束时间', prop: 'endDate', align: 'center' },
        { label: '医保区划', prop: 'address', align: 'center' },
        { label: '人员类别', prop: 'percent', align: 'center' },
        { label: '医院级别', prop: 'level', align: 'center' }
      ],
      tableOperates: {
        width: '120px',
        fixed: 'right',
        list: [
          { show: true, type: 'text', label: '修改', method: (key, row, index) => {
            this.editVisible = true
          } },
          { show: true, type: 'text', label: '删除', class: 'delete', method: (key, row, index) => {
            this.$msgConfirm('确定删除？').then(res => {
              this.$msgSuccess('删除成功')
            }).catch(err => {
              this.$msgInfo(err)
            })
          } }
        ]
      },
      addVisible: false,
      editVisible: false
    }
  },
  computed: {
    tableData: function() {
      return this.list
    }
  },
  watch: {},
  created() {
  },
  mounted() {
  },
  methods: {
    templateDownload() {
      this.$msgSuccess('操作成功')
    },
    importFile() {
      this.$msgSuccess('操作成功')
    },
    deleteAll() {
      this.$msgConfirm('是否删除选中项？').then(res => {
        this.$msgSuccess('删除成功')
      }).catch(err => {
        this.$msgInfo(err)
      })
    },
    addSave() {
      this.$emit('add-save')
    },
    editSave() {
      this.$emit('edit-save')
    }
  }
}
</script>

<style scoped lang="scss"></style>
