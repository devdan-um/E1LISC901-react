import {Save} from "@mui/icons-material";
import {Alert, AlertTitle, Button, Container, Grid, TextField} from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

function Login(){

    const [saved, setSaved] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {

    }), [saved];

    function fetchApiStore(form) {
        form.preventDefault();
        console.log(form);
        console.log(form.target.elements.email.value)
        console.log(form.target.elements.password.value)

        const request = {
            usuario: form.target.elements.email.value,
            password: form.target.elements.password.value
        };

        fetch('http://localhost:8181/validate', {
            method: "POST",
            mode: 'cors',
            body: JSON.stringify(request),
            headers: {"Content-type": "application/json; charset=UTF-8", "Access-Control-Allow-Origin" : "*"}
        })
            .then(response => {
                if (response.status == 200) {
                    console.log(response);
                    navigate("/home")
                } else {
                    console.log('error en credenciales')
                    setSaved(true);

                    setTimeout(() => {
                        setSaved(false)
                    }, "5000");
                }
            })
            .catch(err => console.log(err))
    }

    return (
        <>

            <form onSubmit={event => fetchApiStore(event)}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />

                <Grid container spacing={2}>

                <Grid item xs={12}>
                <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                />
            </Grid>
                </Grid>

                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                >
                    Sign Up
                </Button>

                {saved
                    ? <Alert severity="error">
                        <AlertTitle>Error al identificarse</AlertTitle>
                        Usuario o Contraseña incorrectas
                    </Alert>
                    : <></>
                }

                
            </Container>
            </form>

        </>

    );

}

export default Login;