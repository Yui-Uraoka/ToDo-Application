import {defineStore} from 'pinia'

export const useTodoStore = defineStore('todotask',{
    state:() => ({
            taskNameList:[] as string[]
    }),

    actions: {
        addTask(taskName: string){
            if(taskName === '') {
                return;
            }
            this.taskNameList.push(taskName);
        },

        completeTask(completedTaskName: string) {
            this.taskNameList = this.taskNameList.filter((taskName) => completedTaskName !== taskName);
        },
    },
})
