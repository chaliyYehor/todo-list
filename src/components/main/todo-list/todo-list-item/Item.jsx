import { useRef } from 'react'
import './Item.css'
import clsx from 'clsx'

export default function Item({ value, isDone, id, makeTodoDone, deleteTodo }) {
	const classList = clsx({
		done: isDone,
	})

	const delApproveElement = useRef(null)

	function deleteHandle() {
		delApproveElement.current.classList.add('active')
	}

	return (
		<li className={classList}>
			<p>{value}</p>
			<section className='actions'>
				<i onClick={deleteHandle} className='fa-solid fa-trash'></i>
				<i onClick={() => makeTodoDone(id)} className='fa-solid fa-check'></i>
			</section>

			<div ref={delApproveElement} className='deletition-approvement active'>
				<span>Are you sure you want to delete this task?</span>
				<section className='decisionBtns'>
					<button className='approve'>
						<i className='fa-solid fa-check'></i>
					</button>
					<button className='decline'>
						<i class='fa-solid fa-xmark'></i>
					</button>
				</section>
			</div>
		</li>
	)
}
