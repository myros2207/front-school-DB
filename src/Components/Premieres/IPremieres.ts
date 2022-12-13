export interface IPremieres{
    PremiereId: number;
    PremiereDate: string;
    FilmImage: string;
    FilmTitle: string
}

export interface IPremieresById{
    PremiereId: number;
    PremiereDate: string;
    FilmImage: string;
    FilmTitle: string;
    FilmDescription: string;
    HallName : string;
    HallSeatsAmount: number;
}