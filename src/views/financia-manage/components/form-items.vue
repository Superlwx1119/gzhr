<!-- 简单表单组件
该组件只适用两种情况： 1：弹框固定： span=8， 2.栅格 :md="12" :lg="8" :xl="6"
注意： itemsDatas的prop 对于的是 fromDatas的数据字段
-->
<template>
  <el-form ref="elForm" v-bind="this.$attrs" :label-width="labelWidth" v-on="$listeners">
    <el-row :gutter="12">
      <el-col
        v-for="item in itemsDatas"
        v-show="!item.hidden"
        :key="item.label"
        :md="item.md || md"
        :lg="item.lg || lg"
        :xl="item.xl || xl"
        :span="item.span || span"
      >
        <el-form-item :label="item.label" :prop="item.prop">
          <template v-if="item.type === 'input'">
            <el-input
              v-model="formDatas[item.input]"
              :disabled="item.disabled"
              clearable
              :placeholder="item.placeholder || '请输入'"
            />
          </template>

          <template v-if="item.type === 'number'">
            <el-input
              v-model.number="formDatas[item.prop]"
              :disabled="item.disabled"
              clearable
              :placeholder="item.placeholder || '请输入'"
            />
          </template>

          <template v-if="item.type === 'textarea'">
            <el-input
              v-model="formDatas[item.prop]"
              :disabled="item.disabled"
              :autosize="item.autosize || false"
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
              style="width: 100%"
              @change="showMessage($event)"
            >
              <el-option v-for="e in item.options" :key="e.label" :label="e.label" :value="{value: e.value, dispose: e.dispose}" />
            </el-select>
          </template>

          <template v-else-if="item.type === 'radio'">
            <el-radio-group v-model="formDatas[item.prop]">
              <el-radio
                v-for="obj in item.options"
                :key="obj.label"
                :label="obj.label"
              >{{ obj.name }}</el-radio>
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
              style="width:100%; height: 100%"
            />
          </template>

          <template v-else-if="item.type === 'dateMoon'">
            <el-date-picker
              v-model="formDatas[item.prop]"
              :disabled="item.disabled"
              type="month"
              placeholder="选择月份"
              style="width:100%; height: 100%"
            />
          </template>

          <template v-else-if="item.type === 'dateYear'">
            <el-date-picker
              v-model="formDatas[item.prop]"
              :disabled="item.disabled"
              type="year"
              placeholder="选择年份"
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
              style="width:100%"
            />
          </template>

          <template v-else-if="item.type=='file'">
            <el-button type="primary">上传</el-button>
          </template>

          <template v-else-if="item.type=='custom'">
            <slot :name="item.prop" :item="item" :prop-data="formDatas[item.prop]" />
          </template>

          <template v-else-if="item.type=='search'">
            <el-select
              v-model="formDatas[item.input]"
              filterable
              remote
              reserve-keyword
              placeholder="请输入关键词"
              :remote-method="remoteMethod"
            >
              <el-option
                v-for="e in options"
                :key="e.value"
                :label="e.label"
                :value="e.value"
              />
            </el-select>
          </template>
        </el-form-item>
      </el-col>
      <el-col :class="handleBtnPosition" :md="12" :lg="8" :xl="6">
        <slot />
      </el-col>
    </el-row>
  </el-form>
</template>

<script>
export default {
  props: {
    // 默认响应式布局 md="12" lg="8" xl="6"
    isGrid: {
      type: Boolean,
      default: true
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
      default: () => { }
    }
  },
  data() {
    return {
      elForm: null,
      options: [], // 查询列表
      list: [], // 重组后台数据
      states: ['asd', 'jjj'] // 接口返回值
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
        return 8
      }
    },
    handleBtnPosition() {
      const itemLength = this.itemsDatas.length
      // 1-7都有item的全局样式，这里就不去做改变了，避免重叠影响到全局样式
      if (itemLength <= 7) {
        return ''
      }
      // 这里针对七个以上的
      return 'handle-right'
    }
  },
  mounted() {
    this.elForm = this.$refs.elForm
    this.list = this.states.map(item => {
      return { value: item, label: item }
    })
  },
  methods: {
    remoteMethod(query) {
      if (query !== '') {
        setTimeout(() => {
          this.options = this.list.filter(item => {
            return item.label.indexOf(query) > -1
          })
        }, 200)
      } else {
        this.options = []
      }
    },
    showMessage(parms) {
      const { value, dispose } = parms // eslint-disable-line no-unused-vars
      if (dispose) {
        this.$emit('changeItem', true)
      } else if (!dispose) {
        this.$emit('changeItem', false)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.handle-right {
  float: right;
  text-align: right !important;
}
.handle-row-handle-right {
  width: 100% !important;
  float: right !important;
  text-align: right !important;
}
.el-select {
  width: 100%;
}
// .itemxxx { 赞不做处理吧，等确定后再看看
//   @media only screen and (max-width: 1199px) {
//     height: calc(100% - #{$title-height + 270px});
//   }
//   @media only screen and (min-width: 1200px) and (max-width: 1919px) {
//     width: 100%;
//     float: right;
//     text-align: right;
//   }
//   @media only screen and (min-width: 1919px) {
//     width: 100%;
//     float: right;
//     text-align: right;
//   }
// }
</style>
