#!/bin/bash


npm init -y &&
npm i -D webpack webpack-cli typescript ts-loader &&
TEMPDATAFILE=tmp_file_`date +%s`
PACKAGEJSON=package.json
cp $PACKAGEJSON $TEMPDATAFILE &&
cat $TEMPDATAFILE | jq '.scripts |= .+{"watch": "webpack --watch"} +{"build": "webpack"}' > $PACKAGEJSON &&
rm -f $TEMPDATAFILE
