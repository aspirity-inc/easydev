#!/usr/bin/env bash

DOCKER_IMAGE_APP=$1
VERSION=$2
: ${DOCKER_IMAGE_APP:?Provide DOCKER_IMAGE_APP as the 1st param}
: ${VERSION:?Provide VERSION as the 2ndparam}


FULL_PATH_TO_SCRIPT="$(realpath "${BASH_SOURCE[-1]}")"
SCRIPT_DIRECTORY="$(dirname "$FULL_PATH_TO_SCRIPT")"
DOCKERFILE_PATH="${SCRIPT_DIRECTORY}/Dockerfile"

docker buildx build \
  --file ${DOCKERFILE_PATH} \
  --tag ${DOCKER_IMAGE_APP} \
  --progress=plain \
  --build-arg VERSION=${VERSION} \
  --target app .