export class Model {
  user;
  items;

  constructor() {
    this.user = 'Mehmet';
    this.items = [
        new ToDoItem("Spor",true),
        new ToDoItem("Kahvaltı",false),
        new ToDoItem("Kitap",false),
        new ToDoItem("Sinema",false)
    ];
  }
}

export class ToDoItem {
  description;
  action;

  constructor(description, action) {
    this.description = description;
    this.action = action;
  }
}
