[![Tests](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct07-music-datamodel-grupo-a/actions/workflows/node.js.yml/badge.svg?branch=main)](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct07-music-datamodel-grupo-a/actions/workflows/node.js.yml)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=ULL-ESIT-INF-DSI-2122_ull-esit-inf-dsi-21-22-prct07-music-datamodel-grupo-a&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=ULL-ESIT-INF-DSI-2122_ull-esit-inf-dsi-21-22-prct07-music-datamodel-grupo-a)

# Práctica 7 - Digitalizando la colección de música de los abuelos
En esta práctica, la primera grupal de la asignatura, tendrá que llevar a cabo un diseño orientado a objetos del modelo de datos de un sistema de información que permita almacenar una biblioteca de música.

## Descripción de los requisitos del sistema de biblioteca musical

### Generos musicales - Clase desarrollada por Carlos Pío Reyes

Para cada género músical considerado dentro del sistema, se debe almacenar la información siguiente:

1. Nombre del género.
2. Grupos y/o artistas producen música de ese género.
3. Álbumes que hay dentro de la biblioteca relacionados con este género.
4. Canciones que hay dentro de la biblioteca de ese género.

Para esta clase, el nombre del genero sera un string, mientras que el resto de elementos seran arrays de las siguientes clases que se van a desarrollar en el sistema. Aparte de los getter para obtener la información que tienen guardados los atributos debera haber metodos que modifiquen los valores dentro de cada array, añadiendo nuevos valores(siempre y cuando pertenezca al propio género musical,comprobación que se hace antes de añadirlo) o eliminandolos cuando el usuario asi lo desee.

```Typescript
class GeneroMusical{
    
    constructor(private genreName:string, private artistas: string[], private grupos: string[], private albumes: string[], private canciones: Cancion[]){}

    getName():string{
        return this.genreName
    }

    getArtistas():string[]{
        return this.artistas
    }

    getGrupos():string[]{
        return this.grupos 
    }

    getAlbumes():string[]{
        return this.albumes
    }

    getCanciones():Cancion[]{
        return this.canciones
    }

    setGenNam(name:string){
        this.genreName = name
    }

    addArtista(art:Artista):void{
        for(let i:number = 0; i <= this.artistas.length;i++){
            if(this.artistas[i] == art.getNombre()){
                console.log("este artista ya esta añadido a la lista del genero")
                return
            }
        }
        for(let i = 0; i <= art.getGeneros().length; i++){
            if(this.getName() == art.getGeneros()[i].getName()){
                this.artistas.push(art.getNombre())
                return
            }
        }
        console.log("el artista no fue añadido porque no pertenecia a este genero")
    }

    addGrupo(gru:Grupo):void{
        for(let i:number = 0; i <= this.grupos.length;i++){
            if(this.grupos[i] == gru.getNombre()){
                console.log("este grupo ya esta añadido a la lista del genero")
                return
            }
        }
        for(let i = 0; i <= gru.getGeneros().length; i++){
            if(this.getName() == gru.getGeneros()[i].getName()){
                this.grupos.push(gru.getNombre())
                return
            }
        }
        console.log("el grupo no fue añadido porque no pertenecia a este genero")

    }
    
    addAlbum(alb:Album):void{
        for(let i:number = 0; i <= this.albumes.length;i++){
            if(this.albumes[i] == alb.getName()){
                console.log("este album ya esta añadido a la lista del genero")
                return
            }
        }
        for(let i:number = 0; i <= alb.getGenre().length;i++){
            if(this.genreName == alb.getGenre()[i].getName()){
                this.albumes.push(alb.getName())
                return
            }
        }
        console.log("el album no fue añadido porque no pertenecia a este genero")
    }

    addCancion(can:Cancion):void{
        for(let i:number = 0; i <= this.canciones.length;i++){
            if(this.canciones[i].getName() == can.getName()){
                console.log("esta cancion ya esta añadida a la lista del genero")
                return
            }
        }
        for(let i:number = 0; i <= can.getGeneros().length;i++){
            if(this.genreName == can.getGeneros()[i]){
                this.canciones.push(can)
                return
            }
        }
        console.log("la cancion no fue añadida porque no pertenecia a este genero")
    }

    delGrupo(gru:string){
        for(let i:number = 0; i <= this.grupos.length;i++){
            if(this.grupos[i] == gru){
                this.grupos.splice(i,1)
                return
            }
        }
        console.log("No se puede borrar el grupo porque no pertenece al genero")
    }

    delArt(art:string){
        for(let i:number = 0; i <= this.artistas.length;i++){
            if(this.artistas[i] == art){
                this.artistas.splice(i,1)
                return
            }
        }
        console.log("No se puede borrar el artista porque no pertenece al genero")
    }

    delCanc(can:Cancion){
        for(let i:number = 0; i <= this.canciones.length;i++){
            if(this.canciones[i].getName() == can.getName()){
                this.canciones.splice(i,1)
                return
            }
        }
        console.log("No se puede borrar la cancion porque no pertenece al genero")
    }

    delAlbum(alb:string){
        for(let i:number = 0; i <= this.albumes.length;i++){
            if(this.albumes[i] == alb){
                this.albumes.splice(i,1)
                return
            }
        }
        console.log("No se puede borrar el grupo porque no pertenece al genero")
    }
}
```

## Canción - Clase desarrollada por Carlos Pío Reyes

Una canción es una entidad del sistema que representa cada canción dentro de un álbum:

1. Nombre de la canción
2. Autor de la canción.
3. Duración en minutos y segundos.
4. Género(s) al que pertenece.
5. Single: Flag que determina si la canción fue lanzada como single o no.
6. Número de reproducciones totales.

Esta clase tendra como atributos el nombre de la canción y el autor que seran strings, la duración un array de numbers que nos permitiran tener por un lado los segundos y por otro los minutos(en el caso de los segundos esta regulado para que cuando supere el valor 60 se reste esa cantidad y se añada 1 a los minutos tantas veces como sea necesario para que al final el valor quede entre 0 y 60), los géneros que seran un array de strings, un booleano para saber si la canción es un single o no y un number para las reproducciones totales. En esta clase, al igual que la anterior aparte de los getter y setter tenemos dos metodos para modificar el array, añadiendo o quitando elementos del mismo ademas de un metodo que suma un numero de reproducciones a las reproducciones totales.

```Typescript
class Cancion{
    private songName: string
    private autor: string
    private duracion: number[]
    private generos: string[]
    private single: boolean
    private reproduccionTo:number

    constructor(name:string, au:string, du: number[], ge:string[], si:boolean, re:number){
        this.songName = name
        this.autor = au
        if(du.length > 2){
            console.error("la duracion de la cancion tiene que estar en minutos y segundos")
        }
        else{
            this.duracion = du
            while(this.duracion[1] >= 60){
                this.duracion[1] = this.duracion[1] - 60
                this.duracion[0]++
            }
        }
        this.generos = ge
        this.single = si
        this.reproduccionTo = re
    }

    getName():string{
        return this.songName
    }

    getAutor():string{
        return this.autor
    }

    getDuration():number[]{
        return this.duracion
    }

    getGeneros():string[]{
        return this.generos
    }

    getSingle():boolean{
        return this.single
    }

    getRepro():number{
        return this.reproduccionTo
    }

    setName(nam:string){
        this.songName = nam
    }

    setAut(aut:string){
        this.autor = aut
    }

    setDur(dur:number[]){
        if(dur.length != 2){
            console.error("la duracion introducida no es correcta")
        }
        else{
            this.duracion = dur
            while(this.duracion[0] >= 60){
                this.duracion[0] -= 60
                this.duracion[1]++
            }
        }
    }

    addGen(gen:string){
        for(let i:number = 0; i <= this.generos.length; i++){
            if(this.generos[i] == gen){
                console.log("La cancion ya pertenece al genero")
                return
            }
        }
        this.generos.push(gen)
    }

    delGen(gen:string){
        for(let i:number = 0; i <= this.generos.length; i++){
            if(this.generos[i] == gen){
                this.generos.splice(i,1)
                return
            }
        }
        console.log("El artista no pertenece al genero")
    }

    setSing(){
        this.single = !this.single
    }

    addRep(rep:number = 1){
        this.reproduccionTo += rep
    }

    setRep(rep:number){
        this.reproduccionTo = rep
    }
}
```

### Álbum - clase desarrollada por Carlos Pío Reyes

Un álbum representa la información relacionada a un disco musical y contiene múltiples canciones. Se debe considerar:

1. Nombre del álbum.
2. Nombre del grupo o artista que lo publica.
3. Año de publicación.
4. Género(s) musicales con los que está relacionado.
5. Canciones.

En el álbum lo mas destacable es por un lado, que el el atributo que guarda el autor de este puede ser o un artista o un grupo y por otro los géneros y canciones son arrays de la clase GeneroMusical y Canción respectivamente. En esta clase al contar con dos arrays tendremos dos metodos para añadirles valores y dos para borrarlos

```Typescript
class Album{
    private albumName: string
    private autor: Artista | Grupo
    private año: number
    private generos: GeneroMusical[]
    private canciones:Cancion[]

    constructor(name:string, au: Artista|Grupo,ye:number,gen:GeneroMusical[],can:Cancion[]){
        this.albumName = name
        this.autor = au
        this.año = ye
        this.generos = gen
        for(let i:number = 0; i <= can.length; i++){
            if(can[i].getSingle() == false){
                this.canciones.push(can[i])
            }
        }
    }

    getName():string{
        return this.albumName
    }

    getAutor():Artista|Grupo{
        return this.autor
    }

    getYear():number{
        return this.año
    }

    getGenre():GeneroMusical[]{
        return this.generos
    }

    getCancion():Cancion[]{
        return this.canciones
    }

    setName(nam:string){
        this.albumName = nam
    }

    setAutor(aut: Artista|Grupo){
        this.autor = aut
    }
    
    setAño(año:number){
        this.año = año
    }

    addGen(gen:GeneroMusical){
        for(let i:number = 0; i <= this.generos.length; i++){
            if(this.generos[i].getName() == gen.getName()){
                console.log("El genero ya esta añadido al album")
                return
            }
        }
        this.generos.push(gen)
    }

    addCanc(can:Cancion){
        for(let i:number = 0; i <= this.canciones.length; i++){
            if(this.canciones[i].getName() == can.getName()){
                console.log("La cancion ya esta añadido al album")
                return
            }
        }
        this.canciones.push(can)
    }

    delGen(gen:GeneroMusical){
        for(let i:number = 0; i <= this.generos.length; i++){
            if(this.generos[i].getName() == gen.getName()){
                this.generos.splice(i,1)
                return
            }
        }
        console.log("El genero no pertenece al album")
    }

    delCanc(can:Cancion){
        for(let i:number = 0; i <= this.canciones.length; i++){
            if(this.canciones[i].getName() == can.getName()){
                this.canciones.splice(i,1)
                return
            }
        }
        console.log("La cancion no pertenece al album al album")
    }
}
```

### Grupo - Clase desarrollada por Daniel Arbelo y Carlos Pío Reyes

Los grupos serán otra entidad dentro del sistema. Esta entidad deberá contener toda la información asociada a un grupo determinado dentro del sistema:

1. Nombre del grupo.
2. Artistas que forman el grupo.
3. Año de creación del grupo.
4. Género(s) músicales relacionados.
5. Álbumes lanzados con la información relacionada.
6. Cantidad de oyentes mensuales.
Nota: Recuerde que tanto los artistas como los álbumes pueden estar asociados a más de un género. Incluso las canciones pueden ser fusiones de uno o más géneros.

En el grupo el nombre es una string, y todos los demas atributos salvo los oyentes(que es un number) son arrays de strings. En esta clase tenemos getters, setters y dos metodos que añaden y dos que borran elemntos de estos arrays, 