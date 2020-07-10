<template>
  <div class="box" style="height: auto">
    <div class="box-body" style="padding-right: 0;">
      <table-items
        :item-datas="itemsDatas"
        :form-datas="formsDatas"
      />
    </div>
  </div>
</template>

<script>
import TableItems from '@/views/components/PageLayers/table-items'
export default {
  components: {
    TableItems
  },
  props: {

  },
  data() {
    return {
      itemsDatas: [
        [
          { label: '姓名', prop: 'xxx', colspan: 1 },
          { label: '身份证号', prop: 'xxx', colspan: 1 }
        ],
        [
          { label: '单位名称', prop: 'xxx', colspan: 3 }
        ],
        [
          { label: '处分类型', prop: 'xxx', colspan: 1 },
          { label: '处分名称', prop: 'xxx', colspan: 1 }
        ],
        [
          { label: '批准日期', prop: 'xxx', colspan: 1 },
          { label: '批准机关', prop: 'xxx', colspan: 1 }
        ],
        [
          { label: '处分原因', prop: 'xxx', colspan: 3 }
        ],
        [
          { label: '处分期(月)', prop: 'xxx', colspan: 1 },
          { label: '期满日期', prop: 'xxx', colspan: 1 }
        ],
        [
          { label: '监察机关标识', prop: 'xxx', colspan: 1 },
          { label: '撤销日期', prop: 'xxx', colspan: 1 }
        ],
        [
          { label: '撤销原因', prop: 'xxx', colspan: 3 }
        ],
        [
          { label: '备注', prop: 'xxx', colspan: 3 }
        ]

      ],
      formsDatas: {
        xxx: 'xxx'
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
