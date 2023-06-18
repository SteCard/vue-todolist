"use strict";

const {createApp} = Vue;

createApp({
    data(){
        return {
            tasks : [
                {
                  text: "Fare la spesa",
                  done: false,
                  editTask: false
                },
                {
                  text: "Pulire la casa",
                  done: false,
                  editTask: false
                },
                {
                  text: "Studiare per l'esame",
                  done: false,
                  editTask: false
                },
                {
                  text: "Andare in palestra",
                  done: false,
                  editTask: false
                },
                {
                  text: "Chiamare il dottore",
                  done: false,
                  editTask: false
                },
                {
                  text: "Preparare la cena",
                  done: false,
                  editTask: false
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
        },
        editTaskFunction(index){
            this.tasks[index].editTask = !this.tasks[index].editTask;
        }
    },
}).mount('#app')
