import React, { ReactElement, ReactNode, Children, useMemo } from 'react';
import { TextSubComp1PresetsTypes } from '../UtilityModules/Types/Properties_Types';
import { ComponentWithDefaults } from '../UtilityModules';
import { PresetsArray } from './TextComp';
export interface SubComp1Props {
    TextSubComp1Name: keyof JSX.IntrinsicElements;
    preset: PresetsArray;
    sizeFont?: string | number;
    className?: string;
}

const TextSubComp1DefaultProps = {
    TextSubComp1Name: 'div' as keyof JSX.IntrinsicElements,
    preset: ['normal'] as PresetsArray,
    size: 15,
    className: `Default`,
};

type BasicHtmlAttributes = Omit<React.DetailsHTMLAttributes<any>, keyof SubComp1Props>;

export type SubComp1PropsHtmlAttributes = SubComp1Props & typeof TextSubComp1DefaultProps & BasicHtmlAttributes;

class TextSubComponent extends React.Component<React.PropsWithChildren<SubComp1PropsHtmlAttributes>> {
    render() {
        const { children, TextSubComp1Name, preset, size, className, ...props } = this.props;
        const Name = TextSubComp1Name;

        const classNames = preset.join(' ');
        return (
            <>
                <Name style={{ fontSize: `${size}` }} className={classNames}>
                    {children}
                </Name>
            </>
        );
    }
}

const TextSubComponent1Memoized = React.memo(TextSubComponent);

export default ComponentWithDefaults(TextSubComponent1Memoized, TextSubComp1DefaultProps);
