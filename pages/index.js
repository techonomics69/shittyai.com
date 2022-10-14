import Head from "next/head";
import { useState } from "react";
import styles from "./index.module.css";

export default function Home() {
  const [productInput, setproductInput] = useState("");
  const [result, setResult] = useState();

  async function onSubmit(event) {
    event.preventDefault();
    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ product: productInput })
    });
    const data = await response.json();
    setResult(data.result);
    setproductInput("");
  }
  
  <!-- Google Tag Manager -->
  
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','GTM-5MCNJV8');</script>
  
<!-- End Google Tag Manager -->
  
  return (
    <div>
      <Head>
        <title>Shitty Business Ideas </title>
        <link rel="icon" href="/dog.png" />
      </Head>
   
  <main className={styles.main}>
        <img src="/r31-logo.svg" alt="Rocket 31 Logo" className={styles.icon} />
        <h3>Enter a product</h3>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="product"
            placeholder="Enter a product name"
            value={productInput}
            onChange={(e) => setproductInput(e.target.value)}
          />
          <input type="submit" value="Generate Idea" />
        </form>
        <div className={styles.result}>{result}</div>
      </main>
    </div>
  );
}
