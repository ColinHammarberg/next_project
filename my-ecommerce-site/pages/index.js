import { request } from "../lib/datocms";
import BoutiqueContainer from "./components/BoutiqueContainer";
import Footer from "./components/folder/Footer";
import Header from "./components/Header";
import './components/index.scss'
import ProductsContextProvider from "../utils/ProductsContext";

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
        productImage {
          url
        },
        productId,
        productDescription,
        instock
      }
    }
    logotype {
      logotype {
        url
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
    <ProductsContextProvider>
      <Header data={data} />
      <BoutiqueContainer data={data} />
      <Footer data={data}/>
    </ProductsContextProvider>
  </div>;
}
  