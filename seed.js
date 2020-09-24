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

  // Fill Home content entry with base data from NuxtDoc
  const res1 = await instance.get('/stories/', { page: 1 })
  const homeStory = res1.data.stories.find((story) => {
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
          items: [
            {
              name: 'Publications',
              path: '/publications/',
              children: [],
              entityId: 20,
              description: '',
              productCount: 1,
            },
            {
              name: 'Bath',
              path: '/bath/',
              children: [],
              entityId: 18,
              description: '',
              productCount: 1,
            },
            {
              name: 'Garden',
              path: '/garden/',
              children: [],
              entityId: 19,
              description: '',
              productCount: 2,
            },
          ],
          plugin: 'big-commerce-categories',
        },
      },
      {
        _uid: 'f832b8d7-4ddf-4758-b2ff-b704bae8c19a',
        heading: 'Featured Product',
        product: {
          _uid: 'a11b5a2a-9e36-4ecd-b367-c88c7de00b06',
          items: [
            {
              id: 'UHJvZHVjdDo4MA==',
              sku: 'OTL',
              name: '[Sample] Orbit Terrarium - Large',
              entityId: 80,
              defaultImage: {
                altText: '',
                img320px:
                  'https://cdn11.bigcommerce.com/s-w2gk34tjxo/images/stencil/320w/products/80/272/roundterrariumlarge.1599742292.jpg',
              },
              plainTextDescription:
                'This strikingly beautiful terrarium will make a welcome addition to your home bringing some green to the scene. A...',
            },
          ],
          plugin: 'big-commerce',
        },
        component: 'Feature',
      },
      {
        _uid: 'ecbd894d-d779-4564-95c8-a45b468b02eb',
        items: {
          _uid: 'ea6c7d50-46ae-43a0-ba83-f9a34869b5a6',
          items: [
            {
              name: 'Utility',
              path: '/utility/',
              children: [],
              entityId: 22,
              description: '',
              productCount: 4,
            },
            {
              name: 'Kitchen',
              path: '/kitchen/',
              children: [],
              entityId: 21,
              description: '',
              productCount: 5,
            },
            {
              name: 'Garden',
              path: '/garden/',
              children: [],
              entityId: 19,
              description: '',
              productCount: 2,
            },
          ],
          plugin: 'big-commerce-categories',
        },
        heading: 'New Arrivals',
        component: 'Category products',
      },
      {
        _uid: '4e89ee54-3de9-49bf-87d5-852a9a28f15e',
        items: {
          _uid: 'f35b1870-3a3c-4367-8834-586619d38e61',
          items: [
            {
              id: 'UHJvZHVjdDo4MA==',
              sku: 'OTL',
              name: '[Sample] Orbit Terrarium - Large',
              entityId: 80,
              defaultImage: {
                altText: '',
                img320px:
                  'https://cdn11.bigcommerce.com/s-w2gk34tjxo/images/stencil/320w/products/80/272/roundterrariumlarge.1599742292.jpg',
              },
              plainTextDescription:
                'This strikingly beautiful terrarium will make a welcome addition to your home bringing some green to the scene. A...',
            },
            {
              id: 'UHJvZHVjdDo4OA==',
              sku: 'CC3C',
              name: '[Sample] Chemex Coffeemaker 3 Cup',
              entityId: 88,
              defaultImage: {
                altText: '',
                img320px:
                  'https://cdn11.bigcommerce.com/s-w2gk34tjxo/images/stencil/320w/products/88/292/3cupchemex5.1599742292.jpg',
              },
              plainTextDescription:
                'The Chemex Coffeemaker was created in 1939 by famed inventor Peter J. Schlumbohm\n                                \n\n    ...',
            },
            {
              id: 'UHJvZHVjdDo5Mw==',
              sku: 'SLLPJ',
              name: '[Sample] 1 L Le Parfait Jar',
              entityId: 93,
              defaultImage: {
                altText: '',
                img320px:
                  'https://cdn11.bigcommerce.com/s-w2gk34tjxo/images/stencil/320w/products/93/311/leparfaitmedium3.1599742292.jpg',
              },
              plainTextDescription:
                'When translated Le Parfait means "the perfect one" - and that\'s just what this air-tight jar is. Designed for canning,...',
            },
            {
              id: 'UHJvZHVjdDo4Ng==',
              sku: 'ABS',
              name: '[Sample] Able Brewing System',
              entityId: 86,
              defaultImage: {
                altText: '',
                img320px:
                  'https://cdn11.bigcommerce.com/s-w2gk34tjxo/images/stencil/320w/products/86/286/ablebrewingsystem4.1599742292.jpg',
              },
              plainTextDescription:
                'Stemming from an intense passion for the most flavourful cup of coffee, Able Brewing set out to create a brewer that...',
            },
            {
              id: 'UHJvZHVjdDo5OA==',
              sku: 'CGLD',
              name: '[Sample] Laundry Detergent',
              entityId: 98,
              defaultImage: {
                altText: '',
                img320px:
                  'https://cdn11.bigcommerce.com/s-w2gk34tjxo/images/stencil/320w/products/98/327/CommonGoodLaundrySoap.1599742292.jpg',
              },
              plainTextDescription:
                'A 100% biodegradable plant based 3x concentrated laundry detergent for use in conventional and high efficiency machines...',
            },
          ],
          plugin: 'big-commerce',
        },
        heading: 'Bestsellers',
        component: 'Products',
      },
    ],
    products: {
      _uid: '0fd18b0c-2242-4add-8151-adaeb3d82dc1',
      items: [
        {
          id: 'UHJvZHVjdDo5Nw==',
          sku: 'TWB',
          name: '[Sample] Tiered Wire Basket',
          entityId: 97,
          defaultImage: {
            altText: '',
            img320px:
              'https://cdn11.bigcommerce.com/s-w2gk34tjxo/images/stencil/320w/products/97/325/tieredbasket.1599742292.jpg',
          },
          plainTextDescription:
            "Here's a three tiered wire basket to clean up your countertop and elevate your storage space. Display a selection of...",
        },
        {
          id: 'UHJvZHVjdDo3Nw==',
          sku: 'SLCTBS',
          name: '[Sample] Fog Linen Chambray Towel - Beige Stripe',
          entityId: 77,
          defaultImage: {
            altText: '',
            img320px:
              'https://cdn11.bigcommerce.com/s-w2gk34tjxo/images/stencil/320w/products/77/266/foglinenbeigestripetowel1b.1599742291.jpg',
          },
          plainTextDescription:
            'The perfect beach towel: thin, lightweight and highly absorbent. Crafted by Fog Linen in Japan using soft Lithuanian...',
        },
        {
          id: 'UHJvZHVjdDo4OA==',
          sku: 'CC3C',
          name: '[Sample] Chemex Coffeemaker 3 Cup',
          entityId: 88,
          defaultImage: {
            altText: '',
            img320px:
              'https://cdn11.bigcommerce.com/s-w2gk34tjxo/images/stencil/320w/products/88/292/3cupchemex5.1599742292.jpg',
          },
          plainTextDescription:
            'The Chemex Coffeemaker was created in 1939 by famed inventor Peter J. Schlumbohm\n                                \n\n    ...',
        },
        {
          id: 'UHJvZHVjdDo5Mw==',
          sku: 'SLLPJ',
          name: '[Sample] 1 L Le Parfait Jar',
          entityId: 93,
          defaultImage: {
            altText: '',
            img320px:
              'https://cdn11.bigcommerce.com/s-w2gk34tjxo/images/stencil/320w/products/93/311/leparfaitmedium3.1599742292.jpg',
          },
          plainTextDescription:
            'When translated Le Parfait means "the perfect one" - and that\'s just what this air-tight jar is. Designed for canning,...',
        },
        {
          id: 'UHJvZHVjdDoxMDQ=',
          sku: 'OFSUC',
          name: '[Sample] Utility Caddy',
          entityId: 104,
          defaultImage: {
            altText: '',
            img320px:
              'https://cdn11.bigcommerce.com/s-w2gk34tjxo/images/stencil/320w/products/104/336/utilitybucket1.1599742292.jpg',
          },
          plainTextDescription:
            'This powder coated steel utility caddy ensures your cleaning essentials are stowed away in one spot ready for your...',
        },
      ],
      plugin: 'big-commerce',
    },
    component: 'page',
    categories: {
      _uid: 'd1fa1612-c92a-411d-bd61-df7b38f31a9b',
      items: [
        {
          name: 'Kitchen',
          path: '/kitchen/',
          children: [],
          entityId: 21,
          description: '',
          productCount: 5,
        },
        {
          name: 'Bath',
          path: '/bath/',
          children: [],
          entityId: 18,
          description: '',
          productCount: 1,
        },
        {
          name: 'Garden',
          path: '/garden/',
          children: [],
          entityId: 19,
          description: '',
          productCount: 2,
        },
      ],
      plugin: 'big-commerce-categories',
    },
    featured_product: {
      _uid: '2853eec7-0c49-4f92-afd3-d03636196d54',
      items: [
        {
          id: 'UHJvZHVjdDo4MQ==',
          sku: 'OTS',
          name: '[Sample] Orbit Terrarium - Small',
          entityId: 81,
          defaultImage: {
            altText: '',
            img320px:
              'https://cdn11.bigcommerce.com/s-w2gk34tjxo/images/stencil/320w/products/81/273/roundterrariumsmall.1599742292.jpg',
          },
          plainTextDescription:
            'This strikingly beautiful terrarium will make a welcome addition to your home bringing some green to the scene. A...',
        },
      ],
      plugin: 'big-commerce',
    },
  }

  const res_5 = await instance
    .put(`/stories/${homeStory.id}`, { story: homeStory })
    .catch((error) => console.error(error))
  console.log('Seed: Home Content Entry configured')

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
