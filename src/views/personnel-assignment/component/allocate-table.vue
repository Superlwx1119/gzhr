<template>
  <div class="HiringApply">
    <!-- 聘用信息表格 -->
    <div class="box-header handle">
      <span class="box-title">聘用信息</span>
    </div>
    <table class="table-data total-info">
      <tbody>
        <tr>
          <td width="17%">上一单位</td>
          <td width="17%">上一单位</td>
          <td width="17%">职务</td>
          <td width="17%">职务</td>
          <td width="17%">单位性质</td>
          <td width="17%">单位性质</td>
        </tr>
        <tr>
          <td>聘用单位</td>
          <td>聘用单位</td>
          <td>拟任职务</td>
          <td>拟任职务</td>
          <td>单位性质</td>
          <td>单位性质</td>
        </tr>
        <tr>
          <td>聘用单位编制数</td>
          <td>聘用单位编制数</td>
          <td>实有人员数</td>
          <td>实有人员数</td>
          <td>空编数</td>
          <td>空编数</td>
        </tr>
        <tr>
          <td>空岗数</td>
          <td colspan="5">空岗数</td>
        </tr>
        <tr>
          <td rowspan="3">简历</td>
          <td colspan="5" rowspan="3">简历</td>
        </tr>
        <tr />
        <tr />
        <tr>
          <td rowspan="3">备注</td>
          <td colspan="5" rowspan="3">备注</td>
        </tr>
        <tr />
        <tr />
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
