<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
    <div v-for="(game, index) in games" :key="index">  
      <b-carousel-slide
        caption="First slide"
        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
        img-src="https://picsum.photos/1024/480/?image=52">
        <Field_Comp :game="game"></Field_Comp>
      </b-carousel-slide>
      </div>
    </b-carousel>
  </div>
</template>

<script>
//https://www.w3schools.com/graphics/svg_examples.asp
import Field_Comp from './Field.vue'
export default {
  name: 'Lived_Games_Comp',
  props: {
    games: Object
  },
  components: {
    Field_Comp
  },
  data() {
      return {
        //game_list: [{id: 'game1'},{id: 'game2'}],
        slide: 0,
        sliding: null
      }
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
