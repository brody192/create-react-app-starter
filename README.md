---
title: Create React App
description: A default Create React App project, utilizing `Caddy` to serve the built app
tags:
  - Node
  - React
  - Caddy
---

# Create React App

This is a [Create React App](https://create-react-app.dev/) starter that uses [Caddy](https://caddyserver.com/).

[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/template/6sjhSn?referralCode=ySCnWl)

## ✨ Features

- Create React App
- [Caddy](https://caddyserver.com/)

## 💁‍♀️ How to use

- Install required dependencies with `npm install`
- Start the server for development `npm run dev`

  (The original `start` command has been more appropriately renamed to `dev`)

## ❓ Why use `Caddy` when deploying to Railway?

Caddy is a powerful, enterprise-ready, open source web server, and therefore Caddy is far better suited to serve websites than react-scripts is, using Caddy will result in much less memory and cpu usage compared to serving with react-scripts (much lower running costs too)

To see how this is achieved with nixpacks, check out the fully documented nixpacks.toml file in this repository

The configuration for Caddy is called a Caddyfile, and you can edit that file to further suite your needs, by default it comes configured to serve a single page app for Vue 3, and to also gzip the responses

**Relevant Caddy documentation:**

- [The Caddyfile](https://caddyserver.com/docs/caddyfile)
- [Caddyfile Directives](https://caddyserver.com/docs/caddyfile/directives)
- [root](https://caddyserver.com/docs/caddyfile/directives/root)
- [encode](https://caddyserver.com/docs/caddyfile/directives/encode)
- [file_server](https://caddyserver.com/docs/caddyfile/directives/file_server)
- [try_files](https://caddyserver.com/docs/caddyfile/directives/try_files)
