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
        { name: '广州市越秀区天河路1号708-717自编A12-1(仅限办公用途)', code: 'XXX', nameCode: '光大银行' }
      ]
    }
  }
}
</script>

<style scoped lang="scss">

</style>
