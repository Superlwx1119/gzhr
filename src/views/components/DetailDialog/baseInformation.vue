<template>
  <div class="box">
    <div class="box-body">
      <table class="table-data total-info">
        <tbody>
          <tr>
            <td>单位编码</td>
            <td>430203004400</td>
            <td>单位名称</td>
            <td colspan="5">{{ detailInfo.aab069 }}</td>
          </tr>
          <tr>
            <td>单位类型</td>
            <td>{{ detailInfo.aab019 }}</td>
            <td>上级单位</td>
            <td colspan="3">{{ detailInfo.bab023 }}</td>
            <td>单位隶属关系</td>
            <td>{{ detailInfo.aab021 }}</td>
          </tr>
          <tr>
            <td>单位分类</td>
            <td>公益一类</td>
            <td>单位主体岗位</td>
            <td colspan="3">专业技术岗位</td>
            <td>是否参公管理</td>
            <td>{{ detailInfo.rb0195 }}</td>
          </tr>
          <tr>
            <td>单位级别</td>
            <td>{{ detailInfo.rb0150 }}</td>
            <td>机构类别</td>
            <td>{{ detailInfo.rb0204 }}</td>
            <td>行政区划</td>
            <td>{{ detailInfo.aab226 }}</td>
            <td>国民经济分类</td>
            <td>公共管理、社会保障和社会组织</td>
          </tr>
          <tr>
            <td>社会信用代码</td>
            <td>社会信用代码</td>
            <td>行政主管部门</td>
            <td colspan="3">{{ detailInfo.aab023 }}</td>
            <td>所属系统</td>
            <td>{{ detailInfo.rb0174 }}</td>
          </tr>
          <tr>
            <td>所属行业</td>
            <td>{{ detailInfo.aab022 }}</td>
            <td>单位简称</td>
            <td colspan="3">单位简称</td>
            <td>单位合同编号</td>
            <td>单位合同编号</td>
          </tr>
          <tr>
            <td>编制总数</td>
            <td>{{ detailInfo.rb0705 }}</td>
            <td>批准编制单位</td>
            <td>{{ detailInfo.rb0425 }}</td>
            <td>批准编制日期</td>
            <td>批准编制日期</td>
            <td>批准编制文号</td>
            <td>批准编制文号</td>
          </tr>
          <tr>
            <td>正职领导职数</td>
            <td colspan="2">{{ detailInfo.rb0741 }}</td>
            <td>副职领导职数</td>
            <td colspan="2">{{ detailInfo.rb0742 }}</td>
            <td>单位领导职数</td>
            <td colspan="2">{{ detailInfo.rb0740 }}</td>
          </tr>
          <tr>
            <td>正职非领导职数</td>
            <td colspan="2">{{ detailInfo.rb0746 }}</td>
            <td>副职非领导职数</td>
            <td colspan="2">{{ detailInfo.rb0747 }}</td>
            <td>单位非领导职数</td>
            <td colspan="2">{{ detailInfo.rb0745 }}</td>
          </tr>
          <tr>
            <td>法人代表</td>
            <td>4141</td>
            <td>法人证件号码</td>
            <td colspan="2">1</td>
            <td>批准成立文号</td>
            <td colspan="2">党的系统</td>
          </tr>
          <tr>
            <td>批准成立日期</td>
            <td>批准成立日期</td>
            <td>联系人</td>
            <td colspan="2">联系人</td>
            <td>联系人电话</td>
            <td colspan="2">联系人电话</td>
          </tr>
          <tr>
            <td>经办人姓名</td>
            <td>{{ detailInfo.rb0214 }}</td>
            <td>经办人员电话</td>
            <td>{{ detailInfo.rb0216 }}</td>
            <td>审核人员姓名</td>
            <td>{{ detailInfo.rb0217 }}</td>
            <td>审核人员电话</td>
            <td>{{ detailInfo.rb0219 }}</td>
          </tr>
          <tr>
            <td>内设机构数</td>
            <td colspan="2">内设机构数</td>
            <td>单位地址</td>
            <td colspan="4">单位地址	</td>
          </tr>
          <tr rowspan="3">
            <td>主要工作职责</td>
            <td colspan="7">主要工作职责</td>
          </tr>
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
