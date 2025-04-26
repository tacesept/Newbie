# Results Summary Component

A responsive React component that displays test results with a summary breakdown by category.

## Project Structure

### Components

- `Results.jsx` - Displays the overall score and percentile ranking in a gradient card
- `Summary.jsx` - Container component for the category breakdown and continue button
- `CategoryScore.jsx` - Renders individual category scores in a color-coded list

### Styling

- Uses Tailwind CSS for styling with custom utility classes and theme variables
- Custom gradients and shadows defined in `index.css`
- Responsive design that adapts between mobile (375px) and desktop (1440px) layouts
- Font: Hanken Grotesk (variable font)

### Data

- Category scores are fetched from `data.json`
- Each category has:
  - Name
  - Score (out of 100)
  - Icon
  - Associated color theme

## Key Features

- Dynamic score calculation based on category averages
- Color-coded categories with consistent styling
- Accessible markup with ARIA labels
- Hover effects on interactive elements
- Smooth transitions between states

## Design Decisions

- Used CSS Grid and Flexbox for responsive layouts
- Implemented custom color variables for maintainability
- Chose to fetch data externally rather than hardcode for flexibility
- Added transition animations for better UX
- Maintained accessibility with semantic HTML and ARIA labels

## Setup

1. Install dependencies with `npm install`
2. Ensure `data.json` is in the public directory
3. Run development server with `npm run dev`
