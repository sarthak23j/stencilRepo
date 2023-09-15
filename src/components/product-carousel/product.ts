// const Product = [
//     {
//       i:1,
//       src: 'https://source.unsplash.com/random?blue',
//       name: 'Product 1',
//       desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum consequatur quae doloremque totam fugit sapiente suscipit perspiciatis, aliquam eius quos hic voluptates! Facere, provient animi.",
//       price: 10.00,
//     },
//     {
//       i:2,
//       src: 'https://source.unsplash.com/random?purple',
//       name: 'Product 2',
//       desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi beatae ad repellat quibusdam corporis ab ullam iste, mollitia perferendis quisquam sed possimus necessitatibus sapiente corrupti quas illo aspernatur nobis quae perspiciatis rem cupiitate quam blanditiis ducimus. Earum doloribus, dolorem quo at nisi soluta amet praesentium minima laboriosam eligendi dicta, suscipit, in quisquam reiciendis nam nesciunt repellendus accusantium deserunt. Deserunt ipsum voluptate nam vitae, illum et voluptatibus laudantium consectetur reprehenderit cumque reiciendis, unde earum aspernatur iste, quasi in tempore aliquam?",
//       price: 15.50,
//     },
//     {
//       i:3,
//       src: 'https://source.unsplash.com/random?green',
//       name: 'Product 3',
//       desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam, hic? Qui, hic quisquam harum enim fuga laborum unde cum saepe? Laudantium aut ea blanditiis eius odit inciunt, ullam, distinctio minus quos quisquam ipsa voluptatibus similique, cupiitate quae asperiores accusantium consectetur repudiandae nisi qui pariatur doloremque laboriosam. Sit doloribus vel vero!",
//       price: 165.45 ,
//     },
//     {
//       i:4,
//       src: 'https://source.unsplash.com/random?orange',
//       name: 'Product 4',
//       desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam, hic? Qui, hic quisquam harum enim fuga laborum unde cum saepe? Laudantium aut ea blanditiis eius odit inciunt, ullam, distinctio minus quos quisquam ipsa voluptatibus similique, cupiitate quae asperiores accusantium consectetur repudiandae nisi qui pariatur doloremque laboriosam. Sit doloribus vel vero!",
//       price: 11.15 ,
//     },
//     {
//       i:5,
//       src: 'https://source.unsplash.com/random?grey',
//       name: 'Product 5',
//       desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam, hic? Qui, hic quisquam harum enim fuga laborum unde cum saepe? Laudantium aut ea blanditiis eius odit inciunt, ullam, distinctio minus quos quisquam ipsa voluptatibus similique, cupiitate quae asperiores accusantium consectetur repudiandae nisi qui pariatur doloremque laboriosam. Sit doloribus vel vero!",
//       price: 6.50 ,
//     },
//     {
//       i:6,
//       src: 'https://source.unsplash.com/random?yellow',
//       name: 'Product 6',
//       desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam, hic? Qui, hic quisquam harum enim fuga laborum unde cum saepe? Laudantium aut ea blanditiis eius odit inciunt, ullam, distinctio minus quos quisquam ipsa voluptatibus similique, cupiitate quae asperiores accusantium consectetur repudiandae nisi qui pariatur doloremque laboriosam. Sit doloribus vel vero!",
//       price: 19.98 ,
//     },
//   ];
// export default Product;
//
// ---------------------------------

import { Client } from 'pg';

const client = new Client({
  host:'localhost',
  port: 4532,
  database: 'db1',
  user: 'postgres',
  password: '2303',
})

await client.connect();

const result = await client.query('SELCT * FROM mytable');

const mytable = result.rows.map((row) => ({
  i:row.id,
  name:row.name,
  src:row.src,
  price:row.price,
  desc:row.descr,
}));

console.log(mytable);

await client.end();