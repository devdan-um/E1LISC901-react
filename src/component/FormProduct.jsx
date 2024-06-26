import './FormProduct.css'

function FormProduct(){
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

                    <button type="submit">Guardar Producto</button>

                </div>
            </form>
        </>
)
}

export default FormProduct