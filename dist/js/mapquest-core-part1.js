// MapQuest Pro - Core Methods Part 1
// This file contains the essential functionality methods

// Add this to the MapQuestComplete class prototype
MapQuestComplete.prototype.addOverlay = function(file) {
    const reader = new FileReader();
    reader.onload = (e) => {
        // Get current map bounds for overlay placement
        const bounds = this.map.getBounds();
        
        // Create overlay object
        const overlayId = this.nextOverlayId++;
        const overlayName = prompt('Enter a name for this overlay:', `Overlay ${overlayId}`) || `Overlay ${overlayId}`;
        
        // Create Leaflet image overlay
        const leafletOverlay = L.imageOverlay(e.target.result, bounds).addTo(this.map);
        
        // Store overlay data
        const overlay = {
            id: overlayId,
            name: overlayName,
            dataUrl: e.target.result,
            bounds: bounds,
            leafletLayer: leafletOverlay,
            opacity: 1.0,
            visible: true,
            created: new Date().toISOString()
        };
        
        this.overlays.push(overlay);
        this.activeOverlayId = overlayId;
        
        // Update UI
        this.updateOverlayControls();
        this.updateOverlayStats();
        
        this.updateStatus(`✅ Overlay "${overlayName}" imported! Total overlays: ${this.overlays.length}`);
    };
    reader.readAsDataURL(file);
};

MapQuestComplete.prototype.updateOverlayOpacity = function(value) {
    const activeOverlay = this.overlays.find(o => o.id === this.activeOverlayId);
    if (activeOverlay) {
        const opacity = value / 100;
        activeOverlay.leafletLayer.setOpacity(opacity);
        activeOverlay.opacity = opacity;
        document.getElementById('opacityValue').textContent = value + '%';
        this.updateStatus(`Overlay "${activeOverlay.name}" opacity set to ${value}%`);
    }
};

MapQuestComplete.prototype.updateMeasurementTextSize = function(size) {
    this.measurementTextSize = parseInt(size);
    document.getElementById('textSizeValue').textContent = size + 'px';
    
    // Refresh measurements if visible
    if (this.measurementsVisible) {
        this.showMeasurements();
    }
};

MapQuestComplete.prototype.toggleDrawMode = function() {
    this.drawMode = !this.drawMode;
    const btn = document.getElementById('drawMode');
    
    if (this.drawMode) {
        btn.textContent = '🛑 Stop Drawing';
        btn.classList.add('draw-mode-active');
        this.map.getContainer().style.cursor = 'crosshair';
        this.updateStatus('🎯 DRAW MODE: Click on map to add route points');
    } else {
        btn.textContent = '🎯 Draw Points';
        btn.classList.remove('draw-mode-active');
        this.map.getContainer().style.cursor = '';
        this.updateStatus('Draw mode off');
    }
};

MapQuestComplete.prototype.addRoutePoint = function(latlng, customName = null) {
    const pointNumber = this.routePoints.length + 1;
    
    // Create custom marker with delete button
    const markerHtml = `
        <div class="marker-wrapper">
            <div style="position: relative;">
                ${pointNumber}
                <div class="point-delete-btn" onclick="mapQuest.deletePoint(${pointNumber - 1}); event.stopPropagation();">×</div>
            </div>
        </div>
    `;
    
    const marker = L.marker([latlng.lat, latlng.lng], {
        icon: L.divIcon({
            className: 'draw-marker',
            html: markerHtml,
            iconSize: [20, 20],
            iconAnchor: [10, 10]
        })
    }).addTo(this.map);

    // Add popup with coordinates and delete option
    marker.bindPopup(`
        <strong>Point ${pointNumber}</strong><br>
        Lat: ${latlng.lat.toFixed(6)}<br>
        Lng: ${latlng.lng.toFixed(6)}<br>
        <button onclick="mapQuest.deletePoint(${pointNumber - 1})" 
                style="background: #e74c3c; color: white; border: none; padding: 4px 8px; border-radius: 3px; margin-top: 5px; cursor: pointer;">
            🗑️ Delete Point
        </button>
    `);

    // Create route point object
    const routePoint = {
        id: pointNumber,
        marker: marker,
        lat: latlng.lat,
        lng: latlng.lng,
        name: customName || `Point ${pointNumber}`,
        description: ''
    };

    this.routePoints.push(routePoint);

    // Connect to previous point
    if (this.routePoints.length > 1) {
        const prevPoint = this.routePoints[this.routePoints.length - 2];
        const line = L.polyline([
            [prevPoint.lat, prevPoint.lng],
            [latlng.lat, latlng.lng]
        ], {color: '#e74c3c', weight: 3}).addTo(this.map);
        this.routeLines.push(line);
    }

    // Update UI
    this.updatePointCounter();
    this.updateShapeInfo();
    document.getElementById('viewPoints').disabled = false;
    document.getElementById('exportGoogle').disabled = false;
    document.getElementById('startMission').disabled = this.routePoints.length < 2;
    document.getElementById('closeShape').disabled = this.routePoints.length < 3 || this.isShapeClosed;
    document.getElementById('saveCurrentShape').disabled = this.routePoints.length === 0;
    document.getElementById('renameShape').disabled = this.routePoints.length === 0;
    document.getElementById('newShape').disabled = this.routePoints.length === 0;

    this.updateStatus(`Route point ${pointNumber} added! Total: ${this.routePoints.length}`);
    
    // Refresh measurements if visible
    if (this.measurementsVisible) {
        this.showMeasurements();
    }
};

MapQuestComplete.prototype.updatePointCounter = function() {
    document.getElementById('pointCount').textContent = `Points: ${this.routePoints.length}`;
};

MapQuestComplete.prototype.exportToGoogle = function() {
    if (this.routePoints.length === 0) {
        alert('No route points to export! Click "🎯 Draw Points" first.');
        return;
    }
    
    const baseUrl = 'https://www.google.com/maps/dir/';
    const points = this.routePoints.map(point => `${point.lat.toFixed(6)},${point.lng.toFixed(6)}`).join('/');
    const googleUrl = baseUrl + points;
    
    // Copy to clipboard and show success
    navigator.clipboard.writeText(googleUrl).then(() => {
        this.updateStatus('✅ Google Maps URL copied to clipboard!');
        window.open(googleUrl, '_blank');
    }).catch(() => {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = googleUrl;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        this.updateStatus('✅ Google Maps URL copied to clipboard!');
        window.open(googleUrl, '_blank');
    });
};
