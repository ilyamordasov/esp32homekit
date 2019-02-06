{
  "version": {
    "type": "string",
    "default": "1.0",
    "required": false
  },
  "session": {
    "session_id": {
      "type": "string",
      "default": "",
      "required": true
    },
    "message_id": {
      "type": "number",
      "default": 0,
      "required": true
    },
    "skill_id": {
      "type": "string",
      "default": "",
      "required": true
    },
    "user_id": {
      "type": "string",
      "default": "",
      "required": true
    }
  },
  "response": {
    "text": {
      "type": "string",
      "default": "Я не поняла",
      "required": true
    },
    "tts": {
      "type": "string",
      "default": null,
      "required": false
    },
    "end_session": {
      "type": "boolean",
      "default": false,
      "required": false
    },
    "buttons": {
        "type": "array",
        "default": [],
        "required": false
    }
  }
}
