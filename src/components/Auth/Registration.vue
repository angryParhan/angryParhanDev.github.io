<template>
    <v-container
            class="fill-height"
            fluid
            ml-3
    >
        <v-row
                align="center"
                justify="center"
                class="customRow"
        >
            <v-col
                    cols="12"
                    sm="8"
                    md="6"
            >
                <v-card class="elevation-12">
                    <v-toolbar
                            dark
                            flat
                    >
                        <v-toolbar-title>Registration form</v-toolbar-title>
                    </v-toolbar>
                    <v-card-text>
                        <v-form
                                ref="form"
                                v-model="valid"
                                :lazy-validation="lazy"
                        >
                            <v-text-field
                                    label="Email"
                                    name="email"
                                    autocomplete="username"
                                    prepend-icon="mdi-account"
                                    type="email"
                                    v-model="email"
                                    :rules="emailRules"
                            />

                            <v-text-field
                                    label="Password"
                                    name="password"
                                    autocomplete="new-password"
                                    prepend-icon="mdi-lock"
                                    type="password"
                                    v-model="password"
                                    :counter="6"
                                    :rules="passwordRules"
                            />
                            <v-text-field
                                    label="Confirm password"
                                    name="confirm-password"
                                    autocomplete="confim-password"
                                    prepend-icon="mdi-lock"
                                    type="password"
                                    v-model="confirmPassword"
                                    :counter="6"
                                    :rules="confirmPasswordRules"
                            />
                            <v-checkbox
                                    v-model="checkbox"
                                    :rules="[v => !!v || 'You must agree to continue!']"
                                    label="Do you agree?"
                                    required
                            ></v-checkbox>
                        </v-form>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer/>
                        <v-btn
                                color="#272727"
                                @click="onSubmit"
                                :disabled="!valid || loading"
                                style="color: #fbfbfb"
                                :loading="loading"
                                type="submit"
                        >Sign up</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      password: '',
      confirmPassword: '',
      valid: false,
      lazy: true,
      checkbox: false,
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
      ],
      passwordRules: [
        v => !!v || 'Password is required',
        v => (v && v.length >= 6) || 'Password ust be equal or more than 6 characters'
      ],
      confirmPasswordRules: [
        v => !!v || 'Confirmation is required',
        v => (v && v === this.password) || 'Confirmation is not correct'
      ]
    }
  },
  computed: {
    loading () {
      return this.$store.getters.loading
    }
  },
  methods: {
    onSubmit (event) {
      if (this.$refs.form.validate()) {
        event.preventDefault()
        const user = {
          email: this.email,
          password: this.password
        }
        this.$store.dispatch('registerUser', user)
          .then(() => {
            this.$router.push('/')
          })
          .catch(() => {
            this.$store.dispatch('setLoading', false)
            this.email = ''
            this.password = ''
            this.confirmPassword = ''
            this.checkbox = false
          })
      }
    }
  }
}
</script>

<style scoped>

</style>
