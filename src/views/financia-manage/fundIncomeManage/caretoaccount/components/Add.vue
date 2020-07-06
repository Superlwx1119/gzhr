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

            <el-col :md="12" :lg="8" :xl="6">
              <SelectForm
                :search-form="searchForm"
                :options="DangerPlantedOptions"
                label-name="label"
                value-name="value"
                form-label="险种"
                form-prop="DangerPlanted"
              />
            </el-col>
            <el-col :md="12" :lg="8" :xl="6">
              <SelectForm
                :search-form="searchForm"
                :options="classtypeOptions"
                label-name="label"
                value-name="value"
                form-label="类型"
                form-prop="classtype"
              />
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
import SelectForm from '@/components/Select/FormComponents/SelectForm'
export default {
  components: {
    SelectForm
  },
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
        DangerPlanted: '',
        classtype: '',
        jfjr: ''
      },

      DangerPlantedOptions: [
        {
          value: '全部',
          lable: '1'
        }
      ],
      classtypeOptions: [
        {
          value: '全部',
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
