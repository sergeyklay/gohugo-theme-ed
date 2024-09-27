#!/bin/bash

echo "Installing yq"

VERSION=v4.44.3
BINARY=yq_linux_amd64

wget https://github.com/mikefarah/yq/releases/download/${VERSION}/${BINARY}.tar.gz -O - |\
  tar xz && mv ${BINARY} ./yq

chmod +x ./yq
./yq --version
