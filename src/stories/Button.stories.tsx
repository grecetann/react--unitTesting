
import React from 'react';
import { ComponentMeta } from '@storybook/react';
import ButtonComponent from '../components/Forms/ButtonComponent/ButtonComponent'
import Center from '../components/Center/Center';

export default {
  title: 'Form/Button',
  component: ButtonComponent,
  decorators: [(story:any) => <Center>{story()}</Center>],
  // args:{
  //   children:'button',
   
  // }
}as ComponentMeta<typeof ButtonComponent>;

export const Primary = () =><ButtonComponent variant='primary'>Primary</ButtonComponent>
export const Secondary = () => <ButtonComponent variant='secondary'>Secondary</ButtonComponent>
export const Success = () => <ButtonComponent variant='success'>Success</ButtonComponent>
export const Danger = () => <ButtonComponent variant='danger'>Danger</ButtonComponent>


// const Template: ComponentStory<typeof ButtonComponent> = (args) => <ButtonComponent {...args} />;


// export const PrimaryA = Template.bind({})
// PrimaryA.args={
//  variant: 'primary',
//  children:'Primary Args'
// }

// export const LongPrimary = Template.bind({})
// LongPrimary.args={
//   ...PrimaryA.args,
//   // children:'Long Primary Args'
// }

// export const SecondaryA = Template.bind({})
// SecondaryA.args={
//  variant: 'primary',
// //  children:'Secondary Args'

// }