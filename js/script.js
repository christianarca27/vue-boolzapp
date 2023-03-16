const { createApp } = Vue

  createApp({
    data() {
      return {
        contactList: [
            {
                name: "Marco",
                image: "https://picsum.photos/200",
                lastMessage: "Ultimo messaggio inviato",
                lastMessageTime: "12:00"
            },
            {
                name: "Francesco",
                image: "https://picsum.photos/200",
                lastMessage: "Ultimo messaggio inviato",
                lastMessageTime: "12:00"
            },
            {
                name: "Luca",
                image: "https://picsum.photos/200",
                lastMessage: "Ultimo messaggio inviato",
                lastMessageTime: "12:00"
            },
            {
                name: "Christian",
                image: "https://picsum.photos/200",
                lastMessage: "Ultimo messaggio inviato",
                lastMessageTime: "12:00"
            }
        ]
      }
    },

    methods: {
        
    }
  }).mount('#app')