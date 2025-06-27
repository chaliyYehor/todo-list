import './Item.css'

export default function Item({ value }) {
	return (
		<li>
			<span>{value}</span>
			<section className='actions'>
				<i className="fa-solid fa-trash"></i>
				<i className="fa-solid fa-check"></i>
			</section>
		</li>
	)
}
