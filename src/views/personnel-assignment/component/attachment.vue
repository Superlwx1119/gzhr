<template>
  <div class="HiringApply">
    <!-- 业务附件 -->
    <div class="box-header handle">
      <span class="box-title">业务附件</span>
    </div>
    <my-table-view v-loading="loading" :border="true" :max-cloumns="20" :columns="columns" :data="tableData">
      <template slot="operation">
        <el-button type="text">上传</el-button>
        <el-button type="text">下载登记表</el-button>
        <el-button type="text" class="delete">删除</el-button>
      </template>
    </my-table-view>
  </div>
</template>

<script>
export default {
  components: {},
  mixins: [],
  props: {},
  data() {
    return {
      loading: false,
      columns: [
        // { type: 'selection' },
        { type: 'index', label: '序号' },
        { label: '附件', prop: 'aab069' },
        { label: '材料名称', prop: 'c' },
        { label: '材料说明', prop: 'aab019' },
        { label: '是否必需', prop: 'rb0195' },
        { label: '操作', type: 'operation', fixed: 'right', width: '220px' }
      ],
      tableData: [{ aab019: '张三', aab022: '12312312313' }]
    }
  },
  computed: {

  },
  watch: {},
  created() {
  },
  mounted() {
  },
  methods: {}
}
</script>

<style scoped lang="scss">
  .HiringApply{
    >div {
      height: 100%;
    }
  }
</style>
