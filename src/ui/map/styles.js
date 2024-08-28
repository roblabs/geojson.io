module.exports = [
  {
    title: 'OSM',
    style: {
      name: 'osm',
      version: 8,
      glyphs: 'mapbox://fonts/mapbox/{fontstack}/{range}.pbf',
      sources: {
        'osm-raster-tiles': {
          type: 'raster',
          tiles: ['https://tile.openstreetmap.org/{z}/{x}/{y}.png'],
          tileSize: 256,
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }
      },
      layers: [
        {
          id: 'osm-raster-layer',
          type: 'raster',
          source: 'osm-raster-tiles',
          minzoom: 0,
          maxzoom: 22
        }
      ]
    }
  },
  {
    title: 'Park Tiles',
    style: {
      name: 'osm',
      version: 8,
      sources: {
        'npmap-raster-tiles': {
          type: 'raster',
          tiles: [
            'https://atlas-stg.geoplatform.gov/styles/v1/atlas-user/ck58pyquo009v01p99xebegr9/tiles/512/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiYXRsYXMtdXNlciIsImEiOiJjazFmdGx2bjQwMDAwMG5wZmYwbmJwbmE2In0.lWXK2UexpXuyVitesLdwUg'
          ],
          tileSize: 512,
          attribution:
            '&copy; <a href="https://www.nps.gov/maps/tools/park-tiles/">National Park Service</a>'
        }
      },
      layers: [
        {
          id: 'npmap-raster-layer',
          type: 'raster',
          source: 'npmap-raster-tiles',
          minzoom: 0,
          maxzoom: 22
        }
      ]
    }
  }
];
