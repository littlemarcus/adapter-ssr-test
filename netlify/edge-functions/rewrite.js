export default async (request, context) => {
    const url = new URL(request.url)
    if (url.pathname.startsWith('/docs-qa/kubernetes-operator/v1.22/')) {
      const targetUrl = `https://www.marcusfromtroy.com/${url.pathname.slice('/docs-qa/kubernetes-operator/v1.22'.length)}`
      return fetch(targetUrl)
    }
    return
  }

  export const config = {
    path: "/*"
  }