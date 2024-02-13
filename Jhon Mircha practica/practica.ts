/*
    1) Programa una función que cuente el número de caracteres de una cadena de texto, 
    pe. miFuncion("Hola Mundo") devolverá 10.*/
   //----------"funcion declarada"------------ 
   
    function contarCadena(cadena:string) { 
      return console.log(`la cadena tiene ${cadena.length} caracteres`);
    };

  contarCadena('hola mundo');
 // -----------"funcion expresada"----------- 
 const contarCaracteres2 = (cadena: string) => console.log(`la cadena tiene ${cadena.length} caracteres`);
 
 //contarCaracteres('hola mundo'); 
/*
 2) Programa una función que te devuelva el texto recortado según el número de 
 caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".*/

  const recortarTexto = (cadena ="", longitud = undefined) => 
  (!cadena)
  ? console.warn("No ingresaste una cadena de texto")
  :(longitud === undefined)
  ? console.warn("No ingresaste una lingitud para recortar ")
  : console.info(cadena.slice(0,longitud));

  //recortarTexto('hola mundo', 4);
