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
              <el-form-item label="机构名称" prop="jgmc">
                <el-input v-model="searchForm.jgmc" placeholder="请输入" />
              </el-form-item>
            </el-col>
            <el-col :md="12" :lg="8" :xl="6">
              <el-form-item label="机构编码" prop="jgbm">
                <el-input v-model="searchForm.jgbm" placeholder="请输入" />
              </el-form-item>
            </el-col>
            <el-col :md="12" :lg="8" :xl="6">
              <el-form-item label="开户银行" prop="khyh">
                <!-- <el-input v-model="searchForm.khyh" placeholder="请输入" /> -->
                <el-select v-model="searchForm.khyh" filterable placeholder="请选择">
                  <el-option
                    v-for="item in khyhoptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  />
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :md="12" :lg="8" :xl="6">
              <el-form-item label="银行账号" prop="yhzh">
                <el-input v-model="searchForm.yhzh" placeholder="请输入" />
              </el-form-item>
            </el-col>
            <el-col :md="12" :lg="8" :xl="6">
              <el-form-item label="银行名称" prop="backName">
                <el-input v-model="searchForm.backName" placeholder="请输入" />
              </el-form-item>
            </el-col>
            <el-col :md="12" :lg="8" :xl="6">
              <el-form-item label="开户名称" prop="khmc">
                <el-input v-model="searchForm.khmc" placeholder="请输入" />
              </el-form-item>
            </el-col>
            <el-col :md="12" :lg="8" :xl="6">
              <el-form-item label="银行行号" prop="khhhh">
                <el-input v-model="searchForm.khhhh" placeholder="请输入" />
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </div>
    </div>
    <span slot="footer" class="dialog-footer">
      <el-button type="primary" @click="ShutDown">取消</el-button>
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
        jgmc: '',
        jgbm: '',
        khyh: '',
        yhzh: '',
        backName: '',
        khmc: '',
        khhhh: ''
      },
      khyhoptions: [{
        value: '1',
        label: '中国银行'
      }]
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
