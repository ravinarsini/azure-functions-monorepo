import mongoose from 'mongoose';

declare enum TodoItemState {
    Todo = "todo",
    InProgress = "inprogress",
    Done = "done"
}
type TodoItem = {
    id: mongoose.Types.ObjectId;
    listId: mongoose.Types.ObjectId;
    name: string;
    state: TodoItemState;
    description?: string;
    dueDate?: Date;
    completedDate?: Date;
    createdDate?: Date;
    updatedDate?: Date;
};
declare const TodoItemModel: mongoose.Model<TodoItem, {}, {}, {}, any>;

type todoItem_TodoItem = TodoItem;
declare const todoItem_TodoItemModel: typeof TodoItemModel;
type todoItem_TodoItemState = TodoItemState;
declare const todoItem_TodoItemState: typeof TodoItemState;
declare namespace todoItem {
  export { type todoItem_TodoItem as TodoItem, todoItem_TodoItemModel as TodoItemModel, todoItem_TodoItemState as TodoItemState };
}

type TodoList = {
    id: string;
    name: string;
    description?: string;
    createdDate?: Date;
    updatedDate?: Date;
};
declare const TodoListModel: mongoose.Model<TodoList, {}, {}, {}, any>;

type todoList_TodoList = TodoList;
declare const todoList_TodoListModel: typeof TodoListModel;
declare namespace todoList {
  export { type todoList_TodoList as TodoList, todoList_TodoListModel as TodoListModel };
}

export { todoItem, todoList };
