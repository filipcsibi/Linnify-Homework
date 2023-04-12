export enum AppRoutes {
    Login='registerscreen',
    Home='loginscreen'
}
export type AppRouteProps={
    [AppRoutes.Login]:undefined;
    [AppRoutes.Home]:{title:string}
}