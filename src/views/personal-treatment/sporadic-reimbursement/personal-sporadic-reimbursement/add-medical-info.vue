<template>
  <!--  就诊信息-->
  <form-dialog :append-to-body="true" title="就医信息" width="1000px" new-calss="big" :is-show="show" @update:isShow="updateIsShow">
    <el-form ref="medicalForm" :model="medicalForm" label-width="105px">
      <!--        业务信息-->
      <business-info :info="medicalForm" :is-edit="true" :is-disabled="false" />
      <!--        单据信息-->
      <documents-info :info="medicalForm" :is-disabled="false" />
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="cancel('medicalForm')">取消</el-button>
      <el-button type="primary" @click="submit('medicalForm')">保存</el-button>
    </span>
  </form-dialog>
</template>

<script>
import BusinessInfo from '../components/dialog/business-info'
import DocumentsInfo from '../components/dialog/documents-info'

export default {
  name: 'AddMedicalInfo',
  components: {
    BusinessInfo,
    DocumentsInfo
  },
  mixins: [],
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      medicalForm: {}
    }
  },
  computed: {},
  watch: {},
  created() {
  },
  mounted() {
  },
  methods: {
    updateIsShow(v) {
      this.$emit('update:show', v)
    },
    cancel() {
      this.$emit('update:show', false)
    },
    submit() {
      this.$emit('update:show', false)
      this.$emit('save')
    }
  }
}
</script>

<style scoped lang="scss"></style>
