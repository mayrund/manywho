        var manywho = {
            cdnUrl: 'https://assets.manywho.com',
            requires: ['core', 'bootstrap3'],
            initialize: function () {

                var queryParameters = manywho.utils.parseQueryString(window.location.search.substring(1));

                manywho.settings.initialize({
                    adminTenantId: 'da497693-4d02-45db-bc08-8ea16d2ccbdf',
                    playerUrl: [ location.protocol, '//', location.host, location.pathname ].join(''),
                    joinUrl: [ location.protocol, '//', location.host, location.pathname ].join(''),
                    platform: {
                      uri: 'https://flow.manywho.com'
                    }  
                });

                var options = {
                    authentication: {
                        sessionId: queryParameters['session-token'],
                        sessionUrl: queryParameters['session-url']
                    },
                    navigationElementId: queryParameters['navigation-element-id'],
                    mode: queryParameters['mode'],
                    reportingMode: queryParameters['reporting-mode'],
                    replaceUrl: false,
                    collaboration: {
                        isEnabled: false
                    },
                    inputs: null,
                    annotations: null,
                    navigation: {
                        isFixed: true,
                        isWizard: false
                    },
                    callbacks: [],
                    theme: queryParameters['theme'] != null ? queryParameters['theme'] : 'yeti'
                };

                var tenantId = queryParameters['tenant-id'];
                if (!tenantId) {
                    tenantId = window.location.pathname
                                .split('/')
                                .filter(function (path) {
                                    return path && path.length > 0;
                                })[0];
                }

                manywho.engine.initialize(
                    '*********', //insert tenant-id
                    '*********', //insert flow-id
                    queryParameters['flow-version-id'],
                    'main',
                    queryParameters['join'],
                    queryParameters['authorization'],
                    options,
                    queryParameters['initialization']
                );

            }
        };