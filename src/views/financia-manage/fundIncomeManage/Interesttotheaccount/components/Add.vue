<template>
  <form-dialog
    :title="bouncedTitle"
    :is-show="visible"
    width="1000px"
    new-class="big"
    @update:isShow="updateIsShow"
  >
    <div class="box">
      <div class="box-body">
        <el-form ref="searchForm" :model="searchForm" label-width="105px">
          <el-row :gutter="12">
            <el-col :md="12" :lg="8" :xl="6">
              <el-form-item label="到账日期" prop="date">
                <!-- <el-input v-model="searchForm.date" placeholder="请输入" /> -->
                <el-date-picker
                  v-model="searchForm.date"
                  type="date"
                  placeholder="选择日期"
                />
              </el-form-item>
            </el-col>
            <el-col :md="12" :lg="8" :xl="6">
              <el-form-item label="账号类型" prop="jfClass">
                <el-select v-model="searchForm.jfClass" placeholder="请选择">
                  <el-option
                    v-for="item in jfClassOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  />
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :md="12" :lg="8" :xl="6">
              <el-form-item label="付款银行" prop="fkyh">
                <el-select v-model="searchForm.fkyh" placeholder="请选择">
                  <el-option
                    v-for="item in fkyhOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  />
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :md="12" :lg="8" :xl="6">
              <el-form-item label="利息种类" prop="lxzl">
                <el-select v-model="searchForm.lxzl" placeholder="请选择">
                  <el-option
                    v-for="item in lxzlOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  />
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :md="12" :lg="8" :xl="6">
              <el-form-item label="金额" prop="date">
                <el-input v-model="searchForm.jfjr" placeholder="请输入" />
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </div>
    </div>
    <span slot="footer" class="dialog-footer">
      <el-button type="primary" @click="ShutDown">关闭</el-button>
      <el-button type="primary" @click="save">保存</el-button>
    </span>
  </form-dialog>
</template>

<script>
export default {
  components: {},
  mixins: [],
  props: {
    show: { type: Boolean, default: () => false },
    bouncedTitle: { type: String, default: '' }
  },
  data() {
    return {
      visible: this.show,
      searchForm: {
        date: '',
        jfClass: '',
        jfjr: '',
        fkyh: '',
        lxzl: ''
      },

      jfClassOptions: [
        {
          value: '收入户',
          lable: '1'
        }
      ],
      fkyhOptions: [
        {
          value: '全部',
          lable: '1'
        }
      ],
      lxzlOptions: [
        {
          value: '定期',
          lable: '1'
        }
      ]
    }
  },
  computed: {},
  watch: {
    show: function(newVal, oldVal) {
      this.visible = this.show
    }
  },
  created() {},
  mounted() {},
  methods: {
    updateIsShow(v) {
      this.$emit('update:show', v)
    },
    ShutDown() {
      this.visible = false
      // this.$emit('update:show', false)
    },
    save() {
      this.visible = false
      this.$emit('update:show', false)
    }
  }
}
</script>

<style scoped>
</style>
