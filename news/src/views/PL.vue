<template>
  <v-layout class="Otstup">
    <v-flex xs12 sm6 offset-sm3>
      <v-card width="2000px">
        <v-img
          class="white--text"
          height="300px"
          :src="img"
        >
          <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs12 align-end flexbox>
              </v-flex>
            </v-layout>
          </v-container>
        </v-img>
        <v-card-title>
          <div>
            <h3>{{title}}</h3><br>
            <span>{{text}}</span>
          </div>
        </v-card-title>
        <v-card-actions>
          <!--v-btn flat color="orange">Share</v-btn-->
          <v-btn flat color="orange" @click="redirect()">Learn more...</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    props:['title', 'text', 'img', 'url'],
    methods:{
        redirect(){
            window.location.href = this.url;
        }
    }
})
</script>

<style scoped>
    .Otstup{
        margin-bottom: 20px;
    }
</style>