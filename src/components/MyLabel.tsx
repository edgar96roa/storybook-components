import './mylabel.css'

export interface Props {
    /** Text to show on our label */
    label: string;
    /** Size for our label */
    size: 'normal' | 'h1' | 'h2' | 'h3';
    /** To set our label capitalized or not*/
    allCaps?:  boolean;
    /** To set our label a color*/
    color?: 'primary' | 'secondary' | 'tertiary';
    /** To set a custom color to the label*/
    fontColor?: string;
}

export const MyLabel = ({
    allCaps = false,
    color   = 'primary',
    label   = 'No label',
    size    = 'normal',
    fontColor,
    ...props
}: Props ) => {
    return(
        <span 
            className={ `label ${ size } text-${ color } ` }
            style={{ color: fontColor }}
        >
            { allCaps === true ? label.toUpperCase() : label }
        </span>
    );
};
