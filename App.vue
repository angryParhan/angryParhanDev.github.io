<template>

  <v-app>
    <div>
      <v-navigation-drawer
              app
              v-model="drawer"
              temporary
      >
        <v-list>
          <v-list-item-group>
            <v-list-item
                    v-for="(item, i) in links"
                    :key="i"
                    :to="item.url"
            >
              <v-list-item-icon>
                <v-icon v-text="item.icon"></v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="item.text"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item
                    v-if="isUserLoggedIn"
                   @click="logOut"
            >
              <v-list-item-icon>
                <v-icon v-text="'mdi-exit-to-app'"></v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="'Log out'"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>

          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
      <v-app-bar
              dark
              app
      >
        <v-app-bar-nav-icon
                @click="drawer = !drawer"
                class="hidden-md-and-up"
        ></v-app-bar-nav-icon>

        <v-toolbar-title>
          <router-link to="/" tag="span" class="pointer">Home</router-link>
        </v-toolbar-title>

        <v-spacer></v-spacer>

        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn
                  text
                  v-for="(item, i) in links"
                  :key="i"
                  :to="item.url"
          >
            <v-icon left v-text="item.icon"></v-icon>
            {{ item.text }}
          </v-btn>
          <v-btn
                  v-if="isUserLoggedIn"
                  text
                  @click="logOut"
          >
            <v-icon left v-text="'mdi-exit-to-app'"></v-icon>
            Log out
          </v-btn>
        </v-toolbar-items>

        <v-menu
                left
                bottom
        >

        </v-menu>
      </v-app-bar>

        <v-content>
          <router-view></router-view>
        </v-content>
      <template v-if="errorShow">
        <v-snackbar
                color="#DC143C"
                :multi-line="true"
                :timeout="5000"
                @input="closeError"
                :value="true"
        >
          {{ errorShow }}
          <v-btn
                  dark
                  text
                  @click.native="closeError"
          >
            Close
          </v-btn>
        </v-snackbar>

      </template>

    </div>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data: () => ({
    drawer: false
  }),
  computed: {
    errorShow () {
      return this.$store.getters.error
    },
    isUserLoggedIn () {
      return this.$store.getters.isUserLogedIn
    },
    links () {
      if (this.isUserLoggedIn) {
        return [
          {
            icon: 'mdi-bookmark-outline',
            text: 'Orders',
            url: '/orders'
          },
          {
            icon: 'mdi-bookmark-plus-outline',
            text: 'New ad',
            url: '/new'
          },
          {
            icon: 'mdi-format-list-bulleted',
            text: 'my ads',
            url: '/list'
          }
        ]
      }
      return [
        {
          icon: 'mdi-lock',
          text: 'Login',
          url: '/login'
        },
        {
          icon: 'mdi-face',
          text: 'Registration',
          url: '/registration'
        }
      ]
    }
  },
  methods: {
    closeError () {
      this.$store.dispatch('clearError')
    },
    logOut () {
      this.$store.dispatch('logOutUser')
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
  .pointer {
    cursor: pointer
  }
</style>
