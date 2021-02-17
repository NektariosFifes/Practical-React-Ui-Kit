import React , {ReactNode,useMemo} from "react";
import  {ComponentWithDefaults} from "../UtilityModules"

interface Component_Props {
    preset_Heading_Title?:boolean
    preset_Heading_Paragraph_Title?:boolean
    preset_Heading_BelowTitle_Description?:boolean
    size?: number | string
    a?: boolean
    br?: boolean
    code?: boolean
    cite?: boolean
    del?: boolean
    em?: boolean
    small?: boolean
}

const Default_Properties =    {
    preset_Heading_BelowTitle_Description:false,
    preset_Heading_Paragraph_Title:false,
    preset_Heading_Title:false,
    a: false,
    br: false,
    code: false,
    cite: false,
    del: false,
    em:false,
    small:false,
}


type JsxElementTypesArray = { [key in keyof JSX.IntrinsicElements]?: boolean }

type  BasicHtmlAttributes = Omit<React.HTMLAttributes<any>,keyof  Component_Props>

export type TextCompProps = typeof Default_Properties & Component_Props & BasicHtmlAttributes

type HtmlElementsList = { [key in keyof JSX.IntrinsicElements]?: boolean }

type PropsArray =  Array<keyof Component_Props>
const TextComp : React.FC<React.PropsWithChildren<TextCompProps>> = ({
        preset_Heading_BelowTitle_Description,
        preset_Heading_Title,
        preset_Heading_Paragraph_Title,
        size,
        a,
        br,
        code,
        cite,
        del,
        em,
        small,
    ...props
    })=> {
    const AvailableAppendableElements: HtmlElementsList = {
        preset_Heading_BelowTitle_Description,
        preset_Heading_Title,
        preset_Heading_Paragraph_Title,
        size,

    }
    const AvailableAppendableInlineElements: HtmlElementsList = {
        a, br, code, cite, del, em, small
    }

    const AppendbleElements_Sanitized = Object.keys(AvailableAppendableElements)
        .filter((element: keyof Component_Props) => {
                AvailableAppendableElements[element]
            }
    ) as PropsArray

    const AppendbleInlineElements_Sanitized = Object.keys(AvailableAppendableInlineElements)
        .filter((element: keyof Component_Props) => {
                AvailableAppendableInlineElements[element]
            }
    ) as PropsArray







}


