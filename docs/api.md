---
sidebar_position: 3
---

# API Reference

Faux-CV provides a simple yet powerful API for generating resumes programmatically. This guide covers all available functions, options, and return types.

## Main Functions

### generateResume

The primary function for generating resumes.

```typescript
async function generateResume(options: ResumeOptions): Promise<ResumeOutput>
```

#### Options

```typescript
interface ResumeOptions {
  industry?: string;          // Industry specialization (default: 'tech')
  experienceYears?: number;   // Years of experience (default: 5)
  format?: string;           // Output format: 'markdown' | 'json' | 'pdf' | 'both' (default: 'markdown')
  gender?: string;           // 'male' | 'female' (default: random)
  includeLinkedin?: boolean; // Include LinkedIn profile (default: true)
  includeWebsite?: boolean;  // Include personal website (default: true)
  template?: string;         // Custom Mustache template path
  pdfStyle?: string;        // 'default' | 'modern' | 'minimal' | 'professional'
  pdfColor?: string;        // Primary color for PDF (hex code)
  seed?: number;            // Random seed for consistent generation
}
```

#### Return Value

```typescript
interface ResumeOutput {
  markdown?: string;        // Markdown formatted resume
  json?: object;           // Resume data as JSON
  pdf?: Buffer;            // PDF buffer (if PDF format selected)
}
```

### generateBatchResumes

Generate multiple resumes at once.

```typescript
async function generateBatchResumes(
  options: BatchResumeOptions
): Promise<BatchResumeOutput>
```

#### Options

```typescript
interface BatchResumeOptions extends ResumeOptions {
  count: number;           // Number of resumes to generate
  combinePdf?: boolean;    // Combine all PDFs into one file
}
```

#### Return Value

```typescript
interface BatchResumeOutput {
  resumes: ResumeOutput[];
  combinedPdf?: Buffer;    // Combined PDF buffer (if combinePdf is true)
}
```

## Examples

### Basic Usage

```javascript
const { generateResume } = require('faux-cv');

// Generate a basic tech resume
const resume = await generateResume({
  industry: 'tech',
  experienceYears: 5
});
```

### Multiple Formats

```javascript
const resume = await generateResume({
  industry: 'marketing',
  experienceYears: 8,
  format: 'both'
});

console.log(resume.markdown);
console.log(resume.json);
```

### Custom PDF Generation

```javascript
const resume = await generateResume({
  format: 'pdf',
  pdfStyle: 'modern',
  pdfColor: '#4a90e2'
});

fs.writeFileSync('resume.pdf', resume.pdf);
```

### Batch Generation

```javascript
const { generateBatchResumes } = require('faux-cv');

const batch = await generateBatchResumes({
  count: 5,
  industry: 'tech',
  format: 'pdf',
  combinePdf: true
});

fs.writeFileSync('resumes.pdf', batch.combinedPdf);
```

### Using Custom Templates

```javascript
const resume = await generateResume({
  template: './templates/custom.mustache',
  format: 'markdown'
});
```

### Error Handling

```javascript
try {
  const resume = await generateResume({
    industry: 'tech',
    format: 'pdf'
  });
} catch (error) {
  if (error instanceof ValidationError) {
    console.error('Invalid options:', error.message);
  } else if (error instanceof TemplateError) {
    console.error('Template error:', error.message);
  } else {
    console.error('Unexpected error:', error);
  }
}
```

## Error Types

| Error Class | Description |
|-------------|-------------|
| `ValidationError` | Invalid options provided |
| `TemplateError` | Error in template processing |
| `PDFGenerationError` | Error generating PDF |
| `FileSystemError` | Error reading/writing files |

## See Also

- [CLI Reference](./cli) - Command line interface
- [Templates](./templates) - Template customization
- [Examples](./examples) - More usage examples