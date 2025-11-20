# Dashboard Guide: Project Categories vs Featured Projects

## Understanding the Difference

### 🎯 **Project Categories** (Orbit Carousel)
**Purpose:** Show BROAD TYPES of work you do - Think of these as "work areas" or "expertise categories"

**What to Include:**
- **Research Work** - Academic papers, research projects, studies, publications
- **Quantitative Projects** - Financial models, algorithmic trading, quantitative analysis
- **Web Development** - Full-stack apps, websites, web applications, APIs
- **Data Science** - Data analysis, visualization, predictive modeling, analytics dashboards
- **Machine Learning** - AI models, neural networks, ML algorithms, NLP projects
- **Mobile Development** - iOS/Android apps, mobile applications

**Image Guidelines:**
- Use conceptual/representative images (icons, diagrams, or general images representing the category)
- These don't need to be screenshots of specific projects
- Should visually represent the type of work

**Example:**
- Research Work → Image of academic papers, lab equipment, or research concepts
- Quant Projects → Image of financial charts, trading screens, or data visualizations
- Web Development → Image of code, websites, or development tools

---

### ⭐ **Featured Projects** (Circular Gallery)
**Purpose:** Show SPECIFIC, REAL PROJECTS you've completed - Your best work with actual results

**What to Include:**
- **Real project screenshots/images** - Actual work you've done
- **Specific project names** - Not categories, but actual project titles
- **Specific descriptions** - What the project does, technologies used, results achieved

**Image Guidelines:**
- Use **actual screenshots** of your projects
- Should be the real interface/result of your work
- Each image = One specific project

**Example Projects:**
- "Stock Price Prediction ML Model" → Screenshot of the dashboard/results
- "E-Commerce Platform with React" → Screenshot of the actual website
- "Portfolio Optimization Algorithm" → Screenshot of the analysis/visualization
- "Research Paper on Quantum Computing" → Screenshot of paper or related visual

---

## How to Customize

### For Project Categories:
1. Edit the `orbitImages` array in `src/app/dashboard/page.tsx`
2. Replace images with representative images for each category
3. Update labels to match your work areas
4. Each category should represent a TYPE of work, not a specific project

### For Featured Projects:
1. Edit the `galleryItems` array in `src/app/dashboard/page.tsx`
2. Add **actual project screenshots/images** from your work
3. Replace text with **real project names**
4. You can add more projects or remove some - these are YOUR specific projects

---

## Summary Table

| Feature | Project Categories | Featured Projects |
|---------|-------------------|-------------------|
| **Purpose** | Show types of work | Show specific projects |
| **Content** | Broad categories | Real projects |
| **Images** | Conceptual/representative | Actual screenshots |
| **Examples** | "Research Work", "Web Dev" | "Stock Predictor App", "E-Commerce Site" |
| **Count** | 4-6 categories | 3-10+ specific projects |

---

## Best Practices

1. **Categories** should cover all your main work areas
2. **Featured Projects** should showcase your best/most impressive work
3. Use high-quality images that clearly represent each category/project
4. Keep project names concise but descriptive
5. Update both sections regularly as you complete new projects

