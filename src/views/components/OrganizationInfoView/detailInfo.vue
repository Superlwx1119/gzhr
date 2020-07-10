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
          { label: '邮政编码', prop: 'xxx', colspan: 2 },
          { label: '单位地址', prop: 'xxx', colspan: 2 },
          { label: '联系email', prop: 'xxx', colspan: 2 }
        ],
        [
          { label: '法人编码', prop: 'xxx', colspan: 2 },
          { label: '单位简称', prop: 'xxx', colspan: 2 },
          { label: '单位合同编号', prop: 'xxx', colspan: 2 }
        ],
        [
          { label: '联系人', prop: 'xxx', colspan: 2 },
          { label: '联系人手机', prop: 'xxx', colspan: 2 },
          { label: '办公电话', prop: 'xxx', colspan: 2 }
        ],
        [
          { label: '分管领导姓名', prop: 'xxx', colspan: 2 },
          { label: '分管领导职务', prop: 'xxx', colspan: 2 },
          { label: '分管领导电话', prop: 'xxx', colspan: 2 }
        ],
        [
          { label: '人事负责人姓名', prop: 'xxx', colspan: 2 },
          { label: '人事负责人职务', prop: 'xxx', colspan: 2 },
          { label: '人事负责人电话', prop: 'xxx', colspan: 2 }
        ],
        [
          { label: '经办人员姓名', prop: 'xxx', colspan: 2 },
          { label: '经办人员职务', prop: 'xxx', colspan: 2 },
          { label: '经办人员电话', prop: 'xxx', colspan: 2 }
        ],
        [
          { label: '审核人员姓名', prop: 'xxx', colspan: 2 },
          { label: '审核人员职务	', prop: 'xxx', colspan: 2 },
          { label: '审核人员电话	', prop: 'xxx', colspan: 2 }
        ],
        [
          { label: '批准成立部门', prop: 'xxx', colspan: 2 },
          { label: '批准成立日期', prop: 'xxx', colspan: 2 },
          { label: '成立日期', prop: 'xxx', colspan: 2 }
        ],
        [
          { label: '备注', prop: 'xxx', colspan: 8 }
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
