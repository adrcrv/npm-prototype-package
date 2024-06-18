#!/bin/bash

COMMAND="$1"

if [ "$COMMAND" == "postinstall" ]; then
    ./scripts/postinstall.sh
else
    echo "Invalid command. Available options: postinstall"
    exit 1
fi