<template>
  <div >
    <Slider></Slider>
    <br>
    <Trip></Trip>
  </div>
</template>

<script>
import Slider from '@/components/Slider/Slider'
import Trip from '@/components/Trip/Trip'
export default {
  name: 'Index',
   components: {
     Slider,
     Trip
  }
}
</script>

<style scoped>

</style>
