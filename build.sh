#!/bin/bash
mkdir -p upload

# Breisgau-Hochschwarzwald
cp -a configs/config.bh.js config.js
yarn gulp
if [ $? == 0 ]; then
  tar czf upload/bh.tar.gz build
fi

# Emmendingen
cp -a configs/config.ffem.js config.js
yarn gulp
if [ $? == 0 ]; then
  tar czf upload/ffem.tar.gz build
fi

# Freiburg
cp -a configs/config.fffr.js config.js
yarn gulp
if [ $? == 0 ]; then
  tar czf upload/fffr.tar.gz build
fi

# Rheinfelden
cp -a configs/config.rhf.js config.js
yarn gulp
if [ $? == 0 ]; then
  tar czf upload/rhf.tar.gz build
fi

# Hotzenwald
cp -a configs/config.hotz.js config.js
yarn gulp
if [ $? == 0 ]; then
  tar czf upload/hotz.tar.gz build
fi

# Säckingen
cp -a configs/config.saek.js config.js
yarn gulp
if [ $? == 0 ]; then
  tar czf upload/saek.tar.gz build
fi

# Südschwarzwald-West
cp -a configs/config.ssww.js config.js
yarn gulp
if [ $? == 0 ]; then
  tar czf upload/ssww.tar.gz build
fi

# Südschwarzwald-Ost
cp -a configs/config.sswo.js config.js
yarn gulp
if [ $? == 0 ]; then
  tar czf upload/sswo.tar.gz build
fi
