This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!


## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.




// Search Component :-


import React, { useState } from "react";
const SearchTravel = () => {
  const [state, setState] = useState({
    start_city: "",
    end_city: "",
  });

  const[distance , setDistance] = useState(null);

  const { start_city, end_city } = state;

  const fetchData = async (scity:string , ecity:string) => {
    try {
      const response = await fetch(`https://main--romingo-backend-express.netlify.app/.netlify/functions/api/journey/${scity}/${ecity}/bus/grade%20a`);
      const data = await response.json();
      console.log(data);
      
      setDistance(data.distance);
    } catch (error) {
     console.log(error);
    }
  };


  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(start_city);
    console.log(end_city);
    fetchData(start_city, end_city);

  };
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };


  return (
    <div>
      <section className="w-[100%] h-[300px] bg-slate-200 flex flex-col justify-center items-center">
        <form onSubmit={handleSubmit}>
          <article className="flex gap-3">
            <input
              type="text"
              id="scity"
              name="start_city"
              value={start_city}
              placeholder="Enter Start City"
              onChange={handleChange}
            />
            <input
              type="text"
              id="ecity"
              name="end_city"
              value={end_city}
              placeholder="Enter Destination"
              onChange={handleChange}
            />

            <button className="px-5 py-1 bg-green-300 rounded-md ">Search</button>
          </article>
        </form>
        <div className="pt-10">
          <h2>Distance : <span className="text-red-600 font-bold">{distance}</span></h2>
        </div>
      </section>
    </div>
  );
};

export default SearchTravel;



