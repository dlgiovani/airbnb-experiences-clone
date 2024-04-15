import airbnb from "../assets/airbnb.svg";


function Header() {

    return (
        <header>
            <nav>
                <div>
                    <img src={airbnb}></img>
                </div>
            </nav>
        </header>
    )

};



export default Header