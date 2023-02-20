/**
 * Metodo exportable para la animacion del boton
       * animacion implementation for Objects/NodeLists/Arrays, automatic type loops and context options
       *
       * @private
       * @author Todd Motto
       * @link https://github.com/toddmotto/foreach
       * @param {Array|Object|NodeList} collection - Collection of items to iterate, could be an Array, Object or NodeList
       * @callback requestCallback      callback   - Callback function for each iteration.
       * @param {Array|Object|NodeList} scope=null - Object/NodeList/Array that forEach is iterating over, to use as the this value when executing callback.
       * @returns {}
       */
export let animacion = function (t, o, r) {
    if ("[object Object]" === Object.prototype.toString.call(t))
      for (var c in t)
        Object.prototype.hasOwnProperty.call(t, c) && o.call(r, t[c], c, t);
    else for (var e = 0, l = t.length; l > e; e++) o.call(r, t[e], e, t);
  };


  export default function hamburgerMenu(panelBtn, panel){//funcion exportable con dos elementos de entrada 
    const d = document;/*guardo la llamda al docuemnt en una variable */

    d.addEventListener("click",e=>{
      if (e.target.matches(panelBtn)) {/*si el objeto que origina el evento coincido con la variable panlelbtn*/
        d.querySelector(panel).classList.toggle("is-active")
      }
    })
  }