import fetchStore from '../hooks/fetchStore.jsx'
import {useState, useEffect} from "react";

function FormProduct(){

    const [saved, setSaved] = useState(false);


    useEffect(() => {
        document.title = `You clicked ${count} times`;
    });

    return (
        <>
            <h2>Ingresa los datos para registrar un producto</h2>

            <form className="form-box">

                <div className="fields">

                    <input name="producto"      type="text"     placeholder="Producto"/>
                    <input name="sku"           type="text"     placeholder="SKU"/>
                    <input name="stock"         type="number"   placeholder="Cantidad de Stock"/>
                    <textarea name="detalles"                   placeholder="Detalles del producto" />

                    <div className="checkboxWithLabel">
                        <label>
                            <input type="checkbox" name="checkboxDisponible"/>
                            Producto Disponible
                        </label>
                    </div>

                    <button onClick={fetchStore}>Guardar Producto</button>

                </div>
            </form>
        </>
)
}

export default FormProduct