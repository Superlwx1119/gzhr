<template>
  <section class="layer">
    <div class="box">
      <div class="box-header">
        <span class="box-title">代办信息</span>
      </div>
      <div class="box-body">
        <el-row v-if="isEdit" :gutter="10">
          <el-col :md="12" :lg="8" :xl="6">
            <el-form-item label="姓名" prop="姓名">
              <el-input v-model="infoForm.姓名" :disabled="isDisabled" placeholder="请输入" />
            </el-form-item>
          </el-col>
          <el-col :md="12" :lg="8" :xl="6">
            <el-form-item label="证件类型" prop="证件类型">
              <CardType v-model="infoForm.证件类型" :disabled="isDisabled" />
            </el-form-item>
          </el-col>
          <el-col :md="12" :lg="8" :xl="6">
            <el-form-item label="证件号码" prop="证件号码">
              <el-input v-model="infoForm.证件号码" :disabled="isDisabled" placeholder="请输入" />
            </el-form-item>
          </el-col>
          <el-col :md="12" :lg="8" :xl="6">
            <el-form-item label="联系电话" prop="联系电话">
              <el-input v-model="infoForm.联系电话" :disabled="isDisabled" placeholder="请输入" />
            </el-form-item>
          </el-col>
          <el-col :md="12" :lg="8" :xl="6">
            <el-form-item label="联系地址" prop="联系地址">
              <el-input v-model="infoForm.联系地址" :disabled="isDisabled" placeholder="请输入" />
            </el-form-item>
          </el-col>
          <el-col :md="12" :lg="8" :xl="6">
            <el-form-item label="关系" prop="关系">
              <Relationship v-model="infoForm.关系" :disabled="isDisabled" />
            </el-form-item>
          </el-col>
        </el-row>
        <BaseInfo v-else :options="options" :info="infoForm" />
      </div>
    </div>
  </section>
</template>

<script>
import Relationship from '@/components/Select/Relationship'
import CardType from '@/components/Select/CardType'
import BaseInfo from '@/components/BaseInfo'

export default {
  name: 'AgentInfo',
  components: {
    Relationship,
    CardType,
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
    }
  },
  data() {
    return {
      options: [
        { label: '姓名', key: '姓名' },
        { label: '证件类型', key: '证件类型' },
        { label: '证件号码', key: '证件号码' },
        { label: '联系电话', key: '联系电话' },
        { label: '联系地址', key: '联系地址' },
        { label: '关系', key: '关系' }
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
  methods: {}
}
</script>

<style scoped>

</style>
