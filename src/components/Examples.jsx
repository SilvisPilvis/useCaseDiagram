import styles from './Examples.module.css';
import image from './example.png'

export const Examples = () => {
  return (
    <article>
        <h3>Piemērs un paskaidrojums.</h3>
        <img src={image} alt="" />
    </article>
  )
}

export default Examples