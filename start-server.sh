#!/bin/bash

# Change to the portfolio directory
cd "$(dirname "$0")/portfolio"

# Start the Python HTTP server
echo "Starting server at http://localhost:8000"
python3 -m http.server 8000
