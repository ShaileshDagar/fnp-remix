import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import rootStylesHref from "./styles/root.css"
import headerStylesHref from "./styles/header.css"
import headerSearchStylesHref from "./styles/header-search.css"
import navbarStylesHref from "./styles/navbar.css"
import authStylesHref from "./styles/auth-form.css"

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
  ...(rootStylesHref ? [{ rel: "stylesheet", href: rootStylesHref }] : []),
  ...(headerStylesHref ? [{ rel: "stylesheet", href: headerStylesHref }] : []),
  ...(headerSearchStylesHref ? [{ rel: "stylesheet", href: headerSearchStylesHref }] : []),
  ...(navbarStylesHref ? [{ rel: "stylesheet", href: navbarStylesHref }] : []),
  ...(authStylesHref ? [{ rel: "stylesheet", href: authStylesHref }] : []),
];

export default function App() {
  return (
    <html lang="en">
      
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Ferns & Petals</title>
        <Meta />
        <Links />
      </head>
      
      <body>
        <Header />
        <Outlet />
        <Footer />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>

    </html>
  );
}