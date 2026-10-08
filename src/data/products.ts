import { Product, SubscriptionPlan } from '../types';

import heroSaladImg from '../assets/images/hero_salad_bowl_1791465082553.jpg';
import caesarSaladImg from '../assets/images/featured_caesar_salad_1791465094775.jpg';
import proteinBowlImg from '../assets/images/protein_power_bowl_1791465109343.jpg';
import mediterraneanSaladImg from '../assets/images/mediterranean_salad_1791465129092.jpg';
import gardenFreshSaladImg from '../assets/images/garden_fresh_salad_1791465141807.jpg';

export const products: Product[] = [
  {
    id: "caesar-crunch",
    name: "Classic Crunch Caesar Salad",
    tagline: "Meet your new favourite crunch",
    description: "Fresh greens, crunchy veggies, creamy Caesar dressing and loads of flavour in every bite.",
    detailedDescription: "Our flagship salad. Hand-torn crisp romaine and baby greens tossed with artisanal golden sourdough croutons, shaved parmesan, cracked black pepper, and our signature slow-whipped Caesar dressing.",
    price: 289,
    category: "Salads",
    image: caesarSaladImg,
    vegetarian: true,
    calories: 340,
    protein: "14g",
    ingredients: [
      "Crisp Romaine Lettuce",
      "Baby Arugula",
      "Golden Sourdough Croutons",
      "Shaved Parmesan Cheese",
      "Cherry Tomatoes",
      "Cracked Black Pepper",
      "Signature Creamy Caesar Dressing"
    ],
    dressingOptions: [
      "Signature Garlic Caesar (Default)",
      "Light Herb Vinaigrette",
      "Lemon Mustard Dressing"
    ],
    extras: [
      { name: "Extra Golden Croutons", price: 35 },
      { name: "Roasted Pumpkin & Sunflower Seeds", price: 40 },
      { name: "Grilled Herbed Paneer Cubes (60g)", price: 65 }
    ],
    isFeatured: true,
    isBestSeller: true
  },
  {
    id: "protein-power",
    name: "Protein Power Bowl",
    tagline: "Sustained clean energy for your day",
    description: "Grilled paneer cubes, nutty quinoa, edamame, spiced chickpeas, fresh avocado and creamy tahini.",
    detailedDescription: "High-density clean plant fuel built for active lifestyles. Warm fluffy organic quinoa layered with marinated grilled paneer, steamed young edamame, crisp purple cabbage, roasted cumin chickpeas, and finished with rich nutty tahini.",
    price: 339,
    category: "Protein Bowls",
    image: proteinBowlImg,
    vegetarian: true,
    calories: 460,
    protein: "26g",
    ingredients: [
      "Grilled Herbed Paneer (100g)",
      "Organic White Quinoa",
      "Steamed Edamame",
      "Roasted Spiced Chickpeas",
      "Hass Avocado Slices",
      "Shredded Purple Cabbage",
      "Toasted White Sesame",
      "House Tahini Lemon Dressing"
    ],
    dressingOptions: [
      "Creamy Lemon Tahini (Default)",
      "Fiery Peri Peri Yogurt",
      "Chimichurri Herb Dressing"
    ],
    extras: [
      { name: "Extra Grilled Paneer (50g)", price: 60 },
      { name: "Half Fresh Avocado", price: 80 },
      { name: "Hemp Seed Crunch", price: 45 }
    ],
    isFeatured: true,
    isBestSeller: true
  },
  {
    id: "mediterranean-fresh",
    name: "Mediterranean Salad",
    tagline: "Bright, crisp coastal freshness",
    description: "Crisp cucumbers, Kalamata olives, diced peppers, creamy feta cheese and virgin olive oil oregano dressing.",
    detailedDescription: "Sun-drenched Mediterranean flavours prepared fresh in Jodhpur. Cool English cucumbers, sweet yellow & red bell peppers, authentic Kalamata olives, juicy cherry tomatoes, and creamy feta cheese dressed with cold-pressed olive oil, fresh lemon, and mountain oregano.",
    price: 319,
    category: "Salads",
    image: mediterraneanSaladImg,
    vegetarian: true,
    calories: 290,
    protein: "11g",
    ingredients: [
      "English Cucumbers",
      "Kalamata Black Olives",
      "Sweet Bell Peppers",
      "Creamy Feta Cheese Cubes",
      "Heirloom Cherry Tomatoes",
      "Red Onions",
      "Fresh Oregano",
      "Cold-Pressed Extra Virgin Olive Oil"
    ],
    dressingOptions: [
      "EVOO & Mountain Oregano (Default)",
      "Lemon Herb Vinaigrette",
      "Balsamic Glaze"
    ],
    extras: [
      { name: "Extra Feta Cheese", price: 55 },
      { name: "Toasted Pita Crisps", price: 35 },
      { name: "Artisanal Hummus Scoop", price: 50 }
    ],
    isFeatured: true,
    isBestSeller: false
  },
  {
    id: "garden-fresh",
    name: "Garden Fresh Salad",
    tagline: "Straight from farm to crisp bowl",
    description: "Hand-picked tender greens, baby spinach, radishes, pomegranate pearls, roasted seeds and citrus vinaigrette.",
    detailedDescription: "A celebration of crisp morning harvests. Tender young spinach leaves and microgreens tossed with thinly shaved radishes, sweet ruby pomegranate arils, crunchy roasted pumpkin seeds, and a zesty cold-pressed orange-lemon vinaigrette.",
    price: 279,
    category: "Salads",
    image: gardenFreshSaladImg,
    vegetarian: true,
    calories: 220,
    protein: "8g",
    ingredients: [
      "Baby Spinach & Wild Greens",
      "Ruby Pomegranate Arils",
      "Watermelon Radish Slices",
      "Farm Fresh Cucumbers",
      "Roasted Pumpkin Seeds",
      "Fresh Mint Leaves",
      "Citrus Orange Vinaigrette"
    ],
    dressingOptions: [
      "Citrus Orange Vinaigrette (Default)",
      "Honey Mustard Dressing",
      "Cold-Pressed Olive & Apple Cider"
    ],
    extras: [
      { name: "Extra Roasted Seeds Mix", price: 35 },
      { name: "Crumbled Soft Goat Cheese", price: 65 },
      { name: "Fresh Pomegranate Cup", price: 40 }
    ],
    isFeatured: true,
    isBestSeller: false
  },
  {
    id: "paneer-power",
    name: "Paneer Power Bowl",
    tagline: "Hearty, comforting high-protein meal",
    description: "Tandoori spiced grilled cottage cheese on a bed of warm brown rice, sauteed bell peppers and mint yogurt dip.",
    detailedDescription: "A wholesome fusion crafted for Indian fitness enthusiasts. Fragrant short-grain brown rice loaded with succulent tandoori grilled cottage cheese, charred bell peppers, baby corn, steamed edamame, and refreshing cooling mint yogurt sauce.",
    price: 329,
    category: "Protein Bowls",
    image: heroSaladImg,
    vegetarian: true,
    calories: 440,
    protein: "24g",
    ingredients: [
      "Tandoori Spiced Paneer (120g)",
      "Nutty Brown Rice",
      "Charred Red & Green Peppers",
      "Baby Corn",
      "Steamed Edamame",
      "Fresh Mint Yogurt Dressing",
      "Chaat Masala Dust"
    ],
    dressingOptions: [
      "Mint Greek Yogurt (Default)",
      "Smoky Tandoori Vinaigrette",
      "Coriander Lime Dressing"
    ],
    extras: [
      { name: "Extra Paneer (60g)", price: 60 },
      { name: "Roasted Masala Makhana", price: 45 }
    ],
    isFeatured: false,
    isBestSeller: true
  },
  {
    id: "seasonal-fresh",
    name: "Seasonal Fresh Harvest Bowl",
    tagline: "The best produce of the current season",
    description: "Crisp seasonal farm greens, sweet corn, cherry tomatoes, pickled onions, sunflower seeds and ginger-lime splash.",
    detailedDescription: "Rotating with the season's sweetest local produce. Packed with crunch, natural hydration, and tangy house-pickled onions. Crisp, light, and endlessly refreshing.",
    price: 269,
    category: "Salads",
    image: gardenFreshSaladImg,
    vegetarian: true,
    calories: 210,
    protein: "7g",
    ingredients: [
      "Locally Sourced Crisp Greens",
      "Sweet Steamed Corn",
      "Juicy Cherry Tomatoes",
      "Quick Pickled Pink Onions",
      "Toasted Sunflower Seeds",
      "Fresh Cilantro",
      "Ginger Lime Splash"
    ],
    dressingOptions: [
      "Ginger Lime Splash (Default)",
      "Sweet Chilli Vinaigrette",
      "Classic French Herb"
    ],
    extras: [
      { name: "Grilled Tofu / Paneer", price: 60 },
      { name: "Crunchy Garlic Croutons", price: 35 }
    ],
    isFeatured: false,
    isBestSeller: false
  },
  {
    id: "grilled-cottage-meal",
    name: "Herb Grilled Cottage Cheese Meal",
    tagline: "Complete wholesome warm meal plate",
    description: "Herb-crusted grilled paneer steak served with garlic sautéed greens, mashed sweet potato and rosemary jus.",
    detailedDescription: "A balanced warm dinner plate that keeps you satisfied without heaviness. Pan-seared cottage cheese steak with fresh rosemary, served alongside crushed sweet potato mash and warm sautéed garden greens.",
    price: 369,
    category: "Healthy Meals",
    image: proteinBowlImg,
    vegetarian: true,
    calories: 480,
    protein: "28g",
    ingredients: [
      "Rosemary Crusted Paneer Steak",
      "Crushed Sweet Potato Mash",
      "Sauteed French Beans & Carrots",
      "Garlic Tossed Baby Greens",
      "Warm Herb Jus"
    ],
    dressingOptions: [
      "Warm Rosemary Herb Jus (Default)",
      "Garlic Pepper Sauce"
    ],
    extras: [
      { name: "Extra Sweet Potato Mash", price: 50 },
      { name: "Multigrain Dinner Roll", price: 30 }
    ],
    isFeatured: false,
    isBestSeller: false
  },
  {
    id: "quinoa-fiesta",
    name: "Quinoa Fiesta Meal Bowl",
    tagline: "Nutrient-packed Mexican warmth",
    description: "Warm quinoa, black beans, sweet corn, pico de gallo, guacamole scoop, tortilla crisps and creamy jalapeño crema.",
    detailedDescription: "Bursting with bold zest and satisfying wholesome texture. Fluffy organic quinoa paired with simmered black beans, fresh diced tomato coriander salsa, homemade guacamole, and a touch of light lime jalapeño crema.",
    price: 349,
    category: "Healthy Meals",
    image: mediterraneanSaladImg,
    vegetarian: true,
    calories: 420,
    protein: "16g",
    ingredients: [
      "Organic Tricolour Quinoa",
      "Slow-Simmered Black Beans",
      "Fresh Tomato Pico De Gallo",
      "Sweet Corn",
      "Homemade Guacamole Scoop",
      "Baked Whole Wheat Crisps",
      "Jalapeño Lime Crema"
    ],
    dressingOptions: [
      "Jalapeño Lime Crema (Default)",
      "Cilantro Chimichurri"
    ],
    extras: [
      { name: "Extra Fresh Guacamole", price: 75 },
      { name: "Jalapeño Pickles", price: 25 }
    ],
    isFeatured: false,
    isBestSeller: false
  },
  {
    id: "garlic-croutons-addon",
    name: "Artisan Garlic Sourdough Croutons",
    tagline: "Handmade golden sourdough crunch",
    description: "Baked daily in small batches with extra virgin olive oil, sea salt and slow-roasted garlic.",
    detailedDescription: "Golden, airy, and deeply crunchy. Made from naturally fermented artisanal sourdough bread tossed with roasted garlic oil and flaky sea salt.",
    price: 69,
    category: "Add-ons",
    image: caesarSaladImg,
    vegetarian: true,
    calories: 120,
    protein: "3g",
    ingredients: ["Fermented Sourdough", "Extra Virgin Olive Oil", "Roasted Garlic", "Sea Salt"]
  },
  {
    id: "roasted-seed-mix",
    name: "Roasted Superseed Crunch (75g)",
    tagline: "Pumpkin, sunflower, chia & flax seeds",
    description: "Slow-roasted seeds lightly seasoned with pink Himalayan salt. Ideal for topping your bowls.",
    detailedDescription: "Nutrient powerhouse seed mix high in omega-3s, magnesium, and plant protein. Adds satisfying crunch to any meal.",
    price: 89,
    category: "Add-ons",
    image: gardenFreshSaladImg,
    vegetarian: true,
    calories: 160,
    protein: "7g",
    ingredients: ["Pumpkin Seeds", "Sunflower Seeds", "Golden Flaxseeds", "Chia Seeds", "Himalayan Pink Salt"]
  },
  {
    id: "green-detox-juice",
    name: "Cold-Pressed Green Detox Juice (300ml)",
    tagline: "100% raw, no added sugar or water",
    description: "Fresh spinach, cucumber, green apple, celery, mint and a squeeze of Rajasthan lemon.",
    detailedDescription: "Cold-pressed fresh each morning. Zero preservatives, zero added sugar, zero water dilution. Clean hydration that leaves you revitalized.",
    price: 149,
    category: "Drinks",
    image: heroSaladImg,
    vegetarian: true,
    calories: 95,
    protein: "2g",
    ingredients: ["Green Apple", "Cucumber", "Spinach", "Celery", "Fresh Mint", "Fresh Lemon"]
  },
  {
    id: "valencia-orange-juice",
    name: "Cold-Pressed Valencia Orange Juice (300ml)",
    tagline: "Pure sunshine vitamin C booster",
    description: "Cold-pressed whole oranges with natural juicy pulp. Sweet, refreshing, and 100% natural.",
    detailedDescription: "Pressed cold to preserve vital enzymes and natural sweetness. The perfect companion to your crisp salad lunch.",
    price: 159,
    category: "Drinks",
    image: gardenFreshSaladImg,
    vegetarian: true,
    calories: 110,
    protein: "2g",
    ingredients: ["100% Pure Valencia Oranges", "Natural Fruit Pulp"]
  }
];

export const subscriptionPlans: SubscriptionPlan[] = [
  {
    id: "daily-plan",
    badge: "DAILY",
    name: "Daily Fresh Salad Routine",
    subtitle: "A crisp, chef-prepared salad delivered every weekday to your office or doorstep.",
    description: "Stop wondering what to eat for lunch. Get a different fresh gourmet salad bowl delivered right on time, prepared just minutes before dispatch.",
    highlights: [
      "New salad recipe each day (no repetition fatigue)",
      "Delivered directly to home or workplace in Jodhpur",
      "Guaranteed delivery window between 12:30 PM - 1:30 PM",
      "Calorie & macro breakdown printed on every bowl"
    ],
    mealsPerCycle: "Mon - Fri (5 Meals / Week)",
    flexibility: "Pause or skip anytime with 3 hours prior notice on WhatsApp",
    whatsappMessage: "Hi Saladfarm! I'm interested in your DAILY subscription plan. Please share the pricing and weekly rotating menu."
  },
  {
    id: "weekly-plan",
    badge: "WEEKLY",
    name: "Weekly Fitness & Fuel Plan",
    subtitle: "High-protein bowls and nourishing salads tailored for gym-goers and active routines.",
    description: "Targeted nutrition with 20g+ clean protein per meal. Perfect for fitness enthusiasts looking to cut prep time without cutting quality.",
    highlights: [
      "Curated high-protein bowls & signature salads",
      "Option to choose between Lunch or Dinner delivery",
      "Customizable dressings & extra protein options",
      "Free priority delivery across all Jodhpur zones"
    ],
    mealsPerCycle: "6 Days / Week (Lunch or Dinner)",
    flexibility: "Flexible scheduling, change address within Jodhpur easily",
    whatsappMessage: "Hi Saladfarm! I'm interested in your WEEKLY fitness meal plan. Please share the details and diet options."
  },
  {
    id: "monthly-plan",
    badge: "MONTHLY",
    name: "Monthly Healthy Living Habit",
    subtitle: "Your comprehensive month-long clean eating habit with dedicated concierge support.",
    description: "Make healthy eating your default effortless lifestyle. Enjoy member-exclusive pricing, priority delivery slots, and customized dietary requests.",
    highlights: [
      "Maximum value with special monthly subscriber discount",
      "1-on-1 WhatsApp concierge to customize dressings and greens",
      "Complimentary cold-pressed juice twice every week",
      "Carry forward unused meals with zero penalty"
    ],
    mealsPerCycle: "24 Meals / Month",
    flexibility: "Full pause protection up to 10 days for travel or holidays",
    whatsappMessage: "Hi Saladfarm! I'm interested in your MONTHLY healthy living subscription. Please share the complete subscription packages and rates."
  }
];
