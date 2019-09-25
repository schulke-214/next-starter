#!/bin/bash

# initialization

echo "init/git-flow"
if ! git flow init 2>./.setup-log; then
	echo "err: git flow failed to initialize - see ./.setup-log" >&2
	exit 1
fi

echo "init/node"
nvm install 2>./.setup-log;
nvm use 2>./.setup-log;
yarn

echo "init/env"
cp config/default.env .env
