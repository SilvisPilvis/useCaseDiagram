import styles from './BaseInfo.module.css';
function BaseInfo() {
  return (
    <article>
        <h3>
        Lietojuma gadījumu diagramma ir uzvedbas modļua daļa
        </h3>
        <p>
        Šī diagramma apraksta sistēmas augsta līmeņa funkcijas un darbības jomu. Šajās diagrammās ir norādītas arī mijiedarbības starp sistēmu un tās dalībniekiem. Lietošanas gadījumu diagrammās lietošanas gadījumi un dalībnieki apraksta, ko sistēma dara un kā dalībnieki to izmanto, bet ne to, kā sistēma darbojas iekšēji.
        Šai diadrammai ir 4 galvenie elementi:
        </p>
        <ul>
            <li>sistēma</li>
            <li>aktieri/lietotāji</li>
            <li>lietošanas gadījumi</li>
            <li>attiecības</li>
        </ul>
        <p>
        Efektīva lietojuma gadījumu diagramma var palīdzēt jūsu komandai apspriest un pārstāvēt:
        </p>
        <ul>
            <li>scenārijus, kuros jūsu sistēma vai lietojumprogramma mijiedarbojas ar cilvēkiem, organizācijām vai ārējām sistēmām.</li>
            <li>mērķus, kurus jūsu sistēma vai lietojumprogramma palīdz sasniegt šīm vienībām (tā sauktajiem dalībniekiem).
        jūsu sistēmas darbības jomu</li>
        </ul>
    </article>
  )
}

export default BaseInfo