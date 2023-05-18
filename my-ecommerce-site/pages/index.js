import { request } from "../lib/datocms";
import BoutiqueContainer from "./components/BoutiqueContainer";
import Footer from "./components/Footer";
import Header from "./Header";
import './components/index.scss'

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
export default function Home({ data }) {
  return <div className="home-container">
    <Header data={data} />
    <BoutiqueContainer data={data} />
    <Footer data={data}/>
  </div>;
}
  