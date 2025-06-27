import './Item.css'

export default function Item({ value }) {
	return (
		<li>
			<p>{value}</p>
			<section className='actions'>
				<i className="fa-solid fa-trash"></i>
				<i className="fa-solid fa-check"></i>
			</section>
		</li>
	)
}
