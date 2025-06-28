import Form from './add todo form/Form.jsx'
import TodoList from './todo-list/TodoList.jsx'
import './Main.css'
import { useRef, useState } from 'react'

export default function Main() {
	const [allTodos, setAllTodos] = useState([])
	const optionsList = useRef(null)

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

	function sortTodosByCompletion() {
		setAllTodos(prevTodos => {
			return [...prevTodos].sort((a, b) => {
				return a.isDone === b.isDone ? 0 : a.isDone ? 1 : -1
			})
		})
	}

	function deleteAll() {
		setAllTodos([])
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
					<div
						onClick={() => {
							optionsList.current.classList.toggle('active')
						}}
						className='filter tool-item'
					>
						<i className='fa-solid fa-filter'></i>
						<span>
							Filter <i class='fa-solid fa-caret-down'></i>
						</span>

						<ul ref={optionsList} className='options'>
							<li>By time</li>
							<li onClick={sortTodosByCompletion}>By completion</li>
						</ul>
					</div>
					<div onClick={deleteAll} className='deleteAll tool-item'>
						<i className='fa-solid fa-trash'></i>
						<span>Delete all</span>
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
