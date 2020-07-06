<template>
  <!-- <el-dialog title="入院登记" :visible.sync="show" width="1200px" :before-close="close"> -->
  <form-dialog title="新增数据元" :is-show="show" :width="'1200px'" @update:isShow="updateIsShow" @resetForm="resetForm">
    <el-form ref="form" :model="form">
      <div class="box">
        <div class="box-header">
          <span class="box-title">入院登记</span>
        </div>
        <div class="box-body">
          <el-row :gutter="10">
            <el-col :span="7">
              <el-form-item label="入院日期" prop="date" label-width="115px">
                <el-date-picker v-model="form.date" type="date" placeholder="选择日期" />
              </el-form-item>
            </el-col>
            <el-col :span="7">
              <el-form-item label="医疗类别" prop="type" label-width="115px">
                <el-select v-model="form.type" style="width: 100%" placeholder="请选择">
                  <el-option label="aa" value="bb" />
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="10">
              <el-form-item label="" prop="date">
                <el-input v-model="form.cardNo" placeholder="请输入内容" class="input-with-select" @change="readCard">
                  <el-select slot="prepend" v-model="select" placeholder="请选择">
                    <el-option label="社会保障号" value="1" />
                    <el-option label="订单号" value="2" />
                    <el-option label="用户电话" value="3" />
                  </el-select>
                  <el-button slot="append">读卡</el-button>
                </el-input>
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <info :show="infoShow" :info="peopleInfo" />
            </el-col>
          </el-row>
        </div>
      </div>
      <div class="box">
        <div class="box-header">
          <span class="box-title">住院信息</span>
        </div>
        <div class="box-body">
          <el-row :gutter="10">
            <el-col :span="6">
              <el-form-item label="住院号" prop="no" label-width="115px">
                <el-input v-model="form.no" placeholder="placeholder" />
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="医保就医号" prop="type" label-width="115px">
                <el-input v-model="form.no" placeholder="placeholder" />
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="待遇类别" prop="type" label-width="115px">
                <el-select v-model="form.type" style="width: 100%" placeholder="请选择">
                  <el-option label="aa" value="bb" />
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="转院申请" prop="type" label-width="115px">
                <el-input v-model="form.no" placeholder="placeholder" />
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="入院诊断" prop="type" label-width="115px">
                <el-select v-model="form.type" style="width: 100%" placeholder="请选择">
                  <el-option label="aa" value="bb" />
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="入院科室" prop="type" label-width="115px">
                <el-select v-model="form.type" style="width: 100%" placeholder="请选择">
                  <el-option label="aa" value="bb" />
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="入院病区" prop="type" label-width="115px">
                <el-select v-model="form.type" style="width: 100%" placeholder="请选择">
                  <el-option label="aa" value="bb" />
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="床位号" prop="type" label-width="115px">
                <el-input v-model="form.no" placeholder="placeholder" />
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="手术名称" prop="type" label-width="115px">
                <el-select v-model="form.type" style="width: 100%" placeholder="请选择">
                  <el-option label="aa" value="bb" />
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="联系人" prop="type" label-width="115px">
                <el-input v-model="form.no" placeholder="placeholder" />
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="联系电话" prop="type" label-width="115px">
                <el-input v-model="form.no" placeholder="placeholder" />
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="联系地址" prop="type" label-width="115px">
                <el-input v-model="form.no" placeholder="placeholder" />
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="代办人" prop="type" label-width="115px">
                <el-input v-model="form.no" placeholder="placeholder" />
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="代办人证件类型" prop="type" label-width="115px">
                <el-select v-model="form.type" style="width: 100%" placeholder="请选择">
                  <el-option label="aa" value="bb" />
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="代办人证件号码" prop="type" label-width="115px">
                <el-input v-model="form.no" placeholder="placeholder" />
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="代办人联系电话" prop="type" label-width="115px">
                <el-input v-model="form.no" placeholder="placeholder" />
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item label="临床试验" prop="resource" label-width="115px">
                <el-radio-group v-model="form.resource">
                  <el-radio :label="0">是</el-radio>
                  <el-radio :label="1">否</el-radio>
                </el-radio-group>
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item label="病情备注" prop="no" label-width="115px">
                <el-input v-model="form.no" type="textarea" :rows="2" placeholder="请输入内容" />
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item label="其它诊断" prop="type" label-width="115px">
                <el-select v-model="form.type" style="width: 100%" placeholder="请选择">
                  <el-option label="aa" value="bb" />
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
        </div>
      </div>
    </el-form>
    <slot />
    <span slot="footer" class="dialog-footer">
      <el-button type="primary" @click="confirm">登记</el-button>
      <el-button @click="close">取消</el-button>
    </span>
  </form-dialog>
</template>

<script>
import Info from './info'
export default {
  name: 'Enter',
  components: {
    'info': Info
  },
  mixins: [],
  props: {
    show: {
      type: Boolean,
      default: () => { return false }
    }
  },
  data() {
    return {
      form: {
        date: null,
        cardNo: null,
        type: null,
        no: null,
        resource: 0
      },
      select: '1',
      infoShow: false, // 人员信息收缩栏
      peopleInfo: {
        name: '张三',
        sex: '男',
        age: '58',
        IDCard: '430682193208080432',
        identity: '城镇职工',
        status: '在职',
        level: '正常',
        times: '1',
        unit: '广东省加多宝集团',
        mobile: '17788996162'
      }
    }
  },
  computed: {},
  watch: {},
  created() {
  },
  mounted() {
  },
  methods: {
    updateIsShow(v) {
      this.$emit('update:show', v)
    },
    resetForm() {
      this.$refs.addForm.resetFields()
    },
    //  读卡按下回车
    readCard() {
      this.infoShow = true
    },
    close() {
      this.$emit('update:show', false)
    },
    confirm() {}
  }
}
</script>

<style scoped lang="scss">
  /deep/.el-input-group__prepend .el-select .el-input {
    width: 130px;
  }
</style>
