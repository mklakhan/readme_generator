// function to create the markdown file
const generateMarkdown = (data) => {
  const { title, description, installation, usage, credits, license } = data

  return `# ${title}
## Description
${description}


## Installation
${installation}

## Usage
${usage}

## Credits
${credits}

## License
${license}
`
}

module.exports = generateMarkdown