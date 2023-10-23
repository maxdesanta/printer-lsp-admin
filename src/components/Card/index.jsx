import './_style.scss'

export default function Card({text, number}) {
  return (
    <div className='card'>
        <p>{text}</p>
        <p>{number}</p>
    </div>
  )
}