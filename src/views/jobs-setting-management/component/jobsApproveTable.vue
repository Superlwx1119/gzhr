<template>
  <!-- 单位岗位信息 -->
  <div>
    <div slot="table-title" class="box-header handle">
      <span class="box-title">单位岗位信息</span>
    </div>
    <el-form ref="addForm" :model="addForm" :rules="rules" label-width="105px" style="margin-bottom:10px">
      <table class="table-data total-info">
        <tr>
          <td class="bg" rowspan="12" style="width:130px !important">岗位聘用情况</td>
          <td class="bg" rowspan="3" style="width:130px !important">管理岗位</td>
          <td class="bg" style="width:130px !important">等级</td>
          <td class="bg" colspan="3">三</td>
          <td class="bg" colspan="3">四</td>
          <td class="bg" colspan="3">五</td>
          <td class="bg" colspan="3">六</td>
          <td class="bg" colspan="3">七</td>
          <td class="bg" colspan="3">八</td>
          <td class="bg" colspan="3">九</td>
          <td class="bg" colspan="3">十</td>
        </tr>
        <tr>
          <td class="bg">核准岗位数</td>
          <td colspan="3">1</td>
          <td colspan="3">2</td>
          <td colspan="3">3</td>
          <td colspan="3">4</td>
          <td colspan="3">5</td>
          <td colspan="3">6</td>
          <td colspan="3">7</td>
          <td colspan="3">8</td>
        </tr>
        <tr>
          <td class="bg">聘用岗位数</td>
          <td colspan="3">1</td>
          <td colspan="3">2</td>
          <td colspan="3">3</td>
          <td colspan="3">4</td>
          <td colspan="3">5</td>
          <td colspan="3">6</td>
          <td colspan="3">7</td>
          <td colspan="3">8</td>
        </tr>
        <tr>
          <td class="bg" rowspan="6">专业技术岗位</td>
          <td class="bg">层级</td>
          <td class="bg" colspan="12">高级</td>
          <td class="bg" colspan="6">中级</td>
          <td class="bg" colspan="6">初级</td>
        </tr>
        <tr>
          <td class="bg">核准岗位数</td>
          <td colspan="12">6</td>
          <td colspan="6">16</td>
          <td colspan="6">17</td>
        </tr>
        <tr>
          <td class="bg">聘用岗位数</td>
          <td colspan="12">6</td>
          <td colspan="6">16</td>
          <td colspan="6">17</td>
        </tr>
        <tr>
          <td class="bg">等级</td>
          <td class="bg" colspan="2" style="width:7%">二</td>
          <td class="bg" colspan="2" style="width:7%">三</td>
          <td class="bg" colspan="2" style="width:7%">五</td>
          <td class="bg" colspan="2" style="width:7%">六</td>
          <td class="bg" colspan="2" style="width:7%">七</td>
          <td class="bg" colspan="2" style="width:7%">八</td>
          <td class="bg" colspan="2" style="width:7%">九</td>
          <td class="bg" colspan="2" style="width:7%">十</td>
          <td class="bg" colspan="2" style="width:7%">十一</td>
          <td class="bg" colspan="2" style="width:7%">十二</td>
          <td class="bg" colspan="2" style="width:7%">十三</td>
        </tr>
        <tr>
          <td class="bg">核准岗位数</td>
          <td colspan="2" style="width:7%">1</td>
          <td colspan="2" style="width:7%">2</td>
          <td colspan="2" style="width:7%">3</td>
          <td colspan="2" style="width:7%">4</td>
          <td colspan="2" style="width:7%">5</td>
          <td colspan="2" style="width:7%">6</td>
          <td colspan="2" style="width:7%">7</td>
          <td colspan="2" style="width:7%">8</td>
          <td colspan="2" style="width:7%">9</td>
          <td colspan="2" style="width:7%">0</td>
          <td colspan="2" style="width:7%">11</td>
        </tr>
        <tr>
          <td class="bg">聘用岗位数</td>
          <td colspan="2" style="width:7%">2</td>
          <td colspan="2" style="width:7%">3</td>
          <td colspan="2" style="width:7%">4</td>
          <td colspan="2" style="width:7%">5</td>
          <td colspan="2" style="width:7%">6</td>
          <td colspan="2" style="width:7%">7</td>
          <td colspan="2" style="width:7%">8</td>
          <td colspan="2" style="width:7%">9</td>
          <td colspan="2" style="width:7%">0</td>
          <td colspan="2" style="width:7%">22</td>
          <td colspan="2" style="width:7%">33</td>
        </tr>
        <tr>
          <td class="bg" rowspan="3">工勤技能岗位</td>
          <td class="bg">等级</td>
          <td class="bg" colspan="3">一</td>
          <td class="bg" colspan="3">二</td>
          <td class="bg" colspan="3">三</td>
          <td class="bg" colspan="3">四</td>
          <td class="bg" colspan="3">五</td>
          <td class="bg" colspan="7">普通工</td>
        </tr>
        <tr>
          <td class="bg">核准岗位数</td>
          <td colspan="3">1</td>
          <td colspan="3">1</td>
          <td colspan="3">2</td>
          <td colspan="3">1</td>
          <td colspan="3">2</td>
          <td colspan="7">3</td>
        </tr>
        <tr>
          <td class="bg">聘用岗位数</td>
          <td colspan="3">1</td>
          <td colspan="3">1</td>
          <td colspan="3">2</td>
          <td colspan="3">1</td>
          <td colspan="3">2</td>
          <td colspan="7">3</td>
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
    width: 0;
  }
  /deep/ .table-data tr>td:nth-child(2n){
    text-align: center !important;
    padding: 0;
  }
  /deep/ .bg{
    background: #F5F7FA !important;
  }
</style>
