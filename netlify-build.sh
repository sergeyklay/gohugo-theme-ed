#!/bin/bash

echo "Installing yq"

VERSION=v4.44.3
BINARY=yq_linux_amd64

wget https://github.com/mikefarah/yq/releases/download/${VERSION}/${BINARY}.tar.gz -O - |\
  tar xz && mv ${BINARY} ./yq

chmod +x ./yq
./yq --version

echo "Patch config file for demo site"

yq -i '.privacy.googleTagManager.disable = false' exampleSite/config/_default/params.yaml
yq -i '.services.googleTagManager.id = "GTM-W8D5W642"' exampleSite/config/_default/params.yaml

cat exampleSite/config/_default/params.yaml
