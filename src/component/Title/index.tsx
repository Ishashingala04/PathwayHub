import React from 'react';
import { StyleProp, Text, TextStyle } from 'react-native';
import constant from '../../utils/constant';

export enum TypeList {
    BOLD = 'bold',
    HEAVY = 'heavy',
    LIGHT = 'light',
    MEDIUM = 'medium',
    REGULAR = 'regular',
}

interface TitleComponentProps {
    size?: number;
    title: any;
    color?: any;
    type?: string;
    styleProps?: StyleProp<TextStyle>;
    numberOfLine?: number;
    detailText?: any;
    isMarginTop?: any;
}

export const Fonts = {
    BOLD: 'Inter-Bold',
    HEAVY: 'Inter-SemiBold',
    LIGHT: 'Inter-Light',
    MEDIUM: 'Inter-Medium',
    REGULAR: 'Inter-Regular',
};

export const fontBold = { fontFamily: Fonts.BOLD };
export const fontHeavy = { fontFamily: Fonts.HEAVY };
export const fontLight = { fontFamily: Fonts.LIGHT };
export const fontMedium = { fontFamily: Fonts.MEDIUM };
export const fontRegular = { fontFamily: Fonts.REGULAR };

const getFontStyle = (type?: string | undefined) => {
    switch (type) {
        case TypeList.BOLD:
            return fontBold;
        case TypeList.HEAVY:
            return fontHeavy;
        case TypeList.LIGHT:
            return fontLight;
        case TypeList.MEDIUM:
            return fontMedium;
        case TypeList.REGULAR:
            return fontRegular;
        default:
            return {};
    }
};

const TitleComponent = ({
    size = 18,
    type,
    title,
    color = 'black',
    styleProps,
    numberOfLine = 0,
    detailText,
    isMarginTop = false,
}: TitleComponentProps) => {
    const fontStyle = getFontStyle(type);

    const marginTop = {
        paddingTop: isMarginTop ? (constant.isANDROID ? 2 : 4) : 0,
    };
    const style: StyleProp<TextStyle> = {
        fontSize: size,
        color,
        ...fontStyle,
        ...marginTop,
    };

    return (
        <Text style={[style, styleProps || {}]} numberOfLines={numberOfLine}>
            {title}
            {(detailText && (
                <Text
                    style={{
                        color: '#545454',
                        fontSize: 14,
                        fontFamily: Fonts.MEDIUM,
                    }}
                    numberOfLines={numberOfLine}>
                    {(title.length !== 0 ? ' ' : '') + detailText}
                </Text>
            )) ||
                null}
        </Text>
    );
};

export default TitleComponent;