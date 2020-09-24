const fs = require('fs')
const os = require('os')
const path = require('path')
const netrc = require('netrc')
const axios = require('axios')
const host = 'api.storyblok.com'

const args = process.argv
let space = ''
args.forEach((arg) => {
  if (arg.startsWith('--space')) {
    space = arg.replace('--space=', '')
  }
})

const navigationEntry = {
  story: {
    name: 'Navigation',
    slug: 'navigation',
    parent_id: '0',
    content: {
      _uid: '935003b0-c35d-4887-96b0-997054e3a40c',
      items: [
        {
          url: {
            id: '1985250b-5446-4806-9f68-0c6a1afbcb60',
            url: '',
            linktype: 'story',
            fieldtype: 'multilink',
            cached_url: 'home',
          },
          _uid: 'a77e4b68-d722-4b1d-a072-c341b4332d70',
          name: 'Home',
          component: 'link',
        },
      ],
      title: 'A Brand',
      component: 'navigation',
    },
  },
}

const home =
  process.env[process.platform.startsWith('win') ? 'USERPROFILE' : 'HOME']
const credsNetrc = netrc(path.join(home, '.netrc'))
let creds = {}

if (credsNetrc.hasOwnProperty(host)) {
  creds = {
    email: credsNetrc[host].login,
    token: credsNetrc[host].password,
  }

  startSeed()
} else {
  console.error(
    "Seed: You're not logged in. Use the command `storyblok login` to login"
  )
}

async function startSeed() {
  const instance = axios.create({
    baseURL: `https://mapi.storyblok.com/v1/spaces/${space}`,
    headers: {
      Authorization: creds.token,
    },
  })

  // Navigaiton
  const resNav = await instance
    .post('/stories', navigationEntry)
    .catch((error) => console.error(error))
  console.log('Seed: Navigation created')

  // Fill Home content entry
  const resHome = await instance.get('/stories/', { page: 1 })
  const homeStory = resHome.data.stories.find((story) => {
    return story.slug === 'home'
  })
  homeStory.path = '/'
  homeStory.content = {
    body: [
      {
        _uid: '42ff4e30-1104-45b1-8a1a-3d12a2a423dc',
        image: {
          id: 1434594,
          alt: null,
          name: '',
          focus: null,
          title: null,
          filename:
            'https://a.storyblok.com/f/93035/1413x954/a97083a847/store.png',
          copyright: null,
          fieldtype: 'asset',
        },
        headline: 'My Shop',
        component: 'teaser',
        intro_text:
          'Mollis a aenean quam quis dolor aptent nascetur at torquent vitae est sodales nulla accumsan, etiam diam imperdiet dignissim senectus faucibus arcu mattis blandit ad tempus luctus odio lobortis ultrices, tempor vestibulum sit nullam donec vivamus phasellus tellus dapibus porttitor hac augue lacinia.',
        button_text: 'Shop All',
      },
      {
        _uid: '45c96a42-fd25-4187-93c7-23db4a16755e',
        title: 'Top Categories',
        component: 'Categories Bar',
        categories: {
          _uid: 'c15f01b8-9af6-4361-b7bd-181ccc1fcb56',
          items: [],
          plugin: 'big-commerce-categories',
        },
      },
      {
        _uid: 'f832b8d7-4ddf-4758-b2ff-b704bae8c19a',
        heading: 'Featured Product',
        product: {
          _uid: 'a11b5a2a-9e36-4ecd-b367-c88c7de00b06',
          items: [],
          plugin: 'big-commerce',
        },
        component: 'Feature',
      },
      {
        _uid: 'ecbd894d-d779-4564-95c8-a45b468b02eb',
        items: {
          _uid: 'ea6c7d50-46ae-43a0-ba83-f9a34869b5a6',
          items: [],
          plugin: 'big-commerce-categories',
        },
        heading: 'New Arrivals',
        component: 'Category products',
      },
      {
        _uid: '4e89ee54-3de9-49bf-87d5-852a9a28f15e',
        items: {
          _uid: 'f35b1870-3a3c-4367-8834-586619d38e61',
          items: [],
          plugin: 'big-commerce',
        },
        heading: 'Bestsellers',
        component: 'Products',
      },
    ],
    products: {
      _uid: '0fd18b0c-2242-4add-8151-adaeb3d82dc1',
      items: [],
      plugin: 'big-commerce',
    },
    component: 'page',
    categories: {
      _uid: 'd1fa1612-c92a-411d-bd61-df7b38f31a9b',
      items: [],
      plugin: 'big-commerce-categories',
    },
    featured_product: {
      _uid: '2853eec7-0c49-4f92-afd3-d03636196d54',
      items: [],
      plugin: 'big-commerce',
    },
  }

  const resHomeEntry = await instance
    .put(`/stories/${homeStory.id}`, { story: homeStory })
    .catch((error) => console.error(error))
  console.log('Seed: Home Content configured')

  // 5. Configure Space with correct preview Domain
  const { data } = await instance.get().catch((error) => console.error(error))
  data.space.domain = 'http://localhost:3000/'

  const finalResult = await instance
    .put('/', data)
    .catch((error) => console.error(error))
  console.log('Seed: Space configured')
  console.log('')
  console.log('Your preview token is: ' + finalResult.data.space.first_token)
  console.log('Exchange it in your `nuxt.config.js` to continue')
}
