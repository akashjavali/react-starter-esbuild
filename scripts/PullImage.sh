#!/bin/bash
set -e
IMAGE_NAME=556200905665.dkr.ecr.ap-south-1.amazonaws.com/wybrid-vendor-frontend-production

#pull latest image from ecr
docker pull $IMAGE_NAME
