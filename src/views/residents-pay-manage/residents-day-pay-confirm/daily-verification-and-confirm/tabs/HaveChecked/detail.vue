<template>
  <!-- 城居个人缴费明细-->
  <form-dialog title="城居个人缴费明细" width="1000px" new-class="big" :is-show="visible" @update:isShow="updateIsShow">
    <section class="layer">
      <div class="box">
        <div class="box-body">
          <FormItems :items-datas="itemsDatas" :form-datas="formData">
            <template slot="人员信息1">
              <personal-info v-model="formData.人员信息1" />
            </template>
            <el-button>重置</el-button>
            <el-button type="primary">确认</el-button>
          </FormItems>
        </div>
      </div>
    </section>
    <section class="layer">
      <div class="box">
        <div class="box-header handle">
          <span class="box-title">城居个人缴费明细列表</span>
          <div class="box-tools">
            <el-button type="danger">取消确认</el-button>
          </div>
        </div>
        <div class="box-body">
          <my-table-view :columns="columns" :data="tableData" />
        </div>
      </div>
    </section>
    <span slot="footer" class="dialog-footer">
      <el-button @click="close()">关闭</el-button>
    </span>
  </form-dialog>
</template>

<script>
import PersonalInfo from '@/components/Select/fund-insurance-manage/PersonalInfo'
export default {
  name: '',
  components: { PersonalInfo },
  props: {
    show: { type: Boolean, default: () => false }
  },
  data() {
    return {
      visible: this.show,
      itemsDatas: [
        { label: '人员信息', prop: '人员信息1', type: 'custom' }
      ],
      formData: {},
      columns: [
        { type: 'selection' },
        { label: '序号', type: 'index' },
        { label: '单位编码', prop: 'a' },
        { label: '单位名称', prop: 'b' },
        { label: '证件号码', prop: 'd' },
        { label: '姓名', prop: 'e' },
        { label: '性别', prop: 'e' },
        { label: '人员类别', prop: 'e' },
        { label: '征缴状态', prop: 'e' },
        { label: '费款所属期', prop: 'e' },
        { label: '对应费款所属期', prop: 'e' },
        { label: '应收金额（元）', prop: 'e' }
      ],
      tableData: [1, 2, 3].map(item => {
        return { 'a': 'CAC414288123' + item, 'b': '统筹区' + item, c: 'xxx', d: 'xxx', e: 'xxx', type: '2' }
      })
    }
  },
  computed: {
  },
  watch: {
    show: function(newVal, oldVal) {
      this.visible = this.show
    }
  },
  created() {
  },
  mounted() {
  },
  methods: {
    updateIsShow(v) {
      this.$emit('update:show', v)
    },
    close() {
      this.visible = false
      this.$emit('update:show', false)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
