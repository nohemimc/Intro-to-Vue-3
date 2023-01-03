const app = Vue.createApp({
  data() {
    return {
      cart: [],
      premium: false,
      active: true,
    };
  },
  methods: {
    updateCart(id) {
      this.cart.push(id);
    },
    deleteCart(id) {
      //    this.cart.length >=1 ? this.cart.pop(id) : ''
      const index = this.cart.indexOf(id);
      if (index > -1) {
        this.cart.splice(index, 1);
      }
      else {
        this.active=false
      }
    },
  },
});
