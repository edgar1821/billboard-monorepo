import { Story, Meta } from '@storybook/react'
import { HeaderProps, Header } from './header'

export default {
  componenent: Header,
  title: 'component/Header',
} as Meta

const Template: Story<HeaderProps> = (args) => <Header {...args} />
export const HeaderApp = Template.bind({})
HeaderApp.args = {}
