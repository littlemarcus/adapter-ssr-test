import type { Context } from "@netlify/edge-functions";

export default async (request: Request, context: Context) => {
    return new URL("https://www.marcusfromtroy.com/", request.url);
}

export const config = {
    path: "/docs-qa/kubernetes-operator/v1.22/*",
}