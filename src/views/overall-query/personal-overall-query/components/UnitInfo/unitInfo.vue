<!-- 所在单位信息 -->
<template>
  <div class="box" style="height: auto">
    <div class="box-body" style="padding-right: 0;">
      <table-items
        :item-datas="itemsDatas2"
        :form-datas="formsDatas2"
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
  data() {
    return {
      itemsDatas2: [
        [
          { label: '单位名称', prop: 'xxx', colspan: '3' },
          { label: '单位编号', prop: 'xxx' },
          { label: '单位类型', prop: 'xxx' }
        ],
        [
          { label: '联系电话', prop: 'xxx' },
          { label: '联系人手机', prop: 'xxx' },
          { label: '联系人邮箱 ', prop: 'xxx' },
          { label: '隶属关系 ', prop: 'xxx' }
        ],
        [
          { label: '特单位类型', prop: 'xxx' },
          { label: '经济类型 ', prop: 'xxx' },
          { label: '邮政编码 ', prop: 'xxx' },
          { label: '法人代表姓名 ', prop: 'xxx' }
        ],
        [
          { label: '法人代表身份证 ', prop: 'xxx' },
          { label: '主管部门或总机构  ', prop: 'xxx' },
          { label: '所属行政区  ', prop: 'xxx' },
          { label: '工商执照编号  ', prop: 'xxx' }
        ],
        [
          { label: '工商执照发照日期  ', prop: 'xxx' },
          { label: '工商执照发招期限   ', prop: 'xxx' },
          { label: '统一组织机构代码   ', prop: 'xxx' },
          { label: '批准成立日期   ', prop: 'xxx' }
        ],
        [
          { label: '税号 ', prop: 'XXX' },
          { label: '通讯地址', prop: 'xxx', colspan: 3 }
        ]
      ],
      formsDatas2: {
        xxx: 'xxx'
      }}
  }

}
</script>
