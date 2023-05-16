import { gql, GraphQLClient } from 'graphql-request';

export default function Home() {
    return (
    <div></div>
  )
}

const query = gql`
  {
    allBoutiques {
      id
      name
      boutiqueDetail {
        ...on HeaderIdRecord{
          smallTitle
          bigTitle
          buttonText
          description
        }
      }
    }
  }
`;

export async function getStaticProps() {
  const endPoint = 'https://graphql.datocms.com';
  const graphQLClient = new GraphQLClient(endPoint, {
    headers: {
      "content-type": "application/json",
      authorization: "Bearer " + process.env.DATOCMS_API_KEY,
    }
  })
  const boutique = await graphQLClient.request(query);
  console.log('boutique', boutique);
  return {
    props: { boutique }
  }
}
