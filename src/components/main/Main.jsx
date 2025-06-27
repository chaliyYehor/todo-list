import Form from './add todo form/Form.jsx'
import TodoList from './todo-list/TodoList.jsx'
import './Main.css'
import { useState } from 'react'

export default function Main() {
	const [allTodos, setAllTodos] = useState([])

	function makeTodoDone(id) {
		setAllTodos(prevTodos =>
			prevTodos.map(todo => {
				if (todo.id === id) {
					return { ...todo, isDone: !todo.isDone }
				}
				return todo
			})
		)
	}

	function sortTodos(todos) {
		setAllTodos(prevTodos => {
			return [...prevTodos].sort((a, b) => {
				return a.isDone === b.isDone ? 0 : a.isDone ? 1 : -1
			})
		})
	}

	function deleteTodo(id) {
		setAllTodos(prevTodos => {
			return prevTodos.filter(todo => todo.id !== id)
		})
	}

	return (
		<main>
			<Form setAllTodos={setAllTodos} />
			{allTodos.length > 1 ? (
				<section className='tools'>
					<div className='filter tool-item'>
						<i className='fa-solid fa-filter'></i>
						<span>filter</span>
					</div>
					<div className='deleteAll tool-item'>
						<i className='fa-solid fa-trash'></i>
						<span>delete all</span>
					</div>
				</section>
			) : null}
			<TodoList
				allTodos={allTodos}
				makeTodoDone={makeTodoDone}
				deleteTodo={deleteTodo}
			/>
		</main>
	)
}
