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
            placeholder="Got a shitty idea..."
            placeholder="Lets make it worse..."
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
