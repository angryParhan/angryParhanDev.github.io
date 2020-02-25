<template>
    <v-container><v-layout row >
        <v-flex xs12>
            <h1 class="text--secondary mb-4 mx-2">My ads</h1>

        </v-flex>
        <v-flex
                xs12
        >
            <v-card
                    class="mx-3 mb-8 elevation-7"
            >
                <v-img
                        :src="ad.src"
                        lazy-src="https://picsum.photos/id/11/101/60"
                        max-height="300px"
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
                    {{ ad.title }}
                </v-card-title>

                <v-card-text class="text--primary">
                    <div class="description-item">{{ ad.description }}</div>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                            text
                            :to="'/add/' + ad.id"
                    >
                        Edit
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
</template>

<script>
export default {
  props: ['id'],
  computed: {
    ad () {
      const Id = this.id
      return this.$store.getters.addById(Id)
    }
  }
}
</script>

<style scoped>

</style>
