
//Funcion asincrona API_REST con el API de FETCH
export async function apiFetch (options){

    let {method, url, success, error, data } = options;//destruccturacion del objeto en las variables definidas para el proceso
    
    try {
        let res;
        if (method === "GET") {//si el metodo a utilizar es diferente de GET
            res = await fetch(url);//declaro e inicializo variable que detendra la ejecucion del codigo hasta que traiga los recursos solicitados en fetch y los alamcene ne la variable     
            
        }  else if(method === "DELETE"){//Si el metodo a utilizar es DELETE
            res = await fetch(url,{//declaro e inicializo variable que detendra la ejecucion del codigo hasta que traiga los recursos solicitados en fetch y los alamcene de la variable     
                method: method,//metodo a utilizar de l apeticion
                headers: {"Content-type": "application/json; charset=UTF-8"}//declaro e inicializo variable que detendra la ejecucion del codigo hasta que traiga los recursos solicitados en fetch y los alamcene ne la variable
            });
            
        }else{//Si el metodo a utilizar es PUT o POST
            res = await fetch(url,{
                    method: method,//metodo a utilizar de l apeticion
                    body: JSON.stringify(data),//cuerpo de la peticion
                    headers: {"Content-type": "application/json; charset=UTF-8"}})//declaro e inicializo variable que detendra la ejecucion del codigo hasta que traiga los recursos solicitados en fetch y los alamcene ne la variable
        }

            let json = await res.json();//declaro e inicializo variable que detendra la ejecucion del codigo hasta que convierta la respuesta en un objeto JSON y los alamcene en la variable
       

        if(!res.ok){//Si la respuesta no es satisfactoria o esta fallando
            throw {status: res.status, statusText : res.statusText};//dentro del try catch para enviar al catch se utiliza el throw
        }

        console.log(json);

        success(json);//Ejecuto el metodo succes de el objeto enviado como parametro la data con formato JSON

    } catch (err) {
        error(err);//Ejecuto el metodo error del objeto enviado
    }

}



