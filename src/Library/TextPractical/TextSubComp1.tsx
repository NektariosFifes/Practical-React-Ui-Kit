// @ts-ignore
import React, {Children, useMemo} from 'react'
import {TextSubComp1_PresetsTypes} from '../UtilityModules/Types/Properties_Types'

export interface SubComp1Props {

    TextSubComp1_Name : JSX.IntrinsicElements,
    preset:TextSubComp1_PresetsTypes
    size?:string | number
    className?: string
}



const SubComp1DefaultProps  = {
    TextSubComp1_Name : 'div' as unknown as JSX.IntrinsicElements,
    preset:'normal' as TextSubComp1_PresetsTypes,
    size:15,
    className: `Default`
}

type BasicHtmlAttributes = Omit<React.DetailsHTMLAttributes<any>,keyof SubComp1Props>

export type SubComp1Props_HtmlAttributes = SubComp1Props
& typeof SubComp1DefaultProps & BasicHtmlAttributes
//
// const TextSubComponent1 : React.FC<React.PropsWithChildren<SubComp1Props_HtmlAttributes>> = ({
//
//     children,
//     TextSubComp1_Name,
//     preset,
//     size,
//     className,
//     ...props
//
// })=>{
//
//     const Name=TextSubComp1_Name
//
//     return (
//         <>
//         <TextSubComp1_Name className={className} {...props} >
//             {children}
//         </TextSubComp1_Name>
//         </>
//     )
// }
//
//
//
//
