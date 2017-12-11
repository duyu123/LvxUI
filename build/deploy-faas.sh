#! /bin/sh
mkdir temp_web
npm run deploy:build
cd temp_web
git clone -b gh-pages https://github.com/JamesYue369/LvxUI.git && cd LvxUI

# build sub folder
SUB_FOLDER='2.0'
mkdir $SUB_FOLDER
rm -rf *.js *.css *.map static
rm -rf $SUB_FOLDER/**
cp -rf ../../examples/element-ui/** .
cp -rf ../../examples/element-ui/** $SUB_FOLDER/
cd ../..

# deploy domestic site
faas deploy alpha
rm -rf temp_web