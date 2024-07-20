function fetchStore(request, endpoint, setSaved, setResponse, setNotificacion)  {

    fetch(endpoint, {
        method: "POST",
        mode: 'cors',
        body: JSON.stringify(request),
        headers: {"Content-type": "application/json; charset=UTF-8", "Access-Control-Allow-Origin" : "*"}
    })
        .then(response => {
            if (response.ok && response.status === 201) {
                console.log(response);
                setSaved(true);
                return response.json();
            } else {
                console.log('error al guardar el registro')
                throw Error(response.statusText)
            }
        })
        .then(json => {
        setResponse(json)
        setNotificacion(json.notificacion)
        setTimeout(() => {
            setSaved(false)
        }, "5000");
    })
        .catch(err => {
            console.log(err)
            return null;
        });

}

export default fetchStore;