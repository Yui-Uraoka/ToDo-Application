<template>
  <!-- Navbar component -->
  <Navbar/>

  <div class="w-25 mx-auto">
    <!-- Input Task -->
    <div class="input-group mt-3 w-100">
      <input v-model="taskName" placeholder="Please enter your task here..." class="form-control" autofocus @keyup.enter="addTask">
      <button @click="addTask" class="btn btn-primary">Add</button>
    </div>

    <!-- Task List -->
    <h4 class="mt-3 text-start fw-bold">Task List</h4>
    <ul v-if="taskNameList.length > 0" class="list-group">
      <li v-for="task in taskNameList" :key="task" class="list-group-item">
        <p class="d-inline">{{ task }}</p>
        <button @click="completeTask(task)" class="btn btn-primary float-end">Complete</button>
      </li>
    </ul>
    <p v-else class="text-secondary fst-italic">No task found.</p>
  </div>
</template>


<script setup lang="ts">
  import {useTodoStore} from '@/stores/todo';

  const todoStore = useTodoStore();
  const taskNameList = computed(()=>todoStore.taskNameList);
  const taskName = ref('');

  const addTask = () => {
    todoStore.addTask(taskName.value);
    taskName.value = '';
  };

  const completeTask = (completedTaskName: string) => {
    todoStore.completeTask(completedTaskName);
  };
</script>



