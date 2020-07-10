<template>
  <!-- 培训进修 -->
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
        { label: '培训、进修班名称', prop: 'a', width: '150' },
        { label: '培训、进修类别', prop: 'b', width: '150' },
        { label: '起始日期', prop: 'c', width: '120' },
        { label: '结束日期', prop: 'd', width: '120' },
        { label: '总学习(时)', prop: 'e', width: '120' },
        { label: '培训、进修结果', prop: 'f', width: '150' },
        { label: '主办机构类型', prop: 'g' },
        { label: '主办单位', prop: 'h' },
        { label: '离岗状态', prop: 'i' },
        { label: '出国境标识', prop: 'j', width: '120' },
        { label: '操作', type: 'operation', fixed: 'right', width: '120px' }

      ],
      tableData: [1, 2, 3, 4, 5, 6, 7, 8].map(item => {
        return {
          a: '培训、进修班名称', b: '培训、进修类别', c: '起始日期', d: '结束日期' + item, e: '总学习(时)', f: '培训、进修结果', g: '主办机构类型', h: '主办单位', i: '离岗状态', j: '出国境标识'
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
