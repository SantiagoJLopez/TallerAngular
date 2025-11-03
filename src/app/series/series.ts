export class Series {
    id: number;
    nombre: string;
    canal: string;
    temporadas: number;
    descripcion: string;
    enlace: string;
    imagen: string;

    constructor(id: number, nombre: string, canal: string, temporadas: number, descripcion: string, enlace: string, imagen: string){
        this.id = id;
        this.nombre = nombre;
        this.canal = canal;
        this.temporadas = temporadas;
        this.descripcion = descripcion;
        this.enlace = enlace;
        this.imagen = imagen;
    };

}
