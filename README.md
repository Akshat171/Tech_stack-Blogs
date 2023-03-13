Tech Stack Blog Website
This is a blog website developed using React.js, Next.js, GraphQL, and GraphCMS. The website allows users to read blog posts on various topics related to technology and software development. The website is designed to be fast, responsive, and user-friendly.

Technologies Used
React.js: A JavaScript library for building user interfaces.
Next.js: A React framework for building server-side rendered web applications.
GraphQL: A query language for APIs that allows clients to request only the data they need.
GraphCMS: A headless content management system that allows developers to create and manage content using a GraphQL API.
Features
Responsive design: The website is designed to be responsive and work on all devices, including desktops, tablets, and smartphones.
Server-side rendering: Next.js is used to render pages on the server, which improves performance and SEO.
GraphQL API: The website uses a GraphQL API to fetch data from the GraphCMS backend.
Search functionality: Users can search for blog posts using keywords.
Pagination: Blog posts are paginated to improve performance and user experience.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

Getting Started
To run the website locally, follow these steps:

Clone the repository:
bash

git clone https://github.com/your-username/tech-stack-blog-website.git
Install dependencies:
bash

cd tech-stack-blog-website
npm install
Create a .env file in the root directory with the following content:
makefile

GRAPHCMS_ENDPOINT=your_graphcms_endpoint
Replace your_graphcms_endpoint with the endpoint URL of your GraphCMS API.

Start the development server:

npm run dev

Open [https://teck-stack-blogs.netlify.app/](https://teck-stack-blogs.netlify.app/) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
