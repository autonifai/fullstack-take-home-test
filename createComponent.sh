#!/bin/bash

ComponentName="$1"

if [ -z "$ComponentName" ]; then
  echo "Error: a component name must be provided."
  exit 1
fi

mkdir -p "./src/$ComponentName"

echo "import $ComponentName from './$ComponentName';

export {
  $ComponentName
}" > "./src/$ComponentName/index.ts"

touch "./src/$ComponentName/$ComponentName.sass"

echo "import './$ComponentName.sass'

export default function $ComponentName() {
  return (
    
  )
}" > "./src/$ComponentName/$ComponentName.tsx"

echo "Component $ComponentName succesfully created."
