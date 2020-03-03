<template>
    <form @submit="submit">
        <input v-model="message">
        <br>
        <textarea />
        <br>
        <button>submit</button>
    </form>
</template>

<script>
export default {
  data: () => {
      message: null
  },
  methods: {
    submit: () => {
        console.log("test")
    }
  }
}
</script>