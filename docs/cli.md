---
sidebar_position: 2
---

# CLI Reference

Faux-CV provides a powerful command-line interface for generating resumes. This guide covers all available options and provides examples of common use cases.

## Basic Usage

```bash
npx faux-cv [options]
```

## Options

### Core Options

| Option | Description | Default |
|--------|-------------|---------|
| `-i, --industry` | Industry specialization | 'tech' |
| `-e, --experience` | Years of experience | 5 |
| `-f, --format` | Output format (markdown, json, pdf, both) | 'markdown' |
| `-g, --gender` | Gender (male, female) | random |
| `-o, --output` | Output file name | 'resume' |

### Profile Options

| Option | Description | Default |
|--------|-------------|---------|
| `-l, --no-linkedin` | Exclude LinkedIn profile | false |
| `-w, --no-website` | Exclude personal website | false |

### PDF Options

| Option | Description | Default |
|--------|-------------|---------|
| `-p, --pdf-style` | PDF style (default, modern, minimal, professional) | 'default' |
| `--pdf-color` | Primary color for PDF (hex code) | '#2d5ba9' |
| `-b, --batch-pdf` | Create a single PDF containing all resumes | false |

### Template Options

| Option | Description | Default |
|--------|-------------|---------|
| `-t, --template` | Custom Mustache template file | built-in template |

### Generation Options

| Option | Description | Default |
|--------|-------------|---------|
| `-c, --count` | Number of resumes to generate | 1 |
| `-s, --seed` | Random seed for consistent generation | random |

## Examples

### Basic Resume Generation

Generate a basic tech resume:
```bash
npx faux-cv
```

### Specific Industry and Experience

Generate a resume for a marketing professional with 10 years of experience:
```bash
npx faux-cv -i marketing -e 10
```

### Multiple Formats

Generate a resume in both markdown and JSON formats:
```bash
npx faux-cv -f both
```

### Custom PDF Style

Generate a resume with a modern PDF style and custom color:
```bash
npx faux-cv -f pdf -p modern --pdf-color "#4a90e2"
```

### Batch Generation

Generate 5 tech resumes in a single PDF:
```bash
npx faux-cv -c 5 -b -f pdf
```

### Using a Custom Template

Generate a resume using a custom template:
```bash
npx faux-cv -t ./my-template.mustache
```

### Reproducible Generation

Generate the same resume multiple times using a seed:
```bash
npx faux-cv -s 12345
```

## Exit Codes

| Code | Description |
|------|-------------|
| 0 | Success |
| 1 | General error |
| 2 | Invalid options |
| 3 | File system error |
| 4 | Template error |

## Environment Variables

| Variable | Description |
|----------|-------------|
| `FAUX_CV_TEMPLATE_DIR` | Directory for custom templates |
| `FAUX_CV_OUTPUT_DIR` | Directory for generated files |

## See Also

- [API Reference](./api) - For programmatic usage
- [Templates](./templates) - Learn about template customization
- [Examples](./examples) - More usage examples 