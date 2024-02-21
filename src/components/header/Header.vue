<script setup lang="ts">
import { ref } from "vue";
import Basket from "../../assets/icons/Basket.vue";
import Image from "../../assets/image/pexels-alexy-almond-3756523 1.png";
import Cart from "../../components/cart/Cart.vue";
import Main from "../main/Main.vue";
import Modal from "../modal/Modal.vue";

interface Product {
  title: string;
}

const isModal = ref(false);

const isOpenModal = () => {
  isModal.value = true;
};
const isCloseModal = () => {
  isModal.value = false;
};

const updatedProducts = ref<Product[]>([]);

const handleUpdatedProducts = (updatedList: Product[]) => {
  updatedProducts.value = updatedList;
};
</script>
<template>
  <div>
    <div
      class="flex fixed w-[100%] h-[101px] bg-[#8a2b06] justify-between items-center pl-[6rem] pr-[6rem]"
    >
      <div>
        <p class="text-white text-[38px] font-bold">ReactMeals</p>
      </div>
      <div>
        <button
          class="w-[249px] h-[59px] bg-[#5a1f08] border-none cursor-pointer rounded-[30px] hover:bg-[#4a1602] active:bg-[#993108]"
          @click="isOpenModal"
        >
          <div class="flex items-center justify-around">
            <Basket />
            <p class="text-white text-[16px] font-bold">Your Cart</p>

            <p
              class="flex justify-center items-center w-[41px] h-[25px] text-white rounded-[30px] bg-[#8a2b06]"
            >
              {{ updatedProducts.length }}
            </p>
          </div>
        </button>
      </div>
    </div>
    <img :src="Image" alt="img" class="w-[100%] pt-[100px]" />

    <div class="flex justify-center mt-[-10rem]">
      <Cart />
    </div>

    <div class="mt-[-7.2rem]">
      <Main @updateProducts="handleUpdatedProducts" />
    </div>

    <div v-if="isModal">
      <Modal :isCloseModal="isCloseModal" :updatedProduct="updatedProducts" />
    </div>
  </div>
</template>
