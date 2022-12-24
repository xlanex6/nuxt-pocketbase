<template>
  <div>
    POCKET BASE
    {{ pb ? "is loaded 🚀" : "not working 🤨" }}
  </div>
</template>

<script setup>
const pb = usePocketBaseClient()
</script>
