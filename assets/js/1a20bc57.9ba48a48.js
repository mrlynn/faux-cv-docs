"use strict";(self.webpackChunkfaux_cv_docs=self.webpackChunkfaux_cv_docs||[]).push([[114],{7344:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>t,metadata:()=>i,toc:()=>a});const i=JSON.parse('{"id":"cli","title":"CLI Reference","description":"Faux-CV provides a powerful command-line interface for generating resumes. This guide covers all available options and provides examples of common use cases.","source":"@site/docs/cli.md","sourceDirName":".","slug":"/cli","permalink":"/faux-cv-docs/docs/cli","draft":false,"unlisted":false,"editUrl":"https://github.com/faux-cv/faux-cv/tree/main/docs/docs/cli.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"Getting Started","permalink":"/faux-cv-docs/docs/getting-started"},"next":{"title":"API Reference","permalink":"/faux-cv-docs/docs/api"}}');var r=s(4848),d=s(8453);const t={sidebar_position:2},l="CLI Reference",c={},a=[{value:"Basic Usage",id:"basic-usage",level:2},{value:"Options",id:"options",level:2},{value:"Core Options",id:"core-options",level:3},{value:"Profile Options",id:"profile-options",level:3},{value:"PDF Options",id:"pdf-options",level:3},{value:"Template Options",id:"template-options",level:3},{value:"Generation Options",id:"generation-options",level:3},{value:"Examples",id:"examples",level:2},{value:"Basic Resume Generation",id:"basic-resume-generation",level:3},{value:"Specific Industry and Experience",id:"specific-industry-and-experience",level:3},{value:"Multiple Formats",id:"multiple-formats",level:3},{value:"Custom PDF Style",id:"custom-pdf-style",level:3},{value:"Batch Generation",id:"batch-generation",level:3},{value:"Using a Custom Template",id:"using-a-custom-template",level:3},{value:"Reproducible Generation",id:"reproducible-generation",level:3},{value:"Exit Codes",id:"exit-codes",level:2},{value:"Environment Variables",id:"environment-variables",level:2},{value:"See Also",id:"see-also",level:2}];function o(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"cli-reference",children:"CLI Reference"})}),"\n",(0,r.jsx)(n.p,{children:"Faux-CV provides a powerful command-line interface for generating resumes. This guide covers all available options and provides examples of common use cases."}),"\n",(0,r.jsx)(n.h2,{id:"basic-usage",children:"Basic Usage"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npx faux-cv [options]\n"})}),"\n",(0,r.jsx)(n.h2,{id:"options",children:"Options"}),"\n",(0,r.jsx)(n.h3,{id:"core-options",children:"Core Options"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Option"}),(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{children:"Default"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"-i, --industry"})}),(0,r.jsx)(n.td,{children:"Industry specialization"}),(0,r.jsx)(n.td,{children:"'tech'"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"-e, --experience"})}),(0,r.jsx)(n.td,{children:"Years of experience"}),(0,r.jsx)(n.td,{children:"5"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"-f, --format"})}),(0,r.jsx)(n.td,{children:"Output format (markdown, json, pdf, both)"}),(0,r.jsx)(n.td,{children:"'markdown'"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"-g, --gender"})}),(0,r.jsx)(n.td,{children:"Gender (male, female)"}),(0,r.jsx)(n.td,{children:"random"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"-o, --output"})}),(0,r.jsx)(n.td,{children:"Output file name"}),(0,r.jsx)(n.td,{children:"'resume'"})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"profile-options",children:"Profile Options"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Option"}),(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{children:"Default"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"-l, --no-linkedin"})}),(0,r.jsx)(n.td,{children:"Exclude LinkedIn profile"}),(0,r.jsx)(n.td,{children:"false"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"-w, --no-website"})}),(0,r.jsx)(n.td,{children:"Exclude personal website"}),(0,r.jsx)(n.td,{children:"false"})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"pdf-options",children:"PDF Options"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Option"}),(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{children:"Default"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"-p, --pdf-style"})}),(0,r.jsx)(n.td,{children:"PDF style (default, modern, minimal, professional)"}),(0,r.jsx)(n.td,{children:"'default'"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"--pdf-color"})}),(0,r.jsx)(n.td,{children:"Primary color for PDF (hex code)"}),(0,r.jsx)(n.td,{children:"'#2d5ba9'"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"-b, --batch-pdf"})}),(0,r.jsx)(n.td,{children:"Create a single PDF containing all resumes"}),(0,r.jsx)(n.td,{children:"false"})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"template-options",children:"Template Options"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Option"}),(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{children:"Default"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"-t, --template"})}),(0,r.jsx)(n.td,{children:"Custom Mustache template file"}),(0,r.jsx)(n.td,{children:"built-in template"})]})})]}),"\n",(0,r.jsx)(n.h3,{id:"generation-options",children:"Generation Options"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Option"}),(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{children:"Default"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"-c, --count"})}),(0,r.jsx)(n.td,{children:"Number of resumes to generate"}),(0,r.jsx)(n.td,{children:"1"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"-s, --seed"})}),(0,r.jsx)(n.td,{children:"Random seed for consistent generation"}),(0,r.jsx)(n.td,{children:"random"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(n.h3,{id:"basic-resume-generation",children:"Basic Resume Generation"}),"\n",(0,r.jsx)(n.p,{children:"Generate a basic tech resume:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npx faux-cv\n"})}),"\n",(0,r.jsx)(n.h3,{id:"specific-industry-and-experience",children:"Specific Industry and Experience"}),"\n",(0,r.jsx)(n.p,{children:"Generate a resume for a marketing professional with 10 years of experience:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npx faux-cv -i marketing -e 10\n"})}),"\n",(0,r.jsx)(n.h3,{id:"multiple-formats",children:"Multiple Formats"}),"\n",(0,r.jsx)(n.p,{children:"Generate a resume in both markdown and JSON formats:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npx faux-cv -f both\n"})}),"\n",(0,r.jsx)(n.h3,{id:"custom-pdf-style",children:"Custom PDF Style"}),"\n",(0,r.jsx)(n.p,{children:"Generate a resume with a modern PDF style and custom color:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'npx faux-cv -f pdf -p modern --pdf-color "#4a90e2"\n'})}),"\n",(0,r.jsx)(n.h3,{id:"batch-generation",children:"Batch Generation"}),"\n",(0,r.jsx)(n.p,{children:"Generate 5 tech resumes in a single PDF:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npx faux-cv -c 5 -b -f pdf\n"})}),"\n",(0,r.jsx)(n.h3,{id:"using-a-custom-template",children:"Using a Custom Template"}),"\n",(0,r.jsx)(n.p,{children:"Generate a resume using a custom template:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npx faux-cv -t ./my-template.mustache\n"})}),"\n",(0,r.jsx)(n.h3,{id:"reproducible-generation",children:"Reproducible Generation"}),"\n",(0,r.jsx)(n.p,{children:"Generate the same resume multiple times using a seed:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npx faux-cv -s 12345\n"})}),"\n",(0,r.jsx)(n.h2,{id:"exit-codes",children:"Exit Codes"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Code"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"Success"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"1"}),(0,r.jsx)(n.td,{children:"General error"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"2"}),(0,r.jsx)(n.td,{children:"Invalid options"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"3"}),(0,r.jsx)(n.td,{children:"File system error"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"4"}),(0,r.jsx)(n.td,{children:"Template error"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"environment-variables",children:"Environment Variables"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Variable"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"FAUX_CV_TEMPLATE_DIR"})}),(0,r.jsx)(n.td,{children:"Directory for custom templates"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"FAUX_CV_OUTPUT_DIR"})}),(0,r.jsx)(n.td,{children:"Directory for generated files"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"see-also",children:"See Also"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"./api",children:"API Reference"})," - For programmatic usage"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"./templates",children:"Templates"})," - Learn about template customization"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"./examples",children:"Examples"})," - More usage examples"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>l});var i=s(6540);const r={},d=i.createContext(r);function t(e){const n=i.useContext(d);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),i.createElement(d.Provider,{value:n},e.children)}}}]);