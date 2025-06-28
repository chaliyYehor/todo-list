import Form from './add todo form/Form.jsx'
import TodoList from './todo-list/TodoList.jsx'
import setLocalStorage from './setLocalStorage.js'
import './Main.css'
import { useEffect, useRef, useState } from 'react'

export default function Main() {
	const [allTodos, setAllTodos] = useState([])
	const [olderFirst, setOlderFirst] = useState(true)
	const optionsList = useRef(null)

	// LocalStorage

	useEffect(() => {
		if (allTodos.length > 0) {
			setLocalStorage(allTodos)
		}
	}, [allTodos])

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

	function sortTodosByDateAndTime() {
		setAllTodos(prevTodos => {
			return [...prevTodos].sort((a, b) => {
				const dateA = new Date(
					`${a.date.split('.').reverse().join('-')}T${a.time}`
				)
				const dateB = new Date(
					`${b.date.split('.').reverse().join('-')}T${b.time}`
				)
				return olderFirst ? dateA - dateB : dateB - dateA
			})
		})
		setOlderFirst(prevState => !prevState)
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
							<li onClick={sortTodosByDateAndTime}>By time</li>
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
