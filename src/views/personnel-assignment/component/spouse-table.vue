<template>
  <div class="HiringApply">
    <!-- 配偶信息表格 -->
    <div class="box-header handle">
      <span class="box-title">配偶信息</span>
    </div>
    <table class="table-data total-info">
      <tbody>
        <tr>
          <td width="17%">姓名</td>
          <td width="17%">姓名</td>
          <td width="17%">学历</td>
          <td width="17%">学历</td>
          <td width="17%">学位</td>
          <td width="17%">学位</td>
        </tr>
        <tr>
          <td>政治面貌</td>
          <td>政治面貌</td>
          <td>工作单位</td>
          <td>工作单位</td>
          <td>职务</td>
          <td>职务</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  components: {},
  mixins: [],
  props: {},
  data() {
    return {}
  },
  computed: {},
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
