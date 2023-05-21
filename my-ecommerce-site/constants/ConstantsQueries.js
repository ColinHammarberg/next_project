export const CONTENT_QUERY = `{
    allBoutiques {
      id
      name
      header {
        ...on HeaderIdRecord{
          text,
          href
        }
      }
    }
}`;

export const PRODUCT_QUERY = `{
    allBoutiques {
        products {
            ...on ProductRecord {
              name,
              price,
              image {
                id
              }
            }
        }
    }`;