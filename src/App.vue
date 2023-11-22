<script setup>
import {
  ref, onBeforeMount, computed, onMounted
} from 'vue'
import giphyService from '@/services/giphy.service'
import { useSearchStore } from '@/store/search.store'
import random from "@/utils/random.js";


const searchText = ref(null)
const searchInput = ref(null)
const searchStore = useSearchStore();

const images = computed(() => searchStore.results)

const search = () => {
  setTimeout(() => {
    giphyService.search(searchStore)
      .then(response => {
        searchStore.setResults(response.data);
      })
      .catch(error => {
        console.log(error)
      })
  }, 100);
}

const validateKeyPress = (event) => {
  if (searchText.value) {
    if (event.key === 'Enter' || searchText.value.length >= 3) {
      searchStore.setQuery(searchText.value);
      searchStore.setCleanResults();
      search()
    }
  } else {
    searchInput.value.focus();
  }
}

const validateButtonSearch = () => {
  if (searchText.value) {
    searchStore.setQuery(searchText.value);
    searchStore.setCleanResults();
    search()
  } else {
    searchInput.value.focus();
  }
}


onBeforeMount(() => {
  searchStore.setQuery(random.getText());
  search();
})



onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

const handleScroll = () => {
  if (window.innerHeight + window.scrollY >= document.documentElement.offsetHeight) {
    searchStore.setOffset(searchStore.offset + 10);
    search()
  }
}


// const handleScroll = (event) => {
//   const bottomOfWindow = event.target.scrollingElement.scrollTop + window.innerHeight === event.target.scrollingElement.scrollHeight;
//   console.log(event);
//   if (bottomOfWindow) {
//     alert('El final de la página');
//     //searchStore.setOffset(searchStore.offset + 25);
//     //search()
//   }
// }

</script>

<template>
  <header class="header">
    <h1>Explore GIF</h1>
  </header>
  <div class="main">
    <div class="seach-bar">
      <input ref="searchInput" type="text" v-model="searchText" class="search-input" placeholder="Search"
        @keypress="validateKeyPress">
      <button class="search-button" @click="validateButtonSearch">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            <g clip-path="url(#clip0_15_152)">
              <rect width="24" height="24" fill="white"></rect>
              <circle cx="10.5" cy="10.5" r="6.5" stroke="#000000" stroke-linejoin="round"></circle>
              <path
                d="M19.6464 20.3536C19.8417 20.5488 20.1583 20.5488 20.3536 20.3536C20.5488 20.1583 20.5488 19.8417 20.3536 19.6464L19.6464 20.3536ZM20.3536 19.6464L15.3536 14.6464L14.6464 15.3536L19.6464 20.3536L20.3536 19.6464Z"
                fill="#000000"></path>
            </g>
            <defs>
              <clipPath id="clip0_15_152">
                <rect width="24" height="24" fill="white"></rect>
              </clipPath>
            </defs>
          </g>
        </svg>
      </button>
    </div>
    <div class="grid-container">
      <div v-for="image of images" class="grid-item">
        <img :src="image.images.fixed_height_downsampled.url" :alt="image.title">
      </div>
    </div>
  </div>
</template>

<style></style>
