<template>
  <div>
    <svg xmlns="http://www.w3.org/2000/svg"  
      viewBox="0 0 1000 500"
      font-size="24">
      <defs>
        <filter id="f1" x="0" y="0">
          <feGaussianBlur in="SourceGraphic" stdDeviation="55" />
        </filter>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style="stop-color:rgb(255,255,0);stop-opacity:1" />
          <stop offset="100%" style="stop-color:rgb(255,0,0);stop-opacity:1" />
        </linearGradient>
      </defs>
      <!-- campo -->
      <rect v-if="game.type===1" width="1000" height="500" style="fill:rgb(113, 199, 52);stroke-width:3;stroke:rgb(0,0,0)" filter="url(#f1)"/>
      <rect v-if="game.type===2"  width="1000" height="500" style="fill:rgb(0,0,255);stroke-width:3;stroke:rgb(0,0,0)" filter="url(#f1)"/>
      <rect v-if="game.type===3"  width="1000" height="500" style="fill:rgb(229, 43, 37);stroke-width:3;stroke:rgb(0,0,0)" filter="url(#f1)"/>
      <line x1="500" y1="0" x2="500" y2="500" style="stroke:rgb(0,0,0);stroke-width:2" />
      <!-- mods -->
      <line v-if="game.type===2" x1="250" y1="100" x2="250" y2="150" style="stroke:rgb(255,0,0);stroke-width:2" />
      <line v-if="game.type===2" x1="250" y1="300" x2="250" y2="350" style="stroke:rgb(255,0,0);stroke-width:2" />
      <line v-if="game.type===2" x1="750" y1="100" x2="750" y2="150" style="stroke:rgb(255,0,0);stroke-width:2" />
      <line v-if="game.type===2" x1="750" y1="300" x2="750" y2="350" style="stroke:rgb(255,0,0);stroke-width:2" />
      <path class="spiral" 
        d="M100 50 
          C 100 116 12.5 99.5 12.5 50 
          C 12.5 0.5 75 9 75 50 
          C 75 83 37.5 74 37.5 50
          C 37.5 38 50 42 50 50"
        stroke="black" stroke-width="1" fill="none"/>
      <path  stroke-dashoffset="6265" stroke-dasharray="6265" d="m351 487c0 8-11 4-14-1-6-11 4-24 15-27 19-5 37 11 40 30 4 27-18 50-44 53-35 4-64-25-66-59-3-42 32-77 73-79 50-3 90 39 92 88 2 57-46 104-102 105-65 2-117-53-119-117-1-72 60-131 131-132 80-1 144 67 145 146 1 87-74 158-160 158-95 0-171-81-171-175 0-102 88-185 190-184 110 1 198 95 197 204C557 615 456 709 340 708 215 706 115 598 117 475 119 342 233 236 364 238 504 240 616 361 614 500 611 648 484 766 337 763 182 760 58 626 61 472 65 309 206 179 367 183c170 4 306 151 302 320-4 178-158 319-335 315" style="fill:none;stroke:#000" stroke-width="2">
        <animate attributeName="stroke-dashoffset" values="6265;0;6265;0" dur="15s" fill="freeze" />
      </path>
      <!-- nombres y ptos -->
      <text  text-anchor="start" x="10" y="30" fill="white">{{game.p1nick}}</text>
      <text x="485" y="30" text-anchor="end" fill="white">{{game.p1ptos}}</text>
      <text   text-anchor="end" x="985" y="30" fill="white">{{game.p2nick}}</text>
      <text x="515" y="30" text-anchor="start" fill="white">{{game.p2ptos}}</text>
      <!-- paleta player 1 -->
      <rect x="10" :y=game.p1y-game.pad_height/2 :width=game.pad_width :height=game.pad_height style="fill:rgb(255, 0, 30);stroke-width:3;stroke:rgb(0,0,0)"/>
      <!-- paleta player 2 -->
      <rect :x=990-game.pad_width :y=game.p2y-game.pad_height/2 :width=game.pad_width :height=game.pad_height style="fill:rgb(255, 0, 30);stroke-width:3;stroke:rgb(0,0,0)"/>
      <!-- ball -->
      <circle :cx=game.ballx :cy=game.bally r="5" fill="#fff"/>
      <!--Game status = 1 Waiting for your opponent-->
      <text v-if="game.game_status===1" font-size="56" x="500" y="250" text-anchor="middle" fill="white">{{game.p1nick}}</text>
      <!--Game status = 2 Start in ...-->
      <text v-if="game.game_status===2" font-size="56" x="500" y="250" text-anchor="middle" fill="white">Game start in {{game.count}}</text>
   
    </svg>
  </div>
</template>

<script>
//https://www.w3schools.com/graphics/svg_examples.asp

export default {
  name: 'Field_Comp',
  props: {
    game: Object
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.my-svg {
  width: 100px;
  height: 100px;
}
</style>
