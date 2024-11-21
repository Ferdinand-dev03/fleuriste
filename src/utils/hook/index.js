import React, { useContext } from "react";
import { ThemeContext } from "../context/Context";

export function useTheme (){
    const {toggle, theme}= useContext(ThemeContext);

    return {toggle, theme}
}