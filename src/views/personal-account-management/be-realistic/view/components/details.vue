<template>
  <div>
    <form-dialog :title="title" width="1000px" new-calss="big" :is-show="show" @update:isShow="addIsShow">
      <template>
        <!--  单位注销审核详情-->
        <div>

          <section class="layer layer-query">
            <div class="box">
              <!-- <div class="box-header">
                <span class="box-title">查询条件</span>
              </div> -->
              <div class="box-body query">
                <table-items
                  :item-datas="itemsDatas1"
                  :form-datas="formsDatas"
                />
                <form-items :items-datas="itemsDatas2" :form-datas="seachForm" :is-grid="false" :span="8">
                  <!-- <el-button>重置</el-button>
                  <el-button type="primary" @click="search">查询</el-button> -->
                </form-items>
              </div>
            </div>
          </section>

        </div>
      </template>

      <span slot="footer" class="dialog-footer">
        <el-button @click="cancel">关闭</el-button>
        <el-button type="primary" @click="hold">保存</el-button>
      </span>
    </form-dialog>
  </div>
</template>

<script>
import FormItems from '@/views/components/PageLayers/form-items'
import TableItems from '@/views/components/PageLayers/table-items'
export default {
  name: '',
  components: { FormItems, TableItems },
  mixins: [],
  props: {
    show: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: '审核'
    }
  },
  data() {
    return {
      loading: false,
      seachForm: {
        cxtj: '',
        xm: '',
        zjhm: ''
      },
      formsDatas: {
        xxx: 'xxx'
      },
      itemsDatas1: [
        [
          { label: '姓名', prop: 'xxx' },
          { label: '证件号码', prop: 'xxx' },
          { label: '单位编码', prop: 'xxx' }
        ],
        [
          { label: '单位名称', prop: 'xxx', colspan: 3 },
          { label: '银行账户', prop: 'xxx' }
        ],
        [
          { label: '银行户名', prop: 'xxx' }
        ]
      ],
      itemsDatas2: [
        { label: '发放方式', prop: 'xxx', type: 'select' },
        { label: '拨付对象类型', prop: 'xxx', type: 'select' },
        { label: '返还类型', prop: 'xxx', type: 'select' },
        { label: '计息标志', prop: 'xxx', type: 'select' },
        { label: '账户做实金额', prop: 'xxx', type: 'input' }
      ]

    }
  },
  computed: {},
  watch: {},
  created() {
  },
  mounted() {
  },
  methods: {
    change() {
      console.log(111)
    },
    addIsShow(v) {
      this.$emit('update:show', v)
    },
    //  关闭弹窗
    cancel() {
      this.$emit('update:show', false)
    },
    hold() {
      this.$emit('update:show', false)
    }

  }
}
</script>

<style scoped lang="scss">
.bottomline{
  border-bottom:1px solid red($color: #cf8e43)}
</style>
