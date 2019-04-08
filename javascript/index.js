// A simple hello world microservice 
// Click "Deploy Service" to deploy this code
// Service will respond to HTTP requests with a string

module['exports'] = function alice (hook) {
	res.setHeader("Content-Type", "application/json; charset=utf-8");
  var mqtt = require('mqtt');
  let connectionArgs = {
      host: 'm24.cloudmqtt.com',
      port: 28489,
      clientId: hook.params.queryResult.session,
      username: 'nyfmvmka',
      password: '3ibNbFURtUOR',
      protocol: 'mqtts',
      secureProtocol: 'TLSv1_2_method',
    };
  
    let client = mqtt.connect(connectionArgs);
  	let intent = hook.params.queryResult.intent.displayName;
	let message = intent.split('.').pop();
  	let parameters = hook.params.queryResult.parameters;
  	intent = 'esp32/' + intent.split('.', (intent.match(/\./g) || []).length).toString().replace(/\,/gi, '/');
  
    client.on('connect', success => {
      	if (!success) hook.res.json("not success");
      
      	if (intent.indexOf('set') != -1 && message == 'temperature')
          message = parameters.temp.toString();
      	
		client.publish(intent, message, {qos: 1}, function(err)
		{
      		if (!err)
            {
              const response = {'fulfillmentText': hook.params.queryResult.fulfillmentText,'fulfillmentMessages': [{'simpleResponses': {'simpleResponses': [{'textToSpeech': message,'displayText': message}]}}], "suggestions": [{"title": "Suggestion Chips"},{"title": "suggestion 1"},{"title": "suggestion 2"}]};
              hook.res.json(response);
              client.end();
      		}
          else hook.res.json("error");
		});
    });
	//hook.res.json("aaa");
};
