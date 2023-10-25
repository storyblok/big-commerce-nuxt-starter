
export interface Product {
  id: string
  name: string
  description: string
  thumbnail: string
  price: {
    value: number
    currencyCode: string
  }
}

const state = reactive<{
  products: Product[]
}>({
  products: [],
})

export const useStore = () => {
  const config = useRuntimeConfig()
 
  const baseOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${config.public.bigCommerce.token}`,
    }, // change for: localhostToken when locally
  }

  async function fetchProducts(ids: string[]) {
    const options = {
      ...baseOptions,
      body: JSON.stringify({
        query: `query paginateProducts($entityIds: [Int!]!, $pageSize: Int = 3, $cursor: String) {
          site {
            products(entityIds: $entityIds, first: $pageSize, after: $cursor) {
              pageInfo {
                startCursor
                endCursor
              }
              edges {
                cursor
                node {
                  id
                  entityId
                  name
                  description
                  prices {
                    price {
                      value
                      currencyCode
                    }
                  }
                  images{
                    edges{
                      node{
                        urlOriginal
                        altText
                      }
                    }
                  }
                }
              }
            }
          }
        }`,
        variables: {
          entityIds: ids,
        },
      }),
    } 
    const response = await fetch(`${config.public.bigCommerce.url}/graphql`, { ...options })
    const data = await response.json()

    const products: Product[] = data.data.site.products.edges.map(product => ({ 
      id: product.node.entityId,
      name: product.node.name,
      description: product.node.description,
      thumbnail: product.node.images.edges[0].node.urlOriginal,
      price: product.node.prices.price,
    }))
    
    state.products = products

    return data
  }

  async function fetchProductById(id: string) {
    
    const options = {
      ...baseOptions,
      body: JSON.stringify({
        query: `{
          site {
            product(entityId: ${id}) {
              id
              entityId
              name
              plainTextDescription
              defaultImage {
                ...ImageFields
              }
              prices {
                price {
                  ...MoneyFields
                }
              }
            }
          }
        }
        
        fragment ImageFields on Image {
          url320wide: url(width: 320)
          url640wide: url(width: 640)
          url960wide: url(width: 960)
          url1280wide: url(width: 1280)
        }
        
        fragment MoneyFields on Money {
          value
          currencyCode
        }`,
      }),
    } 

    const { data, pending, error, refresh } = await useFetch(`${config.public.bigCommerce.url}/graphql`, options)

    return { data, pending, error, refresh }
  }

  return {
    state,
    ...toRefs(state),
    fetchProducts,
    fetchProductById,
  }

}
