import Form from './add todo form/Form.jsx'
import TodoList from './todo-list/TodoList.jsx';
import './Main.css'
import { useState } from 'react'

export default function Main() {
	const [allTodos, setAllTodos] = useState([])

	return (
		<main>
			<Form setAllTodos={setAllTodos}/>
			<TodoList allTodos={allTodos}/>
		</main>
	)
}
