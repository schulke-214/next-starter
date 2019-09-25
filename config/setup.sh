#!/bin/bash

function handle-err {
	if [ -f ".setup-log" ]; then
		echo "err: something went wrong. take a look at the .setup-log file"
		exit 1
	fi
}

rm .setup-log

echo "init/git-flow"
git flow init 2>.setup-log
handle-err

echo "init/node"
nvm install 2>.setup-log
nvm use 2>.setup-log
handle-err

yarn --silent
handle-err

echo "init/env"
cp config/default.env .env
handle-err
