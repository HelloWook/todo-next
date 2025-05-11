import { EditTodoData, TodoData } from './../types/todo';

export const mockTodo: TodoData[] = [
    { id: 1, isCompleted: false, name: '안녕' },
    { id: 2, isCompleted: true, name: '안녕' }
];

export const editMockTodo: EditTodoData = {
    id: 1,
    isCompleted: false,
    name: '안녕',
    imageUrl: ''
};
