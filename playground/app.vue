<template>
  <div>
    POCKET BASE
    {{ pb ? "is loaded ๐" : "not working ๐คจ" }}
  </div>
</template>

<script setup>
const pb = usePocketBaseClient()
</script>
