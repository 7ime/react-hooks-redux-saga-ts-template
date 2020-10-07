import { addParameters } from '@storybook/react'

addParameters({
  viewport: {
    viewports: {
      mobile: {
        name: 'Mobile',
        styles: {
          width: '375px',
          height: '667px',
        },
      },
      tablet: {
        name: 'Tablet',
        styles: {
          width: '768px',
          height: '1024px',
        },
      },
      laptopSmall: {
        name: 'Small Laptop',
        styles: {
          width: '1280px',
          height: '800px',
        },
        type: 'desktop',
      },
      laptopLarge: {
        name: 'Large Laptop',
        styles: {
          width: '1440px',
          height: '900px',
        },
        type: 'desktop',
      },
    },
  },
})

