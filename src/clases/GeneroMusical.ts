export class GeneroMusical{
    private genrename:string
    private artistas: Artista[]
    private grupos: Grupo[]
    private albumes: Album[]
    private canciones: Cancion[]

    /**
     * constructor de la clase GeneroMusical, crea un nuevo genero comprobando que los elementos que se le pasa pertenecen a ese genero en concreto
     * @param name nombre del genero
     * @param art artistas que pertenecen al genero
     * @param grup grupos que pertenecen al genero
     * @param alb albumes que pertenecen al genero
     * @param can canciones que pertenecen al genero
     */
    constructor(name:string,art:Artista[],grup:Grupo[],alb:Album[],can:Cancion[]){
        this.genrename = name
        this.artistas = art
        this.grupos = grup
        this.albumes = alb
        this.canciones = can
    }

    /**
     * getter para el nombre del genero
     * @returns el nombre del genero
     */
    getName():string{
        return this.genrename
    }

    /**
     * getter para los artistas de un genero
     * @returns el array con los artistas de un genero
     */
    getArtistas():Artista[]{
        return this.artistas
    }

    /**
     * getter para los grupos de un genero
     * @returns el array con los grupos de un genero
     */
    getGrupos():Grupo[]{
        return this.grupos 
    }

    /**
     * getter para los albumes de un genero
     * @returns el array con los albumes de un genero
     */
    getAlbumes():Album[]{
        return this.albumes
    }

    /**
     * getter para las canciones de un genero
     * @returns el array con las canciones
     */
    getCanciones():Cancion[]{
        return this.canciones
    }

    addArtista(art:Artista):void{}
    addGrupo(gru:Grupo):void{}
    addAlbum(alb:Album):void{}
    addCancion(can:Cancion):void{}

}