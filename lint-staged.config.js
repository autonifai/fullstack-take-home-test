const commands = {
  '*': () => 'prettier --write .',
  '*.{ts,tsx,js,jsx}': () => ['eslint --fix', 'npm test -- --watchAll=false'],
  'package.json': () => 'git add package-lock.json',
};

module.exports = commands;
