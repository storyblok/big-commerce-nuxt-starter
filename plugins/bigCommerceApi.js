export async function getProductInfo(productId) {
  const storeUrl = new URL(process.env.storeUrl)
  const graphQLUrl = `${storeUrl.origin}/graphql`

  const graphQLQuery = `
          query StaticSiteExample {
            site {
              product${productId ? `(entityId:${productId})` : ''} {
                ...ProductFields
              }
            }
          }
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
          }`

  // Fetch data from the GraphQL Storefront API
  return await fetch(graphQLUrl, {
    method: 'POST',
    credentials: 'include',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.storeToken}`,
    },
    body: JSON.stringify({
      query: graphQLQuery,
    }),
  })
    .then((res) => res.json())
    .then((res) => res.data)
}

export async function getProducts(productIds) {
  const storeUrl = new URL(process.env.storeUrl)
  const graphQLUrl = `${storeUrl.origin}/graphql`

  const graphQLQuery = `
          query StaticSiteExample {
            site {
              products${
                productIds ? `(entityIds:[${productIds.join(',')}])` : ''
              } {
                edges {
                  node {
                ...ProductFields
                  }
                }
              }
            }
          }
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
          }`

  // Fetch data from the GraphQL Storefront API
  return await fetch(graphQLUrl, {
    method: 'POST',
    credentials: 'include',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.storeToken}`,
    },
    body: JSON.stringify({
      query: graphQLQuery,
    }),
  })
    .then((res) => res.json())
    .then((res) => res.data)
}

export async function getProductsByCategory(categoryPath) {
  const storeUrl = new URL(process.env.storeUrl)
  const graphQLUrl = `${storeUrl.origin}/graphql`

  const graphQLQuery = `
          query StaticSiteExample {
            site {
              route${categoryPath ? `(path:"${categoryPath}")` : ''} {
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
          }`

  // Fetch data from the GraphQL Storefront API
  return await fetch(graphQLUrl, {
    method: 'POST',
    credentials: 'include',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.storeToken}`,
    },
    body: JSON.stringify({
      query: graphQLQuery,
    }),
  })
    .then((res) => res.json())
    .then((res) => res.data)
}
