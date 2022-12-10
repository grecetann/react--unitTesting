import React from 'react'
import { Button } from '@chakra-ui/react'
import { ComponentStory } from '@storybook/react';
import {action,actions} from "@storybook/addon-actions"
import { click } from '@testing-library/user-event/dist/click';
// import {text,boolean} from "@storybook/addon-knobs"

export default{
    title:'chakra/button',
    component:Button,
    argTypes: {
        colorScheme:{control:'text'},
        children:{control:'text'},
        onClick:{action:"clicked"}
    }
}

// export const Log = () => {
//     <Button colorScheme="blue" onClick={()=>console.log('button clicked')}>Log</Button>
//     }

    
// export const Knobs = () => {
//     <Button disabled={boolean('Disaled',false)}>
//         {text('label','Button Label')}
//     </Button>
//     }

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} {...actions('onClick','onMouseOver')}/>;

export const Success =  Template.bind({})
Success.args = {
   
  colorScheme: 'green',
  children: 'Success',
}

export const Danger = Template.bind({})
Danger.args = {
    colorScheme: 'red',
  children: 'Danger',
}
