<template>
  <!-- 单位岗位信息 -->
  <div>
    <div slot="table-title" class="box-header handle">
      <span class="box-title">单位岗位信息</span>
    </div>
    <el-form ref="addForm" :model="addForm" :rules="rules" label-width="105px" style="margin-bottom:10px">
      <table class="table-data total-info">
        <tr>
          <td rowspan="3" class="bg">管理岗位</td>
          <td class="bg">比例</td>
          <td class="bg">数量</td>
          <td class="bg">等级</td>
          <td class="bg">一</td>
          <td class="bg">二</td>
          <td class="bg">三</td>
          <td class="bg">四</td>
          <td class="bg">五</td>
          <td class="bg">六</td>
          <td class="bg">七</td>
          <td class="bg">八</td>
          <td class="bg">九</td>
          <td class="bg">十</td>
        </tr>
        <tr>
          <td rowspan="2">16%</td>
          <td rowspan="2">16</td>
          <td class="bg">比例(%)</td>
          <td>0%</td>
          <td>0%</td>
          <td>6%</td>
          <td>13%</td>
          <td>6%</td>
          <td>13%</td>
          <td>19%</td>
          <td>25%</td>
          <td>6%</td>
          <td>13%</td>
        </tr>
        <tr>
          <td class="bg">数量</td>
          <td>0</td>
          <td>0</td>
          <td>1</td>
          <td>2</td>
          <td>1</td>
          <td>2</td>
          <td>3</td>
          <td>4</td>
          <td>1</td>
          <td>2</td>
        </tr>
        <tr>
          <td class="bg" rowspan="6">专业技术岗</td>
          <td class="bg" rowspan="3">比例</td>
          <td class="bg" rowspan="3">数量</td>
          <td class="bg">层级</td>
          <td class="bg" colspan="5">高级</td>
          <td class="bg" colspan="3">中级</td>
          <td class="bg" colspan="2">初级</td>
        </tr>
        <tr>
          <td class="bg">比例</td>
          <td colspan="2">13%</td>
          <td colspan="2">其中正高</td>
          <td>7%</td>
          <td colspan="3">36%</td>
          <td colspan="2">51%</td>
        </tr>
        <tr>
          <td class="bg">数量</td>
          <td colspan="2">9</td>
          <td colspan="2">其中正高</td>
          <td>5</td>
          <td colspan="3">25</td>
          <td colspan="2">36</td>
        </tr>
        <tr>
          <td rowspan="3">70%</td>
          <td rowspan="3">70</td>
          <td class="bg">等级</td>
          <td class="bg">一</td>
          <td class="bg">二</td>
          <td class="bg">三</td>
          <td class="bg">四</td>
          <td class="bg">五</td>
          <td class="bg">六</td>
          <td class="bg">七</td>
          <td class="bg">八</td>
          <td class="bg">九</td>
          <td class="bg">十</td>
        </tr>
        <tr>
          <td class="bg">比例(%)</td>
          <td>0</td>
          <td>40</td>
          <td>20</td>
          <td>40</td>
          <td>25</td>
          <td>50</td>
          <td>25</td>
          <td>20</td>
          <td>36</td>
          <td>40</td>
        </tr>
        <tr>
          <td class="bg">数量</td>
          <td>0</td>
          <td>40</td>
          <td>20</td>
          <td>40</td>
          <td>25</td>
          <td>50</td>
          <td>25</td>
          <td>20</td>
          <td>36</td>
          <td>40</td>
        </tr>
        <tr>
          <td class="bg" rowspan="4">工勤技能岗位</td>
          <td class="bg" rowspan="2">比例</td>
          <td class="bg" rowspan="2">数量</td>
          <td class="bg" rowspan="2">等级</td>
          <td class="bg" colspan="5">技工</td>
          <td class="bg" colspan="5" rowspan="2">普通工</td>
        </tr>
        <tr>
          <td class="bg">一</td>
          <td class="bg">二</td>
          <td class="bg">三</td>
          <td class="bg">四</td>
          <td class="bg">五</td>
        </tr>
        <tr>
          <td rowspan="2">14%</td>
          <td rowspan="2">14</td>
          <td class="bg">比例</td>
          <td>7%</td>
          <td>14%</td>
          <td>21%</td>
          <td>7%</td>
          <td>14%</td>
          <td colspan="5">36%</td>
        </tr>
        <tr>
          <td class="bg">比例</td>
          <td>1</td>
          <td>2</td>
          <td>3</td>
          <td>1</td>
          <td>2</td>
          <td colspan="5">5</td>
        </tr>
      </table>
    </el-form>
  </div>
</template>

<script>
export default {
  components: {
  },
  props: {
    addFormData: {
      type: Object,
      default: function() { return {} }
    }
  },
  data() {
    return {
      addForm: {},
      rules: {},
      loading: false
    }
  },
  watch: {
    addFormData: function(newValue) {
      this.addForm = newValue
      this.$emit('input', this.addForm)
    }
  },
  methods: {
    reset(formName) {
      // this.$refs[formName].resetFields()
    },
    handleSelectChange(v) {
      this.$emit('input', v)
    },
    save(formName) {}
  }
}
</script>

<style lang="scss" scoped>
  /deep/ .table-data tr>td:nth-child(2n-1){
    background: white ;
    text-align: center !important;
    padding: 0;
  }
  /deep/ .table-data tr>td:nth-child(2n){
    text-align: center !important;
    padding: 0;
  }
  /deep/ .bg{
    background: #F5F7FA !important;
  }
</style>
