#!/bin/bash

## This is so bad but can work as a easy baseline builder
## TODO this won't work unless we now update Images.js as well, also doesn't even make sense because we don't even store the images now

FILE=$1
OUTFILE=${2:-"File.js"}

if [ ! -f $FILE ]; then
  echo "Error $FILE not found"
  exit
fi

IMAGES_DIR="../Images/${FILE%.js}"

if [ ! -d $IMAGES_DIR ]; then
  echo "Directory $IMAGES_DIR does not exist"
  exit
fi


IMAGE_FILES=$(cd $IMAGES_DIR && ls)

string=
for IMG in ${IMAGE_FILES[@]}; do
  NAME=${IMG%.png}
  NAME=${NAME%.jpeg}
  NAME=${NAME%.jpg}
  string="${string}import $NAME from '$IMAGES_DIR/$IMG';
"

done

string="${string}import states from './States';
import { Images } from './Images';

export const elements = [
"

for IMG in ${IMAGE_FILES[@]}; do
  NAME=${IMG%.png}
  NAME=${NAME%.jpeg}
  NAME=${NAME%.jpg}
  string="${string}  {
    name: \"$NAME\",
    image: Images.$NAME,
    state: states.UNPLACED
  },
"
done

string="${string}];"

echo "$string" > "$OUTFILE"
