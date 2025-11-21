# MapQuest Pro - Detailed User Guide

## Table of Contents
1. [Getting Started](#getting-started)
2. [Interface Overview](#interface-overview)
3. [Working with Overlays](#working-with-overlays)
4. [Creating Routes and Shapes](#creating-routes-and-shapes)
5. [Mission Control](#mission-control)
6. [Measurements and Analysis](#measurements-and-analysis)
7. [Project Management](#project-management)
8. [Advanced Features](#advanced-features)
9. [Tips and Best Practices](#tips-and-best-practices)

## Getting Started

### First Launch
1. Open `MapQuest-Pro-Standalone.html` in your web browser
2. You'll see a map centered on New York with a full control panel at the top
3. The status bar at the bottom will show "Ready! Import an overlay image or start drawing points."

### Your First Route
1. Click "🎯 Draw Points" to enter drawing mode
2. Click anywhere on the map to add points
3. Each click adds a numbered point connected by lines
4. Click "🔗 Close Shape" when you have 3+ points to create a closed polygon
5. Click "💾 Save Shape" to store your route permanently

## Interface Overview

### Top Control Panel
The control panel contains all major functions organized by category:

**File Operations:**
- 📁 Import Overlay - Add background images
- 💾 Save Project - Save your entire session
- 📂 Load Project - Restore a saved session

**Overlay Controls:**
- 🖼️ Manage Overlays - View and control multiple overlay images
- ✏️ Edit Overlay - Resize and reposition overlays
- Opacity Slider - Adjust overlay transparency (0-100%)
- Text Size Slider - Adjust measurement label size (8-20px)

**Drawing Tools:**
- 🎯 Draw Points - Enter/exit point drawing mode
- 📍 Add Coords - Manually enter coordinates
- 📥 Import Coords - Bulk import coordinate lists
- 🧪 Test Import - Quick test with sample coordinates

**Shape Management:**
- 🔗 Close Shape - Complete a polygon shape
- 💾 Save Shape - Store current shape permanently
- ✏️ Rename - Give custom names to shapes
- 🆕 New Shape - Start creating a new shape
- 📋 Manage Shapes - View and control all saved shapes

**Analysis Tools:**
- 📏 Show/Hide Measurements - Toggle distance and area labels
- 👁️ Show All / 🙈 Hide All - Control shape visibility
- 📊 Export Scores CSV - Generate scoring spreadsheet

**Mission Control:**
- 🚀 Start Mission - Animate flight through route points
- 🗺️ Export to Google - Generate Google Maps URLs

### Status Information
- **Points Counter**: Shows current number of points in active shape
- **Shape Info**: Displays current shape ID and point count
- **Total Shapes**: Shows total number of saved shapes
- **Distance**: Real-time distance calculation for current shape

## Working with Overlays

### Importing Overlays
1. Click "📁 Import Overlay"
2. Select an image file (PNG, JPG, GIF supported)
3. Enter a descriptive name when prompted
4. The overlay will be positioned over your current map view

### Managing Multiple Overlays
1. Click "🖼️ Manage Overlays" to open the overlay panel
2. Each overlay shows:
   - Name (editable)
   - Visibility status (👁️ Visible / 🚫 Hidden)
   - Position coordinates
   - Opacity percentage

### Overlay Controls
- **Make Active**: Set which overlay responds to opacity controls
- **Show/Hide**: Toggle individual overlay visibility
- **Center**: Pan map to show the overlay
- **Delete**: Remove overlay permanently

### Editing Overlay Position
1. Ensure an overlay is active
2. Click "✏️ Edit Overlay"
3. Drag the corner handles to resize and reposition
4. Click "💾 Save" to confirm changes or "❌ Cancel" to revert

## Creating Routes and Shapes

### Drawing Mode
1. Click "🎯 Draw Points" - button turns orange when active
2. Mouse cursor changes to crosshair
3. Click anywhere on map to add numbered points
4. Points automatically connect with lines
5. Click "🛑 Stop Drawing" to exit mode

### Manual Coordinate Entry
1. Click "📍 Add Coords" to open coordinate modal
2. **Single Point Tab**: Enter individual latitude/longitude
3. **Bulk Import Tab**: Paste multiple coordinates in format:
   ```
   51.501844,-0.140591/51.507790,-0.127911/51.511396,-0.124350
   ```

### Shape Completion
- **Open Path**: Leave as-is for route planning
- **Closed Shape**: Click "🔗 Close Shape" to connect last point to first
- Closed shapes enable area calculations and scoring

### Point Management
- **Delete Points**: Click the × button on any point marker
- **View Details**: Click any point to see coordinates popup
- **Reorder**: Delete and recreate points to change sequence

## Mission Control

### Starting a Mission
1. Ensure you have at least 2 points in your route
2. Click "🚀 Start Mission"
3. Map zooms to starting point
4. Animated marker (🚁) travels between each point in sequence

### Mission Controls Panel
- **Mission Info**: Shows current flight segment
- **Progress Bar**: Visual progress through entire route
- **⏸️ Pause/▶️ Resume**: Stop and continue mission
- **🛑 Stop**: End mission and return to normal view
- **⚡ Speed**: Cycle through speed settings (Slow/Normal/Fast/Very Fast)

### Mission Behavior
- Camera smoothly follows the animated marker
- Brief pause at each waypoint
- Shows arrival status for each point
- Automatic completion overview when finished

## Measurements and Analysis

### Distance Measurements
- Shown between each consecutive pair of points
- Displays in meters (< 1km) or kilometers (≥ 1km)
- Closing distance shown for completed shapes (marked with 🔄)

### Area Calculations
- Available only for closed shapes (3+ points)
- Calculated using shoelace formula with geographic projection
- Displays in square meters or square kilometers
- Shows at centroid (center) of shape

### Measurement Controls
- **📏 Toggle**: Show/hide all measurement labels
- **Text Size Slider**: Adjust label font size for readability
- **Automatic Updates**: Measurements refresh when points change

## Project Management

### Saving Projects
1. Click "💾 Save Project" 
2. Automatically saves all overlays, shapes, and current state
3. Downloads as JSON file with timestamp
4. Includes complete project data and settings

### Loading Projects
1. Click "📂 Load Project"
2. Select a previously saved JSON file
3. All overlays, shapes, and settings restore automatically
4. Map view returns to saved position and zoom

### Shape Management Panel
Access via "📋 Manage Shapes":

**Shape Information:**
- Custom names (editable inline)
- Point count, area, and distance
- Creation timestamp
- Closure status (🔗 Closed / 📍 Open)

**Shape Actions:**
- **👁️ View**: Pan map to show shape
- **✏️ Edit**: Load shape for modification
- **🙈 Hide/👁️ Show**: Control individual visibility
- **Score Input**: Manual scoring (0-999)
- **🧮 Auto**: Calculate complexity-based score
- **🗑️ Delete**: Remove permanently

### Scoring System
**Automatic Complexity Scoring:**
- 1 point per route point
- 1 point per kilometer of distance
- 1 point per 100,000 m² of area
- 5 bonus points for closed shapes
- Minimum score of 1

**Manual Override:**
- Enter any score in the input field
- Useful for competition judging
- Export all scores to CSV spreadsheet

## Advanced Features

### Bulk Coordinate Import
Format: `lat1,lng1/lat2,lng2/lat3,lng3`

Example:
```
51.501844,-0.140591/51.507790,-0.127911/51.511396,-0.124350/51.515411,-0.124831
```

Options:
- **Shape Name**: Custom name for imported shape
- **Clear Existing**: Remove current points before import
- **Coordinate Validation**: Automatic range checking

### Multi-Shape Workflows
1. Create and save multiple shapes in same project
2. Toggle visibility for comparison
3. Individual scoring and management
4. Export comprehensive statistics

### Google Maps Integration
1. Create route with 2+ points
2. Click "🗺️ Export to Google"
3. URL automatically copies to clipboard
4. Opens Google Maps with your exact route

### CSV Export Features
Generated spreadsheet includes:
- Shape names and creation dates
- Point counts and distances
- Area measurements (m² and km²)
- Manual and complexity scores
- Shape status (Open/Closed)

## Tips and Best Practices

### Overlay Management
- Use descriptive names for easy identification
- Import overlays before creating routes for reference
- Adjust opacity to see underlying map features
- Keep overlay file sizes reasonable for performance

### Route Planning
- Start with key waypoints, add detail later
- Use bulk import for GPS track data
- Close shapes only when area calculation is needed
- Save frequently to prevent data loss

### Mission Planning
- Test missions with simple routes first
- Adjust speed based on route complexity
- Use pause feature to examine specific segments
- Stop and restart missions as needed

### Performance Optimization
- Limit to reasonable number of shapes (< 50 recommended)
- Use appropriate map zoom levels
- Clear unused shapes periodically
- Save projects regularly

### Collaboration
- Export CSV files for scoring sheets
- Share project JSON files between users
- Use descriptive shape names for team coordination
- Document coordinate sources in shape names

---

**Need more help?** Check the README.md file or experiment with the "🧪 Test Import" feature to see the application in action with sample data.
