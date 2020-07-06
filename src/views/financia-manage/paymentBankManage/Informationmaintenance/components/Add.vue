<template>
  <form-dialog
    :title="bouncedTitle"
    :is-show="visible"
    width="1000px"
    new-class="big"
    @update:isShow="updateIsShow"
  >
    <div class="box">
      <div class="box-header handle">
        <span class="box-title">基础银行信息维护汇总</span>
        <!-- <div class="box-tools">
          <el-button type="primary" @click="Addnew">新增</el-button>
        </div> -->
      </div>
      <div class="box-body" style="height: 250px;">
        <table class="table-data">
          <tr>
            <td>银行编号</td>
            <td><el-input v-model="addMsg.yhbm" placeholder="请输入内容" /></td>
            <td>银行名称</td>
            <td><el-input v-model="addMsg.yhmc" placeholder="请输入内容" /></td>
            <td>金融机构编码</td>
            <td><el-input v-model="addMsg.jrjgbm" placeholder="请输入内容" /></td>
          </tr>

          <tr>
            <td>邮政编码</td>
            <td><el-input v-model="addMsg.yzbm" placeholder="请输入内容" /></td>
            <td>联系电子邮箱</td>
            <td><el-input v-model="addMsg.dzyx" placeholder="请输入内容" /></td>
            <td />
            <td><el-input v-model="addMsg.value" placeholder="请输入内容" /></td>
          </tr>

          <tr>
            <td>银行类型</td>
            <td colspan="5">
              <el-checkbox v-model="addMsg.clyh">注资处理银行</el-checkbox>
              <el-checkbox v-model="addMsg.zchyh">支出户银行</el-checkbox>
              <el-checkbox v-model="addMsg.lbclyh">零报处理银行</el-checkbox>
            </td>
          </tr>

          <tr>
            <td>地址</td>
            <td colspan="5">
              <el-input
                v-model="addMsg.dz"
                type="textarea"
                :rows="2"
                placeholder="请输入内容"
              />
            </td>
          </tr>
        </table>
      </div>

      <div class="box-header handle">
        <span class="box-title">注资拨付银行设置</span>
      </div>
      <div class="box-body" style="height:250px;">
        <table class="table-data">
          <tr>
            <td>注资处理银行</td>
            <td><el-select v-model="addMsg.zzclyhTwo" filterable placeholder="请选择">
              <el-option
                v-for="item in zzclyhoptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select></td>
            <td>注资处理银行编码</td>
            <td><el-input v-model="addMsg.zzyhbm" placeholder="请输入内容" /></td>

          </tr>

          <tr>
            <td>支出户银行</td>
            <td><el-select v-model="addMsg.zchyhTwo" filterable placeholder="请选择">
              <el-option
                v-for="item in zchyhoptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select></td>
            <td>支出户银行编码</td>
            <td><el-input v-model="addMsg.zchyhcode" placeholder="请输入内容" /></td>

          </tr>

          <tr>
            <td>零报处理银行</td>
            <td><el-select v-model="addMsg.lbclyh" filterable placeholder="请选择">
              <el-option
                v-for="item in lbclyhoptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select></td>
            <td>零报处理银行编码</td>
            <td><el-input v-model="addMsg.lbclyhcode" placeholder="请输入内容" /></td>
          </tr>
        </table>
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
      addMsg: {
        yhbm: '',
        yhmc: '',
        jrjgbm: '',
        yzbm: '',
        dzyx: '',
        value: '',
        clyh: '',
        zchyh: '',
        lbclyh: '',
        dz: '',
        zzclyh: '',
        zzyhbm: '',
        zzclyhTwo: '',
        zchyhcode: '',
        zchyhTwo: '',
        lbclyhcode: ''

      },
      zzclyhoptions: [
        {
          value: '中国银行',
          lable: '中国银行'
        }
      ],
      zchyhoptions: [
        {
          value: '中国银行',
          lable: '中国银行'
        }
      ],
      lbclyhoptions: [
        {
          value: '中国银行',
          lable: '中国银行'
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
