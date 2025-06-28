import './Form.css'
import { nanoid } from 'nanoid'

export default function Form({ setAllTodos }) {
	function formSubmitHandle(formData) {
		const getTodoValue = formData.get('add-todo')

		if (getTodoValue.trim() !== '') {
			setAllTodos(prevTodos => [
				{
					id: nanoid(),
					value: getTodoValue,
					isDone: false,
					date: getCurrentDateTime().date,
					time: getCurrentDateTime().time,
				},
				...prevTodos,
			])
		}
	}

	function getCurrentDateTime() {
		const now = new Date()

		const day = String(now.getDate()).padStart(2, '0')
		const month = String(now.getMonth() + 1).padStart(2, '0') // месяцы от 0 до 11
		const year = now.getFullYear()

		const hours = String(now.getHours()).padStart(2, '0')
		const minutes = String(now.getMinutes()).padStart(2, '0')

		return { date: `${day}.${month}.${year}`, time: `${hours}:${minutes}` }
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
