---
sidebar_position: 1
---

# Getting Started

Welcome to Faux-CV! This guide will help you get started with generating realistic fake resumes for testing, prototyping, or demonstration purposes.

## Installation

You can install Faux-CV using npm:

```bash
npm install faux-cv
```

Or using yarn:

```bash
yarn add faux-cv
```

## Quick Start

### Using the CLI

The fastest way to generate a resume is using the command line interface:

```bash
npx faux-cv -i tech -e 5 -f both
```

This will generate a resume for a tech professional with 5 years of experience in both markdown and JSON formats.

### Using the API

You can also use Faux-CV programmatically in your Node.js applications:

```javascript
const { generateResume } = require('faux-cv');

const resume = await generateResume({
  industry: 'tech',
  experienceYears: 5,
  format: 'both'
});

console.log(resume.markdown); // Markdown formatted resume
console.log(resume.json);     // Resume data as JSON
```

## Basic Options

Here are some common options you can use:

| Option | Description | Default |
|--------|-------------|---------|
| industry | Target industry for the resume | 'tech' |
| experienceYears | Years of work experience | 5 |
| format | Output format (markdown, json, pdf, both) | 'markdown' |
| gender | Candidate gender (male, female) | random |
| pdfStyle | PDF style (default, modern, minimal, professional) | 'default' |

## Next Steps

- Learn more about the [CLI options](./cli)
- Explore the [API reference](./api)
- Check out [templates](./templates)
- See [examples](./examples)

## Need Help?

- Check our [troubleshooting guide](./troubleshooting)
- Open an issue on [GitHub](https://github.com/faux-cv/faux-cv/issues)
- Ask a question on [Stack Overflow](https://stackoverflow.com/questions/tagged/faux-cv) 