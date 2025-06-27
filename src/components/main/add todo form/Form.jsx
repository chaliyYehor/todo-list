import './Form.css'
import { nanoid } from 'nanoid'

export default function Form({ setAllTodos }) {
	function formSubmitHandle(formData) {
		const getTodoValue = formData.get('add-todo')

		if (getTodoValue.trim() !== '') {
			setAllTodos(prevTodos => [
				{ id: nanoid(), value: getTodoValue, isDone: false },
				...prevTodos
			])
		}
	}

	return (
		<form action={formSubmitHandle}>
			<div className='info-wrapper'>
				<input
					name='add-todo'
					type='text'
					className='add-todo'
					placeholder='add a task...'
				/>
				<button type='submit'>add</button>
			</div>
		</form>
	)
}
