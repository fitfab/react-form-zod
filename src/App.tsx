import { useState } from "react";
import { z } from "zod";
import reactLogo from "./assets/react.svg";
import "@picocss/pico/css/pico.min.css";
import "./styles.css";
import { isValidUUIDV4 } from "is-valid-uuid-v4";

function App() {
  const [count, setCount] = useState(0);
  const imageBaseUrl = `https://picsum.photos`;
  const imageSizes = [80, 150, 100, 300];
  const schema = z.object({
    name: z.string().min(1, { message: "Name is required." }),
    email: z.string().email({ message: "Invalid email." }),
    phone: z.string(),
  });

  console.log(isValidUUIDV4("0185355e-a900-57d8-09e1-1c8bb64924f5"));

  imageSizes.map((size, index) => {
    console.log(index, size * 1, "🚀 ~ App ~ size", size % (index + 1));
  });

  const handleSubmit = (data) => {
    console.log("🚀 ~ handleSubmit ~ data", data);
  };

  return (
    <main className="container">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React + React-hook-form + Zod</h1>
      <div className="card">
        <button
          className="primary"
          onClick={() => setCount((count) => count + 1)}
        >
          UUID{" "}
          {isValidUUIDV4("0185355e-a900-57d8-09e1-1c8bb64924f5")
            ? "valid"
            : "no bueno"}
        </button>
      </div>
      <section>
        <form action="" onSubmit={handleSubmit}>
          <fieldset>
            <label htmlFor="name">Name</label>
            <input name="name" />
          </fieldset>
          <fieldset>
            <label htmlFor="email">Name</label>
            <input name="email" type="email" />
          </fieldset>
        </form>
        <button type="submit">submit</button>
      </section>

      <section>
        <h4>CSS image:</h4>
        <code>width: 22%; aspect-ratio: 3/2; object-fit: contain;</code>
        <p>
          Keepimg images of all sizes align and contain within define block.{" "}
        </p>

        <div className="image-slides">
          {imageSizes.map((size, index) => {
            const bySize = size % (index + 1) === 0 ? 100 : 300;
            return (
              <img
                className="image-contain"
                src={`${imageBaseUrl}/${size}/${bySize}`}
              />
            );
          })}
        </div>
      </section>
    </main>
  );
}

export default App;
