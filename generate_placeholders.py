from PIL import Image, ImageDraw
import os

def create_placeholder(width, height, text, bg_color, text_color, output_path):
    # Create a new image with the specified background color
    img = Image.new('RGB', (width, height), color=bg_color)
    
    # Initialize drawing context
    draw = ImageDraw.Draw(img)
    
    # Add a border
    border_width = 2
    draw.rectangle(
        [(0, 0), (width-1, height-1)],
        outline=text_color,
        width=border_width
    )
    
    # Add centered text
    from PIL import ImageFont
    try:
        # Try to use a nice font if available
        font = ImageFont.truetype("arial.ttf", 20)
    except IOError:
        # Fallback to default font
        font = ImageFont.load_default()
    
    # Calculate text size and position
    text_bbox = draw.textbbox((0, 0), text, font=font)
    text_width = text_bbox[2] - text_bbox[0]
    text_height = text_bbox[3] - text_bbox[1]
    
    x = (width - text_width) // 2
    y = (height - text_height) // 2
    
    # Draw the text
    draw.text((x, y), text, fill=text_color, font=font)
    
    # Save the image
    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    img.save(output_path)
    print(f"Created: {output_path}")

# Create profile image (square)
create_placeholder(
    width=400,
    height=400,
    text="Profile Photo",
    bg_color="#f0f0f0",
    text_color="#333333",
    output_path="images/profile.jpg"
)

# Create hero background (wide)
create_placeholder(
    width=1920,
    height=1080,
    text="Hero Background",
    bg_color="#4a6cf7",
    text_color="#ffffff",
    output_path="images/hero-bg.jpg"
)

# Create project placeholders
for i in range(1, 7):
    create_placeholder(
        width=800,
        height=500,
        text=f"Project {i}",
        bg_color=f"#f{i%3+1}f{i%6+1}f{i%3+1}",  # Different colors for each
        text_color="#333333",
        output_path=f"images/projects/project{i}.jpg"
    )

print("\nAll placeholder images have been created!")
