import React, { ReactElement, ReactNode, useMemo } from 'react';
import { ComponentWithDefaults } from '../UtilityModules';
import '../styles/TextStyles.scss';
import { default as TextSubComponent1 } from './TextSubComp1';
import { TextSubComp1PresetsTypes } from '../UtilityModules/Types/Properties_Types';

interface ComponentProps {
    presetHeadingTitle?: boolean;
    presetHeadingParagraphTitle?: boolean;
    presetHeadingBelowTitleDescription?: boolean;
    size?: number | string;
    a?: boolean;
    br?: boolean;
    code?: boolean;
    cite?: boolean;
    del?: boolean;
    em?: boolean;
    small?: boolean;
    classN?: string;
}
//
const DefaultProperties = {
    size: 15,
    presetHeadingBelowTitleDescription: false,
    presetHeadingParagraphTitle: false,
    presetHeadingTitle: false,
    a: false,
    br: false,
    code: false,
    cite: false,
    del: false,
    em: false,
    small: false,
};

type ElementTypes = ComponentProps;

type BasicHtmlAttributes = Omit<React.HTMLAttributes<any>, keyof ComponentProps>;

export type TextCompProps = typeof DefaultProperties & ComponentProps & BasicHtmlAttributes;

type HtmlElementsList = { [key in keyof JSX.IntrinsicElements]?: boolean };

type AvailableChildElementsList = Array<ComponentProps>;

function GetComponentChildren(
    CompNames: AvailableChildElementsList,
    children: ReactNode | ReactElement,
    size?: string | number,
) {
    if (!CompNames.length) return children;
    const NextChildComp = CompNames.slice(1, CompNames.length);
    return <div></div>;
}
export type PresetsArray = Array<TextSubComp1PresetsTypes>;

type PropsArray = Array<keyof ComponentProps>;

function TextComp(props: React.PropsWithChildren<TextCompProps>) {
    // @ts-ignore
    const {
        presetHeadingBelowTitleDescription,
        presetHeadingTitle,
        presetHeadingParagraphTitle,
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
    } = props;
    const AvailableAppendablePresets: ElementTypes = {
        presetHeadingBelowTitleDescription: presetHeadingBelowTitleDescription,
        presetHeadingTitle: presetHeadingTitle,
        presetHeadingParagraphTitle: presetHeadingParagraphTitle,
        size,
    };
    const AvailableAppendableInlineElements: ElementTypes = {
        a,
        br,
        code,
        cite,
        del,
        em,
        small,
    };

    interface Test {
        lo: number;
    }

    const lo: Test = { lo: 5 };

    const AppendblePresetsSanitized = Object.keys(AvailableAppendablePresets).filter((element) => {
        const Index = element as keyof ElementTypes;
        return AvailableAppendablePresets[Index];
    }) as PresetsArray;

    const AppendbleInlineElementsSanitized = Object.keys(AvailableAppendableInlineElements).filter(
        (element: string) => {
            const Index = element as keyof ElementTypes;
            return AvailableAppendableInlineElements[Index];
        },
    ) as PropsArray;

    const CompName = useMemo(() => {
        if (AppendblePresetsSanitized[0]) return AppendbleInlineElementsSanitized[0];
        if (AppendbleInlineElementsSanitized[0]) return AppendbleInlineElementsSanitized[0];
        return 'p' as keyof JSX.IntrinsicElements;
    }, [AppendblePresetsSanitized, AppendbleInlineElementsSanitized]);

    const AppendableChildrenElements = AppendbleInlineElementsSanitized.filter(
        (elemname: keyof ComponentProps) => elemname != CompName,
    );

    const childrenElem = useMemo(() => {
        if (!AppendableChildrenElements.length) return children;
    }, [AppendableChildrenElements, children, size]);

    return (
        <TextSubComponent1 sizeFont={size} className={classN} preset={AppendblePresetsSanitized}>
            {children}
        </TextSubComponent1>
    );
}

const MemoizedComponent = React.memo(TextComp);

export default ComponentWithDefaults(MemoizedComponent, DefaultProperties);
