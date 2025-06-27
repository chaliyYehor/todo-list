import './Form.css'

export default function Form() {
	function formSubmitHandle(formData) {
		const todo = formData.get('add-todo')
		console.log(todo);
	}

	return (
		<form action={formSubmitHandle}>
			<input name='add-todo' type="text" className="add-todo" />
			<button type="submit">add</button>
		</form>
	)
}
