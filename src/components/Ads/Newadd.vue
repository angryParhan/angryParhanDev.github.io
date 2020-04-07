<template>
    <v-container>
        <v-layout row>
            <v-flex xs12>
                <h1 class="text--secondary mb-3">Create new ad</h1>
                <v-form
                        ref="form"
                        v-model="valid"
                        class="mx-auto pa-3 mb-3"
                >
                    <v-text-field
                            color="#008000"
                            label="Ad title"
                            name="title"
                            type="text"
                            v-model="title"
                            :clearable="true"
                            required
                            :rules="[v => !!v || 'title is required!!!']"
                    />

                    <v-text-field
                            color="#008000"
                            label="Ad description"
                            name="password"
                            type="text"
                            v-model="description"
                            multi-line
                            :clearable="true"
                            required
                            :rules="[v => !!v || 'description is required!!!']"
                    />
                </v-form>
                <v-layout row>
                    <v-flex xs12 class="ml-3">
                        <v-btn
                                color="#DC143C"
                                :loading="loading3"
                                :disabled="loading3"
                                class="ma-2 white--text"
                                @click="loader = 'loading3'"
                        >
                            Upload
                            <v-icon right dark>mdi-cloud-upload</v-icon>
                        </v-btn>
                        <v-col cols="8" class="mx-5">
                            <v-img max-width="700px"
                                   lazy-src="https://picsum.photos/id/15/100/60"
                                   src="https://picsum.photos/1510/930?random"
                                   aspect-ratio="1.7">
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
                        </v-col>
                    </v-flex>
                </v-layout>
                <v-layout row class="mb-3">
                    <v-flex xs12 class="ml-5">
                        <v-switch
                                color="#DC143C"
                                v-model="promo"
                                :label="'Add to promo?'"
                        ></v-switch>
                    </v-flex>
                </v-layout>
                <v-layout row>
                    <v-flex xs3 class="mx-auto">
                        <v-btn
                                :disabled="!valid"
                                @click="createAd"
                                color="#DC143C"
                                style="color: #fbfbfb"
                        >Create ad</v-btn>
                    </v-flex>
                </v-layout>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
  data () {
    return {
      title: '',
      description: '',
      valid: false,
      promo: false,
      loader: null,
      loading3: false
    }
  },
  methods: {
    createAd () {
      if (this.$refs.form.validate()) {
        // logic
        const ad = {
          title: this.title,
          description: this.description,
          promo: this.promo,
          src: 'https://media.vanityfair.com/photos/5d4db35f0f044a0009664e82/master/pass/trump-el-paso-baby.jpg'
        }

        this.$store.dispatch('createAd', ad)
      }
    }
  },
  watch: {
    loader () {
      const l = this.loader
      this[l] = !this[l]

      setTimeout(() => (this[l] = false), 3000)

      this.loader = null
    }
  }
}
</script>

<style scoped>
</style>
