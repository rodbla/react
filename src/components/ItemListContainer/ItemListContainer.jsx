
 import rudolf from "../../assets/rudolf.png"

 


 
 import "./itemlistcontainer.css"



const ItemListContainer = ({ greeting }) => {

    return (
        <>
        <div>
            {greeting}
        </div>
            <div className="container">
                <div className="box1">
                    <h2 className="mercado">Mercado Internacional!</h2>
                    <strong className="descuento">50% Off por Navidad</strong>
                </div> 
            </div>
            <div  className="section"> 
                <div className="frase">
                    <img src={rudolf} alt={rudolf}  className="rudolf"/> 
                    <h2 className="title1">Increibles promociones en el mes de Diciembre</h2>
                </div>
            </div>
        </>
    )
}

export default ItemListContainer;