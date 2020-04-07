<template>
    <div>
        <v-container fluid pt-0>
            <v-layout row wrap>
                <v-flex xs12>
                    <v-carousel
                            cycle
                            show-arrows-on-hover
                            interval="5000"
                    >
                        <v-carousel-item
                                v-for="(item,i) in promoAds"
                                :key="i"
                                :src="item.src"
                                lazy-src="https://picsum.photos/id/11/100/60"
                        >
                            <div class="carousel-link">
                                <v-btn class="error" :to="'/add/' + item.id">{{ item.title }}</v-btn>
                            </div>
                            <template v-slot:placeholder>
                                <v-row
                                        class="fill-height ma-0"
                                        align="center"
                                        justify="center"
                                >
                                    <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                                </v-row>
                            </template>
                        </v-carousel-item>
                    </v-carousel>
                </v-flex>
            </v-layout>
        </v-container>
        <v-container grid-list-md fluid>
            <v-layout row wrap>
                <v-flex
                        xs12
                        sm6
                        md4
                        lg4
                        v-for="(value, i) in ads"
                        :key="i"
                >
                    <v-card
                            class="mx-auto mb-8 elevation-10"
                            max-width="344"
                    >
                        <v-img
                                :src="value.src"
                                lazy-src="https://picsum.photos/id/11/101/60"
                                height="200px"
                        >
                            <template v-slot:placeholder>
                                <v-row
                                        class="fill-height"
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

                            <div>{{ value.description }}</div>
                        </v-card-text>

                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn
                                    text
                                    :to="'/add/' + value.id"
                            >
                                Open
                            </v-btn>

                            <v-btn
                                    raised
                                    color="#DC143C"
                                    style="color: #fbfbfb"
                            >
                                Buy
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
export default {
  computed: {
    promoAds () {
      return this.$store.getters.promoAds
    },
    ads () {
      return this.$store.getters.ads
    }
  }
}
</script>

<style scoped>
    .carousel-link {
        position: absolute;
        bottom: 50px;
        left: 50%;
        background: rgba(0, 0, 0, .3);
        transform: translate(-50%, 0);
        padding: 5px 15px;
        border-top-right-radius: 5px;
        border-top-left-radius: 5px;
    }
</style>
