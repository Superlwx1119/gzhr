<template>
  <form-dialog :title="dialogTitle" :is-show="isDialogVisible" @update:isShow="isShow" @resetForm="resetForm">
    <table-items
      :item-datas="columns"
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
    },
    detailData: {
      type: Object,
      default: () => {}
    },
    type: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      institutionColumns: [
        [
          { label: '执业许可证登记号', prop: '执业许可证登记号' },
          { label: '医院名称', prop: '医院名称' },
          { label: '确认状态', prop: '确认状态' }

        ],
        [
          { label: '地址', prop: '地址', colspan: 5 }
        ],
        [
          { label: '医院级别', prop: '医院级别' },
          { label: '医院等级', prop: '医院等级' },
          { label: '医院服务范围', prop: '医院服务范围' }
        ],
        [
          { label: '医院类型', prop: '医院类型' },
          { label: '起始日期', prop: '起始日期' },
          { label: '截止日期', prop: '截止日期' }
        ]
      ],
      confirmInstitutionColumns: [
        [
          { label: '执业许可证登记号', prop: '执业许可证登记号' },
          { label: '医院名称', prop: '医院名称' },
          { label: '更新状态', prop: '更新状态' }
        ],
        [
          { label: '地址', prop: '地址', colspan: 5 }
        ],
        [
          { label: '医院级别', prop: '医院级别' },
          { label: '医院等级', prop: '医院等级' },
          { label: '医院服务范围', prop: '医院服务范围' }
        ],
        [
          { label: '医院类型', prop: '医院类型' },
          { label: '起始日期', prop: '起始日期' },
          { label: '截止日期', prop: '截止日期' }
        ]
      ]
    }
  },
  computed: {
    columns() {
      return this.type === 1 ? this.institutionColumns : this.confirmInstitutionColumns
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

