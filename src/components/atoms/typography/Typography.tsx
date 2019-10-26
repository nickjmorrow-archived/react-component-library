import * as deepMergeProxy from 'deepmerge';
import * as React from 'react';
import styled, { css } from 'styled-components';
import { ColorVariant, WeightVariant } from '~/components/atoms/types';
import { useThemeContext } from '~/styleConstants';
import { Theme } from '~/types';
import { StyleConstant } from '~/typeUtilities';
import { getColor, getColorActive, getColorHover } from '../atomServices';
const deepMerge: typeof deepMergeProxy = (deepMergeProxy as any).default || deepMergeProxy;

export const Typography: React.SFC<
    {
        align?: Align;
        sizeVariant?: SizeVariant;
        colorVariant?: ColorVariant;
        weightVariant?: WeightVariant;
        styleVariant?: StyleVariant;
        fontFamilyVariant?: FontFamilyVariant;
        isInteractive?: boolean;
        className?: string;
        link?: string;
    } & React.PropsWithoutRef<JSX.IntrinsicElements['span']>
> = ({
    colorVariant,
    sizeVariant,
    weightVariant,
    styleVariant,
    children,
    align = 'default',
    isInteractive = false,
    fontFamilyVariant = 'default',
    style,
    className,
    link,
}) => {
    const theme = useThemeContext();
    const { spacing } = theme;

    const defaultVariants: ConcreteVariant = {
        colorVariant: 'primaryDark',
        sizeVariant: 3,
        weightVariant: 4,
        style: {},
    };

    const presetVariants =
        styleVariant === undefined ? defaultVariants : (getOtherVariants(styleVariant, spacing) as ConcreteVariant);

    const selectedVariants = {
        colorVariant,
        sizeVariant,
        weightVariant,
        style,
    } as Partial<ConcreteVariant>;

    const { newColorVariant, newSizeVariant, newWeightVariant, newStyle } = mergeVariants(
        presetVariants,
        selectedVariants,
    );

    const content = (
        <StyledTypography
            styleVariant={styleVariant}
            align={align}
            theme={theme}
            colorVariant={link === undefined ? newColorVariant : 'core'}
            sizeVariant={newSizeVariant}
            weightVariant={newWeightVariant}
            fontFamilyVariant={fontFamilyVariant}
            isInteractive={isInteractive}
            style={newStyle}
            className={className}
        >
            {children}
        </StyledTypography>
    );

    return link === undefined ? (
        content
    ) : (
        <StyledLink href={link} theme={theme}>
            {content}
        </StyledLink>
    );
};

const StyledLink = styled('a')<{ theme: Theme }>`
    position: relative;
    text-decoration: none;
    &:hover:before {
        visibility: visible;
        width: 100%;
    }
    &:before {
        content: '';
        position: absolute;
        width: 0;
        height: 2px;
        bottom: -1px;
        left: 0;
        background-image: linear-gradient(90deg, ${p => `${p.theme.colors.core.cs5}, ${p.theme.colors.accent.cs5}`});
        visibility: hidden;
        transition: ${p => p.theme.transitions.medium};
    }
`;

export const StyledTypography = styled('span')<{
    align: string;
    isInteractive: boolean;
    colorVariant: ColorVariant;
    fontFamilyVariant: FontFamilyVariant;
    weightVariant: WeightVariant;
    sizeVariant: SizeVariant;
    theme: Theme;
    styleVariant?: StyleVariant;
}>`
    ${p => {
        const {
            align,
            fontFamilyVariant,
            sizeVariant,
            weightVariant,
            styleVariant,
            theme: {
                colors,
                spacing,
                transitions,
                typography: { fontFamily, fontSizes, lineHeight, fontWeights },
            },
            colorVariant,
        } = p;
        const display = styleVariant === undefined ? 'inline' : 'block';
        return `
			display: ${display};
			text-align: ${align};
			color: ${getColor(colors, colorVariant)};
			font-family: ${fontFamily[fontFamilyVariant]};
			font-size: ${getFontSize(fontSizes, sizeVariant)};
			font-weight: ${getFontWeight(fontWeights, weightVariant)};
			line-height: ${spacing[lineHeight.default]};
			transition: color ${transitions.medium};
			${p.isInteractive &&
                css`
                    &:hover {
                        color: ${getColorHover(colors, p.colorVariant)};
                        transition: color ${transitions.medium};
                    }
                    &:active {
                        color: ${getColorActive(colors, p.colorVariant)};
                        transition: color ${transitions.medium};
                    }
                `}	
		`;
    }}
`;

type Align = 'inherit' | 'left' | 'center' | 'right' | 'justify' | 'default';
type SizeVariant = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;
type FontFamilyVariant = keyof StyleConstant<'typography'>['fontFamily'];
type StyleVariant = 'h1' | 'h2' | 'h3';

type ConcreteVariant = {
    colorVariant: ColorVariant;
    sizeVariant: SizeVariant;
    weightVariant: WeightVariant;
    style: React.CSSProperties;
};

// helpers
const getFontSize = (fontSizes: StyleConstant<'typography'>['fontSizes'], sizeVariant: SizeVariant): string => {
    return fontSizes[('fs' + sizeVariant) as keyof typeof fontSizes];
};

const getFontWeight = (fontWeights: StyleConstant<'typography'>['fontWeights'], weightVariant: WeightVariant) => {
    return fontWeights['fw' + weightVariant];
};

const getOtherVariants = (styleVariant: StyleVariant, spacing: StyleConstant<'spacing'>) => {
    switch (styleVariant) {
        case 'h1': {
            return {
                colorVariant: 'primaryDark',
                weightVariant: 5,
                sizeVariant: 9,
                style: {
                    marginBottom: spacing.ss8,
                    marginTop: spacing.ss8,
                },
            };
        }
        case 'h2': {
            return {
                colorVariant: 'primaryDark',
                weightVariant: 4,
                sizeVariant: 6,
                style: {
                    marginBottom: spacing.ss6,
                    marginTop: spacing.ss6,
                },
            };
        }
        case 'h3': {
            return {
                colorVariant: 'secondaryDark',
                weightVariant: 3,
                sizeVariant: 4,
            };
        }
    }
};

const mergeVariants = (presetVariants: ConcreteVariant, selectedVariants: Partial<ConcreteVariant>) => {
    const mergedVariants = deepMerge.all([
        presetVariants,
        removeUndefined<ConcreteVariant>(selectedVariants),
    ]) as ConcreteVariant;
    const {
        colorVariant: mergedColorVariant,
        sizeVariant: mergedSizeVariant,
        weightVariant: mergedWeightVariant,
        style: mergedStyle,
    } = mergedVariants;
    return {
        newColorVariant: mergedColorVariant,
        newSizeVariant: mergedSizeVariant,
        newWeightVariant: mergedWeightVariant,
        newStyle: mergedStyle,
    };
};

const removeUndefined = <T extends {}>(obj: Partial<T>): Partial<T> => {
    Object.keys(obj).forEach(key => obj[key] === undefined && delete obj[key]);
    return obj;
};
