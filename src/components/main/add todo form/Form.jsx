import './Form.css'

export default function Form() {
	function formSubmitHandle(formData) {
		const todo = formData.get('add-todo')
		console.log(todo)
	}

	return (
		<form action={formSubmitHandle}>
			<div className='info-wrapper'>
				<input name='add-todo' type='text' className='add-todo' placeholder='add a task...'/>
				<button type='submit'>add</button>
			</div>
		</form>
	)
}
