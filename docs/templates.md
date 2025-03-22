---
sidebar_position: 4
---

# Templates

Faux-CV uses Mustache templates to generate resumes. This guide covers the template system, available variables, and how to create custom templates.

## Template Variables

### Basic Information

```typescript
interface BasicInfo {
  name: string;              // Full name
  title: string;             // Professional title
  email: string;             // Email address
  phone: string;             // Phone number
  location: {
    city: string;
    state: string;
    country: string;
  };
  linkedin?: string;         // LinkedIn profile URL
  website?: string;          // Personal website URL
  summary: string;           // Professional summary
}
```

### Experience Section

```typescript
interface Experience {
  company: string;           // Company name
  title: string;            // Job title
  location: string;         // Job location
  startDate: string;        // Start date (MM/YYYY)
  endDate: string;          // End date (MM/YYYY or "Present")
  highlights: string[];     // List of achievements/responsibilities
}
```

### Education Section

```typescript
interface Education {
  institution: string;      // School/University name
  degree: string;          // Degree name
  field: string;           // Field of study
  location: string;        // School location
  graduationDate: string;  // Graduation date (MM/YYYY)
  gpa?: number;           // GPA (optional)
  highlights?: string[];   // Additional achievements
}
```

### Skills Section

```typescript
interface Skills {
  categories: {
    name: string;          // Category name
    skills: string[];      // List of skills
  }[];
}
```

### Certifications Section

```typescript
interface Certification {
  name: string;            // Certification name
  issuer: string;         // Issuing organization
  date: string;           // Issue date (MM/YYYY)
  expiry?: string;        // Expiry date (optional)
  id?: string;            // Certification ID (optional)
}
```

## Default Template

The default template is designed to create a clean, professional resume. Here's an example of how it's structured:

```mustache
# {{basicInfo.name}}

{{basicInfo.title}}
{{basicInfo.location.city}}, {{basicInfo.location.state}}
{{basicInfo.email}} | {{basicInfo.phone}}
{{#basicInfo.linkedin}}[LinkedIn]({{.}}) | {{/basicInfo.linkedin}}
{{#basicInfo.website}}[Website]({{.}}){{/basicInfo.website}}

## Summary

{{basicInfo.summary}}

## Experience

{{#experience}}
### {{company}}
**{{title}}** | {{location}} | {{startDate}} - {{endDate}}

{{#highlights}}
- {{.}}
{{/highlights}}

{{/experience}}

## Education

{{#education}}
### {{institution}}
**{{degree}}** in {{field}} | {{location}} | {{graduationDate}}
{{#gpa}}GPA: {{.}}{{/gpa}}

{{#highlights}}
- {{.}}
{{/highlights}}

{{/education}}

## Skills

{{#skills.categories}}
### {{name}}
{{#skills}}
- {{.}}
{{/skills}}

{{/skills.categories}}

{{#certifications.length}}
## Certifications

{{#certifications}}
- **{{name}}** - {{issuer}} ({{date}})
{{#id}} - ID: {{.}}{{/id}}
{{/certifications}}
{{/certifications.length}}
```

## Creating Custom Templates

### Basic Template Structure

1. Create a new `.mustache` file
2. Use the variables documented above
3. Follow Mustache syntax for conditionals and loops

### Example Custom Template

Here's an example of a minimal custom template:

```mustache
# {{basicInfo.name}} - {{basicInfo.title}}

> {{basicInfo.summary}}

## Contact
- Email: {{basicInfo.email}}
- Phone: {{basicInfo.phone}}
- Location: {{basicInfo.location.city}}, {{basicInfo.location.state}}
{{#basicInfo.linkedin}}- LinkedIn: {{.}}{{/basicInfo.linkedin}}
{{#basicInfo.website}}- Website: {{.}}{{/basicInfo.website}}

## Experience
{{#experience}}
### {{company}} ({{startDate}} - {{endDate}})
**{{title}}** - {{location}}
{{#highlights}}
* {{.}}
{{/highlights}}

{{/experience}}

## Skills
{{#skills.categories}}
**{{name}}:** {{#skills}}{{.}}{{^last}}, {{/last}}{{/skills}}

{{/skills.categories}}
```

### Using Custom Templates

You can use custom templates in two ways:

1. Via CLI:
```bash
npx faux-cv -t ./path/to/template.mustache
```

2. Via API:
```javascript
const resume = await generateResume({
  template: './path/to/template.mustache'
});
```

## Template Best Practices

1. **Conditional Sections**
   - Use `{{#section}}...{{/section}}` for optional sections
   - Check for optional fields before displaying them

2. **Formatting**
   - Use consistent spacing and indentation
   - Include proper line breaks between sections
   - Consider PDF output when formatting

3. **Error Handling**
   - Provide fallbacks for optional fields
   - Use empty string checks where appropriate

4. **PDF Compatibility**
   - Keep sections properly aligned
   - Use appropriate heading levels
   - Consider page breaks

## See Also

- [CLI Reference](./cli) - Command line options
- [API Reference](./api) - Programmatic usage
- [Examples](./examples) - Example templates and usage 