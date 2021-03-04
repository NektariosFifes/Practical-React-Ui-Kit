// @ts-ignore
import React, {ReactElement, ReactNode, useMemo} from "react";
import  {ComponentWithDefaults} from "../UtilityModules"
import  "../styles/TextStyles.scss"
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
    classN?:string
}
//
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


type ElementTypes = Component_Props

type  BasicHtmlAttributes = Omit<React.HTMLAttributes<any>,keyof  Component_Props>

export type TextCompProps = typeof Default_Properties & Component_Props & BasicHtmlAttributes

type HtmlElementsList = { [key in keyof JSX.IntrinsicElements]?: boolean }

type AvailableChildElementsList = Array<Component_Props>

 function GetComponentChildren (
     CompNames:AvailableChildElementsList,
     children:ReactNode | ReactElement,
     size?:string|number
 )
 {
    if(!CompNames.length) return children
     const NextChildComp = CompNames.slice(1,CompNames.length)
     return(
         <div></div>
     )
 }


type PropsArray =  Array<keyof Component_Props>
const TextComp : React.FC<React.PropsWithChildren<TextCompProps>> = ({
        preset_Heading_BelowTitle_Description,
        preset_Heading_Title,
        preset_Heading_Paragraph_Title,
        size,
        a,
        classN,
        br,
        code,
        cite,
        del,
        em,
        small,
        children,
    ...props
    })=> {

    const AvailableAppendableElements: ElementTypes = {
        preset_Heading_BelowTitle_Description,
        preset_Heading_Title,
        preset_Heading_Paragraph_Title,
        size,

    }
    const AvailableAppendableInlineElements: ElementTypes = {
        a, br, code, cite, del, em, small
    }
    // @ts-ignore
    const AppendbleElements_Sanitized = Object.keys(AvailableAppendableElements)
        .filter((element) => {

            // @ts-ignore
            return AvailableAppendableElements[element]
            }
        ) as PropsArray


    const AppendbleInlineElements_Sanitized = Object.keys(AvailableAppendableInlineElements)
        .filter((element: any) => {
              // @ts-ignore
            return  AvailableAppendableInlineElements[element]
            }
        ) as PropsArray



    const CompName =  useMemo(()=>{
        if(AppendbleElements_Sanitized[0]) return AppendbleInlineElements_Sanitized[0]
        if(AppendbleInlineElements_Sanitized[0])  return AppendbleInlineElements_Sanitized[0]
        return 'p' as keyof JSX.IntrinsicElements
        },[AppendbleElements_Sanitized,AppendbleInlineElements_Sanitized])

    const AppendableChildrenElements = AppendbleInlineElements_Sanitized.filter(
        (elemname: keyof Component_Props)=> elemname!=CompName
    )

    const childrenElem = useMemo(()=>{
        if (!AppendableChildrenElements.length) return children
    },[AppendableChildrenElements,children,size])

    return(
        <div className={'test'}>
            test
        </div>
    )

}

const MemoizedComponent  = React.memo(TextComp)

export default ComponentWithDefaults(MemoizedComponent,Default_Properties)

