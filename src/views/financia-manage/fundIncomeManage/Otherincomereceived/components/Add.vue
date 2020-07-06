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
              <el-form-item label="摘要" prop="zy">
                <el-input v-model="searchForm.zy" placeholder="请输入" />
              </el-form-item>
            </el-col>
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
              <el-form-item label="医保区划" prop="ybqhg">
                <!-- <el-input v-model="searchForm.khyh" placeholder="请输入" /> -->
                <el-select v-model="searchForm.khyh" filterable placeholder="请选择">
                  <el-option
                    v-for="item in ybqhgoptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  />
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :md="12" :lg="8" :xl="6">
              <el-form-item label="险种" prop="xz">
                <el-select v-model="searchForm.xz" filterable placeholder="请选择">
                  <el-option
                    v-for="item in xzoptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  />
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :md="12" :lg="8" :xl="6">
              <el-form-item label="资助金额" prop="zzje">
                <el-input v-model="searchForm.backName" placeholder="请输入" />
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
        zy: '',
        date: '',
        ybqhg: '',
        xz: '',
        zzje: ''
      },
      ybqhgoptions: [{
        value: '1',
        label: '中央'
      }],
      xzoptions: [{
        value: '1',
        label: '基本医疗'
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
