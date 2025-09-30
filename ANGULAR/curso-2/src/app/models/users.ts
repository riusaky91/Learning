export default interface Users {
    id:number;
    name: string;
    email: string;
    adress: [ // se prodia reemplazar con un objeto aparte en el modelo en lugar de un arreglo si solo se espera una direccion por usuario
        {
            street: string;
            suite: string;
            city: string;
            zipcode: string;
            geo: string;
        }
    ];
    phone: string;
    website: string;
    company: [
        {
            name: string;
            catchPhrase: string;
            bs: string;
        }
    ];

}