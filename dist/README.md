# MapQuest Pro - Interactive Route Planning & Mission Control

## Quick Start
**The easiest way to use MapQuest Pro is to simply open `MapQuest-Pro-Standalone.html` in your web browser!**

## What is MapQuest Pro?
MapQuest Pro is a professional-grade, browser-based mapping application designed for route planning, mission management, and competitive scoring. Built with Leaflet.js and OpenStreetMap, it offers a comprehensive suite of tools for interactive mapping.

## Key Features

### 🗺️ Multi-Overlay Management
- Import and manage multiple overlay images
- Individual opacity and visibility controls for each overlay
- Position and resize overlays with drag-and-drop editing
- Support for various image formats

### 🎯 Advanced Point Management
- Click-to-draw route points on the map
- Import coordinates in bulk (lat,lng/lat,lng format)
- Manual coordinate entry with validation
- Point deletion and editing capabilities
- Automatic point numbering and labeling

### 📐 Comprehensive Measurement System
- Distance calculations between all points
- Area calculations for closed shapes
- Show/hide measurements toggle
- Adjustable text size for measurement labels
- Closing distance calculations for complete shapes

### 🚀 Mission Animation System
- Animated flights between route points
- Smooth camera following and point-to-point travel
- Mission control panel with progress tracking
- Pause/resume and speed adjustment controls
- Completion status and overview

### 📊 Shape Management & Scoring
- Save multiple named shapes with individual scoring
- Automatic complexity scoring based on points, distance, and area
- Manual score override capabilities
- Shape visibility controls (show/hide individual or all shapes)
- Comprehensive project statistics

### 💾 Project Persistence
- Save complete projects as JSON files
- Load projects with full state restoration
- Export scoring data to CSV format
- Backward compatibility with older project formats

### 🔗 Google Maps Integration
- **Two export modes**: Individual point links or complete driving route
- Individual mode: Get coordinates and separate links for each point
- Driving route mode: Enter starting location and get turn-by-turn directions
- Multiple copy formats: Simple list, Detailed list, or CSV spreadsheet
- One-click export to Google Maps navigation
- Perfect for field work and route planning

## How to Use

### Getting Started
1. **Open the Application**: Double-click `MapQuest-Pro-Standalone.html` or open it in any modern web browser
2. **Import an Overlay** (optional): Click "📁 Import" in the Overlay section to add your map image
3. **Start Drawing**: Click "🎯 Draw Points" in the Shapes section and click on the map to add route points

### Toolbar Organization
The toolbar is organized into clear sections:

**🖼️ Overlay Section**
- **Import** - Add overlay images
- **≡ Manage** - View and switch between overlays
- **✏ Edit** - Reposition and resize active overlay
- **Opacity slider** - Adjust overlay transparency

**📐 Shapes Section**
- **⊕ Draw Points** - Start/stop drawing mode
- **⊗ Close** - Complete the current shape (3+ points required)
- **▼ Save** - Save the current shape permanently
- **+ New** - Start a new shape
- **≡ Manage** - View, edit, score all shapes
- **◉ Show All** / **○ Hide All** - Toggle all shapes visibility
- **⟷ Measure** - Show/hide measurement labels
- **Text slider** - Adjust measurement text size

**📍 Points Section**
- **+ Add** - Manually enter single coordinates
- **⇙ Import** - Bulk import multiple coordinates
- **≡ View** - Show list of all points
- **↗ Export** - Export to Google Maps (individual links or driving route)
- **▶ Mission** - Animate through route points

**💾 Project Section**
- **▼ Save** - Save complete project as JSON
- **▲ Load** - Load saved project
- **✕ Clear All** - Reset everything

### Basic Workflow
1. **Add Points**: Use draw mode or coordinate input to create your route
2. **Close Shape**: Click "⊗ Close" to complete a polygon (requires 3+ points)
3. **Save Shape**: Click "▼ Save" to store your route
4. **Start Mission**: Click "▶ Mission" to animate through your route
5. **View Measurements**: Click "⟷ Measure" to see distances and areas

### Google Maps Export Options
When you click "↗ Export", you get two choices:
1. **📍 Individual Point Links** - Get separate coordinates and Google Maps links for each point
   - Copy coordinates in Simple, Detailed, or CSV format
   - Click individual links to open specific locations
   - Perfect for documentation and sharing specific locations

2. **🚗 Create Driving Route** - Generate turn-by-turn directions
   - Enter your starting location (address or coordinates)
   - Creates a complete route through all your points in order
   - Opens in Google Maps with full navigation

### Advanced Features
- **Bulk Import**: Use "⇙ Import" to paste multiple coordinates in format: `lat1,lng1/lat2,lng2/lat3,lng3`
- **Shape Management**: Click "≡ Manage" (in Shapes section) to view, edit, score, and organize all your shapes
- **Overlay Management**: Click "≡ Manage" (in Overlay section) to control multiple overlay images
- **Project Save/Load**: Use "▼ Save" and "▲ Load" to preserve your complete work session

## File Structure
```
dist/
├── MapQuest-Pro-Standalone.html    # Complete application (open this!)
├── README.md                       # This file
├── User-Guide.md                   # Detailed user instructions
└── examples/                       # Sample files and examples
    ├── sample-coordinates.txt      # Example coordinate formats
    └── sample-project.json         # Example project file
```

## System Requirements
- **Browser**: Any modern web browser (Chrome, Firefox, Safari, Edge)
- **Internet**: Required for map tiles and Leaflet.js library
- **File Access**: Ability to select local files for overlays and project loading

## Technical Details
- **Mapping Engine**: Leaflet.js 1.9.4
- **Map Tiles**: OpenStreetMap
- **File Format**: Self-contained HTML with embedded JavaScript and CSS
- **Dependencies**: All dependencies loaded via CDN (no local installation required)

## Troubleshooting

### Common Issues
- **Map not loading**: Check internet connection for tile loading
- **Overlay not appearing**: Ensure image file is valid and supported format
- **Points not saving**: Make sure to click "Save Shape" after creating points
- **Mission not starting**: Ensure you have at least 2 points in your route

### Browser Compatibility
- ✅ Chrome 70+
- ✅ Firefox 65+
- ✅ Safari 12+
- ✅ Edge 79+

## Support & Updates
This is a standalone application with no external dependencies beyond internet access for map tiles. All functionality is self-contained within the HTML file.

---

**Ready to start?** Simply open `MapQuest-Pro-Standalone.html` in your browser and begin mapping!
