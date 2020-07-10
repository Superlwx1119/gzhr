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
        { label: '考核年度', prop: 'a' },
        { label: '考评等级', prop: 'b' }

      ],
      tableData: [1, 2, 3, 4, 5, 6, 7, 8].map(item => {
        return {
          a: '2018', b: '合格'
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
