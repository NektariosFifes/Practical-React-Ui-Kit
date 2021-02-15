import React , {ReactNode,useMemo} from "react";
import  {ComponentWithDefaults} from "../UtilityModules"

interface Component_Props {
    preset_Heading_Title?:boolean
    preset_Heading_Paragraph_Title?:boolean
    preset_Heading_BelowTitle_Description?:boolean
    size?: number | string
}

const Default_Properties =    {
    preset_Heading_BelowTitle_Description:false,
    preset_Heading_Paragraph_Title:false,
    preset_Heading_Title:false,
}


type JsxElementTypesArray = { [key in keyof JSX.IntrinsicElements]?: boolean }

type  BasicHtmlAttributes = Omit<React.HTMLAttributes<any>,keyof  Component_Props>

export type TextCompProps = typeof Default_Properties & Component_Props & BasicHtmlAttributes

type HtmlElementsList = { [key in keyof JSX.IntrinsicElements]?: boolean }

const TextComp : React.FC<React.PropsWithChildren<TextCompProps>> = ({
        preset_Heading_BelowTitle_Description,
        preset_Heading_Title,
        preset_Heading_Paragraph_Title,
        size,
    ...props
    })=>
{

}
