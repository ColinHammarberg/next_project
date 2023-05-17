import { request } from "../lib/datocms";

const HOMEPAGE_QUERY = `{
    allBoutiques {
      id
      name
      boutiqueDetail {
        ...on HeaderIdRecord{
          smallTitle,
          bigTitle,
          buttonText,
          description
        }
      }
    }
  
    _allBoutiquesMeta {
      count
    }
  }`;

export async function getStaticProps() {
  const data = await request({
    query: HOMEPAGE_QUERY,
    variables: { limit: 10 }
  });
  return {
    props: { data }
  };
}
export default function Home({ data }) {
  console.log('data', data);
  return <div>{JSON.stringify(data, null, 2)}</div>;
}
  