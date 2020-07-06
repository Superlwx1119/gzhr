<template>
  <form-dialog
    :title="dialogTitle"
    :is-show="isDialogVisible"
    size="big"
    @update:isShow="isShow"
  >
    <!-- <normal-layer title-name="个人账户注资汇总确认列表">
      <div class="box" style="height: auto">
        <box-title title-name="单位信息" />
        <div class="box-body" style="padding-right: 0;">
          <table-items
            :item-datas="itemsDatas"
            :form-datas="formsDatas"
          />
        </div>
      </div>
      <my-table-view
        :data="tableData"
        :columns="columns"
      />

    </normal-layer> -->
    <section class="layer">
      <div class="box">
        <div class="box-body">
          <table-items
            :item-datas="itemsDatas"
            :form-datas="formsDatas"
          />
        </div>
      </div>
    </section>
    <section class="layer layer-result">
      <div class="box">
        <div class="box-header handle">
          <span class="box-title">查询结果</span>
          <div class="box-tools" />
        </div>
        <div class="box-body result">
          <my-table-view
            :data="tableData"
            :columns="columns"
          />
          <Pagination />
        </div>
      </div>
    </section>

  </form-dialog>
</template>
<script>
// import NormalLayer from '@/views/components/PageLayers/normalLayer'
import TableItems from '@/views/components/PageLayers/table-items'
// import BoxTitle from '@/views/components/PageLayers/box-title'
export default {
  components: {
    // NormalLayer,
    TableItems
    // BoxTitle
  },
  model: {
    prop: 'isDialogVisible',
    event: 'closeAll'
  },
  props: {
    isDialogVisible: {
      type: Boolean,
      default: false
    },
    dialogTitle: {
      type: String,
      default: '标题'
    }
  },
  data() {
    return {
      itemsDatas: [
        [
          { label: '受理号', prop: 'bb' },
          { label: '转移性质', prop: 'bb' },
          { label: '转入\转出地', prop: 'bb' },
          { label: '职工医保缴费月数', prop: 'bb' }
        ],
        [
          { label: '参保开始时间', prop: 'bb' },
          { label: '参保结束时间', prop: 'bb' },
          { label: '待遇开始时间', prop: 'bb' },
          { label: '待遇结束时间 ', prop: 'bb' }
        ],
        [
          { label: '实际缴费月数', prop: 'bb' },
          { label: '异地（实际）缴费月数', prop: 'bb' },
          { label: '异地（视同）缴费月数', prop: 'bb' },
          { label: '军人服现役年限 ', prop: 'bb' }
        ],
        [
          { label: '军人配偶医保', prop: 'bb' },
          { label: '个账转移方式', prop: 'bb' },
          { label: '转移金额', prop: 'bb' },
          { label: '经办人 ', prop: 'bb' }
        ],
        [
          { label: '审批人', prop: 'bb' },
          { label: '审批时间', prop: 'bb' }
        ]
      ],
      formsDatas: {
        bb: '--'
      },
      columns: [
        { type: 'index', label: '序号', width: '55px' },
        { prop: 'nameCode', label: '开始年月', align: 'center' },
        { prop: 'nameCode', label: '结束年月', align: 'center' },
        { prop: 'code', label: '医疗保障类型', align: 'center' },
        { prop: 'nameCode', label: '医疗保障号', align: 'center' },
        { prop: 'nameCode', label: '缴费性质', align: 'center' },
        { prop: 'nameCode', label: '缴费月数', align: 'center' },
        { prop: 'nameCode', label: '经办机构名称', align: 'center' },
        { prop: 'code', label: '经办机构行政区代码', align: 'center' },
        { prop: 'nameCode', label: '备注', minWidth: '200px', align: 'center' }
      ],
      tableData: [
        { name: 'xxx', code: 'xxx', nameCode: 'xxx' }
      ]
    }
  },
  methods: {
    // resetForm() {
    //   this.$emit('closeAll', false)
    //   this.$refs.ruleFrom.elForm.resetFields()
    // },
    closeDialog() {
      this.$emit('closeAll', false)
    },
    saveEvent() {
      this.$msgSuccess('保存成功')
      this.$emit('closeAll', false)
    },
    // },
    isShow(v) {
      this.$emit('closeAll', false)
    }
  }
}
</script>

<style lang="scss">
.box-body {
  height: 100%;
}
.detail-info {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  margin-left: 16px;
  & > div {
    margin-right: 30px;
    label {
      color: #636363;
    }
    span {
      color: #101010;
    }
  }
}
</style>
