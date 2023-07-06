#!/bin/bash
set -e
STACK_FILE=/home/ubuntu/docker/vendor_frontend/docker-compose.yml

#update docker container with new image
docker compose -f $STACK_FILE up -d --build
