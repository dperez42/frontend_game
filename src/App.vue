<template>
  <div>
  <Field_Comp :game="game"/>
  <Lived_Games_Comp :games="games"/>
  </div>
</template>

<script>
import Field_Comp from './components/Field.vue'
import Lived_Games_Comp from './components/Lived_Games.vue'
export default {
  name: 'App',
  components: {
    Field_Comp,
    Lived_Games_Comp
  },
  props: {
  },
  data() {
    return {
      game: {
        id:1, 
        p1y:250,
        p2y:250,
        ballx:200,
        bally:200,
        ballvx:1,
        ballvy:1,
        p1nick:'Daniel',
        p1id:'31341',
        p1ptos:10,
        p2nick:'Opponent',
        p2id:'eqe2e32',
        p2ptos:5,
        pad_width:5,
        pad_height:50,
        p1_state: true,
        p2_state: true,
        count: 1000,
        type: 3,
        game_status:4,
      },
      games: [{
        id:1, 
        p1y:250,
        p2y:250,
        ballx:200,
        bally:200,
        ballvx:1,
        ballvy:1,
        p1nick:'Daniel1',
        p1id:'31341',
        p1ptos:100,
        p2nick:'Opponent1',
        p2id:'eqe2e32',
        p2ptos:50,
        pad_width:5,
        pad_height:50,
        p1_state: true,
        p2_state: true,
        count: 1000,
        type: 3,
        game_status:4,
      },{
        id:1, 
        p1y:250,
        p2y:250,
        ballx:200,
        bally:200,
        ballvx:1,
        ballvy:1,
        p1nick:'Daniel',
        p1id:'31341',
        p1ptos:10,
        p2nick:'Opponent',
        p2id:'eqe2e32',
        p2ptos:5,
        pad_width:5,
        pad_height:50,
        p1_state: true,
        p2_state: true,
        count: 1000,
        type: 2,
        game_status:4,
      },{
        id:1, 
        p1y:250,
        p2y:250,
        ballx:200,
        bally:200,
        ballvx:1,
        ballvy:1,
        p1nick:'Daniel3',
        p1id:'31341',
        p1ptos:10,
        p2nick:'Opponent3',
        p2id:'eqe2e32',
        p2ptos:5,
        pad_width:5,
        pad_height:50,
        p1_state: true,
        p2_state: true,
        count: 1000,
        type: 1,
        game_status:4,
      }],
      sliding: null
    }
  },
  created() {
    window.addEventListener('keydown', (e) => {
      //console.log('pressing');
      if (e.key == "ArrowUp" || e.key === "q" || e.key === "Q") {
        if ((this.game.p1y + this.game.pad_height/2 - 10) > 0){
          this.game.p1y = this.game.p1y - 10;
        //this.client_game.up = false;
        }
      }
      if (e.key == "ArrowDown" || e.key === "a" || e.key === "A") {
        if ((this.game.p1y - this.game.pad_height/2 + 10) < 500){
          this.game.p1y = this.game.p1y + 10;
        //this.client_game.up = false;
        }
      }
    });
    window.addEventListener('keyup', (e) => {
      //console.log('released');
      if (e.key == "ArrowUp" || e.key === "q" || e.key === "Q") {
        if ((this.game.p1y-10) >= 0){
          //this.game.p1y = this.game.p1y - 10;
        //this.client_game.up = false;
        }
      }
      if (e.key == "ArrowDown" || e.key === "a" || e.key === "A") {
        if ((this.game.p1y + 10) < 500){
          //this.game.p1y = this.game.p1y + 10;
        //this.client_game.up = false;
        }
      }
    });
  },
  mounted() {
  },
  methods:{
    onSlideStart() {
        this.sliding = true
      },
      onSlideEnd() {
        this.sliding = false
      }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
