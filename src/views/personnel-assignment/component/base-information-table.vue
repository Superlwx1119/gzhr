<template>
  <div class="HiringApply">
    <!-- 基本信息表格 -->
    <div class="box-header handle">
      <span class="box-title">基本信息表格</span>
    </div>
    <table class="table-data total-info">
      <tbody>
        <tr>
          <td rowspan="7" width="20%">照片</td>
        </tr>
        <tr>
          <td width="20%">身份证号</td>
          <td width="20%">身份证号</td>
          <td width="20%">姓名</td>
          <td width="20%">姓名</td>
        </tr>
        <tr>
          <td>性别</td>
          <td>性别</td>
          <td>出生年月</td>
          <td>出生年月</td>
        </tr>
        <tr>
          <td>籍贯</td>
          <td>籍贯</td>
          <td>出生地</td>
          <td>出生地</td>
        </tr>
        <tr>
          <td>户口所在地</td>
          <td>户口所在地</td>
          <td>民族</td>
          <td>民族</td>
        </tr>
        <tr>
          <td>参加工作时间</td>
          <td>参加工作时间</td>
          <td>政治面貌</td>
          <td>政治面貌</td>
        </tr>
        <tr>
          <td>专业技术职务</td>
          <td>专业技术职务</td>
          <td>健康状况</td>
          <td>健康状况</td>
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
