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

type todoItem_TodoItem = TodoItem;
type todoItem_TodoItemState = TodoItemState;
declare const todoItem_TodoItemState: typeof TodoItemState;
declare namespace todoItem {
  export { type todoItem_TodoItem as TodoItem, todoItem_TodoItemState as TodoItemState };
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

interface User {
    id: number;
    name: string;
    active: boolean;
}

type user_User = User;
declare namespace user {
  export type { user_User as User };
}

export { todoItem, todoList, user };
