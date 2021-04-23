<template>
  <v-btn
    color="primary"
    @click="sayHi"
  >
    Click Me
  </v-btn>
</template>

<script>
export default {
  name: 'MyButton',
  methods: {
    sayHi () {
      return 'Hello, World!'
    }
  }
}
</script>
