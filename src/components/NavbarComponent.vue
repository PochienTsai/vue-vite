<template>
  <nav class="navbar bg-light">
    <div class="container-fluid">
      <span class="navbar-brand" href="#">香香麵攤</span>
      <button type="button" class="btn nav-link">
        購物車
        <span class="badge rounded-pill bg-danger text-white">{{ cartList.carts.length }}</span>
      </button>
    </div>
  </nav>
</template>
<script>
import cartStore from '../stores/cartStore.js'
export default {
  computed: {
    cartList() {
      return cartStore().cartList
    }
  }
}
</script>
