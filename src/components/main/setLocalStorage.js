export default function setLocalStorage(allTodos) {
	localStorage.setItem('allTodos', JSON.stringify(allTodos))
}