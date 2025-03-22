---
sidebar_position: 5
---

# Examples

This guide provides practical examples of using Faux-CV in various scenarios. Each example includes both CLI and API usage.

## Basic Examples

### Generate a Tech Resume

Using the CLI:
```bash
npx faux-cv -i tech -e 5
```

Using the API:
```javascript
const { generateResume } = require('faux-cv');

const resume = await generateResume({
  industry: 'tech',
  experienceYears: 5
});
```

### Marketing Professional Resume

Using the CLI:
```bash
npx faux-cv -i marketing -e 8 -g female
```

Using the API:
```javascript
const resume = await generateResume({
  industry: 'marketing',
  experienceYears: 8,
  gender: 'female'
});
```

## Advanced Examples

### Multiple Format Output

Generate a resume in both markdown and JSON formats:

Using the CLI:
```bash
npx faux-cv -i tech -e 5 -f both -o tech-resume
```

Using the API:
```javascript
const resume = await generateResume({
  industry: 'tech',
  experienceYears: 5,
  format: 'both'
});

// Save outputs
const fs = require('fs');
fs.writeFileSync('resume.md', resume.markdown);
fs.writeFileSync('resume.json', resume.json);
```

### Batch Generation with Custom PDF Style

Generate multiple resumes with a modern style:

Using the CLI:
```bash
npx faux-cv -i tech -c 5 -f pdf -p modern --pdf-color "#4a90e2" -b
```

Using the API:
```javascript
const { generateBatchResumes } = require('faux-cv');

const batch = await generateBatchResumes({
  count: 5,
  industry: 'tech',
  format: 'pdf',
  pdfStyle: 'modern',
  pdfColor: '#4a90e2',
  combinePdf: true
});

// Save the combined PDF
fs.writeFileSync('resumes.pdf', batch.combinedPdf);
```

### Custom Template Usage

Using a custom template with specific fields:

```javascript
// custom-template.mustache
const template = `
# {{basicInfo.name}}
{{basicInfo.title}}

## Professional Summary
{{basicInfo.summary}}

## Core Skills
{{#skills.categories}}
{{#name}}### {{.}}{{/name}}
{{#skills}}
- {{.}}
{{/skills}}
{{/skills.categories}}

## Experience Highlights
{{#experience}}
### {{company}}
**{{title}}** ({{startDate}} - {{endDate}})
{{#highlights}}
* {{.}}
{{/highlights}}
{{/experience}}
`;

// Using the template
const resume = await generateResume({
  template: './custom-template.mustache',
  industry: 'tech',
  experienceYears: 5
});
```

## Real-World Use Cases

### Job Application Automation

Generate multiple resumes tailored for different job postings:

```javascript
const jobs = [
  { industry: 'tech', role: 'frontend' },
  { industry: 'tech', role: 'backend' },
  { industry: 'tech', role: 'fullstack' }
];

async function generateJobApplications() {
  for (const job of jobs) {
    const resume = await generateResume({
      industry: job.industry,
      experienceYears: 5,
      format: 'pdf',
      pdfStyle: 'professional',
      // Additional customization based on role
      template: `./templates/${job.role}.mustache`
    });
    
    fs.writeFileSync(`resume-${job.role}.pdf`, resume.pdf);
  }
}
```

### Resume Database Population

Create a sample resume database for testing:

```javascript
async function populateResumeDatabase(count = 100) {
  const industries = ['tech', 'marketing', 'finance', 'healthcare'];
  const batch = await generateBatchResumes({
    count,
    format: 'json',
    // Randomly select industry for each resume
    industry: () => industries[Math.floor(Math.random() * industries.length)],
    experienceYears: () => Math.floor(Math.random() * 20) + 1
  });
  
  // Save to database
  for (const resume of batch.resumes) {
    await db.resumes.insert(resume.json);
  }
}
```

### Resume A/B Testing

Generate different versions of a resume for testing:

```javascript
async function generateResumeVariants() {
  const styles = ['default', 'modern', 'minimal', 'professional'];
  const variants = await Promise.all(styles.map(style => 
    generateResume({
      industry: 'tech',
      experienceYears: 5,
      format: 'pdf',
      pdfStyle: style,
      seed: 12345 // Use same seed for consistent content
    })
  ));
  
  // Save variants
  variants.forEach((variant, index) => {
    fs.writeFileSync(`resume-variant-${styles[index]}.pdf`, variant.pdf);
  });
}
```

## Testing Examples

### Unit Testing

Example of testing resume generation:

```javascript
describe('Resume Generation', () => {
  it('should generate a valid tech resume', async () => {
    const resume = await generateResume({
      industry: 'tech',
      experienceYears: 5
    });
    
    expect(resume.json.basicInfo).toBeDefined();
    expect(resume.json.experience.length).toBeGreaterThan(0);
    expect(resume.json.skills.categories).toBeDefined();
  });
  
  it('should handle custom templates', async () => {
    const resume = await generateResume({
      template: './test/fixtures/test-template.mustache'
    });
    
    expect(resume.markdown).toMatch(/# .+/); // Should have a title
    expect(resume.markdown).toMatch(/## Experience/); // Should have experience section
  });
});
```

### Integration Testing

Example of testing the complete workflow:

```javascript
describe('Resume Workflow', () => {
  it('should generate and save multiple formats', async () => {
    const resume = await generateResume({
      industry: 'tech',
      format: 'both'
    });
    
    // Test markdown output
    expect(resume.markdown).toBeDefined();
    expect(typeof resume.markdown).toBe('string');
    
    // Test JSON output
    expect(resume.json).toBeDefined();
    expect(resume.json.basicInfo.name).toBeDefined();
    
    // Save files
    await fs.promises.writeFile('test-resume.md', resume.markdown);
    await fs.promises.writeFile('test-resume.json', JSON.stringify(resume.json, null, 2));
    
    // Verify files
    const savedMarkdown = await fs.promises.readFile('test-resume.md', 'utf8');
    expect(savedMarkdown).toBe(resume.markdown);
  });
});
```

## See Also

- [CLI Reference](./cli) - Complete CLI documentation
- [API Reference](./api) - Detailed API documentation
- [Templates](./templates) - Template customization guide 