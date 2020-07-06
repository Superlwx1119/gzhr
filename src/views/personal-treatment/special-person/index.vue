<template>
  <!---->
  <div class="specialPerson">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'SpecialPerson',
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
  .specialPerson{
    >div {
      height: 100%;
    }
  }
</style>
