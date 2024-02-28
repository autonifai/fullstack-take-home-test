const commands = {
  '*': () => 'prettier --write .',
  '*.ts': () => 'eslint --fix',
  'package.json': () => 'git add package-lock.json',
};

module.exports = commands;
