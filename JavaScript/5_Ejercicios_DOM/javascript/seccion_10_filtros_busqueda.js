export default function filtros(buscador, cards) {
  const d = document; //Constante para simplificar la escritura en el uso del DOM

  const $cards = d.querySelectorAll(cards); //declaro e inicializo constante cque almacena nodos con la clase cards

  d.addEventListener("keyup", (e) => {
    //Metodo que se ejecuta cada vez uqe se levante una tecla oprimida

    if (e.target.matches(buscador)) {
      //si el elemento buscador coicide con el metodo

      for (const iterator of $cards[0].children) {
        //recorro los hijos de la lsita de nodos

        if(e.key === "Escape") e.target.value="";//si la teclla escape se limpia el valor del input

        if (
          !iterator.firstElementChild.alt.toLowerCase().includes(e.target.value)
        ) {
          //Si en el o los caracteres escritos NO se encuentran dentro del el texto alamacenado en el atributo alt
          iterator.classList.add("esconder"); //añado la clase esconder
        } else {
          iterator.classList.remove("esconder"); //elimino la clase esconder
        }
      }
    }
  });
}
