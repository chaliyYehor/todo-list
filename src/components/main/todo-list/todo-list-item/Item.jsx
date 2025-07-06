import { useRef } from 'react'
import './Item.css'
import clsx from 'clsx'

export default function Item({
	value,
	isDone,
	id,
	makeTodoDone,
	deleteTodo,
	date,
	time,
}) {
	const classList = clsx('list-item', {
		done: isDone,
	})

	const delApproveElement = useRef(null)

	function deleteHandle() {
		delApproveElement.current.classList.add('active')
	}

	function denyDeletition() {
		delApproveElement.current.classList.remove('active')
	}

	return (
		<li className={classList}>
			<p>{value}</p>
			<section className='actions'>
				<i onClick={deleteHandle} className='fa-solid fa-trash'></i>
				<i onClick={() => makeTodoDone(id)} className='fa-solid fa-check'></i>
			</section>

			<section ref={delApproveElement} className='deletition-approvement active'>
				<span>Are you sure you want to delete this task?</span>
				<section className='decisionBtns'>
					<button onClick={() => deleteTodo(id)} className='approve'>
						<i className='fa-solid fa-check'></i>
					</button>
					<button onClick={denyDeletition} className='decline'>
						<i className='fa-solid fa-xmark'></i>
					</button>
				</section>
			</section>
			<section className='date-info'>
				<span className='date'>{date}</span>
				<span className='time'>{time}</span>
			</section>
		</li>
	)
}
