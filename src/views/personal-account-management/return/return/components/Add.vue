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
              <el-form-item label="姓名" prop="name">
                <el-input v-model="searchForm.name" placeholder="请输入" />
              </el-form-item>
            </el-col>
            <el-col :md="12" :lg="8" :xl="6">
              <el-form-item label="证件号码" prop="certificate">
                <el-input v-model="searchForm.certificate" placeholder="请输入" />
              </el-form-item>
            </el-col>
            <el-col :md="12" :lg="8" :xl="6">
              <el-form-item label="单位编码" prop="dwcode">
                <el-input v-model="searchForm.dwcode" placeholder="请输入" />
              </el-form-item>
            </el-col>
            <el-col :md="12" :lg="8" :xl="6">
              <el-form-item label="单位名称" prop="dwname">
                <el-input v-model="searchForm.dwname" placeholder="请输入" />
              </el-form-item>
            </el-col>
            <el-col :md="12" :lg="8" :xl="6">
              <el-form-item label="银行账户" prop="yhzh">
                <el-input v-model="searchForm.yhzh" placeholder="请输入" />
              </el-form-item>
            </el-col>
            <el-col :md="12" :lg="8" :xl="6">
              <el-form-item label="银行户名" prop="yhhm">
                <el-input v-model="searchForm.yhhm" placeholder="请输入" />
              </el-form-item>
            </el-col>

            <el-col :md="12" :lg="8" :xl="6">
              <SelectForm
                :search-form="searchForm"
                :options="fbfsOptions"
                label-name="label"
                value-name="value"
                form-label="发布方式"
                form-prop="fbfs"
              />
            </el-col>
            <el-col :md="12" :lg="8" :xl="6">
              <SelectForm
                :search-form="searchForm"
                :options="bfdxlxOptions"
                label-name="label"
                value-name="value"
                form-label="拨付对象类型"
                form-prop="bfdxlx"
              />
            </el-col>
            <el-col :md="12" :lg="8" :xl="6">
              <SelectForm
                :search-form="searchForm"
                :options="fhlxOptions"
                label-name="label"
                value-name="value"
                form-label="返还类型"
                form-prop="fhlx"
              />
            </el-col>
            <el-col :md="12" :lg="8" :xl="6">
              <SelectForm
                :search-form="searchForm"
                :options="jxbzOptions"
                label-name="label"
                value-name="value"
                form-label="计息标志"
                form-prop="jxbz"
              />
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
        name: '',
        certificate: '',
        dwcode: '',
        dwname: '',
        yhzh: '',
        yhhm: '',
        fbfs: '',
        bfdxlx: '',
        fhlx: '',
        jxbz: ''
      },

      fbfsOptions: [
        {
          value: '全部',
          lable: '1'
        }
      ],
      bfdxlxOptions: [
        {
          value: '全部',
          lable: '1'
        }
      ],
      fhlxOptions: [
        {
          value: '全部',
          lable: '1'
        }
      ],
      jxbzOptions: [
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
