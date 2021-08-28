<template>
  <div>
    <h1>个人信息</h1>
    <h1>{{$route.params.id}}</h1>
  </div>
</template>

<script>
  export default {
    props:[
      'id'
    ],
    name: "Profile"
  }
</script>

<style scoped>

</style>
