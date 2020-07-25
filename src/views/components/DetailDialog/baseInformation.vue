<template>
  <div class="box">
    <div class="box-body">
      <table class="table-data total-info">
        <tbody>
          <tr>
            <td style="width:17%">单位名称</td>
            <td style="width:17%">{{ detailInfo.aab069 }}</td>
            <td style="width:17%">单位类型</td>
            <td style="width:17%">{{ detailInfo.aab019 }}</td>
            <td style="width:17%">单位隶属关系</td>
            <td style="width:17%">{{ detailInfo.aab021 }}</td>
          </tr>
          <tr>
            <td>单位级别</td>
            <td>{{ detailInfo.rb0150 }}</td>
            <td>行政主管部门</td>
            <td>{{ detailInfo.aab023 }}</td>
            <td>所属系统</td>
            <td>{{ detailInfo.rb0174 }}</td>
          </tr>
          <tr>
            <td>所属行业</td>
            <td>{{ detailInfo.aab022 }}</td>
            <td>行政区划</td>
            <td>{{ detailInfo.aab226 }}</td>
            <td>批准编制单位</td>
            <td>{{ detailInfo.rb0425 }}</td>
          </tr>
          <tr>
            <td>编制总数</td>
            <td>{{ detailInfo.rb0705 }}</td>
            <td>正职领导职数</td>
            <td>{{ detailInfo.rb0741 }}</td>
            <td>副职领导职数</td>
            <td>{{ detailInfo.rb0742 }}</td>
          </tr>
          <tr>
            <td>单位领导职数</td>
            <td>{{ detailInfo.rb0740 }}</td>
            <td>正职非领导职数</td>
            <td>{{ detailInfo.rb0746 }}</td>
            <td>副职非领导职数</td>
            <td>{{ detailInfo.rb0747 }}</td>
          </tr>
          <tr>
            <td>单位非领导职数</td>
            <td>{{ detailInfo.rb0745 }}</td>
            <td>批准成立文号</td>
            <td>{{ detailInfo.rb0808 }}</td>
            <td>批准成立日期</td>
            <td>{{ detailInfo.rb0806 }}</td>
          </tr>
          <tr>
            <td>经办人姓名</td>
            <td>{{ detailInfo.rb0214 }}</td>
            <td>经办人员电话</td>
            <td>{{ detailInfo.rb0216 }}</td>
            <td>审核人员姓名</td>
            <td>{{ detailInfo.rb0217 }}</td>
          </tr>
          <tr>
            <td>审核人员电话</td>
            <td colspan="7">{{ detailInfo.rb0219 }}</td>
          </tr>
          <!-- <tr>
            <td>单位地址</td>
            <td colspan="7">单位地址	</td>
          </tr>
          <tr rowspan="3">
            <td>主要工作职责</td>
            <td colspan="7">主要工作职责</td>
          </tr> -->
          <tr rowspan="3">
            <td>备注</td>
            <td colspan="7">{{ detailInfo.aae013 }}</td>
          </tr>
        </tbody>
      </table>

    </div>
  </div>
</template>

<script>
export default {
  props: {
    detailInfo: {
      type: Object,
      default: function() { return {} }
    }
  },
  data() {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
