import { moviedata } from "../../../types/MyPressable.intefrace";

export enum CinemaRoutes {
    Bottom='bottomtab',
    Main='maintab',
    List='list',
    Detailed="detailed",
}
export type CinemaRouteProps={
    [CinemaRoutes.Detailed]:moviedata;
    [CinemaRoutes.List]:undefined;
    [CinemaRoutes.Bottom]:undefined;
    [CinemaRoutes.Main]:undefined;
}