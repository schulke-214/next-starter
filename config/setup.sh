#!/bin/bash

cp config/default.env .env

if ! [ -x "$(command -v git-flow)" ]; then
	echo 'Error: git flow is not installed.' >&2
	exit 1
fi

git flow init