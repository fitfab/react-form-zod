import { zodResolver } from '@hookform/resolvers/zod';
import '@picocss/pico/css/pico.min.css';
import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import './pico-overrides.css';
import './styles.css';

function App() {
  const [count, setCount] = useState(0);
  const imageBaseUrl = 'https://picsum.photos';
  const imageSizes = [80, 150, 100, 300];
  const userSchema = z.object({
    name: z.string().min(1, { message: 'Name is required.' }),
    email: z
      .string()
      .min(1, { message: 'Email is required' })
      .email({ message: 'Invalid email.' }),
    phone: z.string().min(10, { message: 'phone number is required' }),
    terms: z
      .boolean()
      .refine((val) => val === true, { message: 'Must agree to the terms.' }),
  });

  userSchema.required({
    phone: true,
    terms: true,
  });

  type FormSchemaType = z.infer<typeof userSchema>;

  // const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   const formData = new FormData(event.target as HTMLFormElement);
  //   console.log("🚀 ~ handleSubmit ~ data", event.target, formData);

  //   for (const [key, value] of formData) {
  //     console.info(`${key}: ${value}\n`);
  //   }
  // };

  useEffect(() => {
    console.count('--| useEffect: NO ARRAY DEPENDENCIES ');
  });

  useEffect(() => {
    console.count('--| useEffect: EMPTY ARRAY DEPENDENCIES ');
  }, []);

  useEffect(() => {
    console.count(`--| useEffect: [count]=${count} ARRAY DEPENDENCIES`);
  }, [count]);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormSchemaType>({
    resolver: zodResolver(userSchema),
  });

  const onSubmit: SubmitHandler<FormSchemaType> = (data) => {
    console.log(data);
  };
  const foo = 'foo';
  return (
    <main
      // !NOTE: add extra attributes to test Prettier
      className="container"
      id="container"
      aria-describedby="header-id"
      data-miguel="miguel"
    >
      <h1 id="header-id">Vite + React + React-hook-form + Zod</h1>
      <div className="card">
        <button
          type="button"
          className="main"
          onClick={() => setCount((oldCount) => oldCount + 1)}
        >
          count
          {count}
        </button>
      </div>
      <section>
        <form onSubmit={handleSubmit(onSubmit)}>
          <fieldset>
            <label htmlFor="name">
              Name
              <input type="text" id="name" {...register('name')} />
            </label>

            {errors.name && (
              <span className="error">{errors.name?.message}</span>
            )}
          </fieldset>
          <fieldset>
            <label htmlFor="email">Email</label>
            <input id="email" type="text" {...register('email')} />
            {errors.email && (
              <span className="error">{errors.email?.message}</span>
            )}
          </fieldset>
          <fieldset>
            <label htmlFor="phone">Phone</label>
            <input type="number" id="phone" {...register('phone')} />
            {errors.phone && (
              <span className="error">{errors.phone?.message}</span>
            )}
          </fieldset>
          <fieldset>
            <label htmlFor="terms">
              <input type="checkbox" id="terms" {...register('terms')} /> Agree
              to terms.{' '}
            </label>

            {errors.terms && (
              <span className="error">{errors.terms?.message}</span>
            )}
          </fieldset>
          <button type="submit" disabled={isSubmitting}>
            submit
          </button>
        </form>
      </section>

      <section>
        <h4>CSS image:</h4>
        <code>width: 22%; aspect-ratio: 3/2; object-fit: contain;</code>
        <p>
          Keepimg images of all sizes align and contain within define block.{' '}
        </p>

        <div className="image-slides">
          {imageSizes.map((size, index) => {
            const bySize = size % (index + 1) === 0 ? 100 : 300;
            const id = `${imageBaseUrl}_${index}`;
            return (
              <img
                key={id}
                className="image-contain"
                alt="some images"
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
