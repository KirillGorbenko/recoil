import {memo} from 'react';
import {useRecoilValueLoadable} from "recoil";

import {allTodosQuery} from "../store/todos.ts";

const TodoList = memo(() => {
    const allTodosLoadable = useRecoilValueLoadable(allTodosQuery);

    switch (allTodosLoadable.state) {
        case 'hasValue':
            return(
                <ul>
                    {allTodosLoadable.contents.map(({title, id, completed}) => (
                        <li key={id} style={{display: 'flex', gap: 10}}>
                            <p>{title}</p>
                            <input type="checkbox" defaultChecked={completed}/>
                        </li>
                    ))}
                </ul>
            );
        case 'loading':
            return <div>Loading...</div>;
        case 'hasError':
            throw allTodosLoadable.contents;
    }
});

export default TodoList;