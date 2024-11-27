export enum TodoItemState {
    Todo = "todo",
    InProgress = "inprogress",
    Done = "done"
}

export type TodoItem = {
    id: number
    listId: number
    name: string
    state: TodoItemState
    description?: string
    dueDate?: Date
    completedDate?: Date
    createdDate?: Date
    updatedDate?: Date
}

export interface User {
    id: number;
    name: string;
    active: boolean;
}