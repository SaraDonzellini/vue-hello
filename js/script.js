
  const { createApp } = Vue
  

  createApp({
    data() {
      return {
        title: 'Hello Vue!',
        imageSrc: './img/vuehello.png'
      
      }
    },
    
  }).mount('#app')