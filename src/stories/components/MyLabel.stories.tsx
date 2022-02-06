import { MyLabel } from '../../components/MyLabel';
import { ComponentMeta, ComponentStory } from '@storybook/react';


export default {
    title: 'UI/Etiquetas/MyLabel',
    component: MyLabel,
    argTypes: {
        size: { control: 'select', options: ['normal', 'h1', 'h2', 'h3'] },
        color: { control: 'select' },
        fontColor: { control: 'color' }
    }
} as ComponentMeta<typeof MyLabel>

const Template: ComponentStory<typeof MyLabel> = ( args ) => <MyLabel { ...args } />

export const Basic = Template.bind({});
Basic.args = {
    size: 'normal'
}

export const AllCaps = Template.bind({});
AllCaps.args = {
    allCaps: true,
    size: 'normal'
}

export const Secondary = Template.bind({});
Secondary.args = {
    size: 'normal',
    color: 'secondary'
}

export const Tertiary = Template.bind({});
Tertiary.args = {
    size: 'normal',
    color: 'tertiary'
}

export const CustomFontColor1 = Template.bind({});
CustomFontColor1.args = {
    size: 'h1',
    fontColor: '#5517ac'
}