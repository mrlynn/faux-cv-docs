---
sidebar_position: 6
---

# Troubleshooting

This guide helps you resolve common issues you might encounter when using Faux-CV.

## Common Issues

### Installation Issues

#### npm Install Fails

If you encounter issues during installation:

```bash
npm cache clean --force
npm install faux-cv
```

#### Peer Dependencies

If you see peer dependency warnings:

1. Make sure you have the required Node.js version (>= 14)
2. Install any missing peer dependencies manually

### Generation Issues

#### Resume Generation Fails

If resume generation fails:

1. Check your input parameters
2. Ensure you have write permissions in the output directory
3. Verify your template syntax if using a custom template

```javascript
// Example of proper parameter usage
const resume = await generateResume({
  industry: 'tech',
  experienceYears: 5,
  format: 'pdf'
});
```

#### Invalid Output Format

If you get an "Invalid format" error:

```javascript
// Valid format options
const validFormats = ['markdown', 'json', 'pdf', 'both'];
```

### PDF Generation Issues

#### PDF Generation Fails

If PDF generation fails:

1. Check if you have enough memory
2. Verify PDF dependencies are installed
3. Check your PDF style configuration

```javascript
// Example of proper PDF configuration
const resume = await generateResume({
  format: 'pdf',
  pdfStyle: 'modern',
  pdfColor: '#4a90e2'
});
```

#### Custom Template Issues

If your custom template isn't working:

1. Validate your Mustache syntax
2. Check all required variables are present
3. Verify template file path

```javascript
// Example of proper template usage
const resume = await generateResume({
  template: './path/to/template.mustache',
  format: 'markdown'
});
```

## Error Messages

### Common Error Messages and Solutions

| Error Message | Possible Cause | Solution |
|--------------|----------------|----------|
| "Invalid industry" | Industry not supported | Use one of the supported industries |
| "Invalid format" | Output format not recognized | Use a valid format option |
| "Template not found" | Template file missing | Check template path and file existence |
| "PDF generation failed" | PDF dependencies missing | Install required PDF dependencies |

## Getting Help

If you're still experiencing issues:

1. Check our [GitHub Issues](https://github.com/faux-cv/faux-cv/issues)
2. Search [Stack Overflow](https://stackoverflow.com/questions/tagged/faux-cv)
3. Open a new issue with:
   - Your Node.js version
   - Faux-CV version
   - Full error message
   - Minimal reproduction code

## Debug Mode

Enable debug mode for more detailed logs:

```javascript
const resume = await generateResume({
  ...options,
  debug: true
});
```

## Common Solutions

### Reset Configuration

If you're having persistent issues:

1. Clear the cache:
```bash
npm cache clean --force
```

2. Remove and reinstall:
```bash
npm remove faux-cv
npm install faux-cv
```

### Update Dependencies

Keep your dependencies up to date:

```bash
npm update faux-cv
```

### Check System Requirements

- Node.js >= 14
- NPM >= 6
- Memory: 512MB minimum
- Disk Space: 100MB minimum

## Support

If you need additional help:

- Join our [GitHub Discussions](https://github.com/faux-cv/faux-cv/discussions)
- Tag questions with `faux-cv` on Stack Overflow
- Check our [documentation](https://faux-cv.github.io/faux-cv-docs/) 