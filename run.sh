#!/bin/bash

if [ ! -d "node_modules" ]; then
  # Install server dependencies
  npm install
fi

# Start the server
npm run server &

# Install client dependencies
cd client
npm install

# Start the client
npm run dev
