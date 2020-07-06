<!-- 参保信息详情 -->
<template>
  <section style="height:100%">
    <my-table-view
      v-loading="loading"
      :data="tableData"
      :columns="columns"
    />
    <Pagination />
  </section>
</template>

<script>
import Columns from './listCloumns'
export default {
  components: {
  },
  props: {
  },
  data() {
    return {
      loading: false,
      columns: Columns,
      tableData: [
        { name: '2020200', code: 'xxx', nameCode: 'xxx' },
        { name: '2020200', code: 'xxx', nameCode: 'xxx' }
      ]
    }
  }
}
</script>

<style scoped lang="scss">

</style>
