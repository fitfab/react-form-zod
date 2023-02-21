import { useState, useEffect, FormHTMLAttributes } from "react";
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

  const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    console.log("🚀 ~ handleSubmit ~ data", event.target, formData);

    for (const [key, value] of formData) {
      console.info(`${key}: ${value}\n`);
    }
  };

  useEffect(() => {
    console.count("--| useEffect: NO ARRAY DEPENDENCIES ");
  });

  useEffect(() => {
    console.count("--| useEffect: EMPTY ARRAY DEPENDENCIES ");
  }, []);

  useEffect(() => {
    console.count(`--| useEffect: [count]=${count} ARRAY DEPENDENCIES`);
  }, [count]);

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
        <button className="" onClick={() => setCount((count) => count + 1)}>
          count {count}
        </button>
      </div>
      <section>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <label htmlFor="name">Name</label>
            <input name="name" />
          </fieldset>
          <fieldset>
            <label htmlFor="email">Email</label>
            <input name="email" type="email" />
          </fieldset>
          <button type="submit">submit</button>
        </form>
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
