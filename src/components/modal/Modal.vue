<script setup lang="ts">
import { defineProps, ref } from "vue";

const props = defineProps({
  isCloseModal: Function,
  updatedProduct: {
    type: Array as () => Product[],
    default: () => [] as Product[],
  },
});

interface Product {
  title: string;
  price: number;
  quantity: number;
}

const products = ref<Product[]>(props.updatedProduct);

function incrementQuantity(index: number) {
  products.value[index].quantity++;
  emitUpdateProducts();
}

function decrementQuantity(index: number) {
  if (products.value[index].quantity > 1) {
    products.value[index].quantity--;
    emitUpdateProducts();
  } else {
    products.value.splice(index, 1);
    emitUpdateProducts();
  }
}

function calculateTotalPrice(): number {
  return products.value.reduce(
    (total, el) => total + el.price * el.quantity,
    0
  );
}

function emitUpdateProducts() {
  const updatedProductsEvent = new CustomEvent("update-products", {
    detail: { updatedProducts: products.value },
  });
  return updatedProductsEvent;
}

const successMessage = ref(false);

function orderProducts() {
  const allProductsData = products.value.map((product) => {
    return {
      title: product.title,
      price: product.price,
      quantity: product.quantity,
    };
  });

  console.log(allProductsData);
}
</script>

<template>
  <div
    style="background-color: rgba(0, 0, 0, 0.5)"
    class="flex items-center justify-center fixed top-0 left-0 w-[100%] h-[100%]"
  >
    <div class="w-[37.5rem] bg-white rounded-[10px] p-[20px]">
      <div
        v-for="(el, index) in updatedProduct"
        :key="index"
        class="mt-[1.5rem]"
      >
        <p class="text-[#222] text-[20px] font-[600]">{{ el.title }}</p>
        <div
          class="flex justify-between items-center pb-[1.5rem] border-1px border-[#d6d6d6]"
        >
          <div class="flex w-[8rem] justify-between items-center mt-[1rem]">
            <p class="text-[#ad5502] text-[18px] font-[600]">${{ el.price }}</p>
            <p
              class="flex justify-center items-center w-[46px] h-[36px] rounded-[6px] border-[1px] border-[#d6d6d6]"
            >
              x {{ el.quantity }}
            </p>
          </div>

          <div class="flex gap-4 mt-[1rem]">
            <button
              class="flex justify-center items-center w-[48px] h-[36px] rounded-[6px] border-[1px] border-[#8a2b06] bg-white color-white cursor-pointer text-[1.5rem] hover:bg-[#8a2b06] hover:text-white active:bg-[#993108]"
              @click="decrementQuantity(index)"
            >
              -
            </button>
            <button
              class="flex justify-center items-center w-[48px] h-[36px] rounded-[6px] border-[1px] border-[#8a2b06] bg-white color-white cursor-pointer text-[1.5rem] hover:bg-[#8a2b06] hover:text-white active:bg-[#993108]"
              @click="incrementQuantity(index)"
            >
              +
            </button>
          </div>
        </div>
      </div>
      <div v-if="successMessage">
        <p>Заказ успешно принят</p>
      </div>
      <div class="flex justify-between pt-[2rem]">
        <p class="text-[#222] text-[20px] font-[700]">Total Amount</p>

        <p class="text-[#8a2b06] text-[22px] font-[600]">
          $ {{ calculateTotalPrice().toFixed(2) }}
        </p>
      </div>
      <div class="flex gap-4 justify-end mt-[24px]">
        <button
          class="flex w-[110px] pt-[10px] pb-[10px] justify-center items-center rounded-[20px] border-[1px] border-[#8a2b06] bg-white color-[#8a2b06] cursor-pointer hover:bg-[#8a2b06] hover:text-white active:bg-[#993108]"
          @click="props.isCloseModal"
        >
          Close
        </button>
        <button
          class="flex w-[110px] pt-[10px] pb-[10px] justify-center items-center rounded-[20px] border-[1px] bg-[#8a2b06] text-white cursor-pointer hover:bg-[#7e2a0a] active:bg-[#993108]"
          @click="orderProducts"
        >
          Order
        </button>
      </div>
    </div>
  </div>
</template>
