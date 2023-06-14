const d= document;

//Funcion asincrona API_REST con la libreria de axios
export async function axiosD (options){
    
    let {method, url, success, error, dato } = options;//destruccturacion del objeto en las variables definidas para el proceso
    
    try {
        
        let res;
        if (method === "GET") {//si el metodo a utilizar es diferente de GET
            res = await axios.get(url);//declaro e inicializo variable que detendra la ejecucion del codigo hasta que traiga los recursos solicitados en axios y los alamcena en la variable
        }else if(method === "DELETE"){//Si el metodo a utilizar es DELETE
            res = await axios(url,{//declaro e inicializo variable que detendra la ejecucion del codigo hasta que traiga los recursos solicitados en fetch y los alamcene de la variable     
                method: method,//metodo a utilizar de l apeticion
                headers: {"Content-type": "application/json; charset=UTF-8"}//declaro e inicializo variable que detendra la ejecucion del codigo hasta que traiga los recursos solicitados en fetch y los alamcene ne la variable
            });
            
        }else{//Si el metodo a utilizar es POST
            console.log("rtrtrtrtr",dato);
            res = await axios(url,{
                    method: method,//metodo a utilizar de l apeticion
                    data: JSON.stringify(dato),//cuerpo de la peticion
                    headers: {"Content-type": "application/json; charset=UTF-8"}})//declaro e inicializo variable que detendra la ejecucion del codigo hasta que traiga los recursos solicitados en fetch y los alamcene ne la variable
        }
        
        let json = await res.data;////declaro e inicializo variable que detendra la ejecucion del codigo hasta que convierta la respuesta en un objeto JSON y los alamcene en la variable
         

        success(json);//Ejecuto el metodo succes de el objeto enviado como parametro la data con formato JSON
        
    } catch (error) {//capturo cualquier tipo de error posible
        error(error);//Ejecuto el metodo error del objeto enviado
    }

}