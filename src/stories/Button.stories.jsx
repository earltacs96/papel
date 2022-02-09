import React from 'react';

import Button from '../components/Button';

export default {
  title: 'Buttons',
  component: Button,
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Default Button',
  isDisabled: false
};

export const Primary = Template.bind({});
Primary.args = {
  label: 'Primary Button',
  isDisabled: false,
  isPrimary: true
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Secondary Button',
  isDisabled: false,
  isSecondary: true
};

export const Success = Template.bind({});
Success.args = {
  label: 'Success Button',
  isDisabled: false,
  isSuccess: true
};

export const Warning = Template.bind({});
Warning.args = {
  label: 'Warning Button',
  isDisabled: false,
  isWarning: true
};

export const Danger = Template.bind({});
Danger.args = {
  label: 'Danger Button',
  isDisabled: false,
  isDanger: true
};