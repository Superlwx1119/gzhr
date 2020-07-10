<template>
  <!-- 奖励处分 -->
  <div class="box" style="height: auto">
    <div class="box-body" style="padding-right: 0;">
      <my-table-view v-loading="loading" :border="true" :max-cloumns="20" :columns="columns" :data="tableData">
        <template slot="operation">
          <el-button type="text">详情</el-button>
        </template>
      </my-table-view>
    </div>
  </div>
</template>
<script>
export default {
  components: {
  },
  props: {

  },
  data() {
    return {
      columns: [
        { type: 'index', label: '序号' },
        { label: '类别', prop: 'a' },
        { label: '名称', prop: 'b' },
        { label: '原因', prop: 'c' },
        { label: '批准机关', prop: 'd', width: '120' },
        { label: '批准日期', prop: 'e', width: '120' },
        { label: '撤销日期', prop: 'f', width: '150' },
        { label: '操作', type: 'operation', fixed: 'right', width: '120px' }

      ],
      tableData: [1, 2, 3, 4, 5, 6, 7, 8].map(item => {
        return {
          a: '奖励', b: '记过', c: '记过', d: '主管部门', e: '2020-02-03', f: '2020-02-08'
        }
      })
    }
  },
  watch: {

  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>

</style>
