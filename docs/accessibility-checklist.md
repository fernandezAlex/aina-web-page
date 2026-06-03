# Accessibility Checklist - Si Asha Foundation Website

## WCAG 2.1 Level AA Compliance

### ✅ Perceivable

#### Text Alternatives
- [ ] All images have descriptive `alt` text
- [ ] Decorative images use `alt=""` or `role="presentation"`
- [ ] Complex images (charts, diagrams) have extended descriptions
- [ ] Icons have accessible labels (aria-label or sr-only text)
- [ ] Logo images have alt text with organization name

#### Time-based Media
- [ ] Video content has captions (if applicable)
- [ ] Audio content has transcripts (if applicable)

#### Adaptable
- [ ] Content structure uses semantic HTML5 elements
- [ ] Heading hierarchy is logical (h1 → h2 → h3, no skips)
- [ ] Lists use proper `<ul>`, `<ol>`, `<dl>` elements
- [ ] Tables use `<th>`, `scope`, and `<caption>` where needed
- [ ] Form inputs have associated `<label>` elements
- [ ] ARIA landmarks are used appropriately

#### Distinguishable
- [ ] Color contrast ratio is 4.5:1 for normal text (WCAG AA)
- [ ] Color contrast ratio is 3:1 for large text (18pt+ or 14pt+ bold)
- [ ] Color is not the only means of conveying information
- [ ] Text can be resized up to 200% without loss of content
- [ ] Background images don't interfere with text readability

### ✅ Operable

#### Keyboard Accessible
- [ ] All interactive elements are keyboard accessible
- [ ] Tab order is logical and follows visual flow
- [ ] No keyboard traps (user can navigate in and out)
- [ ] Skip to main content link is present
- [ ] Focus indicators are visible on all interactive elements
- [ ] Custom interactive components handle keyboard events

#### Enough Time
- [ ] No time limits on interactions (or adjustable)
- [ ] Auto-playing content can be paused/stopped
- [ ] Session timeouts have warnings and can be extended

#### Seizures and Physical Reactions
- [ ] No content flashes more than 3 times per second
- [ ] No animations that could cause seizures

#### Navigable
- [ ] Page titles are descriptive and unique
- [ ] Link text is descriptive (avoid "click here")
- [ ] Multiple navigation methods (menu, breadcrumbs, search)
- [ ] Focus order is meaningful
- [ ] Link purpose is clear from context
- [ ] Breadcrumbs available on internal pages

#### Input Modalities
- [ ] Touch targets are at least 44x44 pixels
- [ ] Pointer gestures have keyboard alternatives
- [ ] Motion actuation (shake, tilt) has alternatives

### ✅ Understandable

#### Readable
- [ ] Page language is set (`lang="en"`)
- [ ] Language changes are marked (`lang` attribute on elements)
- [ ] Jargon and abbreviations are explained or avoided
- [ ] Reading level is appropriate for target audience

#### Predictable
- [ ] Navigation is consistent across pages
- [ ] Components behave consistently
- [ ] Changes don't happen on focus (only on activation)
- [ ] Forms have clear submit actions

#### Input Assistance
- [ ] Form labels are clear and descriptive
- [ ] Error messages are specific and helpful
- [ ] Required fields are clearly marked
- [ ] Input format instructions are provided
- [ ] Confirmation available for important actions

### ✅ Robust

#### Compatible
- [ ] Valid HTML (no errors in markup)
- [ ] ARIA attributes used correctly
- [ ] Status messages use appropriate ARIA roles
- [ ] Name, role, value available for all UI components
- [ ] Works with assistive technologies (screen readers)

---

## Testing Tools

### Automated Testing
- [x] **axe DevTools** - Browser extension for automated accessibility testing
- [x] **Lighthouse** - Chrome DevTools accessibility audit
- [x] **WAVE** - Web Accessibility Evaluation Tool
- [x] **Pa11y** - Automated accessibility testing (CI/CD)

### Manual Testing
- [ ] **Keyboard navigation** - Tab through entire site
- [ ] **Screen reader** - Test with NVDA (Windows) or VoiceOver (Mac)
- [ ] **Zoom test** - Test at 200% zoom level
- [ ] **Color contrast** - Use WebAIM Contrast Checker
- [ ] **Mobile** - Test on actual devices with accessibility features

### Browser Testing
- [ ] Chrome + ChromeVox
- [ ] Firefox + NVDA
- [ ] Safari + VoiceOver
- [ ] Edge + Narrator

---

## Implementation Status

### Homepage (`/`)
- [ ] Semantic HTML structure
- [ ] Alt text on all images
- [ ] Proper heading hierarchy
- [ ] Keyboard navigation
- [ ] Focus indicators
- [ ] Color contrast
- [ ] ARIA labels where needed

### Who We Are (`/who-we-are`)
- [ ] Semantic HTML structure
- [ ] Alt text on all images
- [ ] Proper heading hierarchy
- [ ] Keyboard navigation
- [ ] Focus indicators
- [ ] Color contrast
- [ ] ARIA labels where needed

### What We Do (`/what-we-do`)
- [ ] Semantic HTML structure
- [ ] Alt text on all images
- [ ] Proper heading hierarchy
- [ ] Keyboard navigation
- [ ] Focus indicators
- [ ] Color contrast
- [ ] ARIA labels where needed

### Team & Board (`/team-board`)
- [ ] Semantic HTML structure
- [ ] Alt text on all images
- [ ] Proper heading hierarchy
- [ ] Keyboard navigation
- [ ] Focus indicators
- [ ] Color contrast
- [ ] ARIA labels where needed

### Transparency (`/transparency`)
- [ ] Semantic HTML structure
- [ ] Alt text on all images
- [ ] Proper heading hierarchy
- [ ] Keyboard navigation
- [ ] Focus indicators
- [ ] Color contrast
- [ ] ARIA labels where needed

### Contact (`/contact`)
- [ ] Form labels properly associated
- [ ] Error messages accessible
- [ ] Required fields marked
- [ ] Keyboard accessible
- [ ] Focus indicators
- [ ] Color contrast
- [ ] ARIA labels where needed

### Get Involved Hub (`/get-involved`)
- [ ] Semantic HTML structure
- [ ] Alt text on all images
- [ ] Proper heading hierarchy
- [ ] Keyboard navigation
- [ ] Focus indicators
- [ ] Color contrast
- [ ] ARIA labels where needed

### Exclusive Member (`/get-involved/exclusive-member`)
- [ ] Form accessibility
- [ ] Payment method accessibility
- [ ] Error handling
- [ ] Focus management
- [ ] ARIA labels where needed

### General Member (`/get-involved/general-member`)
- [ ] Form accessibility
- [ ] Payment method accessibility
- [ ] Error handling
- [ ] Focus management
- [ ] ARIA labels where needed

### Donate (`/get-involved/donate`)
- [ ] Form accessibility
- [ ] Amount selection accessibility
- [ ] Payment method accessibility
- [ ] Error handling
- [ ] Focus management
- [ ] ARIA labels where needed

### Volunteer (`/get-involved/volunteer`)
- [ ] Form accessibility
- [ ] Multi-step form navigation
- [ ] Error handling
- [ ] Focus management
- [ ] ARIA labels where needed

### Privacy Policy (`/privacy-policy`)
- [ ] Semantic HTML structure
- [ ] Proper heading hierarchy
- [ ] Keyboard navigation
- [ ] Color contrast

---

## Common Issues to Check

### Images
- [ ] All images have alt text
- [ ] Alt text is descriptive (not "image" or filename)
- [ ] Decorative images use `alt=""`
- [ ] Complex images have extended descriptions

### Forms
- [ ] All inputs have labels
- [ ] Labels are associated with inputs (for/id or wrapping)
- [ ] Required fields are marked with `required` attribute
- [ ] Error messages are linked to fields (aria-describedby)
- [ ] Field groups use `<fieldset>` and `<legend>`

### Links
- [ ] Link text is descriptive
- [ ] Links have visible focus indicators
- [ ] Links that open in new window are indicated
- [ ] Icon-only links have aria-label

### Interactive Components
- [ ] Custom components have proper ARIA roles
- [ ] State changes are communicated (aria-live)
- [ ] Modals trap focus and can be closed with Escape
- [ ] Dropdowns are keyboard accessible

### Color and Contrast
- [ ] Text has 4.5:1 contrast ratio
- [ ] Large text has 3:1 contrast ratio
- [ ] Focus indicators have 3:1 contrast ratio
- [ ] Error states don't rely on color alone

---

## Resources

- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [a11y Project Checklist](https://www.a11yproject.com/checklist/)
- [ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/)
- [Inclusive Components](https://inclusive-components.design/)

---

## Notes

- **Testing Frequency**: Test accessibility after every major feature implementation
- **Regression Testing**: Run automated tests in CI/CD pipeline
- **User Testing**: Include users with disabilities in testing when possible
- **Training**: Ensure all developers understand basic accessibility principles
- **Documentation**: Keep this checklist updated as site evolves
