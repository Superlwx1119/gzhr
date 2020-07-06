<template>
  <!--  药品目录业务属性信息管理-->
  <div class="diseaseInfo">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'DiseaseInfo',
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
  .diseaseInfo {
    >div {
      height: 100%;
    }
  }
</style>
