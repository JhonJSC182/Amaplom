#!/usr/bin/env bash

set -o errexit

bundle install
rails db:migrate
rails db:seed