import mural from "../assets/mural.png";

function Panel() {

    return (
        <section className="panel">
            <img src={mural}
                alt="Mural de pessoas vivendo experiências" />
            <h1>
                Experiências Online
            </h1>
            <p>
                Una-se a atividades interativas únicas lideradas por anfitriões autênticos - tudo sem sair do conforto de casa.
            </p>
        </section>
    )
}



export default Panel