import {Button, Checkbox, FormControlLabel, FormGroup, TextField, Typography} from "@mui/material";
import {Save} from "@mui/icons-material";

import './NewProduct.css'
import SideNav from "./SideNav.jsx";

function NewProduct(){
    return(
        <>
            <SideNav/>
            <Typography variant="h5" component="h5">
                Ingresa los datos para registrar un producto
            </Typography>

            <FormGroup className="form-box">
                <TextField required id="producto" label="Producto" variant="outlined"/>
                <TextField required id="sku" label="SKU"/>
                <TextField required id="no-stock" label="Numero Stock" type="number"/>
                <FormControlLabel
                    control={<Checkbox defaultChecked/>}
                    label="Producto Disponible"
                />

                <Button component="label" role={undefined} variant="contained" tabIndex={-1}
                        startIcon={<Save/>
                        }>
                    Guardar Producto
                </Button>

            </FormGroup>

        </>
    )
}

export default NewProduct;