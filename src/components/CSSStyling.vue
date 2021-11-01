<template>
  <v-container class="py-8 px-16 bgColor" fluid>
    <div class="bttn">
        <v-btn to='/TemplateForum' color="blue">Next</v-btn>
    </div>
    <div class="square">
          <div class="content"><div class="font">M</div></div>
          <div class="content"><div class="font">A</div></div>
          <div class="content"><div class="font">Q</div></div>
          <div class="content"><div class="font">E</div></div>         
    </div>
  </v-container>
</template>

<script>
export default {
  data: () => ({
  }),
  computed: { 
  }
}
</script>


<style scoped>
.bgColor {
  background-color: #FFF;
}

.bttn {
  text-align: right;
}
.square2 {
  border-radius: 5px;
  background-color: #000;
  width: 200px;
  height: 200px; 
  margin: auto;  
}

.square {
  position:relative;
  border-radius: 10px;
  background-color: #9bd5e4;
  padding: 20px; 
  width: 500px;
  height: 500px; 
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 50% 50%;
  box-shadow: 
	0 0 0 8px #FFF,
	0 0 0 16px #69c4e8,
    5px 5px 10px 13px #888,
    inset 0px 60px 140px 0px #69c4e8, 
    inset 0px 0px 0px 120px #9cd3d0;
  margin: auto;
}

.content{
  border-radius: 5px;
  background-color: #FFF;
  width: 200px;
  height: 200px; 
  margin: auto;
  box-shadow: inset 0 0 10px 2px #888;
}

.font {
  font-size: 100px;
  color: #66c3e9;
  -webkit-text-stroke: 1px #888;
  text-shadow: 0px 2px 2px #888;
  text-align: center;
  padding: 20px;
}
</style>
