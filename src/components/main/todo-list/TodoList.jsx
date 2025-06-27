import './TodoList.css'
import Item from './todo-list-item/Item'

export default function TodoList({ allTodos, makeTodoDone, sortTodos }) {
	return (
		<ul>
			{allTodos.map(todo => (
				<Item
					key={todo.id}
					makeTodoDone={makeTodoDone}
					sortTodos={sortTodos}
					value={todo.value}
					id={todo.id}
					isDone={todo.isDone}
				/>
			))}
		</ul>
	)
}
