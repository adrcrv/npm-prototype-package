#!/bin/bash

BASEDIR=$(dirname $0)
COMMAND="$1"

if [ "$COMMAND" == "postinstall" ]; then
    chmod +x "${BASEDIR}/postinstall.sh"
    "${BASEDIR}/../scripts/postinstall.sh"
else
    echo "Invalid command. Available options: postinstall"
    exit 1
fi