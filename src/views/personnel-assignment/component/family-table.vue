<template>
  <div class="HiringApply">
    <!-- 其他家庭成员状况表格 -->
    <div class="box-header handle">
      <span class="box-title">其他家庭成员状况</span>
    </div>
    <table class="table-data total-info">
      <tbody>
        <tr>
          <td width="17%">称谓</td>
          <td width="17%">称谓</td>
          <td width="17%">姓名</td>
          <td width="17%">姓名</td>
          <td width="17%">政治面貌</td>
          <td width="17%">政治面貌</td>
        </tr>
        <tr>
          <td>工作单位</td>
          <td>工作单位</td>
          <td>职务</td>
          <td colspan="3">职务</td>
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
