<template>
  <form-dialog :title="dialogTitle" :is-show="isDialogVisible" @update:isShow="isShow" @resetForm="resetForm">
    <table-items
      :item-datas="itemsData"
      :form-datas="detailData"
    />
    <span slot="footer" class="dialog-footer">
      <el-button @click="close">关闭</el-button>
    </span>
  </form-dialog>
</template>

<script>
import TableItems from '@/views/components/PageLayers/table-items'
export default {
  components: {
    TableItems
  },
  props: {
    dialogTitle: {
      type: String,
      default: ''
    },
    isDialogVisible: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      itemsData: [
        [
          { label: '省份', prop: '省份' },
          { label: '区县', prop: '区县' },
          { label: '异地类型', prop: '异地类型' }
        ],
        [
          { label: '医疗机构级别', prop: '医疗机构级别' },
          { label: '医疗机构等级', prop: '医疗机构等级' },
          { label: '医疗机构类别', prop: '医疗机构类别' }
        ],
        [
          { label: '审核标志', prop: '审核标志' },
          { label: '异地医疗机构名称', prop: '异地医疗机构名称', colspan: 3 }
        ],
        [
          { label: '地址', prop: '地址', colspan: 5 }
        ]

      ],
      detailData: {
        '省份': '湖南',
        '区县': '长沙',
        '异地医疗机构名称': '湘雅',
        '医疗机构级别': '1',
        '医疗机构等级': '1',
        '医疗机构类别': '1',
        '异地类型': '1',
        '地址': '长沙',
        '审核标志': '是'
      }
    }
  },
  watch: {},
  methods: {
    close() {
      this.$emit('update:isShow', false)
    },
    isShow(v) {
      this.$emit('update:isShow', v)
    },
    resetForm() {
      this.$emit('update:isShow', false)
    }
  }

}
</script>

<style lang="scss" scoped>

</style>

