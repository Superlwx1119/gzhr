<!-- 简单表单组件
该组件只适用两种情况： 1：弹框固定： span=8， 2.栅格 :md="12" :lg="8" :xl="6"
注意： itemsDatas的prop 对于的是 fromDatas的数据字段
-->
<template>
  <el-form
    ref="elForm"
    v-bind="this.$attrs"
    :label-width="labelWidth"
    :class="isTableExpend ? 'table-expend-from-box' : ''"
    v-on="$listeners"
  >
    <el-row :gutter="12">
      <el-col
        v-for="item in itemsDatas"
        v-show="!item.hidden"
        :key="item.label + item.prop"
        :md="item.md || md"
        :lg="item.lg || lg"
        :xl="item.xl || xl"
        :span="item.span || span"
      >
        <el-form-item
          :label="item.label"
          :prop="item.prop"
        >
          <template v-if="item.type === 'input'">
            <el-input v-model="formDatas[item.prop]" :disabled="item.disabled" clearable :placeholder="item.placeholder || '请输入'" />
          </template>

          <template v-else-if="item.type === 'number'">
            <el-input v-model.number="formDatas[item.prop]" :disabled="item.disabled" clearable :placeholder="item.placeholder || '请输入'" />
          </template>

          <template v-else-if="item.type === 'textarea'">
            <el-input
              v-model="formDatas[item.prop]"
              :disabled="item.disabled"
              :autosize="item.autosize || false"
              :maxlength="item.maxlength || 200"
              show-word-limit
              type="textarea"
              placeholder="请输入"
            />
          </template>

          <template v-else-if="item.type === 'select'">
            <el-select
              v-model="formDatas[item.prop]"
              :disabled="item.disabled"
              placeholder="请选择"
              :filterable="item.filterable"
              style="width:100%; height: 100%"
            >
              <template v-if="item.options">
                <el-option v-for="obj in item.options" :key="obj.label" :label="obj.label" :value="obj.value" />
              </template>
              <template v-else>
                <el-option label="选项1" value="1" />
                <el-option label="选项2" value="2" />
              </template>
            </el-select>
          </template>

          <template v-else-if="item.type === 'radio'">
            <el-radio-group v-model="formDatas[item.prop]">
              <el-radio
                v-for="obj in item.options"
                :key="item.labelKey ? obj[item.labelKey] : obj.label"
                :label="item.labelKey ? obj[item.labelKey] : obj.label"
              >{{ item.nameKey ? obj[item.nameKey] : obj.name }}</el-radio>
            </el-radio-group>
          </template>

          <template v-else-if="item.type === 'cascader'">
            <el-cascader
              v-model="formDatas[item.prop]"
              :props="{ checkStrictly: true }"
              :options="item.options"
              clearable
              style="width:100%; height: 100%"
            />
          </template>

          <template v-else-if="item.type === 'date'">
            <el-date-picker
              v-model="formDatas[item.prop]"
              :disabled="item.disabled"
              type="date"
              placeholder="选择日期"
              value-format="yyyy-MM-dd"
              style="width:100%; height: 100%"
            />
          </template>

          <template v-else-if="item.type === 'dateMoon'">
            <el-date-picker
              v-model="formDatas[item.prop]"
              :disabled="item.disabled"
              type="month"
              placeholder="选择月份"
              value-format="yyyy-MM"
              style="width:100%; height: 100%"
            />
          </template>

          <template v-else-if="item.type === 'dateYear'">
            <el-date-picker
              v-model="formDatas[item.prop]"
              :disabled="item.disabled"
              type="year"
              placeholder="选择年份"
              value-format="yyyy"
              style="width:100%; height: 100%"
            />
          </template>

          <template v-else-if="item.type === 'dateRange'">
            <el-date-picker
              v-model="formDatas[item.prop]"
              :disabled="item.disabled"
              type="daterange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              style="width:100%; height: 100%"
              value-format="yyyy-MM-dd"
            />
          </template>

          <template v-else-if="item.type === 'dateTime'">
            <el-date-picker
              v-model="formDatas[item.prop]"
              :disabled="item.disabled"
              type="datetime"
              placeholder="选择日期时间"
              style="width:100%; height: 100%"
            />
          </template>

          <template v-else-if="item.type === 'dateTimeRange'">
            <el-date-picker
              v-model="formDatas[item.prop]"
              :disabled="item.disabled"
              type="datetimerange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              style="width:100%; height: 100%"
            />
          </template>

          <template v-else-if="item.type=='file'">
            <el-button type="primary">上传</el-button>
          </template>

          <template v-else-if="item.type=='switch'">
            <el-switch
              v-model="formDatas[item.prop]"
              :active-text="formDatas[item.prop] ? item.activeText || '是': item.inactiveText ||'否'"
              style="height: 100%;"
            />
          </template>

          <template v-else-if="item.type=='custom'">
            <slot :name="item.prop" :item="item" :form-data="formDatas" />
          </template>

          <!-- 正常值显示，不做编辑，目前应用于表格折叠内 -->
          <template v-else>
            <div class="item-content-box">
              <!-- 时间 -->
              <beyond-hiddenBox
                v-if="item.customProp == 'date' || item.customProp == 'mom-date'"
                :text-content="momentDate(formDatas[item.prop], item['format'])"
              />
              <!-- 其他 -->
              <beyond-hiddenBox v-else :text-content="formDatas[item.prop]" />
            </div>
          </template>

        </el-form-item>
      </el-col>
      <el-col
        :class="handleBtnPosition"
        :md="12"
        :lg="8"
        :xl="6"
      >
        <slot />
      </el-col>
    </el-row>
  </el-form>
</template>

<script>
import BeyondHiddenBox from './beyondHiddenBox'
import moment from 'moment'
moment.locale('zh-cn')
export default {
  components: {
    BeyondHiddenBox
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
  props: {
    // 默认响应式布局 md=12 lg=8 xl=6
    isGrid: {
      type: Boolean,
      default: true
    },
    // 是否是表格的expand内容
    isTableExpend: {
      type: Boolean,
      default: false
    },
    // 全局控制item的span， 默认8，只有isGrid为false才能用
    itemSpan: {
      type: Number,
      default: 8
    },
    labelWidth: {
      type: String,
      default: '105px'
    },
    itemsDatas: {
      type: Array,
      default: () => []
    },
    formDatas: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      elForm: null
    }
  },
  computed: {
    md() {
      if (this.isGrid) {
        return 12
      } else {
        return {}
      }
    },
    lg() {
      if (this.isGrid) {
        return 8
      } else {
        return {}
      }
    },
    xl() {
      if (this.isGrid) {
        return 6
      } else {
        return {}
      }
    },
    span() {
      if (this.isGrid) {
        return null
      } else {
        return this.itemSpan
      }
    },
    handleBtnPosition() {
      const itemLength = this.itemsDatas.length
      if (this.isGrid) { // 如果是响应式样式处理
        if (window.innerWidth < 1920 && itemLength <= 2) {
          return ''
        } else if (window.innerWidth < 1920 && itemLength === 3) {
          return 'handle-right'
        } else if (window.innerWidth >= 1920 && itemLength <= 3) {
          return ''
        } else {
          return 'handle-right'
        }

        // 1-7都有item的全局样式，这里就不去做改变了，避免重叠影响到全局样式
        // if (itemLength <= 7) {
        //   return ''
        // }
        // 这里针对七个以上的
        // return 'handle-right'
      } else {
        // 如果是弹框内部的，不用响应式，则两个以内的不做处理，大于两个则靠右
        if (itemLength <= 2) {
          return ''
        }
        return 'handle-right'
      }
    }
  },
  mounted() {
    this.elForm = this.$refs.elForm
  },
  methods: {
    momentDate(value, format) {
      if (!format) {
        format = 'DD MMM YYYY HH:mm'
      }
      if (value) {
        return moment(value).format(format)
      } else {
        return ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.handle-right{
  float: right !important;
  text-align: right !important;
}

/deep/.el-form-item__content{
  line-height: 31px !important; //暂时解决时间范围选择问题
}

/deep/.el-form {
  .el-form-item__label{
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 32px;
    line-height: 14px;
  }
}

.table-expend-from-box {
  /deep/.el-form-item__label {
    color: $table-th-color;
    font-weight: 700;
    height: 36px !important;
    line-height: 16px !important;
  }
  /deep/.el-form-item{
    margin-bottom: 0 !important;
  }
  .item-content-box{
    height: 36px;
    line-height: 36px;
  }
}
</style>
