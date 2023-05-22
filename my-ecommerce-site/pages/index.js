import { request } from "../lib/datocms";
import BoutiqueContainer from "./components/Containers/BoutiqueContainer";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import './style/index.scss'
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
    footer {
      aboutus
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
    <ProductsContextProvider data={data} >
      <Header data={data} />
      <BoutiqueContainer data={data} />
      <Footer data={data}/>
    </ProductsContextProvider>
  </div>;
}
  