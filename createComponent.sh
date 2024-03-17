#!/bin/bash

ComponentName="$1"

ComponentRoute="$2"

if [ -z "$ComponentName" ]; then
  echo "Error: a component name must be provided."
  exit 1
fi

if [ -z "$ComponentRoute" ]; then
  echo "Error: a component route must be provided."
  exit 1
fi

mkdir -p "./src/$ComponentRoute/$ComponentName"

echo "import $ComponentName from './$ComponentName';

export {
  $ComponentName
}" > "./src/$ComponentRoute/$ComponentName/index.ts"

touch "./src/$ComponentRoute/$ComponentName/$ComponentName.sass"

echo "import './$ComponentName.sass'

export default function $ComponentName({ className }: ${ComponentName}Props) {
  return (
    
  )
}

type ${ComponentName}Props = {
  className?: string
}
" > "./src/$ComponentRoute/$ComponentName/$ComponentName.tsx"

echo "Component $ComponentName succesfully created."
