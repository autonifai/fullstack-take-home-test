const commands = {
  '*': () => 'prettier --write .',
  '*.{ts,tsx,js,jsx}': () => 'eslint --fix',
  'src/*.{ts,tsx,js,jsx}': () => 'npm test -- --watchAll=false',
  'package.json': () => 'git add package-lock.json',
};

module.exports = commands;
