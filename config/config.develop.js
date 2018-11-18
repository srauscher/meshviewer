module.exports = function () {
  return {
    // Variables are NODE_ID and NODE_NAME (only a-z0-9\- other chars are replaced with _)
    'nodeInfos': [
      {
        'name': 'Clientstatistik',
        'href': 'https://map.freifunk-3laendereck.net/grafana/dashboard/db/freifunk-dreilandereck-einzelansicht?var-Knotenid={NODE_ID}&theme=light',
        'image': 'https://map.freifunk-3laendereck.net/grafana/render/d-solo/000000006/freifunk-dreilandereck-einzelansicht?refresh=5m&orgId=1&panelId=3&var-Knotenid={NODE_ID}&width=528&height=290&theme=light',
        'title': 'Clientstatistik für {NODE_ID} - weiteren Statistiken'
      }
    ],
    'globalInfos': [
      {
        'name': 'Tagesstatistik',
        'href': 'https://map.freifunk-3laendereck.net/grafana/dashboard/db/freifunk-dreilandereck-history?theme=light',
        'image': 'https://map.freifunk-3laendereck.net/grafana/render/d-solo/000000008/freifunk-dreilandereck-history?refresh=5m&orgId=1&panelId=1&width=528&height=290&theme=light',
        'title': 'Bild mit Tagesstatistik'
      },
      {
        'name': 'Wochenstatistik',
        'href': 'https://map.freifunk-3laendereck.net/grafana/dashboard/db/freifunk-dreilandereck-history?theme=light',
        'image': 'https://map.freifunk-3laendereck.net/grafana/render/d-solo/000000008/freifunk-dreilandereck-history?refresh=5m&orgId=1&panelId=2&width=528&height=290&theme=light',
        'title': 'Bild mit Wochenstatistik'
      }
    ],
    // Array of data provider are supported
    'dataPath': [
      'https://develop.freifunkkarte.de/map-data/ff3l/'
    ],
    'siteName': 'Freifunk Dreiländereck',
    'mapLayers': [
      {
        'name': 'Carto light',
        'url': 'https://develop.freifunkkarte.de/cartolite/{z}/{x}/{y}.png',
        'config': {
          'type': 'osm',
          'attribution': '&copy; OpenStreetMap contributors, &copy; CartoDB',
          'maxZoom': 19
        }
      },
      {
        'name': 'Carto dark',
        'url': 'https://develop.freifunkkarte.de/cartodark/{z}/{x}/{y}.png',
        'config': {
          'type': 'osm',
          'attribution': '&copy; OpenStreetMap contributors, &copy; CartoDB',
          'maxZoom': 19
        }
      },
      {
        'name': 'Openstreetmap',
        'url': 'https://develop.freifunkkarte.de/tiles/{z}/{x}/{y}.png',
        'config': {
          'type': 'osm',
          'attribution': 'Tiles CC-BY-SA OpenStreetMap',
          'maxZoom': 19
        }
      },
      {
        'name': 'OpenStreetMap.HOT',
        'url': 'https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png',
        'config': {
          'maxZoom': 19,
          'attribution': '&copy; Openstreetmap France | &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }
      },
      {
        'name': 'Esri.WorldImagery',
        'url': '//server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
        'config': {
          'maxZoom': 20,
          'attribution': 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
         }
      },
      {
        'name': 'OpenTopoMap',
        'url': 'https://develop.freifunkkarte.de/opentopo/{z}/{x}/{y}.png',
        'config': {
          'attribution': 'Kartendaten: © OpenStreetMap-Mitwirkende, SRTM | Kartendarstellung: © OpenTopoMap (CC-BY-SA)',
          'maxZoom': 17
        }
      }
    ],
    // Set a visible frame
    'fixedCenter': [
      // Northwest
      [
        47.8795,
        7.5407
      ],
      // Southeast
      [
        47.5042,
        7.9994
      ]
    ],
    'allCommunities': {
      'name': 'Gesamtkarte',
      'url': '/'
    },
    'domainNames': [
      {
        'domain': 'default',
        'name': 'Freifunk Dreiländereck',
        'url': 'https://map.freifunk-3laendereck.net/ff3l/'
      },
      {
        'domain': 'ff3l',
        'name': 'Freifunk Dreiländereck'
      },
      {
        'domain': 'hoho',
        'name': 'Hochrhein-Hotzenwald',
        'url': 'https://map.freifunk-3laendereck.net/ff3l-hoho/'
      },
      {
        'domain': 'wtk',
        'name': 'Waldshut-Tiengen-Klettgau',
        'url': 'https://map.freifunk-3laendereck.net/ff3l-wtk/'
      },
      {
        'domain': 'ff3l-hoho',
        'name': 'Hochrhein-Hotzenwald'
      },
      {
        'domain': 'ff3l-wtk',
        'name': 'Waldshut-Tiengen-Klettgau'
      },
      {
        'domain': 'wald',
        'name': 'Südschwarzwald',
        'url': 'https://map.freifunk-3laendereck.net/ff3l-wald/'
      },
      {
        'domain': 'wiese',
        'name': 'Wiesental',
        'url': 'https://map.freifunk-3laendereck.net/ff3l-wiese/'
      },
      {
        'domain': 'ff3l-wiese',
        'name': 'Wiesental'
      },
      {
        'domain':'loe',
        'name': 'Lörrach-Oberrhein',
        'url': 'https://map.freifunk-3laendereck.net/ff3l-loe/'
      },
      {
        'domain':'3land',
        'name': 'Dreiland',
        'url': 'https://map.freifunk-3laendereck.net/ff3l-3land/'
      },
      {
        'domain': 'ref',
        'name': 'Refugees',
        'url': 'https://map.freifunk-3laendereck.net/ff3l-ref/'
      },
      {
        'domain': 'test',
        'name': 'Testnetz',
        'url': 'https://map.freifunk-3laendereck.net/ff3l-test/'
      },
      {
        'domain': 'nalb',
        'name': 'Neckar-Alb',
        'url': 'https://map.freifunk-3laendereck.net/ff3l-nalb/'
      },
      {
        'domain': 'swb',
        'name': 'Schwarzwald-Baar',
        'url': 'https://map.freifunk-3laendereck.net/ff3l-swb/'
      },
      {
        'domain': 'ffng',
        'name': 'Nordschwarzwald-Gäu',
        'url': 'https://map.freifunk-3laendereck.net/ffng/'
      },
      {
        'site': 'ff3l-ng',
        'domain': 'ff3l-ng',
        'name': 'Nordschwarzwald-Gäu'
      },
      {
        'domain': 'ff3l-wald',
        'name': 'Südschwarzwald'
      },
      {
        'domain':'ff3l-3land',
        'name': 'Dreiland'
      },
      {
        'domain': 'fftut',
        'name': 'Tuttlingen',
        'url': 'https://map.freifunk-3laendereck.net/fftut/'
      }
    ],
    'linkList': [
      {
        'title': 'Impressum',
        'href': 'https://freifunk-3laendereck.net/impressum-mehr/',
        'target': '_blank'
      },
      {
        'title': 'Datenschutz',
        'href': 'https://freifunk-3laendereck.net/rechtliche-hinweise/',
        'target': '_blank'
      },
      {
        'title': 'Knotenliste',
        'href': 'https://www.knotenliste.de/index.html',
        'target': '_blank'
      }
    ],
    geo: [
      {
        json: function () {
          return require('helper').getJSON('https://geojson.freifunkkarte.de/hoho.geojson').then(function (result) {
            return result.features ? result.features : false;
          }, function () {
            return false;
          });
        },
        option: {
          style: {
            color: '#e23535',
            weight: 5,
            opacity: 0.4,
            fill: false,
//            fillColor: '#6de922',
//            fillOpacity: 0.05,
            interactive: false
          }
        }
      },
      {
        json: function () {
          return require('helper').getJSON('https://geojson.freifunkkarte.de/3land.geojson').then(function (result) {
            return result.features ? result.features : false;
          }, function () {
            return false;
          });
        },
        option: {
          style: {
            color: '#6de922',
            weight: 5,
            opacity: 0.4,
            fill: false,
//            fillColor: '#e23535',
//            fillOpacity: 0.05,
            interactive: false
          }
        }
      }
    ]
  };
};
