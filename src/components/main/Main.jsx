import Form from './add todo form/Form.jsx'
import TodoList from './todo-list/TodoList.jsx'
import './Main.css'
import { useState } from 'react'

export default function Main() {
	const [allTodos, setAllTodos] = useState([])

	function makeTodoDone(id) {
		console.log(1)
		setAllTodos(prevTodos => prevTodos.map(todo => {
			if(todo.id === id) {
				return {...todo, isDone: !todo.isDone}
			}
			return todo
		}))
	}

	return (
		<main>
			<Form setAllTodos={setAllTodos} />
			<TodoList allTodos={allTodos} makeTodoDone={makeTodoDone}/>
		</main>
	)
}
