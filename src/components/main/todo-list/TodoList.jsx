import './TodoList.css'
import Item from './todo-list-item/Item'

export default function TodoList({
	allTodos,
	makeTodoDone,
	deleteTodo,
}) {
	return (
		<ul>
			{allTodos.map(todo => (
				<Item
					key={todo.id}
					makeTodoDone={makeTodoDone}
					deleteTodo={deleteTodo}
					value={todo.value}
					id={todo.id}
					isDone={todo.isDone}
					date={todo.date}
					time={todo.time}
				/>
			))}
		</ul>
	)
}
