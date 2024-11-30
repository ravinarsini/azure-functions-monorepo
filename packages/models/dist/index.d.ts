declare enum TodoItemState {
    Todo = "todo",
    InProgress = "inprogress",
    Done = "done"
}
type TodoItem = {
    id: number;
    listId: number;
    name: string;
    state: TodoItemState;
    description?: string;
    dueDate?: Date;
    completedDate?: Date;
    createdDate?: Date;
    updatedDate?: Date;
};
interface User {
    id: number;
    name: string;
    active: boolean;
}

type todoItem_TodoItem = TodoItem;
type todoItem_TodoItemState = TodoItemState;
declare const todoItem_TodoItemState: typeof TodoItemState;
type todoItem_User = User;
declare namespace todoItem {
  export { type todoItem_TodoItem as TodoItem, todoItem_TodoItemState as TodoItemState, type todoItem_User as User };
}

type TodoList = {
    id: string;
    name: string;
    description?: string;
    createdDate?: Date;
    updatedDate?: Date;
};

type todoList_TodoList = TodoList;
declare namespace todoList {
  export type { todoList_TodoList as TodoList };
}

export { todoItem, todoList, todoItem as user };
