<template>
  <!---->
  <section class="layer">
    <div class="box">
      <div class="box-header">
        <span class="box-title">申请信息</span>
      </div>
      <div class="box-body">
        <el-row v-if="isEdit" :gutter="10">
          <el-col :md="12" :lg="8" :xl="6">
            <el-form-item label="收款账户" prop="收款账户">
              <payment-account v-model="infoForm.收款账户" :disabled="isDisabled" @change="accountChange" />
            </el-form-item>
          </el-col>
          <el-col :md="12" :lg="8" :xl="6">
            <el-form-item label="开户银行" prop="开户银行">
              <!--              <el-input v-if="isDisabled" v-model="infoForm.开户银行" :disabled="isDisabled"></el-input>-->
              <Bank v-model="infoForm.开户银行" :disabled="isDisabled || infoForm.收款账户 === '1'" @change="bankChange" />
            </el-form-item>
          </el-col>
          <el-col :md="12" :lg="8" :xl="6">
            <el-form-item label="开户银行行号" prop="开户银行行号">
              <el-input v-model="infoForm.开户银行行号" :disabled="true" placeholder="请输入" />
            </el-form-item>
          </el-col>
          <el-col :md="12" :lg="8" :xl="6">
            <el-form-item label="户名" prop="户名">
              <el-input v-model="infoForm.户名" :disabled="isDisabled || infoForm.收款账户 === '1'" placeholder="请输入" />
            </el-form-item>
          </el-col>
          <el-col :md="12" :lg="8" :xl="6">
            <el-form-item label="银行账号" prop="银行账号">
              <el-input v-model="infoForm.银行账号" :disabled="isDisabled || infoForm.收款账户 === '1'" placeholder="请输入" />
            </el-form-item>
          </el-col>
          <el-col :md="12" :lg="8" :xl="6">
            <el-form-item label="联系电话" prop="联系电话">
              <el-input v-model="infoForm.联系电话" :disabled="isDisabled || infoForm.收款账户 === '1'" placeholder="请输入" />
            </el-form-item>
          </el-col>
          <el-col :md="!showStaging ? 24 : 12" :lg="!showStaging ? 24 : 8" :xl="!showStaging ? 24 : 6">
            <el-form-item label="联系地址" prop="联系地址">
              <el-input v-model="infoForm.联系地址" :disabled="isDisabled || editAccount" placeholder="请输入" />
            </el-form-item>
          </el-col>
          <el-col v-if="showStaging" :md="12" :lg="8" :xl="6">
            <el-form-item label="是否暂存" prop="是否暂存">
              <el-switch v-model="infoForm.是否暂存" :disabled="isDisabled || editAccount" />  {{ infoForm.是否暂存 ? '是' : '否' }}
            </el-form-item>
          </el-col>
          <el-col :md="24" :lg="24" :xl="24">
            <el-form-item label="备注" prop="备注">
              <el-input v-model="infoForm.备注" type="textarea" :rows="2" resize="none" :disabled="isDisabled || editAccount" placeholder="请输入" />
            </el-form-item>
          </el-col>
        </el-row>
        <BaseInfo v-else :options="options" :info="infoForm" />
      </div>
    </div>
  </section>
</template>

<script>
import Bank from '@/components/Select/Bank'
import PaymentAccount from '@/components/Select/PaymentAccount'
import BaseInfo from '@/components/BaseInfo'

export default {
  name: 'ApplyInfo',
  components: {
    Bank,
    PaymentAccount,
    BaseInfo
  },
  mixins: [],
  props: {
    info: {
      type: Object,
      default: () => {
        return {}
      }
    },
    isDisabled: {
      type: Boolean,
      default: () => { return false }
    },
    isEdit: {
      type: Boolean,
      default: () => { return false }
    },
    showStaging: {
      type: Boolean,
      default: () => { return true }
    },
    //  只编辑账户相关信息
    editAccount: {
      type: Boolean,
      default: () => { return false }
    }
  },
  data() {
    return {
      options: [
        { label: '收款账户', key: '收款账户' },
        { label: '开户银行', key: '开户银行' },
        { label: '开户银行行号', key: '开户银行行号' },
        { label: '户名', key: '户名' },
        { label: '银行账号', key: '银行账号' },
        { label: '联系电话', key: '联系电话' },
        { label: '联系地址', key: '联系地址' },
        { label: '是否暂存', key: '是否暂存' },
        { label: '备注', key: '备注' }
      ]
    }
  },
  computed: {
    infoForm: function() {
      return this.info
    }
  },
  watch: {},
  created() {
  },
  mounted() {
  },
  methods: {
    //  收款账户改变
    accountChange(v) { console.log(v) },
    //  银行改变
    bankChange(v) {
      this.infoForm.开户银行行号 = 'YH0001024'
    }
  }
}
</script>

<style scoped>

</style>
