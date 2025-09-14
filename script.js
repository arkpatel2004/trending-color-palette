const palettes = [
  {
    title: 'Cool and Collected',
    image: 'website-1.png',
    colors: ['#03061C', '#191934', '#653AD8', '#E27F5A'],
    desc: `A modern, creative agency theme that exudes confidence and clarity. Often used for tech startups, SaaS products, and digital portfolios. The deep blues and purples create a sense of trust and innovation, while the orange accent adds energy and approachability. This palette is perfect for brands that want to appear both professional and forward-thinking.`
  },
  {
    title: 'Mechanical and Floaty',
    image: 'website-2.png',
    colors: ['#111111', '#242424', '#2F2F2F', '#FF6000'],
    desc: `A bold, industrial look with a touch of playfulness. Ideal for engineering firms, product showcases, or modern blogs. The dark grays provide a strong, stable foundation, while the bright orange injects vibrancy and draws attention to key elements. This palette balances seriousness with a spark of creativity.`
  },
  {
    title: 'Sunset Harmony',
    image: 'website-3.png',
    colors: ['#FF5F5F', '#B2DF8A', '#FFA76C', '#A6DBFF', '#F472B6', '#F9E75E'],
    desc: `A lively, multi-color palette inspired by sunset skies. Great for creative agencies, event sites, or lifestyle brands. The mix of warm and cool tones creates a dynamic, inviting atmosphere. This scheme is perfect for brands that want to express energy, diversity, and fun.`
  },
  {
    title: 'Eco Pulse',
    image: 'website-4.png',
    colors: ['#0B1926', '#01F28D', '#003128'],
    desc: `A fresh, nature-inspired palette for eco-friendly brands and green startups. Commonly used for environmental organizations, organic products, and wellness sites. Deep greens and teals evoke growth, health, and sustainability. The bright accent color adds a modern, energetic twist to the natural base.`
  },
  {
    title: 'Startup Spark',
    image: 'website-5.png',
    colors: ['#17BF6B', '#ED3333', '#FFC632', '#6597FF', '#FF6869'],
    desc: `A vibrant, energetic palette designed for startups and SaaS companies. Popular in tech, finance, and marketing websites. The bold mix of green, red, yellow, and blue signals innovation and excitement. This palette is ideal for brands that want to stand out and make a memorable impression.`
  },
  {
    title: 'Minimal Night',
    image: 'website-6.png',
    colors: ['#090707', '#0D0D0D', '#097FD9'],
    desc: `A sleek, minimalist palette with a pop of blue. Perfect for portfolios, blogs, and modern business sites. The dark background creates a sense of sophistication, while the blue accent brings focus and clarity. This scheme is great for brands that value simplicity and elegance.`
  },
  {
    title: 'Earthy Mosaic',
    image: 'website-7.png',
    colors: ['#0D0D0D', '#F5EA88', '#282503', '#113C0E', '#3DF55C', '#88A5F6', '#0E193C', '#1A1A1A', '#30030A', '#F53D5C'],
    desc: `A rich, earthy palette with a mosaic of natural tones. Used in artisan shops, organic brands, and creative portfolios. The combination of greens, browns, and golds gives a grounded, authentic feel. Touches of blue and red add vibrancy and visual interest.`
  },
  {
    title: 'Playful Pastels',
    image: 'website-8.png',
    colors: ['#82AF38', '#E5F985', '#E99B37', '#FFD9A9', '#7F5CD4', '#BDA2FF', '#D65D52', '#FFB5AE'],
    desc: `A fun, pastel palette for creative studios and playful brands. Great for childrens products, art sites, and event pages. Soft greens, purples, and oranges create a cheerful, welcoming vibe. This palette is perfect for brands that want to appear friendly and imaginative.`
  },
  {
    title: 'Blueberry Pop',
    image: 'website-9.png',
    colors: ['#5335D9', '#4C90FF', '#FFC147', '#FF5F85'],
    desc: `A cool, modern palette with a pop of yellow and pink. Often used for tech, education, and creative portfolios. The blues provide calm and professionalism, while the yellow and pink add energy and approachability. This palette is great for brands that want to balance trust with creativity.`
  },
  {
    title: 'Noir Luxe',
    image: 'website-10.png',
    colors: ['#000C2F', '#000A1F', '#292738'],
    desc: `A luxurious, dark palette for high-end brands and e-commerce. Ideal for fashion, jewelry, and luxury product sites. The deep, nearly-black tones create a sense of exclusivity and elegance. This scheme is perfect for brands that want to convey sophistication and premium quality.`
  }
];

function createPaletteItem(palette, index) {
  const item = document.createElement('div');
  item.className = 'palette-item';

  // Title at the top, single line
  const title = document.createElement('div');
  title.className = 'palette-title';
  title.textContent = `${index + 1} ${palette.title}`;
  item.appendChild(title);

  // Row: image left, palette right
  const row = document.createElement('div');
  row.className = 'palette-row';

  const img = document.createElement('img');
  img.className = 'palette-image';
  img.src = palette.image;
  img.alt = palette.title;

  // Color palette (vertical, height matches image)
  const colors = document.createElement('div');
  colors.className = 'palette-colors';
  palette.colors.forEach((color, i) => {
    const colorBox = document.createElement('div');
    colorBox.className = 'color-box';
    colorBox.style.background = color;
    if (i === 0) colorBox.classList.add('first');
    if (i === palette.colors.length - 1) colorBox.classList.add('last');

    // Centered color code
    const code = document.createElement('span');
    code.className = 'color-code';
    code.textContent = color.replace('#', '').toUpperCase();
    colorBox.appendChild(code);
    colors.appendChild(colorBox);
  });

  row.appendChild(img);
  row.appendChild(colors);
  item.appendChild(row);

  // Description below row
  const desc = document.createElement('div');
  desc.className = 'palette-desc';
  desc.textContent = palette.desc;
  item.appendChild(desc);

  return item;
}

document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.palettes-container');
  palettes.forEach((palette, idx) => {
    container.appendChild(createPaletteItem(palette, idx));
  });
}); 

// ... your existing palettes code ...

// 🔥 ADD THIS AT THE END OF script.js
document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.palettes-container');
  palettes.forEach((palette, idx) => {
    container.appendChild(createPaletteItem(palette, idx));
  });

  // Initialize AdSense Auto Ads
  if (typeof window !== 'undefined') {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({
        google_ad_client: "ca-pub-9997789586476189", // Replace with your actual ID
        enable_page_level_ads: true
      });
    } catch (error) {
      console.error('AdSense setup error:', error);
    }
  }
});
