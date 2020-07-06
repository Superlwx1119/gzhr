<template>
  <!--  医疗服务项目业务属性信息管理-->
  <div class="medicalServiceInfo">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'MedicalServiceInfo',
  components: {},
  mixins: [],
  props: {},
  data() {
    return {}
  },
  computed: {},
  watch: {},
  created() {
  },
  mounted() {
  },
  methods: {}
}
</script>

<style scoped lang="scss">
  .medicalServiceInfo {
    >div {
      height: 100%;
    }
  }
</style>
