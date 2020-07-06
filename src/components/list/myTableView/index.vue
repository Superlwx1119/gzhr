<template>
  <section :class="['pf-table', sectionHeight ]">
    <!-- 表头配置组件 -->
    <div v-if="isConfigheader" class="config-header">
      <el-popover
        placement="bottom"
        width="180"
        trigger="click"
      >
        <div class="check-header">
          <el-checkbox-group v-model="checkList" :min="checboxMin" @change="headerCheckboxChange">
            <el-checkbox
              v-for="(item,index) in defaultCheckList"
              :key="index"
              :label="item.label"
            />
          </el-checkbox-group>
        </div>
        <div slot="reference" type="primary">
          <i class="el-icon-set-up" />
        </div>
      </el-popover>
    </div>
    <!-- 表格 -->
    <el-table
      ref="pf-table"
      v-bind="$attrs"
      :border="border"
      :default-sort="defaultSort"
      :height="height"
      style="width: 100%"
      :highlight-current-row="highlightCurrentRow"
      @row-click="rowClick"
      @selection-change="handleSelectionChange"
      @sort-change="sortChangeEvent"
      @expand-change="expandChange"
    >
      <!-- Table 展开行功能 这里仅仅是一个插槽，请在业务页面自行编写 -->
      <template v-if="isExpand">
        <el-table-column type="expand">
          <template slot-scope="props">
            <slot name="expand" :row="props.row">
              <!-- <table-items
                :item-datas="expandItems"
                :form-datas="props.row"
              /> -->
              <form-items
                :is-grid="false"
                :item-span="6"
                :is-table-expend="true"
                :items-datas="expandItems"
                :form-datas="props.row"
              />
            </slot>
          </template>
        </el-table-column>
      </template>

      <template v-for="item in columnsNew">
        <!-- 多选框 -->
        <el-table-column
          v-if="item.type == 'selection'"
          :key="item.type"
          type="selection"
          width="55"
          :align="item.align || 'center'"
          :fixed="item.fixed"
        />

        <!-- index -->
        <el-table-column
          v-else-if="item.type == 'index'"
          :key="item.type"
          type="index"
          :width="item.width || '55'"
          :label="item.label"
          :align="item.align || 'center'"
          :fixed="item.fixed"
        />

        <!-- 操作栏 -->
        <el-table-column
          v-else-if="item.type == 'operation'"
          :key="item.type"
          :align="item.align || 'center'"
          :label="item.label || ''"
          :width="item.width || ''"
          :fixed="item.fixed"
        >
          <template slot-scope="scope">
            <slot name="operation" :row="scope.row" :rowIndex="scope.$index" />
          </template>
        </el-table-column>

        <!-- custom 自定义列表 -->
        <el-table-column
          v-else-if="item.type == 'custom'"
          :key="item.label + item.slotName"
          :prop="item.prop"
          :align="item.align || 'center'"
          :sortable="item.sortable?'custom':false"
          :label="item.label || ''"
          :width="item.width || ''"
          :min-width="item.minWidth || '0'"
          :show-overflow-tooltip="item.showOverflowToolTip ? true: false"
        >
          <template slot-scope="scope">
            <slot :name="item.slotName ? item.slotName : 'custom'" :row="scope.row" :rowIndex="scope.$index">
              <span>{{ scope.row[item.prop] }}</span>
            </slot>
          </template>
        </el-table-column>

        <!-- 正常 -->
        <el-table-column
          v-else
          :key="item.label + item.prop"
          :prop="item.prop"
          :label="item.label || ''"
          :align="item.align || 'center'"
          :sortable="item.sortable?'custom':false"
          :width="item.width || ''"
          :min-width="item.minWidth || '0'"
          :show-overflow-tooltip="true"
        >
          <template slot-scope="scope">
            <!-- 时间 -->
            <span v-if="item.customProp == 'date'">
              <!-- {{ scope.row[item.prop] | parseTime }} -->
              {{ scope.row[item.prop] | setDate }}
            </span>

            <!-- 自定义时间，日期等等 -->
            <span
              v-else-if="item.customProp == 'mom-date'"
            >{{ scope.row[item.prop] | momentDate(item['format']) }}</span>

            <!-- normal -->
            <span v-else>{{ scope.row[item.prop] || '--' }}</span>
          </template>
        </el-table-column>
      </template>
    </el-table>
  </section>
</template>

<script>
// import TableItems from '@/views/components/PageLayers/table-items'
import moment from 'moment'
moment.locale('zh-cn')
import TableExpand from './table-expand'
export default {
  components: {
    // TableItems
  },
  filters: {
    setDate(value) {
      if (value) {
        return moment(value).format('YYYY MM DD HH:mm')
      } else {
        return ''
      }
    }
  },
  mixins: [TableExpand],
  props: {
    columns: {
      type: Array,
      default: () => []
    },
    height: {
      type: [Number, String],
      default: '100%'
    },
    multipleSelection: {
      type: Array,
      default: () => []
    },
    loading: {
      type: Boolean,
      default: false
    },
    border: {
      type: Boolean,
      default: true
    },
    defaultSort: {
      type: Object,
      default() {
        return {
          order: '', // ascending, descending
          prop: ''
        }
      }
    },
    haveExpand: { type: Boolean, default: false }, // Table 展开行功能
    checboxMin: { type: [String, Number], default: 5 }, // 头部显示的最小数量
    isConfigheader: { type: Boolean, default: false }, // 是否显示编辑表头按钮
    highlightCurrentRow: { type: Boolean, default: true }, // 当前行高亮
    firstHighlight: { type: Boolean, default: false }, //  默认第一行高亮
    havePagination: { type: Boolean, default: true } // 表格下是否有分页
  },
  data() {
    return {
      columnsNew: JSON.parse(JSON.stringify(this.columns)), // 拿到表头信息之后先赋值
      checkList: this.columns.map(data => data.label), // 获取默认选中项
      defaultCheckList: this.columns.filter(item => { // 默认全部的表头内容
        if (item.type === 'custom' || !item.type) {
          return item
        }
      })
    }
  },
  computed: {
    isExpand() {
      if (this.haveExpand || this.columns.length > this.maxCloumns) {
        return true
      } else {
        return false
      }
    },
    sectionHeight() {
      if (this.height === '100%' && this.havePagination) {
        return 'have-pagination-height'
      } else if (this.height === 'auto') {
        return 'height-auto'
      } else {
        return 'height-100'
      }
    }
  },
  watch: {
    columns() {
      this.columnsNew = this.columns
    }
  },
  mounted() {
    //  设置首行高亮
    this.$nextTick(() => {
      if (this.firstHighlight) {
        this.$refs['pf-table'].setCurrentRow(this.$attrs.data[0])
      }
    })
  },
  methods: {
    headerCheckboxChange(val) { // 监听checkbox选择项
      this.columnsNew = this.columns.filter(a => {
        return val.indexOf(a.label) >= 0
      })
    },
    handleSelectionChange(val) {
      this.$emit('update:multipleSelection', val)
    },
    sortChangeEvent(column) {
      this.$emit('sortChangeEvent', {
        prop: column.prop,
        order: column.order
      })
    },
    clearSort() {
      console.log('clearSort')
      this.$refs.multipleTable.clearSort()
    },
    rowClick(row, column, cell) {
      this.$emit('rowClick', { row, column, cell })
    },
    expandChange(row, expandedRows) {
      if (expandedRows.length > 0) {
        this.$refs['pf-table'].setCurrentRow(row)
      } else {
        this.$refs['pf-table'].setCurrentRow()
      }
    }
  }
}
</script>
<style lang="scss">
  .table-list .cell .el-dropdown{
    font-size: 12px;
    color: #068bff;
    cursor: pointer;
  }
  .mini-dropdown-item.el-dropdown-menu__item{
    font-size: 12px;
  }
  .gray-bg td.el-table__expanded-cell {
    background: #f8f8f8;
  }
  .gray-bg .el-table__expanded-cell:hover {
    background-color: #f8f8f8 !important;
  }
  .el-table--enable-row-transition .el-table__body td.el-table__expanded-cell {
    -webkit-transition: none;
    transition: none;
  }
  .el-table td div.el-tabs {
    background: #fff;
    padding: 15px;
    border: 1px solid rgb(244, 244, 244);
  }
  .pf-table {
    /* 添加配置表头按钮时添加的 */
    position: relative;

    .el-table {
      min-height: 150px !important;
    }
    .is-scrolling-none{
      min-height: 100px !important;
    }
  }
  .height-auto {
    height: auto !important;
  }
  .have-pagination-height{
    height: calc(100% - 34px) !important;
  }
  .height-100 {
    height: 100% !important;
  }
  .pf-table > .table-list > .el-table > div > table > tbody > tr > td.el-table__expanded-cell,
  .pf-table > .table-list > .el-table > div > table > tbody > tr > td.el-table__expanded-cell:hover {
    background: #fbfbfb !important;
    padding: 20px 30px;
  }
/* 可配置表头样式 */
.config-header{
    position: absolute;
    right: -1px;
    top: -1px;
    font-size: 24px;
    z-index: 999;
    color: #fff;
    background-color: #49A1F9;
    cursor: pointer;
    /deep/.el-popper[x-placement^="bottom"] {
    margin-top: 12px;
    height: 200px;
    overflow-y: auto;

}
}
.check-header{
  /deep/.el-checkbox-group .el-checkbox+.el-checkbox{
    margin-left: 0;
  }
  .el-checkbox-group{

  }
}
</style>
