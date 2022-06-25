const _private=new WeakMap();
class Libro{
constructor(autor,nombre,numeropagina){
    const propiedades={
    _autor:autor,
    _nombre:nombre,
    _numeropagina:numeropagina

}
_private.set(this,{propiedades})
}
set nombrelibro(nombre1){
return _private.get(this).propiedades['_nombre']=nombre1
}
get mostrarlibro(){
return _private.get(this).propiedades['_nombre'];
}

}
let libro1=new Libro("gabriel garcia marquez","cien años de soledad","350")
console.log(libro1)