<template>
    <v-container>
        <v-layout row>
            <v-flex xs12 sm6 offset-sm-4>
                <h1 class="text--secondary mb-4">Orders</h1>
                <div class="ml-3"
                     v-for="(item, i) in orders"
                     :key="i"
                >
                    <v-checkbox
                            :input-value="item.done"
                            :label="item.name + '(' + item.phone + ')'"
                            @change="markDone(item)"
                            color="#DC143C"
                            :readonly="item.done ? true : false"
                    ></v-checkbox>
                    <v-btn
                            dark
                            :to="'/add/' + item.adId"
                    >Open</v-btn>
                </div>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
  data () {
    return {
      orders: [
        {
          id: '345',
          name: 'Anrew',
          phone: '0994007301',
          adId: '123',
          done: false
        }
      ]
    }
  },
  methods: {
    markDone (order) {
      order.done = true
      console.log(this.orders[0].done, order.done)
    }
  }
}
</script>

<style scoped>
</style>
