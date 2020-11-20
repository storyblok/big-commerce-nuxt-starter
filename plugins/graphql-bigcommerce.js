const productFragment = `
fragment ProductFields on Product {
  id
  entityId
  name
  sku
  path
  description
  addToCartUrl
  addToWishlistUrl
  categories {
    edges {
      node {name}
    }
  }
  defaultImage {
    img320px: url(width: 320)
    img640px: url(width: 640)
    img960px: url(width: 960)
    img1280px: url(width: 1280)
    altText
  }

  prices {
    price {
      value
      currencyCode
    }
  }
}
`

const categoryFragment = `
fragment CategoryFields on CategoryTreeItem {
  name
  path
  entityId
  description
  productCount
}
`

async function sendQuery(query) {
  const url = new URL(process.env.storeUrl)
  const graphQLUrl = `${url.origin}/graphql`

  // Fetch data from the GraphQL Storefront API
  return await fetch(graphQLUrl, {
    method: 'POST',
    // mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.BIGCOMMERCE_TOKEN}`,
    },
    body: JSON.stringify({
      query,
    }),
  })
    .then((res) => res.json())
    .then((res) => res.data)
}

export async function getStoreSettings() {
  const graphQLQuery = `
      query SettingsQuery {
        site {
          settings {
            storeHash
            storeName
          }
        }
      }
      `
  return await sendQuery(graphQLQuery)
}

export async function getCategories() {
  const graphQLQuery = `
      query CategoryQuery {
        site {
          categoryTree {
            ...CategoryFields
            children {
              ...CategoryFields
              children {
                ...CategoryFields
              }
            }
          }
        }
      }
      ${categoryFragment}
      `
  return await sendQuery(graphQLQuery)
}

export async function categoriesByIds(ids) {
  const query = `
  query CategoryTree3LevelsDeep {
    site {
      categoryTree {
        ...CategoryFields
        children {
          ...CategoryFields
          children {
            ...CategoryFields
          }
        }
      }
    }
  }
  ${categoryFragment}`

  const response = await sendQuery(query)
  const categories = response.site.categoryTree.filter((c) =>
    ids.includes(c.entityId)
  )
  return categories
}

export async function getCategoryPath(id) {
  const query = `
  query CategoryTree3LevelsDeep {
    site {
      categoryTree {
        ...CategoryFields
        children {
          ...CategoryFields
          children {
            ...CategoryFields
          }
        }
      }
    }
  }
  ${categoryFragment}`

  try {
    const response = await sendQuery(query)
    const categories = response.site.categoryTree
    const categoryPath = categories.filter((c) => c.entityId === id)
    return categoryPath ? categoryPath[0].path : false
  } catch (e) {
    console.error(e)
  }
}

export async function getProductCount() {
  const graphQLQuery = `
        query ProductCount {
          site {
            categoryTree {
              ... on CategoryTreeItem {
                name
                productCount
              }
            }
          }
        }
        `

  return await sendQuery(graphQLQuery)
}

export async function getProducts({
  perPage = 50,
  cursor,
  direction = 'after',
}) {
  let cursorString = ''
  let dir = 'first'

  if (cursor && cursor.length) {
    cursorString = `, ${direction}: "${cursor}"`
    if (direction === 'before') dir = 'last'
  }
  const graphQLQuery = `
        query AllProducts {
          site {
            products(${dir}: ${perPage}${cursorString}) {
              pageInfo {
                startCursor
                endCursor
              }
              edges {
                node {
                  ...ProductFields
                }
              }
            }
          }
        }
        ${productFragment}
        `
  return await sendQuery(graphQLQuery)
}

export async function getProductsById({
  perPage = 50,
  cursor,
  direction = 'after',
  ids,
}) {
  let cursorString = ''
  let dir = 'first'
  const stringIds = ids ? ids.join(',') : ''

  if (cursor && cursor.length) {
    if (direction === 'before') dir = 'last'
    cursorString = `, ${direction}: "${cursor}"`
  }

  const graphQLQuery = `
    query ProductsById {
      site {
        products(entityIds: [${stringIds}], ${dir}: ${perPage}${cursorString}) {
          pageInfo {
            startCursor
            endCursor
          }
          edges {
            node {
              ...ProductFields
            }
          }
        }
      }
    }
    ${productFragment}
    `

  return await sendQuery(graphQLQuery)
}

export async function getProductById(productId) {
  const graphQLQuery = `
          query ProductId {
            site {
              product${productId ? `(entityId:${productId})` : ''} {
                ...ProductFields
              }
            }
          }
          ${productFragment}`

  // Fetch data from the GraphQL Storefront API
  return await sendQuery(graphQLQuery)
}

export async function getProductBySlug(slug) {
  const graphQLQuery = `
  query ProductSlug {
    site {
      route${slug ? `(path:"${slug}")` : ''} {
        node {
          id
          ...ProductFields
        }
      }
    }
  }
  ${productFragment}`

  // Fetch data from the GraphQL Storefront API
  return await sendQuery(graphQLQuery)
}

export async function getProductsByPath(path) {
  const correctPath =
    path.startsWith('/') && path.endsWith('/') ? path : `/${path}/`
  const graphQLQuery = `
          query ProductPath {
            site {
              route${path ? `(path:"${correctPath}")` : ''} {
                node {
                  ... on Category {
                    name
                    path
                    products {
                      edges {
                        node {
                          ...ProductFields
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          ${productFragment}
          `

  return await sendQuery(graphQLQuery)
}

export async function getProductsByCategory(id) {
  const categoryPath = await getCategoryPath(id)

  // Fetch data from the GraphQL Storefront API
  return getProductsByPath(categoryPath)
}
