---
title: Create React App
description: A default Create React App project, utilizing `serve` to serve the built app
tags:
  - node
  - react
---

# Create React App

This is a [Create React App](https://create-react-app.dev/) starter that uses [serve](https://www.npmjs.com/package/serve).

[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/template/6sjhSn?referralCode=ySCnWl)

## ✨ Features

- Create React App
- Serve

## 💁‍♀️ How to use

- Install required dependencies with `npm install`
- Start the server for development `npm run dev`

    (The original `start` command has been more appropriately renamed to `dev`)

## ❓ Why use `serve`

By default Railway will use the `start` script defined in package.json to run your app, the problem with that for a default create-react-app project is that the start script starts a development server
not fit to run on railway, for reasons such as:

 - Starts a file watching development server that's resource intensive
 - Has a tendency for ram to get out of hand (>600mb)
 - Doesn't listen on the railway provided PORT variable
 - Not as stable or performant as `serve`
