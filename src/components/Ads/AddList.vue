<template>
    <v-container>
        <v-layout row >
            <v-flex xs12>
                <h1 class="text--secondary mb-4 mx-2">My ads</h1>
            </v-flex>
            <v-flex
                    xs12
                    sm6
                    md4
                    lg4
                    v-for="(value, i) in myAds"
                    :key="i"
            >
                <v-card
                        class="mx-auto mx-4 mb-8 elevation-7"
                        max-width="344"
                >
                    <v-img
                            :src="value.src"
                            lazy-src="https://picsum.photos/id/11/101/60"
                            height="200px"
                    >
                        <template v-slot:placeholder>
                            <v-row
                                    class="fill-height ma-0"
                                    align="center"
                                    justify="center"
                            >
                                <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                            </v-row>
                        </template>
                    </v-img>

                    <v-card-title>
                        {{ value.title }}
                    </v-card-title>

                    <v-card-text class="text--primary">
                        <div class="description-item">{{ value.description }}</div>
                    </v-card-text>

                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                                raised
                                color="#DC143C"
                                style="color: #fbfbfb"
                                :to="'/add/' + value.id"
                        >
                            Open
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
  computed: {
    myAds () {
      return this.$store.getters.myAds
    }
  }
}
</script>

<style scoped>
    .description-item {
        height: 20px;
        overflow-x: hidden;
    }
</style>
