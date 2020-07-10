<template>
  <!-- 家庭关系 -->
  <div class="box" style="height: auto">
    <div class="box-body" style="padding-right: 0;">
      <my-table-view v-loading="loading" :border="true" :max-cloumns="20" :columns="columns" :data="tableData" />
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
        { label: '称谓', prop: 'a' },
        { label: '姓名', prop: 'b' },
        { label: '出生日期', prop: 'c' },
        { label: '政治面貌', prop: 'd' },
        { label: '工作单位及职务', prop: 'e' }

      ],
      tableData: [1, 2, 3, 4, 5, 6, 7, 8].map(item => {
        return {
          a: '称谓', b: '姓名', c: '1968-02-08', d: '中共党员', e: '工作单位及职务'
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
