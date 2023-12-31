#!/usr/bin/env bash

DOCKER_IMAGE_DOCS=$1
VERSION=$2
: ${DOCKER_IMAGE_DOCS:?Provide DOCKER_IMAGE_DOCS as the 1st param}
: ${VERSION:?Provide VERSION as the 2ndparam}


FULL_PATH_TO_SCRIPT="$(realpath "${BASH_SOURCE[-1]}")"
SCRIPT_DIRECTORY="$(dirname "$FULL_PATH_TO_SCRIPT")"
DOCKERFILE_PATH="${SCRIPT_DIRECTORY}/DockerFileDocs"

echo "$DOCKERFILE_PATH"
echo "$DOCKER_IMAGE_DOCS"
echo "$VERSION"

docker buildx build --file ${DOCKERFILE_PATH} --tag ${DOCKER_IMAGE_DOCS?} --progress=plain --build-arg VERSION=${VERSION} --target production-documentation .