// 나중에 정리
export interface Todo {
    name: string;
}

export interface TodoData extends Todo {
    id: number;
    isCompleted: boolean;
}

export interface EditTodoData {
    name?: string;
    memo?: string;
    imageUrl?: string;
    isCompleted: boolean;
}

export interface DetailTodo extends TodoData {
    tenantId: string;
    memo: string;
}
