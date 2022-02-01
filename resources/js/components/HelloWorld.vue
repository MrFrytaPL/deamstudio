<template>
  <h1 class="text-3xl font-bold underline">
    Hello {{user.data.name}}!
  </h1>
  </template>

  <script>
  import { mapState } from 'vuex'

  export default {
computed: {
    ...mapState(['user'])
}
  }
  </script>

