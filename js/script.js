
  const { createApp } = Vue

  createApp({
    data() {
      return {
        title: 'Hello Vue!',
        image: '../img/vuehello.png'
      }
    },
    
  }).mount('#app')
  