import Form from './common/components/Form/Form';

import TodoList from './Todo/components/TodoList/TodoList';

export default function Home() {
    return (
        <div className="pt-[22px]">
            <Form />
            <TodoList />
        </div>
    );
}
