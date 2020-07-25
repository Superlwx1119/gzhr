<template>
  <div class="organizationInformation">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'OrganizationInformation',
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
  .organizationInformation{
    >div {
      height: 100%;
    }
  }
</style>
