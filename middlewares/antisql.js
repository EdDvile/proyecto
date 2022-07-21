
const anti = ( palabr ) => {
  var palabra = JSON.stringify(palabr);
  for (let i = 0;i<=palabr.length ; i++){
    palabra=palabra.replace("select", 'seleccion')
    palabra=palabra.replace("update", 'actualizar')
    palabra=palabra.replace("create", 'crea')
    palabra=palabra.replace("drop", 'quita')
    palabra=palabra.replace("delete", 'elimina')
    palabra=palabra.replace("xp_", 'xpSP_')
    palabra=palabra.replace("where", 'donde')
    palabra=palabra.replace("group by", 'agrupado')
    palabra=palabra.replace("Trigger", 'gatilla')
    palabra=palabra.replace("declare", 'declara')
    palabra=palabra.replace("open", 'abrir')
    palabra=palabra.replace("while", 'mientras')
    palabra=palabra.replace("print", 'imprime')
    palabra=palabra.replace("execute", 'ejecuta')
    palabra=palabra.replace("commit", 'no_guarda')
    palabra=palabra.replace("varchar", 'vc')
    palabra=palabra.replace("exec", 'ejec')
    palabra=palabra.replace("char(", 'intento_inyeccion(')
    palabra=palabra.replace("ascii(", 'intento_inyeccion(')
    palabra=palabra.replace("script", 'cod')
    palabra=palabra.replace("'", '&#145;')
    palabra=palabra.replace("'", '&#39;')
    palabra=palabra.replace("-", '&#45;')
    palabra=palabra.replace("[", '&#91;')
    palabra=palabra.replace("]", '&#93;')
    palabra=palabra.replace("%", '&#37;')
    palabra=palabra.replace("Ã³", 'ó')
    palabra=palabra.replace("Ãº", 'ú')
    palabra=palabra.replace("Ã¡", 'á')
    palabra=palabra.replace("Ã©", 'é')
    palabra=palabra.replace("Ã", 'í')
    palabra=palabra.replace("í±", 'ñ')
      }
      var palabraf = JSON.parse(palabra);
   return palabraf
}



module.exports = {
    anti
}
