// A simple hello world microservice
// Click "Deploy Service" to deploy this code
// Service will respond to HTTP requests with a string

module['exports'] = function alice (hook) {
	res.setHeader("Content-Type", "application/json; charset=utf-8");
  var mqtt = require('mqtt');
	let connectionArgs;
	var settings = /*JSON.parse(*/hook.fs.readFile('settings.json', function(err, res){
		if (err)
		{
			return res.end(err.message);
		}
		hook.res.end(res);
		/*connectionArgs = {
	      host: res.mqtt.host,//'m24.cloudmqtt.com',
	      port: res.mqtt.port,//28489,
	      clientId: hook.params.queryResult.session,
	      username: res.mqtt.username,//'nyfmvmka',
	      password: res.mqtt.password,//'3ibNbFURtUOR',
	      protocol: res.mqtt.protocol,//'mqtts',
	      secureProtocol: res.mqtt.secureProtocol,//'TLSv1_2_method',
			};*/
	});//);

    /*let client = mqtt.connect(connectionArgs);
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
              const response = {'fulfillmentText': hook.params.queryResult.fulfillmentText,'fulfillmentMessages': [{'simpleResponses': {'simpleResponses': [{'textToSpeech': message,'displayText': message}]}}]};
              hook.res.json(response);
              client.end();
      		}
          else hook.res.json("error");
		});
	});*/
	/*var response = {
  "version": "1.0",
  "session": {
    "session_id": hook.params.session.session_id,
    "message_id": hook.params.session.message_id,
    "skill_id": hook.params.session.skill_id,
    "user_id": hook.params.session.user_id
  },
  "response": {
    "text": "Я не поняла",
    "tts": null,
    "end_session": false,
    "buttons": []
  }
};*/
	//hook.res.json(response);
};
