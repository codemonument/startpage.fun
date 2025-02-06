import { db, Link } from "astro:db";

// https://astro.build/db/seed
export default async function seed() {
  await db.insert(Link).values([
    {
      id: 1,
      url: "https://astro.build",
      title: "Astro",
      image:
        "https://uploads-ssl.webflow.com/5c489e3ed35e747cf65c7e66/5c744db66cec1047a7db3362_astro-wordmark-x1216%402x.png",
    },
    {
      id: 2,
      url: "https://google.com",
      title: "Google",
      image:
        "https://kagi.com/proxy/2560px-Google_2015_logo.svg.png?c=9cn5Kxse4yD05EJkf6QML9dK4clUbdQ9Oq4d5gDoyHBwiX43u0CCAEVi8DMCHFAXo0VkdZrbsrYWO81b73U4yRv00kH10L0cfcdJhSdH_OotZxUpvJ46_BLIxFItWThDyLvUZsjGcMCeUwdjbOf_kJh9P8F-LSQIqzekYE4KvUY%3D",
    },
    {
      id: 3,
      url: "https://winfuture.de/",
      title: "Winfuture",
      image:
        "https://kagi.com/proxy/5913.jpg?c=i9usRnWgjoG2aj4XUdRdKwShuTe_AM9OkR7LyY0eVqW3pud-722S8miast1-lgjdeP0UTy1BY0czleD8rKC0iQ%3D%3D",
    },
  ]);
}
