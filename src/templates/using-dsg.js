import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const postToWebhook = async () => {
  try {
    const response = await fetch('https://webhook.site/def722c7-ad0b-4fdd-b855-0e8eef329ec5', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
        // Add any other headers your webhook expects
      },
      body: JSON.stringify({
        // Your payload here
        message: 'Hello from the DSG page!'
      })
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log('Response data:', data);
  } catch (error) {
    console.error('Error posting to webhook:', error);
  }
}

// Call the webhook function when the component mounts
React.useEffect(() => {
  postToWebhook();
}, []);

const UsingDSG = () => (
  <Layout>
    <h1>
      Hello from a <b>DSG Page</b>
    </h1>
    <p>This page is not created until requested by a user.</p>
    <p>
      To learn more, head over to our{" "}
      <a href="https://www.gatsbyjs.com/docs/reference/rendering-options/deferred-static-generation/">
        documentation about Deferred Static Generation
      </a>
      .
    </p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export const Head = () => <Seo title="Using DSG" />

export default UsingDSG
