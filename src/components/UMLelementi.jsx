import styles from './UMLelementi.module.css';

const UMLelementi = () => {
  return (
    <article>
    <h3>
        Kādi UML elementi ir šajā diagrammā?
    </h3>
        <p>
        Use case diagramā var būt dažādi UML elementi, lai modelētu sistēmas funkcionalitāti un to, kā lietotāji un citas sistēmas sastāvdaļas saistās ar šo funkcionalitāti. 
        </p>
        <ul>
            <li>Use Case (izmantošanas gadījums):Galvenais elements use case diagramā. Tas reprezentē konkrētu sistēmas funkcionalitāti vai uzdevumu, ko lietotāji var veikt, kā arī katrs use case ir attēlots ar taisnstūra figūru, kurai ir nosaukums.</li>
            <li>Actor (aktieris):Personas, lietotāji vai citas sistēmas sastāvdaļas, kas mijiedarbojas ar sistēmu, izmantojot use case. Aktierus var attēlot ar cilvēku vai sistēmas simbolu un ar to nosaukumiem.</li>
            <li>Relationships (sakari): Use case diagramā var būt vairāki veidi, kā attēlot sakarus starp aktieriem un use case. Visbiežāk sastopamie sakari ir:</li>
            <li> 
            Includes (iekļauj): Norāda, ka viens use case iekļauj citu. Tas nozīmē, ka konkrētais use case var tikt izpildīts tikai tad, ja notiek arī iekļaujošais use case.
            Extends (paplašina): Norāda, ka viens use case var paplašināt citu. Tas nozīmē, ka paplašinātais use case ir opcionāls un var tikt izpildīts, ja ir īpašas apstākļu kombinācijas vai lietotāju darbības.
            Generalization (vispārīgojums): Tas attēlo ģenerisku attiecību starp use case un aktieriem. Ja viens aktieris ir vispārīgs priekš citiem aktieriem, tas tiks attēlots ar bultu, kas norāda uz vispārīgo aktieri.
            </li>
            <li>System boundary (sistēmas robeža): Šī figūra attēlo sistēmas fizisko vai funkcionalitātes robežu. Tas norāda, kas ir iekšā un kas ārpus sistēmas.</li>
        </ul>
    </article>
  )
}

export default UMLelementi