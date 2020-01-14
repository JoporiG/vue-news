<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawerRight" app clipped right>
      <v-list dense>
        <v-list-item @click.stop="right = !right">
          <v-list-item-action>
            <v-icon>mdi-exit-to-app</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Open Temporary Drawer</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      clipped-right
      color="blue-grey"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>
        <router-link to="/en">en | </router-link>
        <router-link to="/ru">ru</router-link>

      </v-toolbar-title>
      <v-spacer />
      <v-app-bar-nav-icon @click.stop="drawerRight = !drawerRight" />
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app>
      <v-list dense>
        <v-list-item @click.stop="left = !left">
          <v-list-item-action>
            <v-icon>mdi-exit-to-app</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Open Temporary Drawer</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-navigation-drawer v-model="left" fixed temporary/>


    <v-content>
      <v-container class="fill-height" fluid>
        <v-row justify="center" align="center">
          <v-col class="shrink">
            <router-view v-for="el in articles" :key="el.title"
            :title="el.title"
            :text="el.description"
            :img="el.urlToImage"
            :url="el.url"/>
          </v-col>
        </v-row>
      </v-container>
    </v-content>



    <v-navigation-drawer v-model="right" fixed right temporary/>

    <v-footer app color="blue-grey" class="white--text">
      <span>Vue-News</span>
      <v-spacer/>
      <span>2020</span>
    </v-footer>
  </v-app>
</template>

<script>
import axios from 'axios'
  export default {
    name: 'App',
    props: {
      source: String,
    },
    data: () => ({
      drawer: null,
      drawerRight: null,
      right: false,
      left: false,
      articles: [],
    }), 
    methods:{
      Load(){
        axios.get('https://newsapi.org/v2/top-headlines?country=ru&apiKey=d7f41a32c26b4bbfb596d58b1a54c766').then((response) =>{
          this.articles = response.data.articles;
        })
      },
    },
    mounted(){
      this.Load();
    }
  }
</script>

<style scoped>
  .shirina{
    width: 10000000px,
  }
</style>