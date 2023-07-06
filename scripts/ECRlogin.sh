#!/bin/bash
set -e
IMAGE_NAME=556200905665.dkr.ecr.ap-south-1.amazonaws.com/wybrid-vendor-frontend-production

#docker login to aws ecr
aws ecr get-login-password | docker login --username AWS --password-stdin $IMAGE_NAME
