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
            
            newTask: '',
            
            
        }
    },methods: {
        taskDone(index){
         this.tasks[index].done = !this.tasks[index].done;  
          console.log(this.tasks[index].done)
        },

        deleteTask(index){
            this.tasks.splice(index, 1)
        },
        
        addTask(){
            let obj={
                text: this.newTask,
                done: false
            }
            this.tasks.push(obj)
            this.newTask=''
        }
    },
}).mount('#app')
