import { useContext } from "react"
import { ClickHandlerContext } from "../contexts/ClickHandlerContext"

export const useClickHandlerContext = () => useContext(ClickHandlerContext);