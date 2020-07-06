<template>
  <!--  药品目录业务属性信息管理-->
  <div class="drugInfo">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'DrugInfo',
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
  .drugInfo {
    >div {
      height: 100%;
    }
  }
</style>
