const fs = require('fs');
const yaml = require('yaml');

const filePath = 'exampleSite/config/_default/params.yaml';
const file = fs.readFileSync(filePath, 'utf8');
const config = yaml.parse(file);

config.privacy.googleTagManager.disable = false;
config.services.googleTagManager.id = 'GTM-W8D5W642';

const newYaml = yaml.stringify(config);

fs.writeFileSync(filePath, newYaml, 'utf8');

console.log('Updated config.yaml successfully!');
