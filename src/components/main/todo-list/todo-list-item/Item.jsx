import './Item.css'
import clsx from 'clsx'

export default function Item({ value, isDone, id, makeTodoDone }) {
	const classList = clsx({
		'done': isDone
	})

	return (
		<li className={classList}>
			<p>{value}</p>
			<section className='actions'>
				<i className="fa-solid fa-trash"></i>
				<i onClick={() => makeTodoDone(id)} className="fa-solid fa-check"></i>
			</section>
		</li>
	)
}
