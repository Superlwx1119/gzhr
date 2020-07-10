<template>
  <!-- 家庭关系 -->
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
        { label: '签订状态', prop: 'a' },
        { label: '聘期起始时间', prop: 'b' },
        { label: '聘期结束时间', prop: 'c' },
        { label: '聘期考核结果', prop: 'd' },
        { label: '是否试用期', prop: 'e' }

      ],
      tableData: [1, 2, 3, 4, 5, 6, 7, 8].map(item => {
        return {
          a: '签订固定期限聘用合同', b: '2015-10-10', c: '2018-02-08', d: '合格', e: '否'
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
