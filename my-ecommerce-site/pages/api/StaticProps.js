import { request } from "@/lib/datocms";


const HOMEPAGE_QUERY = `{
    allBoutiques {
      id
      name
      header {
        ...on HeaderIdRecord{
          text,
          href
        }
      }
      products {
        ...on ProductRecord {
          name,
          price,
          image {
            id
          }
        }
      }
    }
    }`;
  
  export async function getStaticProps() {
    const data = await request({
      query: HOMEPAGE_QUERY,
    });
    return {
      props: { data }
    };
  }