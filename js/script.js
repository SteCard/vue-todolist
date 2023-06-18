"use strict";

const {createApp} = Vue;

createApp({
    data(){
        return {
            tasks : [
                {
                  text: "Fare la spesa",
                  done: false
                },
                {
                  text: "Pulire la casa",
                  done: false
                },
                {
                  text: "Studiare per l'esame",
                  done: false
                },
                {
                  text: "Andare in palestra",
                  done: false
                },
                {
                  text: "Chiamare il dottore",
                  done: false
                },
                {
                  text: "Preparare la cena",
                  done: false
                }
            ],
            
        }

    },methods: {
        taskDone(index){
         this.tasks[index].done = !this.tasks[index].done;  
          console.log(this.tasks[index].done)
        }
    },
}).mount('#app')
