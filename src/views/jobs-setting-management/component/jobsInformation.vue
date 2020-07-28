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
          <td class="bg" style="width:8%" colspan="13">一</td>
          <td class="bg" style="width:8%" colspan="13">二</td>
          <td class="bg" style="width:8%" colspan="13">三</td>
          <td class="bg" style="width:8%" colspan="13">四</td>
          <td class="bg" style="width:8%" colspan="13">五</td>
          <td class="bg" style="width:8%" colspan="13">六</td>
          <td class="bg" style="width:8%" colspan="13">七</td>
          <td class="bg" style="width:8%" colspan="13">八</td>
          <td class="bg" style="width:8%" colspan="13">九</td>
          <td class="bg" style="width:8%" colspan="13">十</td>
        </tr>
        <tr>
          <td rowspan="2">16%</td>
          <td rowspan="2">{{ managementNum }}</td>
          <td class="bg">比例(%)</td>
          <td colspan="13">0%</td>
          <td colspan="13">0%</td>
          <td colspan="13">1%</td>
          <td colspan="13">3%</td>
          <td colspan="13">16%</td>
          <td colspan="13">25%</td>
          <td colspan="13">24%</td>
          <td colspan="13">14%</td>
          <td colspan="13">17%</td>
          <td colspan="13">0%</td>
        </tr>
        <tr>
          <td class="bg">数量</td>
          <td colspan="13"><el-input v-model.number="addForm.c0811" @input="function(){return handleSelectChange(addForm.c0811,'c0811')}" /></td>
          <td colspan="13"><el-input v-model.number="addForm.c0812" @input="function(){return handleSelectChange(addForm.c0812,'c0812')}" /></td>
          <td colspan="13"><el-input v-model.number="addForm.c0821" @input="function(){return handleSelectChange(addForm.c0821,'c0821')}" /></td>
          <td colspan="13"><el-input v-model.number="addForm.c0822" @input="function(){return handleSelectChange(addForm.c0822,'c0822')}" /></td>
          <td colspan="13"><el-input v-model.number="addForm.c0831" @input="function(){return handleSelectChange(addForm.c0831,'c0831')}" /></td>
          <td colspan="13"><el-input v-model.number="addForm.c0832" @input="function(){return handleSelectChange(addForm.c0832,'c0832')}" /></td>
          <td colspan="13"><el-input v-model.number="addForm.c0841" @input="function(){return handleSelectChange(addForm.c0841,'c0841')}" /></td>
          <td colspan="13"><el-input v-model.number="addForm.c0842" @input="function(){return handleSelectChange(addForm.c0842,'c0842')}" /></td>
          <td colspan="13"><el-input v-model.number="addForm.c0850" @input="function(){return handleSelectChange(addForm.c0850,'c0850')}" /></td>
          <td colspan="13"><el-input v-model.number="addForm.c0860" @input="function(){return handleSelectChange(addForm.c0860,'c0860')}" /></td>
        </tr>
        <tr>
          <td class="bg" rowspan="6">专业技术岗</td>
          <td class="bg" rowspan="3">比例</td>
          <td class="bg" rowspan="3">数量</td>
          <td class="bg">层级</td>
          <td class="bg" colspan="70">高级</td>
          <td class="bg" colspan="30">中级</td>
          <td class="bg" colspan="30">初级</td>
        </tr>
        <tr>
          <td class="bg">比例</td>
          <td colspan="30">{{ `${hightPercent}%` }}</td>
          <td colspan="20">其中正高</td>
          <td colspan="20">{{ `${trueHightPercent}%` }}</td>
          <td colspan="30">{{ `${midPercent}%` }}</td>
          <td colspan="30">{{ `${lowPercent}%` }}</td>
        </tr>
        <tr>
          <td class="bg">数量</td>
          <td colspan="30">{{ hightNum }}</td>
          <td colspan="20">其中正高</td>
          <td colspan="20">{{ trueHightNum }}</td>
          <td colspan="30">{{ midNum }}</td>
          <td colspan="30">{{ lowNum }}</td>
        </tr>
        <tr>
          <td rowspan="3">70%</td>
          <td rowspan="3">{{ professionalNum }}</td>
          <td class="bg">等级</td>
          <td colspan="10" class="bg">一</td>
          <td colspan="10" class="bg">二</td>
          <td colspan="10" class="bg">三</td>
          <td colspan="10" class="bg">四</td>
          <td colspan="10" class="bg">五</td>
          <td colspan="10" class="bg">六</td>
          <td colspan="10" class="bg">七</td>
          <td colspan="10" class="bg">八</td>
          <td colspan="10" class="bg">九</td>
          <td colspan="10" class="bg">十</td>
          <td colspan="10" class="bg">十一</td>
          <td colspan="10" class="bg">十二</td>
          <td colspan="10" class="bg">十三</td>
        </tr>
        <tr>
          <td class="bg">比例(%)</td>
          <td colspan="10" style="width:7% !important">0%</td>
          <td colspan="10" style="width:7% !important">0%</td>
          <td colspan="10" style="width:7% !important">40%</td>
          <td colspan="10">60%</td>
          <td colspan="10">20%</td>
          <td colspan="10">40%</td>
          <td colspan="10">40%</td>
          <td colspan="10">30%</td>
          <td colspan="10">40%</td>
          <td colspan="10">30%</td>
          <td colspan="10">50%</td>
          <td colspan="10">50%</td>
          <td colspan="10">0%</td>
        </tr>
        <tr>
          <td class="bg">数量</td>
          <td colspan="10"><el-input v-model.number="addForm.c0311" @input="function(){return handleSelectChange(addForm.c0311,'c0311')}" /></td>
          <td colspan="10"><el-input v-model.number="addForm.c0312" @input="function(){return handleSelectChange(addForm.c0312,'c0312')}" /></td>
          <td colspan="10"><el-input v-model.number="addForm.c0313" @input="function(){return handleSelectChange(addForm.c0313,'c0313')}" /></td>
          <td colspan="10"><el-input v-model.number="addForm.c0314" @input="function(){return handleSelectChange(addForm.c0314,'c0314')}" /></td>
          <td colspan="10"><el-input v-model.number="addForm.c0321" @input="function(){return handleSelectChange(addForm.c0321,'c0321')}" /></td>
          <td colspan="10"><el-input v-model.number="addForm.c0322" @input="function(){return handleSelectChange(addForm.c0322,'c0322')}" /></td>
          <td colspan="10"><el-input v-model.number="addForm.c0323" @input="function(){return handleSelectChange(addForm.c0323,'c0323')}" /></td>
          <td colspan="10"><el-input v-model.number="addForm.c0331" @input="function(){return handleSelectChange(addForm.c0331,'c0331')}" /></td>
          <td colspan="10"><el-input v-model.number="addForm.c0332" @input="function(){return handleSelectChange(addForm.c0332,'c0332')}" /></td>
          <td colspan="10"><el-input v-model.number="addForm.c0333" @input="function(){return handleSelectChange(addForm.c0333,'c0333')}" /></td>
          <td colspan="10"><el-input v-model.number="addForm.c0341" @input="function(){return handleSelectChange(addForm.c0341,'c0341')}" /></td>
          <td colspan="10"><el-input v-model.number="addForm.c0342" @input="function(){return handleSelectChange(addForm.c0342,'c0342')}" /></td>
          <td colspan="10"><el-input v-model.number="addForm.c0351" @input="function(){return handleSelectChange(addForm.c0351,'c0351')}" /></td>
        </tr>
        <tr>
          <td class="bg" rowspan="4">工勤技能岗位</td>
          <td class="bg" rowspan="2">比例</td>
          <td class="bg" rowspan="2">数量</td>
          <td class="bg" rowspan="2">等级</td>
          <td class="bg" colspan="75">技工</td>
          <td class="bg" colspan="55" rowspan="2">普通工</td>
        </tr>
        <tr>
          <td class="bg" colspan="15">一</td>
          <td class="bg" colspan="15">二</td>
          <td class="bg" colspan="15">三</td>
          <td class="bg" colspan="15">四</td>
          <td class="bg" colspan="15">五</td>
        </tr>
        <tr>
          <td rowspan="2">7%</td>
          <td rowspan="2">{{ logisticsNum }}</td>
          <td class="bg">比例</td>
          <td colspan="15">2%</td>
          <td colspan="15">6%</td>
          <td colspan="15">37%</td>
          <td colspan="15">30%</td>
          <td colspan="15">25%</td>
          <td colspan="55">0%</td>
        </tr>
        <tr>
          <td class="bg">数量</td>
          <td colspan="15"><el-input v-model.number="addForm.c0610" @input="function(){return handleSelectChange(addForm.c0610,'c0610')}" /></td>
          <td colspan="15"><el-input v-model.number="addForm.c0620" @input="function(){return handleSelectChange(addForm.c0620,'c0620')}" /></td>
          <td colspan="15"><el-input v-model.number="addForm.c0630" @input="function(){return handleSelectChange(addForm.c0630,'c0630')}" /></td>
          <td colspan="15"><el-input v-model.number="addForm.c0640" @input="function(){return handleSelectChange(addForm.c0640,'c0640')}" /></td>
          <td colspan="15"><el-input v-model.number="addForm.c0650" @input="function(){return handleSelectChange(addForm.c0650,'c0650')}" /></td>
          <td colspan="55"><el-input v-model.number="addForm.c0699" @input="function(){return handleSelectChange(addForm.c0699,'c0699')}" /></td>
        </tr>
      </table>
    </el-form>
  </div>
</template>

<script>
import { editPostSetup, addPostSetup } from '@/api/JobsSettingManagement/index'
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
      addForm: this.addFormData,
      rules: {},
      loading: false
    }
  },
  computed: {
    managementNum() {
      const level1 = this.addForm.c0811 ? Number(this.addForm.c0811) : 0
      const level2 = this.addForm.c0812 ? Number(this.addForm.c0812) : 0
      const level3 = this.addForm.c0821 ? Number(this.addForm.c0821) : 0
      const level4 = this.addForm.c0822 ? Number(this.addForm.c0822) : 0
      const level5 = this.addForm.c0831 ? Number(this.addForm.c0831) : 0
      const level6 = this.addForm.c0832 ? Number(this.addForm.c0832) : 0
      const level7 = this.addForm.c0841 ? Number(this.addForm.c0841) : 0
      const level8 = this.addForm.c0842 ? Number(this.addForm.c0842) : 0
      const level9 = this.addForm.c0850 ? Number(this.addForm.c0850) : 0
      const level10 = this.addForm.c0860 ? Number(this.addForm.c0860) : 0
      const managementNum = level1 + level2 + level3 + level4 + level5 + level6 + level7 + level8 + level9 + level10
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      this.addForm.brb208 = managementNum
      return managementNum
    },
    professionalNum() {
      const level1 = this.addForm.c0311 ? Number(this.addForm.c0311) : 0
      const level2 = this.addForm.c0312 ? Number(this.addForm.c0312) : 0
      const level3 = this.addForm.c0313 ? Number(this.addForm.c0313) : 0
      const level4 = this.addForm.c0314 ? Number(this.addForm.c0314) : 0
      const level5 = this.addForm.c0321 ? Number(this.addForm.c0321) : 0
      const level6 = this.addForm.c0322 ? Number(this.addForm.c0322) : 0
      const level7 = this.addForm.c0323 ? Number(this.addForm.c0323) : 0
      const level8 = this.addForm.c0331 ? Number(this.addForm.c0331) : 0
      const level9 = this.addForm.c0332 ? Number(this.addForm.c0332) : 0
      const level10 = this.addForm.c0333 ? Number(this.addForm.c0333) : 0
      const level11 = this.addForm.c0341 ? Number(this.addForm.c0341) : 0
      const level12 = this.addForm.c0342 ? Number(this.addForm.c0342) : 0
      const level13 = this.addForm.c0351 ? Number(this.addForm.c0351) : 0
      const professionalNum = level1 + level2 + level3 + level4 + level5 + level6 + level7 + level8 + level9 + level10 + level11 + level12 + level13
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      this.addForm.brb209 = professionalNum
      return professionalNum
    },
    hightNum() {
      const level1 = this.addForm.c0311 ? Number(this.addForm.c0311) : 0
      const level2 = this.addForm.c0312 ? Number(this.addForm.c0312) : 0
      const level3 = this.addForm.c0313 ? Number(this.addForm.c0313) : 0
      const level4 = this.addForm.c0314 ? Number(this.addForm.c0314) : 0
      const level5 = this.addForm.c0321 ? Number(this.addForm.c0321) : 0
      const level6 = this.addForm.c0322 ? Number(this.addForm.c0322) : 0
      const level7 = this.addForm.c0323 ? Number(this.addForm.c0323) : 0
      const total = level1 + level2 + level3 + level4 + level5 + level6 + level7
      return total
    },
    hightPercent() {
      return this.professionalNum === 0 ? 0 : ((this.hightNum / this.professionalNum) * 100).toFixed(2)
    },
    trueHightNum() {
      const level1 = this.addForm.c0311 ? Number(this.addForm.c0311) : 0
      const level2 = this.addForm.c0312 ? Number(this.addForm.c0312) : 0
      const level3 = this.addForm.c0313 ? Number(this.addForm.c0313) : 0
      const level4 = this.addForm.c0314 ? Number(this.addForm.c0314) : 0
      const trueTotal = level1 + level2 + level3 + level4
      return trueTotal
    },
    trueHightPercent() {
      return this.hightNum === 0 ? 0 : ((this.trueHightNum / this.hightNum) * 100).toFixed(2)
    },
    midNum() {
      const level8 = this.addForm.c0331 ? Number(this.addForm.c0331) : 0
      const level9 = this.addForm.c0332 ? Number(this.addForm.c0332) : 0
      const level10 = this.addForm.c0333 ? Number(this.addForm.c0333) : 0
      const total = level8 + level9 + level10
      return total
    },
    midPercent() {
      return this.professionalNum === 0 ? 0 : ((this.midNum / this.professionalNum) * 100).toFixed(2)
    },
    lowNum() {
      const level11 = this.addForm.c0341 ? Number(this.addForm.c0341) : 0
      const level12 = this.addForm.c0342 ? Number(this.addForm.c0342) : 0
      const level13 = this.addForm.c0351 ? Number(this.addForm.c0351) : 0
      const total = level13 + level12 + level11
      return total
    },
    lowPercent() {
      return this.professionalNum === 0 ? 0 : ((this.lowNum / this.professionalNum) * 100).toFixed(2)
    },
    logisticsNum() {
      const level1 = this.addForm.c0610 ? Number(this.addForm.c0610) : 0
      const level2 = this.addForm.c0620 ? Number(this.addForm.c0620) : 0
      const level3 = this.addForm.c0630 ? Number(this.addForm.c0630) : 0
      const level4 = this.addForm.c0640 ? Number(this.addForm.c0640) : 0
      const level5 = this.addForm.c0650 ? Number(this.addForm.c0650) : 0
      const level6 = this.addForm.c0710 ? Number(this.addForm.c0710) : 0
      const total = level1 + level2 + level3 + level4 + level5 + level6
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      this.addForm.brb210 = total
      return total
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
    editPostSetup(row) {
      editPostSetup({ aab001: row.aab001, arb211: row.arb211 }).then(res => {
        if (res.code === 0) {
          this.addForm = res.data.dataMap
        }
      })
    },
    addPostSetup(row) {
      addPostSetup({ aab001: 1282 }).then(res => {
        this.loading = false
        if (res.code === 0) {
          this.addForm = res.data.dataMap
          this.$emit('input', this.addForm)
        }
      }).catch(() => {
        this.loading = false
      })
    },
    handleSelectChange(v, type) {
      this.addForm[type] = v || 0
      this.$emit('input', this.addForm)
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
    line-height: -1;
  }
  /deep/ .table-data tr>td:nth-child(2n){
    text-align: center !important;
    padding: 0;
  }
  /deep/ .bg{
    background: #F5F7FA !important;
  }
  /deep/ .table-data tr>td{
    line-height: -1 !important;
  }
</style>
