<script setup lang="ts">
import { ref, defineEmits, watch } from "vue";
import { data } from "../utils/const";
import type { Product } from "../utils/const";

const emit = defineEmits(["updateProducts"]);

const products = ref<Product[]>([]);

const addToCart = (index: number) => {
  const selectedProduct = { ...data[index], quantity: data[index].quantity };
  products.value.push(selectedProduct);
  data[index].quantity = 0;
  emit("updateProducts", products.value);
};

watch(
  () => products.value,
  (newValue) => {
    console.log(newValue);
  }
);
</script>

<template>
  <div class="flex justify-center w-[100%] pb-[100px] bg-[#3f3f3f]">
    <div
      class="w-[1039px] h-[100%] rounded-[1rem] bg-white mt-[150px] pl-[2rem] pr-[2rem]"
    >
      <div
        v-for="(el, index) in data"
        :key="index"
        class="flex justify-between mt-[44px] border-b border-gray pb-[20px]"
      >
        <div class="flex flex-col gap-2">
          <p class="text-[18px] font-[600]">{{ el.title }}</p>
          <p class="text-[#222] text-[1rem] font-[400] italic">
            {{ el.description }}
          </p>

          <p class="text-[#ad5502] text-[20px] font-[700]">$ {{ el.price }}</p>
        </div>
        <div class="flex flex-col gap-4">
          <div class="flex items-center gap-2">
            <p class="text-[#222] text-[18px] font-[600]">Amount</p>
            <input
              type="number"
              class="w-[60px] h-[32px] rounded-[6px] border-[1px] border-[#d6d6d6]"
              v-model="el.quantity"
            />
          </div>
          <button
            class="flex justify-center items-center w-[99px] h-[41px] rounded-[20px] bg-[#8a2b06] text-white border-none cursor-pointer ml-[1.5rem] hover:bg-[#7e2a0a] active:bg-[#993108]"
            @click="addToCart(index)"
          >
            + Add
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
