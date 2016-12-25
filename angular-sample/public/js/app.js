(function(){


  $(function() {
      FastClick.attach(document.body);
  });

  // A list of the languages for which we supply a message file. These values must
  // match exactly the suffixes of the message files eg messages-pt-br.json.
  var supportedLanguages = ['de', 'en', 'es', 'fr', 'it', 'ja', 'ko', 'pt-br', 'zh-hans', 'zh-hant'];

  function Translation(){
  }

  function TranslationProvider($translateProvider, $translatePartialLoaderProvider){

    this.setup = function(path){
      path = path || '/node_modules/@watson-iot/dashboard/nls';

      $translateProvider.useLoader('$translatePartialLoader', {
        urlTemplate: path + '/{part}/messages-{lang}.json'
      })
      .registerAvailableLanguageKeys(
        // A list of the languages for which we supply a message file
        supportedLanguages,
        {
          // A map of language variants to languages in the above list. There should be a
          // wildcard entry in this list for each language we support that has variants.
          'de_*' : 'de',
          'en_*' : 'en',
          'es_*' : 'es',
          'fr_*' : 'fr',
          'it_*' : 'it',
          'ja_*' : 'ja',
          'ko_*' : 'ko',
          'pt_*' : 'pt-br',
          'pt'   : 'pt-br',
          'zh_CN': 'zh-hans',
          'zh_HK': 'zh-hant',
          'zh_TW': 'zh-hant',
          'zh_*' : 'zh-hans',
          'zh'   : 'zh-hans',
          // Fall back to English if the language is neither in the above list nor matched by
          // an entry in this map.
          '*'    : 'en'
        })
      .fallbackLanguage('en') // Fall back to English for keys that are missing in a message file
      .determinePreferredLanguage();
    };

    this.addNLSFolder = function(folder){
      $translatePartialLoaderProvider.addPart(folder);
    };

    this.$get = [function translationFactory() {
      return new Translation();
    }];
  }

  angular
    .module('iotui.common.TranslationProvider', ['pascalprecht.translate'])
    .provider('translation', TranslationProvider)
    .constant('SUPPORTED_LANGUAGES', supportedLanguages);
}());

var myApp = angular.module('myApp', ['react', 'iotui.common.TranslationProvider', 'pascalprecht.translate', 'ngPromiseExtras','ngRoute'])

.config( function myAppConfig ( translationProvider,$routeProvider ) {
  "nginject";

  // For the dashboard we want to load the NLS strings before we load the dashboard
  $routeProvider
          .otherwise({
              templateUrl: 'content',
              controller: 'AppController',
              controllerAs: 'ctrl',
              resolve: {
                  nlsReact: function($rootScope, $location, $q, $http, $translate){
                  var deferred = $q.defer();

                  var flatten = function(data) {
                        var res = {};
                        function rec(cur, prop) {
                            if (Object(cur) !== cur) {
                                res[prop] = cur;
                            } else if (Array.isArray(cur)) {
                                for(var i=0, l=cur.length; i<l; i++) {
                                    rec(cur[i], prop + "[" + i + "]");
                                }
                                if (l === 0) {
                                    res[prop] = [];
                                }
                            } else {
                                var isEmpty = true;
                                for (var p in cur) {
                                    isEmpty = false;
                                    rec(cur[p], prop ? prop+"."+p : p);
                                }
                                if (isEmpty && prop) {
                                    res[prop] = {};
                                }
                            }
                        }
                        rec(data, "");
                        return res;
                    };

                  var format = function(format) {
                      var args = Array.prototype.slice.call(arguments, 1);
                      return format.replace(/{(\d+)}/g, function(match, number) {
                        return typeof args[number] != 'undefined' ? args[number] : match;
                        });
                    };

                    var createNLS = function(res,def,trans){
                      var NLS = function() {
                          var self = this;

                          self.resolve = function(key, args) {
                              if (self.cache["react-modules."+key]) {
                                return format.apply(self, [self.cache["react-modules."+key]].concat(Array.prototype.slice.call(arguments, 1)));
                              } else {
                                  return key;
                              }
                          };
                          self.cache = flatten(res.data["react-modules"]);

                          if(trans){
                            $translate(Object.keys(self.cache).map(function(key) {
                                return "react-modules." + key;
                            })).then(function(translations) {
                                self.cache = translations;
                            });
                          }
                      };

                      $rootScope.nlsReact = new NLS();

                      def.resolve();
                    }

                    var loadNLS = function(){
                      $http({
                            method: 'GET',
                            url: $location.absUrl().split("/")[0] + 'node_modules/@watson-iot/dashboard/nls/react-modules/messages-en.json'
                        }).then(function success(response) {
                            createNLS(response,deferred,true);
                        });
                    }

                   // cache the translation for react-modules and save on the root scope.
                    $rootScope.$on("$translateChangeSuccess", function(evt) {
                        loadNLS();
                    });

                    if($translate.use()==="en"){
                      loadNLS();
                    }

                    return deferred.promise;
                },
                ltpa:function($rootScope,$q, $http){
                  var deferred = $q.defer();
                  $http({
                            method: 'GET',
                            url: '/getcredentials'
                        }).then(function success(response) {
                            if(response.data.ltpa){
                              var ltpa = response.data.ltpa.indexOf('LtpaToken2=') !=-1?response.data.ltpa.slice(11):response.data.ltpa;
                              $rootScope.ltpa = ltpa;
                            }
                            else{
                              $rootScope.ltpa = null;
                            }
                            deferred.resolve();
                        });
                  return deferred.promise;
                }
              }
          });

  translationProvider.setup();
  // Repeat this line for each subdirectory of /nls that contains message files
  translationProvider.addNLSFolder('react-modules');
});

merge = function() {
  var res = {};
  for (var i = 0; i < arguments.length; ++i) {
    if (arguments[i]) {
      Object.assign(res, arguments[i]);
    }
  }
  return res;
}

var defaultTheme = {
  "canvas": "#142a36",
  "lightText": "#F7F7F7",
  "border": "#E6E6E6",
  "title": "#F7F7F7",
  "titleText": "#899399",
  "content": "#FDFDFD",
  "major": "#2E3636",
  "minor": "#899399",
  "accent": "#4581E0",
  "good": "#8CD210",
  "bad": "#FF5050",
  "font": "'Helvetica Neue',HelveticaNeue,Helvetica,'Segoe UI',Segoe,Calibri,Roboto,'Droid Sans','Arial Unicode MS',Arial,sans-serif",
  "logo": "/assets/dashboard/iot.jpg",

  "light": "#c7c7c7",
  "normal": "#959595",
  "dark": "#5a5a5a",

  "chart": ["#5596E6", "#4178BE", "#325C80", "#264A60", "#1D3649", "#323c3c", "#3c4646", "#5a6464", "#6d7777", "#959f9f"],

  "schemes": [
    { // green
      "name": 0,
      "light": "#c8d2d2",
      "normal": "#8cd211",
      "dark": "#4b8400"
    }
  ]
}

myApp.controller('AppController', ['$rootScope', '$scope', '$http', '$q', '$translate', function($rootScope, $scope, $http, $q, $translate) {


  $rootScope.$on("$translateLoadingSuccess", function(evt, data) {
    console.log(evt, data);

  });

  var flatten = function(data) {
    var res = {};
    function rec(cur, prop) {
      if (Object(cur) !== cur) {
        res[prop] = cur;
      } else if (Array.isArray(cur)) {
        for(var i=0, l=cur.length; i<l; i++) {
          rec(cur[i], prop + "[" + i + "]");
        }
        if (l == 0) {
          res[prop] = [];
        }
      } else {
        var isEmpty = true;
        for (var p in cur) {
          isEmpty = false;
          rec(cur[p], prop ? prop+"."+p : p);
        }
        if (isEmpty && prop) {
          res[prop] = {};
        }
      }
    }
    rec(data, "");
    return res;
  }

  var format = function(format) {
    var args = Array.prototype.slice.call(arguments, 1);
    return format.replace(/{(\d+)}/g, function(match, number) {
      return typeof args[number] != 'undefined'
        ? args[number]
        : match;
      });
  };

  function NLS() {
    /*
     *  Ideal approach, but we need to preload the cache before instatiating the react components
     */
    this.resolve = function(key, args) {
      var orgArgs = args;
      args = args + "" || ""; // FLM: There was a JSON.stringify which added extra " " around the arg.
      var temp = key + args;
      if (this.cache[key]) {
        var result =  format.apply(this, [this.cache[key]].concat(Array.prototype.slice.call(arguments, 1)));
        return result;
      } else if (this.cache[key + args]) {
        return this.cache[key + args];
      } else {
        var self = this;
        $translate("react-modules."+key, orgArgs)
          .then(function(result) {
            console.log(key + args  + ": " + result);
            self.cache[key + args] = result;
          });
        return key;
      }
    }.bind(this);
    this.cache = { test: "test" };
    /*/

    /*
     *  Temporary approach
     */
    this.tempResolve = function(key, args) {
      //console.log(key, args, this.cache[key]);
      if (this.cache[key]) {
        return this.cache[key];
      } else {
        console.log("!!! NLS KEY MISSING for: " + key + "!!!")
        return key;
      }
    }
    this.cache = { test: "test" };
//
//    If you're missing NLS strings here or want to add new ones, please do it in the nls files (/nls/react-modules/messages-LANGUAGE_CODE.json)
//

  }
  $scope.SampleTableProps = {
    emitter: {
      emit: function(key, value) {
        console.log("emitter.emit", key, value);
        $rootScope.$emit(key, value);
      }
    },
    nls: new NLS()
  };
  $scope.sampleTableMouseOverData = "";

  $rootScope.$on("SampleTable.MouseOverData", function(evt, data) {
    console.log(data);
    $scope.sampleTableMouseOverData = data.value;
    $scope.$apply();
  });

  $rootScope.$on("ReactDialog.Close", function(evt, data) {
    console.log(data);
    $scope.AAADialogAddMemberProps.visible = false;
    $scope.AAADialogUserDetailsProps.visible = false;
    $scope.AAADialogAddApiKeyProps.visible = false;
    $scope.AAADialogEditApiKeyProps.visible = false;
    $scope.AAADialogInviteMemberProps.visible = false;
    $scope.$apply();
  });

  $rootScope.$on('FAVOURITE_DASHBOARDS',function(evt,data){
    // Update som external stuff here
  });

  $scope.AAADialogAddMemberProps = {
    theme: defaultTheme,
    nls: new NLS(),
    visible: false,
    emitter: {
      emit: function(key, value) {
        console.log("emitter.emit", key, value);
        $rootScope.$emit(key, value);
      }
    }
  };

  $scope.AAADialogUserDetailsProps = {
    theme: defaultTheme,
    nls: new NLS(),
    visible: false,
    emitter: {
      emit: function(key, value) {
        console.log("emitter.emit", key, value);
        $rootScope.$emit(key, value);
      }
    }
  };

  $scope.AAADialogAddApiKeyProps = {
    theme: defaultTheme,
    nls: new NLS(),
    visible: false,
    emitter: {
      emit: function(key, value) {
        console.log("emitter.emit", key, value);
        $rootScope.$emit(key, value);
      }
    }
  };

  $scope.AAADialogEditApiKeyProps = {
    theme: defaultTheme,
    nls: new NLS(),
    visible: false,
    emitter: {
      emit: function(key, value) {
        console.log("emitter.emit", key, value);
        $rootScope.$emit(key, value);
      }
    }
  };

  $scope.AAADialogInviteMemberProps = {
    theme: defaultTheme,
    nls: new NLS(),
    visible: false,
    emitter: {
      emit: function(key, value) {
        console.log("emitter.emit", key, value);
        $rootScope.$emit(key, value);
      }
    }
  };

  $scope.triggerDashboard = function(action,id) {
    IoTFComponents.Dashboard.callAction(action,id);
  };

  $rootScope.$on("Dashboard.inOverview", function(evt, data) {
    $scope.inOverview = data;
    $scope.$apply();
  });
  $rootScope.$on("Dashboard.inEditMode", function(evt, data) {
    $scope.showEdit = data;
    $scope.$apply();
  });
  $rootScope.$on("Dashboard.notification", function(evt, data) {
    console.log("#############################");
    console.log(evt);
    console.log(data);
    // do something
  });
  $scope.loadConfig = function(configURL) {
    // Specify your test config
    // Note: Default dashboards are now handled in the DashboardConfig as setting
    if (configURL) {
      $.ajax({
          url: configURL,
          async: false,
          dataType: 'json',
          success: function (response) {
          $scope.DashboardProps.dashboardConfig = response;
          if(response.settings["hideCredentialDialog"]){
            $scope.DashboardProps.auth.ltpa = $rootScope.ltpa;
          }
          }
      });
    }
  };

  $scope.inOverview = true;

  var getLandingPage = function(){
    var lp = undefined;
    var standaloneUser = localStorage.getItem('Dashboard_User')
    var localStorageLP = localStorage.getItem('Dashboard_LandingPage_'+standaloneUser);
    if(localStorageLP && localStorageLP !== '0000'){
      lp = localStorageLP;
      $scope.inOverview = false;
    }
    return lp;
  }


  var landingPageId = getLandingPage();


  $scope.DashboardProps = {
    auth: {
      roleAuthService: {isAllowed: function(id){return true}}, // No role checking for standalone
    },
    nls: $rootScope.nlsReact,
    emitter: {
      emit: function(key, value) {
        console.log("emitter.emit", key, value);
        $rootScope.$emit(key, value);
      }
    },
    selectedDashboard:landingPageId,
    experimental: false,
    remoteContent: [],
    orgUsers: [{id:'m:orgid:markus.juettner@de.ibm.com',email:'markus.juettner@de.ibm.com'},{id:'m:orgid:mielke@de.ibm.com',email:'mielke@de.ibm.com'},{id:'m:orgid:robter.thosssssssssssssssssssssssssssssssssssssssssssssssssssssss@de.ibm.com',email:'robert.thosssssssssssssssssssssssssssssssssssssssssssssssssssssss@de.ibm.com'}]// add a set of custom card urls (array of "name" and "url" entries)

  };

}]);

myApp.value('Dashboard', window.Dashboard);
myApp.value('SampleTable', window.SampleTable);
