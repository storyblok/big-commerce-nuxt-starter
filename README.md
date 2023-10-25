# Storyblok & Nuxt BigCommerce Starter


![repo banner](/public/repo-banner.png)

> The all-in-one starter kit for high-performance e-commerce sites using [Nuxt](https://nuxt.com/) and BigCommerce integration.

- Demo site: https://storyblok-nuxt-bigcommerce-starter.netlify.app/
- Full tutorial on Storyblok: https://www.storyblok.com/tp/how-to-build-a-storefront-with-nuxt-and-bigcommerce/


<p align="center">
  <a href="https://discord.gg/jKrbAMz">
   <img src="https://img.shields.io/discord/700316478792138842?label=Join%20Our%20Discord%20Community&style=appveyor&logo=discord&color=09b3af">
   </a>
  <a href="https://twitter.com/intent/follow?screen_name=storyblok">
    <img src="https://img.shields.io/badge/Follow-%40storyblok-09b3af?style=appveyor&logo=twitter" alt="Follow @Storyblok" />
  </a>
  <a href="https://app.storyblok.com/#!/signup?utm_source=github.com&utm_medium=readme&utm_campaign=storyblok-vue">
    <img src="https://img.shields.io/badge/Try%20Storyblok-Free-09b3af?style=appveyor&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABGdBTUEAALGPC/xhBQAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAHqADAAQAAAABAAAAHgAAAADpiRU/AAACRElEQVRIDWNgGGmAEd3D3Js3LPrP8D8WXZwSPiMjw6qvPoHhyGYwIXNAbGpbCjbzP0MYuj0YFqMroBV/wCxmIeSju64eDNzMBJUxvP/9i2Hnq5cM1devMnz984eQsQwETeRhYWHgIcJiXqC6VHlFBjUeXgav40cIWkz1oLYXFmGwFBImaDFBHyObcOzdW4aSq5eRhRiE2dgYlpuYoYSKJi8vw3GgWnyAJIs/AuPu4scPGObd/fqVQZ+PHy7+6udPOBsXgySLDfn5GRYYmaKYJcXBgWLpsx8/GPa8foWiBhuHJIsl2DkYQqWksZkDFgP5PObcKYYff//iVAOTIDlx/QPqRMb/YSYBaWlOToZIaVkGZmAZSQiQ5OPtwHwacuo4iplMQEu6tXUZMhSUGDiYmBjylFQYvv/7x9B04xqKOnQOyT5GN+Df//8M59ASXKyMHLoyDD5JPtbj42OYrm+EYgg70JfuYuIoYmLs7AwMjIzA+uY/zjAnyWJpDk6GOFnCvrn86SOwmsNtKciVFAc1ileBHFDC67lzG10Yg0+SjzF0ownsf/OaofvOLYaDQJoQIGix94ljv1gIZI8Pv38zPvj2lQWYf3HGKbpDCFp85v07NnRN1OBTPY6JdRSGxcCw2k6sZuLVMZ5AV4s1TozPnGGFKbz+/PE7IJsHmC//MDMyhXBw8e6FyRFLv3Z0/IKuFqvFyIqAzd1PwBzJw8jAGPfVx38JshwlbIygxmYY43/GQmpais0ODDHuzevLMARHBcgIAQAbOJHZW0/EyQAAAABJRU5ErkJggg==" alt="Follow @Storyblok" />
  </a>
</p>


## Features

- **Headless**: powered by [Nuxt](https://nuxt.com/) and [Storyblok](https://www.storyblok.com/)
- **Contect your 🛒**: E-commerce integration with [BigCommerce](https://www.bigcommerce.com/)
- Performant.


## Quick Start

Install dependencies:

```bash
pnpm install
```

### 1. Create a Storyblok Space

[Sign up](https://app.storyblok.com/#!/signup) for a free Storyblok account and create a new space. You can also use an existing space.

### 2. Create a BigCommerce Store

[Sign up](https://www.bigcommerce.com/essentials/) for a free BigCommerce account and create a new store. You can also use an existing store.

### 3. Create a BigCommerce API Token

In your BigCommerce store, go to **Advanced Settings** > **API Accounts** and create a new API Account. Make sure to give it **Modify** permissions for **Products**, **Orders**, and **Customers**.

### 4. Add your BigCommerce API Token and Storefront url to your `.env` file

```bash
# .env
BIGCOMMERCE_TOKEN=YOUR_BIGCOMMERCE_TOKEN
BIGCOMMERCE_URL=https://your-demo-store.mybigcommerce.com
```

### 5. Add your Storyblok API Token to your `.env` variables

```bash
# .env
STORYBLOK_API_TOKEN=YOUR_TOKEN
```

### Support

- Bugs or Feature Requests? [Submit an issue](/../../issues/new).
- Do you have questions about Storyblok or you need help? [Join our Discord Community](https://discord.gg/jKrbAMz).

### Contributing

Please see our [contributing guidelines](https://github.com/storyblok/.github/blob/master/contributing.md) and our [code of conduct](https://www.storyblok.com/trust-center#code-of-conduct?utm_source=github.com&utm_medium=readme&utm_campaign=storyblok-vue).
This project use [semantic-release](https://semantic-release.gitbook.io/semantic-release/) for generate new versions by using commit messages and we use the Angular Convention to naming the commits. Check [this question](https://semantic-release.gitbook.io/semantic-release/support/faq#how-can-i-change-the-type-of-commits-that-trigger-a-release) about it in semantic-release FAQ.