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
  
  return (
    <div>
      <Head>
    <!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-MZNF6M61TH"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-MZNF6M61TH');
</script>
  
        <title>Shitty Business Ideas </title>
        <link rel="icon" href="/dog.png"/>
      </Head>
   
  <main className={styles.main}>
        <img src="/r31-logo.svg" alt="Rocket 31 Logo" className={styles.icon} />
        <h3>Enter a product</h3>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="product"
            placeholder="Enter a product name, botty will handle the rest"
            placeholder="Lets make it worse"
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
