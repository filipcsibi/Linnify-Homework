import { NavigationProp } from "@react-navigation/core"
import { MyLogin } from "../components/easyLogin"
import { StackScreenProps } from "@react-navigation/stack"
import { AppRouteProps, AppRoutes } from "../components/navigation/routes/app_routes"

export const Login = (props:StackScreenProps<AppRouteProps,AppRoutes.Login>) =>{
    const onPress =()=> props.navigation.navigate(AppRoutes.Home,{title:'caca'})
    return (
        <MyLogin onPress={onPress}></MyLogin>
    )
}