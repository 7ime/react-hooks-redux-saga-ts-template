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
      laptop: {
        name: 'Laptop',
        styles: {
          width: '1366px',
          height: '768px',
        },
        type: 'desktop',
      },
      middleDesktop: {
        name: 'Middle desktop',
        styles: {
          width: '1440px',
          height: '900px',
        },
        type: 'desktop',
      },
    },
  },
})

