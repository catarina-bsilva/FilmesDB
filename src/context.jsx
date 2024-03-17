import { useContext, createContext } from "react";

export const favoriteContext = createContext()
export function useFavoriteContext (){
    const favoriteState =useContext(favoriteContext)
    return favoriteState
} 