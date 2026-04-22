# Quick Start Guide

Get your portfolio personalized in 10 minutes! Follow these steps in order.

## ✅ Step 1: Update Personal Information (3 min)

### 1.1 Update Contact Details

Open `src/app/components/Contact.tsx` and replace:

```typescript
// Line ~30
<a href="mailto:kenny.mangue@example.com"...>
  // Change to YOUR email
  <a href="mailto:your.email@example.com"...>

// Line ~43
<a href="https://github.com/kennymangue"...>
  // Change to YOUR GitHub
  <a href="https://github.com/YOUR_USERNAME"...>

// Line ~55
<a href="https://linkedin.com/in/kennymangue"...>
  // Change to YOUR LinkedIn
  <a href="https://linkedin.com/in/YOUR_USERNAME"...>
```

### 1.2 Update Hero Section

Open `src/app/components/Hero.tsx` and replace:

```typescript
// Line ~23
<h1>Kenny Mangue</h1>
  // Change to YOUR name
  <h1>Your Name</h1>

// Line ~32-35 (optional: customize tagline)
"Building scalable backend systems and cloud-ready applications"
  // Customize to YOUR focus
```

### 1.3 Update Hero Social Links

Same file `src/app/components/Hero.tsx` (lines ~60-85):

```typescript
<a href="https://github.com/kennymangue"...>
  // Change to YOUR GitHub

<a href="https://linkedin.com/in/kennymangue"...>
  // Change to YOUR LinkedIn

<a href="mailto:kenny.mangue@example.com"...>
  // Change to YOUR email
```

---

## ✅ Step 2: Customize About Section (2 min)

Open `src/app/components/About.tsx` and edit the text (lines ~16-40) to reflect YOUR background and focus.

**Tips:**
- Keep technical (mention your primary technologies)
- Focus on what makes you different
- Mention current training/learning
- Keep it concise (4 short paragraphs max)

---

## ✅ Step 3: Update Experience Timeline (3 min)

Open `src/app/components/Experience.tsx` and edit the `timeline` array (starting ~6):

```typescript
const timeline = [
  {
    icon: GraduationCap,
    title: 'YOUR DEGREE',              // ← Change this
    organization: 'YOUR UNIVERSITY',    // ← Change this
    period: 'YEAR - YEAR',             // ← Change this
    description: 'Description...',      // ← Change this
    color: 'text-blue-500'
  },
  // Add, remove, or edit entries as needed
];
```

---

## ✅ Step 4: Review Projects (2 min)

Open `src/app/data/projects.ts`

**Current projects:**
1. SGDIT (Traffic Violation System)
2. Billing Management System
3. Sales Management API
4. AWS Production Deployment

**Options:**
- ✅ Keep them as examples for now
- ✅ Edit to match YOUR projects (recommended)
- ✅ Delete and add your own from scratch

To edit: Update the project details in the `projects` array.

To add new: Use `PROJECT_TEMPLATE.md` as a guide.

---

## ✅ Step 5: Update Footer (30 sec)

Open `src/app/App.tsx` and find the footer section (line ~133):

```typescript
<p>&copy; {new Date().getFullYear()} Kenny Mangue...</p>
  // Change to YOUR name
  <p>&copy; {new Date().getFullYear()} Your Name...</p>
```

---

## 🎨 Optional: Customize Tech Stack

Open `src/app/components/TechStack.tsx` and edit the `techCategories` array (line ~5) to match YOUR technology stack.

Add or remove categories and technologies as needed.

---

## 🎨 Optional: Change Colors

Open `src/styles/theme.css` to customize colors:

```css
.dark {
  --background: #0A192F;     /* Main background */
  --accent: #64FFDA;         /* Accent color (buttons, highlights) */
  --foreground: #ccd6f6;     /* Text color */
  /* ... other colors */
}
```

**Popular color schemes:**
- **Blue/Cyan** (current): `#0A192F` + `#64FFDA`
- **Purple**: `#1a0b2e` + `#9d4edd`
- **Green**: `#0a1e0f` + `#00ff88`
- **Orange**: `#1a0f0a` + `#ff6b35`

---

## 🚀 You're Done!

Your portfolio is now personalized! Next steps:

1. **Add your real projects** using `PROJECT_TEMPLATE.md`
2. **Add project screenshots** to `public/projects/[project-id]/`
3. **Test responsive design** on mobile
4. **Deploy** to Vercel/Netlify/AWS

---

## 📋 Personalization Checklist

- [ ] Updated email address (Contact + Hero)
- [ ] Updated GitHub link (Contact + Hero)
- [ ] Updated LinkedIn link (Contact + Hero)
- [ ] Changed name in Hero section
- [ ] Changed name in Footer
- [ ] Customized About section
- [ ] Updated Experience timeline
- [ ] Reviewed/edited projects or added own
- [ ] (Optional) Updated Tech Stack
- [ ] (Optional) Customized colors

---

## 💡 Pro Tips

1. **Don't delete example projects immediately** - use them as reference for structure
2. **Focus on 3-5 best projects** - quality over quantity
3. **Be specific in descriptions** - "Reduced API response time by 70%" is better than "Made it faster"
4. **Add projects incrementally** - start with 2-3, add more over time
5. **Keep updating** - this portfolio is designed to grow with you

---

## 🆘 Need Help?

- **Adding projects**: See `PROJECT_TEMPLATE.md`
- **Full documentation**: See `README.md`
- **Styling issues**: Check `src/styles/theme.css`

---

**Time to personalize: ~10 minutes**  
**Time to add first real project: ~15 minutes**  
**Total setup time: ~25 minutes**

🎯 **Goal**: Have a professional, personalized portfolio live within 1 hour!
