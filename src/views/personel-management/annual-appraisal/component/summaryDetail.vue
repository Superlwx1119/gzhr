<template>
  <div class="box">
    <div class="box-body">
      <div class="appraisalDepartment">
        <p>单位:湖北省科学技术馆</p>
        <p>2018年度</p>
      </div>
      <table class="table-data total-info">
        <tbody>
          <tr>
            <td rowspan="2" colspan="2">项目</td>
            <td rowspan="2">总计</td>
            <td colspan="3">各类岗位、人员情况</td>
          </tr>
          <tr>
            <td>管理</td>
            <td>专业技术</td>
            <td>工勤技能</td>
          </tr>
          <tr>
            <td colspan="2">编制数</td>
            <td>编制数</td>
            <td>编制数</td>
            <td>编制数</td>
            <td>编制数</td>
          </tr>
          <tr>
            <td colspan="2">岗位数</td>
            <td>岗位数</td>
            <td>岗位数</td>
            <td>岗位数</td>
            <td>岗位数</td>
          </tr>
          <tr>
            <td colspan="2">应参加考核人数</td>
            <td>44</td>
            <td>22</td>
            <td>33</td>
            <td>11</td>
          </tr>
          <tr>
            <td rowspan="6" width="100px">实际参加考核人数</td>
            <td width="100px">小计</td>
            <td>42</td>
            <td>24</td>
            <td>15</td>
            <td>3</td>
          </tr>
          <tr>
            <td>优秀等次人数</td>
            <td>8</td>
            <td>6</td>
            <td>4</td>
            <td>2</td>
          </tr>
          <tr>
            <td>合格等次人数</td>
            <td>8</td>
            <td>14</td>
            <td>42</td>
            <td>2</td>
          </tr>
          <tr>
            <td>基本合格等次人数</td>
            <td>8</td>
            <td>6</td>
            <td>4</td>
            <td>2</td>
          </tr>
          <tr>
            <td>不合格等次人数</td>
            <td>8</td>
            <td>6</td>
            <td>4</td>
            <td>2</td>
          </tr>
          <tr>
            <td>未确定等次人数</td>
            <td>8</td>
            <td>6</td>
            <td>4</td>
            <td>2</td>
          </tr>
          <tr>
            <td colspan="2">未参加考核人数</td>
            <td>2</td>
            <td>1</td>
            <td>1</td>
            <td>0</td>
          </tr>
          <tr>
            <td colspan="2">优秀等次比例</td>
            <td>20%</td>
            <td>10%</td>
            <td>11%</td>
            <td>0%</td>
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
      textarea: ''
    }
  }
}
</script>

<style lang="scss" scoped>
    h1{
      text-align: center;
      font-weight: normal;
    }
  .appraisalDepartment{
    display: flex;
    p{
      flex: 1;
    }
  }
  /deep/ .table-data tr>td:nth-child(2n-1){
    background: white;
    width: 200px;
    padding: 0;
  }
  /deep/ .table-data tr>td{
    text-align: center;
  }
  /deep/ .table-data tr>td:nth-child(2n){
    padding: 0;
  }
</style>
