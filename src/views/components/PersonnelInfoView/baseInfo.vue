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
          { label: '证件类型', prop: 'xxx', colspan: 1 },
          { label: '证件号码', prop: 'xxx', colspan: 1 }
        ],
        [
          { label: '出生日期', prop: 'xxx', colspan: 1 },
          { label: '性别', prop: 'xxx', colspan: 1 },
          { label: '人员类型', prop: 'xxx', colspan: 1 }
        ],
        [
          { label: '现工作单位', prop: 'xxx', colspan: 1 },
          { label: '参加工作日期	', prop: 'xxx', colspan: 1 },
          { label: '', prop: 'a', colspan: 2, rowspan: 8, labelHidden: true }
        ],
        [
          { label: '籍贯', prop: 'xxx', colspan: 1 },
          { label: '民族', prop: 'xxx', colspan: 1 }
        ],
        [
          { label: '部门', prop: 'xxx', colspan: 1 },
          { label: '政治面貌', prop: 'xxx', colspan: 1 }
        ],
        [
          { label: '学历', prop: 'xxx', colspan: 3 }
        ],
        [
          { label: '岗位信息', prop: 'xxx', colspan: 3 }
        ],
        [
          { label: '特殊专技人员', prop: 'xxx', colspan: 3 }
        ],
        [
          { label: '职业资格', prop: 'xxx', colspan: 3 }
        ],
        [
          { label: '专长', prop: 'xxx', colspan: 3 }
        ],
        [
          { label: '港澳台侨属', prop: 'xxx', colspan: 1 },
          { label: '专技人员类别', prop: 'xxx', colspan: 1 },
          { label: '', prop: 'b', colspan: 2, labelHidden: true }
        ],
        [
          { label: '婚姻状况', prop: 'xxx', colspan: 1 },
          { label: '健康状况', prop: 'xxx', colspan: 1 },
          { label: '户口所在地', prop: 'xxx', colspan: 1 }
        ],
        [
          { label: '曾用名', prop: 'xxx', colspan: 1 },
          { label: '国籍', prop: 'xxx', colspan: 1 },
          { label: '档案所在地', prop: 'xxx', colspan: 1 }
        ],
        [
          { label: '联系人姓名', prop: 'xxx', colspan: 1 },
          { label: '联系电话', prop: 'xxx', colspan: 1 },
          { label: '联系人手机', prop: 'xxx', colspan: 1 }
        ],
        [
          { label: '家庭住址', prop: 'xxx', colspan: 3 },
          { label: '邮编', prop: 'xxx', colspan: 1 }
        ],
        [
          { label: '单位通信地址', prop: 'xxx', colspan: 5 }],
        [
          { label: '简历', prop: 'xxx', colspan: 5 }]
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
