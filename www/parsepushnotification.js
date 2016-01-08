
module.exports = {

	setUp: function(appId, clientKey) {
		var self = this;	
        cordova.exec(
            function (result) {
				if (typeof result == "string") {
					if (result == "onRegisterAsPushNotificationClientSucceeded") {
						if (self.onRegisterAsPushNotificationClientSucceeded)
							self.onRegisterAsPushNotificationClientSucceeded();
					}
/*					
					else if (result == "onUnregisterSucceeded") {
						if (self.onUnregisterSucceeded)
							self.onUnregisterSucceeded();
					}
*/					
					else if (result == "onSubscribeToChannelsSucceeded") {
						if (self.onSubscribeToChannelsSucceeded)
							self.onSubscribeToChannelsSucceeded();
					}
					else if (result == "onUnsubscribeSucceeded") {
						if (self.onUnsubscribeSucceeded)
							self.onUnsubscribeSucceeded();
					}
				}
				else {
					//if (result["event"] == "onXXX") {
					//	//result["message"]
					//	if (self.onXXX)
					//		self.onXXX(result);
					//}
				}			
			}, 
			function (error) {
				if (typeof error == "string") {
					if (error == "onRegisterAsPushNotificationClientFailed") {
						if (self.onRegisterAsPushNotificationClientFailed)
							self.onRegisterAsPushNotificationClientFailed();
					}
/*					
					else if (result == "onUnregisterFailed") {
						if (self.onUnregisterFailed)
							self.onUnregisterFailed();
					}
*/
					else if (error == "onSubscribeFailed") {
						if (self.onSubscribeToChannelsFailed)
							self.onSubscribeToChannelsFailed();
					}
					else if (error == "onUnsubscribeFailed") {
						if (self.onUnsubscribeFailed)
							self.onUnsubscribeFailed();
					}					
				}
				else {
					//if (result["event"] == "onXXX") {
					//	//result["message"]
					//	if (self.onXXX)
					//		self.onXXX(result);
					//}
					alert("Error: " + error);
				}			
			},
            'ParsePushNotificationPlugin',
            'setUp',			
            [appId, clientKey]
        ); 
    },
/*	
	registerAsPushNotificationClient: function() {
		var self = this;	
        cordova.exec(
            null,
            null,
            'ParsePushNotificationPlugin',
            'registerAsPushNotificationClient',
            []
        ); 
    },
    unregister: function() {
		var self = this;	
        cordova.exec(
            null,
            null,
            'ParsePushNotificationPlugin',
            'unregister',
            []
        ); 
    },	
*/	
	subscribeToChannels: function(channels) {
		var self = this;	
        cordova.exec(
            null,
            null,
            'ParsePushNotificationPlugin',
            'subscribeToChannels',
            [channels]
        ); 
    },
    unsubscribe: function(channels) {
		var self = this;	
        cordova.exec(
            null,
            null,
            'ParsePushNotificationPlugin',
            'unsubscribe',
            [channels]
        ); 
    },
	onRegisterAsPushNotificationClientSucceeded: null,
	onRegisterAsPushNotificationClientFailed: null,
/*	
	onUnregisterSucceeded: null,
	onUnregisterFailed: null,	
*/	
	onSubscribeToChannelsSucceeded: null,
	onSubscribeToChannelsFailed: null,
	onUnsubscribeSucceeded: null,
	onUnsubscribeFailed: null	
};

