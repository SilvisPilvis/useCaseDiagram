import styles from './UCDBlog.module.css';
import image from './ucd.png'

const UCDBlog = () => {
  return (
    <article>
        <h3>Kā šī diagramma izskatītos bloga gadījumā?</h3>
        <p>Atbilde is šādi:</p>
        <img src={image} alt="" />
    </article>
  )
}

export default UCDBlog