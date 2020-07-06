<template>
  <form-dialog
    :title="bouncedTitle"
    :is-show="visible"
    new-class="big"
    @update:isShow="updateIsShow"
  >
    <div class="box">
      <div class="box-body">
        <el-form ref="searchForm" :model="searchForm" label-width="105px">
          <el-row :gutter="12">
            <el-col :span="8">
              <el-form-item label="到账日期" prop="date">
                <!-- <el-input v-model="searchForm.date" placeholder="请输入" /> -->
                <el-date-picker
                  v-model="searchForm.date"
                  type="date"
                  placeholder="选择日期"
                />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="缴费种类" prop="jfClass">
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
            <el-col :span="8">
              <el-form-item label="缴费金额" prop="date">
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
        jfjr: ''
      },

      jfClassOptions: [
        {
          value: '失业代扣',
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
