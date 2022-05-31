import * as React from "react"
import { Helmet } from "react-helmet"

function SEO (props) {

  return (

    <Helmet>
      htmlAttributes={{
        lang: 'en',
      }}

      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta name="description" content={props.description} />
      <meta name="author" content="Lee Lawton" />

      <title>{props.title}</title>
      <meta name="title" content={props.title}/>
      <meta name="description" content={props.description}/>

      <meta property="og:type" content="website"/>
      <meta property="og:url" content={props.url}/>
      <meta property="og:title" content={props.title}/>
      <meta property="og:description" content={props.description}/>
      <meta property="og:image" content="https://all-elements.leelawtondesign.co.uk/assets/link_preview.png"/>

      <meta property="twitter:card" content="summary_large_image"/>
      <meta property="twitter:url" content={props.url}/>
      <meta property="twitter:title" content={props.title}/>
      <meta property="twitter:description" content={props.description}/>
      <meta property="twitter:image" content="https://all-elements.leelawtondesign.co.uk/assets/link_preview.png"/>

      <link rel="icon" type="image/x-icon" href="../images/favicon.png" />

    </Helmet>


  )
}


export default SEO
