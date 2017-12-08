Vue.component('task-list', {
  template: `
    <div>
      <task v-for="task in tasks">{{ task.task }}</task>
    </div>
  `,
  data() {
    return {
      tasks: [
        { task: 'Go to store', complete: true },
        { task: 'Go to farm', complete: false },
        { task: 'Go to work', complete: true },
        { task: 'Go home', complete: false },
      ]
    }
  }
});

Vue.component('task', {
  template: '<li><slot></slot><li>',
});
new Vue({
  el: '#root',
})
