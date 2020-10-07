import * as React from 'react'
import Button from '@components/ui/buttons/components/button'

export default {
    title: 'Button',
    component: Button,
}

export const Default = () => {
    return <Button>Default</Button>
}

export const Primary = () => {
    return <Button type={'primary'}>Primary</Button>
}
