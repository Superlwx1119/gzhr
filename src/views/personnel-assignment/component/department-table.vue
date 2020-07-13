<template>
  <div class="HiringApply">
    <!-- 相关部门意见表格 -->
    <div class="box-header handle">
      <span class="box-title">相关部门意见</span>
    </div>
    <table class="table-data total-info">
      <tbody>
        <tr>
          <td width="17%">调出单位</td>
          <td colspan="5">调出单位</td>
          <td width="17%">意见</td>
          <td colspan="5">意见</td>
        </tr>
        <tr>
          <td width="17%">调入单位</td>
          <td colspan="5">调入单位</td>
          <td width="17%">意见</td>
          <td colspan="5">意见</td>
        </tr>
        <tr>
          <td width="17%">调出单位主管部门</td>
          <td colspan="5">调出单位主管部门</td>
          <td width="17%">意见</td>
          <td colspan="5">意见</td>
        </tr>
        <tr>
          <td width="17%">调入单位主管部门</td>
          <td colspan="5">调入单位主管部门</td>
          <td width="17%">意见</td>
          <td colspan="5">意见</td>
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
