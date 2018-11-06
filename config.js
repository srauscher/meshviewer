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
        'caption': 'Bild mit Tagesstatistik'
      },
      {
        'name': 'Wochenstatistik',
        'href': 'https://map.freifunk-3laendereck.net/grafana/dashboard/db/freifunk-dreilandereck-history?theme=light',
        'image': 'https://map.freifunk-3laendereck.net/grafana/render/d-solo/000000008/freifunk-dreilandereck-history?refresh=5m&orgId=1&panelId=2&width=528&height=290&theme=light',
        'caption': 'Bild mit Wochenstatistik'
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
        47.7079,
        7.5407
      ],
      // Southeast
      [
        47.5320,
        7.9994
      ]
    ],
    'domainNames': [
      {
        'site': 'ff3l',
        'domain': 'default',
        'name': 'Freifunk Dreiländereck',
        'url': '/ff3l/'
      },
      {
        'site': 'ff3l-hoho',
        'domain': 'hoho',
        'name': 'Hochrhein-Hotzenwald',
        'url': '/ff3l-hoho/'
      },
      {
        'site': 'ff3l-wtk',
        'domain': 'wtk',
        'name': 'Waldshut-Tiengen-Klettgau',
        'url': '/ff3l-wtk/'
      },
      {
        'site': 'ff3l-wald',
        'domain': 'wald',
        'name': 'Südschwarzwald',
        'url': '/ff3l-wald/'
      },
      {
        'site': 'ff3l-wiese',
        'domain': 'wiese',
        'name': 'Wiesental',
        'url': '/ff3l-wiese/'
      },
      {
        'site': 'ff3l-loe',
        'domain':'loe',
        'name': 'Lörrach-Oberrhein',
        'url': '/ff3l-loe/'
      },
      {
        'site': 'ff3l-3land',
        'domain':'3land',
        'name': 'Dreiland',
        'url': '/ff3l-3land/'
      },
      {
        'site': 'ff3l-ref',
        'domain': 'ref',
        'name': 'Refugees',
        'url': '/ff3l-ref/'
      },
      {
        'site': 'ff3l-test',
        'domain': 'test',
        'name': 'Testnetz',
        'url': '/ff3l-test/'
      },
      {
        'site': 'ff3l-nalb',
        'domain': 'nalb',
        'name': 'Neckar-Alb',
        'url': '/ff3l-nalb/'
      },
      {
        'site': 'ff3l-swb',
        'domain': 'swb',
        'name': 'Schwarzwald-Baar',
        'url': '/ff3l-swb/'
      },
      {
        'site': 'ff3l-ng',
        'domain': 'ffng',
        'name': 'Nordschwarzwald-Gäu',
        'url': '/ffng/'
      },
      {
        'site': 'fftut',
        'domain': 'fftut',
        'name': 'Tuttlingen',
        'url': '/fftut/'
      }
    ],
    'linkList': [
      {
        'title': 'Impressum',
        'href': 'https://freifunk-3laendereck.net/impressum-mehr/'
      },
      {
        'title': 'Datenschutz',
        'href': 'https://freifunk-3laendereck.net/rechtliche-hinweise/'
      },
      {
        'title': 'Knotenliste',
        'href': 'https://www.knotenliste.de/index.html'
      }
    ]
  };
};
